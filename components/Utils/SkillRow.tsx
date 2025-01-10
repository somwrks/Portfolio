// components/SkillRow.tsx
import React from "react";
import { Button } from "@nextui-org/react";

export default function SkillRow({
  skills,
  direction = "left",
  speed = 30,
}: {
  skills: string[];
  direction?: "left" | "right";
  speed?: number;
}) {
  // Triple the skills array to ensure smooth looping
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="relative flex overflow-hidden">
      <div className="flex shrink-0 gap-4">
        <div
          className="flex shrink-0 gap-4 animate-scroll"
          style={{
            animation: `scroll${
              direction === "left" ? "Left" : "Right"
            } ${speed}s linear infinite`,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <Button
              color="default"
              key={index}
              className="bg-[#1a1a1aa1] text-gray-300 w-32 h-7 py-1 text-sm text-center shrink-0"
            >
              {skill}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
