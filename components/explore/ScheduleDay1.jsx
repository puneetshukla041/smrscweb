'use client';
import React from 'react';

const ScheduleDay1 = () => {
  return (
    <div className="w-full flex flex-col items-center animate-fadeIn pb-20 pt-10 px-4 md:px-0 bg-[#020617] min-h-[60vh]">
      <h1 className="text-white text-[48px] md:text-[64px] font-semibold font-['Blauer_Nue'] mb-10">
        Day - 1
      </h1>

      <div className="w-full max-w-[1200px] relative rounded-[20px] bg-[#0a0a0a]/50 border border-white/5 shadow-2xl flex flex-col overflow-hidden">
        <div 
          className="w-full"
          style={{
            display: 'flex',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(90deg, rgba(11, 211, 211, 0.80) 2.04%, rgba(34, 92, 240, 0.80) 99.58%)'
          }}
        >
           <span className="text-white text-lg font-medium">Day 1</span>
        </div>

        <div className="w-full py-40 flex flex-col items-center justify-center text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
            <h3 className="text-[#E3F5F6] text-[32px] md:text-[48px] font-semibold font-['Blauer_Nue'] tracking-widest uppercase animate-pulse">
              Coming Soon
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDay1;