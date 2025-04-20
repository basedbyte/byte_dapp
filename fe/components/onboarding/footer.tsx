import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full bg-[#18191C] flex flex-col justify-center items-center py-8 text-white font-[family:var(--font-poppins)]">
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-6 sm:px-8 md:px-12 py-5 pb-15">
            {/* Logo */}
            <div className="col-span-1 sm:col-span-2 flex flex-col items-start mb-6 sm:mb-0">
              <div className="flex gap-2">
                <Image src="/assets/footerAssets/Vector.png" alt="logo" width={28} height={28} />
                <span className="text-xl sm:text-2xl font-bold">BYTE</span>
              </div>
              <div className="flex gap-4 mt-6">
                <Link href="#"><Image src="/assets/facebook.png" alt="facebook" width={28} height={28} /></Link>
                <Link href="#"><Image src="/assets/instagram.png" alt="Instagram" width={28} height={28} /></Link>
                <Link href="#"><Image src="/assets/linkedin.png" alt="LinkedIn" width={28} height={28} /></Link>
                <Link href="#"><Image src="/assets/X.png" alt="X" width={28} height={28} /></Link>
              </div>
            </div>

            {/* About */}
            <div className="col-span-1 flex flex-col items-start mb-6 sm:mb-0">
              <span className="text-base sm:text-lg font-medium mb-3">About</span>
              <div className="text-[#9199A3] text-sm flex flex-col gap-3">
                <Link href="#" className="hover:text-white">About BYTE</Link>
                <Link href="#" className="hover:text-white">Contact Us</Link>
                <Link href="#" className="hover:text-white">Pricing</Link>
                <Link href="#" className="hover:text-white">Blog</Link>
              </div>
            </div>

            {/* Talent */}
            <div className="col-span-1 flex flex-col items-start mb-6 sm:mb-0">
              <span className="text-base sm:text-lg font-medium mb-3">Talent</span>
              <div className="text-[#9199A3] text-sm flex flex-col gap-3">
                <Link href="#" className="hover:text-white">Browse Jobs</Link>
                <Link href="#" className="hover:text-white">Browse Employers</Link>
                <Link href="#" className="hover:text-white">Talent Dashboard</Link>
                <Link href="#" className="hover:text-white">Saved Jobs</Link>
              </div>
            </div>

            {/* Employers */}
            <div className="col-span-1 flex flex-col items-start mb-6 sm:mb-0">
              <span className="text-base sm:text-lg font-medium mb-3">Employers</span>
              <div className="text-[#9199A3] text-sm flex flex-col gap-3">
                <Link href="#" className="hover:text-white">Post Jobs</Link>
                <Link href="#" className="hover:text-white">Browse Talents</Link>
                <Link href="#" className="hover:text-white">Employers Dashboard</Link>
                <Link href="#" className="hover:text-white">Applications</Link>
              </div>
            </div>

            {/* Support */}
            <div className="col-span-1 flex flex-col items-start mb-6 sm:mb-0">
              <span className="text-base sm:text-lg font-medium mb-3">Support</span>
              <div className="text-[#9199A3] text-sm flex flex-col gap-3">
                <Link href="#" className="hover:text-white">Faqs</Link>
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms & Conditions</Link>
              </div>
            </div>
        </div>

        {/* Copyright */}
        <div className="w-full max-w-screen-xl mx-auto border-t border-[#595f69] text-[#767F8C] flex items-center justify-center py-4"> 
            <p className="text-xs">BYTE Copyright © 2025</p>
        </div>
    </footer>
  )
}

export default Footer