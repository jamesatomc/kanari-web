'use client';
import React, { useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { privacyPolicyContent } from '../data/privacy-policy.md';

export default function PrivacyPolicy() {
    const [darkMode, setDarkMode] = useState(false);

    const renderers = {
        h1: ({ children }) => (
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-lg font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200">{children}</h3>
        ),
        p: ({ children }) => (
            <p className="mb-4 text-gray-700 dark:text-gray-300">{children}</p>
        ),
        ul: ({ children }) => (
            <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-300">{children}</ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal ml-6 mb-4 text-gray-700 dark:text-gray-300">{children}</ol>
        ),
        li: ({ children }) => (
            <li className="mb-1 text-gray-700 dark:text-gray-300">{children}</li>
        ),
        strong: ({ children }) => (
            <strong className="font-bold text-gray-800 dark:text-gray-200">{children}</strong>
        ),
        em: ({ children }) => (
            <em className="italic text-gray-800 dark:text-gray-200">{children}</em>
        ),
        a: ({ href, children }) => (
            <a
                href={href}
                className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
        hr: () => (
            <hr className="my-6 border-gray-300 dark:border-gray-700" />
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2 mb-4 italic text-gray-700 dark:text-gray-400">
                {children}
            </blockquote>
        ),
    };

    // Format the current date
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Replace the placeholder with the actual date
    const updatedContent = privacyPolicyContent.replace('[Current Date]', currentDate);

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
                    <section className="px-2 py-6 sm:py-10">
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
                        </div>
                    </section>

                    {/* Policy Content - Improved Mobile Layout */}
                    <section className="px-4 md:px-6 lg:px-8">
                        <div className="container mx-auto px-4 py-8">
                            <ReactMarkdown components={renderers}>
                                {updatedContent}
                            </ReactMarkdown>
                        </div>
                    </section>

                    <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </main>
        </div>
    );
}