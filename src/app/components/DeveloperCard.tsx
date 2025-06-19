'use client';

import React, { memo } from 'react';

interface DeveloperCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    darkMode: boolean;
    onClick?: () => void;
    url?: string;
}

export const DeveloperCard: React.FC<DeveloperCardProps> = memo(({ 
    icon, 
    title, 
    description, 
    darkMode, 
    onClick,
    url
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <div 
            className={`group relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 cursor-pointer ${darkMode
                ? 'bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/40'
                : 'bg-white/70 border border-gray-200/50 backdrop-blur-sm shadow-xl hover:border-blue-300'
            }`}
            onClick={handleClick}
        >
            {/* Icon container */}
            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${darkMode
                ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                : 'bg-gradient-to-br from-blue-500 to-indigo-600'
            }`}>
                <div className="relative z-10">{icon}</div>
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 transition-all duration-300 group-hover:translate-x-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h3>

                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {description}
                </p>

                {/* Hover arrow */}
                <div className={`flex items-center text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Background gradient effect */}
            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode
                ? 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'
                : 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'
            }`}></div>
        </div>
    );
});

DeveloperCard.displayName = 'DeveloperCard';

