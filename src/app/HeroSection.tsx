'use client';
import { NewsletterSection } from './Section/NewsletterSection'
import Navbar from './Section/body/Navbar'
import Footer from './Section/body/Footer'
import { useEffect, useState } from 'react'
import { OfficialChannels } from './Section/OfficialChannels';
import LatestUpdates from './Section/LatestUpdates';
import { InvestorCard } from './Section/body/InvestorCard';
import LoadingHeroSection from './Section/body/LoadingHeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Highlight } from 'prism-react-renderer'


interface Props {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export default function HeroSection({ darkMode, setDarkMode }: Props) {

    const [isLoading, setIsLoading] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Consistent code example for demo
    const codeExample = `// Example of using Kanari Network
module kanari::example {
    use std::vector;
    use kanari_framework::metadata::{Self, Metadata};

    fun store_file_metadata(
        content_hash: vector<u8>, 
        owner: address
    ): Metadata {
        let metadata = metadata::new();
        metadata::set_owner(&mut metadata, owner);
        metadata::set_hash(&mut metadata, content_hash); 
        metadata::store(metadata)
    }

    fun verify_file(
        metadata: &Metadata,
        content_hash: vector<u8>
    ): bool {
        metadata::verify_hash(metadata, content_hash)
    }

    #[test]
    fun test_metadata_flow() {
        let hash = vector::empty<u8>();
        let owner = @0x1;
        let metadata = store_file_metadata(hash, owner);
        assert!(verify_file(&metadata, hash), 0);
    }
}`;

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    useEffect(() => {
        // Add a fade transition
        const loadTimer = setTimeout(() => {
            setIsLoading(false);
            // Add additional delay for smooth transition
            setTimeout(() => {
                setIsTransitioning(false);
            }, 500);
        }, 2000);

        return () => clearTimeout(loadTimer);
    }, []);

    if (isLoading || isTransitioning) {
        return (
            <div className="transition-opacity duration-500 ease-in-out">
                <LoadingHeroSection />
            </div>
        );
    }

    return (
        <div className={`transition-colors duration-300 ${darkMode
            ? 'dark bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-950 dark:to-indigo-950'
            : 'bg-gradient-to-r from-gray-100 to-gray-200'
            }`}>


            <main className="relative min-h-screen overflow-hidden ">

                <div className="relative z-10">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

                    {/* Hero Video Banner */}
                    <section
                        className="pt-24 py-2 px-2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="parallax-bg rounded-[30px] overflow-hidden shadow-2xl border border-cyan-500/20 relative group">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover h-[700px] w-full scale-105 group-hover:scale-100 transition-transform duration-700"
                            >
                                <source src="/Lines.mp4" type="video/mp4" />
                            </video>

                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-violet-900/80 to-indigo-950/90 backdrop-blur-sm">
                                {/* Japanese-style decorative elements */}
                                <div className="absolute inset-8 border border-red-500/20 rounded-lg"></div>
                                <div className="absolute inset-10 border border-cyan-400/30 rounded-lg"></div>

                                {/* Top border with pulse effect */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500/90 via-fuchsia-500/90 to-cyan-400/90 animate-gradient-x"></div>

                                {/* Japanese patterns */}
                                <div className="absolute top-0 left-0 right-0 h-16 bg-repeat-x opacity-10"
                                    style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTAwIj48cGF0aCBmaWxsPSIjOEI1Q0YwIiBkPSJNMCAwQzUwIDAgNTAgNTAgMCAxMDBIMjAwQzE1MCAxMDAgMTUwIDUwIDIwMCAwSDBaIi8+PC9zdmc+')" }}>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-repeat-x opacity-10 transform rotate-180"
                                    style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTAwIj48cGF0aCBmaWxsPSIjOEI1Q0YwIiBkPSJNMCAwQzUwIDAgNTAgNTAgMCAxMDBIMjAwQzE1MCAxMDAgMTUwIDUwIDIwMCAwSDBaIi8+PC9zdmc+')" }}>
                                </div>

                                {/* Japanese Kanji decorations */}
                                <div className="absolute top-1/4 left-5 text-red-500/20 font-bold text-6xl transform -rotate-12" style={{ writingMode: 'vertical-rl' }}>
                                    未来技術
                                </div>
                                <div className="absolute bottom-1/4 right-5 text-cyan-400/20 font-bold text-6xl transform rotate-12" style={{ writingMode: 'vertical-rl' }}>
                                    安全保障
                                </div>

                                {/* Main Hero Content */}
                                <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center px-4 space-y-8">
                                    <div className="relative">
                                        {/* Title with decorative elements */}
                                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                            <svg className="w-32 h-8 text-red-500/40" viewBox="0 0 100 20" fill="currentColor">
                                                <path d="M0,10 Q25,0 50,10 T100,10" />
                                            </svg>
                                        </div>

                                        <div className="absolute inset-0 blur-md bg-red-500/10 rounded-3xl"></div>
                                        <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-slide-up opacity-0 mx-auto" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                                            Secure Metadata
                                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400 animate-slide-up opacity-0 [animation-delay:0.2s]">
                                                on MoveVM
                                            </span>
                                        </h1>

                                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 rotate-180">
                                            <svg className="w-32 h-8 text-cyan-400/40" viewBox="0 0 100 20" fill="currentColor">
                                                <path d="M0,10 Q25,0 50,10 T100,10" />
                                            </svg>
                                        </div>
                                    </div>

                                    <p className="text-white/90 text-center text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 [animation-delay:0.4s]">
                                        Build secure and transparent file metadata storage solutions powered by
                                        Move Virtual Machine for the Web3 ecosystem.
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                                        <a href="https://docs.kanari.network/"
                                            className="relative bg-gradient-to-r from-red-600 to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(220,38,38,0.6)] active:translate-y-0 animate-slide-up overflow-hidden group/btn"
                                        >
                                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-400/0 via-red-400/30 to-red-400/0 -translate-x-[100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></span>
                                            <span className="relative z-10 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                                </svg>
                                                Explore Docs
                                            </span>
                                        </a>
                                        <a href="https://gg1ycocxact.typeform.com/to/ITdq2wel"
                                            className="relative bg-indigo-900/40 border border-cyan-500/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:bg-indigo-900/60 active:translate-y-0 animate-slide-up"
                                        >
                                            <span className="relative z-10 flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                </svg>
                                                Join Testnet
                                            </span>
                                            <span className="absolute top-0 right-0 h-[30%] w-[30%] border-t border-r border-cyan-400/50"></span>
                                            <span className="absolute bottom-0 left-0 h-[30%] w-[30%] border-b border-l border-cyan-400/50"></span>
                                        </a>
                                    </div>
                                </div>

                                {/* Decorative pulse indicators */}
                                <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                                    <div className="h-[30px] w-[2px] bg-red-500/40 mx-1"></div>
                                    <div className="h-[20px] w-[2px] bg-white/30 mx-1"></div>
                                    <div className="h-[40px] w-[2px] bg-cyan-400/40 mx-1"></div>
                                    <div className="h-[15px] w-[2px] bg-white/30 mx-1"></div>
                                    <div className="h-[25px] w-[2px] bg-red-500/40 mx-1"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features and Use Cases Section */}
                    <section className="py-16 sm:py-20 px-4">
                        <div className="max-w-7xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center space-y-4 sm:space-y-6 mb-12">
                                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-clip-text text-transparent group bg-gradient-to-r ${darkMode
                                    ? ' dark:from-white dark:via-blue-300  dark:to-purple-200'
                                    : ' from-gray-900 via-blue-800 to-purple-900'
                                    }`}>
                                    Kanari Network:
                                    <span className="block mt-2 text-xl sm:text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">
                                        Use Cases and Features
                                    </span>
                                    <div className="h-1 w-32 sm:w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                </h2>

                                <p className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${darkMode
                                    ? 'dark:text-gray-300'
                                    : 'text-gray-600 '
                                    }`}>
                                    Explore the capabilities of Kanari Network and Move VM for secure and transparent file metadata management in the Web3 ecosystem.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                                {/* Left Content */}
                                <div
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    className="w-full space-y-6 p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg backdrop-blur-sm"
                                >
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                        Secure Metadata Management
                                        <span className="block mt-2 text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                            Powered by MoveVM
                                        </span>
                                    </h3>

                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Store, track, and manage file metadata with enterprise-grade security.
                                        Our MoveVM implementation ensures tamper-proof records and verifiable
                                        ownership across the Web3 ecosystem.
                                    </p>

                                    <div className="space-y-3">
                                        {[
                                            'Cryptographic file validation',
                                            'Immutable ownership records',
                                            'Smart contract integration',
                                            'Decentralized storage',
                                        ].map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-3 bg-white/50 dark:bg-gray-700/50 p-3 rounded-lg hover:scale-[1.02] transition-transform duration-300"
                                            >
                                                <svg
                                                    className="h-5 w-5 flex-shrink-0 text-blue-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Content - Code Preview */}
                                <div
                                    className="w-full relative"
                                    data-aos="fade-left"
                                    data-aos-delay="200"
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30"></div>
                                    <pre className="relative p-4 sm:p-6 text-xs sm:text-sm bg-gray-900 text-gray-100 rounded-xl shadow-2xl overflow-x-auto">
                                        <div className="flex items-center space-x-2 mb-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <Highlight
                                            code={codeExample}
                                            language="rust"
                                        >
                                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                                <code className={`font-mono text-xs sm:text-sm ${className}`}>
                                                    {tokens.map((line, i) => (
                                                        <div key={i} {...getLineProps({ line })}>
                                                            {line.map((token, key) => (
                                                                <span key={key} {...getTokenProps({ token })} />
                                                            ))}
                                                        </div>
                                                    ))}
                                                </code>
                                            )}
                                        </Highlight>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Platform Features Section */}
                    <section className="py-16 sm:py-20 px-4">
                        <div className="max-w-7xl mx-auto text-center">
                            {/* Section Header */}
                            <div className="text-center space-y-4 sm:space-y-6 mb-12">
                                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-clip-text text-transparent group bg-gradient-to-r ${darkMode
                                    ? ' dark:from-white dark:via-blue-300  dark:to-purple-200'
                                    : ' from-gray-900 via-blue-800 to-purple-900'
                                    }`}>
                                    Kanari Network:
                                    <span className="block mt-2 text-xl sm:text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">
                                        Secure File Metadata Platform
                                    </span>
                                    <div className="h-1 w-32 sm:w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                </h2>

                                <p className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${darkMode
                                    ? 'dark:text-gray-300'
                                    : 'text-gray-600 '
                                    }`}>
                                    A decentralized platform leveraging MoveVM to provide secure, transparent, and efficient file metadata management in the Web3 ecosystem.
                                </p>
                            </div>

                            {/* Feature Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                                {/* Card 1 */}
                                <div data-aos="fade-right" data-aos-delay="100">
                                    <InvestorCard darkMode={darkMode} setDarkMode={setDarkMode}
                                        icon={
                                            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="12" cy="7" r="3" strokeWidth="2" />
                                                <circle cx="7" cy="17" r="3" strokeWidth="2" />
                                                <circle cx="17" cy="17" r="3" strokeWidth="2" />

                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M12 10L7 14M12 10L17 14" />
                                            </svg>
                                        }
                                        title="Smart Contract Security"
                                        description="Built on MoveVM for robust file validation, hash verification, and secure access control mechanisms."
                                    />
                                </div>

                                {/* Card 2 */}
                                <div data-aos="fade-up" data-aos-delay="200">
                                    <InvestorCard darkMode={darkMode} setDarkMode={setDarkMode}
                                        icon={
                                            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        }
                                        title="Metadata Management"
                                        description="Comprehensive file metadata tracking with ownership verification, version history, and immutable references."
                                    />
                                </div>

                                {/* Card 3 */}
                                <div data-aos="fade-left" data-aos-delay="300">
                                    <InvestorCard darkMode={darkMode} setDarkMode={setDarkMode}
                                        icon={
                                            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                                            </svg>
                                        }
                                        title="Decentralized Infrastructure"
                                        description="Permissionless and trustless operation with transparent transaction trails and cryptographic proofs."
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Web3 Solutions Section */}
                    <section className="py-16 sm:py-20 px-4">
                        <div className="max-w-7xl mx-auto text-center">
                            {/* Section Header */}
                            <div className="text-center space-y-4 sm:space-y-6 mb-12">
                                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-clip-text text-transparent group bg-gradient-to-r ${darkMode
                                    ? ' dark:from-white dark:via-blue-300  dark:to-purple-200'
                                    : ' from-gray-900 via-blue-800 to-purple-900'
                                    }`}>
                                    Kanari Network:
                                    <span className="block mt-2 text-xl sm:text-2xl md:text-3xl group-hover:translate-x-2 transition-transform">
                                        Web3 Metadata Solutions
                                    </span>
                                    <div className="h-1 w-32 sm:w-48 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform"></div>
                                </h2>

                                <p className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${darkMode
                                    ? 'dark:text-gray-300'
                                    : 'text-gray-600 '
                                    }`}>
                                    Revolutionizing file metadata management with secure, transparent, and efficient blockchain solutions.
                                </p>
                            </div>

                            {/* Solution Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                                {/* Card 1 */}
                                <div data-aos="fade-right" data-aos-delay="100">
                                    <InvestorCard darkMode={darkMode} setDarkMode={setDarkMode}
                                        icon={
                                            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        }
                                        title="Secure File Tracking"
                                        description="Track file history and maintain immutable records of metadata changes with transparent audit trails."
                                    />
                                </div>

                                {/* Card 2 */}
                                <div data-aos="fade-up" data-aos-delay="200">
                                    <InvestorCard darkMode={darkMode} setDarkMode={setDarkMode}
                                        icon={
                                            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 112 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        }
                                        title="Version Control System"
                                        description="Track file history and maintain immutable records of metadata changes with transparent audit trails."
                                    />
                                </div>

                                {/* Card 3 */}
                                <div data-aos="fade-left" data-aos-delay="300">
                                    <InvestorCard darkMode={darkMode} setDarkMode={setDarkMode}
                                        icon={
                                            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M12 8c-1.658 0-3 .895-3 2s1.342 2 3 2 3-.895 3-2-1.342-2-3-2zM3 12c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                                            </svg>
                                        }
                                        title="Access Control Mechanisms"
                                        description="Manage file permissions and ownership with granular control through smart contract integration."
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Updates and Channels Sections */}
                    <LatestUpdates darkMode={darkMode} setDarkMode={setDarkMode} />


                    <OfficialChannels darkMode={darkMode} setDarkMode={setDarkMode} />

                    {/* Newsletter Section */}
                    <div data-aos="fade-left" data-aos-delay="300">
                        <NewsletterSection darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>

                    <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </main>
        </div>
    )
}
