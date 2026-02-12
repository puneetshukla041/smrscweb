'use client';
import React from 'react';


const ScheduleDay1 = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[50vh] py-20 px-4">
      <div className="relative">
         {/* Glow Effect */}
         <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>

         {/* Text */}
         <h3 className="relative z-10 text-[#E3F5F6] text-[40px] md:text-[64px] font-semibold font-['Blauer_Nue'] tracking-widest uppercase animate-pulse text-center">
           Coming Soon
         </h3>
      </div>
    </div>
  );
};

export default ScheduleDay1;
