'use client';
import React, { useState } from 'react';
import Navbar from '../Section/body/Navbar';
import Footer from '../Section/body/Footer';
import { InvestorCard } from '../Section/body/InvestorCard';


const KanariFoundation = () => {
    const [darkMode, setDarkMode] = useState(false);

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
                                            Kanari Foundation
                                        </span>
                                        <div className="h-1 w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                    </h2>

                                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        The Kanari Foundation is a non-profit organization that supports the development and growth of the Kanari Network ecosystem. Our mission is to foster innovation, education, and collaboration within the community.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Feature Card 1 */}
                                    <InvestorCard
                                        icon={
                                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        }
                                        title="Education"
                                        description="Supporting educational initiatives and digital literacy programs"
                                    />

                                    {/* Feature Card 2 - Repeat similar structure */}
                                    <InvestorCard
                                        icon={
                                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        }
                                        title="Community"
                                        description="Building stronger communities through technology access"
                                    />

                                    {/* Feature Card 3 - Repeat similar structure */}
                                    <InvestorCard
                                        icon={
                                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        }
                                        title="Innovation"
                                        description="Fostering technological innovation and digital transformation."
                                    />
                                </div>
                            </div>

                            {/* Add Statistics Banner */}
                            <div className="mt-20 max-w-7xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {/* 50+ */}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300 mt-2">
                                            Global Partners
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {/* 100K+ */}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300 mt-2">
                                            Community Members
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {/* $10M+ */}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300 mt-2">
                                            In Grants Awarded
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow">
                                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {/* 25+ */}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300 mt-2">
                                            Countries Reached
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

export default KanariFoundation;