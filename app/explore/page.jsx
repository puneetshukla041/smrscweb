'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../../components/Header'; 
import Footer from '../../components/footer'; 

// Import components
import Overview from '../../components/explore/Overview';
import ScheduleDay1 from '../../components/explore/ScheduleDay1';
import ScheduleDay2 from '../../components/explore/ScheduleDay2';

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />

      {/* Main wrapper */}
      <main className="flex-grow w-full flex flex-col items-center overflow-x-hidden">
        
        {/* === 1. HERO IMAGE SECTION === */}
        <section className="w-full bg-transparent flex justify-center">
          
          {/* --- DESKTOP VIEW (Unchanged) --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="relative z-10 w-full hidden md:flex justify-center"
          >
            <div
              style={{
                marginTop: "98px",
                marginBottom: "65px",
                marginLeft: "114px",
                marginRight: "114px",
                width: "100%",
                maxWidth: "1723px",       
                aspectRatio: "1723 / 876", 
              }}
              className="relative"
            >
              <Image
                src="/images/explore/hero.webp" 
                alt="Explore Hero"
                fill
                priority
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1723px) 100vw, 1723px"
              />
            </div>
          </motion.div>

          {/* --- MOBILE VIEW (Updated) --- */}
          <div className="md:hidden w-full flex justify-center mt-[100px] mb-10 px-4">
              <div style={{ width: '350px', height: '476px', position: 'relative' }}>
                <Image
                  src="/images/explore/mobile.png"
                  alt="Explore Mobile Hero"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
          </div>

        </section>

        {/* === 2. CONTENT SECTION === */}
        <div className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-0">
          
          {/* === NAVIGATION BAR === */}
          <div className="w-full flex flex-wrap items-center justify-between mb-16 gap-6">
            
            {/* Left Side: Navigation Tabs */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'day1', label: 'Day 1' },
                { id: 'day2', label: 'Day 2' }, 
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-8 py-3 rounded-full border transition-all duration-300 font-manrope text-sm font-medium tracking-wide
                    ${
                      activeTab === tab.id
                        ? 'bg-[#0B1221] border-white text-white shadow-lg' 
                        : 'bg-transparent border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Right Side: Download Brochure Button */}
            <button className="inline-flex justify-center items-center gap-[10px] px-[24px] py-[12px] rounded-[40px] border border-[#2A3A3B] bg-[#E3F5F6] backdrop-blur-[21px] text-[#020617] font-manrope text-sm font-semibold hover:bg-white transition-all">
              Download Brochure
            </button>
            
          </div>

          {/* Dynamic Content Area */}
          <div className="w-full pb-20">
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'day1' && <ScheduleDay1 />}
            {activeTab === 'day2' && <ScheduleDay2 />}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExplorePage;