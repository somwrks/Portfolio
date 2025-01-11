import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";
import fs from 'fs/promises';
import path from 'path';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const ROOT_DIRECTORY = path.join(process.cwd(), 'public', 'data');
const FILE_NAME = "repositories.json";

async function fetchFromGitHub(username: string) {
  const repos = await octokit.rest.repos.listForUser({ 
    username,
    per_page: 100
  });

  const projects = await Promise.all(repos.data.map(async (repo) => {
    let readme = "";
    let commitCount = 0;
    let latestCommitDate: string | null = null;
    const logoUrl = `https://opengraph.githubassets.com/1/${username}/${repo.name}`;
    let topics: string[] = [];
    
    try {
      const readmeResponse = await octokit.rest.repos.getReadme({
        owner: username,
        repo: repo.name,
      });
      readme = Buffer.from(readmeResponse.data.content, 'base64').toString('utf-8');
      
      const commitsResponse = await octokit.rest.repos.listCommits({
        owner: username,
        repo: repo.name,
        per_page: 1
      });
      
      if (commitsResponse.data.length > 0 && commitsResponse.data[0].commit.author?.date) {
        latestCommitDate = commitsResponse.data[0].commit.author.date;
        commitCount = commitsResponse.data[0].commit.comment_count;
      }

      const linkHeader = commitsResponse.headers.link;
      if (linkHeader) {
        const totalCommitsMatch = linkHeader.match(/page=(\d+)>; rel="last"/);
        if (totalCommitsMatch) {
          commitCount = parseInt(totalCommitsMatch[1], 10);
        }
      }

      // Fetch topics for the repository
      const topicsResponse = await octokit.rest.repos.getAllTopics({
        owner: username,
        repo: repo.name,
      });
      topics = topicsResponse.data.names;
    } catch (error) {
      console.log(`Failed to fetch data for ${repo.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    return {
      title: repo.name,
      description: repo.description || "",
      readme: readme,
      logoUrl: logoUrl,
      commitCount: commitCount,
      latestCommitDate: latestCommitDate,
      topics: topics
    };
  }));

  // Sort projects by latest commit date
  projects.sort((a, b) => {
    if (a.latestCommitDate && b.latestCommitDate) {
      return new Date(b.latestCommitDate).getTime() - new Date(a.latestCommitDate).getTime();
    }
    return 0;
  });

  return projects;
}


async function saveToFile(data: any) {
  const filePath = path.join(ROOT_DIRECTORY, FILE_NAME);
  await fs.mkdir(ROOT_DIRECTORY, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function readFromFile() {
  const filePath = path.join(ROOT_DIRECTORY, FILE_NAME);
  try {
    console.log("read from file "+ filePath);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

export async function GET() {
  try {
    const username = "ashworks1706";
    const now = new Date();
    let data = await readFromFile();

    if (!data || new Date(data.nextFetch) <= now) {
      const projects = await fetchFromGitHub(username);
      const nextFetch = new Date(now.getTime() + 7 * 60 * 60 * 1000).toISOString(); // 7 hours from now
      data = { projects, nextFetch };
      await saveToFile(data);
    }

    return NextResponse.json({ projects: data.projects });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch repositories" }, { status: 500 });
  }
}
