"use client";
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import './VCSection.css';

interface VCSectionProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export function VCSection({ darkMode, setDarkMode }: VCSectionProps) {

    // Sample VC and Investor data (replace with your actual data)
    const vcs = [
        {
            name: "Leading Venture Partners",
            logo: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=LVP",
            investmentDetails: "Invested $2.5 million in Series A funding to support blockchain infrastructure development.",
        },
        {
            name: "Innovation Capital",
            logo: "https://via.placeholder.com/150x150/8B5CF6/FFFFFF?text=IC",
            investmentDetails: "Strategic partner providing $1.8 million for AI and machine learning initiatives.",
        },
        {
            name: "Tech Growth Fund",
            logo: "https://via.placeholder.com/150x150/10B981/FFFFFF?text=TGF",
            investmentDetails: "Early investor with $3.2 million commitment to digital transformation projects.",
        },
        {
            name: "Digital Future Ventures",
            logo: "https://via.placeholder.com/150x150/F59E0B/FFFFFF?text=DFV",
            investmentDetails: "Series B lead investor contributing $5 million for Southeast Asia expansion.",
        },
        {
            name: "Blockchain Capital Asia",
            logo: "https://via.placeholder.com/150x150/EF4444/FFFFFF?text=BCA",
            investmentDetails: "Specialized blockchain investor with $4.1 million in funding and strategic guidance.",
        },
        {
            name: "NextGen Partners",
            logo: "https://via.placeholder.com/150x150/6366F1/FFFFFF?text=NGP",
            investmentDetails: "Growth stage investor providing $2.8 million for technology scaling and team expansion.",
        },
    ];

    const [selectedVC, setSelectedVC] = useState<number | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto scroll effect
    useEffect(() => {
        if (!isPaused) {
            let animationId: number;
            
            const scroll = () => {
                if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const isAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1;

                    if (isAtEnd) {
                        container.scrollLeft = 0;
                    } else {
                        container.scrollLeft += 1;
                    }
                }
                animationId = requestAnimationFrame(scroll);
            };

            animationId = requestAnimationFrame(scroll);

            return () => {
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            };
        }
    }, [isPaused]);

    return (
        <section className="py-16 sm:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header - matching KanariFoundation style */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${darkMode
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}>
                        💼 Trusted by Leading Investors
                    </div>

                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                        ? 'from-blue-300 to-purple-300'
                        : 'from-blue-800 to-purple-800'
                        } bg-clip-text text-transparent`}>
                        Backed by Leading Investors
                    </h2>
                    
                    <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        Kanari Network is supported by a strong network of investors who believe in our vision 
                        for the future of blockchain technology and digital innovation.
                    </p>
                </div>

                {/* VC Cards Scrolling Section */}
                <div 
                    className="relative overflow-hidden mb-8"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex space-x-6 overflow-x-hidden scrollbar-hide"
                    >
                        {/* Duplicate the array to create seamless loop */}
                        {[...vcs, ...vcs].map((vc, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-48 h-48 cursor-pointer group"
                                onClick={() => setSelectedVC(index % vcs.length)}
                            >
                                <div className={`w-full h-full rounded-3xl p-6 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center ${darkMode
                                    ? 'bg-gradient-to-br from-gray-800/50 to-blue-900/30 border border-blue-500/20 hover:border-blue-400/40'
                                    : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                                    }`}>
                                    
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300">
                                        <Image
                                            src={vc.logo}
                                            alt={vc.name}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    <h3 className={`text-sm font-semibold text-center line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {vc.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Static grid for desktop */}
                {/* <div className="hidden lg:grid lg:grid-cols-3 gap-8 mt-16">
                    {vcs.slice(0, 6).map((vc, index) => (
                        <div
                            key={index}
                            className="cursor-pointer group"
                            onClick={() => setSelectedVC(index)}
                        >
                            <div className={`p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${darkMode
                                ? 'bg-gradient-to-br from-gray-800/50 to-purple-900/30 border border-purple-500/20 hover:border-purple-400/40'
                                : 'bg-gradient-to-br from-white to-purple-50 border border-purple-200 hover:border-purple-300 shadow-lg hover:shadow-xl'
                                }`}>
                                
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300">
                                        <Image
                                            src={vc.logo}
                                            alt={vc.name}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {vc.name}
                                        </h3>
                                    </div>
                                </div>
                                
                                <p className={`text-sm leading-relaxed line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {vc.investmentDetails}
                                </p>

                                <div className="flex items-center space-x-2 text-purple-600 group-hover:text-purple-700 transition-colors pt-4 mt-4 border-t border-gray-200/20">
                                    <span className="text-sm font-medium">Learn More</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

                {/* Modal/Popup for VC Details */}
                {selectedVC !== null && (
                    <div
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4"
                        onClick={() => setSelectedVC(null)}
                    >
                        <div
                            className={`w-full max-w-2xl p-8 rounded-3xl shadow-2xl relative transform transition-all duration-300 ${darkMode
                                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                                : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200'
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${darkMode
                                    ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                                    }`}
                                onClick={() => setSelectedVC(null)}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            
                            <div className="flex flex-col items-center text-center">
                                <div className="w-32 h-32 rounded-3xl overflow-hidden mb-6 ring-4 ring-blue-500/20">
                                    <Image
                                        src={vcs[selectedVC].logo}
                                        alt={vcs[selectedVC].name}
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {vcs[selectedVC].name}
                                </h3>
                                
                                <p className={`text-base sm:text-lg leading-relaxed max-w-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {vcs[selectedVC].investmentDetails}
                                </p>

                                <div className="flex items-center space-x-4 mt-8">
                                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode
                                        ? 'bg-blue-500/20 text-blue-300'
                                        : 'bg-blue-100 text-blue-800'
                                        }`}>
                                        Strategic Partner
                                    </span>
                                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode
                                        ? 'bg-purple-500/20 text-purple-300'
                                        : 'bg-purple-100 text-purple-800'
                                        }`}>
                                        Active Investor
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}