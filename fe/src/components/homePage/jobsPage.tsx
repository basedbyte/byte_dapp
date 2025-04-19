import React from 'react'

const Jobs = () => {
  // Job listings data
  const jobListings = [
    {
      id: 1,
      company: "Dribbble",
      logoColor: "bg-pink-500",
      position: "Product Design",
      location: "Porto, Portugal",
      locationType: "(On site)",
      featured: true,
      postedDays: "1d"
    },
    {
      id: 2,
      company: "Slack Company",
      logoColor: "bg-green-500",
      position: "UI/UX Designer",
      location: "Porto, Portugal",
      locationType: "(on Site)",
      featured: false,
      postedDays: "2d"
    },
    {
      id: 3,
      company: "SOFI Company",
      logoColor: "bg-yellow-200",
      position: "Game Designer",
      location: "Rome, Italy",
      locationType: "(on Site)",
      featured: false,
      postedDays: "3d"
    },
    {
      id: 4,
      company: "Dribbble",
      logoColor: "bg-pink-500",
      position: "Product Design",
      location: "Porto, Portugal",
      locationType: "(On site)",
      featured: true,
      postedDays: "1d"
    },
    {
      id: 5,
      company: "Slack Company",
      logoColor: "bg-green-500",
      position: "UI/UX Designer",
      location: "Porto, Portugal",
      locationType: "(on Site)",
      featured: false,
      postedDays: "2d"
    },
    {
      id: 6,
      company: "SOFI Company",
      logoColor: "bg-yellow-200",
      position: "Game Designer",
      location: "Rome, Italy",
      locationType: "(on Site)",
      featured: false,
      postedDays: "3d"
    },
    {
      id: 7,
      company: "Dribbble",
      logoColor: "bg-blue-100",
      position: "Motion Designer",
      location: "Remote",
      locationType: "",
      featured: false,
      postedDays: "6d"
    },
    {
      id: 8,
      company: "Slack Company",
      logoColor: "bg-purple-500",
      position: "Graphic Designer",
      location: "Germany",
      locationType: "(Hybrid)",
      featured: false,
      postedDays: "7d"
    },
    {
      id: 9,
      company: "SOFI Company",
      logoColor: "bg-pink-300",
      position: "Service Designer",
      location: "London,",
      locationType: "(on Site)",
      featured: false,
      postedDays: "1d"
    }
  ];

  return (
    <div className='w-full min-h-screen flex justify-center py-20'>
      <div className='w-full max-w-7xl flex flex-col items-center font-[family-name:var(--font-geist-sans)]'>

        <div className="w-full flex justify-center text-center items-center my-8">
          <h1 className="text-4xl font-bold">Featured Job</h1>
        </div>


        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <div key={job.id} className="border border-gray-300 hover:border-gray-400 rounded-md p-5 relative transition-all duration-200">
              {/* Bookmark button */}
              <button className="absolute top-4 right-4 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>

              {/* Profile */}
              <div className={`w-10 h-10 rounded-lg ${job.logoColor} text-white flex items-center justify-center mb-4`}>
                {job.company.charAt(0)}
              </div>

              {/* Job details */}
              <h3 className="text-lg font-bold mb-1">{job.position}</h3>
              <p className="text-gray-500 text-sm mb-4">
                {job.location} <span className="text-gray-400">{job.locationType}</span>
              </p>

              {/* Apply button and tags */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="hover:bg-[#0C9653] hover:text-white px-4 py-1 border border-[#0C9653] text-[#0C9653] rounded-full text-sm ">
                    Apply
                  </button>
                  
                  {job.featured && (
                    <span className="px-4 py-1 bg-green-100 text-green-500 rounded-full text-sm">
                      Featured
                    </span>
                  )}
                </div>
                
                {/* Days posted */}
                <span className="text-gray-400 text-sm">{job.postedDays}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jobs