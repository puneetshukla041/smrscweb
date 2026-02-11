'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Section1 = () => {
  return (
    <section className="w-full bg-transparent flex flex-col items-center">
      
      {/* --- DESKTOP VIEW (Animated) --- */}
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
            width: "100%",
            maxWidth: "1693px",        // Updated width
            aspectRatio: "1693 / 833", // Updated aspect ratio to match 1693x833
            position: "relative"
          }}
        >
          {/* Desktop Image Only - No Text Overlay */}
          <Image
            src="/images/about/section1/img1.png"
            alt="SMRSC About Banner"
            fill
            priority
            style={{ objectFit: "contain" }}
            sizes="(max-width: 1693px) 100vw, 1693px"
          />
        </div>
      </motion.div>

      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden w-full flex justify-center mt-24 mb-10">
        <div 
          style={{ 
            width: "350px", 
            height: "476px", 
            position: "relative" 
          }}
        >
          <Image
            src="/images/about/section1/mobile.png"
            alt="SMRSC Mobile Banner"
            fill
            className="object-contain"
            
            priority
          />
        </div>
      </div>

    </section>
  );
};

export default Section1;