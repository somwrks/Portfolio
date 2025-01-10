import { NextResponse } from "next/server";
import { GoogleAuth } from 'google-auth-library';
import pdfParse from 'pdf-parse';
import path from 'path';
import fs from 'fs/promises';
import axios from "axios";

const ROOT_DIRECTORY = path.join(process.cwd(), 'public', 'data');
const FILE_NAME = 'resumeData.json';

async function ensureDirectoryExists(directory) {
  try {
    await fs.mkdir(directory, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

async function readFromFile() {
  const filePath = path.join(ROOT_DIRECTORY, FILE_NAME);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

async function saveToFile(data) {
  const filePath = path.join(ROOT_DIRECTORY, FILE_NAME);
  await ensureDirectoryExists(ROOT_DIRECTORY);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function fetchAndProcessResume() {
  const fileId = '165w5EF5gtC2w7vRot5xZiRWuhIg38A4z';
  const credentialsPath = path.join(process.cwd(), 'google.json');
  const credentials = JSON.parse(await fs.readFile(credentialsPath, 'utf-8'));
  const auth = new GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/drive.readonly']
  });

  const client = await auth.getClient();
  const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${(await client.getAccessToken()).token}`
    },
    responseType: 'arraybuffer'
  });

  const pdfData = response.data;
  const data = await pdfParse(Buffer.from(pdfData));
  const text = data.text;

  // Process the text and extract sections (education, experience, etc.)
  // ... (rest of the processing logic remains the same)

  
  const sections = {
    education: [] as unknown[],
    experience: [] as unknown[],
    projects: [] as unknown[],
    skills: [] as string[],
    achievements: [] as unknown[]
  };

  const sectionRegex = {
    education: /EDUCATION([\s\S]*?)(?=EXPERIENCE|$)/i,
    experience: /EXPERIENCE([\s\S]*?)(?=PROJECTS|$)/i,
    projects: /PROJECTS([\s\S]*?)(?=SKILLS|$)/i,
    skills: /SKILLS([\s\S]*?)(?=ACHIEVEMENTS|$)/i,
    achievements: /ACHIEVEMENTS([\s\S]*?)(?=$)/i
  };

  const eduMatch = text.match(sectionRegex.education);
  if (eduMatch) {
    const eduLines = eduMatch[1].trim().split('\n');
    sections.education = eduLines.filter(line => line.trim()).map(line => ({
      degree: line.split(',')[0],
      details: line
    }));
  }

  const expMatch = text.match(sectionRegex.experience);
  if (expMatch) {
    const expText = expMatch[1];
    const experiences = expText.split(/(?=\w+,\s*\w+\s*(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s*\d{4})/g);
    
    sections.experience = experiences.map(exp => {
      const lines = exp.trim().split('\n');
      return {
        title: lines[0],
        details: lines.slice(1).filter(l => l.trim().startsWith('•')).map(l => l.trim())
      };
    });
  }

  const projMatch = text.match(sectionRegex.projects);
  if (projMatch) {
    const projects = projMatch[1].split(/(?=\w+\s*\|)/g);
    sections.projects = projects.map(proj => {
      const lines = proj.trim().split('\n');
      return {
        name: lines[0].split('|')[0].trim(),
        technologies: lines[0].split('|').slice(1).join('|').trim().split(','),
        details: lines.slice(1).filter(l => l.trim())
      };
    });
  }

  const skillsMatch = text.match(sectionRegex.skills);
  if (skillsMatch) {
    sections.skills = skillsMatch[1].trim().split(',').map(s => s.trim());
  }

  const achieveMatch = text.match(sectionRegex.achievements);
  if (achieveMatch) {
    const achievements = achieveMatch[1].split('\n').filter(l => l.trim());
    sections.achievements = achievements.map(achievement => ({
      title: achievement.split(',')[0],
      details: achievement
    }));
  }

  return sections;
}

export async function GET() {
  try {
    const now = new Date();
    let data = await readFromFile();

    if (!data || new Date(data.nextFetch) <= now) {
      const sections = await fetchAndProcessResume();
      const nextFetch = new Date(now.getTime() + 2 * 60 * 60 * 1000).toISOString(); // 2 hours from now
      data = { sections, nextFetch };
      await saveToFile(data);
    }

    return NextResponse.json(data.sections);
  } catch (error) {
    console.error('Error processing resume:', error);
    return NextResponse.json(
      { error: 'Failed to process resume' },
      { status: 500 }
    );
  }
}
