'use client';
import React, { useState } from 'react';
import Navbar from '../../Section/body/Navbar';
import Footer from '../../Section/body/Footer';
import PageWrapper from '../../components/PageWrapper';
import Image from 'next/image';

interface CommunityChannel {
    id: string;
    name: string;
    description: string;
    icon: string;
    members: string;
    link: string;
    isActive: boolean;
    category: 'social' | 'development' | 'support';
}

interface CommunityStats {
    totalMembers: string;
    activeProjects: string;
    countries: string;
    monthlyEvents: string;
}

function CommunityHubComponent({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
    const [activeFilter, setActiveFilter] = useState<'all' | 'social' | 'development' | 'support'>('all');

    const communityStats: CommunityStats = {
        totalMembers: '25,000+',
        activeProjects: '150+',
        countries: '45+',
        monthlyEvents: '20+'
    };

    const communityChannels: CommunityChannel[] = [
        {
            id: '1',
            name: 'Discord Community',
            description: 'Join our main community hub for real-time discussions, announcements, and support.',
            icon: '💬',
            members: '12,500+',
            link: 'https://discord.gg/kanari',
            isActive: true,
            category: 'social'
        },
        {
            id: '2',
            name: 'Telegram Group',
            description: 'Stay updated with quick announcements and community discussions.',
            icon: '📱',
            members: '8,200+',
            link: 'https://t.me/kanarinetwork',
            isActive: true,
            category: 'social'
        },
        {
            id: '3',
            name: 'GitHub Community',
            description: 'Contribute to open-source projects and collaborate with developers.',
            icon: '👨‍💻',
            members: '3,400+',
            link: 'https://github.com/kanari-network',
            isActive: true,
            category: 'development'
        },
        {
            id: '4',
            name: 'Reddit Community',
            description: 'Share insights, ask questions, and engage in thoughtful discussions.',
            icon: '🔗',
            members: '5,800+',
            link: 'https://reddit.com/r/kanarinetwork',
            isActive: true,
            category: 'social'
        },
        {
            id: '5',
            name: 'Developer Forum',
            description: 'Technical discussions, code reviews, and developer resources.',
            icon: '🛠️',
            members: '2,100+',
            link: 'https://forum.kanari.network',
            isActive: true,
            category: 'development'
        },
        {
            id: '6',
            name: 'Support Center',
            description: 'Get help from our support team and community experts.',
            icon: '🎧',
            members: '1,500+',
            link: 'https://support.kanari.network',
            isActive: true,
            category: 'support'
        }
    ];

    const filteredChannels = activeFilter === 'all' 
        ? communityChannels 
        : communityChannels.filter(channel => channel.category === activeFilter);

    const filterButtons = [
        { key: 'all' as const, label: 'All Channels', icon: '🌐' },
        { key: 'social' as const, label: 'Social', icon: '👥' },
        { key: 'development' as const, label: 'Development', icon: '💻' },
        { key: 'support' as const, label: 'Support', icon: '🆘' }
    ];

    return (
        <div className={`transition-colors duration-300 ${darkMode
            ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-purple-950'
            : 'bg-gradient-to-br from-white via-blue-50 to-purple-50'
        }`}>

            <main className="relative min-h-screen overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-20 right-20 w-96 h-96 ${darkMode ? 'bg-purple-500/10' : 'bg-purple-200/30'} rounded-full blur-3xl`}></div>
                    <div className={`absolute bottom-20 left-20 w-80 h-80 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-200/30'} rounded-full blur-3xl`}></div>
                </div>

                <div className="relative z-10">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <section className="pt-16 sm:pt-24 py-2 px-2"></section>

                    {/* Hero Section */}
                    <section className="py-16 sm:py-24 px-4">
                        <div className="max-w-7xl mx-auto text-center">
                            <div className="space-y-6 sm:space-y-8 mb-16">
                                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${darkMode 
                                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                                    : 'bg-purple-100 text-purple-800 border border-purple-200'
                                }`}>
                                    🌟 Join Our Growing Community
                                </div>
                                
                                <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-gradient-to-r ${darkMode
                                    ? 'from-white via-purple-200 to-blue-200'
                                    : 'from-gray-900 via-purple-800 to-blue-900'
                                } bg-clip-text text-transparent`}>
                                    Community Hub
                                    <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-medium opacity-80">
                                        Connect, Learn, Build Together
                                    </span>
                                </h1>

                                <p className={`text-lg sm:text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
                                    Join thousands of developers, innovators, and blockchain enthusiasts building the future of decentralized finance on Kanari Network.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Community Stats */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className={`rounded-3xl p-8 sm:p-12 ${darkMode
                                ? 'bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/20'
                                : 'bg-gradient-to-r from-purple-600 to-blue-600'
                            } backdrop-blur-sm`}>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                        Our Community in Numbers
                                    </h2>
                                    <p className="text-purple-100 text-lg">
                                        Growing stronger every day
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{communityStats.totalMembers}</div>
                                        <div className="text-blue-200 font-medium">Community Members</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{communityStats.activeProjects}</div>
                                        <div className="text-blue-200 font-medium">Active Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{communityStats.countries}</div>
                                        <div className="text-blue-200 font-medium">Countries</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{communityStats.monthlyEvents}</div>
                                        <div className="text-blue-200 font-medium">Monthly Events</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Community Channels */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-purple-300 to-blue-300'
                                    : 'from-purple-800 to-blue-800'
                                } bg-clip-text text-transparent`}>
                                    Join Our Channels
                                </h2>
                                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
                                    Choose the perfect platform to connect with fellow community members
                                </p>

                                {/* Filter Buttons */}
                                <div className="flex flex-wrap justify-center gap-3 mb-8">
                                    {filterButtons.map((filter) => (
                                        <button
                                            key={filter.key}
                                            onClick={() => setActiveFilter(filter.key)}
                                            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                                                activeFilter === filter.key
                                                    ? darkMode
                                                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                                                        : 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                                                    : darkMode
                                                        ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                        >
                                            {filter.icon} {filter.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Community Channels Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredChannels.map((channel) => (
                                    <div
                                        key={channel.id}
                                        className={`group p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${darkMode
                                            ? 'bg-gray-800/50 border border-purple-500/20 hover:border-purple-400/40'
                                            : 'bg-white border border-purple-200 hover:border-purple-300 shadow-lg hover:shadow-xl'
                                        }`}
                                    >
                                        {/* Channel Header */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="text-4xl">{channel.icon}</div>
                                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                channel.isActive
                                                    ? darkMode
                                                        ? 'bg-green-500/20 text-green-300'
                                                        : 'bg-green-100 text-green-800'
                                                    : darkMode
                                                        ? 'bg-gray-500/20 text-gray-400'
                                                        : 'bg-gray-100 text-gray-600'
                                            }`}>
                                                {channel.isActive ? '🟢 Active' : '⚫ Inactive'}
                                            </div>
                                        </div>

                                        {/* Channel Info */}
                                        <div className="space-y-4">
                                            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {channel.name}
                                            </h3>
                                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                                {channel.description}
                                            </p>
                                            <div className={`flex items-center space-x-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                                                <span className="text-sm font-medium">👥 {channel.members} members</span>
                                            </div>
                                        </div>

                                        {/* Join Button */}
                                        <div className="mt-6">
                                            <a
                                                href={channel.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${darkMode
                                                    ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-500/25'
                                                    : 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/25'
                                                }`}
                                            >
                                                Join Channel
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Community Guidelines */}
                    <section className="py-16 px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className={`rounded-3xl p-8 sm:p-12 ${darkMode
                                ? 'bg-gray-800/30 border border-gray-700/50'
                                : 'bg-white/70 border border-gray-200/50 shadow-xl'
                            } backdrop-blur-sm`}>
                                <div className="text-center mb-8">
                                    <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Community Guidelines
                                    </h2>
                                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Help us maintain a welcoming and productive environment for everyone
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            ✅ Do&apos;s
                                        </h3>
                                        <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <li>• Be respectful and inclusive</li>
                                            <li>• Share knowledge and help others</li>
                                            <li>• Stay on topic in discussions</li>
                                            <li>• Use appropriate channels</li>
                                        </ul>
                                    </div>
                                    <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            ❌ Don&apos;ts
                                        </h3>
                                        <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <li>• No spam or self-promotion</li>
                                            <li>• No harassment or discrimination</li>
                                            <li>• No sharing of private information</li>
                                            <li>• No illegal or harmful content</li>
                                        </ul>
                                    </div>
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

export default function CommunityHub() {
    return (
        <PageWrapper>
            {({ darkMode, setDarkMode }) => (
                <CommunityHubComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
        </PageWrapper>
    );
}
