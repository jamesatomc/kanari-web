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
        github?: string;
    };
    skills?: string[];
}

function TeamComponent({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
    const teamMembers: TeamMember[] = [
        {
            name: "James Atomc",
            position: "Co-Founder & Lead Developer",
            image: "/jamesatomc.png",
            bio: "Blockchain pioneer and seasoned software architect with 8+ years of experience building decentralized applications. Passionate about revolutionizing finance through innovative blockchain solutions.",
            skills: ["Blockchain", "DeFi", "Smart Contracts", "Full-Stack Development"],
            social: {
                linkedin: "https://linkedin.com/in/jamesatomc",
                twitter: "https://twitter.com/jamesatomc",
                github: "https://github.com/jamesatomc"
            }
        },
    ];

    return (
        <div className={`transition-colors duration-300 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>

            <main className="relative min-h-screen overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-20 right-20 w-96 h-96 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-200/30'} rounded-full blur-3xl`}></div>
                    <div className={`absolute bottom-20 left-20 w-80 h-80 ${darkMode ? 'bg-indigo-500/10' : 'bg-indigo-200/30'} rounded-full blur-3xl`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <section className="pt-16 sm:pt-24 py-2 px-2"></section>

                    {/* Hero Section */}
                    <section className="py-16 sm:py-20 px-4">
                        <div className="max-w-7xl mx-auto text-center">
                            <div className="space-y-6 sm:space-y-8 mb-12">
                                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${darkMode
                                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                                    }`}>
                                    👥 Meet Our Visionaries
                                </div>

                                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r ${darkMode
                                    ? 'from-white via-blue-300 to-indigo-300'
                                    : 'from-gray-900 via-blue-700 to-indigo-800'
                                    } bg-clip-text text-transparent`}>
                                    Our Team
                                    <span className="block mt-2 text-xl sm:text-2xl md:text-3xl font-medium opacity-80">
                                        Building the Future Together
                                    </span>
                                </h1>

                                <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
                                    A diverse group of innovators, developers, and visionaries united by our passion for blockchain technology and belief in decentralized finance&apos;s transformative power.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Team Members Grid */}
                    <section className="py-8 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {teamMembers.map((member, index) => (
                                    <div key={index} className={`group relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${darkMode
                                        ? 'bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/40'
                                        : 'bg-white/70 border border-gray-200/50 backdrop-blur-sm shadow-xl hover:border-blue-300'
                                        }`}>
                                        {/* Profile Image */}
                                        <div className="relative mb-6">
                                            <div className="w-32 h-32 mx-auto rounded-3xl overflow-hidden shadow-xl transform group-hover:rotate-3 transition-transform duration-300">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} flex items-center justify-center`}>
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Member Info */}
                                        <div className="text-center space-y-4">
                                            <div>
                                                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                    {member.name}
                                                </h3>
                                                <p className={`text-base sm:text-lg font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                    {member.position}
                                                </p>
                                            </div>

                                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-sm`}>
                                                {member.bio}
                                            </p>

                                            {/* Skills */}
                                            {member.skills && (
                                                <div className="flex flex-wrap gap-2 justify-center">
                                                    {member.skills.map((skill, skillIndex) => (
                                                        <span key={skillIndex} className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode
                                                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                                                            }`}>
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}                                            {/* Social Links */}
                                            {member.social && (
                                                <div className="flex justify-center space-x-4 pt-4">
                                                    {member.social.linkedin && (
                                                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                                                            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                    {member.social.twitter && (
                                                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                                                            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                    {member.social.github && (
                                                        <a href={member.social.github} target="_blank" rel="noopener noreferrer"
                                                            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Join Our Team CTA */}
                    <section className="py-16 px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className={`rounded-3xl p-8 sm:p-12 ${darkMode
                                ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-500/20'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                                } backdrop-blur-sm`}>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    Join Our Mission
                                </h2>
                                <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                                    We&apos;re always looking for passionate individuals to join our team and help shape the future of decentralized finance.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                        View Open Positions
                                    </button>
                                    <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-blue-600">
                                        Contact Us
                                    </button>
                                </div>
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