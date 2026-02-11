'use client';
import React from 'react';

// Data extracted from the reference image
const releasesData = [
  {
    id: 1,
    image: '/images/media/press1.png',
    date: '24-12-2025',
    title: 'SS Innovations Achieves 100 Robotic Telesurgeries With Indigenous SSI Mantra System',
    source: 'BW Healthcare'
  },
  {
    id: 2,
    image: '/images/media/press2.png',
    date: '08-11-2025',
    title: 'SS Innovations International announces launch of World\'s First Tele Surgeon Console',
    source: 'BioSpectrum'
  }
];

const Release = () => {
  return (
    // Container: Centered, Flex wrap for responsiveness, Gap of 60px between cards
    <div className="w-full flex flex-wrap justify-center gap-[60px] pb-10">
      {releasesData.map((item) => (
        <div 
          key={item.id}
          // Exact Card Properties: 660px x 219px, Padding 15px, Gap 20px, Radius 20px
          // Added border-white/20 so the card shape is visible against the dark background
          className="flex w-[660px] h-[219px] p-[15px] items-center gap-[20px] rounded-[20px] border border-white/20 bg-transparent hover:bg-white/5 transition-colors duration-300"
        >
          {/* Image Section (Calculated to fit height: 219px - 30px padding = ~189px height) */}
          <div className="h-full aspect-square shrink-0 rounded-[15px] overflow-hidden">
             <img 
               src={item.image} 
               alt="Press Release" 
               className="w-full h-full object-cover" 
             />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between h-full w-full py-2">
             {/* Date - Top Right */}
             <div className="w-full text-right text-white/60 text-sm font-light">
               {item.date}
             </div>
             
             {/* Title - Center Left */}
             <div className="text-white text-[18px] font-medium leading-snug pr-4">
               {item.title}
             </div>

             {/* Source - Bottom Right */}
             <div className="w-full text-right text-white/40 text-sm">
               {item.source}
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Release;