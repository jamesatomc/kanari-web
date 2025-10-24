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
        <div className={`transition-colors duration-300 ${darkMode ? 'bg-gray-950' : 'bg-white' }`}>

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
                                    🚀 Build the Future
                                </div>
                                
                                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r ${darkMode
                                    ? 'from-white via-blue-300 to-indigo-300'
                                    : 'from-gray-900 via-blue-700 to-indigo-800'
                                    } bg-clip-text text-transparent`}>
                                    Developer Portal
                                    <span className="block mt-2 text-xl sm:text-2xl md:text-3xl font-medium opacity-80">
                                        Build on Kanari Network
                                    </span>
                                </h1>

                                <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
                                    Access comprehensive documentation, SDKs, and tools to build secure metadata solutions on MoveVM blockchain infrastructure.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                                    <a href="https://docs.kanari.site/"
                                        className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${darkMode
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25'
                                            : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25'
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
                                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-blue-300 to-indigo-300'
                                    : 'from-blue-800 to-indigo-800'
                                } bg-clip-text text-transparent`}>
                                    Quick Start Guide
                                </h2>
                                <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
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
                                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-indigo-300 to-blue-300'
                                    : 'from-indigo-800 to-blue-800'
                                } bg-clip-text text-transparent`}>
                                    Development Tools
                                </h2>
                                <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
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
                                ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-500/20'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                            } backdrop-blur-sm`}>
                                <div className="text-center">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                        Join Our Developer Community
                                    </h2>
                                    <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                                        Connect with other developers, get support, and stay updated with the latest developments in the Kanari ecosystem.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                            Join Discord
                                        </button>
                                        <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-blue-600">
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