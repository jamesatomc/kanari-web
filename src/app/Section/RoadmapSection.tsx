"use client";
import React from 'react';

interface RoadmapSectionProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export function RoadmapSection({ darkMode, setDarkMode }: RoadmapSectionProps) {

    // 💡 ปรับให้เป็น Array เพื่อให้ง่ายต่อการเพิ่ม/แก้ไข Phase ในอนาคต
    // สามารถเพิ่ม Object ใหม่ต่อท้ายได้เลย UI จะจัดการสลับซ้ายขวาให้อัตโนมัติ
    const roadmapData = [
        {
            phase: "Phase 1",
            status: "Completed",
            title: "Foundation & Core Protocol",
            description: "Development of the base layer, smart contract security audits, and initial testnet deployment.",
            badgeClass: darkMode ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : "bg-blue-100 text-blue-800 border-blue-200",
            dotClass: "bg-blue-500",
            icon: (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 10.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            phase: "Phase 2",
            status: "In Progress",
            title: "Mainnet Launch & Ecosystem",
            description: "Expanding node infrastructure, launching the official dashboard, and integrating third-party dApps.",
            badgeClass: darkMode ? "bg-purple-500/20 text-purple-300 border-purple-500/30" : "bg-purple-100 text-purple-800 border-purple-200",
            dotClass: "bg-purple-500",
            icon: (
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            )
        },
        {
            phase: "Phase 3",
            status: "Future",
            title: "Global Scaling & DAO",
            description: "Transitioning to a decentralized governance model (DAO) and cross-chain interoperability features.",
            badgeClass: darkMode ? "bg-gray-500/20 text-gray-300 border-gray-500/30" : "bg-gray-100 text-gray-600 border-gray-200",
            dotClass: darkMode ? "bg-gray-700" : "bg-gray-300",
            icon: (
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            )
        }
    ];

    return (
        <section className="py-16 sm:py-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-linear-to-r ${darkMode
                        ? 'from-blue-300 to-purple-300'
                        : 'from-blue-800 to-purple-800'
                        } bg-clip-text text-transparent`}>
                        Our Roadmap
                    </h2>
                    <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
                        Exploring the future of decentralized identity and secure data management through continuous innovation.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 via-purple-500 to-gray-500/30 rounded-full"></div>

                    <div className="space-y-12">
                        {roadmapData.map((item, index) => {
                            const isEven = index % 2 === 0;

                            // Card Component ย่อยเพื่อลดความซ้ำซ้อน
                            const PhaseCard = ({ isDesktopLeft }: { isDesktopLeft: boolean }) => (
                                <div className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] group ${darkMode
                                        ? 'bg-white/6 text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20'
                                        : 'bg-white text-black border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                                    } ${isDesktopLeft ? 'md:text-right' : 'text-left'}`}>

                                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border ${item.badgeClass}`}>
                                        {item.phase} • {item.status}
                                    </span>

                                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {item.title}
                                    </h3>

                                    <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            );

                            return (
                                <div key={index} className="relative flex flex-col md:flex-row justify-between items-center w-full group">

                                    {/* Left Side (Desktop Only) */}
                                    <div className="hidden md:block md:w-[45%]">
                                        {isEven && <PhaseCard isDesktopLeft={true} />}
                                    </div>

                                    {/* Center Dot Indicator */}
                                    <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 ${darkMode ? 'border-[#0f172a]' : 'border-white'
                                        } flex items-center justify-center z-10 shadow-lg transition-transform duration-300 group-hover:scale-110 ${item.dotClass}`}>
                                        {item.icon}
                                    </div>

                                    {/* Right Side (Always shows on Mobile, shows on Desktop if odd index) */}
                                    <div className="w-full pl-24 md:pl-0 md:w-[45%]">
                                        <div className={`${isEven ? 'md:hidden' : ''} w-full`}>
                                            <PhaseCard isDesktopLeft={false} />
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default RoadmapSection;