'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '../../components/Header'; 
import Footer from '../../components/footer'; 

// Import components
import Overview from '../../components/explore/Overview';
import ScheduleDay1 from '../../components/explore/ScheduleDay1';
import ScheduleDay2 from '../../components/explore/ScheduleDay2';
import ScheduleDay3 from '../../components/explore/ScheduleDay3'; // Added Day 3 Import

const ExploreContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get the tab from URL, default to 'overview'
  const tabParam = searchParams.get('tab') || 'overview';
  const [activeTab, setActiveTab] = useState(tabParam);

  // Sync state when URL changes (e.g. browser back button)
  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    // Updates URL to http://localhost:3000/explore?tab=day3
    router.push(`/explore?tab=${id}`, { scroll: false });
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'day1', label: 'Day 1' },
    { id: 'day2', label: 'Day 2' }, 
    { id: 'day3', label: 'Day 3' }, // Added Day 3 Tab
  ];

  return (
    <main className="flex-grow w-full flex flex-col items-center overflow-x-hidden">
        
        {/* === 1. HERO IMAGE SECTION === */}
        <section className="w-full bg-transparent flex justify-center">
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
          
          <div className="w-full flex flex-wrap items-center justify-between mb-16 gap-6">
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
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

            <button className="inline-flex justify-center items-center gap-[10px] px-[24px] py-[12px] rounded-[40px] border border-[#2A3A3B] bg-[#E3F5F6] backdrop-blur-[21px] text-[#020617] font-manrope text-sm font-semibold hover:bg-white transition-all">
              Download Brochure
            </button>
          </div>

          <div className="w-full pb-20">
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'day1' && <ScheduleDay1 />}
            {activeTab === 'day2' && <ScheduleDay2 />}
            {activeTab === 'day3' && <ScheduleDay3 />} {/* Added Day 3 Component */}
          </div>
        </div>
      </main>
      
  );
};

const ExplorePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      {/* Suspense is required for useSearchParams in Next.js App Router */}
      <Suspense fallback={<div className="min-h-screen text-white flex items-center justify-center">Loading...</div>}>
        <ExploreContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default ExplorePage;