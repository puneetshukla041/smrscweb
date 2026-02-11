'use client';
import React from 'react';

// Data for Media Kit sections
const mediaData = [
  {
    id: 1,
    title: 'Photos',
    image: '/images/media/media1.webp',
  },
  {
    id: 2,
    title: 'Videos',
    image: '/images/media/media2.webp',
  },
  {
    id: 3,
    title: 'Logos',
    image: '/images/media/media3.webp',
  }
];

const ScheduleDay1 = () => {
  return (
    // Container: Centered, Flex wrap, Gap of 40px
    <div className="w-full flex flex-wrap justify-center gap-[40px] pb-10">
      {mediaData.map((item) => (
        <div 
          key={item.id}
          // Card Styling:
          // - w-[434px]: Matches the width of your Blog cards for consistency
          // - h-[260px]: Slightly shorter landscape aspect ratio for Media Kit items
          // - group: Allows child elements (image/button) to react when card is hovered
          // - cursor-pointer: Shows the "hand" icon on hover
          className="group relative w-[434px] h-[260px] rounded-[20px] overflow-hidden cursor-pointer border border-white/10 shadow-lg"
        >
          {/* Background Image with Zoom Hover Effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          
          {/* Subtle Overlay to ensure button contrast */}
          <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/30" />

          {/* The Bottom "Button" Label */}
          <div className="absolute bottom-5 w-full flex justify-center px-4">
            <div className="w-full max-w-[380px] py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-center font-medium tracking-wide shadow-lg transition-all duration-300 group-hover:bg-white/30 group-hover:scale-[1.02]">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleDay1;