'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaSun, FaTimes } from "react-icons/fa";
import Image from "next/image"; 
import { FaMoon } from "react-icons/fa6";
import DropdownMenu from "./components/DropdownMenu";
import MobileMenuItem from "./components/MobileMenuItem";
import { menuData } from "./utils/menuData";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [nav, setNav] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    learn: false,
    build: false,
    connect: false
  });
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

  const toggleDropdown = (key: keyof typeof dropdownStates) => {
    setDropdownStates(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const setDropdownOpen = (key: keyof typeof dropdownStates, value: boolean) => {
    setDropdownStates(prev => ({ ...prev, [key]: value }));
  };

  return (
    <nav className={`m-3 flex justify-between items-center w-[calc(100%-24px)] z-30 h-18 mx-auto px-6 py-4 fixed top-0 left-0 right-0 rounded-2xl transition-transform duration-300 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0' } ${darkMode ? 'bg-gray-900/90 text-white border border-blue-600/20' : 'bg-white/95 text-black border border-gray-200' }`}>
      
      {/* Logo Section */}
      <div className="flex items-center relative z-10">
        <div className="relative">
          <Image
            src="/kariicon1.png"
            alt="Kanari Logo"
            width={46}
            height={46}
            className="relative transform transition duration-200 hover:scale-105 rounded-full ring-1 ring-transparent"
          />
        </div>
        <h1 className="text-3xl font-bold font-signature ml-3 relative">
          <Link
            className={`relative transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-300 font-extrabold' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 font-extrabold'
            }`}
            href="/"
          >
            Kanari
          </Link>
        </h1>
      </div>

      {/* Desktop Navigation (simplified styling) */}
      <ul className="hidden lg:flex justify-center items-center space-x-2">
        {/* Home link */}
        <li className="nav-links px-4 py-2 cursor-pointer font-medium relative group">
          <Link 
            href="/" 
            className={`relative inline-block transform transition-all duration-300 hover:translate-y-[-2px] ${
              darkMode 
                ? 'text-gray-200 hover:text-blue-300' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Home
          </Link>
          <div className={`absolute -bottom-1 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full ${
            darkMode 
              ? 'bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400' 
              : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500'
          }`}></div>
        </li>

        {/* Dynamic dropdown menus */}
        {menuData.map((menu, index) => (
          <DropdownMenu
            key={menu.title.toLowerCase()}
            title={menu.title}
            items={menu.items}
            isOpen={dropdownStates[menu.title.toLowerCase() as keyof typeof dropdownStates]}
            onToggle={() => toggleDropdown(menu.title.toLowerCase() as keyof typeof dropdownStates)}
            onMouseEnter={() => setDropdownOpen(menu.title.toLowerCase() as keyof typeof dropdownStates, true)}
            onMouseLeave={() => setDropdownOpen(menu.title.toLowerCase() as keyof typeof dropdownStates, false)}
            darkMode={darkMode}
            titleColor={darkMode ? menu.titleColor.dark : menu.titleColor.light}
            gradientColors={darkMode ? menu.gradientColors.dark : menu.gradientColors.light} 
            hoverEffect={menu.hoverEffect}          
          />
        ))}
      </ul>

      {/* Dark Mode Toggle */}
      <div className="hidden lg:block relative z-10">
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`relative p-2 rounded-lg transition duration-200 ${darkMode ? 'bg-gray-800 text-amber-300' : 'bg-gray-100 text-blue-600'}`}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {/* simplified toggle background */}
          <div className="relative">
            {darkMode 
              ? <FaSun size={22} className="transform transition-transform hover:rotate-90 duration-300" /> 
              : <FaMoon size={22} className="transform transition-transform duration-200" />}
          </div>
        </button>
      </div>

      {/* Mobile menu button */}
      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer p-3 rounded-xl z-10 transition-all duration-300 lg:hidden ${
          darkMode 
            ? 'text-gray-200 hover:text-white hover:bg-gray-800/50' 
            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
        }`}
      >
        <div className="relative">
          <FaBars size={24} className={`absolute transition-opacity duration-200 ${nav ? 'opacity-0' : 'opacity-100'}`} />
          <FaTimes size={24} className={`transition-opacity duration-200 ${nav ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      {nav && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" 
            onClick={() => setNav(false)}
          />
          
          {/* Mobile menu panel */}
          <div 
            className={`absolute top-0 left-0 w-[85%] max-w-sm h-screen overflow-y-auto transition-all duration-500 ease-out transform ${nav ? 'translate-x-0' : '-translate-x-full'} ${darkMode ? 'bg-gray-900/95 text-gray-100 border-r border-blue-500/30' : 'bg-white/95 text-gray-800 border-r border-blue-200/50'} backdrop-blur-xl rounded-r-3xl shadow-2xl`}
            onClick={e => e.stopPropagation()}
          >
            {/* subtle top bar */}
            <div className={`h-1 w-full ${darkMode ? 'bg-blue-600/40' : 'bg-blue-600/50'} rounded-tr-3xl`}></div>
            
            {/* Mobile menu header */}
            <div className="p-8 border-b border-gray-200/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/kariicon1.png"
                    alt="Kanari Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h2 className={`text-2xl font-bold ${
                    darkMode 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300' 
                      : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'
                  }`}>
                    Kanari
                  </h2>
                </div>
                
                {/* Mobile dark mode toggle */}
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-800/60 text-amber-300 hover:bg-gray-700/80' 
                      : 'bg-gray-100/60 text-blue-600 hover:bg-gray-200/80'
                  }`}
                >
                  {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                </button>
              </div>
            </div>
            
            {/* Mobile navigation menu */}
            <div className="p-6">
              <ul className="space-y-4">
                <MobileMenuItem
                  title="Home"
                  href="/"
                  onNavClose={() => setNav(false)}
                  darkMode={darkMode}
                  index="01"
                  color="text-blue-500"
                  borderColor=""
                />
                
                {menuData.map((menu, index) => (
                  <MobileMenuItem
                    key={menu.title}
                    title={menu.title}
                    items={menu.items}
                    isOpen={dropdownStates[menu.title.toLowerCase() as keyof typeof dropdownStates]}
                    onToggle={() => toggleDropdown(menu.title.toLowerCase() as keyof typeof dropdownStates)}
                    onNavClose={() => setNav(false)}
                    darkMode={darkMode}
                    index={`0${index + 2}`}
                    color={menu.mobileColor}
                    borderColor={menu.mobileBorderColor}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}