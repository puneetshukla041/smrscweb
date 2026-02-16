'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is SMRSC?",
      answer: "SMRSC (SSI Multi-Specialty Robotic Surgery Conference) is a global conference focused on robotic and technology-driven surgery, bringing together surgeons, innovators, educators, and healthcare leaders."
    },
    {
      question: "Who should attend SMRSC?",
      answer: "The conference is designed for surgeons, clinicians, hospital administrators, researchers, innovators, and fellowship trainees interested in robotic surgery and advanced surgical technologies."
    },
    {
      question: "Will there be live robotic surgeries?",
      answer: "Yes, live robotic surgical demonstrations are a key part of the conference program."
    },
    {
      question: "Is the conference academic or industry-focused?",
      answer: "SMRSC combines academic discussions, live clinical demonstrations, and technology showcases within a structured program."
    },
    {
      question: "How do I register?",
      answer: "Registration details can be found on our official portal. The process includes selecting your pass type, workshops, and accommodation options if needed." 
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
    <>
      <Header />
      
      <main className="min-h-screen w-full bg-[#000000] text-white pt-40 pb-32 px-6 flex flex-col items-center relative overflow-hidden">
        
        {/* Dynamic Background Mesh - Neutral White/Gray Tint */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[100vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black/0 to-transparent blur-[120px] pointer-events-none opacity-40 animate-pulse-slow -z-10" />
        
        <div className="w-full max-w-[1000px] flex flex-col z-10">
          
          {/* Page Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: '48px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
            }}
          >
            Frequently Asked Questions
          </motion.h1>

          {/* FAQ List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col w-full space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="group relative cursor-pointer" // cursor-pointer added here
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Glass Card Background - Neutral Monochrome */}
                  <motion.div
                    layout
                    className={`absolute inset-0 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${isOpen ? 'bg-white/[0.08] border-white/20' : 'bg-white/[0.02] border-white/[0.05] group-hover:bg-white/[0.05] group-hover:border-white/10'}`}
                  />

                  <div className="relative z-10 px-8 py-6 pointer-events-none">
                    <div className="flex items-center justify-between w-full text-left">
                      <span 
                        style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '18px',
                          fontWeight: 500,
                          letterSpacing: '-0.01em',
                        }}
                        className={`transition-colors duration-300 pr-8 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}
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
                            className="pt-4 pb-2 text-base leading-relaxed text-gray-300 max-w-3xl"
                            style={{ fontFamily: 'Manrope, sans-serif' }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-full flex justify-center md:justify-end mt-16"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full overflow-hidden cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <span className="relative z-10 font-manrope font-semibold text-sm tracking-wide">View all FAQs</span>
              <motion.span
                className="relative z-10"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                  <ArrowRight size={18} />
              </motion.span>
              
              {/* Button Shine Effect - White/Gray */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_infinite] bg-gradient-to-r from-transparent via-gray-400/20 to-transparent z-0" />
            </motion.button>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;