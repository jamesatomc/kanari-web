'use client';
import React, { ReactNode } from 'react';
import {
    AnchorHTMLAttributes,
    HTMLAttributes,
    BlockquoteHTMLAttributes,
    OlHTMLAttributes,
    LiHTMLAttributes
} from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import ReactMarkdown from 'react-markdown';
import { privacyPolicyContent } from '../data/privacy-policy';
import PageWrapper from '../components/PageWrapper';


function PrivacyPolicyComponent({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
    // Define renderers with proper types that match ReactMarkdown's Components interface
    const renderers = {
        h1: function H1({ node, children, ...rest }: HTMLAttributes<HTMLHeadingElement> & { node?: any, children?: ReactNode }) {
            return <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`} {...rest}>{children}</h1>;
        },
        h2: function H2({ node, children, ...rest }: HTMLAttributes<HTMLHeadingElement> & { node?: any, children?: ReactNode }) {
            return <h2 className={`text-2xl font-bold mb-3 mt-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} {...rest}>{children}</h2>;
        },
        h3: function H3({ node, children, ...rest }: HTMLAttributes<HTMLHeadingElement> & { node?: any, children?: ReactNode }) {
            return <h3 className={`text-xl font-bold mb-2 mt-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} {...rest}>{children}</h3>;
        },
        p: function Paragraph({ node, children, ...rest }: HTMLAttributes<HTMLParagraphElement> & { node?: any, children?: ReactNode }) {
            return <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} {...rest}>{children}</p>;
        },
        ul: function UnorderedList({ node, children, ...rest }: HTMLAttributes<HTMLUListElement> & { node?: any, children?: ReactNode }) {
            return <ul className={`list-disc pl-5 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} {...rest}>{children}</ul>;
        },
        ol: function OrderedList({ node, children, ...rest }: OlHTMLAttributes<HTMLOListElement> & { node?: any, children?: ReactNode }) {
            return <ol className={`list-decimal pl-5 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} {...rest}>{children}</ol>;
        },
        li: function ListItem({ node, children, ...rest }: LiHTMLAttributes<HTMLLIElement> & { node?: any, children?: ReactNode }) {
            return <li className={`mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} {...rest}>{children}</li>;
        },
        strong: function Strong({ node, children, ...rest }: HTMLAttributes<HTMLElement> & { node?: any, children?: ReactNode }) {
            return <strong className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`} {...rest}>{children}</strong>;
        },
        em: function Emphasis({ node, children, ...rest }: HTMLAttributes<HTMLElement> & { node?: any, children?: ReactNode }) {
            return <em className={`italic ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} {...rest}>{children}</em>;
        },
        a: function Anchor({ node, href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { node?: any, children?: ReactNode }) {
            return <a href={href} className={`${darkMode 
                ? 'text-blue-400 hover:text-blue-300' 
                : 'text-blue-600 hover:underline'
            }`} {...rest}>{children}</a>;
        },
        blockquote: function BlockQuote({ node, children, ...rest }: BlockquoteHTMLAttributes<HTMLQuoteElement> & { node?: any, children?: ReactNode }) {
            return <blockquote className={`border-l-4 pl-4 py-2 mb-4 italic ${darkMode
                ? 'border-gray-700 text-gray-400 bg-gray-800'
                : 'border-gray-200 text-gray-700 bg-gray-50'
            }`} {...rest}>{children}</blockquote>;
        },
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
            ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950'
            : 'bg-gradient-to-br from-white via-gray-50 to-blue-50'
            }`}>

            <main className="relative min-h-screen overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-20 right-20 w-96 h-96 ${darkMode ? 'bg-blue-500/5' : 'bg-blue-200/20'} rounded-full blur-3xl`}></div>
                    <div className={`absolute bottom-20 left-20 w-80 h-80 ${darkMode ? 'bg-indigo-500/5' : 'bg-indigo-200/20'} rounded-full blur-3xl`}></div>
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
                                    🔒 Your Privacy Matters
                                </div>

                                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r ${darkMode
                                    ? 'from-white via-blue-200 to-indigo-200'
                                    : 'from-gray-900 via-blue-800 to-indigo-900'
                                } bg-clip-text text-transparent`}>
                                    Privacy Policy
                                    <span className="block mt-2 text-2xl sm:text-3xl md:text-3xl font-medium opacity-80">
                                        Transparent & Secure
                                    </span>
                                </h1>

                                <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
                                    Your privacy is important to us. Learn how Kanari Network collects, uses, and protects your information across our platform and services.
                                </p>

                                <div className={`inline-flex items-center px-4 py-2 rounded-lg text-sm ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                                    Last updated: {currentDate}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Policy Content */}
                    <section className="py-8 px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className={`rounded-3xl p-8 sm:p-12 ${darkMode
                                ? 'bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm'
                                : 'bg-white/70 border border-gray-200/50 backdrop-blur-sm shadow-xl'
                            }`}>
                                <ReactMarkdown components={renderers}>
                                    {updatedContent}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="py-16 px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className={`rounded-3xl p-8 sm:p-12 ${darkMode
                                ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-500/20'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                            } backdrop-blur-sm`}>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Questions About Privacy?
                                </h2>
                                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                    If you have any questions about this Privacy Policy or our data practices, we&apos;re here to help.
                                </p>
                                <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                    Contact Privacy Team
                                </button>
                            </div>
                        </div>
                    </section>

                    <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </main>
        </div>
    );
}

export default function PrivacyPolicy() {
    return (
        <PageWrapper>
            {({ darkMode, setDarkMode }) => (
                <PrivacyPolicyComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
        </PageWrapper>
    );
}