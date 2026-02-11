'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Header & Footer Imports ---
import Header from '../../components/Header'; 
import Footer from '../../components/footer'; 

// --- Dynamic Content Imports ---
import Overview from '../../components/media/blogs';
import ScheduleDay1 from '../../components/media/kit';
import ScheduleDay2 from '../../components/media/release';

const MediaPage = () => {
  // REMOVED: <'blogs' | 'release' | 'kit'> type definition
  const [activeTab, setActiveTab] = useState('blogs');

  // --- Tab Button Styling ---
  // REMOVED: : string type annotation
  const getTabClass = (tabName) => {
    // Base properties: Flex, 150x45px, Radius 40px, Center alignment
    const baseClass = "flex justify-center items-center w-[150px] h-[45px] rounded-[40px] px-6 py-3 shrink-0 transition-all duration-300 cursor-pointer text-white font-medium";
    
    if (activeTab === tabName) {
      // Active State: White Border + Gradient Background
      return `${baseClass} border border-white bg-[linear-gradient(180deg,rgba(51,51,51,0.20)_0%,rgba(0,0,0,0.20)_137.5%)]`;
    }
    
    // Inactive State: No Border + Black/20 Background
    return `${baseClass} border border-transparent bg-black/20 text-white/60 hover:text-white hover:bg-white/10`;
  };

  return (
    <>
      {/* 1. Header */}
      <Header />
      
      <main className="min-h-screen w-full bg-[#020617] pt-[100px] pb-20 overflow-x-hidden">
        
        {/* --- Hero Image Section --- */}
        <section className="w-full px-4 md:px-10 flex justify-center">
          {/* Simple container with rounded corners (No border, No shadow) */}
          <div className="relative w-full max-w-[1693px] h-[500px] md:h-[833px] rounded-[40px] overflow-hidden">
            {/* Desktop Image (Hidden on Mobile) */}
            <img 
              src="/images/media/image1.png" 
              alt="Media Hero" 
              className="hidden md:block w-full h-full object-cover"
            />
            
            {/* Mobile Image (Visible only on Mobile) */}
            <img 
              src="/images/media/mobile.png" 
              alt="Media Hero Mobile" 
              className="md:hidden w-full h-full object-cover"
            />
          </div>
        </section>


        {/* --- Navigation Tabs --- */}
        <section className="w-full mt-[100px] md:mt-[200px] mb-16 flex justify-center md:justify-start md:pl-[273px] px-4">
           <div className="flex items-center gap-[20px] flex-wrap justify-center md:justify-start">
              <button onClick={() => setActiveTab('blogs')} className={getTabClass('blogs')}>
                Blogs
              </button>
              <button onClick={() => setActiveTab('release')} className={getTabClass('release')}>
                Press Release
              </button>
              <button onClick={() => setActiveTab('kit')} className={getTabClass('kit')}>
                Media Kit
              </button>
           </div>
        </section>


        {/* --- Dynamic Content Area --- */}
        <section className="w-full px-4 md:px-0 flex justify-center min-h-[400px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4 }}
               className="w-full max-w-[1400px]"
             >
                {activeTab === 'blogs' && <Overview />}
                {activeTab === 'release' && <ScheduleDay2 />}
                {activeTab === 'kit' && <ScheduleDay1 />}
             </motion.div>
           </AnimatePresence>
        </section>

      </main>

      {/* 2. Footer */}
      <Footer />
    </>
  );
};

export default MediaPage;