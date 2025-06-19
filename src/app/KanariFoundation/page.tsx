'use client';
import React from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import { InvestorCard } from '../Section/body/InvestorCard';
import PageWrapper from '../components/PageWrapper';

function KanariFoundationComponent({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
    return (
        <div className={`transition-colors duration-300 ${darkMode
            ? 'bg-gradient-to-r from-gray-950 to-indigo-950'
            : 'bg-gradient-to-r from-gray-100 to-gray-200'
            }`}>

            <main className="relative min-h-screen overflow-hidden">
                {/* Content */}
                <div className="relative z-10">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <section className="pt-16 sm:pt-24 py-2 px-2"></section>
                        
                    {/* Foundation Content */}
                    <section className="py-12 sm:py-20 px-4">
                        <div className="max-w-7xl mx-auto text-center">
                            {/* Section Header */}
                            <div className="text-center space-y-4 sm:space-y-6 mb-12">
                                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r ${darkMode
                                    ? 'from-white via-blue-300 to-purple-200'
                                    : 'from-gray-900 via-blue-800 to-purple-900'
                                } bg-clip-text text-transparent group`}>
                                    Kanari Network:
                                    <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                        Kanari Foundation
                                    </span>
                                    <div className="h-1 w-32 sm:w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                </h2>

                                <p className={`text-base sm:text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                                    The Kanari Foundation is a non-profit organization that supports the development and growth of the Kanari Network ecosystem. Our mission is to foster innovation, education, and collaboration within the community.
                                </p>
                            </div>
                        </div>

                        {/* Feature Cards */}
                        <div className="max-w-7xl mx-auto py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                            {/* Card 1 */}
                            <InvestorCard
                                darkMode={darkMode}
                                setDarkMode={setDarkMode}
                                icon={
                                    <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                }
                                title="Education"
                                description="Supporting educational initiatives and digital literacy programs"
                            />

                            {/* Card 2 */}
                            <InvestorCard
                                darkMode={darkMode}
                                setDarkMode={setDarkMode}
                                icon={
                                    <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                }
                                title="Community"
                                description="Building stronger communities through technology access"
                            />

                            {/* Card 3 */}
                            <InvestorCard
                                darkMode={darkMode}
                                setDarkMode={setDarkMode}
                                icon={
                                    <svg className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                }
                                title="Innovation"
                                description="Fostering technological innovation and digital transformation."
                            />
                        </div>

                        {/* Statistics Banner */}
                        <div className="max-w-7xl mx-auto mt-10 sm:mt-16 px-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                                {/* ...existing stats cards... */}
                            </div>
                        </div>
                    </section>

                    <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </main>
        </div>
    );
}

export default function KanariFoundation() {
    return (
        <PageWrapper>
            {({ darkMode, setDarkMode }) => (
                <KanariFoundationComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
        </PageWrapper>
    );
}
