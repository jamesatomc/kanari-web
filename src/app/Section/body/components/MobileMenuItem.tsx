'use client'

import Link from "next/link";
import React from "react";

interface MenuItem {
  href: string;
  label: string;
}

interface MobileMenuItemProps {
  title: string;
  items?: MenuItem[];
  href?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onNavClose: () => void;
  darkMode: boolean;
  index: string;
  color: string;
  borderColor: string;
}

export default function MobileMenuItem({ 
  title, 
  items, 
  href, 
  isOpen, 
  onToggle, 
  onNavClose, 
  darkMode, 
  index, 
  color,
  borderColor 
}: MobileMenuItemProps) {
  if (!items) {
    return (
      <li>
        <Link
          href={href || "/"}
          className={`block text-lg ${darkMode ? 'text-white' : 'text-gray-800'} hover:translate-x-2 transition-transform rounded-lg hover:bg-opacity-10 hover:bg-gray-500 p-2`}
          onClick={onNavClose}
        >
          <span className={`text-sm ${color} mr-2`}>{index}</span> {title}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div 
        className="flex items-center justify-between cursor-pointer text-lg hover:translate-x-2 transition-transform rounded-lg hover:bg-opacity-10 hover:bg-gray-500 p-2"
        onClick={onToggle}
      >
        <div>
          <span className={`text-sm ${color} mr-2`}>{index}</span> {title}
        </div>
        <svg className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isOpen && (
        <div className={`pl-8 mt-3 space-y-3 border-l-2 ${borderColor}`}>
          {items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <Link href={item.href} 
                className={`block py-1 hover:translate-x-2 transition-transform ${darkMode ? 'text-gray-300' : 'text-gray-600'} rounded-md p-2 hover:bg-opacity-10 hover:bg-gray-500`}
                onClick={onNavClose}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
