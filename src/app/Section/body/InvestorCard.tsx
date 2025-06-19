'use client';

import React, { memo, useState } from 'react';
import '../.././Section/body/Navbar'
import './InvestorCard.css';

interface InvestorCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    onClick?: () => void;
}

// Memoize component for better performance
export const InvestorCard: React.FC<InvestorCardProps> = memo(({ icon, title, description, darkMode, setDarkMode, onClick }) => {
    return (
        <div 
            className={`backdrop-blur-sm rounded-xl p-8 hover:scale-105 hover:shadow-xl transition-all 
                  duration-300 group relative overflow-hidden tokyo-cyber-card ${onClick ? 'cursor-pointer' : ''} ${darkMode
                ? 'bg-gray-900/30 border border-red-400/30'
                : 'bg-white/20 border border-red-500/30'
            }`}
            onClick={onClick}
        >


            {/* Neo-Tokyo decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-purple-600 tokyo-glow"></div>
            <div className="absolute top-1 left-4 w-3 h-3 rounded-full bg-red-400 tokyo-glow-red"></div>
            <div className="absolute top-1 left-10 w-2 h-2 rounded-full bg-purple-400 tokyo-glow-purple"></div>

            {/* Japanese pattern overlay */}
            <div className="absolute right-0 top-0 h-full w-1/3 tokyo-pattern opacity-20"></div>

            {/* Japanese calligraphy decorative elements */}
            <div className="absolute -left-2 top-1/4 text-3xl font-bold text-red-500/10 tokyo-kanji rotate-90">投資</div>
            <div className="absolute right-4 bottom-8 text-2xl font-bold text-purple-500/10 tokyo-kanji">未来</div>

            {/* Digital circuits with Japanese style */}
            <div className="absolute left-2 top-8 w-8 h-32 tokyo-circuit-vertical"></div>
            <div className="absolute right-8 bottom-2 h-8 w-32 tokyo-circuit-horizontal"></div>

            <div className="relative z-10 flex flex-col items-start space-y-6">
                {/* Icon container with Japanese cyberpunk styling */}
                <div className={`tokyo-icon-container p-3 rounded-xl shadow-tokyo mx-auto mb-6 
                      w-fit transform group-hover:rotate-3 group-hover:scale-110 transition-all duration-300 relative
                      bg-gradient-to-br ${darkMode
                        ? 'from-red-400 via-pink-500 to-purple-500'
                        : 'from-red-500 via-pink-600 to-purple-600'}`}>
                    {/* Enhanced holographic effect */}
                    <div className="absolute inset-0 rounded-xl tokyo-holo-ring"></div>
                    <div className="relative z-10 tokyo-neon-glow">{icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-4 relative">
                    {/* Updated title styling with Tokyo-inspired neon effect */}
                    <h3 className={`text-2xl font-bold tracking-tight leading-tight bg-gradient-to-r bg-clip-text text-transparent group-hover:scale-105 transition-transform ${darkMode
                        ? 'from-red-300 via-pink-300 to-purple-200'
                        : 'from-red-600 via-pink-500 to-purple-600'
                        }`}>
                        {title}
                        {/* Underline with better visibility */}
                        <div className="h-1 w-2/3 mt-1 bg-gradient-to-r from-red-500 to-purple-600 
                             rounded-full transform origin-left group-hover:w-full transition-all duration-500"></div>
                    </h3>

                    <p className={`leading-relaxed relative ${darkMode
                        ? 'text-gray-300'
                        : 'text-gray-700'
                        }`}>
                        {description}
                        {/* Decorative digital bits */}
                        <span className="cyber-bits absolute -bottom-2 left-0"></span>
                    </p>
                </div>
            </div>

            {/* Simplified background effects */}
            <div className={`absolute inset-0 bg-gradient-to-br rounded-xl -z-10 ${darkMode
                    ? 'from-blue-900/10 to-purple-900/10'
                    : 'from-blue-100/20 to-purple-100/10'
                }`}></div>

            {/* Reduced glow blob effect */}
            <div className={`absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br blur-2xl rounded-full 
                    group-hover:opacity-30 transition-opacity duration-500 cyber-pulse ${darkMode
                    ? 'from-cyan-500/15 to-purple-700/15'
                    : 'from-cyan-400/15 to-purple-600/15'
                }`}></div>

            {/* Digital corner elements */}
            <div className="absolute top-0 right-0 cyber-corner-tr"></div>
            <div className="absolute bottom-0 left-0 cyber-corner-bl"></div>
        </div>
    );
});

// Add display name to fix react/display-name rule
InvestorCard.displayName = 'InvestorCard';