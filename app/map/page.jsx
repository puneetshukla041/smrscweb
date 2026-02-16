'use client';

import React from 'react';
import { PersonStanding, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AnimatedRouteMapPage() {
  const steps = [
    { text: "Bharat Mandapam\nMain Entry Gate", icon: PersonStanding },
    { text: "Use West Side\nEntrance" },
    { text: "Take Stairs to\nLevel 2" },
    { text: "Proceed to\nRegistration Desk" },
    { text: "Auditorium 2 is\nahead on your right", highlight: true }
  ];

  // Base timing configuration for the staggered animation
  const stepDuration = 1.2; // How long it takes to travel from one node to the next

  return (
    <main className="min-h-screen bg-[#070b19] font-sans flex flex-col items-center py-10 sm:py-16 px-4 sm:px-8 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#3f9ebb]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-5xl flex flex-col gap-10 z-10">
        
        {/* TOP EVENT CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden bg-[#0d101b]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
        >
          <div className="bg-gradient-to-r from-[#3f9ebb] to-[#465cc0] px-8 py-5 relative overflow-hidden">
            {/* Shimmer effect over the header */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 5 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            <h2 className="text-xl font-medium text-white tracking-wide relative z-10">
              Cardiac Surgery on SSI Mantra
            </h2>
          </div>
          
          <div className="px-8 py-8 flex flex-col gap-8">
            <div className="text-white/80 text-sm tracking-wide flex items-center gap-2">
              <MapPin size={16} className="text-[#3f9ebb]" />
              DAY 2: Auditorium 2
            </div>
            
            <div className="h-px w-full bg-white/[0.05]"></div>
            
            <div className="flex items-center gap-8">
              <div className="flex gap-6 items-center border-r border-[#3f9ebb]/30 pr-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-light text-white tracking-tight">10'th</span>
                  <span className="text-[13px] text-white/50 mt-1 uppercase tracking-wider font-medium">April 2026</span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="text-[16px] text-white/90 font-light tracking-wide">-Dr. Sudhir Srivastava</span>
                <span className="text-[14px] text-[#3f9ebb] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3f9ebb] animate-pulse" />
                  2:30 PM onwards
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* HOW TO REACH SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-sm font-semibold tracking-widest text-white/60 uppercase ml-2">
            Navigation Path
          </h3>
          
          <div className="bg-gradient-to-br from-[#f2faf9] to-[#e6f5f3] rounded-2xl pt-24 pb-10 px-4 sm:px-10 shadow-2xl relative">
            
            {/* The Stepper Track */}
            <div className="flex justify-between items-center w-full mb-12 relative">
              
              {steps.map((step, index) => {
                const delay = index * stepDuration;

                return (
                  <React.Fragment key={index}>
                    {/* NODE */}
                    <div className="relative flex flex-col items-center flex-shrink-0 z-20">
                      
                      {/* Floating Text Box */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, delay: delay }}
                        className={`absolute bottom-8 w-28 sm:w-36 text-center text-[12px] sm:text-[13px] font-medium leading-snug ${
                          step.highlight ? 'text-[#3f9ebb]' : 'text-[#4a5568]'
                        }`}
                      >
                        {step.text}
                      </motion.div>
                      
                      {/* Node Circle */}
                      <motion.div 
                        initial={{ scale: 0, backgroundColor: "#e2e8f0", borderColor: "#cbd5e1" }}
                        animate={{ scale: 1, backgroundColor: "#f2faf9", borderColor: step.highlight ? "#3f9ebb" : "#4db8a6" }}
                        transition={{ duration: 0.5, delay: delay, type: "spring" }}
                        className={`w-[22px] h-[22px] rounded-full border-[2.5px] flex items-center justify-center bg-white shadow-sm relative ${
                          step.highlight ? 'ring-4 ring-[#3f9ebb]/20' : ''
                        }`}
                      >
                        {/* Inner Dot */}
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: delay + 0.2 }}
                          className={`w-[8px] h-[8px] rounded-full ${step.highlight ? 'bg-[#3f9ebb]' : 'bg-[#4db8a6]'}`}
                        />

                        {/* Person Icon mapping to first step */}
                        {step.icon && (
                           <motion.div 
                             initial={{ opacity: 0, x: -20 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ duration: 0.5, delay: delay + 0.4 }}
                             className="absolute -left-8 text-gray-400"
                           >
                             <PersonStanding size={28} strokeWidth={1.5} />
                           </motion.div>
                        )}

                        {/* Final Destination Ping Animation */}
                        {step.highlight && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: [0, 1, 0], scale: [1, 2.5, 3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: delay + 1 }}
                            className="absolute inset-0 bg-[#3f9ebb] rounded-full -z-10"
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* CONNECTING LINE (Don't render after the last node) */}
                    {index < steps.length - 1 && (
                      <div className="flex-1 relative h-[2px] mx-1 sm:mx-2 flex items-center z-10">
                        {/* Background Dashed Line */}
                        <div className="absolute inset-0 border-t-[2px] border-dashed border-gray-300 w-full" />
                        
                        {/* Animated Solid Foreground Line */}
                        <motion.div 
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: stepDuration - 0.2, delay: delay + 0.2, ease: "linear" }}
                          className="absolute inset-y-0 left-0 bg-[#4db8a6] h-[2px]"
                        />

                        {/* Animated Arrow Head moving with the line */}
                        <motion.div
                          initial={{ left: "0%", opacity: 0 }}
                          animate={{ left: "50%", opacity: [0, 1, 1] }}
                          transition={{ duration: stepDuration - 0.2, delay: delay + 0.2, ease: "linear" }}
                          className="absolute -translate-y-[4.5px] -translate-x-1/2 text-[#4db8a6]"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Footer Text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: steps.length * stepDuration, duration: 1 }}
              className="mt-12 pt-6 border-t border-gray-200/60 text-[13px] text-[#4a5568] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <p>Use <strong className="font-semibold text-gray-900 bg-black/5 px-1.5 py-0.5 rounded">Gate 7</strong> for all vehicle access and drop-offs.</p>
                <p>Use <strong className="font-semibold text-gray-900 bg-black/5 px-1.5 py-0.5 rounded">Gate 10</strong> if arriving by metro or on foot.</p>
              </div>
              <div className="text-[11px] uppercase tracking-widest text-[#4db8a6] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4db8a6] animate-pulse"></span>
                Live Navigation
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}