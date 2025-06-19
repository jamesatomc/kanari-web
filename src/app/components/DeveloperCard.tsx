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
                ? 'bg-gradient-to-br from-gray-800/50 to-purple-900/30 border border-purple-500/20 hover:border-purple-400/40'
                : 'bg-gradient-to-br from-white to-purple-50 border border-purple-200 hover:border-purple-300 shadow-lg hover:shadow-xl'
            }`}
            onClick={handleClick}
        >
            {/* Icon container */}
            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${darkMode
                ? 'bg-gradient-to-br from-purple-500 to-blue-600'
                : 'bg-gradient-to-br from-purple-500 to-blue-600'
            }`}>
                <div className="relative z-10">{icon}</div>
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 group-hover:translate-x-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {title}
                </h3>

                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {description}
                </p>

                {/* Hover arrow */}
                <div className={`flex items-center text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Background gradient effect */}
            <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode
                ? 'bg-gradient-to-br from-purple-500/5 to-blue-500/5'
                : 'bg-gradient-to-br from-purple-500/5 to-blue-500/5'
            }`}></div>
        </div>
    );
});

DeveloperCard.displayName = 'DeveloperCard';

