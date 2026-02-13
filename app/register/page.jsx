'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header'; 
import Footer from '../../components/common/footer'; 

// --- Animation Variants ---
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

      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 relative z-10 w-full min-h-[70vh]">
        
        <motion.div 
          variants={containerVar}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center w-full"
        >
          {/* Page Title */}
          <motion.h1 
            variants={itemVar}
            className="text-[#F8FFFF] font-['Blauer_Nue'] font-semibold text-5xl sm:text-7xl lg:text-[84px] leading-tight mb-12"
          >
         
          </motion.h1>

          {/* Simple Coming Soon Card */}
          <motion.div 
            variants={itemVar}
            className="w-full max-w-[1200px] relative rounded-[20px] bg-[#0a0a0a]/50 border border-white/5 shadow-2xl flex flex-col overflow-hidden"
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

        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;