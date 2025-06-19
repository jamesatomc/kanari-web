'use client'

import Link from "next/link";
import React from "react";

interface MenuItem {
  href: string;
  label: string;
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  darkMode: boolean;
  titleColor: string;
  gradientColors: string;
}

export default function DropdownMenu({ 
  title, 
  items, 
  isOpen, 
  onToggle, 
  onMouseEnter, 
  onMouseLeave, 
  darkMode, 
  titleColor,
  gradientColors 
}: DropdownMenuProps) {
  return (
    <li className="nav-item relative group px-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
          onToggle();
        }}
      >
        {title}
        <svg className={`inline-block ml-1 transform transition duration-300 ${isOpen ? 'rotate-180' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${gradientColors}`}></div>
      
      <div 
        className={`absolute top-full left-1/2 -translate-x-1/2 shadow-lg rounded-2xl w-[320px] py-4 px-6 opacity-0 group-hover:opacity-100 
          transition-all duration-300 invisible group-hover:visible transform origin-top scale-95 group-hover:scale-100 z-10 
          ${darkMode 
            ? 'bg-gray-800/90 backdrop-blur-sm border border-indigo-500/20' 
            : 'bg-white/90 backdrop-blur-sm border border-red-300/20'
          }`}
      >
        <div className="mb-3 pb-2 border-b border-gray-200/20 flex items-center">
          <span className={`text-sm font-semibold ${titleColor}`}>
            {title === 'Learn' ? 'Learning Resources' : 
             title === 'Build' ? 'Development Resources' : 'Community'}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {items.map((item, index) => (
            <div key={index} className={`py-1 rounded-xl transition-all duration-200 ease-in-out transform 
                hover:-translate-y-1 hover:shadow-sm ${darkMode ? 'hover:bg-gray-700/70' : 'hover:bg-gray-50/70'}`}>
              <Link href={item.href} className={`block px-3 py-2 ${darkMode ? 'text-white' : 'text-gray-800'} hover:pl-4 transition-all duration-200 rounded-lg`}>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}
