'use client';
import React from 'react';

const GuestsTab = () => {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 
        className="text-4xl md:text-6xl font-bold uppercase opacity-50 tracking-widest"
        style={{ fontFamily: '"Blauer Nue", sans-serif' }}
      >
        Coming Soon
      </h2>
      <div className="w-24 h-1 bg-[#3FD0D4] mt-4 rounded-full opacity-50"></div>
    </div>
  );
};

export default GuestsTab;