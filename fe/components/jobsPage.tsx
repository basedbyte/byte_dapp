import React from 'react'
import { Bookmark } from 'lucide-react'

const Jobs = () => {
  // Job listings data based on the image
  const jobListings = [
    {
      id: 1,
      position: "Copy Type",
      company: "Aeste",
      logoColor: "bg-pink-500",
      jobType: "Full time · Remote · HongKong",
      tags: ["Writing And Translation", "Copy Writing", "Content Creation"],
      salary: "$ 400",
      negotiable: false,
      postedDays: "2d"
    },
    {
      id: 2,
      position: "Full Stack Dev",
      company: "Umind",
      logoColor: "bg-pink-500",
      jobType: "Full time · Remote ·",
      tags: ["Full-Stack Engineer", "Web, Mobile & Software Dev", "Javascript"],
      salary: "$ 1000 -3000",
      negotiable: true,
      postedDays: "2d"
    },
    {
      id: 3,
      position: "Frontend Engineer",
      company: "Cloudsoft",
      logoColor: "bg-pink-500",
      jobType: "Full time · Remote ·",
      tags: ["Web, Mobile & Software Dev", "Frontend Engineer", "Next.JS"],
      salary: "$ 1000 -3000",
      negotiable: true,
      postedDays: "2d"
    },
    {
      id: 4,
      position: "QA Support",
      company: "SQ",
      logoColor: "bg-pink-500",
      jobType: "Full time · Hybrid · HongKong",
      tags: ["QA Engineer", "Blockchain & Crypto"],
      salary: "$ 1000",
      negotiable: false,
      postedDays: "5d"
    },
    {
      id: 5,
      position: "Test Automation Lead",
      company: "PTR.Co",
      logoColor: "bg-pink-500",
      jobType: "Full time · Remote · Singapore",
      tags: ["QA Engineer", "Communication", "Blockchain & Crypto"],
      salary: "$ 1000",
      negotiable: false,
      postedDays: "2d"
    },
    {
      id: 6,
      position: "Social Media Manager",
      company: "TOKEN",
      logoColor: "bg-pink-500",
      jobType: "Full time · Remote · USA",
      tags: ["Social Media Manager", "Blockchain & Crypto", "Blockchain"],
      salary: "$ 400",
      negotiable: true,
      postedDays: "2d"
    },
    {
      id: 7,
      position: "Project Design Manager",
      company: "WHP",
      logoColor: "bg-pink-500",
      jobType: "Full time · Remote · Autralia",
      tags: ["Product Designer", "Design Manager", "User Experience"],
      salary: "$ 1000",
      negotiable: false,
      postedDays: "2d"
    },
    {
      id: 8,
      position: "DevOps Engineer",
      company: "CoinLoud",
      logoColor: "bg-pink-500",
      jobType: "Full time · Remote · Bangladore,India",
      tags: ["DevOps", "IT Networking", "Blockchain & Crypto"],
      salary: "$ 1000 -3000",
      negotiable: true,
      postedDays: "2d"
    },
    {
      id: 9,
      position: "Data Entry",
      company: "Ligo",
      logoColor: "bg-pink-500",
      jobType: "Full time · Remote ·",
      tags: ["SEO Writing", "Research Writing", "Copy Writing", "Business Writing"],
      salary: "$ 400",
      negotiable: false,
      postedDays: "2d"
    }
  ];

  return (
    <div className='w-full min-h-screen flex justify-center py-8'>
      <div className='w-full max-w-[#1280px] flex flex-col items-center'>
        <div className='w-full flex flex-col items-start py-8'>
          <h1 className='text-3xl sm:text-4xl font-bold'>Latest Freelance Opportunities in Crypto</h1>
          <p className='text-sm text-[28px] font-bold mt-2'><span className='text-[#00E676]'>1,275</span> Jobs on our platform</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-200">
              {/* Header with position and bookmark */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center">
                    <span className="text-lg font-bold">{job.company.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{job.position}</h3>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500">at</span>
                      <span className="ml-2 font-bold">{job.company}</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Bookmark size={20} />
                </button>
              </div>

              {/* Job details */}
              <p className="text-gray-500 text-sm mb-4">{job.jobType}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-green-50 text-[#0C9653] border border-green-200 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Spacer to push footer to bottom */}
              <div className="flex-grow"></div>

              {/* Horizontal line */}
              <div className="border-t border-gray-200 my-3"></div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-bold text-gray-800">{job.salary}</span>
                  {job.negotiable && (
                    <div className="ml-3 text-gray-400 text-xs font-bold">
                      Negotiable
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">{job.postedDays}</span>
                  <button className="px-4 py-2 bg-[#0C9653] text-white rounded-md text-sm font-medium hover:bg-[#0C9653]">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jobs