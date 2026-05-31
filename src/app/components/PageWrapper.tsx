'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface PageWrapperContextProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const PageWrapperContext = createContext<PageWrapperContextProps | undefined>(undefined);

export const usePageWrapper = () => {
  const context = useContext(PageWrapperContext);
  if (!context) {
    throw new Error('usePageWrapper must be used within a PageWrapperProvider');
  }
  return context;
};

interface PageWrapperProps {
  children: (props: PageWrapperContextProps) => ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [darkMode, setDarkMode] = useState<boolean>(true); // Initialize with dark mode by default

  useEffect(() => {
    // Check for saved preference in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      // Default to dark mode if no preference is saved
      setDarkMode(true);
      localStorage.setItem('darkMode', 'true');
    }
    
    // Apply dark mode class to document element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    // Update localStorage and document class when darkMode changes
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <PageWrapperContext.Provider value={{ darkMode, setDarkMode }}>
      {children({ darkMode, setDarkMode })}
    </PageWrapperContext.Provider>
  );
}