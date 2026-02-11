
'use client';
import React from 'react';
import { motion } from 'framer-motion'; // Removed 'Variants' as it is a TS type

// --- Imports ---
import Header from '../../components/Header'; 
import Footer from '../../components/footer'; 

const ContactUs = () => {
  // --- Animation Variants ---
  

  
  // REMOVED: : Variants type annotation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // --- Styles ---
  // REMOVED: : React.CSSProperties type annotation
  const formContainerStyle = {
    display: 'flex',
    width: '100%', 
    maxWidth: '1280px',
    padding: '50px 60px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    borderRadius: '40px',
    background: 'rgba(0, 0, 0, 0.00)', 
    border: '1px solid rgba(255, 255, 255, 0.20)', 
  };

  const instructionTextStyle = {
    color: '#E5E5E5',
    textAlign: 'center',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px',
  };

  const labelStyle = {
    alignSelf: 'stretch',
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '150%', 
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.20)', 
    borderRadius: '5px',
    padding: '14px 20px',
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    border: 'none',
    outline: 'none',
  };

  const messageBoxStyle = {
    display: 'flex',
    width: '100%',
    height: '207px',
    padding: '14px 20px',
    alignItems: 'flex-start',
    borderRadius: '5px',
    background: 'rgba(255, 255, 255, 0.20)',
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    border: 'none',
    resize: 'none',
    outline: 'none',
  };

  const getInTouchBoxStyle = {
    display: 'flex',
    width: '100%',
    maxWidth: '1280px', 
    padding: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '20px',
    background: 'rgba(0, 0, 0, 0.00)', 
    border: '1px solid rgba(255, 255, 255, 0.20)', 
  };

  return (
    <>
      {/* 1. Header Component */}
      <Header />

      <div className="min-h-screen w-full bg-[#020617] pt-[120px] pb-20 px-4 md:px-0 flex flex-col items-center">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full flex flex-col items-center gap-12"
        >
          
          {/* Main Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-white text-[48px] md:text-[64px] font-semibold font-['Blauer_Nue'] text-center"
          >
            Contact Us
          </motion.h1>

          {/* Form Container */}
          <motion.div 
            variants={fadeInUp}
            style={formContainerStyle}
            className="responsive-padding"
          >
              {/* Instruction Text */}
              <p style={instructionTextStyle}>
                Please complete the following information and a member of our SMRSC Executive Team will contact with you.
              </p>

              <form className="flex flex-col gap-6 w-full">
                
                {/* Full Name */}
                <div className="flex flex-col gap-2 w-full">
                  <label style={labelStyle}>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    style={inputStyle}
                    className="placeholder:text-white/50"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2 w-full">
                  <label style={labelStyle}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@email.com"
                    style={inputStyle}
                    className="placeholder:text-white/50"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 w-full">
                  <label style={labelStyle}>Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Enter your message"
                    style={messageBoxStyle}
                    className="placeholder:text-white/50"
                  />
                </div>

                {/* Send Button */}
                <div className="flex justify-center mt-4">
                  <button 
                    type="button"
                    className="px-10 py-2.5 bg-white text-black rounded-full font-semibold font-manrope hover:bg-gray-200 transition-colors active:scale-95"
                  >
                    Send
                  </button>
                </div>

              </form>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div 
            variants={fadeInUp}
            className="w-full flex flex-col items-center gap-6 mt-4"
          >
            <div className="w-full max-w-[1280px] flex justify-start">
               <h2 className="text-white text-2xl md:text-[32px] font-medium font-['Blauer_Nue']">
                 Get in touch
               </h2>
            </div>

            <div style={getInTouchBoxStyle}>
              <div className="flex flex-col gap-4 text-[#E3F5F6] font-manrope text-sm md:text-base leading-relaxed opacity-90 w-full">
                
                <p className="font-semibold text-white">
                  Sudhir Srivastava Innovations Pvt. Ltd. (R&D HQ – India)
                </p>
                
                <p className="max-w-[600px]">
                  404-405, 3rd Floor, iLabs Center, Udyog Vihar, Phase III, Gurugram, Haryana, India – 122016
                </p>
                
                <div className="flex flex-col gap-1 mt-2">
                  <p>Phone: +91 9599331905, +91 7042978484</p>
                  <p>Email: <a href="mailto:smrsc@ssinnovations.org" className="hover:text-white underline decoration-white/30">smrsc@ssinnovations.org</a></p>
                  <p>Web: <a href="https://www.ssinnovations.com" target="_blank" rel="noreferrer" className="hover:text-white underline decoration-white/30">www.ssinnovations.com</a></p>
                </div>

              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* 2. Footer Component */}
      <Footer />
    </>
  );
};

export default ContactUs;
