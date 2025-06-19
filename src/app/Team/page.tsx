'use client';
import React from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import Image from 'next/image'
import PageWrapper from '../components/PageWrapper';

interface TeamMember {
    name: string;
    position: string;
    image: string;
    bio: string;
    social?: {
        linkedin?: string;
        twitter?: string;
    };
}

function TeamComponent({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
    const teamMembers: TeamMember[] = [
        {
            name: "james atomc",
            position: "Co-Founder",
            image: "/jamesatomc.png",
            bio: "James is a blockchain enthusiast and a seasoned software developer. He has a wealth of experience in building decentralized applications and is passionate about the potential of blockchain technology to revolutionize the financial industry.",
        },
    ];

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

                    {/* Team Section Content */}
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
                                        Our Team
                                    </span>
                                    <div className="h-1 w-32 sm:w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                </h2>

                                <p className={`text-base sm:text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                                    Our team is made up of a diverse group of individuals with a wide range of skills and experience. We are united by our passion for blockchain technology and our belief in the transformative power of decentralized finance.
                                </p>
                            </div>

                            {/* Team Members Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                                {teamMembers.map((member, index) => (
                                    <div key={index} className={`backdrop-blur-sm ${darkMode
                                        ? 'bg-gray-800/30 border-gray-700/50'
                                        : 'bg-white/30 border-gray-200/50'
                                    } border rounded-xl p-4 sm:p-8 hover:scale-105 hover:shadow-xl transition-all 
                                            duration-300 group relative overflow-hidden`}>
                                        
                                        <div className="relative z-10 flex flex-col items-center space-y-4 sm:space-y-6">
                                            {/* Image container - Smaller on mobile */}
                                            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-lg mx-auto mb-3 sm:mb-6 
                                                    transform hover:rotate-6 transition-transform relative">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Content - Improved Typography for Mobile */}
                                            <div className="space-y-2 sm:space-y-4 w-full text-center">
                                                <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${darkMode
                                                    ? 'from-white via-blue-300 to-purple-200'
                                                    : 'from-gray-900 via-blue-800 to-purple-900'
                                                } bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                                                    {member.name}
                                                </h3>
                                                <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
                                                    {member.position}
                                                </p>
                                                <p className={`text-xs sm:text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                                    {member.bio}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Background decoration */}
                                        <div className={`absolute inset-0 ${darkMode
                                            ? 'bg-gradient-to-br from-blue-900/10 to-purple-900/10'
                                            : 'bg-gradient-to-br from-blue-50/50 to-purple-50/50'
                                        } rounded-xl -z-10`}></div>
                                        
                                        {/* Additional decorative elements for better visual appeal */}
                                        <div className={`absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br blur-2xl rounded-full 
                                                group-hover:scale-150 group-hover:opacity-30 transition-all duration-500 ${darkMode
                                                ? 'from-orange-600/20 to-pink-600/20'
                                                : 'from-orange-400/20 to-pink-400/20'
                                            }`}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </main>
        </div>
    );
}

export default function Team() {
    return (
        <PageWrapper>
            {({ darkMode, setDarkMode }) => (
                <TeamComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
        </PageWrapper>
    );
}