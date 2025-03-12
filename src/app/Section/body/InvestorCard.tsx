import React, { memo } from 'react';
import './InvestorCard.css';

interface InvestorCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

// Memoize component for better performance
export const InvestorCard: React.FC<InvestorCardProps> = memo(({ icon, title, description }) => {
    return (
        <div className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-blue-300/20 
                  dark:border-purple-500/30 rounded-xl p-8 hover:scale-105 hover:shadow-xl transition-all 
                  duration-300 group relative overflow-hidden cyber-card">
            {/* Neo-Tokyo decorative elements - simplified */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-600 cyber-glow"></div>
            <div className="absolute top-1 left-4 w-3 h-3 rounded-full bg-blue-400 cyber-glow-blue"></div>
            <div className="absolute top-1 left-10 w-2 h-2 rounded-full bg-purple-400 cyber-glow-purple"></div>
            
            {/* Tech pattern overlay */}
            <div className="absolute right-0 top-0 h-full w-1/3 tech-pattern opacity-20"></div>
            
            {/* Reduced digital circuits for better performance */}
            <div className="absolute left-2 top-8 w-8 h-32 cyber-circuit-vertical"></div>
            <div className="absolute right-8 bottom-2 h-8 w-32 cyber-circuit-horizontal"></div>
            
            <div className="relative z-10 flex flex-col items-start space-y-6">
                {/* Icon container - simplified for better performance */}
                <div className="cyber-icon-container bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 
                      dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 p-3 rounded-xl shadow-neo mx-auto mb-6 
                      w-fit transform group-hover:rotate-3 group-hover:scale-110 transition-all duration-300 relative">
                    {/* Simplified holographic effect */}
                    <div className="absolute inset-0 rounded-xl holo-ring"></div>
                    <div className="relative z-10 cyber-glow-text">{icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-4 relative">
                    {/* Updated title styling with better contrast */}
                    <h3 className="text-2xl font-bold tracking-tight leading-tight bg-gradient-to-r 
                        from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 
                        dark:to-purple-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                        {title}
                        {/* Underline with better visibility */}
                        <div className="h-1 w-2/3 mt-1 bg-gradient-to-r from-blue-500 to-purple-600 
                             rounded-full transform origin-left group-hover:w-full transition-all duration-500"></div>
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative">
                        {description}
                        {/* Decorative digital bits */}
                        <span className="cyber-bits absolute -bottom-2 left-0"></span>
                    </p>
                </div>
            </div>

            {/* Simplified background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/10 
                    dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl -z-10"></div>
                    
            {/* Reduced glow blob effect */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-cyan-400/15 to-purple-600/15
                    dark:from-cyan-500/15 dark:to-purple-700/15 blur-2xl rounded-full 
                    group-hover:opacity-30 transition-opacity duration-500 cyber-pulse"></div>
                    
            {/* Digital corner elements */}
            <div className="absolute top-0 right-0 cyber-corner-tr"></div>
            <div className="absolute bottom-0 left-0 cyber-corner-bl"></div>
        </div>
    );
});

// Add display name to fix react/display-name rule
InvestorCard.displayName = 'InvestorCard';