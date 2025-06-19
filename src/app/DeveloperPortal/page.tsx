'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import PageWrapper from '../components/PageWrapper';
import { DeveloperCard } from '../components/DeveloperCard';
import { getResourcesByCategory } from '../data/developerResources';
import { Icons } from '../components/IconLibrary';
import AOS from 'aos';
import 'aos/dist/aos.css';

function DeveloperPortalComponent({ 
    darkMode: externalDarkMode, 
    setDarkMode: externalSetDarkMode 
}: { 
    darkMode?: boolean; 
    setDarkMode?: (darkMode: boolean) => void 
} = {}) {
    const [internalDarkMode, setInternalDarkMode] = useState(false);
    
    const darkMode = externalDarkMode !== undefined ? externalDarkMode : internalDarkMode;
    const setDarkMode = externalSetDarkMode || setInternalDarkMode;

    const quickStartResources = getResourcesByCategory('quick-start');
    const popularResources = getResourcesByCategory('popular');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    const renderIcon = (iconType: string) => {
        const IconComponent = Icons[iconType as keyof typeof Icons];
        return IconComponent ? <IconComponent /> : <Icons.document />;
    };

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
                    <section className="py-16 sm:py-24 px-4" data-aos="fade-up">
                        <div className="max-w-7xl mx-auto text-center">
                            <div className="space-y-6 sm:space-y-8 mb-16">
                                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${darkMode 
                                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                                    : 'bg-purple-100 text-purple-800 border border-purple-200'
                                }`}>
                                    🚀 Build the Future
                                </div>
                                
                                <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-gradient-to-r ${darkMode
                                    ? 'from-white via-purple-200 to-blue-200'
                                    : 'from-gray-900 via-purple-800 to-blue-900'
                                } bg-clip-text text-transparent`}>
                                    Developer Portal
                                    <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-medium opacity-80">
                                        Build on Kanari Network
                                    </span>
                                </h1>

                                <p className={`text-lg sm:text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
                                    Access comprehensive documentation, SDKs, and tools to build secure metadata solutions on MoveVM blockchain infrastructure.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                                    <a href="https://docs.kanari.site/"
                                        className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${darkMode
                                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/25'
                                            : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25'
                                        }`}>
                                        📚 View Documentation
                                    </a>
                                    <a href="https://github.com/kanari-network"
                                        className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 ${darkMode
                                            ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                                            : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900'
                                        }`}>
                                        💻 GitHub Repository
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quick Start Section */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16" data-aos="fade-up">
                                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-purple-300 to-blue-300'
                                    : 'from-purple-800 to-blue-800'
                                } bg-clip-text text-transparent`}>
                                    Quick Start Guide
                                </h2>
                                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                                    Get started with Kanari Network development using our comprehensive resources and tools.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {quickStartResources.map((resource, index) => (
                                    <div key={resource.id} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                        <DeveloperCard 
                                            darkMode={darkMode}
                                            icon={renderIcon(resource.icon)}
                                            title={resource.title}
                                            description={resource.description}
                                            url={resource.url}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Popular Resources Section */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16" data-aos="fade-up">
                                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-blue-300 to-purple-300'
                                    : 'from-blue-800 to-purple-800'
                                } bg-clip-text text-transparent`}>
                                    Development Tools
                                </h2>
                                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                                    Essential resources and tools for building secure metadata solutions on Kanari Network.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {popularResources.map((resource, index) => (
                                    <div key={resource.id} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                        <DeveloperCard 
                                            darkMode={darkMode}
                                            icon={renderIcon(resource.icon)}
                                            title={resource.title}
                                            description={resource.description}
                                            url={resource.url}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Community Section */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className={`rounded-3xl p-8 sm:p-12 ${darkMode
                                ? 'bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/20'
                                : 'bg-gradient-to-r from-purple-600 to-blue-600'
                            } backdrop-blur-sm`}>
                                <div className="text-center">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                        Join Our Developer Community
                                    </h2>
                                    <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                                        Connect with other developers, get support, and stay updated with the latest developments in the Kanari ecosystem.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                            Join Discord
                                        </button>
                                        <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-purple-600">
                                            Follow on Twitter
                                        </button>
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

export default function DeveloperPortal() {
    return (
        <PageWrapper>
            {({ darkMode, setDarkMode }) => (
                <DeveloperPortalComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
        </PageWrapper>
    );
}