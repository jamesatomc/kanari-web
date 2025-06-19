'use client';

import PageWrapper from "./components/PageWrapper";
import HeroSection from "./HeroSection";


export default function Home() {
  return (
        <PageWrapper>
            {({ darkMode, setDarkMode }) => (
                <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
        </PageWrapper>
  );
}

