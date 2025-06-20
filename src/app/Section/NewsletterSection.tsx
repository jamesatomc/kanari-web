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
            <section className="py-16 sm:py-20 px-4">
                <div className="max-w-7xl mx-auto">

                    <div className={`max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 ${darkMode
                        ? 'bg-gradient-to-br from-gray-800/50 to-blue-900/30 border border-blue-500/20 hover:border-blue-400/40'
                        : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-300'
                        }`}>

                        <div className="text-center mb-16">

                            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                ? 'from-blue-300 to-purple-300'
                                : 'from-blue-800 to-purple-800'
                                } bg-clip-text text-transparent`}>
                                Newsletter Subscription
                            </h2>

                            <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                                Get the latest news, updates, and insights delivered straight to your inbox.
                                Stay informed about our latest developments and innovations.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="relative">
                                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        className={`w-full pl-12 pr-4 py-4 text-base rounded-2xl border transition-all duration-300 focus:ring-2 focus:ring-blue-500/30 focus:border-transparent ${darkMode
                                            ? 'bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400'
                                            : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
                                            }`}
                                        placeholder="Enter your email address"
                                        required
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg
                                            className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`}
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
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${darkMode
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25'
                                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25'
                                    }`}
                            >
                                Subscribe to Newsletter
                            </button>

                            <div className="flex items-start space-x-3 pt-4">
                                <input
                                    id="terms-checkbox"
                                    type="checkbox"
                                    required
                                    className={`mt-1 w-5 h-5 rounded border-2 transition-colors duration-200 ${darkMode
                                        ? 'border-gray-600 bg-gray-800/50 checked:bg-blue-600 checked:border-blue-600'
                                        : 'border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600'
                                        }`}
                                />
                                <label htmlFor="terms-checkbox" className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    I agree to receive marketing communications and accept the{' '}
                                    <button
                                        type="button"
                                        onClick={() => setShowTerms(true)}
                                        className="text-blue-500 hover:text-blue-600 transition-colors duration-300 underline"
                                    >
                                        terms and conditions
                                    </button>
                                    {' '}and{' '}
                                    <button
                                        onClick={() => window.open('/PrivacyPolicy', '_blank')}
                                        type="button"
                                        className="text-blue-500 hover:text-blue-600 transition-colors duration-300 underline"
                                    >
                                        privacy policy
                                    </button>
                                    .
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {showTerms && createPortal(
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
                    <div className={`w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl ${darkMode
                        ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                        : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200'
                        }`}>

                        <div className="flex justify-between items-center p-8 border-b border-gray-200/20">
                            <h2 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${darkMode
                                ? 'from-blue-300 to-purple-300'
                                : 'from-blue-800 to-purple-800'
                                } bg-clip-text text-transparent`}>
                                Terms and Conditions
                            </h2>
                            <button
                                onClick={() => setShowTerms(false)}
                                className={`p-2 rounded-full transition-colors ${darkMode
                                    ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-8 overflow-y-auto max-h-[60vh] custom-scrollbar">
                            <div className={`prose max-w-none ${darkMode ? 'prose-invert' : ''}`}>
                                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>1. Introduction</h3>
                                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    These Website Terms and Conditions contained herein on this webpage, shall govern your use of this website, including all pages within it. These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions.
                                </p>

                                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>2. Intellectual Property Rights</h3>
                                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Other than content you own, which you may have opted to include on this Website, under these Terms, Kanari Network and/or its licensors own all rights to the intellectual property and material contained in this Website.
                                </p>

                                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>3. Your Rights and Responsibilities</h3>
                                <ul className={`list-disc pl-6 mb-6 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    <li>Respect the intellectual property rights of others</li>
                                    <li>Maintain the security of your account</li>
                                    <li>Comply with all applicable laws and regulations</li>
                                    <li>Report any security vulnerabilities or violations</li>
                                </ul>

                                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>4. Privacy & Security</h3>
                                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    We prioritize the protection of your personal information. For detailed information about our data practices, please refer to our Privacy Policy.
                                </p>

                                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>5. Newsletter Communications</h3>
                                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    By subscribing to our newsletter, you consent to receive periodic email communications from Kanari Network. You may unsubscribe at any time using the link provided in our emails.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4 p-8 border-t border-gray-200/20">
                            <button
                                onClick={() => setShowTerms(false)}
                                className={`px-6 py-3 rounded-2xl font-medium transition-colors duration-200 ${darkMode
                                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                                    }`}
                            >
                                Close
                            </button>
                            <button
                                onClick={() => setShowTerms(false)}
                                className={`px-6 py-3 rounded-2xl font-medium text-white transition-all duration-300 ${darkMode
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500'
                                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                                    }`}
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
