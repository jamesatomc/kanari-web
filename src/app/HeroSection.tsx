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
import { VCSection } from './Section/VCSection';


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
            ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-indigo-950'
            : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50'
            }`}>


            <main className="relative min-h-screen overflow-hidden">

                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-20 right-20 w-96 h-96 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-200/30'} rounded-full blur-3xl`}></div>
                    <div className={`absolute bottom-20 left-20 w-80 h-80 ${darkMode ? 'bg-purple-500/10' : 'bg-purple-200/30'} rounded-full blur-3xl`}></div>
                </div>

                <div className="relative z-10">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

                    {/* Hero Video Banner */}
                    <section
                        className="pt-24 py-2 px-2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="parallax-bg rounded-[30px] overflow-hidden shadow-2xl border border-blue-500/20 relative group">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover h-[700px] w-full scale-105 group-hover:scale-100 transition-transform duration-700"
                            >
                                <source src="/Lines.mp4" type="video/mp4" />
                            </video>

                            <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-slate-900/80 to-indigo-950/90 backdrop-blur-sm">
                                {/* Clean decorative elements */}
                                <div className="absolute inset-8 border border-blue-500/20 rounded-lg"></div>
                                <div className="absolute inset-10 border border-indigo-400/30 rounded-lg"></div>

                                {/* Top border with gradient */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/90 via-indigo-500/90 to-blue-400/90"></div>

                                {/* Main Hero Content */}
                                <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center px-4 space-y-8 relative z-20">
                                    <div className="relative text-center">
                                        <div className="absolute inset-0 blur-md bg-blue-500/10 rounded-3xl"></div>
                                        <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-slide-up opacity-0 mx-auto" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                                            Secure Metadata
                                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 animate-slide-up opacity-0 [animation-delay:0.2s]">
                                                on MoveVM
                                            </span>
                                        </h1>
                                    </div>

                                    <p className="text-white/90 text-center text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed animate-slide-up opacity-0 [animation-delay:0.4s]">
                                        Build secure and transparent file metadata storage solutions powered by
                                        Move Virtual Machine for the Web3 ecosystem.
                                    </p>

                                    {/* CTA Buttons - Fixed z-index and interactivity */}
                                    <div className="flex flex-wrap justify-center gap-4 mt-8 relative z-30">
                                        <a
                                            href="https://docs.kanari.network/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer ${darkMode
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25'
                                                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25'
                                                }`}
                                            style={{ pointerEvents: 'auto' }}
                                        >
                                            <span className="flex items-center relative z-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                                </svg>
                                                Explore Docs
                                            </span>
                                        </a>
                                        <a
                                            href="https://gg1ycocxact.typeform.com/to/ITdq2wel"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 cursor-pointer ${darkMode
                                                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white hover:bg-gray-700/30'
                                                : 'border-gray-300 text-white hover:border-gray-400 hover:bg-white/10'
                                                }`}
                                            style={{ pointerEvents: 'auto' }}
                                        >
                                            <span className="flex items-center relative z-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                </svg>
                                                Join Testnet
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Features and Use Cases Section */}
                    <section className="py-16 sm:py-20 px-4">
                        <div className="max-w-7xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${darkMode
                                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                                    }`}>
                                    🚀 Secure Metadata Management
                                </div>

                                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-blue-300 to-purple-300'
                                    : 'from-blue-800 to-purple-800'
                                    } bg-clip-text text-transparent`}>
                                    Use Cases and Features
                                </h2>

                                <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                                    Explore the capabilities of Kanari Network and Move VM for secure and transparent file metadata management in the Web3 ecosystem.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                                {/* Left Content */}
                                <div
                                    data-aos="fade-right"
                                    data-aos-delay="100"
                                    className={`w-full space-y-6 p-8 rounded-3xl shadow-lg backdrop-blur-sm ${darkMode
                                        ? 'bg-gradient-to-br from-gray-800/50 to-blue-900/30 border border-blue-500/20'
                                        : 'bg-gradient-to-br from-white to-blue-50 border border-blue-200'
                                        }`}
                                >
                                    <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Secure Metadata Management
                                        <span className="block mt-2 text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                            Powered by MoveVM
                                        </span>
                                    </h3>

                                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Store, track, and manage file metadata with enterprise-grade security.
                                        Our MoveVM implementation ensures tamper-proof records and verifiable
                                        ownership across the Web3 ecosystem.
                                    </p>

                                    <div className="space-y-3">
                                        {['Cryptographic file validation',
                                            'Immutable ownership records',
                                            'Smart contract integration',
                                            'Decentralized storage',
                                        ].map((feature, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center space-x-3 p-3 rounded-lg hover:scale-[1.02] transition-transform duration-300 ${darkMode
                                                    ? 'bg-white/5 border border-blue-500/10'
                                                    : 'bg-white/50 border border-blue-200/50'
                                                    }`}
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
                                                <span className={`text-sm sm:text-base ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
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
                            <div className="text-center mb-16">
                                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${darkMode
                                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                                    }`}>
                                    🔐 Secure File Metadata Platform
                                </div>

                                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-blue-300 to-purple-300'
                                    : 'from-blue-800 to-purple-800'
                                    } bg-clip-text text-transparent`}>
                                    Secure File Metadata Platform
                                </h2>

                                <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
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
                            <div className="text-center mb-16">
                                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${darkMode
                                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                                    }`}>
                                    🌐 Web3 Metadata Solutions
                                </div>

                                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-blue-300 to-purple-300'
                                    : 'from-blue-800 to-purple-800'
                                    } bg-clip-text text-transparent`}>
                                    Web3 Metadata Solutions
                                </h2>

                                <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
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

                    <VCSection darkMode={darkMode} setDarkMode={setDarkMode} />

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
