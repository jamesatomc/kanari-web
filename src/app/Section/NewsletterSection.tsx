"use client";

import { useState } from 'react';
import './NewsletterSection.css';
import { createPortal } from 'react-dom';

interface NewsletterSectionProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export function NewsletterSection({ darkMode, setDarkMode }: NewsletterSectionProps) {
    const [showTerms, setShowTerms] = useState(false);

    return (
        <>
            <section className="py-20 px-4 relative overflow-hidden">
                {/* Tokyo-style pattern overlay */}
                <div className="absolute inset-0 tokyo-pattern-overlay"></div>

                {/* Japanese decorative kanji */}
                <div className="absolute -right-4 top-20 text-6xl font-bold text-red-500/5 tokyo-kanji">ニュース</div>
                <div className="absolute -left-4 top-40 text-5xl font-bold text-pink-500/5 tokyo-kanji">情報</div>

                <div className={`max-w-4xl mx-auto rounded-2xl shadow-lg p-8 sm:p-10 backdrop-blur-sm 
                ${darkMode
                        ? 'bg-gray-800/20 border-red-500/30'
                        : 'bg-white/20 border-red-300/30'
                    } border 
                hover:scale-105 hover:shadow-xl transition-all duration-300 tokyo-newsletter-card relative overflow-hidden`}>
                    {/* Neo-Tokyo decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-600 tokyo-glow"></div>
                    <div className="absolute top-1 left-4 w-3 h-3 rounded-full bg-red-400 tokyo-glow-red"></div>
                    <div className="absolute top-1 left-10 w-2 h-2 rounded-full bg-pink-400 tokyo-glow-pink"></div>

                    {/* Tokyo corner elements */}
                    <div className="absolute tokyo-corner-tr"></div>
                    <div className="absolute tokyo-corner-tl"></div>
                    <div className="absolute tokyo-corner-br"></div>
                    <div className="absolute tokyo-corner-bl"></div>

                    <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r 
                    ${darkMode
                            ? 'from-red-300 via-pink-300 to-purple-300'
                            : 'from-red-600 via-pink-500 to-purple-600'
                        } bg-clip-text text-transparent`}>
                        Subscribe to Kanari Network Newsletter
                    </h2>

                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg sm:text-xl text-center mb-8`}>
                        Get the latest news, updates, and insights delivered straight to your inbox.
                    </p>

                    <form className="flex flex-col items-center space-y-6 w-full max-w-2xl mx-auto">
                        <div className="relative w-full">
                            <input
                                type="email"
                                id="Email"
                                className={`w-full pl-12 pr-6 py-4 text-base ${darkMode
                                    ? 'bg-gray-800/20 border-red-500/30 text-white placeholder:text-gray-400'
                                    : 'bg-white/20 border-red-300/30 text-gray-900 placeholder:text-gray-500'
                                    } border rounded-xl focus:ring-2 
                                ring-red-500/30 
                                backdrop-blur-sm transition-all duration-300 tokyo-input`}
                                placeholder="Enter your email"
                                required
                            />
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg
                                    className={`h-5 w-5 ${darkMode ? 'text-red-400' : 'text-red-500'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 
                            text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl 
                            transition-all duration-300 hover:-translate-y-1 tokyo-button"
                        >
                            Subscribe
                        </button>

                        <div className="flex items-center justify-center mt-2 space-x-2">
                            <input
                                id="link-checkbox"
                                type="checkbox"
                                required
                                className={`w-5 h-5 rounded ${darkMode
                                    ? 'border-red-500/30 bg-gray-800/20'
                                    : 'border-red-300/30 bg-white/20'
                                    } checked:bg-pink-500`}
                            />
                            <label htmlFor="link-checkbox" className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                I agree with the{' '}
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowTerms(true);
                                    }}
                                    className="text-red-500 hover:text-red-600 transition-colors duration-300"
                                >
                                    terms and conditions
                                </a>
                            </label>
                        </div>
                    </form>
                </div>
            </section>

            {showTerms && createPortal(
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] tokyo-modal-overlay">
                    <div className={`${darkMode
                        ? 'bg-gray-900/90'
                        : 'bg-white/90'
                        } p-8 rounded-2xl max-w-3xl w-full mx-4 shadow-xl relative tokyo-modal`}>
                        {/* Tokyo-style decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-600 tokyo-glow"></div>
                        <div className="absolute top-1 left-4 w-3 h-3 rounded-full bg-red-400 tokyo-glow-red"></div>
                        <div className="absolute top-1 left-10 w-2 h-2 rounded-full bg-pink-400 tokyo-glow-pink"></div>

                        {/* Corner elements */}
                        <div className="absolute tokyo-corner-tr"></div>
                        <div className="absolute tokyo-corner-tl"></div>
                        <div className="absolute tokyo-corner-br"></div>
                        <div className="absolute tokyo-corner-bl"></div>

                        {/* Japanese kanji decoration */}
                        <div className="absolute right-16 bottom-16 text-5xl font-bold text-red-500/5 tokyo-kanji">契約</div>

                        <div className="flex justify-between items-center mb-6">
                            <h2 className={`text-2xl font-bold bg-gradient-to-r ${darkMode
                                ? 'from-red-300 to-pink-300'
                                : 'from-red-600 to-pink-600'
                                } bg-clip-text text-transparent`}>
                                Terms and Conditions
                            </h2>
                            <button
                                onClick={() => setShowTerms(false)}
                                className={`${darkMode
                                    ? 'text-red-400 hover:text-red-200'
                                    : 'text-red-500 hover:text-red-700'
                                    }`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className={`prose ${darkMode ? 'prose-invert' : ''} max-h-[60vh] overflow-y-auto mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} custom-scrollbar`}>
                            <h3 className={`text-xl font-semibold ${darkMode ? 'text-red-300' : 'text-red-600'} mb-4`}>1. Introduction</h3>
                            <p className="mb-6">
                                These Website Terms and Conditions contained herein on this webpage, shall govern your use of this website, including all pages within it. These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions.
                            </p>

                            <h3 className={`text-xl font-semibold ${darkMode ? 'text-red-300' : 'text-red-600'} mb-4`}>2. Intellectual Property Rights</h3>
                            <p className="mb-6">
                                Other than content you own, which you may have opted to include on this Website, under these Terms, Kanari Network and/or its licensors own all rights to the intellectual property and material contained in this Website.
                            </p>

                            <h3 className={`text-xl font-semibold ${darkMode ? 'text-red-300' : 'text-red-600'} mb-4`}>3. Your Rights and Responsibilities</h3>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Respect the intellectual property rights of others</li>
                                <li>Maintain the security of your account</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Report any security vulnerabilities or violations</li>
                            </ul>

                            <h3 className={`text-xl font-semibold ${darkMode ? 'text-red-300' : 'text-red-600'} mb-4`}>4. Privacy & Security</h3>
                            <p className="mb-6">
                                We prioritize the protection of your personal information. For detailed information about our data practices, please refer to our Privacy Policy.
                            </p>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setShowTerms(false)}
                                className={`px-6 py-2.5 ${darkMode
                                    ? 'bg-gray-700 hover:bg-gray-600'
                                    : 'bg-gray-600 hover:bg-gray-700'
                                    } text-white rounded-lg transition-colors duration-200`}
                            >
                                Close
                            </button>
                            <button
                                onClick={() => setShowTerms(false)}
                                className={`px-6 py-2.5 bg-gradient-to-r ${darkMode
                                    ? 'from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
                                    : 'from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700'
                                    } text-white rounded-lg transition-colors duration-200`}
                            >
                                Accept
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
