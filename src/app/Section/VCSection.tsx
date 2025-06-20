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
            name: "1",
            logo: "",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "1",
            logo: "",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "1",
            logo: "",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "1",
            logo: "",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "1",
            logo: "",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        {
            name: "1",
            logo: "",
            investmentDetails: "Invested $1 million in Series A funding.",
        },
        // ... add more VCs with investment details
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
        <section className="px-4 tokyo-update-section relative">

            {/* Section Header */}
            <div className="text-center space-y-4 sm:space-y-6 mb-12">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-clip-text text-transparent group bg-gradient-to-r ${darkMode
                    ? ' dark:from-white dark:via-blue-300  dark:to-purple-200'
                    : ' from-gray-900 via-blue-800 to-purple-900'
                    }`}>
                    Kanari Network:
                    <span className="block mt-2 text-xl sm:text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">
                        Backed by Leading Investors
                    </span>
                    <div className="h-1 w-32 sm:w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                </h2>

                <p className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${darkMode
                    ? 'dark:text-gray-300'
                    : 'text-gray-600 '
                    }`}>
                    Kanari Network is supported by a strong network of investors who believe in our vision.
                </p>
            </div>

            {/* VC Cards Scrolling Section */}
            <div 
                className="relative overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    ref={scrollContainerRef}
                    className="flex space-x-6 overflow-x-hidden"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {/* Duplicate the array to create seamless loop */}
                    {[...vcs, ...vcs].map((vc, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-48 h-48 cursor-pointer transform hover:scale-105 transition-transform duration-200"
                            onClick={() => setSelectedVC(index % vcs.length)}
                        >
                            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full p-4 shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 dark:border-gray-600">
                                <Image
                                    src={vc.logo}
                                    alt={vc.name}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal/Popup for VC Details */}
            {selectedVC !== null && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
                    onClick={() => setSelectedVC(null)}
                >
                    <div
                        className="bg-white dark:bg-gray-800 w-11/12 md:w-2/3 lg:w-1/2 p-6 md:p-10 rounded-lg shadow-2xl relative transform transition-transform duration-300 ease-in-out"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setSelectedVC(null)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="flex flex-col items-center">
                            <Image
                                src={vcs[selectedVC].logo}
                                alt={vcs[selectedVC].name}
                                width={128}
                                height={128}
                                className="w-32 h-32 rounded-full mb-6"
                            />
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                {vcs[selectedVC].name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                {vcs[selectedVC].investmentDetails}
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}