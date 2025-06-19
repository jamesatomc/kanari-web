'use client';
import React from 'react';
import { toast } from 'react-hot-toast';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import Image from 'next/image'
import PageWrapper from '../components/PageWrapper';


const colors = [
    { name: 'Purple', hex: '#7C3AED', bgClass: 'bg-purple-600' },
    { name: 'Orange', hex: '#F97316', bgClass: 'bg-orange-500' },
    { name: 'White', hex: '#FFFFFF', bgClass: 'bg-white' },
];

function MediaKitComponent({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
    const copyToClipboard = (hex: string) => {
        navigator.clipboard.writeText(hex);
        toast.success(`Copied ${hex} to clipboard!`);
    };

    const downloadFile = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop() || '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`transition-colors duration-300 ${darkMode
            ? 'bg-gradient-to-r from-gray-950 to-indigo-950'
            : 'bg-gradient-to-r from-gray-100 to-gray-200'
            }`}>

            <main className="relative min-h-screen overflow-hidden">
                {/* Content */}
                <div className="relative z-10">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <section className="pt-16 sm:pt-24 py-2 px-2"></section>

                    {/* Media Kit Content */}
                    <section className="py-12 sm:py-20 px-4">
                        <div className="max-w-7xl mx-auto text-center">
                            {/* Section Header */}
                            <div className="text-center space-y-4 sm:space-y-6 mb-12">
                                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r ${darkMode
                                    ? 'from-white via-blue-300 to-purple-200'
                                    : 'from-gray-900 via-blue-800 to-purple-900'
                                    } bg-clip-text text-transparent group`}>
                                    Kanari Network:
                                    <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                        Media Kit
                                    </span>
                                    <div className="h-1 w-32 sm:w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                </h2>

                                <p className={`text-base sm:text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                                    The Kanari Media Kit is a collection of resources for journalists, content creators, and community members to use when writing about the Kanari Network. The kit includes logos, brand guidelines, and other assets that can be used to create content that is consistent with the Kanari brand.
                                </p>
                            </div>

                            {/* Resources Colors */}
                            <div className="py-8 sm:py-12 flex flex-col gap-6 sm:gap-8 mb-12">
                                <div className="flex items-center justify-center gap-2 sm:gap-3">
                                    <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                                    <h2 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${darkMode
                                        ? 'from-white to-gray-300'
                                        : 'from-gray-800 to-gray-600'
                                        } bg-clip-text text-transparent`}>Brand Colors</h2>
                                    <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                    {colors.map((color) => (
                                        <div
                                            key={color.hex}
                                            className={`flex flex-col overflow-hidden rounded-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                                        >
                                            <div
                                                onClick={() => copyToClipboard(color.hex)}
                                                className={`w-full h-20 sm:h-28 ${color.bgClass} cursor-pointer ${color.name === 'White' ? `border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}` : ''}`}
                                                title={`Click to copy: ${color.hex}`}
                                            ></div>
                                            <div className={`p-3 sm:p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                                <h3 className={`text-base sm:text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{color.name}</h3>
                                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
                                                    <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2 sm:mb-0`}>{color.hex}</span>
                                                    <button
                                                        onClick={() => copyToClipboard(color.hex)}
                                                        className={`text-xs sm:text-sm ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'} flex items-center gap-1 justify-center sm:justify-start`}
                                                    >
                                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                        Copy
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Logo Assets Section */}
                            <div className="py-8 sm:py-12 flex flex-col gap-6 sm:gap-8">
                                <div className="flex items-center justify-center gap-2 sm:gap-3">
                                    <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                                    <h2 className="text-2xl sm:text-3xl font-bold dark:text-white bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Logo Assets</h2>
                                    <div className="h-0.5 w-8 sm:w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                                    {/* Light Logo */}
                                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
                                        <div className="bg-gray-800 p-6 sm:p-8 flex justify-center items-center h-40 sm:h-56">
                                            <Image
                                                src="/images/logo-light.png"
                                                alt="Kanari Light Logo"
                                                width={200}
                                                height={50}
                                                className="w-auto max-h-24 sm:max-h-32 mx-auto"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-3 sm:h-4 w-1 bg-purple-600 rounded-full"></div>
                                                <h3 className="text-lg sm:text-xl font-semibold dark:text-white">Light Logo</h3>
                                            </div>
                                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 pb-3 border-b border-gray-100 dark:border-gray-700">
                                                For use on dark backgrounds. Available in PNG and SVG formats.
                                            </p>
                                            <div className="flex gap-3 sm:gap-4 justify-center pt-2">
                                                <button
                                                    onClick={() => downloadFile('/images/logo-light.png')}
                                                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm"
                                                >
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    PNG
                                                </button>
                                                <button
                                                    onClick={() => downloadFile('/images/logo-light.svg')}
                                                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm"
                                                >
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    SVG
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dark Logo */}
                                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
                                        <div className="bg-gray-100 p-6 sm:p-8 flex justify-center items-center h-40 sm:h-56">
                                            <Image
                                                src="/images/logo-dark.png"
                                                alt="Kanari Dark Logo"
                                                width={200}
                                                height={50}
                                                className="w-auto max-h-24 sm:max-h-32 mx-auto"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-3 sm:h-4 w-1 bg-purple-600 rounded-full"></div>
                                                <h3 className="text-lg sm:text-xl font-semibold dark:text-white">Dark Logo</h3>
                                            </div>
                                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 pb-3 border-b border-gray-100 dark:border-gray-700">
                                                For use on light backgrounds. Available in PNG and SVG formats.
                                            </p>
                                            <div className="flex gap-3 sm:gap-4 justify-center pt-2">
                                                <button
                                                    onClick={() => downloadFile('/images/logo-dark.png')}
                                                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm"
                                                >
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    PNG
                                                </button>
                                                <button
                                                    onClick={() => downloadFile('/images/logo-dark.svg')}
                                                    className="px-3 sm:px-5 py-2 sm:py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm"
                                                >
                                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    SVG
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>

            </main>
        </div >
    );
}

export default function MediaKit() {
    return (
        <PageWrapper>
            {({ darkMode, setDarkMode }) => (
                <MediaKitComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
        </PageWrapper>
    );
}

