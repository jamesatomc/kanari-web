import React from 'react';

export function OfficialChannels() {
    const channels = [
        {
            name: "Bluesky",
            description: "Join our Bluesky community for updates and discussions.",
            icon: (
                <img 
                    src="/Bluesky_Logo.svg"
                    alt="Bluesky Logo"
                    className="w-6 h-6"
                    style={{ filter: 'brightness(0) invert(1)' }} // Makes SVG white
                />
            ),
            link: "https://bsky.app/profile/kanari.network",
            color: "bg-blue-500"
        },
        {
            name: "Discord",
            description: "Announcements, Q&A and community support.",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
            ),
            link: "https://discord.gg/QU6fTacXab",
            color: "bg-indigo-500"
        },
        {
            name: "GitHub",
            description: "Access our open-source code and contribute to development",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
            ),
            link: "https://github.com/kanari-network",
            color: "bg-gray-800"
        }
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold  text-gray-900 dark:text-white mb-12">
                    Official Channels
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {channels.map((channel, index) => (
                        <a
                            key={channel.name}
                            href={channel.link}
                            className="group relative overflow-hidden rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative z-10">
                                <div className={`${channel.color} text-white p-3 rounded-xl inline-block mb-4`}>
                                    {channel.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {channel.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {channel.description}
                                </p>
                            </div>
                            <div className={`absolute bottom-0 right-0 w-32 h-32 ${channel.color} opacity-10 rounded-full transform translate-x-8 translate-y-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300`}></div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}