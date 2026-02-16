'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react'; // Added ArrowRight for the button

import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';
import Section1 from '../../components/about/Section1';

// 👇 FIX: Dynamically import Section2 so clicking the header link is INSTANT
const Section2 = dynamic(() => import('../../components/about/Section2'));

// --- FAQ Component Matching RegisterPage Design (Glass + Icons + Animations) ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Questions transcribed from Image 3 (About/Event Context)
  const faqs = [
    {
      question: "Will there be live surgical demonstrations?",
      answer: "Yes. Live robotic surgical demonstrations are a core component of SMRSC 2026, featuring real-time feeds from top global institutes directly to the conference venue."
    },
    {
      question: "What kind of technologies will be showcased?",
      answer: "The conference will showcase the latest advancements in the SSI Mantra surgical robot system, 3D visualization tech, telesurgery capabilities, and AI-driven surgical analytics."
    },
    {
      question: "Is SMRSC academic or industry-focused?",
      answer: "SMRSC is a unique convergence of both. It offers rigorous academic sessions and CME credits while deeply integrating industry innovations and engineering dialogues."
    },
    {
      question: "Are there hands-on or training components?",
      answer: "Absolutely. We have dedicated 'Dry Lab' sessions and simulator zones where attendees can get hands-on experience with the latest robotic consoles under expert supervision."
    },
    {
      question: "How do I register for SMRSC 2026?",
      answer: "Registration is strictly online via our official portal. Early bird access is currently open. Please visit the 'Register' page for pass details and pricing."
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
      {/* Background Glow Effect for Section (Optional, subtle) */}
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

export default function AboutPage() {
  
  // 👇 BACKGROUND PRELOADER LOGIC
  useEffect(() => {
    const preloadBackgroundAssets = async () => {
      // Pre-fetch the heavy Section2 code
      await import('../../components/about/Section2');
      
      // List of heavy images to silently cache in the background
      const assetsToPreload = [
        "/images/about/section2/image1.webp", "/images/about/section2/image2.webp", 
        "/images/about/section2/image3.webp", "/images/about/section2/image4.webp",
        "/images/about/benifit/image1.webp", "/images/about/benifit/image2.webp", 
        "/images/about/benifit/image3.webp", "/images/about/benifit/image4.webp",
        "/images/about/committe/sudhir.png", "/images/about/committe/krawal.png", 
        "/images/about/committe/somash.png", "/images/about/committe/vishwa.png"
      ];

      // Delay by 800ms to guarantee Section 1 gets 100% of the internet connection first
      setTimeout(() => {
        assetsToPreload.forEach((src) => {
          const img = new window.Image();
          img.src = src; 
        });
      }, 800); 
    };

    if (document.readyState === 'complete') {
      preloadBackgroundAssets();
    } else {
      window.addEventListener('load', preloadBackgroundAssets);
      return () => window.removeEventListener('load', preloadBackgroundAssets);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      <main className="flex-grow">
        {/* Render Section1 immediately for instant page transition */}
        <Section1 />
        
        {/* Section2 loads dynamically in the background */}
        <Section2 />

        {/* New FAQ Section with Consistent Design */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}