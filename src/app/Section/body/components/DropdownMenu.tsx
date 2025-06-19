'use client'

import Link from "next/link";
import React from "react";

interface MenuItem {
  href: string;
  label: string;
  icon?: string;
  description?: string;
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
  hoverEffect: string;
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
  gradientColors,
  hoverEffect
}: DropdownMenuProps) {
  return (
    <li className="nav-item relative group px-4"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href=""
        className={`relative inline-flex items-center space-x-1 transform transition-all duration-300 hover:translate-y-[-2px] ${darkMode
            ? 'text-white hover:text-red-300'
            : 'text-gray-800 hover:text-red-600'
          }`}
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        <span className="font-medium">{title}</span>
        <svg className={`w-4 h-4 transform transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {/* Enhanced underline animation */}
      <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full ${gradientColors}`}></div>

      {/* Enhanced dropdown menu */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 shadow-2xl rounded-2xl w-[380px] py-6 px-6 opacity-0 group-hover:opacity-100 
          transition-all duration-300 invisible group-hover:visible transform origin-top scale-95 group-hover:scale-100 z-50
          ${darkMode
            ? 'bg-gray-800/95 backdrop-blur-xl border border-red-500/20'
            : 'bg-white/95 backdrop-blur-xl border border-red-300/20'
          }`}
      >
        {/* Header */}
        <div className="mb-4 pb-3 border-b border-gray-200/20 flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${gradientColors.replace('bg-gradient-to-r', 'bg-red-500')}`}></div>
          <span className={`text-sm font-bold uppercase tracking-wider ${titleColor}`}>
            {title === 'Learn' ? '🎓 Learning Hub' :
              title === 'Build' ? '🔨 Build Tools' : '🌐 Community'}
          </span>
        </div>

        {/* Menu items */}
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className={`rounded-xl transition-all duration-200 ease-in-out transform 
                hover:-translate-y-1 hover:shadow-lg ${hoverEffect} border border-transparent hover:border-red-200/20`}>
              <Link href={item.href} className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group/item`}>
                {item.icon && (
                  <span className="text-lg group-hover/item:scale-110 transition-transform">{item.icon}</span>
                )}
                <div className="flex-1">
                  <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'} group-hover/item:text-red-500 transition-colors`}>
                    {item.label}
                  </div>
                  {item.description && (
                    <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {item.description}
                    </div>
                  )}
                </div>
                <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>


      </div>
    </li>
  );
}
