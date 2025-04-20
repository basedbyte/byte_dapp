import React from 'react';
import { PenTool , Code, Megaphone, PlayCircle, Headphones, BarChart2, Briefcase, Database } from 'lucide-react';

const categories = [
  { icon: <PenTool  size={28} />, title: 'Graphics & Design', positions: 357 },
  { icon: <Code size={28} />, title: 'Code & Programing', positions: 312 },
  { icon: <Megaphone size={28} />, title: 'Digital Marketing', positions: 297 },
  { icon: <PlayCircle size={28} />, title: 'Video & Animation', positions: 247 },
  { icon: <Headphones size={28} />, title: 'Customer Support', positions: 204 },
  { icon: <BarChart2 size={28} />, title: 'Account & Finance', positions: 167 },
  { icon: <Briefcase size={28} />, title: 'Legal', positions: 125 },
  { icon: <Database size={28} />, title: 'Data & Science', positions: 57, highlight: true },
];

const CategoryGrid = () => {
  return (
    <div className="w-full px-4 py-4">
        <div className='flex items-start mb-8'>
          <h1 className='text-[32px] font-bold'>Browse Talent By Category</h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`group flex items-center gap-4 p-4 rounded-xl hover:shadow-sm bg-white text-gray-800 transition-all duration-200`}
          >
            <div
              className={` group-hover:bg-[#0C9653] group-hover:text-white p-2 rounded-lg bg-[#99F5C8] text-[#0C9653] transition-all duration-200`}
            >
              {cat.icon}
            </div>
            <div>
              <h3 className="font-semibold text-base group-hover:text-[#0C9653]">{cat.title}</h3>
              <p className="text-sm">
                {cat.positions} Open position{cat.positions !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
