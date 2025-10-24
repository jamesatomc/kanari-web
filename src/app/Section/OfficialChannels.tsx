'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image'

interface OfficialChannelsProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export function OfficialChannels({ darkMode, setDarkMode }: OfficialChannelsProps) {
    const channels = [
        {
            name: "Bluesky",
            description: "Join our Bluesky community for updates and discussions.",
            icon: (
                <Image
                    src="/Bluesky_Logo.svg"
                    alt="Bluesky Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    // changed: make filter depend on darkMode so it renders correctly on light/mobile
                    style={{ filter: darkMode ? 'brightness(0) invert(1)' : 'none' }}
                />
            ),
            link: "https://bsky.app/profile/kanari.network",
            color: "bg-blue-500",
            animation: "fade-right",
        },
        {
            name: "Discord",
            description: "Announcements, Q&A and community support.",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
            ),
            link: "https://discord.gg/QU6fTacXab",
            color: "bg-indigo-500",
            animation: "fade-up",
        },
        {
            name: "GitHub",
            description: "Access our open-source code and contribute to development",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
            link: "https://github.com/kanari-network",
            color: "bg-gray-800",
            animation: "fade-left",
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // changed: refresh AOS on resize so animations recalc positions on mobile rotation/resize
        const onResize = () => {
            AOS.refresh();
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <section className="py-12 sm:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header - matching KanariFoundation style */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${darkMode
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}>
                        📢 Connect with Our Community
                    </div>

                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                        ? 'from-blue-300 to-purple-300'
                        : 'from-blue-800 to-purple-800'
                        } bg-clip-text text-transparent`}>
                        Official Channels
                    </h2>
                    
                    <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        Connect with us through our official channels to stay updated on the latest developments, 
                        announcements, and community discussions.
                    </p>
                </div>

                {/* Channels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {channels.map((channel, index) => (
                        <a key={channel.name}
                            href={channel.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos={channel.animation}
                            data-aos-delay={200 + (index * 100)}
                            // changed: responsive padding, full-width on mobile, sensible max width, touch-friendly sizes
                            className={`w-full max-w-2xl md:max-w-none p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:scale-105 group mx-auto flex flex-col items-center text-center ${darkMode
                        ? 'bg-white/6 text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20'
                        : 'bg-white text-black border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                                }`}>
                            
                            {/* Icon container */}
                            {/* changed: responsive icon container sizes for mobile */}
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-6 flex items-center justify-center ${channel.color} transform group-hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white">
                                    {channel.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {channel.name}
                                </h3>
                                
                                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base leading-relaxed`}>
                                    {channel.description}
                                </p>

                                {/* Connect button */}
                                <div className="flex items-center justify-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors pt-4">
                                    <span className="text-sm font-medium">Connect Now</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}