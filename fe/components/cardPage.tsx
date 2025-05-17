import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCardAnimation } from '../hooks/useCardAnimation';

const CardPage = () => {
    const { isSlideActive, toggleSlide } = useCardAnimation();
    const [isMobile, setIsMobile] = useState(false);

    // Detect if we're on mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return (
        <div className='w-full min-h-[720px] flex justify-center py-8'>
            <div className='w-full max-w-7xl flex flex-col items-center'>
                {/* For mobile: Two separate cards that are toggled */}
                {isMobile ? (
                    <div className='w-full'>
                        {/* Show either the client card or talent card */}
                        {!isSlideActive ? (
                            <div className='w-full min-h-[540px] bg-[#0C9653] rounded-2xl p-6'>
                                <div className="text-white">
                                    <p className="text-xl mb-4">For Clients</p>
                                    
                                    <h1 className="text-4xl font-bold leading-tight mb-6">
                                        Connect with skilled professionals and bring your project to life.
                                    </h1>
                                    <div className="flex flex-col gap-5 my-8">
                                        <div className="flex items-center gap-3">
                                            <ArrowRight className="text-white" />
                                            <span className="text-lg">Post a job easily</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ArrowRight className="text-white" />
                                            <span className="text-lg">Explore verified talents</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ArrowRight className="text-white" />
                                            <span className="text-lg">Hire securely with crypto </span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                                        <Link href="#" className='bg-white px-4 py-2 text-[#0C9653] rounded-lg text-[14px] font-bold hover:bg-gray-100 text-center'>Post a Job</Link>
                                        <button onClick={toggleSlide} className='bg-white px-4 py-2 text-[#0C9653] rounded-lg text-[14px] font-bold hover:bg-gray-100'>Looking for Work?</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='w-full min-h-[540px] bg-[#0C9653] rounded-2xl p-6'>
                                <div className="text-white">
                                    <p className="text-xl mb-4">For Talents</p>
                                    
                                    <h1 className="text-4xl font-bold leading-tight mb-6">
                                        Find Meaningful Work, Build Your Career, And Connect With Top Employers.
                                    </h1>
                                    <div className="flex flex-col gap-5 my-8">
                                        <div className="flex items-center gap-3">
                                            <ArrowRight className="text-white" />
                                            <span className="text-lg">Grow Your Skills With Real-World Experience.</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ArrowRight className="text-white" />
                                            <span className="text-lg">Discover Job Opportunities That Match Your Passion.</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ArrowRight className="text-white" />
                                            <span className="text-lg">Work On Your Own Time, Your Own Way.</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                                        <Link href="#" className='bg-white px-4 py-2 text-[#0C9653] rounded-lg text-[14px] font-bold hover:bg-gray-100 text-center'>Browse Jobs</Link>
                                        <button onClick={toggleSlide} className='bg-white px-4 py-2 text-[#0C9653] rounded-lg text-[14px] font-bold hover:bg-gray-100'>Looking to Hire?</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    // Original desktop design with the slide animation
                    <div className='w-full min-h-[540px] flex bg-[#0C9653] rounded-2xl relative overflow-hidden'>
                        {/* Left Face */}
                        <div className='w-1/2 p-12'>
                            <div className="text-white">
                                <p className="text-xl mb-4">For Clients</p>
                                
                                <h1 className="text-4xl font-bold leading-tight mb-8">
                                    Connect with skilled professionals and bring your project to life.
                                </h1>
                                <div className="flex flex-col gap-6 mt-8 mb-12">
                                    <div className="flex items-center gap-3">
                                        <ArrowRight className="text-white" />
                                        <span className="text-lg">Post a job easily</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRight className="text-white" />
                                        <span className="text-lg">Explore verified talents</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRight className="text-white" />
                                        <span className="text-lg">Hire securely with crypto </span>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <Link href="#" className='bg-white px-4 py-2 text-[#0C9653] rounded-lg text-[14px] font-bold hover:bg-gray-100'>Post a Job</Link>
                                    <button onClick={toggleSlide} className='bg-white px-4 py-2 text-[#0C9653] rounded-lg text-[14px] font-bold hover:bg-gray-100'>Looking for Work?</button>
                                </div>
                            </div>
                        </div>
                        {/* Right Face */}
                        <div className='w-1/2 p-12'>
                            <div className="text-white">
                                <p className="text-xl mb-4">For Talents</p>
                                
                                <h1 className="text-4xl font-bold leading-tight mb-8">
                                    Find Meaningful Work, Build Your Career, And Connect With Top Employers.
                                </h1>
                                <div className="flex flex-col gap-6 mt-8 mb-12">
                                    <div className="flex items-center gap-3">
                                        <ArrowRight className="text-white" />
                                        <span className="text-lg">Grow Your Skills With Real-World Experience.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRight className="text-white" />
                                        <span className="text-lg">Discover Job Opportunities That Match Your Passion.</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ArrowRight className="text-white" />
                                        <span className="text-lg">Work On Your Own Time, Your Own Way.</span>
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <Link href="#" className='bg-white px-4 py-2 text-[#0C9653] rounded-lg text-[14px] font-bold hover:bg-gray-100'>Browse Jobs</Link>
                                    <button onClick={toggleSlide} className='bg-white px-4 py-2 text-[#0C9653] rounded-lg text-[14px] font-bold hover:bg-gray-100'>Looking to Hire?</button>
                                </div>
                            </div>
                        </div>
                        {/* Gray Block*/}
                        <div 
                            className={`absolute w-1/2 h-full bg-gray-300 transition-all duration-500 ease-in-out ${
                            isSlideActive ? 'left-1/2 rounded-l-2xl' : 'left-0 rounded-r-2xl'
                            }`}
                        ></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardPage;