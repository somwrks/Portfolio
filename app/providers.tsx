"use client";
import React from "react";
import { useState, useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import LoadingComponent from '../components/Utils/LoadingComponent';
import { DataContext } from '../components/context/DataContext';

export function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [resumeData, setResumeData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);
  const [storiesData, setStoriesData] = useState(null);

  const fetchAllData = async () => {
    try {
      const responses = await Promise.all([
        fetch('/api/getResume'),
        fetch('/api/getProjects'),
        fetch('/api/fetchStories')
      ]);

      const [resume, projects, stories] = await Promise.all(
        responses.map(async (response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
      );

      setResumeData(resume);
      setProjectsData(projects);
      setStoriesData(stories);
      setIsLoading(false);
      console.log("Resume data extracted : ", resume)
      console.log("Projects data extracted : ", projects)
      console.log("Stories data extracted : ", stories)
      
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);


  return (
    <DataContext.Provider value={{
      resumeData,
      projectsData,
      storiesData,
      isLoading,
      error
    }}>
      <NextUIProvider>
        <div className="flex min-h-screen w-full items-center justify-center flex-row">
          {isLoading ? <LoadingComponent /> : error ? <div>Error: {error}</div> : children}
        </div>
      </NextUIProvider>
    </DataContext.Provider>
  );
}
