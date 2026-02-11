"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Section2 = () => {
  // --- RESPONSIVE STATE ---
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768; // Mobile & Small Tablets
  const isLaptop = windowWidth >= 768 && windowWidth < 1440; // Laptops

  // --- CARDS DATA ---
  const cards = [
    { id: 1, img: "/images/home/section2/image1.webp", x: -500, y: 100 },
    { id: 2, img: "/images/home/section2/image2.webp", x: -180, y: -180 },
    { id: 3, img: "/images/home/section2/image3.webp", x: 180, y: -180 },
    { id: 4, img: "/images/home/section2/image4.webp", x: 500, y: 100 },
  ];

  // --- STYLES ---
  const titleStyle = {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: '"Blauer Nue", sans-serif',
    // Font size handled via Tailwind classes for responsiveness
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.704px',
    textTransform: 'capitalize',
  };

  // --- ANIMATION VARIANTS ---

  const entranceVariants = {
    hidden: { x: 0, y: 0, scale: 0.4, opacity: 0 },
    visible: (i) => {
      // Logic: If mobile, positions are 0 (handled by CSS Grid).
      // If laptop, scale down coordinates to fit screen.
      // If desktop, use original coordinates.
      
      let targetX = cards[i].x;
      let targetY = cards[i].y;

      if (isMobile) {
        targetX = 0;
        targetY = 0;
      } else if (isLaptop) {
        targetX = targetX * 0.7; // Shrink spread by 30% for laptops
        targetY = targetY * 0.7;
      }

      return {
        x: targetX,
        y: targetY,
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 45,
          damping: 14,
          mass: 1.2,
          delay: i * 0.1,
        }
      };
    }
  };

  const floatVariants = {
    float: (i) => ({
      // Reduced float distance on mobile to prevent layout shift issues
      y: isMobile ? [0, -6, 0] : [0, -12, 0],
      transition: {
        delay: 0.8 + (i * 0.2),
        duration: 3.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }
    })
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.3,
      }
    }
  };

  return (
    // UPDATED: bg-transparent allows global CSS background to show through. 
    // Removed specific background glow div.
    <section className="relative w-full min-h-screen flex flex-col md:justify-center items-center overflow-hidden bg-transparent py-20 md:py-0">

      {/* BACKGROUND GLOW REMOVED */}

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">

        {/* --- TITLE (Moved above cards for Mobile flow, Positioned absolutely for Desktop) --- */}
        <motion.div
          style={titleStyle}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          // RESPONSIVE CLASSES:
          // Mobile: standard block, text-4xl, margin-bottom
          // Desktop: absolute positioning restored, text-6xl, top margin restored
          className="relative order-1 md:absolute md:order-none z-30 select-none text-4xl sm:text-5xl lg:text-[64px] mb-12 md:mb-0 md:mt-[350px]"
        >
          Clinical Outcomes
        </motion.div>

        {/* --- DATA CARDS WRAPPER --- */}
        {/* Mobile: Grid Layout | Desktop: Absolute Layout */}
        <div className="relative order-2 md:order-none md:absolute inset-0 flex flex-col md:block items-center justify-center pointer-events-none">
          
          {/* Mobile Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:block w-full max-w-4xl px-6 md:px-0">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                custom={i}
                variants={entranceVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                style={{
                  // Desktop fixed size vs Mobile fluid size
                  width: isMobile ? '100%' : '272px',
                  height: isMobile ? 'auto' : '224px',
                  aspectRatio: isMobile ? '272/224' : 'auto',
                  // Only apply absolute positioning on non-mobile
                  position: isMobile ? 'relative' : 'absolute',
                  // Center the absolute elements on desktop so coordinates work from center
                  left: isMobile ? 'auto' : 'calc(50% - 136px)', // 136 is half of width
                  top: isMobile ? 'auto' : 'calc(50% - 112px)',  // 112 is half of height
                  zIndex: 20,
                }}
                className="flex items-center justify-center pointer-events-auto mx-auto"
              >
                {/* Floating Wrapper */}
                <motion.div
                  custom={i}
                  animate="float"
                  variants={floatVariants}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src={card.img}
                    alt={`Clinical Outcome ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    className="select-none pointer-events-none"
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section2;