"use client";
import { CircleHelp, Menu, X } from 'lucide-react';
import { useNavbar } from '../../hooks/useNavbarResponsive';
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
        <div className="bg-white shadow-sm py-4 px-6 w-full relative">
            <nav className="grid grid-cols-3 items-center max-w-[1280px] mx-auto">

                <div className="flex items-center">
                <h1 className="text-xl font-bold">
                    <Link href="/" className="text-green-500 font-righteous">BYTE</Link>
                </h1>
                </div>
                
                <div className="hidden md:flex justify-center space-x-8">
                <Link href="/findjob" className="text-gray-600 font-medium hover:text-green-500">Find Job</Link>
                <Link href="/talents" className="text-gray-600 hover:text-green-500">Browse Talents</Link>
                </div>
                
                <div className="hidden md:flex items-center justify-end">
                    <div className="flex items-center">
                        <button className="text-gray-600 rounded-full p-1 hover:bg-gray-100">
                            <CircleHelp size={20} />
                        </button>
                        <div className="h-5 w-px bg-gray-300 mx-4"></div>
                        <Link href="/hiring" className="text-gray-700 font-medium hover:text-green-500">Start Hiring</Link>
                        <div className="h-5 w-px bg-gray-300 mx-4"></div>
                        <Link href="/signin" className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800">Sign In</Link>
                    </div>
                </div>

                {/* Mobile button */}
                <div className="md:hidden flex items-center justify-end col-span-2">
                {mounted && (
                    <button 
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-green-500 focus:outline-none"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}
                </div>
            </nav>

            {/* Mobile menu */}
            {mounted && isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10 py-4 px-6">
                <div className="flex flex-col space-y-4">
                    <Link href="/findjob" className="text-gray-600 font-medium hover:text-green-500 py-2">Find Job</Link>
                    <Link href="/talents" className="text-gray-600 hover:text-green-500 py-2">Browse Talents</Link>
                    <Link href="/hiring" className="text-gray-700 font-medium hover:text-green-500 py-2">Start Hiring</Link>
                    <Link href="/signin" className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 inline-block text-center">Sign In</Link>
                </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;