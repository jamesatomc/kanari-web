'use client';
import React from 'react';
import { toast } from 'react-hot-toast';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import Image from 'next/image'
import PageWrapper from '../components/PageWrapper';

const colors = [
    { name: 'Primary Purple', hex: '#7C3AED', bgClass: 'bg-purple-600', description: 'Main brand color' },
    { name: 'Accent Orange', hex: '#F97316', bgClass: 'bg-orange-500', description: 'Highlight color' },
    { name: 'Pure White', hex: '#FFFFFF', bgClass: 'bg-white', description: 'Clean backgrounds' },
    { name: 'Deep Blue', hex: '#1E40AF', bgClass: 'bg-blue-700', description: 'Trust & stability' },
];

function MediaKitComponent({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (darkMode: boolean) => void }) {
    const copyToClipboard = (hex: string) => {
        navigator.clipboard.writeText(hex);
        toast.success(`Copied ${hex} to clipboard!`, {
            style: {
                background: darkMode ? '#374151' : '#fff',
                color: darkMode ? '#fff' : '#000',
            },
        });
    };

    const downloadFile = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop() || '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success('Download started!', {
            style: {
                background: darkMode ? '#374151' : '#fff',
                color: darkMode ? '#fff' : '#000',
            },
        });
    };

    return (
        <div className={`transition-colors duration-300 ${darkMode
            ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-purple-950'
            : 'bg-gradient-to-br from-white via-orange-50 to-purple-50'
            }`}>

            <main className="relative min-h-screen overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-32 right-32 w-96 h-96 ${darkMode ? 'bg-purple-500/10' : 'bg-purple-200/30'} rounded-full blur-3xl`}></div>
                    <div className={`absolute bottom-32 left-32 w-80 h-80 ${darkMode ? 'bg-orange-500/10' : 'bg-orange-200/30'} rounded-full blur-3xl`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <section className="pt-16 sm:pt-24 py-2 px-2"></section>

                    {/* Hero Section */}
                    <section className="py-16 sm:py-24 px-4">
                        <div className="max-w-7xl mx-auto text-center">
                            <div className="space-y-6 sm:space-y-8 mb-16">
                                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${darkMode 
                                    ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                                    : 'bg-orange-100 text-orange-800 border border-orange-200'
                                }`}>
                                    🎨 Brand Resources & Assets
                                </div>

                                <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-gradient-to-r ${darkMode
                                    ? 'from-white via-orange-200 to-purple-200'
                                    : 'from-gray-900 via-orange-800 to-purple-900'
                                } bg-clip-text text-transparent`}>
                                    Media Kit
                                    <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-medium opacity-80">
                                        Everything You Need
                                    </span>
                                </h1>

                                <p className={`text-lg sm:text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
                                    Professional brand assets, logos, and guidelines for journalists, partners, and community members creating content about Kanari Network.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Brand Colors Section */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className={`text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-orange-300 to-purple-300'
                                    : 'from-orange-800 to-purple-800'
                                } bg-clip-text text-transparent`}>
                                    Brand Colors
                                </h2>
                                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                                    Our carefully selected palette that represents innovation, trust, and energy
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {colors.map((color) => (
                                    <div
                                        key={color.hex}
                                        className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 ${darkMode 
                                            ? 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/70' 
                                            : 'bg-white border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                                        }`}
                                    >
                                        <div
                                            onClick={() => copyToClipboard(color.hex)}
                                            className={`w-full h-32 ${color.bgClass} cursor-pointer transition-all duration-300 group-hover:h-36 ${
                                                color.name === 'Pure White' ? `border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}` : ''
                                            }`}
                                            title={`Click to copy: ${color.hex}`}
                                        >
                                            <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                {color.name}
                                            </h3>
                                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                                                {color.description}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className={`text-sm font-mono ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {color.hex}
                                                </span>
                                                <button
                                                    onClick={() => copyToClipboard(color.hex)}
                                                    className={`text-sm font-medium transition-colors ${darkMode 
                                                        ? 'text-purple-400 hover:text-purple-300' 
                                                        : 'text-purple-600 hover:text-purple-800'
                                                    }`}
                                                >
                                                    Copy
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Logo Assets Section */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className={`text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-purple-300 to-orange-300'
                                    : 'from-purple-800 to-orange-800'
                                } bg-clip-text text-transparent`}>
                                    Logo Assets
                                </h2>
                                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                                    High-quality logos optimized for different use cases and backgrounds
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Light Logo */}
                                <div className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${darkMode 
                                    ? 'bg-gray-800/50 border border-gray-700/50' 
                                    : 'bg-white border border-gray-200 shadow-xl'
                                }`}>
                                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 flex justify-center items-center min-h-[200px]">
                                        <Image
                                            src="/images/logo-light.png"
                                            alt="Kanari Light Logo"
                                            width={250}
                                            height={60}
                                            className="w-auto max-h-16 mx-auto"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"></div>
                                            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                Light Version
                                            </h3>
                                        </div>
                                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                                            Perfect for dark backgrounds, presentations, and digital media. Available in multiple formats for maximum compatibility.
                                        </p>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => downloadFile('/images/logo-light.png')}
                                                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-600 text-white rounded-xl hover:from-purple-700 hover:to-orange-700 flex items-center justify-center gap-2 transition-all duration-300 font-semibold"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                PNG
                                            </button>
                                            <button
                                                onClick={() => downloadFile('/images/logo-light.svg')}
                                                className={`flex-1 px-6 py-3 rounded-xl border-2 transition-all duration-300 font-semibold ${darkMode
                                                    ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                                                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900'
                                                }`}
                                            >
                                                SVG
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Dark Logo */}
                                <div className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${darkMode 
                                    ? 'bg-gray-800/50 border border-gray-700/50' 
                                    : 'bg-white border border-gray-200 shadow-xl'
                                }`}>
                                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 flex justify-center items-center min-h-[200px]">
                                        <Image
                                            src="/images/logo-dark.png"
                                            alt="Kanari Dark Logo"
                                            width={250}
                                            height={60}
                                            className="w-auto max-h-16 mx-auto"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full"></div>
                                            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                Dark Version
                                            </h3>
                                        </div>
                                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                                            Ideal for light backgrounds, documents, and print materials. Maintains brand consistency across all mediums.
                                        </p>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => downloadFile('/images/logo-dark.png')}
                                                className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-600 to-purple-600 text-white rounded-xl hover:from-orange-700 hover:to-purple-700 flex items-center justify-center gap-2 transition-all duration-300 font-semibold"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                PNG
                                            </button>
                                            <button
                                                onClick={() => downloadFile('/images/logo-dark.svg')}
                                                className={`flex-1 px-6 py-3 rounded-xl border-2 transition-all duration-300 font-semibold ${darkMode
                                                    ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                                                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900'
                                                }`}
                                            >
                                                SVG
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Usage Guidelines CTA */}
                    <section className="py-16 px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className={`rounded-3xl p-8 sm:p-12 text-center ${darkMode
                                ? 'bg-gradient-to-r from-orange-900/50 to-purple-900/50 border border-orange-500/20'
                                : 'bg-gradient-to-r from-orange-600 to-purple-600'
                            } backdrop-blur-sm`}>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    Need More Resources?
                                </h2>
                                <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                                    Looking for specific assets, brand guidelines, or have questions about usage? We&apos;re here to help.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-orange-600 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                        Download Full Kit
                                    </button>
                                    <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-orange-600">
                                        Contact Brand Team
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

export default function MediaKit() {
    return (
        <PageWrapper>
            {({ darkMode, setDarkMode }) => (
                <MediaKitComponent darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
        </PageWrapper>
    );
}

