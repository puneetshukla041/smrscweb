'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react'; 
import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

// --- FAQ Component (Matching ExplorePage Design) ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards (Visa, Mastercard, Amex), debit cards, and direct bank transfers. All transactions are processed through our secure payment gateway."
    },
    {
      question: "I did not receive a confirmation email. What should I do?",
      answer: "Please check your spam or junk folder first. If you still cannot find it, please contact our support team with your transaction ID, and we will resend the confirmation immediately."
    },
    {
      question: "Is reimbursement available for international surgeons?",
      answer: "Reimbursement availability depends on your sponsorship status or hospital affiliation. We recommend checking with your institution's funding department or applying for our travel grants if eligible."
    },
    {
      question: "Do you provide visa assistance?",
      answer: "Yes. Once your registration is confirmed, we can issue an official Letter of Invitation to support your visa application process at the nearest embassy."
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
    <div className="w-full max-w-[1200px] mt-10 mb-20 relative">
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
                      {/* FIX: Added text-left to override the parent text-center */}
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

// --- Main Page Component ---

// Animation Variants
const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVar = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const floatVar = {
  animate: {
    y: [0, -20, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const RegisterPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] overflow-x-hidden relative font-sans">
      <Header />

      {/* --- Ambient Background Glows --- */}
      <motion.div 
        variants={floatVar}
        animate="animate"
        className="fixed top-[15%] -left-[10%] sm:left-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#004398] opacity-[0.2] blur-[100px] rounded-full pointer-events-none z-0" 
      />
      <motion.div 
        variants={floatVar}
        animate="animate"
        transition={{ delay: 1 }}
        className="fixed bottom-[10%] -right-[10%] sm:right-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#0BD3D3] opacity-[0.15] blur-[100px] rounded-full pointer-events-none z-0" 
      />

      <main className="flex-grow flex flex-col items-center pt-32 px-4 sm:px-6 relative z-10 w-full">
        
        <motion.div 
          variants={containerVar}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center w-full"
        >
          {/* Page Title Space */}
          <motion.h1 
            variants={itemVar}
            className="text-[#F8FFFF] font-['Blauer_Nue'] font-semibold text-5xl sm:text-7xl lg:text-[84px] leading-tight mb-12"
          >
           {/* Title Text Can Go Here */}
          </motion.h1>

          {/* Simple Coming Soon Card */}
          <motion.div 
            variants={itemVar}
            className="w-full max-w-[1200px] relative rounded-[20px] bg-[#0a0a0a]/50 border border-white/5 shadow-2xl flex flex-col overflow-hidden mb-20"
          >
            {/* Gradient Top Bar */}
            <div 
              className="w-full h-[10px]"
              style={{
                background: 'linear-gradient(90deg, rgba(11, 211, 211, 0.80) 2.04%, rgba(34, 92, 240, 0.80) 99.58%)'
              }}
            />

            {/* Content Area */}
            <div className="w-full py-40 flex flex-col items-center justify-center text-center">
              <div className="relative">
                {/* Subtle glow effect behind text */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
                
                <h3 className="text-[#E3F5F6] text-[32px] md:text-[48px] font-semibold font-['Blauer_Nue'] tracking-widest uppercase animate-pulse">
                  Opening Soon
                </h3>
              </div>
            </div>
          </motion.div>

          {/* --- FAQ SECTION --- */}
          <motion.div variants={itemVar} className="w-full flex justify-center">
             <FAQSection />
          </motion.div>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;