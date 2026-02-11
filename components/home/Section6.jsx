"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { motion } from 'framer-motion';

// Create the Motion Link component
const MotionLink = motion(Link);

const Section6 = () => {
  // --- BUTTON STYLES ---
  const registerBtnStyle = {
    display: 'flex',
    width: '301px',
    padding: '16px 24px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '24px',
    background: '#F8FFFF',
    border: 'none',
    cursor: 'pointer',
    zIndex: 20,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    textDecoration: 'none', 
  };

  const registerBtnTextStyle = {
    color: '#191B1B',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20px',
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // --- Styles ---
  const subHeadingBaseStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#E6E6E6',
    fontFamily: "'Manrope', sans-serif",
    fontWeight: 500,
  };

  const mainHeadingBaseStyle = {
    color: '#E3F5F6',
    fontFamily: '"Blauer Nue", sans-serif',
    fontWeight: 600,
    textTransform: 'uppercase',
  };

  return (
    <section 
      id="section6"
      className="min-h-auto md:min-h-[150vh] w-full bg-[#020617] flex flex-col items-center py-10 md:py-20 px-6 relative overflow-hidden"
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600&display=swap');
        
        @font-face {
          font-family: 'Blauer Nue';
          src: url('/fonts/BlauerNue.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      {/* Main Animation Container */}
      <motion.div 
        className="w-full flex flex-col items-center h-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        
        {/* 1. HEADINGS */}
        <div className="max-w-[1380px] w-full flex flex-col items-start gap-1 mt-4 md:mt-10">
          <motion.div 
            variants={textVariants} 
            style={subHeadingBaseStyle}
            className="w-full h-auto md:h-[47px] text-xl md:text-[32px] leading-tight"
          >
            Last year we inspired
          </motion.div>

          <motion.h1 
            variants={textVariants} 
            style={mainHeadingBaseStyle}
            className="text-4xl leading-tight md:text-[64px] md:leading-[86px]"
          >
            THIS YEAR, WE TRANSFORM
          </motion.h1>
        </div>

        {/* 2. IMAGE CONTAINER */}
        <motion.div
          variants={imageVariants}
          // UPDATED: Increased to mt-16 for approximately 4x the original space on mobile
          className="mt-16 md:mt-auto" 
          style={{ overflow: 'hidden' }}
        >
          {/* Exact dimensions for mobile wrapper */}
          <div 
             className="relative w-[350px] h-[173px] md:w-[1380px] md:h-[693px] rounded-[20px] md:rounded-[40px] overflow-hidden flex justify-center items-center"
          >
            {/* Desktop Image */}
            <Image 
              src="/images/home/section6/image1.webp" 
              alt="SMRSC 2026 Transformation Desktop"
              fill
              sizes="1380px"
              className="object-cover hidden md:block"
              priority
            />

            {/* Mobile Image */}
            <Image 
              src="/images/home/section6/mobile.png" 
              alt="SMRSC 2026 Transformation Mobile"
              fill
              sizes="350px"
              className="object-cover block md:hidden"
              priority
            />

            {/* 3. REGISTER BUTTON */}
            <MotionLink
              href="/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={registerBtnStyle}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-[450px] md:translate-y-0"
            >
              <span style={registerBtnTextStyle}>
                Register for SMRSC 2026
              </span>
            </MotionLink>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Section6;