'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Added for redirection

const Overview = () => {
  const router = useRouter(); // Initialize router

  // --- Carousel State & Logic ---
  const [page, setPage] = useState(0);

  const images = [
    { id: 1, src: "/images/explore/image1.webp", title: "Experience 1" },
    { id: 2, src: "/images/explore/image2.webp", title: "Experience 2" },
    { id: 3, src: "/images/explore/image3.webp", title: "Experience 3" },
    { id: 4, src: "/images/explore/image4.webp", title: "Experience 4" },
    { id: 5, src: "/images/explore/image5.webp", title: "Experience 5" },
    { id: 6, src: "/images/explore/image6.webp", title: "Experience 6" },
  ];

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage(page + newDirection);
  };

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

  // --- Navigation Handler ---
  const handleNavigation = (tab) => {
    router.push(`/explore?tab=${tab}`, { scroll: false });
  };

  // --- Animation Variants ---
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

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
      transition: { 
        delay: 0.2, 
        duration: 0.6, 
        ease: "easeOut" 
      }
    },
    left: { y: 30, opacity: 0 },
    right: { y: 30, opacity: 0 },
    "far-left": { y: 30, opacity: 0 },
    "far-right": { y: 30, opacity: 0 },
  };

  // --- Styles ---
  const arrowBtnClass = "flex w-[40px] md:w-[48px] h-[40px] md:h-[48px] p-[8px] md:p-[10px] justify-center items-center gap-[10px] rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10 shrink-0 z-50 active:scale-95 cursor-pointer";

  const cardLabelStyle = {
    color: '#E1C583',
    textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '2.25rem', 
    position: 'absolute',
    top: '-40px',
    left: '0px',
    zIndex: 40,
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

  const dayHeadingStyle = {
    width: '100%',
    maxWidth: '408px',
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
  };

  const dayParaStyle = {
    width: '100%',
    maxWidth: '445px',
    color: '#E3F5F6',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
    marginTop: '16px',
    marginBottom: '32px',
  };

  const viewBtnStyle = {
    display: 'flex',
    width: '144px',
    padding: '12px 24px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '40px',
    border: '1px solid #2A3A3B',
    background: '#E3F5F6',
    backdropFilter: 'blur(21px)',
    color: '#020617', 
    fontWeight: 600,
    fontSize: '14px',
    fontFamily: 'Manrope, sans-serif',
    cursor: 'pointer',
  };

  const calendarBtnStyle = {
    display: 'flex',
    width: '162px',
    padding: '12px 24px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '40px',
    border: '1px solid #E3F5F6',
    backdropFilter: 'blur(21px)',
    background: 'transparent',
    color: '#E3F5F6',
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'Manrope, sans-serif',
    cursor: 'pointer',
  };

  return (
    <div className="w-full max-w-[100vw] flex flex-col items-center animate-fadeIn overflow-x-hidden">
      
      {/* 1. Top Text Section */}
      <div className="w-full max-w-[1380px] px-4 md:px-0 flex flex-col">
         <p className="text-[#E3F5F6] font-manrope text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[40px]">
           SMRSC 2026 brings together live surgery, innovation, and global expertise across three focused days. Explore the experiences, sessions, and programs that define the conference.
         </p>

         <h2 
           className="mt-20 md:mt-[265px] mb-8"
           style={{
             width: '100%',
             maxWidth: '468px',
             color: '#F8FFFF',
             fontFamily: '"Blauer Nue", sans-serif',
             fontSize: '36px',
             fontStyle: 'normal',
             fontWeight: 500,
             lineHeight: '40px',
           }}
         >
            What Awaits You
         </h2>
      </div>

      {/* 2. Carousel Section */}
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full min-h-[500px] md:h-screen flex flex-col items-center justify-start pb-20 overflow-visible"
      >
        <div className="relative flex items-center justify-center w-full overflow-visible px-4 md:px-10">
          
          <div className="absolute left-2 md:left-10 z-[60]">
            <button onClick={() => paginate(-1)} className={arrowBtnClass}>
              <ChevronLeft className="text-white w-full h-full" />
            </button>
          </div>

          <div 
            className="relative overflow-visible shrink-0 w-full max-w-[340px] md:max-w-[1380px] h-[450px] md:h-[720px]"
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
                  <motion.div 
                    variants={textVariants} 
                    style={cardLabelStyle}
                    className="text-sm md:text-base -top-[30px] md:-top-[50px]"
                  >
                    Experience Zone
                  </motion.div>

                  <div className="w-full h-full rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] relative">
                    <img 
                      src={img.src} 
                      alt={img.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="absolute right-2 md:right-10 z-[60]">
            <button onClick={() => paginate(1)} className={arrowBtnClass}>
              <ChevronRight className="text-white w-full h-full" />
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-12 z-50" style={indicatorContainerStyle}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx)}
              className={`h-1.5 md:h-2 transition-all duration-300 rounded-full cursor-pointer bg-white ${
                imageIndex === idx ? "w-6 md:w-8" : "w-1.5 md:w-2 opacity-50 md:opacity-100"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* 3. Bottom Section */}
      <div 
        className="w-full flex flex-col items-center justify-center max-w-[1380px] px-4 md:px-0 mt-20 md:mt-[230px]"
      >
        <div 
          className="w-full flex flex-col items-start mb-20 md:mb-[350px]" 
        >
          <div 
            style={{
              display: 'flex',
              width: '100%',
              maxWidth: '1380px',
              height: '47px',
              flexDirection: 'column',
              justifyContent: 'center',
              color: '#E6E6E6',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '32px',
            }}
          >
            Three days....
          </div>
          <div 
            className="text-[32px] leading-[40px] md:text-[64px] md:leading-[86px]"
            style={{
              color: '#E3F5F6',
              fontFamily: '"Blauer Nue", sans-serif',
              fontStyle: 'normal',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            INFINITE POSSIBILITIES.
          </div>
        </div>

        {/* DAY 1 CARD */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-[80px] mb-20 md:mb-[200px]">
           <div className="shrink-0 w-full md:w-[810px] h-[300px] md:h-[489px] relative rounded-[24px] overflow-hidden">
             <img 
               src="/images/explore/image7.webp" 
               alt="Day 1 Science" 
               className="absolute inset-0 w-full h-full object-cover"
             />
           </div>
           
           <div className="flex flex-col items-start justify-center w-full max-w-[445px]">
             <h3 className="text-[28px] leading-[32px] md:text-[36px] md:leading-[40px]" style={dayHeadingStyle}>
               Day 1 - Science, Insight & Discussion
             </h3>
             <p style={dayParaStyle}>
               Live robotic surgeries across multiple specialties offer real-time clinical insight. Innovation showcases highlight telesurgery, robotic platforms, and advanced instruments in action.
             </p>
             <div className="flex flex-wrap items-center gap-4">
                 <button style={viewBtnStyle} onClick={() => handleNavigation('day1')}>View Day 1</button>
                 <button style={calendarBtnStyle}>Add to Calendar</button>
             </div>
           </div>
        </div>

        {/* DAY 2 CARD */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-[80px] mb-20 md:mb-[200px]">
           <div className="shrink-0 w-full md:w-[810px] h-[300px] md:h-[489px] relative rounded-[24px] overflow-hidden">
             <img 
               src="/images/explore/image8.webp" 
               alt="Day 2 Live Surgery" 
               className="absolute inset-0 w-full h-full object-cover"
             />
           </div>
           
           <div className="flex flex-col items-start justify-center w-full max-w-[445px]">
             <h3 className="text-[28px] leading-[32px] md:text-[36px] md:leading-[40px]" style={dayHeadingStyle}>
               Day 2 - Live Surgery & Hands-On Experience
             </h3>
             <p style={dayParaStyle}>
               Advanced techniques and training pathways take focus through structured sessions. Hands-on learning via workshops and simulations is paired with discussions on the future of connected robotic surgery.
             </p>
             <div className="flex flex-wrap items-center gap-4">
                 <button style={viewBtnStyle} onClick={() => handleNavigation('day2')}>View Day 2</button>
                 <button style={calendarBtnStyle}>Add to Calendar</button>
             </div>
           </div>
        </div>
{/* DAY 3 CARD */}
<div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-[80px] mb-20">
   <div className="shrink-0 w-full md:w-[810px] h-[300px] md:h-[489px] relative rounded-[24px] overflow-hidden">
     {/* Make sure this image exists or use a placeholder */}
     <img 
       src="/images/explore/image9.webp" 
       alt="Day 3 Workshops" 
       className="absolute inset-0 w-full h-full object-cover"
     />
   </div>
   
   <div className="flex flex-col items-start justify-center w-full max-w-[445px]">
     <h3 className="text-[28px] leading-[32px] md:text-[36px] md:leading-[40px]" style={dayHeadingStyle}>
       Day 3 - Workshops & Masterclasses
     </h3>
     <p style={dayParaStyle}>
       Intensive dry-lab sessions, masterclasses on complex suturing, and deep-dives into future technologies.
     </p>
     <div className="flex flex-wrap items-center gap-4">
         <button style={viewBtnStyle} onClick={() => handleNavigation('day3')}>View Day 3</button>
         <button style={calendarBtnStyle}>Add to Calendar</button>
     </div>
   </div>
</div>
      </div>
    </div>
  );
};

export default Overview;