'use client';
import React, { useState } from 'react';
import Navbar from '../../Section/body/Navbar';
import Footer from '../../Section/body/Footer';
import PageWrapper from '../../components/PageWrapper';
import Image from 'next/image';

interface EcosystemProject {
    id: string;
    name: string;
    description: string;
    icon: string;
    users: string;
    link: string;
    isActive: boolean;
    category: 'defi' | 'nft' | 'gaming' | 'infrastructure';
}

interface EcosystemStats {
    totalProjects: string;
    totalValueLocked: string;
    activeUsers: string;
    transactions: string;
}

function EcosystemHubComponent({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
    const [activeFilter, setActiveFilter] = useState<'all' | 'defi' | 'nft' | 'gaming' | 'infrastructure'>('all');

    const ecosystemStats: EcosystemStats = {
        totalProjects: '200+',
        totalValueLocked: '$50M+',
        activeUsers: '100K+',
        transactions: '2.5M+'
    };

    const ecosystemProjects: EcosystemProject[] = [
        {
            id: '1',
            name: 'KanariSwap',
            description: 'Decentralized exchange for seamless token swapping with minimal fees and maximum security.',
            icon: '🔄',
            users: '25,000+',
            link: 'https://swap.kanari.network',
            isActive: true,
            category: 'defi'
        },
        {
            id: '2',
            name: 'Kanari NFT Marketplace',
            description: 'Trade, mint, and discover unique NFTs on the most advanced marketplace in the ecosystem.',
            icon: '🎨',
            users: '18,500+',
            link: 'https://nft.kanari.network',
            isActive: true,
            category: 'nft'
        },
        {
            id: '3',
            name: 'KanariLend',
            description: 'Lending and borrowing protocol offering competitive rates and flexible terms.',
            icon: '🏦',
            users: '12,300+',
            link: 'https://lend.kanari.network',
            isActive: true,
            category: 'defi'
        },
        {
            id: '4',
            name: 'Kanari Gaming Hub',
            description: 'Play-to-earn gaming platform with integrated NFTs and token rewards.',
            icon: '🎮',
            users: '35,000+',
            link: 'https://gaming.kanari.network',
            isActive: true,
            category: 'gaming'
        },
        {
            id: '5',
            name: 'Kanari Bridge',
            description: 'Cross-chain bridge connecting Kanari Network with major blockchain ecosystems.',
            icon: '🌉',
            users: '8,700+',
            link: 'https://bridge.kanari.network',
            isActive: true,
            category: 'infrastructure'
        },
        {
            id: '6',
            name: 'Kanari Analytics',
            description: 'Real-time analytics and insights for DeFi protocols and market data.',
            icon: '📊',
            users: '15,200+',
            link: 'https://analytics.kanari.network',
            isActive: true,
            category: 'infrastructure'
        }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? ecosystemProjects 
        : ecosystemProjects.filter(project => project.category === activeFilter);

    const filterButtons = [
        { key: 'all' as const, label: 'All Projects', icon: '🌐' },
        { key: 'defi' as const, label: 'DeFi', icon: '💰' },
        { key: 'nft' as const, label: 'NFTs', icon: '🎨' },
        { key: 'gaming' as const, label: 'Gaming', icon: '🎮' },
        { key: 'infrastructure' as const, label: 'Infrastructure', icon: '🛠️' }
    ];

    return (
        <div className={`transition-colors duration-300 ${darkMode
            ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950'
            : 'bg-gradient-to-br from-white via-gray-50 to-blue-50'
        }`}>

            <main className="relative min-h-screen overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-20 right-20 w-96 h-96 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-200/30'} rounded-full blur-3xl`}></div>
                    <div className={`absolute bottom-20 left-20 w-80 h-80 ${darkMode ? 'bg-indigo-500/10' : 'bg-indigo-200/30'} rounded-full blur-3xl`}></div>
                </div>

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
                                    🚀 Explore Our Thriving Ecosystem
                                </div>
                                
                                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r ${darkMode
                                    ? 'from-blue-300 to-purple-300'
                                    : 'from-blue-800 to-purple-800'
                                    } bg-clip-text text-transparent`}>
                                    Ecosystem Hub
                                    <span className="block mt-2 text-2xl sm:text-3xl md:text-3xl font-medium opacity-80">
                                        Discover, Build, Innovate
                                    </span>
                                </h1>

                                <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
                                    Explore the vibrant ecosystem of DeFi protocols, NFT marketplaces, gaming platforms, and infrastructure tools built on Kanari Network.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Ecosystem Stats */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className={`rounded-3xl p-8 sm:p-12 ${darkMode
                                ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-500/20'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                            } backdrop-blur-sm`}>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                        Ecosystem Metrics
                                    </h2>
                                    <p className="text-blue-100 text-lg">
                                        Building the future of decentralized finance
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{ecosystemStats.totalProjects}</div>
                                        <div className="text-blue-200 font-medium">Total Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{ecosystemStats.totalValueLocked}</div>
                                        <div className="text-blue-200 font-medium">Total Value Locked</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{ecosystemStats.activeUsers}</div>
                                        <div className="text-blue-200 font-medium">Active Users</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{ecosystemStats.transactions}</div>
                                        <div className="text-blue-200 font-medium">Total Transactions</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Ecosystem Projects */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-blue-300 to-indigo-300'
                                    : 'from-blue-800 to-indigo-800'
                                } bg-clip-text text-transparent`}>
                                    Explore Our Ecosystem
                                </h2>
                                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
                                    Discover innovative projects and platforms built on Kanari Network
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
                                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                                        : 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
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

                            {/* Ecosystem Projects Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        className={`group p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${darkMode
                                            ? 'bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/40'
                                            : 'bg-white/70 border border-gray-200/50 backdrop-blur-sm shadow-xl hover:border-blue-300'
                                        }`}
                                    >
                                        {/* Project Header */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="text-4xl">{project.icon}</div>
                                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                project.isActive
                                                    ? darkMode
                                                        ? 'bg-green-500/20 text-green-300'
                                                        : 'bg-green-100 text-green-800'
                                                    : darkMode
                                                        ? 'bg-gray-500/20 text-gray-400'
                                                        : 'bg-gray-100 text-gray-600'
                                            }`}>
                                                {project.isActive ? '🟢 Live' : '⚫ Coming Soon'}
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <div className="space-y-4">
                                            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {project.name}
                                            </h3>
                                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                                {project.description}
                                            </p>
                                            <div className={`flex items-center space-x-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                                                <span className="text-sm font-medium">👥 {project.users} users</span>
                                            </div>
                                        </div>

                                        {/* Launch Button */}
                                        <div className="mt-6">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${darkMode
                                                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/25'
                                                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25'
                                                }`}
                                            >
                                                Launch App
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

                    {/* Developer Resources */}
                    <section className="py-16 px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className={`rounded-3xl p-8 sm:p-12 ${darkMode
                                ? 'bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm'
                                : 'bg-white/70 border border-gray-200/50 backdrop-blur-sm shadow-xl'
                            }`}>
                                <div className="text-center mb-8">
                                    <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Build on Kanari
                                    </h2>
                                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Everything you need to start building on our ecosystem
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            🚀 Getting Started
                                        </h3>
                                        <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <li>• Documentation & Guides</li>
                                            <li>• SDK & Development Tools</li>
                                            <li>• Smart Contract Templates</li>
                                            <li>• Testnet & Faucet Access</li>
                                        </ul>
                                    </div>
                                    <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            💡 Support & Grants
                                        </h3>
                                        <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <li>• Developer Grant Program</li>
                                            <li>• Technical Support Team</li>
                                            <li>• Community Developer Chat</li>
                                            <li>• Regular Hackathons & Events</li>
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

export default function EcosystemHub() {
    return (
        <PageWrapper>
            {({ darkMode, setDarkMode }) => (
                <EcosystemHubComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
        </PageWrapper>
    );
}
