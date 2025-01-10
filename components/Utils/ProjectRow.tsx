import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  logoUrl: string;
  readme: string;
  commitCount: string;
}

interface ProjectRowProps {
  projects: Project[];
}

export default function ProjectRow({ projects }: ProjectRowProps) {
  const duplicatedProjects = [...projects, ...projects, ...projects];

  const handleClick = (logoUrl: string) => {
    const githubUrl = logoUrl.replace(/^https:\/\/opengraph\.githubassets\.com\/\d+\//, 'https://github.com/');
    window.open(githubUrl, '_blank');
  };

  return (
    <div className="w-full h-auto mx-auto overflow-hidden relative py-4">
      <div className="flex gap-4 animate-scroll">
        {duplicatedProjects.map((project, index) => (
          <div
            key={index}
            className="flex-none hover:bg-[#1e1e1ea1] ease-in-out cursor-pointer w-72 bg-[rgba(26,26,26,0.63)] h-auto rounded-xl p-4"
            onClick={() => handleClick(project.logoUrl)}
          >
            <Image
              src={project.logoUrl}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className="mt-3 px-4">
              <h3 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-2">
                {project.description || project.readme.substring(0, 100)}
              </p>
              <div className="flex items-center">
                <Image src="/commit.svg" width={35} height={35} alt="Commit" />
                <p className="text-gray-400 text-sm ml-2">{project.commitCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
