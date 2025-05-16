"use client"

import React, { useState } from 'react'
import Navbar from '@components/navbar'
import { MessageSquare, Clock, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Bounty {
  id: number
  title: string
  tags: string[]
  reward: string
  due: string
  comments: number
  locked?: boolean
}

const sampleBounties: Bounty[] = [
  {
    id: 1,
    title: 'Write Twitter Thread For Web3 Tool Launch',
    tags: ['Social Media', 'Copy Writing', 'Web 3'],
    reward: '50 USDC',
    due: '6h',
    comments: 0,
    locked: true
  },
  {
    id: 2,
    title: 'QA Smart Contract On Testnet',
    tags: ['QA', 'Solidity', 'Blockchain'],
    reward: '800 USDC',
    due: '2d',
    comments: 0
  },
  {
    id: 3,
    title: 'Design Hero Section For NFT Marketplace',
    tags: ['UI Design', 'Figma', 'Web 3'],
    reward: '500 USDC',
    due: '3d',
    comments: 0
  },
  {
    id: 4,
    title: 'Fix Mobile Responsiveness On Product Page',
    tags: ['Frontend', 'Mobile UI'],
    reward: '120 USDC',
    due: '8h',
    comments: 0
  },
  {
    id: 5,
    title: 'Write Unit Tests For Payment Module',
    tags: ['Testing', 'Backend', 'Node.JS'],
    reward: '200 USDC',
    due: '2d',
    comments: 0
  },
  {
    id: 6,
    title: 'Implement Dark Mode Toggle In React App',
    tags: ['React', 'ui/UX', 'JavaScript'],
    reward: '150 USDC',
    due: '1d',
    comments: 0
  }
]

const Page = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBounty, setSelectedBounty] = useState<Bounty | null>(null)

  const handleUnlock = (bounty: Bounty) => {
    setSelectedBounty(bounty)
    setIsModalOpen(true)
  }

  const handlePayBits = () => {
    // Here you would implement the actual payment logic
    console.log('Processing payment of 200 bits for bounty:', selectedBounty?.id)
    
    // Close the modal and redirect as if payment was successful
    setIsModalOpen(false)
    if (selectedBounty) {
      router.push(`/earn-bounties/${selectedBounty.id}?title=${encodeURIComponent(selectedBounty.title)}&reward=${selectedBounty.reward}&due=${selectedBounty.due}&comments=${selectedBounty.comments}`)
    }
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start gap-4 pt-10 pb-6">
            <button className='px-3 py-1 text-sm font-medium bg-[#99F5C8] border border-[#0C9653] text-black rounded-sm'>Bounties</button>
            <button className='px-3 py-1 text-sm font-medium border border-[#E2E2E2] text-[#8C8F8E] rounded-sm cursor-not-allowed'>Work</button>
        </div>

        <h1 className="text-[36px] font-bold text-[#191F33]">
          Earn Bounties <span className="font-light text-[24px] text-gray-500">| Bite sized work opportunities</span>
        </h1>

        <hr className="my-6 border-t border-[#6E7175] border-1.5" />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sampleBounties.map((bounty) => (
            <div
              key={bounty.id}
              className={`flex flex-col h-full bg-white border rounded-xs p-5 shadow-md hover:shadow-lg transition-all ${
                bounty.locked ? 'border-yellow-400 ring-1 ring-yellow-300' : 'border-gray-200'
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold uppercase">
                    {bounty.title.charAt(0)}
                    </div>
                  <h3 className="text-base font-semibold leading-tight text-gray-800 max-w-[200px]">
                    {bounty.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-gray-400" />
                  <span className="text-xs text-gray-600">{bounty.comments}</span>
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {bounty.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white text-green-700 text-xs border border-green-300 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-700 font-semibold">
                    <Image src="/assets/USDC.png" width={15} height={15} alt='usdc'/>
                  <span className="">{bounty.reward}</span>
                    <span className="text-[#0C9653]">--</span>
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-gray-600">Due in {bounty.due}</span>
                </div>

                <button
                  onClick={() => 
                    bounty.locked 
                      ? handleUnlock(bounty)
                      : router.push(`/earn-bounties/${bounty.id}?title=${encodeURIComponent(bounty.title)}&reward=${bounty.reward}&due=${bounty.due}&comments=${bounty.comments}`)
                  }
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all min-w-[70px] text-center ${
                    bounty.locked
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {bounty.locked ? 'Unlock' : 'Apply'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unlock Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            {/* Close button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>
            
            {/* Modal content */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Unlock Premium Bounty</h3>
              <p className="text-gray-600">
                This is a premium bounty that requires a small fee to unlock. Get access to high-value opportunities with better rewards.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-4">
                <h4 className="font-semibold mb-1 text-yellow-800">Why unlock this bounty?</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Higher reward potential ({selectedBounty?.reward})</li>
                  <li>• Verified client with proven payment history</li>
                  <li>• Priority support from platform moderators</li>
                </ul>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-700 hover:bg-gray-50 flex-1"
              >
                Cancel
              </button>
              <button
                onClick={handlePayBits}
                className="px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 flex-1 flex items-center justify-center gap-2"
              >
                <span>Pay 200 bits</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" />
                  <path d="M15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 13V17M12 17H14M12 17H10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page