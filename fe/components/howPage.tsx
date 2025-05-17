import React from 'react'
import Image from 'next/image'
//import { Send } from 'lucide-react'

const HowPage = () => {
  return (
    <div className='w-full min-h-[460px] flex'>
      <div className='w-full max-w-7xl mx-auto flex flex-col items-start justify-center py-8'>
        <h1 className='text-3xl sm:text-4xl font-bold'>How BYTE Works</h1>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 relative'>

          {/* Step 1 */}
          <div className='group rounded-xl h-[224px] hover:bg-[#99F5C8] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center'>
            <div className='relative'>
              <Image width={100} height={100} src="/assets/howpageAssets/Icon.png" alt="Create Account" className="group-hover:opacity-0 transition-opacity duration-200" />
              <Image width={100} height={100} src="/assets/howpageAssets/Icon (1).png" alt="Create Account Hover" className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            <h2 className='text-lg font-bold mt-4'>Create Account</h2>
            <p className='text-sm text-[#767F8C] mx-4'>Sign up and showcase your skills or post a job</p>
          </div>

          {/* Step 2 */}
          <div className='group rounded-xl h-[224px] hover:bg-[#99F5C8] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center'>
            <div className='relative'>
              <Image width={100} height={100} src="/assets/howpageAssets/Icon (4).png" alt="Post Tasks" className="group-hover:opacity-0 transition-opacity duration-200" />
              <Image width={100} height={100} src="/assets/howpageAssets/Icon (5).png" alt="Post Tasks Hover" className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            <h2 className='text-lg font-bold mt-4'>Post Tasks or Find Work</h2>
            <p className='text-sm text-[#767F8C] mx-4'>Create tasks or browse available opportunities</p>
          </div>

          {/* Step 3 */}
          <div className='group rounded-xl h-[224px] hover:bg-[#99F5C8] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center'>
            <div className='relative'>
              <Image width={100} height={100} src="/assets/howpageAssets/Icon (6).png" alt="Connect" className="group-hover:opacity-0 transition-opacity duration-200" />
              <Image width={100} height={100} src="/assets/howpageAssets/Icon (7).png" alt="Connect Hover" className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            <h2 className='text-lg font-bold mt-4'>Connect</h2>
            <p className='text-sm text-[#767F8C] mx-4'>Find the right job or talent</p>
          </div>

          {/* Step 4 */}
          <div className='group rounded-xl h-[224px] hover:bg-[#99F5C8] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center'>
            <div className='relative'>
              <Image width={100} height={100} src="/assets/howpageAssets/Icon (2).png" alt="Get Paid" className="group-hover:opacity-0 transition-opacity duration-200" />
              <Image width={100} height={100} src="/assets/howpageAssets/Icon (3).png" alt="Get Paid Hover" className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            <h2 className='text-lg font-bold mt-4'>Get Paid</h2>
            <p className='text-sm text-[#767F8C] mx-4'>Receive payment instantly upon completion</p>
          </div>

          {/* Arrows */}
          <div className='hidden md:block'>
            <div className="absolute left-[18%] top-[20px] w-[150px] h-[80px]">
              <Image width={100} height={100} src="/assets/howpageAssets/Arrows.png" alt="arrow" className="absolute top-0 left-0" />
            </div>
            <div className="absolute left-[44%] top-[80px] w-[150px] h-[80px] z-10">
              <Image width={100} height={100} src="/assets/howpageAssets/Arrows (1).png" alt="arrow" className="absolute top-0 left-0" />
            </div>
            <div className="absolute left-[71%] top-[30px] w-[150px] h-[80px]">
              <Image width={100} height={100} src="/assets/howpageAssets/Arrows.png" alt="arrow" className="absolute top-0 left-0" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowPage
