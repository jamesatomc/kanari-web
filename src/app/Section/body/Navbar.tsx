'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaSun, FaTimes } from "react-icons/fa";
import Image from "next/image"; 
import { FaMoon } from "react-icons/fa6";

export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (darkMode: boolean) => void }) {
  const [nav, setNav] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [buildOpen, setBuildOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Load dark mode preference from localStorage on component mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setDarkMode(true);
    }
  }, [setDarkMode]); 

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <nav className={`m-2 backdrop-blur-md bg-opacity-50 flex justify-between items-center w-[calc(100%-40px)] z-20 h-20 mx-auto px-6 py-4 fixed top-0 left-0 right-0 rounded-lg transition-all duration-300 
    ${darkMode 
      ? 'bg-gray-900/90 text-white border border-indigo-500/20' 
      : 'bg-white/90 text-black border border-red-300/20'
    } ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      
      {/* Japanese-inspired decorative patterns */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/80 via-indigo-500/50 to-red-500/80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/80 via-red-500/50 to-indigo-500/80"></div>
      
      {/* Subtle wave pattern - seigaiha */}
      <div className="absolute top-1 left-0 right-0 h-8 bg-repeat-x opacity-5 pointer-events-none"
          style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTAwIj48cGF0aCBmaWxsPSIjOEI1Q0YwIiBkPSJNMCAwQzUwIDAgNTAgNTAgMCAxMDBIMjAwQzE1MCAxMDAgMTUwIDUwIDIwMCAwSDBaIi8+PC9zdmc+')"}}>
      </div>
      
      <div className="flex items-center relative"> 
        <div className={`absolute -inset-2 rounded-full ${darkMode ? 'bg-red-500/5' : 'bg-red-500/5'} blur-sm`}></div>
        <Image
          src="/kariicon1.png"
          alt="Kanari Logo"
          width={42}
          height={42}
          className="z-10 relative transform transition-transform hover:rotate-12 duration-500"
        />
        <h1 className="text-4xl font-bold font-signature ml-2 relative z-10">
          <Link
            className={`relative ${
              darkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-indigo-300 font-extrabold' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600 font-extrabold'
            } hover:scale-105 duration-300`}
            href="/"
          >
            Kanari
            <span className="absolute -top-1 right-0 text-xs opacity-70 font-normal tracking-widest">
              カナリ
            </span>
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex justify-center items-center">
        {/* Home link */}
        <li className={`nav-links px-4 cursor-pointer capitalize font-medium relative group`}>
          <Link 
            href="/" 
            className={`relative inline-block transform transition duration-300 hover:translate-y-[-2px] ${
              darkMode 
                ? 'text-white hover:text-red-300' 
                : 'text-gray-800 hover:text-red-600'
            }`}
          >
            ホーム
            <span className="block text-xs opacity-70 text-center">Home</span>
          </Link>
          <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
            darkMode 
              ? 'bg-gradient-to-r from-red-400 via-indigo-400 to-red-400' 
              : 'bg-gradient-to-r from-red-500 via-indigo-500 to-red-500'
          }`}></div>
        </li>

        {/* Learn dropdown */}
        <li className="nav-item relative group px-4"
          onMouseEnter={() => setLearnOpen(true)}
          onMouseLeave={() => setLearnOpen(false)}
        >
          <Link
            href=""
            className={`relative inline-block transform transition duration-300 hover:translate-y-[-2px] ${
              darkMode 
                ? 'text-white hover:text-red-300' 
                : 'text-gray-800 hover:text-red-600'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setLearnOpen(!learnOpen);
            }}
          >
            学ぶ
            <span className="block text-xs opacity-70 text-center">Learn</span>
            <svg className={`inline-block ml-1 transform transition duration-300 ${learnOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
            darkMode 
              ? 'bg-gradient-to-r from-red-400 via-indigo-400 to-red-400' 
              : 'bg-gradient-to-r from-red-500 via-indigo-500 to-red-500'
          }`}></div>
          
          <div 
            className={`absolute top-full left-1/2 -translate-x-1/2 shadow-lg rounded-lg w-[480px] py-4 px-6 opacity-0 group-hover:opacity-100 
              transition-all duration-300 invisible group-hover:visible transform origin-top scale-95 group-hover:scale-100 z-10 
              ${darkMode 
                ? 'bg-gray-800/90 backdrop-blur-sm border border-indigo-500/20' 
                : 'bg-white/90 backdrop-blur-sm border border-red-300/20'
              }`}
          >
            {/* Japanese pattern decorative element */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/80 via-transparent to-indigo-500/80"></div>
            <div className="mb-3 pb-2 border-b border-gray-200/20 flex items-center">
              <span className={`text-sm font-semibold ${darkMode ? 'text-red-300' : 'text-red-600'}`}>
                学習リソース <span className="text-xs opacity-70 font-normal">(Learning Resources)</span>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <li className={`py-1 rounded-md transition-all duration-200 ease-in-out transform 
                  hover:-translate-y-1 hover:shadow-sm ${darkMode ? 'hover:bg-gray-700/70' : 'hover:bg-gray-50/70'}`}>
                <Link href="/learn/basics" className={`block px-3 py-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <span className="block text-sm font-medium">基礎</span>
                  <span className="block text-xs opacity-70">Basics</span>
                </Link>
              </li>
              <li className={`py-1 rounded-md transition-all duration-200 ease-in-out transform 
                  hover:-translate-y-1 hover:shadow-sm ${darkMode ? 'hover:bg-gray-700/70' : 'hover:bg-gray-50/70'}`}>
                <Link href="/learn/advanced" className={`block px-3 py-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <span className="block text-sm font-medium">高度</span>
                  <span className="block text-xs opacity-70">Advanced</span>
                </Link>
              </li>
              <li className={`py-1 rounded-md transition-all duration-200 ease-in-out transform 
                  hover:-translate-y-1 hover:shadow-sm ${darkMode ? 'hover:bg-gray-700/70' : 'hover:bg-gray-50/70'}`}>
                <Link href="/learn/tutorials" className={`block px-3 py-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <span className="block text-sm font-medium">チュートリアル</span>
                  <span className="block text-xs opacity-70">Tutorials</span>
                </Link>
              </li>
            </div>
            {/* Japanese pattern decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/80 via-transparent to-red-500/80"></div>
          </div>
        </li>

        {/* Build dropdown */}
        <li className="nav-item relative group px-4"
          onMouseEnter={() => setBuildOpen(true)}
          onMouseLeave={() => setBuildOpen(false)}
        >
          <Link
            href=""
            className={`relative inline-block transform transition duration-300 hover:translate-y-[-2px] ${
              darkMode 
                ? 'text-white hover:text-red-300' 
                : 'text-gray-800 hover:text-red-600'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setBuildOpen(!buildOpen);
            }}
          >
            構築する
            <span className="block text-xs opacity-70 text-center">Build</span>
            <svg className={`inline-block ml-1 transform transition duration-300 ${buildOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
            darkMode 
              ? 'bg-gradient-to-r from-indigo-400 via-red-400 to-indigo-400' 
              : 'bg-gradient-to-r from-indigo-500 via-red-500 to-indigo-500'
          }`}></div>
          
          <div 
            className={`absolute top-full left-1/2 -translate-x-1/2 shadow-lg rounded-lg w-[480px] py-4 px-6 opacity-0 group-hover:opacity-100 
              transition-all duration-300 invisible group-hover:visible transform origin-top scale-95 group-hover:scale-100 z-10 
              ${darkMode 
                ? 'bg-gray-800/90 backdrop-blur-sm border border-indigo-500/20' 
                : 'bg-white/90 backdrop-blur-sm border border-red-300/20'
              }`}
          >
            {/* Japanese pattern decorative element */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/80 via-transparent to-indigo-500/80"></div>
            <div className="mb-3 pb-2 border-b border-gray-200/20 flex items-center">
              <span className={`text-sm font-semibold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                開発リソース <span className="text-xs opacity-70 font-normal">(Development Resources)</span>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <li className={`py-1 rounded-md transition-all duration-200 ease-in-out transform 
                  hover:-translate-y-1 hover:shadow-sm ${darkMode ? 'hover:bg-gray-700/70' : 'hover:bg-gray-50/70'}`}>
                <Link href="/learn/basics" className={`block px-3 py-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <span className="block text-sm font-medium">ドキュメント</span>
                  <span className="block text-xs opacity-70">Docs</span>
                </Link>
              </li>
              <li className={`py-1 rounded-md transition-all duration-200 ease-in-out transform 
                  hover:-translate-y-1 hover:shadow-sm ${darkMode ? 'hover:bg-gray-700/70' : 'hover:bg-gray-50/70'}`}>
                <Link href="/learn/advanced" className={`block px-3 py-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <span className="block text-sm font-medium">ツール</span>
                  <span className="block text-xs opacity-70">Tools</span>
                </Link>
              </li>
              <li className={`py-1 rounded-md transition-all duration-200 ease-in-out transform 
                  hover:-translate-y-1 hover:shadow-sm ${darkMode ? 'hover:bg-gray-700/70' : 'hover:bg-gray-50/70'}`}>
                <Link href="/learn/tutorials" className={`block px-3 py-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <span className="block text-sm font-medium">リソース</span>
                  <span className="block text-xs opacity-70">Resources</span>
                </Link>
              </li>
            </div>
            {/* Japanese pattern decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/80 via-transparent to-red-500/80"></div>
          </div>
        </li>

        {/* Connect dropdown */}
        <li className="nav-item relative group px-4"
          onMouseEnter={() => setConnectOpen(true)}
          onMouseLeave={() => setConnectOpen(false)}
        >
          <Link
            href=""
            className={`relative inline-block transform transition duration-300 hover:translate-y-[-2px] ${
              darkMode 
                ? 'text-white hover:text-red-300' 
                : 'text-gray-800 hover:text-red-600'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setConnectOpen(!connectOpen);
            }}
          >
            繋がる
            <span className="block text-xs opacity-70 text-center">Connect</span>
            <svg className={`inline-block ml-1 transform transition duration-300 ${connectOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
            darkMode 
              ? 'bg-gradient-to-r from-red-400 via-indigo-400 to-red-400' 
              : 'bg-gradient-to-r from-red-500 via-indigo-500 to-red-500'
          }`}></div>
          
          <div 
            className={`absolute top-full left-1/2 -translate-x-1/2 shadow-lg rounded-lg w-[480px] py-4 px-6 opacity-0 group-hover:opacity-100 
              transition-all duration-300 invisible group-hover:visible transform origin-top scale-95 group-hover:scale-100 z-10 
              ${darkMode 
                ? 'bg-gray-800/90 backdrop-blur-sm border border-indigo-500/20' 
                : 'bg-white/90 backdrop-blur-sm border border-red-300/20'
              }`}
          >
            {/* Japanese pattern decorative element */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/80 via-transparent to-indigo-500/80"></div>
            <div className="mb-3 pb-2 border-b border-gray-200/20 flex items-center">
              <span className={`text-sm font-semibold ${darkMode ? 'text-red-300' : 'text-red-600'}`}>
                コミュニティ <span className="text-xs opacity-70 font-normal">(Community)</span>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <li className={`py-1 rounded-md transition-all duration-200 ease-in-out transform 
                  hover:-translate-y-1 hover:shadow-sm ${darkMode ? 'hover:bg-gray-700/70' : 'hover:bg-gray-50/70'}`}>
                <Link href="/learn/basics" className={`block px-3 py-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <span className="block text-sm font-medium">コミュニティ</span>
                  <span className="block text-xs opacity-70">Community</span>
                </Link>
              </li>
            </div>
            {/* Japanese pattern decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/80 via-transparent to-red-500/80"></div>
          </div>
        </li>
      </ul>

      {/* Dark Mode Toggle with Japanese style */}
      <div className="hidden md:block">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`relative p-2 rounded-full transition-all duration-300
            ${darkMode 
              ? 'bg-gray-700/50 hover:bg-gray-700 text-yellow-300' 
              : 'bg-gray-100/50 hover:bg-gray-100 text-indigo-600'
            }`}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <div className={`absolute inset-0 rounded-full opacity-20 ${darkMode ? 'bg-yellow-400' : 'bg-indigo-400'} blur-sm`}></div>
          <div className="relative">
            {darkMode 
              ? <FaSun size={20} className="transform transition-transform hover:rotate-45 duration-300" /> 
              : <FaMoon size={20} className="transform transition-transform hover:rotate-12 duration-300" />}
          </div>
        </button>
      </div>

      {/* Mobile menu button */}
      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer pr-4 z-10 ${darkMode ? 'text-white' : 'text-gray-800'} md:hidden`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" onClick={() => setNav(false)}>
          <div 
            className={`absolute top-0 left-0 w-[80%] max-w-sm h-screen overflow-y-auto ${darkMode
              ? 'bg-gray-900 text-gray-100 border-r border-gray-700/50'
              : 'bg-white text-gray-800 border-r border-gray-200/50'
            } transform transition-transform duration-500 ease-in-out`}
            onClick={e => e.stopPropagation()}
          >
            {/* Japanese wave pattern at top */}
            <div className="h-2 w-full bg-gradient-to-r from-red-500 via-indigo-500 to-red-500"></div>
            
            {/* Mobile menu content */}
            <div className="p-6">
              <div className="flex items-center mb-8">
                <Image
                  src="/kariicon1.png"
                  alt="Kanari Logo"
                  width={42}
                  height={42}
                  className="mr-3"
                />
                <h2 className={`text-2xl font-bold ${
                  darkMode 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-indigo-300' 
                    : 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600'
                }`}>
                  Kanari <span className="text-xs font-normal opacity-70 tracking-wider">カナリ</span>
                </h2>
              </div>
              
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/"
                    className={`block text-xl ${darkMode ? 'text-white' : 'text-gray-800'} hover:translate-x-2 transition-transform`}
                    onClick={() => setNav(false)}
                  >
                    <span className="text-sm text-red-500 mr-2">01</span> ホーム
                    <span className="block text-sm opacity-70 pl-5">Home</span>
                  </Link>
                </li>
                
                <li>
                  <div 
                    className="flex items-center justify-between cursor-pointer text-xl hover:translate-x-2 transition-transform"
                    onClick={() => setLearnOpen(!learnOpen)}
                  >
                    <div>
                      <span className="text-sm text-indigo-500 mr-2">02</span> 学ぶ
                      <span className="block text-sm opacity-70 pl-5">Learn</span>
                    </div>
                    <svg className={`w-5 h-5 transform transition-transform duration-300 ${learnOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {learnOpen && (
                    <ul className="pl-5 mt-4 space-y-3 border-l-2 border-indigo-500/30">
                      <li>
                        <Link href="/learn/basics" 
                          className={`block py-1 hover:translate-x-2 transition-transform ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                          onClick={() => setNav(false)}
                        >
                          基礎 <span className="text-sm opacity-70">(Basics)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/advanced" 
                          className={`block py-1 hover:translate-x-2 transition-transform ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                          onClick={() => setNav(false)}
                        >
                          高度 <span className="text-sm opacity-70">(Advanced)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/learn/tutorials" 
                          className={`block py-1 hover:translate-x-2 transition-transform ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                          onClick={() => setNav(false)}
                        >
                          チュートリアル <span className="text-sm opacity-70">(Tutorials)</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                
                <li>
                  <div 
                    className="flex items-center justify-between cursor-pointer text-xl hover:translate-x-2 transition-transform"
                    onClick={() => setBuildOpen(!buildOpen)}
                  >
                    <div>
                      <span className="text-sm text-red-500 mr-2">03</span> 構築する
                      <span className="block text-sm opacity-70 pl-5">Build</span>
                    </div>
                    <svg className={`w-5 h-5 transform transition-transform duration-300 ${buildOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {buildOpen && (
                    <ul className="pl-5 mt-4 space-y-3 border-l-2 border-red-500/30">
                      <li>
                        <Link href="/build/projects" 
                          className={`block py-1 hover:translate-x-2 transition-transform ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                          onClick={() => setNav(false)}
                        >
                          ドキュメント <span className="text-sm opacity-70">(Docs)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/build/tools" 
                          className={`block py-1 hover:translate-x-2 transition-transform ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                          onClick={() => setNav(false)}
                        >
                          ツール <span className="text-sm opacity-70">(Tools)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/build/resources" 
                          className={`block py-1 hover:translate-x-2 transition-transform ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                          onClick={() => setNav(false)}
                        >
                          リソース <span className="text-sm opacity-70">(Resources)</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                
                <li>
                  <div 
                    className="flex items-center justify-between cursor-pointer text-xl hover:translate-x-2 transition-transform"
                    onClick={() => setConnectOpen(!connectOpen)}
                  >
                    <div>
                      <span className="text-sm text-indigo-500 mr-2">04</span> 繋がる
                      <span className="block text-sm opacity-70 pl-5">Connect</span>
                    </div>
                    <svg className={`w-5 h-5 transform transition-transform duration-300 ${connectOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {connectOpen && (
                    <ul className="pl-5 mt-4 space-y-3 border-l-2 border-indigo-500/30">
                      <li>
                        <Link href="/connect/community" 
                          className={`block py-1 hover:translate-x-2 transition-transform ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                          onClick={() => setNav(false)}
                        >
                          コミュニティ <span className="text-sm opacity-70">(Community)</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                
                <li className="nav-links px-4 cursor-pointer capitalize font-medium py-6 transform transition duration-300 ease-in-out hover:scale-110">
                  {/* Dark Mode Toggle */}
                  <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                  </button>
                </li>

              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}