'use client';
import React from 'react';

// Data for "Places to go around" (Top 6)
const placesAround = [
  // UPDATED: .png -> .webp
  { id: 1, name: 'Red Fort', image: '/images/visit/place1.webp' },
  { id: 2, name: 'India Gate', image: '/images/visit/place2.webp' },
  { id: 3, name: 'Akshardham', image: '/images/visit/place3.webp' },
  { id: 4, name: 'Qutub Minar', image: '/images/visit/place4.webp' },
  { id: 5, name: 'Lotus Temple', image: '/images/visit/place5.webp' },
  { id: 6, name: "Humayun's Tomb", image: '/images/visit/place6.webp' },
];

// Data for "More places to explore nearby" (Bottom 3)
const placesNearby = [
  // UPDATED: .png -> .webp
  { id: 7, name: 'Rishikesh', image: '/images/visit/place7.webp' },
  { id: 8, name: 'Agra', image: '/images/visit/place8.webp' },
  { id: 9, name: 'Jaipur', image: '/images/visit/place9.webp' },
];

const PlacesPage = () => {
  return (
    <div className="flex flex-col items-center w-full animate-fadeIn text-white">
      
      {/* === Container === */}
      <div className="w-full max-w-[1377px] px-4 py-10 flex flex-col gap-16">
        
        {/* === SECTION 1: Places to go around === */}
        <div className="flex flex-col gap-8">
          {/* Header */}
          <h2 className="font-['Blauer_Nue'] text-[#F8FFFF] text-[36px] font-normal leading-[36px]">
            Places to go around
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 justify-items-center">
            {placesAround.map((place) => (
              <div 
                key={place.id}
                className="relative group overflow-hidden shadow-lg"
                style={{
                  width: '100%',        // FIX: Responsive width
                  maxWidth: '428px',    // FIX: Maintain desktop size
                  height: '262px',
                  borderRadius: '4px 50px 50px 4px',
                }}
              >
                {/* Background Image */}
                {/* Replaced next/image with standard img for preview compatibility */}
                <img
                  src={place.image}
                  alt={place.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 z-10 flex flex-col justify-end items-center pb-6"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.95) 100%)'
                  }}
                >
                  {/* Place Name */}
                  <h3 className="font-manrope text-white text-[22px] font-semibold leading-[24px] text-center">
                    {place.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === SECTION 2: More places to explore nearby === */}
        <div className="flex flex-col gap-8 mb-20">
          {/* Header */}
          <h2 className="font-['Blauer_Nue'] text-[#F8FFFF] text-[36px] font-normal leading-[36px]">
            More places to explore nearby
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 justify-items-center">
            {placesNearby.map((place) => (
              <div 
                key={place.id}
                className="relative group overflow-hidden shadow-lg"
                style={{
                  width: '100%',        // FIX: Responsive width
                  maxWidth: '428px',    // FIX: Maintain desktop size
                  height: '262px',
                  borderRadius: '4px 50px 50px 4px',
                }}
              >
                {/* Replaced next/image with standard img for preview compatibility */}
                <img
                  src={place.image}
                  alt={place.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 z-10 flex flex-col justify-end items-center pb-6"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.95) 100%)'
                  }}
                >
                  <h3 className="font-manrope text-white text-[22px] font-semibold leading-[24px] text-center">
                    {place.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlacesPage;