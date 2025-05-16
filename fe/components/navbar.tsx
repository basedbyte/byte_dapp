'use client';

import Image from "next/image";
import { CircleHelp, Menu, X, Wallet, UserCircle2 } from 'lucide-react';
import { useNavbar } from '../hooks/useNavbarResponsive';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AuthModal from '@components/modal';
import { useRouter } from "next/navigation";
import {
  WalletDropdownDisconnect
} from "@coinbase/onchainkit/wallet";
import SwapComponents from "./swapAccounts";
import { useAccount } from 'wagmi';


const Navbar = () => {
    const { isMenuOpen, toggleMenu } = useNavbar();
    const [bits, setBits] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'login' | 'signup'>('login');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [walletDropdownOpen, setWalletDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const walletDropdownRef = useRef<HTMLDivElement>(null);
    const userDropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { address } = useAccount();

    useEffect(() => {
        if (address) {
            const storedBits = localStorage.getItem(`bits_${address}`);
            setBits(storedBits ? parseInt(storedBits, 10) : 0);
        }
    }, [address]);

    const handleLogout = () => {
        document.cookie = "authToken=; path=/; max-age=0";
        router.push("/");
    };

    useEffect(() => {
        setMounted(true);
        // Read authToken from cookies
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
            return null;
        };
        const token = typeof window !== 'undefined' ? getCookie('authToken') : null;
        setIsLoggedIn(!!token);
    }, []);

   useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                walletDropdownRef.current &&
                !walletDropdownRef.current.contains(event.target as Node)
            ) {
                setWalletDropdownOpen(false);
            }
            if (
                userDropdownRef.current &&
                !userDropdownRef.current.contains(event.target as Node)
            ) {
                setUserDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const openLoginModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setModalMode('login');
        setModalOpen(true);
    };

    const openSignupModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setModalMode('signup');
        setModalOpen(true);
    };

    return (
        <>
            <div className="bg-white shadow-sm py-3 sm:py-4 px-4 sm:px-6 w-full relative">
                <nav className="flex justify-between items-center max-w-[1280px] mx-auto">
                    
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-lg sm:text-xl font-bold flex items-center">
                            <Link href="/" className="text-[#00E676] font-[family-name:var(--font-righteous)] flex items-center gap-1 sm:gap-2">
                                <Image src="/assets/footerAssets/Vector (1).png" width={100} height={100} alt="logo" className="h-5 sm:h-6 w-auto" />
                                <span>BYTE</span>
                            </Link>
                        </h1>
                    </div>

                    {/* Middle navigation */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex space-x-4 lg:space-x-8 font-bold text-sm lg:text-base">
                            <Link href="/earn-bounties" className="text-gray-600 hover:text-green-500 whitespace-nowrap">Earn Bounties</Link>
                            <Link href="/#" className="text-gray-600 hover:text-green-500 whitespace-nowrap cursor-not-allowed">Find Jobs</Link>
                            <Link href="/#" className="text-gray-600 hover:text-green-500 whitespace-nowrap cursor-not-allowed">Browse Talents</Link>
                        </div>
                    </div>

                    {/* Right Section (based on auth) */}
                    <div className="hidden md:flex flex-shrink-0 items-center text-sm lg:text-base space-x-3">

                        <button className="text-gray-600 rounded-full p-1 hover:bg-gray-100">
                            <CircleHelp size={18} className="lg:h-5 lg:w-5" />
                        </button>

                        <div className="h-5 w-px bg-gray-300" />

                        {!isLoggedIn ? (
                            <>
                                <a href="#" onClick={openLoginModal} className="text-gray-700 font-medium hover:text-green-500 whitespace-nowrap">Log In</a>
                                <div className="h-5 w-px bg-gray-300" />
                                <a href="#" onClick={openSignupModal} className="text-gray-700 font-medium hover:text-green-500 whitespace-nowrap">Sign Up</a>
                                <div className="h-5 w-px bg-gray-300" />
                                <Link href="/post-task" className="bg-black text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full font-medium hover:bg-gray-800 whitespace-nowrap text-sm">Post Task</Link>
                            </>
                        ) : (
                            <>
                            <div className="relative">
                                    <button
                                        className="text-gray-700 hover:text-green-500 p-1"
                                        onClick={() => {
                                            setWalletDropdownOpen((v) => !v);
                                            setUserDropdownOpen(false); // close user dropdown if open
                                        }}
                                    >
                                        <Wallet size={20} />
                                    </button>
                                    {walletDropdownOpen && (
                                    <>
                                        {/* Blurred overlay */}
                                        <div
                                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                                        onClick={() => setWalletDropdownOpen(false)}
                                        />
                                        {/* Sidebar */}
                                        <aside
                                        ref={walletDropdownRef}
                                        className="fixed top-0 right-0 h-full w-full sm:w-1/4 bg-white shadow-2xl z-50 transition-transform duration-300 flex flex-col"
                                        style={{ minWidth: 300, maxWidth: 400 }}
                                        >
                                        <div className="flex justify-between items-center p-4 border-b">
                                            <span className="font-bold text-lg">Wallet</span>
                                            <button
                                            className="text-gray-500 hover:text-gray-800"
                                            onClick={() => setWalletDropdownOpen(false)}
                                            >
                                            <X size={24} />
                                            </button>
                                        </div>
                                        <div className="flex-1 overflow-y-auto p-4">
                                            {/* Your wallet content here */}
                                            <div className="mb-4">Wallet Menu</div>
                                            
                                            {/* Add more wallet actions/components as needed */}
                                            <SwapComponents setBits={setBits}/>
                                        </div>
                                        </aside>
                                    </>
                                    )}
                                </div>
                                <div className="relative">
                                    <button
                                        className="text-gray-700 hover:text-green-500 p-1"
                                        onClick={() => {
                                            setUserDropdownOpen((v) => !v);
                                            setWalletDropdownOpen(false); // close wallet dropdown if open
                                        }}
                                    >
                                        <UserCircle2 size={24} />
                                    </button>
                                    {userDropdownOpen && (
                                        <div
                                            ref={userDropdownRef}
                                            className="absolute right-0 mt-2 z-50 bg-white shadow-lg rounded-md w-48 p-2"
                                        >
                                            <p className="ml-4">{address?.slice(0, 6)}...{address?.slice(-4)}</p>
                                            <hr className="my-3 mb-5 w-[90%] mx-auto border-t border-gray-200" />
                                            <p className="ml-4 mb-2">{bits} bits</p>
                                            <div onClick={handleLogout}>
                                                <WalletDropdownDisconnect />    
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="md:hidden flex items-center justify-end">
                        {mounted && (
                            <button onClick={toggleMenu} className="text-gray-600 hover:text-green-500 focus:outline-none" aria-label="Toggle menu">
                                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu */}
                {mounted && isMenuOpen && (
                    <div className="md:hidden absolute top-14 sm:top-16 left-0 right-0 bg-white shadow-md z-10 py-3 px-4 sm:px-6">
                        <div className="flex flex-col space-y-3">
                            <Link href="/findjob" className="text-gray-600 font-bold hover:text-green-500 py-1.5">Find Job</Link>
                            <Link href="/talents" className="text-gray-600 font-bold hover:text-green-500 py-1.5">Browse Talents</Link>
                            <Link href="/blog" className="text-gray-600 font-bold hover:text-green-500 py-1.5">Blog</Link>
                            <Link href="/about" className="text-gray-600 font-bold hover:text-green-500 py-1.5">About</Link>

                            {!isLoggedIn ? (
                                <>
                                    <div className="flex items-center py-1.5">
                                        <a href="#" onClick={openLoginModal} className="text-gray-700 font-medium hover:text-green-500">Log In</a>
                                        <div className="h-4 w-px bg-gray-300 mx-3"></div>
                                        <a href="#" onClick={openSignupModal} className="text-gray-700 font-medium hover:text-green-500">Sign Up</a>
                                    </div>
                                    <Link href="/post-task" className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 inline-block text-center w-full">Post Task</Link>
                                </>
                            ) : (
                                <div className="flex gap-4 items-center mt-2">
                                    <button className="text-gray-700 hover:text-green-500 flex items-center gap-2"><Wallet size={20} /> Wallet</button>
                                    <button className="text-gray-700 hover:text-green-500 flex items-center gap-2"><UserCircle2 size={22} /> Profile</button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {mounted && (
                <AuthModal 
                    isOpen={modalOpen} 
                    onClose={() => setModalOpen(false)} 
                    mode={modalMode} 
                />
            )}
        </>
    );
};

export default Navbar;
