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
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950 relative overflow-hidden">
            {/* Modern Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
                
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 modern-grid opacity-10"></div>
            </div>
        
            {/* Centered Content Container */}
            <div className="relative z-10 container mx-auto h-screen flex flex-col items-center justify-center px-4">
                {/* Modern Loading Circle */}
                <div className="relative mb-12">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 p-1 backdrop-blur-sm">
                        <div className="w-full h-full rounded-full border border-blue-400/20 flex items-center justify-center relative">
                            {/* Modern spinning ring */}
                            <div className="absolute w-44 h-44 rounded-full border-2 border-t-blue-400 border-r-transparent border-b-purple-500 border-l-transparent animate-spin-modern"></div>
                            
                            {/* Clean percentage display */}
                            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                {Math.round(progress)}%
                            </div>
                        </div>
                    </div>
                </div>
        
                {/* Modern Progress Card */}
                <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md rounded-3xl border border-blue-500/20 overflow-hidden shadow-xl">
                    {/* Header */}
                    <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-b border-blue-500/10">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                        <span className="ml-2 text-blue-100 text-sm font-medium tracking-wider">Kanari Network</span>
                    </div>
        
                    {/* Content */}
                    <div className="p-6 space-y-6">
                        <div className="space-y-4">
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
                        
                        {/* Modern Progress Bar */}
                        <div className="h-3 bg-gray-900/30 rounded-full mt-6 p-[1px] border border-blue-500/20">
                            <div 
                                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 relative overflow-hidden"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Loading Status */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                        Loading Kanari Network...
                    </div>
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
    <div className="flex items-center space-x-3 font-medium text-sm">
        <div className={`w-2 h-2 rounded-full ${isDone ? 'bg-green-400' : 'bg-blue-400'} ${!isDone && 'animate-pulse'}`}></div>
        <span className="text-gray-300">{text}</span>
        {isDone && <span className="text-green-400 text-xs font-bold">✓ DONE</span>}
    </div>
);

export default LoadingHeroSection;