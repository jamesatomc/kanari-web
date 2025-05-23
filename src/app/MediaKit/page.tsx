'use client';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import Image from 'next/image'


const colors = [
    { name: 'Purple', hex: '#7C3AED', bgClass: 'bg-purple-600' },
    { name: 'Orange', hex: '#F97316', bgClass: 'bg-orange-500' },
    { name: 'White', hex: '#FFFFFF', bgClass: 'bg-white' },
];

export default function MediaKit() {
    const [darkMode, setDarkMode] = useState(false);
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
            ? 'dark bg-gray-900 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900'
            : 'bg-gradient-to-r from-gray-100 to-gray-200'
            }`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="relative">


                {/* Features Section - Neo-Tokyo 2077 */}
                <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-950 dark:to-indigo-950">
                
                    {/* Neo-Tokyo Cyberpunk Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Base gradient - cyberpunk inspired colors */}
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-200/70 via-purple-200/50 to-fuchsia-200/60 dark:from-indigo-900/80 dark:via-purple-900/70 dark:to-fuchsia-900/60"></div>
                        
                        {/* Cyberpunk Grid */}
                        <div className="absolute inset-0 cyber-grid"></div>
                        
                        {/* Digital scan line effect - enhanced */}
                        <div className="absolute inset-0 cyber-scan-lines"></div>
                        
                        {/* Neo-Tokyo cityscape silhouette */}
                        <div className="absolute bottom-0 left-0 right-0 h-[30vh] neo-tokyo-skyline"></div>
                        
                        {/* Holographic interfaces */}
                        <div className="absolute top-[10%] left-[5%] w-[200px] h-[150px] holo-interface holo-blue"></div>
                        <div className="absolute bottom-[20%] right-[8%] w-[180px] h-[120px] holo-interface holo-purple"></div>
                        
                        {/* Floating kanji holograms */}
                        <div className="absolute top-[15%] right-[15%] cyber-kanji text-[12rem] cyber-glow-text-pink">技</div>
                        <div className="absolute bottom-[25%] left-[10%] cyber-kanji text-[10rem] cyber-glow-text-blue">未来</div>
                        <div className="absolute top-[40%] left-[20%] cyber-kanji text-[8rem] cyber-glow-text-purple">力</div>
                        
                        
                        {/* Cyberpunk torii gates with neon glow */}
                        <div className="absolute bottom-[5%] left-[25%] w-[150px] h-[120px] cyber-torii-gate"></div>
                        <div className="absolute bottom-[10%] right-[20%] w-[100px] h-[80px] cyber-torii-gate"></div>
                        
                        {/* Neon accent lines */}
                        <div className="absolute top-0 left-0 h-[80vh] w-[3px] neon-line neon-blue"></div>
                        <div className="absolute top-0 right-0 h-[60vh] w-[3px] neon-line neon-purple"></div>
                        <div className="absolute top-[30%] left-[30%] h-[2px] w-[150px] neon-line neon-pink horizontal"></div>
                        <div className="absolute bottom-[40%] right-[25%] h-[2px] w-[200px] neon-line neon-cyan horizontal"></div>
                        
                        {/* Digital data streams */}
                        <div className="absolute top-0 left-[20%] data-stream data-stream-1"></div>
                        <div className="absolute top-0 right-[40%] data-stream data-stream-2"></div>
                        <div className="absolute top-[30%] right-0 data-stream data-stream-3 horizontal"></div>
                        
                        {/* Glitching elements */}
                        <div className="absolute top-[10%] left-[40%] glitch-box"></div>
                        <div className="absolute bottom-[15%] right-[30%] glitch-box"></div>
                        
                        {/* Cyberpunk UI elements */}
                        <div className="absolute top-5 left-5 w-[250px] h-[150px] cyber-ui-element left-align"></div>
                        <div className="absolute top-5 right-5 w-[250px] h-[150px] cyber-ui-element right-align"></div>
                        <div className="absolute bottom-5 left-5 w-[200px] h-[100px] cyber-ui-element left-align bottom"></div>
                        <div className="absolute bottom-5 right-5 w-[200px] h-[100px] cyber-ui-element right-align bottom"></div>
                        
                        {/* Neon Japanese patterns */}
                        <div className="absolute top-[5%] left-0 w-full h-[80px] neon-seigaiha"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[80px] neon-asanoha"></div>
                        
                        {/* Holographic circles */}
                        <div className="absolute top-[30%] left-[10%] w-[150px] h-[150px] holo-circle"></div>
                        <div className="absolute bottom-[30%] right-[15%] w-[200px] h-[200px] holo-circle"></div>
                        
                        {/* Cyberpunk tech circles */}
                        <div className="absolute top-[20%] right-[30%] cyber-circle cyber-circle-lg"></div>
                        <div className="absolute bottom-[20%] left-[35%] cyber-circle cyber-circle-md"></div>
                        <div className="absolute top-[50%] left-[15%] cyber-circle cyber-circle-sm"></div>
                        
                        {/* Digital noise overlay */}
                        <div className="absolute inset-0 digital-noise"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <section className="pt-24 py-2 px-2 "></section>

                        <section className="py-20 px-4"> {/* Added dark mode gradient */}
                            <div className="max-w-7xl mx-auto text-center">
                                <div className="text-center space-y-6">
                                    <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 dark:to-purple-200 bg-clip-text text-transparent group">
                                        Kanari Network:
                                        <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                                            Media Kit
                                        </span>
                                        <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                    </h2>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        The Kanari Media Kit is a collection of resources for journalists, content creators, and community members to use when writing about the Kanari Network. The kit includes logos, brand guidelines, and other assets that can be used to create content that is consistent with the Kanari brand.
                                    </p>
                                </div>

                                {/* Resources Colors - Improved Section */}
                                <div className="py-12 flex flex-col gap-8">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                                        <h2 className="text-3xl font-bold dark:text-white bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Brand Colors</h2>
                                        <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        {colors.map((color) => (
                                            <div 
                                                key={color.hex} 
                                                className="flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                            >
                                                <div 
                                                    onClick={() => copyToClipboard(color.hex)}
                                                    className={`w-full h-28 ${color.bgClass} cursor-pointer ${color.name === 'White' ? 'border-b dark:border-gray-600' : ''}`}
                                                    title={`Click to copy: ${color.hex}`}
                                                ></div>
                                                <div className="p-4 bg-white dark:bg-gray-800">
                                                    <h3 className="text-lg font-semibold dark:text-white">{color.name}</h3>
                                                    <div className="flex justify-between items-center mt-2">
                                                        <span className="text-sm text-gray-500 dark:text-gray-400">{color.hex}</span>
                                                        <button 
                                                            onClick={() => copyToClipboard(color.hex)}
                                                            className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 flex items-center gap-1"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                                {/* Logo Assets Section - Improved */}
                                <div className="py-12 flex flex-col gap-8">
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                                        <h2 className="text-3xl font-bold dark:text-white bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Logo Assets</h2>
                                        <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        {/* Light Logo */}
                                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
                                            <div className="bg-gray-800 p-8 flex justify-center items-center h-56">
                                                <Image
                                                    src="/images/logo-light.png"
                                                    alt="Kanari Light Logo"
                                                    width={200}
                                                    height={50}
                                                    className="w-auto max-h-32 mx-auto"
                                                />
                                            </div>
                                            <div className="p-6 space-y-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-4 w-1 bg-purple-600 rounded-full"></div>
                                                    <h3 className="text-xl font-semibold dark:text-white">Light Logo</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 pb-3 border-b border-gray-100 dark:border-gray-700">
                                                    For use on dark backgrounds. Available in PNG and SVG formats.
                                                </p>
                                                <div className="flex gap-4 justify-center pt-2">
                                                    <button
                                                        onClick={() => downloadFile('/images/logo-light.png')}
                                                        className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                        </svg>
                                                        PNG
                                                    </button>
                                                    <button
                                                        onClick={() => downloadFile('/images/logo-light.svg')}
                                                        className="px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                        </svg>
                                                        SVG
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dark Logo */}
                                        <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
                                            <div className="bg-gray-100 p-8 flex justify-center items-center h-56">
                                                <Image
                                                    src="/images/logo-dark.png"
                                                    alt="Kanari Dark Logo"
                                                    width={200}
                                                    height={50}
                                                    className="w-auto max-h-32 mx-auto"
                                                />
                                            </div>
                                            <div className="p-6 space-y-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-4 w-1 bg-purple-600 rounded-full"></div>
                                                    <h3 className="text-xl font-semibold dark:text-white">Dark Logo</h3>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 pb-3 border-b border-gray-100 dark:border-gray-700">
                                                    For use on light backgrounds. Available in PNG and SVG formats.
                                                </p>
                                                <div className="flex gap-4 justify-center pt-2">
                                                    <button
                                                        onClick={() => downloadFile('/images/logo-dark.png')}
                                                        className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                        </svg>
                                                        PNG
                                                    </button>
                                                    <button
                                                        onClick={() => downloadFile('/images/logo-dark.svg')}
                                                        className="px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                </section>

            </main>
        </div>
    );
};

