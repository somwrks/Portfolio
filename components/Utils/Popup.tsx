"use client";

import React, { useState, useRef } from "react";
import { Accordion, AccordionItem, Button, Image } from "@nextui-org/react";

interface PopupProps {
  section: string;
  isClosing: boolean;
  onClose: () => void;
  experiences: any[];
  projects: any[];
  stories: any[];
}

export default function Popup({
  section,
  isClosing,
  onClose,
  experiences,
  projects,
  stories,
}: PopupProps) {
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [currentDrag, setCurrentDrag] = useState(0);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setDragStart(clientY);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStart === null) return;

    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const delta = clientY - dragStart;

    if (delta > 0) {
      setCurrentDrag(delta);
    }
  };

  const handleTouchEnd = () => {
    if (currentDrag > 150) {
      onClose();
    }
    setDragStart(null);
    setCurrentDrag(0);
  };

  const getData = () => {
    switch (section) {
      case "projects":
        return projects;
      case "experiences":
        return experiences;
      case "stories":
        return stories;
      default:
        return [];
    }
  };

  const data = getData();
  console.log("Data extracted ",data)
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(getData());

  // Update the topic selection handler
  const handleTopicSelect = (topic: string) => {
    setSelectedTopics((prev) => { 
      const newTopics = prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic];

      // Update filtered data based on selected topics
      if (newTopics.length === 0) {
        setFilteredData(getData());
      } else {
        setFilteredData(
          getData().filter((item: any) =>
            newTopics.some((topic) => item.topics?.includes(topic))
          )
        );
      }

      return newTopics;
    });
  };
  const getUniqueTopics = () => {
    if (section !== "projects") return [];
    const topics = new Set<string>();
    projects.forEach((project) => {
      project.topics.forEach((topic: string) => topics.add(topic));
    });
    return Array.from(topics);
  };

  return (
    <div
      ref={popupRef}
      className={`bg-[#0E0E0E] absolute z-50 w-11/12 md:w-2/5 rounded-3xl px-6 pb-8 mt-4 bottom-0 h-[90vh] flex flex-col ${
        isClosing ? "slide-out" : "slide-in"
      }`}
      style={{
        transform: `translateY(${currentDrag}px)`,
        transition: dragStart ? "none" : "transform 0.3s ease-out",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Draggable handle */}
      <div
        className="w-full flex justify-center py-2 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        <div className="w-12 h-1.5 bg-gray-600 rounded-full" />
      </div>

      <h1 className="text-white text-center text-4xl font-bold my-6 capitalize">
        {section}
      </h1>

      {section === "projects" && (
        <div className="md:flex hidden  flex-wrap gap-2 mb-4 px-2 items-center justify-between">
          {getUniqueTopics().map((topic) => (
            <div
              key={topic}
              className={`${
                selectedTopics.includes(topic)
                  ? "bg-[#ffffff] text-black"
                  : "bg-[#343434a1] text-gray-300 hover:bg-[#161616]"
              } cursor-pointer transition-all w-24 py-1 text-xs text-center`}
              onClick={() => handleTopicSelect(topic)}
            >
              {topic === "artificial-intelligence"
                ? "AI"
                : topic === "website-development"
                ? "Web Dev"
                : topic === "app-development"
                ? "App Dev"
                : topic === "library-development"
                ? "Lib Dev"
                : topic === "desktop-development"
                ? "Desktop Dev"
                : topic === "hackathon-project"
                ? "Hackathon"
                : topic === "bot-development"
                ? "Bot Dev"
                : topic === "notes"
                ? "Notes"
                : topic === "embedded-systems"
                ? "Embedded"
                : topic === "cli-application"
                ? "CLI"
                : topic}
            </div>
          ))}
        </div>
      )}

      <div className="md:hidden block">
        <Accordion variant="light" selectionMode="single" className="px-2">
          <AccordionItem
            key="filters"
            aria-label="Filter Projects"
            textValue="Filter Projects"
            className="text-white"
            title="Filter Projects"
          >
            <div className="flex justify-between flex-wrap gap-2 mb-4">
              {getUniqueTopics().map((topic) => (
                <div
                  key={topic}
                  className={`${
                    selectedTopics.includes(topic)
                      ? "bg-[#ffffff] text-black"
                      : "bg-[#343434a1] text-gray-300 hover:bg-[#161616]"
                  } cursor-pointer  transition-all w-1/4 py-1 text-xs text-center`}
                  onClick={() => handleTopicSelect(topic)}
                >
                  {topic === "artificial-intelligence"
                    ? "AI"
                    : topic === "website-development"
                    ? "Web Dev"
                    : topic === "app-development"
                    ? "App Dev"
                    : topic === "library-development"
                    ? "Lib Dev"
                    : topic === "desktop-development"
                    ? "Desktop Dev"
                    : topic === "hackathon-project"
                    ? "Hackathon"
                    : topic === "bot-development"
                    ? "Bot Dev"
                    : topic === "notes"
                    ? "Notes"
                    : topic === "embedded-systems"
                    ? "Embedded"
                    : topic === "cli-application"
                    ? "CLI"
                    : topic}
                </div>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-6 overflow-hidden-custom flex-grow">
        {section == "projects" ? (
          <>
            {filteredData.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  if (section == "projects") {
                    const githubUrl = item.logoUrl.replace(
                      /^https:\/\/opengraph\.githubassets\.com\/\d+\//,
                      "https://github.com/"
                    );
                    window.open(githubUrl, "_blank");
                  }
                }}
                className="flex gap-4  bg-[#1A1A1A] p-4 hover:bg-[#161616] cursor-pointer rounded-xl h-32"
              >
                <Image
                  src={section == "projects" ? item.logoUrl : item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-lg w-24 h-24 min-w-[96px] object-cover"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-white md:text-xl font-semibold truncate">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-2 text-sm">
                    {item.description}
                  </p>
                  {section == "projects" && (
                    <div className="flex flex-row w-full gap-x-3 ">
                      {item.topics.map((skill: string, index: number) => (
                        <div
                          color="default"
                          key={index}
                          className="bg-[#343434a1] text-gray-300  w-24 py-1 text-xs text-center "
                        >
                          {skill == "artificial-intelligence"
                            ? "AI"
                            : skill == "website-development"
                            ? "Web Dev"
                            : skill == "app-development"
                            ? "App Dev"
                            : skill == "library-development"
                            ? "Lib Dev"
                            : skill == "desktop-development"
                            ? "desktop-dev"
                            : skill == "hackathon-project"
                            ? "Hackathon"
                            : skill == "bot-development"
                            ? "Bot Dev"
                            : skill == "notes"
                            ? "Notes"
                            : skill == "embedded-systems"
                            ? "embedded"
                            : skill == "desktop-development"
                            ? "desktop"
                            : skill === "cli-applications"
                            ? "CLI"
                            : "None"}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (section == "projects") {
                  const githubUrl = item.logoUrl.replace(
                    /^https:\/\/opengraph\.githubassets\.com\/\d+\//,
                    "https://github.com/"
                  );
                  window.open(githubUrl, "_blank");
                }
              }}
              className="flex gap-4  bg-[#1A1A1A] p-4 hover:bg-[#161616] cursor-pointer rounded-xl h-32"
            >
              <Image
                src={section == "projects" ? item.logoUrl : item.image}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-lg w-24 h-24 min-w-[96px] object-cover"
              />
              <div className="flex flex-col justify-between">
                <h3 className="text-white text-xl font-semibold truncate">
                  {item.title}
                </h3>
                <p className="text-gray-400 line-clamp-2 text-sm">
                  {item.description}
                </p>
                {section == "projects" && (
                  <div className="flex flex-row w-full gap-x-3 ">
                    {item.topics.map((skill: string, index: number) => (
                      <div
                        color="default"
                        key={index}
                        className="bg-[#343434a1] text-gray-300  w-24 py-1 text-xs text-center "
                      >
                        {skill == "artificial-intelligence"
                          ? "AI"
                          : skill == "website-development"
                          ? "Web Dev"
                          : skill == "app-development"
                          ? "App Dev"
                          : skill == "library-development"
                          ? "Lib Dev"
                          : skill == "desktop-development"
                          ? "desktop-dev"
                          : skill == "hackathon-project"
                          ? "Hackathon"
                          : skill == "bot-development"
                          ? "Bot Dev"
                          : skill == "notes"
                          ? "Notes"
                          : skill == "embedded-systems"
                          ? "embedded"
                          : skill == "cli-application"
                          ? "CLI"
                          : "None"}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
