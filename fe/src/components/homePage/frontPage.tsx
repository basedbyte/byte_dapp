import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Onboarding = () => {
  return (
    <div className="w-full min-h-[516px] bg-white px-4 sm:px-6 sm:pb-12 md:pb-16">
      {/* Hero Section */}
      <div className="max-w-full py-8 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        {/*Left*/}
        <div className="space-y-4 sm:space-y-6 md:pb-0 pb-6">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-green">
              Connect, Work,<br />
              And Grow<br />
              One Task At A Time.
            </h1>
          </div>
          
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Connect With Leading Freelancers And<br className="hidden sm:block" />
            Trusted Clients To Bring Your Next Project To Life.
          </p>
          
          {/* Search Bar */}
          <div className="relative mt-4 sm:mt-6 md:mt-8">
            <input 
              type="text" 
              placeholder="Job title, Keyword..." 
              className="w-full py-2 sm:py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute right-2 top-1 sm:top-1.5 bg-green-500 text-white p-1.5 sm:p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Employers CTA */}
          <div className="text-center sm:text-left mt-4">
            <p className="text-gray-600 text-xs sm:text-sm">
              Employers? <Link href="/postjob" className="text-purple-600 font-medium">Post your job here</Link>
            </p>
          </div>
        </div>
        
        {/*Right*/}
        <div className="bg-gray-200 rounded-lg w-full h-48 sm:h-64 md:h-full flex items-center justify-center">
          <p className="text-gray-500 text-sm sm:text-base">Platform Interface Preview</p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;