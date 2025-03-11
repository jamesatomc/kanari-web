'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import './OfficialChannels.css';

export function OfficialChannels() {
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
                    style={{ filter: 'brightness(0) invert(1)' }}
                />
            ),
            link: "https://bsky.app/profile/kanari.network",
            color: "bg-blue-500",
            glowColor: "cyber-glow-blue",
            animation: "fade-right"
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
            glowColor: "cyber-glow-purple",
            animation: "fade-up"
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
            color: "bg-gray-700",
            glowColor: "cyber-glow-cyan",
            animation: "fade-left"
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    return (
        <section className="py-20 px-4 cyber-channels-section relative overflow-hidden">
            {/* Neo-Tokyo background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/10 via-purple-100/5 to-cyan-100/10 dark:from-indigo-900/10 dark:via-purple-900/5 dark:to-cyan-900/10"></div>
                <div className="absolute top-0 left-0 w-full h-[2px] cyber-grid-horizontal"></div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] cyber-grid-horizontal"></div>
                <div className="absolute top-0 right-20 w-[2px] h-[60%] cyber-grid-vertical"></div>
                <div className="absolute top-0 left-20 w-[2px] h-[40%] cyber-grid-vertical"></div>
                <div className="absolute top-[10%] right-[5%] cyber-circle cyber-circle-sm opacity-30"></div>
                <div className="absolute bottom-[15%] left-[8%] cyber-circle cyber-circle-md opacity-20"></div>
                <div className="absolute bottom-[5%] right-[30%] neon-line neon-cyan horizontal w-[100px] h-[1px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Neo-Tokyo style header */}
                <div className="flex flex-col items-center mb-16 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 cyber-kanji text-[2rem] opacity-20 cyber-glow-text-blue">接続</div>

                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <h5 className="text-sm font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase">Connect</h5>
                        <div className="h-[1px] w-8 bg-gradient-to-r from-purple-600 to-cyan-500"></div>
                    </div>

                    <h2 className="text-4xl font-bold text-center mb-2 cyber-glitch-text bg-gradient-to-r from-cyan-600 via-blue-700 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
                        Official Channels
                    </h2>

                    <div className="h-1 w-40 mx-auto mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full cyber-glow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {channels.map((channel, index) => (
                        <a key={channel.name}
                            href={channel.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos={channel.animation}
                            data-aos-delay={200 + (index * 100)}
                            className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-blue-300/20 
                            dark:border-purple-500/30 rounded-xl p-8 group relative overflow-hidden 
                            hover:scale-105 hover:shadow-xl transition-all duration-300 cyber-channel-card">

                            {/* Neo-Tokyo decorative elements */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-600 cyber-glow"></div>
                            <div className="absolute top-1 left-4 w-3 h-3 rounded-full bg-blue-400 cyber-glow-blue"></div>
                            <div className="absolute top-1 left-10 w-2 h-2 rounded-full bg-purple-400 cyber-glow-purple"></div>

                            {/* Tech pattern overlay */}
                            <div className="absolute right-0 top-0 h-full w-1/3 tech-pattern opacity-20"></div>

                            {/* Digital circuits */}
                            <div className="absolute left-2 top-8 w-8 h-32 cyber-circuit-vertical"></div>
                            <div className="absolute right-8 bottom-2 h-8 w-32 cyber-circuit-horizontal"></div>

                            {/* Scan lines */}
                            <div className="absolute inset-0 cyber-scan-lines opacity-[0.03] dark:opacity-[0.07] pointer-events-none"></div>

                            {/* Digital corner elements */}
                            <div className="absolute top-0 right-0 cyber-corner-tr"></div>
                            <div className="absolute bottom-0 left-0 cyber-corner-bl"></div>

                            <div className="relative z-10 flex flex-col items-start space-y-6">
                                {/* Icon container - cyberpunk style */}
                                <div className={`cyber-icon-container ${channel.color} p-4 rounded-xl shadow-neo 
                                     mx-auto mb-6 w-fit transform group-hover:rotate-6 group-hover:scale-110 
                                     transition-all duration-500 relative ${channel.glowColor}`}>
                                    {/* Holographic ring effect */}
                                    <div className="absolute inset-0 rounded-xl holo-ring"></div>
                                    <div className="relative z-10 cyber-glow-text">{channel.icon}</div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4 relative">
                                    {/* Cyberpunk-styled name */}
                                    <h3 className="text-2xl font-bold cyber-text-glitch bg-gradient-to-r from-cyan-400 via-blue-500 
                                        to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-300 
                                        bg-clip-text text-transparent group-hover:scale-105 transition-transform relative">
                                        <span className="cyber-glitch-effect">{channel.name}</span>
                                        <div className="h-1 w-2/3 mt-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full 
                                             cyber-glow group-hover:w-full transition-all duration-500 opacity-80"></div>
                                    </h3>

                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative cyber-paragraph">
                                        {channel.description}
                                    </p>

                                    {/* Connect button */}
                                    <div className="mt-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex items-center justify-end space-x-1 text-sm font-mono text-blue-600 dark:text-blue-400">
                                            <span className="cyber-connect-text">CONNECT</span>
                                            <svg className="w-4 h-4 cyber-connect-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cyberpunk background effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/20 
                                  dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl -z-10 cyber-noise-bg"></div>

                            {/* Neon glow blob */}
                            <div className={`absolute -bottom-8 -right-8 w-48 h-48 ${channel.color}/20 
                                  blur-3xl rounded-full group-hover:scale-150 group-hover:opacity-40 
                                  transition-all duration-700 cyber-pulse`}></div>

                            {/* Holographic shimmer */}
                            <div className="absolute inset-0 cyber-shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                        </a>
                    ))}
                </div>

                {/* Bottom accent line with code numbers */}
                <div className="mt-16 flex justify-center items-center gap-2"></div>
                <div className="h-[1px] w-16 bg-cyan-500/50"></div>
                <div className="text-xs font-mono text-cyan-600/70 dark:text-cyan-400/70">K-NET//2077</div>
                <div className="h-[1px] w-16 bg-purple-500/50"></div>
            </div>

        </section>
    );
}