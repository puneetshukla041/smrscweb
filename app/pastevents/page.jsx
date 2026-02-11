'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import Header from '../../components/Header'; 
import Footer from '../../components/footer'; 

// Imports
import SMRSC2024 from '../../components/pastevent/SMRSC2024';
import SMRSC2025 from '../../components/pastevent/SMRSC2025';

const PastEvents = () => {
  // State to track which year is active. Default is 2025.
  const [activeTab, setActiveTab] = useState('2025');

  // Common styles shared between both states
  const baseButtonStyles = "flex w-[156px] h-[45px] px-6 py-3 justify-center items-center gap-2.5 shrink-0 rounded-[40px] transition-all text-sm md:text-base font-medium cursor-pointer";
  
  const activeStyle = "border border-white bg-[linear-gradient(180deg,rgba(51,51,51,0.20)_0%,rgba(0,0,0,0.20)_137.5%)] text-white";
  const inactiveStyle = "bg-black/20 text-gray-400 hover:text-white"; 

  // LOGIC: Map the active tab to the correct Video Source and Text
  // UPDATED: Changed .mp4 to .webm
  const videoSource = activeTab === '2025' 
    ? "/videos/smrsc25.webm"
    : "/videos/smrsc24.webm";

  const heroText = activeTab === '2025'
    ? "A landmark year for robotic surgery"
    : "Where the journey took shape";

  return (
    <>
      <Header />
      
      {/* Main Content Wrapper */}
      <div className="min-h-screen w-full bg-[#020617] flex flex-col items-center justify-start overflow-x-hidden pt-24 md:pt-0">
        
        {/* --- DESKTOP VIEW (Animated Hero Video) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="relative z-10 w-full flex justify-center px-4"
        >
          <div
            style={{
              marginTop: "98px",
              marginBottom: "65px",
              
              // --- CARD PROPERTIES ---
              width: "100%",
              maxWidth: "1693px",      
              aspectRatio: "1693/833", 
              borderRadius: "8px 200px", 
              overflow: "hidden",      
            }}
            className="relative bg-gray-900 shadow-2xl group"
          >
            {/* Background Video */}
            <video
              key={activeTab} 
              className="w-full h-full object-cover" 
              autoPlay
              muted
              loop
              playsInline
            >
              {/* UPDATED: Changed type to video/webm */}
              <source src={videoSource} type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* --- OVERLAY TEXT (Bottom Left) --- */}
            <div 
              className="absolute bottom-12 left-12 md:bottom-[60px] md:left-[60px] z-20 pointer-events-none"
              style={{
                width: '655px',
                color: '#FFF',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '64px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '70px',
              }}
            >
              {heroText}
            </div>
            
            {/* Dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />

          </div>
        </motion.div>

        {/* --- Bottom Tabs Navigation --- */}
        <div className="w-full mb-10 flex items-center justify-start pl-4 md:pl-[270px] gap-6 overflow-x-auto">
          
          <button 
            onClick={() => setActiveTab('2025')}
            className={`${baseButtonStyles} ${activeTab === '2025' ? activeStyle : inactiveStyle}`}
          >
            SMRSC 2025
          </button>
          
          <button 
            onClick={() => setActiveTab('2024')}
            className={`${baseButtonStyles} ${activeTab === '2024' ? activeStyle : inactiveStyle}`}
          >
            SMRSC 2024
          </button>
        </div>

        {/* --- Dynamic Content Section --- */}
        <div className="w-full max-w-[1717.48px] mb-20 px-4 md:px-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === '2025' && <SMRSC2025 />}
          {activeTab === '2024' && <SMRSC2024 />}
        </div>

      </div>

      <Footer />

      {/* Add Poppins Font locally for this component */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
      `}</style>
    </>
  );
};

export default PastEvents;
