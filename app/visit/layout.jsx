'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

// --- FAQ Component Matching Previous Designs ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Questions transcribed from Image 4 (Visit/Venue Context)
  const faqs = [
    {
      question: "How can I find my session hall inside the venue?",
      answer: "Digital signage and volunteer guides will be stationed throughout the venue to assist you. You can also refer to the interactive venue map available on our mobile app."
    },
    {
      question: "Are taxis and ride-sharing services available?",
      answer: "Yes, the venue has a dedicated pick-up and drop-off zone for Uber, Lyft, and local taxis. Concierge services at the entrance can also assist with booking rides."
    },
    {
      question: "Which visa category should I apply under?",
      answer: "International attendees should generally apply for a Business or Conference Visa. We provide an official invitation letter upon registration to support your application."
    },
    {
      question: "Does SMRSC provide hotel bookings?",
      answer: "We have partnered with several hotels near the venue to offer exclusive discounted rates for attendees. You can book directly through the 'Hotels' tab on this page."
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
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 py-24 relative">
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
                        className="pt-4 pb-2 text-base leading-relaxed text-gray-300 max-w-3xl font-manrope text-left"
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

// --- Main Layout Component ---
export default function VisitLayout({ children }) {
  const pathname = usePathname();

  // Helper to check if a tab is active (Basic exact match check)
  // You might want to use .includes() if you have sub-routes
  const isActive = (path) => pathname === path;

  // Tabs Configuration
  const tabs = [
    { label: 'Venue', path: '/visit/venue' },
    { label: 'Hotels', path: '/visit/hotels' },
    { label: 'Tourism', path: '/visit/places' } 
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 flex flex-col">
        
        {/* === 1. HERO IMAGE === */}
        <div className="w-full px-4 md:px-0 flex justify-center">
          
          {/* --- DESKTOP VIEW --- */}
          <div 
            className="hidden md:block relative w-full max-w-[1693px] overflow-hidden shadow-2xl"
            style={{
               height: '833px', 
               borderRadius: '8px 200px', 
            }}
          >
            <Image
              src="/images/visit/hero.webp"
              alt="SMRSC Venue"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* --- MOBILE VIEW --- */}
          <div className="md:hidden w-full flex justify-center mb-6">
              <div style={{ width: '350px', height: '476px', position: 'relative' }}>
                <Image
                  src="/images/visit/mobile.png"
                  alt="SMRSC Venue Mobile"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
          </div>

        </div>

        {/* === 2. NAVIGATION BUTTONS === */}
        <div className="w-full flex flex-wrap justify-start gap-[15px] mt-[40px] lg:mt-[150px] px-6 lg:pl-[270px] mb-12">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              style={{
                background: 'linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%)'
              }}
              className={`
                flex w-[150px] px-6 py-3 justify-center items-center gap-[10px] shrink-0
                rounded-[40px] border cursor-pointer
                text-sm font-semibold uppercase tracking-wider transition-all duration-300
                ${isActive(tab.path) 
                  ? 'border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                  : 'border-white/30 text-white/60 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* === 3. DYNAMIC CHILD CONTENT === */}
        <div className="w-full">
          {children}
        </div>

        {/* === 4. FAQ SECTION ADDED HERE === */}
        <FAQSection />

      </main>

      <Footer />
    </div>
  );
}