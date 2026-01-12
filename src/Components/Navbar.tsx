"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#050505]/80 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg flex items-center justify-center font-black text-white transform group-hover:rotate-12 transition-transform">
            V
          </div>
          <span className="text-xl font-bold tracking-tighter group-hover:text-purple-400 transition-colors">
            VERTEX
          </span>
        </Link>

        {/* Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/explore" className="hover:text-white transition-colors">Explore</Link>
          <Link href="/feed" className="hover:text-white transition-colors">Feed</Link>
          <Link href="/communities" className="hover:text-white transition-colors">Communities</Link>
          <Link href="/developers" className="hover:text-white transition-colors">API</Link>
        </div>

  {/* Action Buttons */}
<div className="flex items-center gap-4">
  <Link href="/Auth">
    {/* Removed 'hidden sm:block' to ensure visibility on mobile */}
    <button className="text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest font-mono">
      Sign_In
    </button>
  </Link>

  <Link href="/download">
    <button className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white text-black text-[10px] sm:text-sm font-black rounded-xl hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-lg shadow-white/5 uppercase tracking-tighter italic">
      Download_App
    </button>
  </Link>
</div>
      </div>
    </nav>
  );
}