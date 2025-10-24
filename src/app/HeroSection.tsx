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
        <div className={`transition-colors duration-300 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>


            <main className="relative min-h-screen overflow-hidden">

                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute top-24 right-24 w-72 h-72 ${darkMode ? 'bg-blue-600/6' : 'bg-blue-200/20'} rounded-full blur-lg`} />
                </div>

                <div className="relative z-10">
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

                    {/* Hero Video Banner */}
                    <section
                        className="pt-24 py-2 px-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="rounded-[20px] overflow-hidden relative shadow-lg border border-gray-200/10">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/Lines.mp4" type="video/mp4" />
                            </video>

                            {/* overlay to improve contrast */}
                            <div className="absolute inset-0 bg-black/55"></div>

                            {/* Content layout: stacked on small screens, side-by-side on md+ */}
                            <div className="relative z-10 min-h-[420px] md:min-h-[600px] flex items-start">
                                <div className="w-full flex flex-col md:flex-row px-6 md:px-12 py-8 md:py-12 gap-6">
                                    {/* Left: Responsive heading */}
                                    <div className="flex-1 flex items-start">
                                        <h1
                                            className="w-full text-center md:text-left text-4xl sm:text-5xl md:text-[4.8rem] lg:text-[6.5rem] leading-[0.95] md:leading-[0.9] font-extrabold text-white tracking-tight break-words"
                                            style={{ fontFamily: "'Exo 2', sans-serif", textShadow: '0 8px 30px rgba(0,0,0,0.6)' }}
                                        >
                                            Where Simplicity
                                            <span className="block mt-1">Meets Genius.</span>
                                        </h1>
                                    </div>

                                    {/* Right: supporting text + CTA (centered on mobile) */}
                                    <div className="w-full md:max-w-md flex flex-col items-center md:items-end justify-center text-center md:text-right space-y-4">
                                        <p className="max-w-xs text-sm md:text-base text-white/90">
                                            We craft bold, strategic, and unforgettable designs that don&apos;t just look good — they work. Elevate your brand with clarity, creativity, and impact.
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-3 items-center md:items-end">
                                            <a href="https://docs.kanari.network/" target="_blank" rel="noopener noreferrer"
                                                className="px-6 py-3 rounded-full bg-black text-white font-medium inline-flex items-center gap-2 shadow-md hover:opacity-95 transition">
                                                Get Started
                                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                            <a href="https://gg1ycocxact.typeform.com/to/ITdq2wel" target="_blank" rel="noopener noreferrer"
                                                className="px-5 py-3 rounded-full border border-white/30 text-white/90 hover:opacity-95 transition">
                                                Join Testnet
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <VCSection darkMode={darkMode} setDarkMode={setDarkMode} />

                    {/* Features and Use Cases Section */}
                    <section className="py-16 sm:py-20 px-4">
                        <div className="max-w-7xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${darkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-100 text-blue-800 border border-blue-200'}`}>
                                    🚀 Secure Metadata Management
                                </div>

                                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${darkMode
                                    ? 'from-blue-400 to-indigo-400'
                                    : 'from-blue-800 to-indigo-800'
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
                                        ? 'bg-white/6 text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20'
                                        : 'bg-white text-black border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
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
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur opacity-30"></div>
                                    <pre className={`relative p-4 sm:p-6 text-xs sm:text-sm rounded-xl shadow-2xl overflow-x-auto ${darkMode ? 'bg-gradient-to-br from-gray-800/60 to-blue-900/40 text-gray-100 border border-blue-700/20' : 'bg-gradient-to-br from-white to-blue-50 text-gray-900 border border-blue-200'}`}>
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
                                    // onClick={() => window.open('https://kanari.site/', '_blank')}
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
