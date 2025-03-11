import React from 'react';
import './InvestorCard.css';


interface InvestorCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const InvestorCard: React.FC<InvestorCardProps> = ({ icon, title, description }) => {
    return (
        <div className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-blue-300/20 
                  dark:border-purple-500/30 rounded-xl p-8 hover:scale-105 hover:shadow-xl transition-all 
                  duration-300 group relative overflow-hidden cyber-card">
            {/* Neo-Tokyo decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-600 cyber-glow"></div>
            <div className="absolute top-1 left-4 w-3 h-3 rounded-full bg-blue-400 cyber-glow-blue"></div>
            <div className="absolute top-1 left-10 w-2 h-2 rounded-full bg-purple-400 cyber-glow-purple"></div>
            
            {/* Tech pattern overlay */}
            <div className="absolute right-0 top-0 h-full w-1/3 tech-pattern opacity-20"></div>
            
            {/* Digital circuits */}
            <div className="absolute left-2 top-8 w-8 h-32 cyber-circuit-vertical"></div>
            <div className="absolute right-8 bottom-2 h-8 w-32 cyber-circuit-horizontal"></div>
            
            <div className="relative z-10 flex flex-col items-start space-y-6">
                {/* Icon container - cyberpunk style */}
                <div className="cyber-icon-container bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 
                      dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 p-3 rounded-xl shadow-neo mx-auto mb-6 
                      w-fit transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative">
                    {/* Holographic ring effect */}
                    <div className="absolute inset-0 rounded-xl holo-ring"></div>
                    <div className="relative z-10 cyber-glow-text">{icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-4 relative">
                    {/* Cyberpunk-styled title */}
                    <h3 className="text-2xl font-bold cyber-text-glitch bg-gradient-to-r from-cyan-400 via-blue-500 
                        to-purple-600 dark:from-cyan-300 dark:via-blue-400 dark:to-purple-300 
                        bg-clip-text text-transparent group-hover:scale-105 transition-transform relative">
                        {/* Glitch effect container - Fixed by adding data-text attribute */}
                        <span className="cyber-glitch-effect" data-text={title}>{title}</span>
                        {/* Underline with neo effect */}
                        <div className="h-1 w-2/3 mt-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full 
                             cyber-glow group-hover:w-full transition-all duration-500 opacity-80"></div>
                    </h3>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative cyber-paragraph">
                        {description}
                        {/* Decorative digital bits */}
                        <span className="cyber-bits absolute -bottom-2 left-0"></span>
                    </p>
                </div>
            </div>

            {/* Cyberpunk background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/20 
                    dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl -z-10 cyber-noise-bg"></div>
                    
            {/* Neon glow blob */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 
                    to-purple-600/20 dark:from-cyan-500/20 dark:via-blue-600/15 dark:to-purple-700/20 blur-3xl rounded-full 
                    group-hover:scale-150 group-hover:opacity-40 transition-all duration-700 cyber-pulse"></div>
                    
            {/* Scan lines overlay */}
            <div className="absolute inset-0 cyber-scan-lines opacity-[0.03] dark:opacity-[0.07] pointer-events-none"></div>
            
            {/* Digital corner elements */}
            <div className="absolute top-0 right-0 cyber-corner-tr"></div>
            <div className="absolute bottom-0 left-0 cyber-corner-bl"></div>
            
            {/* Holographic shimmer */}
            <div className="absolute inset-0 cyber-shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
        </div>
    );
};