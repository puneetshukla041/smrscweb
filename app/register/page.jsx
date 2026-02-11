'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// Ensure these paths are correct for your project structure
import Header from '../../components/Header'; 
import Footer from '../../components/footer'; 

// --- Animation Variants ---

// Stagger effect for the parent container
const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Animation for individual items (Cards, Form, Button)
const itemVar = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
};

// Floating animation for background blobs
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

// --- Reusable Pricing Row Component ---
const PricingRow = ({ label, price }) => (
  <motion.div 
    whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
    className="flex justify-between items-center w-full py-4 px-4 border-b border-white/10 last:border-0 rounded-md transition-colors cursor-default"
  >
    <span className="text-[#E5E5E5] font-manrope font-semibold text-sm sm:text-base">
      {label}
    </span>
    <span className="text-[#E5E5E5] font-manrope font-semibold text-sm sm:text-base">
      {price}
    </span>
  </motion.div>
);

const RegisterPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] overflow-x-hidden relative font-sans">
      <Header />

      {/* --- Ambient Background Glows (Animated) --- */}
      <motion.div 
        variants={floatVar}
        animate="animate"
        className="fixed top-[15%] -left-[10%] sm:left-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#004398] opacity-[0.2] blur-[100px] rounded-full pointer-events-none z-0" 
      />
      <motion.div 
        variants={floatVar}
        animate="animate"
        transition={{ delay: 1 }} // Offset the animation slightly
        className="fixed bottom-[10%] -right-[10%] sm:right-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#0BD3D3] opacity-[0.15] blur-[100px] rounded-full pointer-events-none z-0" 
      />

      <main className="flex-grow pt-32 pb-20 flex flex-col items-center px-4 sm:px-6 relative z-10 w-full">
        
        {/* Page Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#F8FFFF] text-center font-['Blauer_Nue'] font-semibold text-4xl sm:text-6xl lg:text-[72px] leading-tight mb-12 sm:mb-16"
        >
          Register Now
        </motion.h1>

        {/* Animation Container */}
        <motion.div 
          variants={containerVar}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-10 w-full max-w-[1300px]"
        >
          
          {/* === PRICING CARDS SECTION === */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            
            {/* 1. Indian Delegates Card */}
            <motion.div variants={itemVar} className="flex flex-col w-full h-full bg-[#020617]/40 backdrop-blur-md rounded-[20px] border border-[#659FD3] overflow-hidden">
              {/* Header */}
              <div className="p-5 sm:p-6 flex flex-col justify-center items-center bg-gradient-to-r from-[#004398] to-[#0BD3D3]">
                <h3 className="text-white font-['Blauer_Nue'] text-lg sm:text-xl text-center">
                  Indian Delegates Registration (INR)
                </h3>
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <PricingRow label="Surgeons" price="Rs. 5000.00" />
                <PricingRow label="Students" price="Rs. 1000.00" />
                <PricingRow label="Medical staff" price="Rs. 1000.00" />
              </div>
            </motion.div>

            {/* 2. International Delegates Card */}
            <motion.div variants={itemVar} className="flex flex-col w-full h-full bg-[#020617]/40 backdrop-blur-md rounded-[20px] border border-[#659FD3] overflow-hidden">
              {/* Header */}
              <div className="p-5 sm:p-6 flex flex-col justify-center items-center bg-gradient-to-r from-[#004398] to-[#0BD3D3]">
                <h3 className="text-white font-['Blauer_Nue'] text-lg sm:text-xl text-center">
                  International Delegates Registration (USD)
                </h3>
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <PricingRow label="Surgeons" price="$ 5000.00" />
                <PricingRow label="Students" price="$ 2000.00" />
                <PricingRow label="Medical staff" price="$ 1000.00" />
              </div>
            </motion.div>

          </div>


          {/* === REGISTRATION FORM === */}
          <motion.div 
            variants={itemVar} 
            className="w-full bg-[#020617]/60 backdrop-blur-md rounded-[20px] border border-[#659FD3] overflow-hidden mt-6"
          >
              {/* Header Section of Form */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-[#004398] to-[#0BD3D3]">
                <h3 className="text-white font-['Blauer_Nue'] text-xl sm:text-2xl pl-2">
                  Start Registration
                </h3>
              </div>

              {/* Form Inputs Container */}
              <form className="w-full px-4 sm:px-8 py-8 flex flex-col gap-6">
                
                {/* Field 1: Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-white font-manrope font-medium text-base">
                    Email Address
                  </label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, borderColor: '#0BD3D3' }}
                    type="email" 
                    placeholder="name@email.com"
                    className="w-full h-[43px] px-5 rounded-[5px] bg-gradient-to-r from-[rgba(204,204,204,0.1)] to-[rgba(255,255,255,0.1)] text-white outline-none border border-transparent transition-all placeholder:text-gray-400 font-manrope"
                  />
                </div>

                {/* Field 2: Create Password */}
                <div className="flex flex-col gap-2">
                  <label className="text-white font-manrope font-medium text-base">
                    Create new password
                  </label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, borderColor: '#0BD3D3' }}
                    type="password" 
                    placeholder="xxxxxxxx"
                    className="w-full h-[43px] px-5 rounded-[5px] bg-gradient-to-r from-[rgba(204,204,204,0.1)] to-[rgba(255,255,255,0.1)] text-white outline-none border border-transparent transition-all placeholder:text-gray-400 font-manrope"
                  />
                </div>

                 {/* Field 3: Confirm Password */}
                 <div className="flex flex-col gap-2">
                  <label className="text-white font-manrope font-medium text-base">
                    Confirm password
                  </label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, borderColor: '#0BD3D3' }}
                    type="password" 
                    placeholder="xxxxxxxx"
                    className="w-full h-[43px] px-5 rounded-[5px] bg-gradient-to-r from-[rgba(204,204,204,0.1)] to-[rgba(255,255,255,0.1)] text-white outline-none border border-transparent transition-all placeholder:text-gray-400 font-manrope"
                  />
                </div>

              </form>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={itemVar}
            whileHover={{ scale: 1.05, backgroundColor: '#E0A325' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-6 py-3 mt-4 rounded-full bg-[#CE921B] text-white font-manrope font-semibold cursor-pointer shadow-lg hover:shadow-orange-500/20 transition-shadow"
          >
            Save & Continue <ArrowRight size={18} />
          </motion.button>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;