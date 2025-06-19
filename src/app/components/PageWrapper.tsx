'use client';

import React, { useState, useEffect } from 'react';

interface PageWrapperProps {
  children: (props: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) => React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode) {
        try {
          setDarkMode(JSON.parse(storedDarkMode));
        } catch (error) {
          console.error('Error parsing dark mode preference:', error);
        }
      }
    }
  }, []);

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode]);

  return <>{children({ darkMode, setDarkMode })}</>;
}
