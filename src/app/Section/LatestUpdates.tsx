import React from 'react';
import './LatestUpdates.css';
import Image from 'next/image'

interface LatestUpdatesProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

function LatestUpdates({ darkMode, setDarkMode }: LatestUpdatesProps) {
    // Japanese kanji for each blog post
    const kanjiSymbols = ["更新", "情報", "技術", "未来", "発展"];

    const blogupdates = [
        {
            title: '#01',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[0] // "update"
        },
        {
            title: '#02',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[1] // "information"
        },
        {
            title: '#03',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[2] // "technology"
        },
        {
            title: '#04',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[3] // "future"
        },
        {
            title: '#05',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[4] // "development"
        },
        {
            title: '#06',
            image: 'https://kanari.site/kariicon1.png',
            Url: 'https://blog.kanari.network/Kanari_SDK_Design',
            description: 'KANARI SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
            data: '27-01-2024',
            // kanji: kanjiSymbols[4] // "development"
        },
    ];

    // First blog post is the featured one
    const featuredBlog = blogupdates[0];
    // Remaining blog posts for the secondary column
    const secondaryBlogs = blogupdates.slice(1);

    return (
        <section className=" px-4 tokyo-update-section relative overflow-hidden">

            {/* Section Header */}
            <div className="text-center space-y-4 sm:space-y-6 mb-12">
                <h2 className={`text-5xl font-bold tracking-tight leading-tight bg-clip-text text-transparent group bg-gradient-to-r ${darkMode
                    ? ' dark:from-white dark:via-blue-300  dark:to-indigo-200'
                    : ' from-gray-900 via-blue-800 to-indigo-900'
                    }`}>
                    Kanari Network:
                    <span className="block mt-2 group-hover:translate-x-2 transition-transform">
                        Latest Updates
                    </span>
                    <div className="h-1 w-32 sm:w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                </h2>

                <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${darkMode
                    ? 'dark:text-gray-300'
                    : 'text-gray-600 '
                    }`}>
                    Stay updated with the latest news and insights from the Kanari Network.
                    Our blog features articles on blockchain technology, digital assets, and more.
                    Explore our latest posts to learn about the innovations and developments
                    shaping the future of the Kanari Network.
                </p>
            </div>


            {/* Japanese pattern background */}
            <div className="absolute inset-0 tokyo-pattern-overlay opacity-10"></div>




            {/* Two-column layout */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Featured article (left column) - takes up 2/3 of the space */}
                <div className="lg:col-span-2">
                    <a
                        href={featuredBlog.Url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block h-full backdrop-blur-sm 
                                  ${darkMode
                                ? 'bg-gray-800/10 border-blue-500/20'
                                : 'bg-white/10 border-blue-300/20'
                            }
                                  border
                                  rounded-lg overflow-hidden 
                                  hover:scale-[1.02] hover:shadow-xl transition-all 
                                  duration-300 group tokyo-update-card`}
                    >
                        {/* Neo-Tokyo styled header line */}
                        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 tokyo-glow"></div>

                        <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 relative">
                            {/* Tokyo-style decorative elements */}
                            <div className="absolute top-1 left-4 w-3 h-3 rounded-full bg-blue-400 tokyo-glow-blue"></div>
                            <div className="absolute top-1 left-10 w-2 h-2 rounded-full bg-indigo-400 tokyo-glow-indigo"></div>

                            {/* Corner elements */}
                            <div className="absolute tokyo-corner-tr"></div>
                            <div className="absolute tokyo-corner-tl"></div>
                            <div className="absolute tokyo-corner-br"></div>
                            <div className="absolute tokyo-corner-bl"></div>

                            <Image
                                src={featuredBlog.image}
                                alt={featuredBlog.title}
                                width={800}
                                height={400}
                                className="w-full h-64 md:h-80 object-cover transform 
                                           group-hover:scale-110 transition-transform
                                           duration-700 ease-out mix-blend-luminosity
                                           opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal"
                            />

                            {/* Tokyo-style scan line */}
                            <div className="absolute inset-0 tokyo-scan-lines opacity-10"></div>

                            {/* Futuristic UI elements with Tokyo style */}
                            <div className="absolute top-4 left-4 flex items-center gap-2 tokyo-tech-badge">
                                <div className="w-2 h-2 bg-blue-400 rounded-full pulse-slow"></div>
                                <span className="text-xs font-mono text-blue-400 tracking-wider">KANARI-NET</span>
                            </div>

                            {/* Tech corner elements */}
                            <div className="absolute bottom-4 right-4">
                                <span className="text-sm font-mono text-indigo-400 tracking-wider">{featuredBlog.title}</span>
                            </div>
                        </div>

                        <div className="p-8 relative">
                            {/* Tech pattern background */}
                            <div className="absolute inset-0 tokyo-grid-bg"></div>

                            {/* Tokyo-style circuit elements */}
                            <div className="absolute left-2 top-8 w-8 h-32 tokyo-circuit-vertical"></div>
                            <div className="absolute right-8 bottom-2 h-8 w-32 tokyo-circuit-horizontal"></div>

                            <div className="space-y-6 relative z-10">
                                {/* Tokyo styled heading */}
                                <h3 className={`text-2xl md:text-3xl font-bold 
                                          bg-gradient-to-r ${darkMode
                                        ? 'from-blue-300 via-indigo-400 to-blue-400'
                                        : 'from-blue-400 via-indigo-500 to-blue-500'
                                    }
                                          bg-clip-text text-transparent`}>
                                    {featuredBlog.description}
                                </h3>

                                {/* Date with Tokyo styling */}
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-1 bg-indigo-500 rounded-full"></div>
                                    <p className={`text-sm font-mono ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                        {featuredBlog.data}
                                    </p>
                                </div>

                                {/* Tokyo-style button */}
                                <div className={`pt-4 mt-4 border-t ${darkMode ? 'border-blue-500/20' : 'border-blue-300/20'}`}>
                                    <div className="tokyo-link-container group-hover:tokyo-link-hover flex justify-end">
                                        <div className="tokyo-link">
                                            <span className={`text-sm md:text-base font-mono ${darkMode
                                                ? 'text-blue-400 group-hover:text-indigo-400'
                                                : 'text-blue-600 group-hover:text-indigo-500'
                                                } transition-colors`}>
                                                READ MORE
                                            </span>
                                            <svg className={`w-4 h-4 ml-1 ${darkMode
                                                ? 'text-blue-400 group-hover:text-indigo-400'
                                                : 'text-blue-600 group-hover:text-indigo-500'
                                                } transition-colors`}
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Secondary articles (right column) - takes up 1/3 of the space */}
                <div className="lg:col-span-1">
                    {/* Modified to show exactly 4 items with hint for scrolling */}
                    <div className="h-[540px] md:h-[540px] overflow-y-auto scrollbar-hide pr-2 flex flex-col space-y-6 relative">
                        {secondaryBlogs.map((blog, index) => (
                            <a key={index}
                                href={blog.Url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex-shrink-0 backdrop-blur-sm 
                                          ${darkMode
                                        ? 'bg-gray-800/40 border border-blue-500/30'
                                        : 'bg-white/80 border border-blue-300/40'
                                    }
                                          rounded-lg overflow-hidden 
                                          hover:scale-[1.02] hover:shadow-xl transition-all 
                                          duration-300 group tokyo-update-card shadow-lg`}
                            >
                                <div className="flex flex-col h-full">
                                    {/* Neo-Tokyo styled header line */}
                                    <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-600 tokyo-glow"></div>

                                    <div className="flex flex-row h-28 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 relative">
                                        {/* Corner elements */}
                                        <div className="absolute tokyo-corner-tr"></div>
                                        <div className="absolute tokyo-corner-tl"></div>
                                        <div className="absolute tokyo-corner-br"></div>
                                        <div className="absolute tokyo-corner-bl"></div>

                                        <div className="w-1/3 relative">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover transform 
                                                           group-hover:scale-110 transition-transform
                                                           duration-700 ease-out"
                                            />

                                            {/* Tokyo-style scan line */}
                                            <div className="absolute inset-0 tokyo-scan-lines opacity-10"></div>
                                        </div>

                                        <div className="w-2/3 p-3 relative">
                                            {/* Tech pattern background with better opacity */}
                                            <div className="absolute inset-0 tokyo-grid-bg opacity-30"></div>
                                            
                                            {/* Solid background overlay for better text readability */}
                                            <div className={`absolute inset-0 ${darkMode ? 'bg-gray-800/60' : 'bg-white/60'} rounded-r-lg`}></div>

                                            <div className="flex flex-col justify-between h-full relative z-10">
                                                <div>
                                                    <h3 className={`text-sm font-bold line-clamp-2 leading-tight ${darkMode
                                                            ? 'text-white drop-shadow-sm'
                                                            : 'text-gray-900 drop-shadow-sm'
                                                        }`}>
                                                        {blog.description}
                                                    </h3>
                                                </div>

                                                <div className="flex items-center gap-1 mt-2">
                                                    <div className="h-3 w-1 bg-indigo-500 rounded-full flex-shrink-0"></div>
                                                    <p className={`text-xs font-mono ${darkMode ? 'text-indigo-300' : 'text-indigo-700'} font-medium`}>
                                                        {blog.data}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}

                        {/* Scroll indicator - only shows if there are more than 4 items */}
                        {secondaryBlogs.length > 4 && (
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none flex justify-center items-end pb-2">
                                <div className={`${darkMode ? 'text-indigo-400' : 'text-indigo-500'} animate-bounce`}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default LatestUpdates;