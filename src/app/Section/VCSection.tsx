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
            logo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80&auto=format&fit=crop",
            investmentDetails: "Invested $2.5 million in Series A funding to support blockchain infrastructure development.",
        },
        {
            name: "Innovation Capital",
            logo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80&auto=format&fit=crop",
            investmentDetails: "Strategic partner providing $1.8 million for AI and machine learning initiatives.",
        },
        {
            name: "Tech Growth Fund",
            logo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80&auto=format&fit=crop",
            investmentDetails: "Early investor with $3.2 million commitment to digital transformation projects.",
        },
        {
            name: "Digital Future Ventures",
            logo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80&auto=format&fit=crop",
            investmentDetails: "Series B lead investor contributing $5 million for Southeast Asia expansion.",
        },
        {
            name: "Blockchain Capital Asia",
            logo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80&auto=format&fit=crop",
            investmentDetails: "Specialized blockchain investor with $4.1 million in funding and strategic guidance.",
        },
        {
            name: "NextGen Partners",
            logo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80&auto=format&fit=crop",
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

                {/* NEW: prominent VC header to show strong VC backing */}
                <div className="text-center mb-10">
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Backed by Venture Capital & Strategic Investors
                    </h2>

                    <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        Our product and design are validated by top funds — we prioritize product-market fit, growth, and measurable impact.
                    </p>
                </div>

                {/* Hero-like VC layout: left stat / center images / right headline+cta */}
                <div className="mb-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                            {/* Left: stat */}
                            <div className="w-full lg:w-1/4 text-left hidden md:block">
                                <div className="text-sm text-gray-500 mb-6">(01) ABOUT US</div>
                                <div className="text-6xl md:text-7xl font-extrabold text-black dark:text-white leading-none">0.9</div>
                                <div className="flex items-center mt-2">
                                    <div className="flex -space-x-2 mr-3">
                                        <div className="w-8 h-8 rounded-full ring-2 ring-white overflow-hidden">
                                            {/* replaced <img> with next/image */}
                                            <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80&auto=format&fit=crop" alt="a" width={32} height={32} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-8 h-8 rounded-full ring-2 ring-white overflow-hidden">
                                            {/* replaced <img> with next/image */}
                                            <Image src="https://images.unsplash.com/photo-1545996124-1b5b7b4a8d06?w=80&q=80&auto=format&fit=crop" alt="b" width={32} height={32} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-8 h-8 rounded-full ring-2 ring-white overflow-hidden">
                                            {/* replaced <img> with next/image */}
                                            <Image src="https://images.unsplash.com/photo-1549221987-6f12d6b6d3a6?w=80&q=80&auto=format&fit=crop" alt="c" width={32} height={32} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500">CUSTOMER SATISFACTION</div>
                                </div>
                            </div>

                            {/* Center: two image tiles */}
                            <div className="w-full lg:w-2/4 flex justify-center">
                                <div className="flex gap-6 items-center">
                                    <div className="vc-image-tile rounded-[24px] overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
                                        <Image
                                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80&auto=format&fit=crop"
                                            alt="tile1"
                                            width={420}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="vc-image-tile rounded-[24px] overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
                                        <Image
                                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&q=80&auto=format&fit=crop"
                                            alt="tile2"
                                            width={420}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right: headline + description + CTA */}
                            <div className="w-full lg:w-1/4 text-left lg:text-right">
                                <div className="text-sm text-gray-400 mb-4 hidden md:block">(01) ABOUT US</div>
                                <h2 className={`vc-hero-title text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    More Than Aesthetic —<br />We Design for Impact.
                                </h2>
                                <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-md mx-auto lg:mx-0`}>
                                    We&apos;re not just another agency—we&apos;re a design powerhouse that cuts the excess and sharpens what truly matters.
                                </p>
                                <div className="mt-6 flex justify-center lg:justify-end">
                                    <a
                                        className={`inline-flex items-center gap-3 px-5 py-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkMode
                                            ? 'bg-white/6 text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20'
                                            : 'bg-black text-white hover:bg-gray-900'
                                        }`}
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        Learn More
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroller header to call attention */}
                <div className="mb-3">
                    <div className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Investors & Backers</div>
                </div>

                {/* Scrollable VC logos (pills) - keep auto scroll behavior */}
                <div
                    className="relative overflow-hidden mb-8"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex space-x-6 overflow-x-auto scrollbar-hide py-6 px-2"
                        style={{ scrollBehavior: 'smooth' }}
                        role="list"
                        aria-label="Investor logos"
                    >
                        {[...vcs, ...vcs].map((vc, index) => {
                            const idx = index % vcs.length;
                            const isSelected = selectedVC === idx;
                            return (
                                <button
                                    key={index}
                                    /* removed role="listitem" — button is already semantic for aria-pressed */
                                    aria-pressed={isSelected}
                                    className={`vc-logo-pill flex items-center gap-3 px-6 py-3 rounded-full transition-transform duration-200 text-sm whitespace-nowrap ${isSelected ? 'ring-2 ring-blue-500 shadow-lg scale-105 z-10' : 'hover:scale-105'} ${darkMode ? 'bg-white/6 border border-white/10' : 'bg-white/40 border border-gray-200'}`}
                                    onClick={() => setSelectedVC(idx)}
                                >
                                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
                                        {/* replaced <img> with next/image */}
                                        <Image src={vc.logo} alt={vc.name} width={56} height={56} className="w-full h-full object-cover" />
                                    </div>
                                    <span className={`${darkMode ? 'text-white' : 'text-gray-800'} font-medium`}>{vc.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Modal/Popup for VC Details */}
                {selectedVC !== null && (
                    <div
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4"
                        onClick={() => setSelectedVC(null)}
                    >
                        <div
                            className={`w-full max-w-2xl p-8 rounded-[32px] shadow-2xl relative transform transition-all duration-300 ${darkMode
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
                                <div className="w-32 h-32 rounded-[20px] overflow-hidden mb-6 ring-4 ring-blue-500/20 shadow-lg">
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