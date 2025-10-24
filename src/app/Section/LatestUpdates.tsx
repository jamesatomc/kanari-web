import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image'

interface LatestUpdatesProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export function LatestUpdates({ darkMode, setDarkMode }: LatestUpdatesProps) {
    const blogupdates = [
        {
            title: '#01',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
        },
        {
            title: '#02',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
        },
        {
            title: '#03',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
        },
        {
            title: '#04',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
        },
        {
            title: '#05',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
        },
        {
            title: '#06',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
        },
    ];

    const featuredBlog = blogupdates[0];
    const secondaryBlogs = blogupdates.slice(1); // Show all remaining blogs to enable scrolling

    const scrollRef = useRef<HTMLDivElement>(null);
    const [showTopArrow, setShowTopArrow] = useState(false);
    const [showBottomArrow, setShowBottomArrow] = useState(true);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            setShowTopArrow(scrollTop > 0);
            setShowBottomArrow(scrollTop < scrollHeight - clientHeight);
        }
    };

    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: -150, behavior: 'smooth' });
        }
    };

    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: 150, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
            return () => scrollElement.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className="py-16 sm:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header - matching KanariFoundation style */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${darkMode
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}>
                        📰 Stay Updated with Our Latest News
                    </div>

                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                        ? 'from-blue-300 to-purple-300'
                        : 'from-blue-800 to-purple-800'
                        } bg-clip-text text-transparent`}>
                        Latest Updates and Insights
                    </h2>
                    
                    <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        Stay updated with the latest news and insights from the Kanari Network. 
                        Our blog features articles on blockchain technology, digital assets, and more.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Featured article (left column) */}
                    <div className="lg:col-span-2">
                        <a
                            href={featuredBlog.Url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 group ${darkMode
                        ? 'bg-white/6 text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20'
                        : 'bg-white text-black border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                                }`}
                        >
                            <div className="relative h-64 md:h-80 overflow-hidden">
                                <Image
                                    src={featuredBlog.image}
                                    alt={featuredBlog.title}
                                    width={800}
                                    height={400}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                
                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode
                                        ? 'bg-blue-500/20 text-blue-300 backdrop-blur-sm'
                                        : 'bg-white/90 text-blue-800 backdrop-blur-sm'
                                        }`}>
                                        Featured
                                    </span>
                                </div>
                                
                                {/* Article number */}
                                <div className="absolute bottom-4 right-4">
                                    <span className="text-white/80 font-mono text-sm">{featuredBlog.title}</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="space-y-4">
                                    <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} line-clamp-2`}>
                                        {featuredBlog.description}
                                    </h3>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {featuredBlog.data}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center space-x-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                                            <span className="text-sm font-medium">Read More</span>
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Secondary articles (right column) */}
                    <div className="lg:col-span-1 relative">
                        {/* Scroll Up Arrow */}
                        {showTopArrow && (
                            <button
                                onClick={scrollUp}
                                className={`absolute top-2 right-2 z-10 p-2 rounded-full transition-all duration-300 ${
                                    darkMode 
                                    ? 'bg-gray-800/80 hover:bg-gray-700/80 text-blue-400 hover:text-blue-300' 
                                    : 'bg-white/80 hover:bg-gray-100/80 text-blue-600 hover:text-blue-700'
                                } backdrop-blur-sm shadow-lg hover:scale-110`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                        )}

                        {/* Scroll Down Arrow */}
                        {showBottomArrow && (
                            <button
                                onClick={scrollDown}
                                className={`absolute bottom-2 right-2 z-10 p-2 rounded-full transition-all duration-300 ${
                                    darkMode 
                                    ? 'bg-gray-800/80 hover:bg-gray-700/80 text-blue-400 hover:text-blue-300' 
                                    : 'bg-white/80 hover:bg-gray-100/80 text-blue-600 hover:text-blue-700'
                                } backdrop-blur-sm shadow-lg hover:scale-110`}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        )}

                        <div 
                            ref={scrollRef}
                            className="h-[500px] overflow-y-scroll custom-scrollbar"
                            onScroll={handleScroll}
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <div className="space-y-4 pr-3">
                                {secondaryBlogs.map((blog, index) => (
                                    <a
                                        key={index}
                                        href={blog.Url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 group min-h-[120px] ${darkMode
                                            ? 'bg-gradient-to-br from-gray-800/50 to-blue-900/30 border border-blue-500/20 hover:border-blue-400/40'
                                            : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200 hover:border-blue-300 shadow-lg'
                                            }`}
                                    >
                                        <div className="flex">
                                            <div className="w-1/3 relative">
                                                <Image
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    width={200}
                                                    height={200}
                                                    className="w-full h-24 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                                />
                                                
                                                {/* Article number overlay */}
                                                <div className="absolute bottom-1 right-1">
                                                    <span className="text-white/80 font-mono text-xs bg-black/50 px-1 rounded">
                                                        {blog.title}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="w-2/3 p-4 flex flex-col justify-between">
                                                <h3 className={`text-sm font-semibold line-clamp-2 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                                    {blog.description}
                                                </h3>
                                                
                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex items-center space-x-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                                                        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                            {blog.data}
                                                        </span>
                                                    </div>
                                                    
                                                <svg className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} 
                                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LatestUpdates;