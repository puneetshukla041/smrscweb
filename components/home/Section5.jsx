"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Section5 = () => {
  // ==================== PART 1 DATA (GRID) ====================
  const specialties = [
    { id: 1, title: "Cardiac", count: "400+" },
    { id: 2, title: "Urology", count: "2100+" },
    { id: 8, title: "General", count: "3500+" },
    { id: 3, title: "Thoracic", count: "70+" },
    { id: 4, title: "Gastroenterology", count: "200+" },
    { id: 5, title: "Head & Neck", count: "100+" },
    { id: 6, title: "Gynecology", count: "1300+" },
    { id: 7, title: "Colorectal", count: "450+" },
  ];

  // --- Mobile Grid Animation State ---
  const [mobileShowCount, setMobileShowCount] = useState(false);

  useEffect(() => {
    // Toggle between Text and Number every 3 seconds
    const interval = setInterval(() => {
      setMobileShowCount((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ==================== PART 2 DATA & LOGIC (CAROUSEL) ====================
  const [page, setPage] = useState(0);

  // UPDATED: Added 'mobileSrc' for the specific mobile images
  const images = [
    { 
      id: 1, 
      src: "/images/home/section5/image1.webp", 
      mobileSrc: "/images/home/section5/mob1.png", 
      title: "SSI Mantra 3" 
    },
    { 
      id: 2, 
      src: "/images/home/section5/image2.webp", 
      mobileSrc: "/images/home/section5/mob2.png", 
      title: "Advanced Robotics" 
    },
    { 
      id: 3, 
      src: "/images/home/section5/image3.webp", 
      mobileSrc: "/images/home/section5/mob3.png", 
      title: "Precision Control" 
    },
    { 
      id: 4, 
      src: "/images/home/section5/image4.webp", 
      mobileSrc: "/images/home/section5/mob4.png", 
      title: "Future of Surgery" 
    },
  ];

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage(page + newDirection);
  };

  // --- Auto-Scrolling Effect (Carousel) ---
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 3000); 

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

  // --- Carousel Animation Variants ---
  const springTransition = {
    type: "spring",
    stiffness: 260,
    damping: 30,
  };

  const cardVariants = {
    center: {
      x: "0%",
      scale: 1,
      zIndex: 30,
      opacity: 1,
      filter: "brightness(1)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.2 },
        filter: { duration: 0.2 }
      }
    },
    left: {
      x: "-105%", 
      scale: 1,
      zIndex: 20,
      opacity: 1,
      filter: "brightness(0.4)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 }
      }
    },
    right: {
      x: "105%", 
      scale: 1,
      zIndex: 20,
      opacity: 1,
      filter: "brightness(0.4)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.4 },
        filter: { duration: 0.4 }
      }
    },
    "far-left": {
      x: "-180%",
      scale: 0.8,
      zIndex: 1,
      opacity: 0,
      filter: "brightness(0)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.1 }
      } 
    },
    "far-right": {
      x: "180%",
      scale: 0.8,
      zIndex: 1,
      opacity: 0,
      filter: "brightness(0)",
      transition: {
        x: springTransition,
        scale: springTransition,
        opacity: { duration: 0.1 }
      }
    }
  };

  const textVariants = {
    center: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.6, ease: "easeOut" }
    },
    left: { y: 30, opacity: 0 },
    right: { y: 30, opacity: 0 },
    "far-left": { y: 30, opacity: 0 },
    "far-right": { y: 30, opacity: 0 },
  };

  // --- STYLES ---
  const gridCardStyle = {
    height: '140px',
    borderRadius: '20px',
    border: '1px solid #5B6D6E',
    background: 'rgba(9, 9, 9, 0.40)',
    position: 'relative', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  };

  const gridCardTextStyle = {
    color: '#E3F5F6',
    textAlign: 'center',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px', 
  };

  const carouselFixedHeadingStyle = {
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontStyle: 'normal',
    fontWeight: '500',
    position: 'absolute',
    left: '0px',
    zIndex: 40,
    whiteSpace: 'nowrap',
  };

  const indicatorContainerStyle = {
    display: 'inline-flex',
    padding: '0.75rem 1.125rem',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '1.25rem',
    background: 'rgba(227, 245, 246, 0.70)',
    boxShadow: '0 1px 2px 0 rgba(255, 255, 255, 0.25) inset',
    backdropFilter: 'blur(4px)', 
  };

  const arrowBtnStyle = {
    display: 'flex',
    width: '48px',
    height: '48px',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '100px',
    background: '#FFF',
    border: 'none',
    cursor: 'pointer',
    zIndex: 60,
    transition: 'transform 0.2s ease',
  };

  return (
    <section 
      id="section5"
      className="w-full bg-[#020617]"
    >
      <style jsx global>{`
        @font-face {
          font-family: 'Blauer Nue';
          src: url('/fonts/BlauerNue.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      {/* ==================== PART 1: GRID CONTENT ==================== */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-6">
        <div className="max-w-[1380px] w-full flex flex-col gap-12">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[28px] leading-tight lg:text-[36px] lg:leading-[40px]"
            style={{ 
                color: '#F8FFFF',
                fontFamily: '"Blauer Nue", sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
            }}
          >
            Robotic surgery Across Specialties
          </motion.h2>

          <div className="flex flex-wrap justify-center xl:justify-start gap-6">
            {specialties.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                style={gridCardStyle}
                className="group w-full max-w-[420px]" 
              >
                <span 
                  style={gridCardTextStyle}
                  className={`
                    transition-opacity duration-300
                    ${mobileShowCount ? 'opacity-0' : 'opacity-100'} 
                    lg:opacity-100 lg:group-hover:opacity-0
                  `}
                >
                  {item.title}
                </span>

                <span 
                  style={gridCardTextStyle}
                  className={`
                    absolute inset-0 flex items-center justify-center transition-opacity duration-300
                    ${mobileShowCount ? 'opacity-100' : 'opacity-0'}
                    lg:opacity-0 lg:group-hover:opacity-100
                  `}
                >
                  {item.count}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== PART 2: CAROUSEL CONTENT ==================== */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
        
        <div className="relative w-full flex flex-col items-center justify-center">
          
          <div className="relative flex flex-col lg:flex-row items-center justify-center w-full gap-8">
            
            {/* Left Arrow */}
            <div className="z-[60] absolute left-0 lg:static top-1/2 -translate-y-1/2 lg:translate-y-0"> 
              <button 
                onClick={() => paginate(-1)} 
                style={arrowBtnStyle}
                className="hover:scale-110 active:scale-95 shadow-lg"
              >
                <ChevronLeft className="text-black w-6 h-6" />
              </button>
            </div>

            {/* Slider Frame */}
            {/* UPDATED: Applied strict mobile dimensions 339x470 */}
            <div 
              className="relative overflow-visible shrink-0 w-[339px] h-[470px] lg:w-[1380px] lg:h-[720px]"
            >
              {images.map((img, index) => {
                const position = getPosition(index);

                return (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={position}
                    variants={cardVariants}
                    style={{ willChange: "transform, opacity, filter" }}
                    className="absolute top-0 left-0 w-full h-full bg-transparent"
                  >
                    {/* Fixed Heading */}
                    <motion.div 
                      variants={textVariants} 
                      style={carouselFixedHeadingStyle}
                      className="text-[24px] leading-none lg:text-[36px] lg:leading-[40px] -top-[40px] lg:-top-[60px]"
                    >
                      Highlights from 2025
                    </motion.div>

                    {/* Inner Container */}
                    <div className="w-full h-full rounded-[20px] lg:rounded-[40px] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] relative">
                      
                      {/* DESKTOP IMAGE (Hidden on mobile) */}
                      <Image 
                        src={img.src} 
                        alt={img.title}
                        fill
                        sizes="1380px"
                        priority={position === "center"}
                        className="object-cover hidden lg:block"
                      />

                      {/* MOBILE IMAGE (Hidden on desktop) */}
                      <Image 
                        src={img.mobileSrc} 
                        alt={img.title}
                        fill
                        sizes="339px"
                        priority={position === "center"}
                        className="object-cover block lg:hidden"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <div className="z-[60] absolute right-0 lg:static top-1/2 -translate-y-1/2 lg:translate-y-0">
              <button 
                onClick={() => paginate(1)} 
                style={arrowBtnStyle}
                className="hover:scale-110 active:scale-95 shadow-lg"
              >
                <ChevronRight className="text-black w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex mt-8 lg:mt-12 z-50" style={indicatorContainerStyle}>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer bg-white ${
                  imageIndex === idx ? "w-8" : "w-2 opacity-100"
                }`}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default Section5;