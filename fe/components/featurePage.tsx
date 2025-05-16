import React from 'react';
import { EyeOff, Pin , ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturePage = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 lg:gap-12 items-center justify-center">
        {/* Left */}
        <div className="order-2 md:order-1 w-full md:w-1/2 rounded-lg h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center">
                      <Image
                        src="/assets/homeAssets/photo2.png"
                        alt="Crypto Globe"
                        width={800}
                        height={800}
                        className="w-full h-auto object-contain"
                        priority
                      />
        </div>

        {/* Right */}
        <div className="order-1 md:order-2 w-full md:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center md:text-left">
            Boost Your Work Potential With BYTE
          </h1>

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* No Hidden Fees */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 flex-shrink-0">
                <EyeOff className="text-gray-700" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold text-gray-800">No Hidden Fees</span>
                <span className="text-sm sm:text-base text-gray-600">Join And Earn With Zero Surprise Charges.</span>
              </div>
            </div>

            {/* Find And Hire Top Talents */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 flex-shrink-0">
                <Pin className="text-gray-700 rotate-45" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold text-gray-800">Find And Hire Top Talents</span>
                <span className="text-sm sm:text-base text-gray-600">Connect With Global Professionals, Fast.</span>
              </div>
            </div>

            {/* Secure & Instant Payments */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-1 flex-shrink-0">
                <ShieldCheck className="text-gray-700" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold text-gray-800">Secure & Instant Payments</span>
                <span className="text-sm sm:text-base text-gray-600">Get Paid Instantly Via Blockchain Smart Contracts.</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <Link href="signup" className="bg-green-700 text-white font-medium px-5 py-2 rounded-full hover:bg-green-800 transition-colors text-center w-full sm:w-auto">
              Join Byte For Free
            </Link>
            <Link href="learn" className="bg-white text-gray-700 font-medium border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-50 transition-colors text-center w-full sm:w-auto">
              Learn How It Works
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;