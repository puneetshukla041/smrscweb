'use client';

import React from 'react';
import { PersonStanding, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';

export default function AnimatedRouteMapPage() {
  const steps = [
    { text: "Bharat Mandapam\nMain Entry Gate", icon: PersonStanding },
    { text: "Use West Side\nEntrance" },
    { text: "Take Stairs to\nLevel 2" },
    { text: "Proceed to\nRegistration Desk" },
    { text: "Auditorium 2 is\nahead on your right", highlight: true }
  ];

  // Base timing configuration for the staggered animation
  const stepDuration = 1.2;

  return (
    <div className="flex flex-col min-h-screen bg-[#070b19] font-sans selection:bg-[#3f9ebb]/30">
      <Header />

      <main className="flex-grow flex flex-col items-center py-10 sm:py-24 px-4 sm:px-8 overflow-hidden relative">
        
        {/* Background ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3f9ebb]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative w-full max-w-5xl flex flex-col gap-12 z-10">
          
          {/* TOP EVENT CARD - Updated to match new CSS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col"
          >
            {/* Header section based on provided CSS */}
            <div className="flex p-5 justify-center items-center gap-2.5 self-stretch rounded-t-[20px] bg-gradient-to-r from-[rgba(11,211,211,0.80)] to-[rgba(34,92,240,0.80)] relative overflow-hidden">
               {/* Shimmer effect over the header */}
               <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 5 }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              <h2 className="text-xl font-medium text-white tracking-wide relative z-10 w-full text-left sm:pl-4">
                Cardiac Surgery on SSI Mantra
              </h2>
            </div>
            
            {/* Body section based on provided CSS */}
            <div className="flex p-5 flex-col justify-center items-start gap-5 self-stretch rounded-b-[20px] bg-[rgba(21,21,21,0.20)] backdrop-blur-md border border-white/[0.05] border-t-0">
              
              <div className="text-white/80 text-sm tracking-wide flex items-center gap-2 sm:pl-4">
                <MapPin size={16} className="text-[#0bd3d3]" />
                DAY 2: Auditorium 2
              </div>
              
              <div className="h-px w-full bg-white/[0.05]"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 sm:pl-4 w-full">
                <div className="flex gap-6 items-center sm:border-r border-white/10 sm:pr-8">
                  <div className="flex flex-col">
                    <span className="text-4xl font-light text-white tracking-tight">10'th</span>
                    <span className="text-[13px] text-white/50 mt-1 uppercase tracking-wider font-medium">April 2026</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="text-[16px] text-white/90 font-light tracking-wide">-Dr. Sudhir Srivastava</span>
                  <span className="text-[14px] text-[#0bd3d3] font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0bd3d3] animate-pulse shadow-[0_0_8px_rgba(11,211,211,0.8)]" />
                    2:30 PM onwards
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* HOW TO REACH SECTION (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase ml-2 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-white/20"></span>
              Navigation Path
            </h3>
            
            {/* The Transparent Glass Container */}
            <div className="bg-[rgba(21,21,21,0.20)] backdrop-blur-2xl border border-white/[0.05] rounded-[20px] pt-28 pb-10 px-4 sm:px-10 shadow-lg relative">
              
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
                          className={`absolute bottom-10 w-28 sm:w-36 text-center text-[12px] sm:text-[13px] font-medium leading-snug tracking-wide ${
                            step.highlight ? 'text-[#0bd3d3] drop-shadow-[0_0_8px_rgba(11,211,211,0.4)]' : 'text-white/60'
                          }`}
                        >
                          {step.text}
                        </motion.div>
                        
                        {/* Node Circle */}
                        <motion.div 
                          initial={{ scale: 0, backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}
                          animate={{ 
                            scale: 1, 
                            backgroundColor: step.highlight ? "rgba(11,211,211,0.15)" : "rgba(255,255,255,0.03)", 
                            borderColor: step.highlight ? "#0bd3d3" : "rgba(255,255,255,0.15)" 
                          }}
                          transition={{ duration: 0.5, delay: delay, type: "spring" }}
                          className={`w-[22px] h-[22px] rounded-full border-[2px] flex items-center justify-center backdrop-blur-sm relative ${
                            step.highlight ? 'ring-4 ring-[#0bd3d3]/30 shadow-[0_0_20px_rgba(11,211,211,0.6)]' : ''
                          }`}
                        >
                          {/* Inner Dot */}
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: delay + 0.2 }}
                            className={`w-[8px] h-[8px] rounded-full ${step.highlight ? 'bg-[#0bd3d3] shadow-[0_0_10px_rgba(11,211,211,0.8)]' : 'bg-white/40'}`}
                          />

                          {/* Person Icon mapping to first step */}
                          {step.icon && (
                             <motion.div 
                               initial={{ opacity: 0, x: -20 }}
                               animate={{ opacity: 1, x: 0 }}
                               transition={{ duration: 0.5, delay: delay + 0.4 }}
                               className="absolute -left-10 text-white/30"
                             >
                               <PersonStanding size={28} strokeWidth={1.5} />
                             </motion.div>
                          )}

                          {/* Final Destination Ping Animation */}
                          {step.highlight && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: [0, 0.8, 0], scale: [1, 2.5, 3] }}
                              transition={{ duration: 2, repeat: Infinity, delay: delay + 1 }}
                              className="absolute inset-0 bg-[#0bd3d3] rounded-full -z-10"
                            />
                          )}
                        </motion.div>
                      </div>

                      {/* CONNECTING LINE */}
                      {index < steps.length - 1 && (
                        <div className="flex-1 relative h-[2px] mx-1 sm:mx-2 flex items-center z-10">
                          {/* Background Dashed Line (Dark mode) */}
                          <div className="absolute inset-0 border-t-[2px] border-dashed border-white/10 w-full" />
                          
                          {/* Animated Solid Foreground Line */}
                          <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: stepDuration - 0.2, delay: delay + 0.2, ease: "linear" }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-[#0bd3d3] to-[#0bd3d3] h-[2px] shadow-[0_0_8px_rgba(11,211,211,0.8)]"
                          />

                          {/* Animated Arrow Head */}
                          <motion.div
                            initial={{ left: "0%", opacity: 0 }}
                            animate={{ left: "50%", opacity: [0, 1, 1] }}
                            transition={{ duration: stepDuration - 0.2, delay: delay + 0.2, ease: "linear" }}
                            className="absolute -translate-y-[4.5px] -translate-x-1/2 text-[#0bd3d3] drop-shadow-[0_0_5px_rgba(11,211,211,0.8)]"
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

              {/* Footer Text within Glass Card */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: steps.length * stepDuration, duration: 1 }}
                className="mt-16 pt-6 border-t border-white/5 text-[13px] text-white/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <p>Use <strong className="font-semibold text-white bg-white/10 px-2 py-0.5 rounded border border-white/5">Gate 7</strong> for all vehicle access and drop-offs.</p>
                  <p>Use <strong className="font-semibold text-white bg-white/10 px-2 py-0.5 rounded border border-white/5">Gate 10</strong> if arriving by metro or on foot.</p>
                </div>
                <div className="text-[11px] uppercase tracking-widest text-[#0bd3d3] font-semibold flex items-center gap-2 bg-[#0bd3d3]/10 px-3 py-1.5 rounded-full border border-[#0bd3d3]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0bd3d3] animate-pulse shadow-[0_0_8px_rgba(11,211,211,1)]"></span>
                  Live Navigation
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}