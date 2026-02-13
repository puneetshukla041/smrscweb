'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Section1 = () => {
  return (
    <section className="w-full bg-transparent flex flex-col items-center">
      
      {/* --- DESKTOP VIEW --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 w-full hidden md:flex justify-center"
      >
        <div style={{ marginTop: "98px", marginBottom: "65px", width: "100%", maxWidth: "1693px", aspectRatio: "1693 / 833", position: "relative" }}>
          <Image
            src="/images/about/section1/img1.webp"
            alt="SMRSC About Banner"
            fill
            priority
            unoptimized={true} // ⚡ ZERO BUFFERING
            style={{ objectFit: "contain" }}
          />
        </div>
      </motion.div>

      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden w-full flex justify-center mt-24 mb-10">
        <div style={{ width: "350px", height: "476px", position: "relative" }}>
          <Image
            src="/images/about/section1/mobile.webp"
            alt="SMRSC Mobile Banner"
            fill
            className="object-contain"
            priority
            unoptimized={true} // ⚡ ZERO BUFFERING
          />
        </div>
      </div>

    </section>
  );
};

export default Section1;