"use client";
import Image from "next/image";
import { CircleHelp, Menu, X } from 'lucide-react';
import { useNavbar } from '../hooks/useNavbarResponsive';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const { isMenuOpen, toggleMenu } = useNavbar();
    const [mounted, setMounted] = useState(false);
    
    // Only render interactive elements after component mounts on client
    // to avoid hydration issues with Next.js
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="bg-white shadow-sm py-3 sm:py-4 px-4 sm:px-6 w-full relative">
            <nav className="flex justify-between items-center max-w-[1280px] mx-auto">
                {/* Logo section */}
                <div className="flex-shrink-0">
                    <h1 className="text-lg sm:text-xl font-bold flex items-center">
                        <Link href="/" className="text-[#00E676] font-[family-name:var(--font-righteous)] flex items-center gap-1 sm:gap-2">
                            <Image src="/assets/footerAssets/Vector (1).png" width={100} height={100} alt="logo" className="h-5 sm:h-6 w-auto" />
                            <span>BYTE</span>
                        </Link>
                    </h1>
                </div>
                
                {/* Middle section - centered */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="flex space-x-4 lg:space-x-8 font-bold text-sm lg:text-base">
                        <Link href="/findjob" className="text-gray-600 hover:text-green-500 whitespace-nowrap">Find Job</Link>
                        <Link href="/talents" className="text-gray-600 hover:text-green-500 whitespace-nowrap">Browse Talents</Link>
                        <Link href="/blog" className="text-gray-600 hover:text-green-500 whitespace-nowrap">Blog</Link>
                        <Link href="/about" className="text-gray-600 hover:text-green-500 whitespace-nowrap">About</Link>
                    </div>
                </div>
                
                {/* Right section */}
                <div className="hidden md:flex flex-shrink-0 items-center text-sm lg:text-base">
                    <button className="text-gray-600 rounded-full p-1 hover:bg-gray-100">
                        <CircleHelp size={18} className="lg:h-5 lg:w-5" />
                    </button>
                    <div className="h-5 w-px bg-gray-300 mx-2 lg:mx-4"></div>
                    <Link href="/hiring" className="text-gray-700 font-medium hover:text-green-500 whitespace-nowrap">Log In</Link>
                    <div className="h-5 w-px bg-gray-300 mx-2 lg:mx-4"></div>
                    <Link href="/hiring" className="text-gray-700 font-medium hover:text-green-500 whitespace-nowrap">Sign Up</Link>
                    <div className="h-5 w-px bg-gray-300 mx-2 lg:mx-4"></div>
                    <Link href="/signin" className="bg-black text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full font-medium hover:bg-gray-800 whitespace-nowrap text-sm">Post Task</Link>
                </div>

                {/* Mobile button */}
                <div className="md:hidden flex items-center justify-end">
                {mounted && (
                    <button 
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-green-500 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                )}
                </div>
            </nav>

            {/* Mobile menu */}
            {mounted && isMenuOpen && (
                <div className="md:hidden absolute top-14 sm:top-16 left-0 right-0 bg-white shadow-md z-10 py-3 px-4 sm:px-6">
                    <div className="flex flex-col space-y-3">
                        <Link href="/findjob" className="text-gray-600 font-bold hover:text-green-500 py-1.5">Find Job</Link>
                        <Link href="/talents" className="text-gray-600 font-bold hover:text-green-500 py-1.5">Browse Talents</Link>
                        <Link href="/blog" className="text-gray-600 font-bold hover:text-green-500 py-1.5">Blog</Link>
                        <Link href="/about" className="text-gray-600 font-bold hover:text-green-500 py-1.5">About</Link>
                        <div className="flex items-center py-1.5">
                            <Link href="/hiring" className="text-gray-700 font-medium hover:text-green-500">Log In</Link>
                            <div className="h-4 w-px bg-gray-300 mx-3"></div>
                            <Link href="/hiring" className="text-gray-700 font-medium hover:text-green-500">Sign Up</Link>
                        </div>
                        <Link href="/signin" className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 inline-block text-center w-full sm:w-auto">Post Task</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;