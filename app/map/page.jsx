'use client';

import React from 'react';
import { PersonStanding, MapPin, Navigation2, Sparkles } from 'lucide-react';
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

  // Timing configuration
  const stepDuration = 1.2;

  return (
    <div className="flex flex-col min-h-screen bg-[#070b19] font-sans selection:bg-[#0bd3d3]/30 relative overflow-hidden">
      
      {/* Animated Tech Grid Background */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      />

      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      <main className="flex-grow flex flex-col items-center pt-28 pb-12 sm:pt-36 sm:pb-24 px-4 sm:px-8 relative z-10 w-full">
        
        {/* Ambient breathing holographic glow */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[800px] h-[400px] sm:h-[500px] bg-[#0bd3d3]/15 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" 
        />

        <div className="relative w-full max-w-5xl flex flex-col gap-6 sm:gap-12 z-10">
          
          {/* TOP EVENT CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full flex flex-col shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] rounded-[20px]"
          >
            {/* Header */}
            <div className="flex p-5 sm:p-6 justify-center sm:justify-start items-center gap-2.5 self-stretch rounded-t-[20px] bg-gradient-to-r from-[rgba(11,211,211,0.85)] to-[rgba(34,92,240,0.85)] relative overflow-hidden">
               <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 4 }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
              <Sparkles size={18} className="text-white/80 hidden sm:block ml-2 relative z-10" />
              <h2 className="text-lg sm:text-xl font-medium text-white tracking-wide relative z-10 w-full text-center sm:text-left sm:pl-2">
                Cardiac Surgery on SSI Mantra
              </h2>
            </div>
            
            {/* Body */}
            <div className="flex p-6 sm:p-8 flex-col justify-center items-start gap-5 self-stretch rounded-b-[20px] bg-[rgba(15,18,30,0.4)] backdrop-blur-3xl border border-white/10 border-t-0">
              <div className="text-white/80 text-[13px] sm:text-sm tracking-wide flex items-center gap-2 sm:pl-4">
                <MapPin size={16} className="text-[#0bd3d3]" />
                DAY 2: Auditorium 2
              </div>
              
              <div className="h-px w-full bg-white/[0.08]"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 sm:pl-4 w-full">
                <div className="flex gap-6 items-center sm:border-r border-white/10 sm:pr-8">
                  <div className="flex flex-col">
                    <span className="text-4xl sm:text-5xl font-light text-white tracking-tight">10'th</span>
                    <span className="text-[12px] sm:text-[14px] text-white/50 mt-1 uppercase tracking-widest font-medium">April 2026</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[16px] sm:text-[17px] text-white/90 font-light tracking-wide">-Dr. Sudhir Srivastava</span>
                  <span className="text-[14px] sm:text-[15px] text-[#0bd3d3] font-medium flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0bd3d3] animate-pulse shadow-[0_0_12px_rgba(11,211,211,0.9)]" />
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
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="flex flex-col gap-4 w-full"
          >
            <h3 className="text-[13px] sm:text-sm font-semibold tracking-widest text-white/50 uppercase ml-2 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-white/20 rounded-full"></span>
              Live Navigation Path
            </h3>
            
            <div className="bg-[rgba(15,18,30,0.4)] backdrop-blur-3xl border border-white/10 rounded-[20px] pt-12 sm:pt-32 pb-8 sm:pb-10 px-5 sm:px-10 shadow-2xl relative w-full overflow-hidden">
              
              {/* --- DESKTOP VIEW (Horizontal) --- */}
              <div className="hidden sm:flex justify-between items-center w-full mb-12 relative">
                {steps.map((step, index) => {
                  const delay = index * stepDuration;
                  return (
                    <React.Fragment key={index}>
                      <div className="relative flex flex-col items-center flex-shrink-0 z-20">
                        {/* Desktop Node */}
                        <motion.div 
                          whileHover={{ scale: 1.15 }}
                          initial={{ scale: 0, backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}
                          animate={{ 
                            scale: 1, 
                            backgroundColor: step.highlight ? "rgba(11,211,211,0.15)" : "rgba(255,255,255,0.05)", 
                            borderColor: step.highlight ? "#0bd3d3" : "rgba(255,255,255,0.2)" 
                          }}
                          transition={{ duration: 0.6, delay: delay, type: "spring" }}
                          className={`w-[24px] h-[24px] rounded-full border-[2px] flex items-center justify-center backdrop-blur-md relative z-20 cursor-pointer transition-shadow ${
                            step.highlight ? 'ring-4 ring-[#0bd3d3]/30 shadow-[0_0_25px_rgba(11,211,211,0.7)]' : 'hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                          }`}
                        >
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: delay + 0.2 }}
                            className={`w-[8px] h-[8px] rounded-full ${step.highlight ? 'bg-[#0bd3d3] shadow-[0_0_12px_rgba(11,211,211,1)]' : 'bg-white/60'}`}
                          />
                          {step.highlight && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: [0, 0.6, 0], scale: [1, 2.5, 3.5] }}
                              transition={{ duration: 2.5, repeat: Infinity, delay: delay + 1 }}
                              className="absolute inset-0 bg-[#0bd3d3] rounded-full -z-10"
                            />
                          )}
                        </motion.div>

                        {/* Desktop Person Icon */}
                        {step.icon && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ type: "spring", delay: delay + 0.4 }}
                              className="absolute -left-12 -top-1 text-white/40 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                            >
                              <PersonStanding size={32} strokeWidth={1.5} />
                            </motion.div>
                        )}

                        {/* Desktop Text */}
                        <motion.div 
                          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ duration: 0.7, delay: delay }}
                          className={`absolute bottom-12 w-40 text-center text-[13px] font-medium leading-relaxed tracking-wide whitespace-pre-line ${
                            step.highlight ? 'text-[#0bd3d3] drop-shadow-[0_0_10px_rgba(11,211,211,0.5)]' : 'text-white/80'
                          }`}
                        >
                          {step.text}
                        </motion.div>
                      </div>

                      {/* Desktop Connecting Line */}
                      {index < steps.length - 1 && (
                        <div className="flex-1 relative h-[2px] mx-3 items-center z-10">
                          <div className="absolute inset-0 border-t-[2px] border-dashed border-white/10 w-full" />
                          <motion.div 
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: stepDuration - 0.2, delay: delay + 0.2, ease: "linear" }}
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-[#0bd3d3] to-[#0bd3d3] h-[2px] shadow-[0_0_10px_rgba(11,211,211,0.8)] overflow-hidden"
                          >
                            {/* Comet Packet Desktop */}
                            <motion.div 
                              initial={{ left: "-20px" }}
                              animate={{ left: "100%" }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: delay + stepDuration }}
                              className="absolute top-1/2 -translate-y-1/2 w-8 h-[3px] bg-gradient-to-r from-transparent via-white/80 to-white rounded-full shadow-[0_0_12px_#fff,0_0_20px_#0bd3d3]" 
                            />
                          </motion.div>
                          <motion.div
                            initial={{ left: "0%", opacity: 0 }}
                            animate={{ left: "50%", opacity: [0, 1, 1] }}
                            transition={{ duration: stepDuration - 0.2, delay: delay + 0.2, ease: "linear" }}
                            className="absolute -translate-y-[4.5px] -translate-x-1/2 text-[#0bd3d3] drop-shadow-[0_0_8px_rgba(11,211,211,1)]"
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

              {/* --- MOBILE VIEW (Perfectly Centered Vertical Grid) --- */}
              <div className="sm:hidden flex flex-col w-full relative pt-8 pb-4">
                {steps.map((step, index) => {
                  const delay = index * stepDuration;
                  return (
                    <div key={index} className="grid grid-cols-[36px_1fr] gap-6 w-full relative z-20 pb-14 last:pb-0">
                      
                      {/* Left Column: Node & Line */}
                      <div className="flex flex-col items-center relative w-[36px]">
                        
                        {/* Mobile Person Icon */}
                        {step.icon && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", delay: delay + 0.4 }}
                            className="absolute -top-10 text-white/40 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                          >
                            <PersonStanding size={28} strokeWidth={1.5} />
                          </motion.div>
                        )}
                        
                        {/* Mobile Node */}
                        <motion.div 
                          initial={{ scale: 0, backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}
                          animate={{ 
                            scale: 1, 
                            backgroundColor: step.highlight ? "rgba(11,211,211,0.15)" : "rgba(255,255,255,0.05)", 
                            borderColor: step.highlight ? "#0bd3d3" : "rgba(255,255,255,0.2)" 
                          }}
                          transition={{ duration: 0.6, delay: delay, type: "spring" }}
                          className={`w-[24px] h-[24px] rounded-full border-[2px] flex items-center justify-center backdrop-blur-md z-20 ${
                            step.highlight ? 'ring-4 ring-[#0bd3d3]/30 shadow-[0_0_25px_rgba(11,211,211,0.7)]' : ''
                          }`}
                        >
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: delay + 0.2 }}
                            className={`w-[8px] h-[8px] rounded-full ${step.highlight ? 'bg-[#0bd3d3] shadow-[0_0_12px_rgba(11,211,211,1)]' : 'bg-white/60'}`}
                          />
                        </motion.div>

                        {/* Mobile Vertical Line - PERFECTLY CENTERED */}
                        {index < steps.length - 1 && (
                           // Centered exactly to the column using left-1/2, stretching to the padding bottom
                           <div className="absolute top-[24px] bottom-[-56px] w-[2px] left-1/2 -translate-x-1/2 z-10">
                              <div className="absolute inset-0 border-l-[2px] border-dashed border-white/10 h-full w-full" />
                              <motion.div 
                                initial={{ height: "0%" }}
                                animate={{ height: "100%" }}
                                transition={{ duration: stepDuration - 0.2, delay: delay + 0.2, ease: "linear" }}
                                className="absolute top-0 left-[-1px] w-[2px] bg-gradient-to-b from-transparent via-[#0bd3d3] to-[#0bd3d3] shadow-[0_0_10px_rgba(11,211,211,0.8)] overflow-hidden"
                              >
                                 {/* Comet Packet Mobile */}
                                 <motion.div 
                                   initial={{ top: "-20px" }}
                                   animate={{ top: "100%" }}
                                   transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: delay + stepDuration }}
                                   className="absolute left-1/2 -translate-x-1/2 w-[3px] h-8 bg-gradient-to-b from-transparent via-white/80 to-white rounded-full shadow-[0_0_12px_#fff,0_0_20px_#0bd3d3]" 
                                 />
                              </motion.div>
                           </div>
                        )}
                      </div>

                      {/* Right Column: Text */}
                      <motion.div 
                        initial={{ opacity: 0, x: -15, filter: "blur(8px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.7, delay: delay }}
                        className={`flex items-center text-[14px] font-medium leading-relaxed tracking-wide whitespace-pre-line ${
                          step.highlight ? 'text-[#0bd3d3] drop-shadow-[0_0_8px_rgba(11,211,211,0.5)]' : 'text-white/80'
                        }`}
                      >
                        {step.text}
                      </motion.div>

                    </div>
                  );
                })}
              </div>

              {/* Footer Text */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: steps.length * stepDuration, duration: 1, type: "spring" }}
                className="mt-8 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 text-[12px] sm:text-[13px] text-white/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-4 w-full"
              >
                <div className="space-y-3 sm:space-y-2.5 w-full">
                  <p className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <strong className="font-semibold text-white bg-white/10 px-2.5 py-1 rounded-md border border-white/10 w-fit shadow-sm">Gate 7</strong> 
                    <span>for all vehicle access & drop-offs.</span>
                  </p>
                  <p className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <strong className="font-semibold text-white bg-white/10 px-2.5 py-1 rounded-md border border-white/10 w-fit shadow-sm">Gate 10</strong> 
                    <span>if arriving by metro or on foot.</span>
                  </p>
                </div>
                
                <div className="self-start sm:self-auto text-[11px] uppercase tracking-widest text-[#0bd3d3] font-semibold flex items-center gap-2.5 bg-[#0bd3d3]/10 px-4 py-2.5 sm:px-4 sm:py-2 rounded-full border border-[#0bd3d3]/30 backdrop-blur-md shrink-0 shadow-[0_0_20px_rgba(11,211,211,0.15)]">
                  <Navigation2 size={14} className="animate-pulse drop-shadow-[0_0_5px_rgba(11,211,211,1)]" />
                  Live Navigation
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      <div className="relative z-50 mt-auto">
        <Footer />
      </div>
    </div>
  );
}