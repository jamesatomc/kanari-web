'use client';

import React, { memo } from 'react';
import '../.././Section/body/Navbar'

interface InvestorCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    onClick?: () => void;
    buttonText?: string;
}

// Memoize component for better performance
export const InvestorCard: React.FC<InvestorCardProps> = memo(({ icon, title, description, darkMode, setDarkMode, onClick, buttonText = "Learn More" }) => {
    return (
        <div
            className={`p-8 rounded-3xl transition-all duration-300 hover:scale-105 group relative overflow-hidden mx-auto flex flex-col items-center text-center ${onClick ? 'cursor-pointer' : ''} ${darkMode
                ? 'bg-white/6 text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20'
                : 'bg-white text-black border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                }`}
            onClick={onClick}
        >
            {/* Icon container */}
            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 ${darkMode
                ? 'bg-gray-700'
                : 'bg-black'
                }`}>
                <div className={`${darkMode ? 'text-white' : 'text-white'}`}>
                    {icon}
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                    {title}
                </h3>

                <p className={`${darkMode ? 'text-white' : 'text-gray-600'} text-sm sm:text-base leading-relaxed`}>
                    {description}
                </p>

                {/* Learn more indicator - only show when clickable */}
                {onClick && (
                    <div className="flex items-center justify-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors pt-4">
                        <span className="text-sm font-medium">{buttonText}</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
});

// Add display name to fix react/display-name rule
InvestorCard.displayName = 'InvestorCard';