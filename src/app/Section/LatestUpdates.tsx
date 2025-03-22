import React, { useRef, useState, useEffect, useCallback } from 'react';
import './LatestUpdates.css';
import Image from 'next/image'

function LatestUpdates() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const handleScroll = useCallback(() => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', handleScroll);
            handleScroll(); // Check scroll position when page loads
            return () => ref.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    // Japanese kanji for each blog post
    const kanjiSymbols = ["更新", "情報", "技術", "未来", "発展"];

    const blogupdates = [
        {
            title: '#01',
            image: '',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[0] // "update"
        },
        {
            title: '#01',
            image: '',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[1] // "information"
        },
        {
            title: '#01',
            image: '',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[2] // "technology"
        },
        {
            title: '#01',
            image: '',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[3] // "future"
        },
        {
            title: '#01',
            image: '',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[4] // "development"
        },
    ];

    return (
        <section className="py-20 px-4 tokyo-update-section relative overflow-hidden">
            {/* Japanese pattern background */}
            <div className="absolute inset-0 tokyo-pattern-overlay opacity-10"></div>

            <div className="container mx-auto relative">

                <div className="text-center space-y-6">
                    <h2 className="text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r 
                            from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-300 
                            dark:to-purple-200 bg-clip-text text-transparent group">
                        Kanari Network:
                        <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                            Latest Updates
                        </span>
                        <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 
                                rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Stay updated with the latest news and insights from the Kanari Network.
                        Our blog features articles on blockchain technology, digital assets, and more.
                        Explore our latest posts to learn about the innovations and developments
                        shaping the future of the Kanari Network.
                    </p>
                </div>

                {/* Scrollable section */}
                <div className="relative mt-12">
                    {showLeftButton && (
                        <button onClick={() => scroll('left')}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-900/30 dark:bg-gray-900/50 
                            p-3 rounded-lg shadow-tokyo-red hover:shadow-tokyo-red transition-all duration-300 
                            backdrop-blur-sm border border-red-500/30 dark:border-red-500/50 tokyo-button-left"
                            aria-label="Scroll left"
                        >
                            <svg className="h-6 w-6 text-red-500 dark:text-red-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}
                    {showRightButton && (
                        <button onClick={() => scroll('right')}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-900/30 dark:bg-gray-900/50 
                            p-3 rounded-lg shadow-tokyo-pink hover:shadow-tokyo-pink transition-all duration-300 
                            backdrop-blur-sm border border-pink-500/30 dark:border-pink-500/50 tokyo-button-right"
                            aria-label="Scroll right"
                        >
                            <svg className="h-6 w-6 text-pink-500 dark:text-pink-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                    <div ref={scrollRef}
                        className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide scroll-smooth"
                    >
                        {blogupdates.map((blog, index) => (
                            <a key={index}
                                href={blog.Url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-none w-[320px] backdrop-blur-sm 
                                      bg-white/10 dark:bg-gray-800/10
                                      border border-red-300/20 dark:border-red-500/20
                                      rounded-lg overflow-hidden 
                                      hover:scale-105 hover:shadow-xl transition-all 
                                      duration-300 group tokyo-update-card"
                            >
                                {/* Neo-Tokyo styled header line */}
                                <div className="h-1 w-full bg-gradient-to-r from-red-500 via-pink-600 to-purple-600 tokyo-glow"></div>

                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-red-900/50 to-pink-900/50 relative">
                                    {/* Tokyo-style decorative elements */}
                                    <div className="absolute top-1 left-4 w-3 h-3 rounded-full bg-red-400 tokyo-glow-red"></div>
                                    <div className="absolute top-1 left-10 w-2 h-2 rounded-full bg-pink-400 tokyo-glow-pink"></div>

                                    {/* Japanese kanji decoration
                                    <div className="absolute right-4 top-4 text-3xl font-bold text-pink-500/20 tokyo-kanji">{blog.kanji}</div> */}

                                    {/* Corner elements */}
                                    <div className="absolute tokyo-corner-tr"></div>
                                    <div className="absolute tokyo-corner-tl"></div>
                                    <div className="absolute tokyo-corner-br"></div>
                                    <div className="absolute tokyo-corner-bl"></div>

                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={800}
                                        height={192}
                                        className="w-full h-48 object-cover transform 
                                               group-hover:scale-110 transition-transform
                                               duration-700 ease-out mix-blend-luminosity
                                               opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal"
                                    />

                                    {/* Tokyo-style scan line */}
                                    <div className="absolute inset-0 tokyo-scan-lines opacity-10"></div>

                                    {/* Futuristic UI elements with Tokyo style */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2 tokyo-tech-badge">
                                        <div className="w-2 h-2 bg-red-400 rounded-full pulse-slow"></div>
                                        <span className="text-xs font-mono text-red-400 tracking-wider">KANARI-NET</span>
                                    </div>

                                    {/* Tech corner elements */}
                                    <div className="absolute bottom-4 right-4">
                                        <span className="text-sm font-mono text-pink-400 tracking-wider">{blog.title}</span>
                                    </div>
                                </div>

                                <div className="p-6 relative">
                                    {/* Tech pattern background */}
                                    <div className="absolute inset-0 tokyo-grid-bg"></div>

                                    {/* Tokyo-style circuit elements */}
                                    <div className="absolute left-2 top-8 w-8 h-32 tokyo-circuit-vertical"></div>
                                    <div className="absolute right-8 bottom-2 h-8 w-32 tokyo-circuit-horizontal"></div>

                                    <div className="space-y-4 relative z-10">
                                        {/* Tokyo styled heading */}
                                        <h3 className="text-xl font-bold line-clamp-2 
                                              bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 
                                              dark:from-red-300 dark:via-pink-400 dark:to-purple-400 
                                              bg-clip-text text-transparent">
                                            {blog.description}
                                        </h3>

                                        {/* Date with Tokyo styling */}
                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-1 bg-pink-500 rounded-full"></div>
                                            <p className="text-sm font-mono text-pink-600 dark:text-pink-400">
                                                {blog.data}
                                            </p>
                                        </div>

                                        {/* Tokyo-style button */}
                                        <div className="pt-2 mt-2 border-t border-red-300/20 dark:border-red-500/20">
                                            <div className="tokyo-link-container group-hover:tokyo-link-hover flex justify-end">
                                                <div className="tokyo-link">
                                                    <span className="text-sm font-mono text-red-600 dark:text-red-400 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                                                        READ MORE
                                                    </span>
                                                    <svg className="w-4 h-4 ml-1 text-red-600 dark:text-red-400 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors"
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestUpdates;