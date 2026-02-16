"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Section3 = () => {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const desktopImages = [
    { id: 1, src: "/images/home/section3/image1.webp", title: "SSI Mantra 3" },
    { id: 2, src: "/images/home/section3/image2.webp", title: "Advanced Robotics" },
    { id: 3, src: "/images/home/section3/image3.webp", title: "Precision Control" },
    { id: 5, src: "/images/home/section3/image5.webp", title: "Global Innovation" },
    { id: 6, src: "/images/home/section3/image6.webp", title: "Smart Integration" },
  ];

  const mobileImages = [
    { id: 1, src: "/images/home/section3/mob1.webp", title: "Mobile Mantra 1" },
    { id: 2, src: "/images/home/section3/mob2.webp", title: "Mobile Mantra 2" },
    { id: 3, src: "/images/home/section3/mob3.webp", title: "Mobile Mantra 3" },
    { id: 4, src: "/images/home/section3/mob4.webp", title: "Mobile Mantra 4" },
    { id: 5, src: "/images/home/section3/mob5.webp", title: "Mobile Mantra 5" },
  ];

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageIndex = ((page % images.length) + images.length) % images.length;
  const paginate = (newDirection) => setPage(page + newDirection);

  useEffect(() => {
    const timer = setInterval(() => { paginate(1); }, 3000);
    return () => clearInterval(timer);
  }, [page]); 

  const getPosition = (index) => {
    const total = images.length;
    let diff = (index - imageIndex + total) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    if (diff === 0) return "center";
    if (diff === -1) return "left";
    if (diff === 1) return "right";
    if (diff < -1) return "far-left";
    return "far-right";
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const springTransition = { type: "spring", stiffness: 260, damping: 30 };

  const cardVariants = {
    center: { x: "0%", scale: 1, zIndex: 30, opacity: 1, filter: "brightness(1)", transition: { x: springTransition, scale: springTransition, opacity: { duration: 0.2 }, filter: { duration: 0.2 } } },
    left: { x: "-105%", scale: 1, zIndex: 20, opacity: 1, filter: "brightness(0.4)", transition: { x: springTransition, scale: springTransition, opacity: { duration: 0.4 }, filter: { duration: 0.4 } } },
    right: { x: "105%", scale: 1, zIndex: 20, opacity: 1, filter: "brightness(0.4)", transition: { x: springTransition, scale: springTransition, opacity: { duration: 0.4 }, filter: { duration: 0.4 } } },
    "far-left": { x: "-180%", scale: 0.8, zIndex: 1, opacity: 0, filter: "brightness(0)", transition: { x: springTransition, scale: springTransition, opacity: { duration: 0.1 } } },
    "far-right": { x: "180%", scale: 0.8, zIndex: 1, opacity: 0, filter: "brightness(0)", transition: { x: springTransition, scale: springTransition, opacity: { duration: 0.1 } } }
  };

  const textStyle = { color: '#E3F5F6', textAlign: 'center', fontFamily: '"Blauer Nue", sans-serif', fontWeight: '600', lineHeight: '1.2', maxWidth: '900px' };
  const alphabetStyle = { color: '#E1C583', fontFamily: 'Roba, sans-serif', fontStyle: 'normal', fontWeight: '400', lineHeight: '56px', textTransform: 'uppercase', filter: 'blur(5.45px)', userSelect: 'none' };
  const leftGlowStyle = { width: '312px', height: '388px', borderRadius: '388px', background: '#2233F0', filter: 'blur(200px)', position: 'absolute', left: '-150px', top: '50%', transform: 'translate(-20%, -50%)', zIndex: -1 };
  const indicatorContainerStyle = { display: 'inline-flex', padding: '0.75rem 1.125rem', alignItems: 'center', gap: '0.5rem', borderRadius: '1.25rem', background: 'rgba(227, 245, 246, 0.70)', boxShadow: '0 1px 2px 0 rgba(255, 255, 255, 0.25) inset', backdropFilter: 'blur(4px)' };
  const arrowBtnClass = "flex w-[40px] md:w-[48px] h-[40px] md:h-[48px] p-[8px] md:p-[10px] justify-center items-center gap-[10px] rounded-full bg-white hover:bg-white/90 transition-all shrink-0 z-50 active:scale-95 cursor-pointer";

  return (
    <motion.section className="relative w-full overflow-hidden bg-black" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={containerVariants}>
      <style>{`
        @font-face {
          font-family: 'Roba';
          src: url('/fonts/Roba-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-10 md:pt-20 pb-10">
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
          <div style={leftGlowStyle} aria-hidden="true" />
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.8 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }} style={alphabetStyle} className="absolute left-[-100px] md:left-[-150px] top-1/2 -translate-y-1/2 z-0 text-[250px] md:text-[500px]">
            O
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-col items-center space-y-8 md:space-y-12 w-full">
          <motion.h2 variants={itemVariants} style={textStyle} className="text-3xl md:text-6xl px-4">From landmark moments in 2024 and 2025</motion.h2>
          
          <motion.div variants={itemVariants} className="flex justify-center items-center py-2 md:py-4">
            <svg width="2" viewBox="0 0 1 219" fill="none" className="overflow-visible h-[120px] md:h-[219px]">
              <defs>
                <linearGradient id="lineGradient" x1="0.5" y1="0" x2="0.5" y2="219" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#634B19" />
                  <stop offset="0.5" stopColor="#F2B629" />
                  <stop offset="1" stopColor="#634B19" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.line x1="0.5" x2="0.5" y1="0" y2="219" stroke="url(#lineGradient)" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} />
            </svg>
          </motion.div>

          <motion.h2 variants={itemVariants} style={textStyle} className="text-3xl md:text-6xl px-4">Now, see what unfolds in 2026</motion.h2>

          <motion.div variants={itemVariants} className="flex justify-center items-center py-2 md:py-4">
            <svg width="2" viewBox="0 0 1 219" fill="none" className="overflow-visible h-[120px] md:h-[219px]">
              <motion.line x1="0.5" x2="0.5" y1="0" y2="219" stroke="url(#lineGradient)" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} />
            </svg>
          </motion.div>
        </div>
      </div>

      <motion.div variants={itemVariants} className="relative w-full min-h-[500px] md:h-screen flex flex-col items-center justify-start pb-20 overflow-visible">
        <div className="relative flex items-center justify-center w-full overflow-visible px-4 md:px-10">
          <div className="absolute left-8 md:left-24 z-[60]">
            <button onClick={() => paginate(-1)} className={arrowBtnClass}><ChevronLeft className="text-black w-full h-full" /></button>
          </div>

          <div className={`relative overflow-visible shrink-0 transition-all duration-300 ${isMobile ? "w-[340px] h-[470px]" : "w-full max-w-[340px] md:max-w-[1380px] h-[450px] md:h-[720px]"}`}>
            {images.map((img, index) => {
              const position = getPosition(index);
              return (
                <motion.div key={index} initial={false} animate={position} variants={cardVariants} style={{ willChange: "transform, opacity, filter" }} className="absolute top-0 left-0 w-full h-full bg-transparent">
                  <div className="w-full h-full rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] relative">
                    <Image src={img.src} alt={img.title} fill sizes="(max-width: 768px) 340px, (max-width: 1200px) 80vw, 70vw" className="object-cover" unoptimized={true} loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="absolute right-8 md:right-24 z-[60]">
            <button onClick={() => paginate(1)} className={arrowBtnClass}><ChevronRight className="text-black w-full h-full" /></button>
          </div>
        </div>

        <div className="mt-8 md:mt-12 z-50" style={indicatorContainerStyle}>
          {images.map((_, idx) => (
            <button key={idx} onClick={() => setPage(idx)} className={`h-1.5 md:h-2 transition-all duration-300 rounded-full cursor-pointer bg-white ${imageIndex === idx ? "w-6 md:w-8" : "w-1.5 md:w-2 opacity-50 md:opacity-100"}`} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Section3;