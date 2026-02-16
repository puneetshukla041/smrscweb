'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Plus, Minus, ArrowRight } from 'lucide-react'; // Added icons

import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

// Static Import (First view)
import Overview from '../../components/explore/Overview';

// Dynamic Imports (Heavy schedules)
const ScheduleDay1 = dynamic(() => import('../../components/explore/ScheduleDay1'), {
  loading: () => <p className="text-white text-center py-10">Loading Day 1...</p>
});
const ScheduleDay2 = dynamic(() => import('../../components/explore/ScheduleDay2'), {
  loading: () => <p className="text-white text-center py-10">Loading Day 2...</p>
});
const ScheduleDay3 = dynamic(() => import('../../components/explore/ScheduleDay3'), {
  loading: () => <p className="text-white text-center py-10">Loading Day 3...</p>
});

// --- UPDATED FAQ COMPONENT (Matches Requested Design) ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I find my session location at the venue?",
      answer: "You can find session locations on the digital screens throughout the venue or by checking the specific session details in the 'Schedule' tab above."
    },
    {
      question: "Can I personalise my experience?",
      answer: "Yes! You can filter sessions by specialty using the tabs above and bookmark your favorite events to create a personalized itinerary."
    },
    {
      question: "Can I attend sessions outside my selected specialty?",
      answer: "Absolutely. Your pass grants you access to all open sessions regardless of specialty, allowing you to explore cross-disciplinary topics."
    }
  ];

  // --- Animation Configurations ---
  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="w-full mt-24 mb-20 relative">
      {/* Background Glow Effect for Section */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black/0 to-transparent blur-[120px] pointer-events-none opacity-30 -z-10" />

      <motion.h2 
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 text-3xl md:text-4xl font-manrope text-white font-semibold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col w-full space-y-4"
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Glass Card Background */}
              <motion.div
                layout
                className={`absolute inset-0 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${isOpen ? 'bg-white/[0.08] border-white/20' : 'bg-white/[0.02] border-white/[0.05] group-hover:bg-white/[0.05] group-hover:border-white/10'}`}
              />

              <div className="relative z-10 px-6 py-6 md:px-8 pointer-events-none">
                <div className="flex items-center justify-between w-full text-left">
                  <span 
                    className={`font-manrope text-lg font-medium tracking-tight transition-colors duration-300 pr-8 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}
                  >
                    {faq.question}
                  </span>
                  
                  <motion.div 
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? 'bg-white text-black' : 'bg-white/10 text-white group-hover:bg-white/20'}`}
                  >
                     <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="minus"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Minus size={16} strokeWidth={2.5} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="plus"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Plus size={16} strokeWidth={2.5} />
                            </motion.div>
                        )}
                     </AnimatePresence>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={springTransition}
                      className="overflow-hidden"
                    >
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 0.7 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="pt-4 pb-2 text-base leading-relaxed text-gray-300 max-w-3xl font-manrope"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full flex justify-center md:justify-end mt-12"
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full overflow-hidden cursor-pointer hover:bg-gray-200 transition-colors"
        >
          <span className="relative z-10 font-manrope font-semibold text-sm tracking-wide">View all FAQs</span>
          <motion.div
            className="relative z-10"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
              <ArrowRight size={18} />
          </motion.div>
          
          {/* Button Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_infinite] bg-gradient-to-r from-transparent via-gray-400/20 to-transparent z-0" />
        </motion.button>
      </motion.div>
    </div>
  );
};

const ExploreContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const tabParam = searchParams.get('tab') || 'overview';
  const [activeTab, setActiveTab] = useState(tabParam);

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id) => {
    setActiveTab(id);
    router.push(`/explore?tab=${id}`, { scroll: false });
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'day1', label: 'Day 1' },
    { id: 'day2', label: 'Day 2' }, 
    { id: 'day3', label: 'Day 3' },
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

          <div className="w-full pb-10 min-h-[50vh]">
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'day1' && <ScheduleDay1 />}
            {activeTab === 'day2' && <ScheduleDay2 />}
            {activeTab === 'day3' && <ScheduleDay3 />}
          </div>

          {/* === 3. UPDATED FAQ SECTION === */}
          <FAQSection />

        </div>
      </main>
      
  );
};

const ExplorePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      <Suspense fallback={<div className="min-h-screen text-white flex items-center justify-center">Loading...</div>}>
        <ExploreContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default ExplorePage;