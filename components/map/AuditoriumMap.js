'use client';

import React, { useState } from 'react';
import { Search, Navigation } from 'lucide-react';

export default function AuditoriumMap() {
  const [searchQuery, setSearchQuery] = useState('Cardiac');

  // Dummy data for the timeline steps
  const steps = [
    { title: "Bharat Mandapam\nMain Entry Gate", icon: true },
    { title: "Use West Side\nEntrance" },
    { title: "Take Stairs to Level 2" },
    { title: "Proceed to\nRegistration Desk" },
    { title: "Auditorium 2 is\nahead on your right" },
  ];

  // --- EXACT STYLES FROM YOUR PROMPT ---
  const cardHeaderStyle = {
    display: 'flex',
    padding: '20px',
    justifyContent: 'flex-start', // Adjusted to match design alignment
    alignItems: 'center',
    gap: '10px',
    alignSelf: 'stretch',
    borderRadius: '20px 20px 0 0',
    background: 'linear-gradient(90deg, rgba(11, 211, 211, 0.80) 2.04%, rgba(34, 92, 240, 0.80) 99.58%)',
  };

  const cardBodyStyle = {
    display: 'flex',
    padding: '30px 20px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '20px',
    alignSelf: 'stretch',
    borderRadius: '0 0 20px 20px',
    background: 'rgba(21, 21, 21, 0.20)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderTop: 'none'
  };

  return (
    <div className="min-h-screen w-full bg-[#020617] flex flex-col items-center pt-24 pb-20 px-6 font-sans">
      
      {/* 1. SEARCH BAR */}
      <div className="w-full max-w-[600px] mb-12">
        <div className="relative flex items-center w-full h-[50px] bg-white rounded-full px-4 shadow-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search event or auditorium..."
            className="flex-1 bg-transparent border-none outline-none text-[#151515] text-[15px] font-medium placeholder:text-gray-400"
          />
          <Search size={20} className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* 2. EVENT DETAILS CARD */}
      <div className="w-full max-w-[1000px] flex flex-col mb-12">
        {/* Header */}
        <div style={cardHeaderStyle}>
          <h2 className="text-white text-[18px] md:text-[20px] font-medium font-['Manrope']">
            Cardiac Surgery on SSI Mantra
          </h2>
        </div>

        {/* Body */}
        <div style={cardBodyStyle}>
          <div className="w-full text-white/80 text-[15px] md:text-[16px] tracking-wide mb-2 uppercase">
            DAY 2: Auditorium 2
          </div>
          
          <div className="w-full h-[1px] bg-white/10 my-2"></div>

          <div className="flex items-center gap-8 w-full">
            {/* Date Section */}
            <div className="flex flex-col items-start pr-8 border-r border-white/10">
              <span className="text-white text-[40px] md:text-[48px] font-light leading-none tracking-tight">
                10'th
              </span>
              <span className="text-white/60 text-[14px] mt-2 uppercase tracking-widest">
                April 2026
              </span>
            </div>

            {/* Doctor Section */}
            <div className="flex flex-col items-start gap-2">
              <span className="text-white text-[16px] font-medium">
                - Dr. Sudhir Srivastava
              </span>
              <span className="text-white/60 text-[14px]">
                2:30 PM onwards
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION TIMELINE */}
      <div className="w-full max-w-[1000px] flex flex-col gap-4">
        <h3 className="text-white text-[16px] font-semibold tracking-wide">
          How to reach?
        </h3>

        <div className="w-full bg-[#F4F9FA] rounded-[20px] p-6 md:p-10 shadow-xl flex flex-col relative overflow-hidden">
          
          {/* Timeline Wrapper */}
          <div className="flex w-full justify-between items-end relative min-h-[100px] mb-8">
            
            {/* Background Dotted Line */}
            <div className="absolute top-[60px] left-[5%] right-[5%] h-[2px] border-t-2 border-dashed border-[#225CF0]/40 z-0"></div>

            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-4 relative z-10 w-1/5 text-center">
                
                {/* Step Text */}
                <div className="text-[#151515] text-[12px] md:text-[14px] font-semibold h-[40px] flex items-center justify-center whitespace-pre-line">
                  {step.title}
                </div>

                {/* Step Node */}
                <div className="flex items-center justify-center w-full relative">
                  
                  {/* Icon for the first step */}
                  {step.icon && (
                    <div className="absolute -left-6 md:-left-8 text-[#0BD3D3]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m11 20 1.5-6.5L16 16"/>
                        <path d="M16 16v5"/>
                        <path d="M12.5 13.5 11 10"/>
                        <path d="M11 10V6"/>
                        <path d="M11 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/>
                        <path d="m7 16 2.5-4"/>
                        <path d="m7 16-2.5 5"/>
                        <path d="M11 10 7.5 9"/>
                      </svg>
                    </div>
                  )}

                  {/* Gradient Circle Node */}
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0BD3D3] to-[#225CF0] border-4 border-white flex items-center justify-center shadow-md">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>

                  {/* Right Arrow on the line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute right-[-10%] md:right-[-20%] text-[#225CF0]/80 bg-[#F4F9FA] px-1 z-20">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Notes */}
          <div className="flex flex-col gap-1 text-[#666666] text-[12px] font-medium border-t border-gray-200 pt-4">
            <p>Use Gate 7 for all vehicle access and drop-offs.</p>
            <p>Use Gate 10 if arriving by metro or on foot.</p>
          </div>
          
        </div>
      </div>

    </div>
  );
}