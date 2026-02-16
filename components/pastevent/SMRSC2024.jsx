'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const events = [
  // Column 1 (Left)
  { id: 1, src: "/images/pastevent/24/image1.webp", title: "Inaugural lamp lighting by distinguished guests." },
  { id: 4, src: "/images/pastevent/24/image4.webp", title: "Live robotic surgery telecast in the conference." },
  { id: 7, src: "/images/pastevent/24/image7.webp", title: "Dr. Sudhir Srivastava demonstrating live telesurgery." },
  { id: 10, src: "/images/pastevent/24/image10.webp", title: "Delegates experiencing the SSI Mantra system hands-on." },
  
  // Column 2 (Center - Offset)
  { id: 2, src: "/images/pastevent/24/image2.webp", title: "Dr. Sudhir Srivastava addressing delegates at SMRSC." },
  { id: 5, src: "/images/pastevent/24/image5.webp", title: "Keynote address by distinguished guests." },
  { id: 8, src: "/images/pastevent/24/image8.webp", title: "Honoring guest speakers at SMRSC." },
  { id: 11, src: "/images/pastevent/24/image11.webp", title: "Delegates engaged in sessions at the SMRSC." },
  
  // Column 3 (Right)
  { id: 3, src: "/images/pastevent/24/image3.webp", title: "Unveiling of Mantra highlights at SMRSC 2024." },
  { id: 6, src: "/images/pastevent/24/image6.webp", title: "Cultural musical performance." },
  { id: 9, src: "/images/pastevent/24/image9.webp", title: "Expert faculty engaged in scientific discussions." },
  { id: 12, src: "/images/pastevent/24/image12.webp", title: "Session led by expert faculty." },
];

const EventCard = ({ item }) => (
  <div className="flex flex-col items-center" style={{ width: '385.521px' }}>
    {/* Image Container */}
    <div 
      className="relative rounded-[16px] overflow-hidden bg-gray-800"
      style={{
        width: '385.521px',
        height: '361.756px',
        minWidth: '385.521px', 
      }}
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover"
        sizes="385px"
        unoptimized={true}     // ⚡ ZERO BUFFERING
        loading="eager"        // ⚡ FORCES DOWNLOAD
        fetchPriority="low"    // ⚡ BACKGROUND PRIORITY
      />
    </div>

    {/* Text Container */}
    <div 
      className="mt-6 text-white"
      style={{
        width: '356px',
        fontFamily: "'Manrope', sans-serif",
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      }}
    >
      {item.title}
    </div>
  </div>
);

const SMRSC2024 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const col1 = events.filter((_, i) => i < 4); 
  const col2 = events.filter((_, i) => i >= 4 && i < 8);
  const col3 = events.filter((_, i) => i >= 8);

  const videoId = "QZwgLY869GA";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="w-full flex flex-col items-center py-20 overflow-x-hidden">
      
      {/* --- Image Grid Section --- */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-[100px] mb-[150px]">
        <div className="flex flex-col gap-16 lg:gap-[220px]">
          {col1.map((item) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-16 lg:gap-[220px] lg:pt-[220px]">
          {col2.map((item) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex flex-col gap-16 lg:gap-[220px]">
          {col3.map((item) => (
            <EventCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* --- YouTube Video Section --- */}
      <div className="w-full max-w-[1380px] flex flex-col gap-8">
        <h2 style={{ color: '#F8FFFF', fontFamily: '"Blauer Nue", sans-serif', fontSize: '36px', fontStyle: 'normal', fontWeight: 500, lineHeight: '36px' }}>
          SMRSC 2024 Highlights
        </h2>

        <div 
          className="relative overflow-hidden shadow-2xl group cursor-pointer"
          style={{
            width: '1380px',
            height: '752px',
            borderRadius: '20px',
            background: isPlaying 
              ? 'black' 
              : `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${thumbnailUrl}) lightgray 0px -0.056px / 100% 122.355% no-repeat`
          }}
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              </div>
            </div>
          ) : (
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="SMRSC 2024 Highlights" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full rounded-[20px]"></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default SMRSC2024;