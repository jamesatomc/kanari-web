'use client';
import React from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import { InvestorCard } from '../Section/body/InvestorCard';
import PageWrapper from '../components/PageWrapper';

function KanariFoundationComponent({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
    return (
        <div className={`transition-colors duration-300 ${darkMode
            ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950'
            : 'bg-gradient-to-br from-white via-gray-50 to-blue-100'
            }`}>

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
                                    🌟 Leading the Future of Digital Innovation
                                </div>

                                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r ${darkMode
                                    ? 'from-white via-blue-300 to-indigo-300'
                                    : 'from-gray-900 via-blue-700 to-indigo-800'
                                    } bg-clip-text text-transparent`}>
                                    Kanari Foundation
                                    <span className="block mt-2 text-xl sm:text-2xl md:text-3xl font-medium opacity-80">
                                        Empowering Digital Transformation
                                    </span>
                                </h1>

                                <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
                                    A pioneering non-profit organization driving innovation, education, and sustainable technology solutions across Thailand and Southeast Asia.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                                    <button className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${darkMode
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25'
                                        }`}>
                                        Explore Our Impact
                                    </button>
                                    <button className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 ${darkMode
                                        ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                                        : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900'
                                        }`}>
                                        Join Our Mission
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Core Strengths */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-blue-300 to-purple-300'
                                    : 'from-blue-800 to-purple-800'
                                    } bg-clip-text text-transparent`}>
                                    Our Core Strengths
                                </h2>
                                <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                                    Building sustainable digital ecosystems through strategic partnerships and innovative solutions
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Education Excellence */}
                                <div className={`p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${darkMode
                                    ? 'bg-gradient-to-br from-gray-800/50 to-blue-900/30 border border-blue-500/20 hover:border-blue-400/40'
                                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-300 shadow-lg'
                                    }`}>
                                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${darkMode
                                        ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                                        : 'bg-gradient-to-br from-blue-500 to-purple-600'
                                        }`}>
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Education Excellence
                                    </h3>
                                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base leading-relaxed`}>
                                        Comprehensive digital literacy programs reaching over 50,000 students across Thailand, fostering next-generation tech leaders.
                                    </p>
                                    <div className="mt-6 flex items-center space-x-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode
                                            ? 'bg-blue-500/20 text-blue-300'
                                            : 'bg-blue-100 text-blue-800'
                                            }`}>50K+ Students</span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode
                                            ? 'bg-purple-500/20 text-purple-300'
                                            : 'bg-purple-100 text-purple-800'
                                            }`}>200+ Schools</span>
                                    </div>
                                </div>

                                {/* Innovation Hub */}
                                <div className={`p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${darkMode
                                    ? 'bg-gradient-to-br from-gray-800/50 to-purple-900/30 border border-purple-500/20 hover:border-purple-400/40'
                                    : 'bg-gradient-to-br from-white to-purple-50 border border-purple-200 hover:border-purple-300 shadow-lg'
                                    }`}>
                                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${darkMode
                                        ? 'bg-gradient-to-br from-purple-500 to-pink-600'
                                        : 'bg-gradient-to-br from-purple-500 to-pink-600'
                                        }`}>
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Innovation Hub
                                    </h3>
                                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base leading-relaxed`}>
                                        State-of-the-art research facilities developing blockchain, AI, and IoT solutions for sustainable development.
                                    </p>
                                    <div className="mt-6 flex items-center space-x-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode
                                            ? 'bg-purple-500/20 text-purple-300'
                                            : 'bg-purple-100 text-purple-800'
                                            }`}>15+ Projects</span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode
                                            ? 'bg-pink-500/20 text-pink-300'
                                            : 'bg-pink-100 text-pink-800'
                                            }`}>5 Patents</span>
                                    </div>
                                </div>

                                {/* Community Impact */}
                                <div className={`p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${darkMode
                                    ? 'bg-gradient-to-br from-gray-800/50 to-green-900/30 border border-green-500/20 hover:border-green-400/40'
                                    : 'bg-gradient-to-br from-white to-green-50 border border-green-200 hover:border-green-300 shadow-lg'
                                    }`}>
                                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${darkMode
                                        ? 'bg-gradient-to-br from-green-500 to-teal-600'
                                        : 'bg-gradient-to-br from-green-500 to-teal-600'
                                        }`}>
                                        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Community Impact
                                    </h3>
                                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base leading-relaxed`}>
                                        Empowering rural communities with digital infrastructure and technology access, bridging the digital divide.
                                    </p>
                                    <div className="mt-6 flex items-center space-x-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode
                                            ? 'bg-green-500/20 text-green-300'
                                            : 'bg-green-100 text-green-800'
                                            }`}>100+ Villages</span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode
                                            ? 'bg-teal-500/20 text-teal-300'
                                            : 'bg-teal-100 text-teal-800'
                                            }`}>250K+ Lives</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Impact Statistics */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className={`rounded-3xl p-8 sm:p-12 ${darkMode
                                ? 'bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-gray-700/50'
                                : 'bg-gradient-to-r from-blue-600 to-purple-600'
                                } backdrop-blur-sm`}>
                                <div className="text-center mb-12">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                        Our Impact in Numbers
                                    </h2>
                                    <p className="text-blue-100 text-base sm:text-lg">
                                        Measurable results driving sustainable change
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">300K+</div>
                                        <div className="text-blue-200 font-medium">Lives Impacted</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">150+</div>
                                        <div className="text-blue-200 font-medium">Partner Organizations</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">25+</div>
                                        <div className="text-blue-200 font-medium">Innovation Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl sm:text-5xl font-bold text-white mb-2">₿2.5M</div>
                                        <div className="text-blue-200 font-medium">Digital Assets Managed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="py-16 px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className={`rounded-3xl p-8 sm:p-12 ${darkMode
                                ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-500/20'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                                } backdrop-blur-sm`}>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    Ready to Shape the Future?
                                </h2>
                                <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                                    Join us in building a more connected, educated, and innovative society through technology.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                        Partner With Us
                                    </button>
                                    <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-blue-600">
                                        Learn More
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

export default function KanariFoundation() {
    return (
        <PageWrapper>
            {({ darkMode, setDarkMode }) => (
                <KanariFoundationComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
        </PageWrapper>
    );
}
