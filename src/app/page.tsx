'use client';

import React from 'react';
import HeroSection from "./HeroSection";

interface HomePageProps {
  darkMode?: boolean;
  setDarkMode?: (darkMode: boolean) => void;
}

export default function Home({ darkMode = false, setDarkMode = () => {} }: HomePageProps) {
  return (
    <div className={`transition-colors duration-300 ${darkMode
      ? 'bg-gradient-to-r from-gray-950 to-indigo-950'
      : 'bg-gradient-to-r from-indigo-100 to-purple-100'
    }`}>
      <main className="relative min-h-screen overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> */}
          
          {/* Pass darkMode props to all child components */}
          <HeroSection />
          {/* <LatestUpdates darkMode={darkMode} setDarkMode={setDarkMode} />
          <InvestorsSection darkMode={darkMode} setDarkMode={setDarkMode} />
          <OfficialChannels darkMode={darkMode} setDarkMode={setDarkMode} />
          <NewsletterSection darkMode={darkMode} setDarkMode={setDarkMode} />
          <Footer darkMode={darkMode} setDarkMode={setDarkMode} /> */}
        </div>
      </main>
    </div>
  );
}
