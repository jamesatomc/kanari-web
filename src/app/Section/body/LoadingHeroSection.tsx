import React, { useState, useEffect } from 'react';
import "./LoadingHeroSection.css";

const LoadingHeroSection = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                const increment = Math.max(1, (100 - prevProgress) / 10);
                return Math.min(prevProgress + increment, 100);
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-indigo-950 to-violet-950 relative overflow-hidden font-['Rajdhani',sans-serif]">
            {/* Anime-inspired Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-fuchsia-900/30 to-black/50"></div>
                
                {/* Digital grid pattern */}
                <div className="absolute inset-0 cyber-grid"></div>
                
                {/* Japanese decorative characters - floating and glowing */}
                <div className="absolute top-[15%] left-[5%] text-cyan-400/20 text-7xl font-bold animate-float-slow" style={{writingMode: 'vertical-rl'}}>
                    システム
                </div>
                <div className="absolute bottom-[15%] right-[5%] text-fuchsia-400/20 text-7xl font-bold animate-float-delay" style={{writingMode: 'vertical-rl'}}>
                    ロード
                </div>
                
                {/* Hexagonal tech pattern overlay */}
                <div className="absolute inset-0 hex-pattern opacity-10"></div>
                
                {/* Digital particles effect */}
                <div className="stars-container">
                    <div className="parallax-stars stars-small animate-float-slow"></div>
                    <div className="parallax-stars stars-medium animate-float-delay"></div>
                    <div className="parallax-stars stars-large animate-float-slow"></div>
                </div>
            </div>
        
            {/* Centered Content Container */}
            <div className="relative z-10 container mx-auto h-screen flex flex-col items-center justify-center px-4">
                {/* Tech Circle Loading */}
                <div className="relative mb-12">
                    <div className="w-52 h-52 rounded-full bg-gradient-to-r from-indigo-900/40 to-fuchsia-900/40 border border-cyan-400/30 p-1">
                        <div className="w-full h-full rounded-full border border-cyan-400/20 flex items-center justify-center">
                            {/* Inner spinning ring */}
                            <div className="absolute w-48 h-48 rounded-full border-2 border-t-cyan-400 border-r-transparent border-b-fuchsia-500 border-l-transparent animate-spin-slow"></div>
                            
                            {/* Decorative circle elements */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-glow-cyan"></div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-fuchsia-500 rounded-full shadow-glow-magenta"></div>
                            
                            {/* Percentage display */}
                            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                                {Math.round(progress)}%
                            </div>
                        </div>
                    </div>
                    
                    {/* Tech lines radiating from circle */}
                    <div className="absolute top-1/2 left-0 w-10 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
                    <div className="absolute top-1/2 right-0 w-10 h-[1px] bg-gradient-to-l from-cyan-400 to-transparent"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-10 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-10 w-[1px] bg-gradient-to-t from-fuchsia-500 to-transparent"></div>
                </div>
        
                {/* Futuristic Terminal Window */}
                <div className="w-full max-w-2xl bg-indigo-950/80 backdrop-blur-md rounded-lg border border-cyan-500/30 overflow-hidden shadow-glow-subtle">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-indigo-900/80 border-b border-cyan-500/20">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <span className="ml-2 text-cyan-100/80 text-sm tracking-wider">カナリ・ネットワーク</span>
                        <span className="ml-1 text-cyan-100/80 text-sm tracking-wider">/ KANARI-NETWORK-INIT</span>
                    </div>
        
                    {/* Terminal Content */}
                    <div className="p-5 space-y-4">
                        <div className="space-y-3">
                            <ProgressLine 
                                text="Initializing system components..."
                                isDone={progress >= 30}
                            />
                            {progress >= 30 && (
                                <ProgressLine 
                                    text="Loading Move VM components..."
                                    isDone={progress >= 60}
                                />
                            )}
                            {progress >= 60 && (
                                <ProgressLine 
                                    text="Configuring blockchain environment..."
                                    isDone={progress >= 90}
                                />
                            )}
                            {progress >= 90 && (
                                <ProgressLine 
                                    text="Preparing Kanari Network interface..."
                                    isDone={progress >= 100}
                                />
                            )}
                        </div>
                        
                        {/* Progress Bar - anime style */}
                        <div className="h-2 bg-indigo-900/50 rounded-full mt-5 p-[1px] border border-cyan-500/20">
                            <div 
                                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 transition-all duration-300 relative"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="absolute top-0 right-0 h-full w-4 bg-white/30 animate-pulse-fast"></div>
                            </div>
                        </div>
                        
                        {/* Digital scan line effect */}
                        <div className="absolute inset-0 pointer-events-none cyber-scan-lines opacity-10"></div>
                    </div>
                    
                    {/* Decorative angular corners */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500/50"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500/50"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-fuchsia-500/50"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-fuchsia-500/50"></div>
                </div>
            </div>
        </div>
    );
};

interface ProgressLineProps {
    text: string;
    isDone: boolean;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ text, isDone }) => (
    <div className="font-mono text-sm flex items-center space-x-2">
        <span className="text-blue-400">$</span>
        <span className="text-purple-400">{text}</span>
        {isDone && <span className="text-green-400">[DONE]</span>}
    </div>
);

export default LoadingHeroSection;