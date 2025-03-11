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
            handleScroll(); // ตรวจสอบการเลื่อนเมื่อโหลดหน้าเว็บ
            return () => ref.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    const blogupdates = [
        {
            title: '#01',
            image: '',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024'
        },
        {
            title: '#01',
            image: '',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024'
        },
        {
            title: '#01',
            image: '',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024'
        },
        {
            title: '#01',
            image: '',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024'
        },
        {
            title: '#01',
            image: '',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024'
        },
    ];

    return (
        <section className="py-20 px-4 cyber-update-section relative overflow-hidden">
            {/* Cyberpunk background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/20 via-purple-100/10 to-blue-100/20 dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-blue-900/20"></div>
                <div className="absolute top-0 left-0 w-full h-1 cyber-grid-horizontal"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 cyber-grid-horizontal"></div>
                <div className="absolute left-0 top-0 w-1 h-full cyber-grid-vertical"></div>
                <div className="absolute right-0 top-0 w-1 h-full cyber-grid-vertical"></div>
                <div className="absolute top-10 right-10 w-20 h-20 cyber-circle-alt opacity-20"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 cyber-pattern opacity-10"></div>
            </div>
            
            <div className="container mx-auto relative">
                {/* Neo-Tokyo style heading */}
                <div className="flex flex-col items-center mb-16 relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[150px] h-[1px] cyber-line"></div>
                    
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <h5 className="text-sm font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase cyber-small-text">Network Status</h5>
                        <div className="h-[1px] w-8 bg-gradient-to-r from-purple-600 to-cyan-500"></div>
                    </div>
                    
                    <h2 className="text-4xl font-bold text-center mb-2 cyber-glitch-text bg-gradient-to-r 
                         from-cyan-600 via-blue-700 to-purple-700 dark:from-cyan-400 dark:via-blue-500 
                         dark:to-purple-500 bg-clip-text text-transparent uppercase">
                        Latest Updates
                    </h2>
                    
                    <div className="flex items-center gap-2 mt-2">
                        <span className="pulse-dot"></span>
                        <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">LIVE FEED</span>
                    </div>
                    
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[100px] h-[1px] cyber-line"></div>
                </div>

                <div className="relative">
                    {showLeftButton && (
                        <button onClick={() => scroll('left')}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-900/30 dark:bg-gray-900/50 
                            p-3 rounded-lg shadow-neon-blue hover:shadow-neon-blue-lg transition-all duration-300 
                            backdrop-blur-sm border border-blue-500/30 dark:border-blue-500/50 cyber-button-left"
                            aria-label="Scroll left"
                        >
                            <svg className="h-6 w-6 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" 
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}
                    {showRightButton && (
                        <button onClick={() => scroll('right')}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-900/30 dark:bg-gray-900/50 
                            p-3 rounded-lg shadow-neon-purple hover:shadow-neon-purple-lg transition-all duration-300 
                            backdrop-blur-sm border border-purple-500/30 dark:border-purple-500/50 cyber-button-right"
                            aria-label="Scroll right"
                        >
                            <svg className="h-6 w-6 text-purple-500 dark:text-purple-400" fill="none" stroke="currentColor" 
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
                                      border border-blue-300/20 dark:border-blue-500/20
                                      rounded-lg overflow-hidden 
                                      hover:scale-105 hover:shadow-neon transition-all 
                                      duration-300 group cyber-card"
                            >
                                {/* Neo-Tokyo styled header line */}
                                <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>
                                
                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative">
                                    {/* Cyberpunk overlay elements */}
                                    <div className="absolute inset-0 cyber-card-overlay z-10"></div>
                                    <div className="absolute top-0 right-0 cyber-corner-tr"></div>
                                    <div className="absolute top-0 left-0 cyber-corner-tl"></div>
                                    
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
                                    
                                    {/* Neo-Tokyo style scan line */}
                                    <div className="absolute inset-0 cyber-scan-lines opacity-10"></div>
                                    
                                    {/* Futuristic UI elements */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2 cyber-tech-badge">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full pulse-slow"></div>
                                        <span className="text-xs font-mono text-cyan-400 tracking-wider">KANARI-NET</span>
                                    </div>
                                    
                                    {/* Tech corner elements */}
                                    <div className="absolute bottom-4 right-4 cyber-tech-id">
                                        <span className="text-sm font-mono text-blue-400 tracking-wider">{blog.title}</span>
                                    </div>
                                </div>
                                
                                <div className="p-6 relative">
                                    {/* Tech pattern background */}
                                    <div className="absolute inset-0 cyber-grid-bg opacity-5"></div>
                                    
                                    <div className="space-y-4 relative z-10">
                                        {/* Cyber heading with glitch effect */}
                                        <h3 className="cyber-card-title text-xl font-bold line-clamp-2 
                                              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
                                              dark:from-cyan-300 dark:via-blue-400 dark:to-purple-400 
                                              bg-clip-text text-transparent">
                                            {blog.description}
                                        </h3>
                                        
                                        {/* Date with cyber styling */}
                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-1 bg-purple-500 rounded-full"></div>
                                            <p className="text-sm font-mono text-purple-600 dark:text-purple-400">
                                                {blog.data}
                                            </p>
                                        </div>
                                        
                                        {/* Cyber button */}
                                        <div className="pt-2 mt-2 border-t border-blue-300/20 dark:border-blue-500/20">
                                            <div className="cyber-link-container group-hover:cyber-link-hover flex justify-end">
                                                <div className="cyber-link">
                                                    <span className="text-sm font-mono text-blue-600 dark:text-blue-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                                                        READ MORE
                                                    </span>
                                                    <svg className="w-4 h-4 ml-1 text-blue-600 dark:text-blue-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" 
                                                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom corner decorative elements */}
                                    <div className="absolute bottom-0 right-0 cyber-corner-br"></div>
                                    <div className="absolute bottom-0 left-0 cyber-corner-bl"></div>
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