'use client';
import React, { ReactNode, useState } from 'react';
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

export default function PrivacyPolicy() {
    const [darkMode, setDarkMode] = useState(false);

    // Define renderers with proper types that match ReactMarkdown's Components interface
    const renderers = {
        h1: function H1({ node, children, ...rest }: HTMLAttributes<HTMLHeadingElement> & { node?: any, children?: ReactNode }) {
            return <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100" {...rest}>{children}</h1>;
        },
        h2: function H2({ node, children, ...rest }: HTMLAttributes<HTMLHeadingElement> & { node?: any, children?: ReactNode }) {
            return <h2 className="text-2xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-200" {...rest}>{children}</h2>;
        },
        h3: function H3({ node, children, ...rest }: HTMLAttributes<HTMLHeadingElement> & { node?: any, children?: ReactNode }) {
            return <h3 className="text-xl font-bold mb-2 mt-4 text-gray-800 dark:text-gray-200" {...rest}>{children}</h3>;
        },
        p: function Paragraph({ node, children, ...rest }: HTMLAttributes<HTMLParagraphElement> & { node?: any, children?: ReactNode }) {
            return <p className="mb-4 text-gray-700 dark:text-gray-300" {...rest}>{children}</p>;
        },
        ul: function UnorderedList({ node, children, ...rest }: HTMLAttributes<HTMLUListElement> & { node?: any, children?: ReactNode }) {
            return <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300" {...rest}>{children}</ul>;
        },
        ol: function OrderedList({ node, children, ...rest }: OlHTMLAttributes<HTMLOListElement> & { node?: any, children?: ReactNode }) {
            return <ol className="list-decimal pl-5 mb-4 text-gray-700 dark:text-gray-300" {...rest}>{children}</ol>;
        },
        li: function ListItem({ node, children, ...rest }: LiHTMLAttributes<HTMLLIElement> & { node?: any, children?: ReactNode }) {
            return <li className="mb-1 text-gray-700 dark:text-gray-300" {...rest}>{children}</li>;
        },
        strong: function Strong({ node, children, ...rest }: HTMLAttributes<HTMLElement> & { node?: any, children?: ReactNode }) {
            return <strong className="font-bold text-gray-900 dark:text-white" {...rest}>{children}</strong>;
        },
        em: function Emphasis({ node, children, ...rest }: HTMLAttributes<HTMLElement> & { node?: any, children?: ReactNode }) {
            return <em className="italic text-gray-800 dark:text-gray-200" {...rest}>{children}</em>;
        },
        a: function Anchor({ node, href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { node?: any, children?: ReactNode }) {
            return <a href={href} className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300" {...rest}>{children}</a>;
        },
        blockquote: function BlockQuote({ node, children, ...rest }: BlockquoteHTMLAttributes<HTMLQuoteElement> & { node?: any, children?: ReactNode }) {
            return <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 py-2 mb-4 italic text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-gray-800" {...rest}>{children}</blockquote>;
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