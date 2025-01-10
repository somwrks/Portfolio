/* eslint-disable @typescript-eslint/no-explicit-any */
// context/DataContext.tsx
"use client";
import { createContext, useContext } from 'react';

interface DataContextType {
  resumeData: any;
  projectsData: any;
  storiesData: any;
  isLoading: boolean;
  error: string | null;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
