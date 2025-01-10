"use client";
import React from 'react';
import { useData } from '../context/DataContext';
import SkillRow from './SkillRow';
import ProjectRow from './ProjectRow';

export default function LandingPage() {
    const { resumeData, projectsData, storiesData, isLoading } = useData();
    console.log(resumeData)
    console.log(projectsData)


    // Split skills into 4 groups
    const skillGroups = Array.from({ length: 3 }, (_, i) => 
        resumeData.skills.slice(
            i * Math.ceil(resumeData.skills.length / 3),
            (i + 1) * Math.ceil(resumeData.skills.length / 3)
        )
    );

    return (
        <div className="flex flex-col gap-y-32  w-full overflow-hidden">
            <div className="w-full">
            <ProjectRow 
                projects={projectsData.projects}
            />
            </div>
            <div className="flex flex-col  space-y-4 w-full">
                {skillGroups.map((skills, index) => (
                    <SkillRow 
                        key={index}
                        skills={skills}
                        direction={index % 2 === 0 ? 'left' : 'right'}
                        speed={20 + index * 5} 
                    />
                ))}
            </div>
        </div>
    );
}
