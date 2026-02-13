'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

// Static: Blogs (Assuming it's the default view)
import Overview from '../../components/media/blogs';

// Dynamic: Heavy media components
const ScheduleDay1 = dynamic(() => import('../../components/media/kit'));     // Media Kit
const ScheduleDay2 = dynamic(() => import('../../components/media/release')); // Press Release

const MediaContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const tabParam = searchParams.get('tab') || 'blogs';
  const [activeTab, setActiveTab] = useState(tabParam);

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    router.push(`/media?tab=${tabName}`, { scroll: false });
  };

  const getTabClass = (tabName) => {
    const baseClass = "flex justify-center items-center w-[150px] h-[45px] rounded-[40px] px-6 py-3 shrink-0 transition-all duration-300 cursor-pointer text-white font-medium";
    
    if (activeTab === tabName) {
      return `${baseClass} border border-white bg-[linear-gradient(180deg,rgba(51,51,51,0.20)_0%,rgba(0,0,0,0.20)_137.5%)]`;
    }
    return `${baseClass} border border-transparent bg-black/20 text-white/60 hover:text-white hover:bg-white/10`;
  };

  return (
    <main className="min-h-screen w-full bg-[#020617] pt-[100px] pb-20 overflow-x-hidden">
      
      {/* --- Hero Image Section --- */}
      <section className="w-full px-4 md:px-10 flex justify-center">
        <div className="relative w-full max-w-[1693px] h-[500px] md:h-[833px] rounded-[40px] overflow-hidden">
          <img 
            src="/images/media/image1.webp" 
            alt="Media Hero" 
            className="hidden md:block w-full h-full object-cover"
          />
          <img 
            src="/images/media/mobile.webp" 
            alt="Media Hero Mobile" 
            className="md:hidden w-full h-full object-cover"
          />
        </div>
      </section>

      {/* --- Navigation Tabs --- */}
      <section className="w-full mt-[100px] md:mt-[200px] mb-16 flex justify-center md:justify-start md:pl-[273px] px-4">
         <div className="flex items-center gap-[20px] flex-wrap justify-center md:justify-start">
            <button onClick={() => handleTabChange('blogs')} className={getTabClass('blogs')}>
              Blogs
            </button>
            <button onClick={() => handleTabChange('release')} className={getTabClass('release')}>
              Press Release
            </button>
            <button onClick={() => handleTabChange('kit')} className={getTabClass('kit')}>
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
  );
};

const MediaPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">Loading...</div>}>
        <MediaContent />
      </Suspense>
      <Footer />
    </>
  );
};

export default MediaPage;