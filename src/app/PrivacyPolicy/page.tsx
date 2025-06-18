'use client';
import React, { useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { privacyPolicyContent } from '../data/privacy-policy-data.md';

export default function PrivacyPolicy() {
    const [darkMode, setDarkMode] = useState(false);

    const renderers = {
        h1: ({ children }: { children: React.ReactNode }) => (
            <h3 className="flex items-center text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {children}
            </h3>
        ),
        h2: ({ children }: { children: React.ReactNode }) => (
            <h4 className="text-lg sm:text-xl font-medium text-gray-900 dark:text-white mb-3 sm:mb-4">
                {children}
            </h4>
        ),
        ul: ({ children }: { children: React.ReactNode }) => (
            <ul className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {children}
            </ul>
        ),
        li: ({ children }: { children: React.ReactNode }) => (
            <li className="flex items-start">
                <span className="bg-blue-100 dark:bg-blue-900 rounded-full p-1 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                </span>
                {children}
            </li>
        ),
    };

    return (
        <div className={`transition-colors duration-300 ${darkMode
            ? 'dark bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-950 dark:to-indigo-950'
            : 'bg-gradient-to-r from-gray-100 to-gray-200'
            }`}>

            <main className="relative min-h-screen overflow-hidden">
                {/* Content */}
                <div className="relative z-10">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

                    <section className="pt-16 sm:pt-24 py-2 px-2"></section>

                    {/* Privacy policy Section - Improved Mobile Layout */}
                    <section className="px-4 py-6 sm:py-10">
                        <div className="max-w-7xl mx-auto text-center">
                            <div className="text-center space-y-4 sm:space-y-6">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r 
                                        from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 
                                        dark:to-purple-200 bg-clip-text text-transparent group">
                                    Kanari Network:
                                    <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                        Privacy Policy
                                    </span>
                                    <div className="h-1 w-24 sm:w-32 mx-auto mt-3 sm:mt-4 bg-gradient-to-r from-blue-500 to-purple-600 
                                            rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                </h2>
                            </div>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6">
                                Your privacy is important to us. It is Kanari Network&apos;s policy to respect your privacy regarding any information we may collect from you across our website, <a href="#" className="text-blue-600 dark:text-blue-400">https://kanari.network</a>, and other sites we own and operate.
                            </p>
                            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">Last updated: March 14, 2024</p>
                        </div>
                    </section>

                    {/* Policy Content - Improved Mobile Layout */}
                    <section className="px-4 md:px-6 lg:px-8">
                        <div className="mt-8 sm:mt-16 max-w-4xl mx-auto space-y-8 sm:space-y-12">
                            <ReactMarkdown 
                                remarkPlugins={[remarkGfm]} 
                                components={renderers}
                                className="space-y-8 sm:space-y-12"
                            >
                                {privacyPolicyContent}
                            </ReactMarkdown>
                        </div>
                    </section>

                    <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </main>
        </div>
    );
}