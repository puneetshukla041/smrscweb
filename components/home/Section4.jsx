"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// 2. Create MotionLink
const MotionLink = motion(Link);

const Section4 = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sudhir Srivastava",
      role: "Founder, Chairman and CEO SS Innovations, INDIA",
      image: "/images/home/section4/image1.webp"
    },
    {
      id: 2,
      name: "Dr. Husam Balkhy",
      role: "The University of Chicago Medicine and Biological Sciences Chicago, USA",
      image: "/images/home/section4/image2.webp"
    },
    {
      id: 3,
      name: "Dr. Valluvan Jeevanandam",
      role: "The University of Chicago Medicine and Biological Sciences Chicago, USA",
      image: "/images/home/section4/image3.webp"
    },
    {
      id: 4,
      name: "Dr. T Sloane Guy",
      role: "Georgia Heart Institute, Gainesville, GA, USA",
      image: "/images/home/section4/image4.webp"
    }
  ];

  // --- Mobile Scroll Logic ---
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active dot on scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.firstChild.offsetWidth; 
      // Calculate index based on scroll position + gap offset
      const newIndex = Math.round(scrollLeft / (cardWidth + 32)); // 32 is roughly the gap size
      setActiveIndex(newIndex);
    }
  };

  // Scroll to specific dot click
  const scrollTo = (index) => {
    if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild.offsetWidth;
        scrollRef.current.scrollTo({
            left: index * (cardWidth + 32), 
            behavior: 'smooth'
        });
        setActiveIndex(index);
    }
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // --- Styles ---
  const facultyHeadingStyle = {
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
  };

  const cardImageStyle = {
    aspectRatio: '20/23',
  };

  const docNameStyle = {
    color: '#FFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '1.5rem', 
  };

  const docDescStyle = {
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '1rem', 
    opacity: 0.8,
  };

  return (
    <motion.section
      id="section4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }} 
      variants={containerVariants}
      className="min-h-screen h-auto md:h-[130vh] w-full bg-[#020617] flex flex-col items-center justify-start md:justify-between py-16 md:pt-20 md:pb-20 px-6 gap-12 md:gap-0"
    >
      
      {/* --- TOP: Headings --- */}
      <motion.div 
        variants={itemVariants}
        className="max-w-[1380px] w-full flex flex-col gap-4 md:gap-2 text-center md:text-left"
      >
        <h3
          style={{
            color: '#E6E6E6',
            fontFamily: 'Manrope, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
          }}
          className="text-[20px] leading-[28px] md:text-[32px] md:leading-[32px] flex flex-col justify-center"
        >
          A movement that started with a vision is now reshaping
        </h3>

        <h2
          style={{
            color: '#E3F5F6',
            fontFamily: '"Blauer Nue", sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
          }}
          className="uppercase tracking-tight text-[32px] leading-[40px] md:text-[64px] md:leading-[86px]"
        >
          THE FUTURE OF ROBOTIC SURGERY
        </h2>
      </motion.div>

      {/* --- BOTTOM: Faculty Section --- */}
      <div className="max-w-[1380px] w-full flex flex-col gap-8 md:gap-10 items-center md:items-stretch">
        
        {/* Heading */}
        <motion.h4 
          variants={itemVariants} 
          style={facultyHeadingStyle}
          className="text-[2rem] leading-[2.5rem] md:text-[2.25rem] md:leading-[2.5rem] self-start"
        >
          Our Faculty
        </motion.h4>

        {/* Cards Grid / Scroll Container 
            UPDATED: Added 'overflow-x-auto', 'snap-x', 'flex-nowrap' for mobile 
            and 'scrollbar-hide' to make it look clean.
        */}
        <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:flex-wrap flex-nowrap overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide justify-start md:justify-between gap-8 w-full pb-4 md:pb-0"
        >
          {facultyMembers.map((member) => (
            <motion.div 
              key={member.id} 
              variants={itemVariants}
              className="flex flex-col gap-4 group cursor-pointer items-center md:items-start shrink-0 snap-center"
            >
              
              {/* Image Container */}
              <div 
                style={cardImageStyle} 
                className="relative rounded-[32px] overflow-hidden bg-gray-800 w-[280px] md:w-[20rem] h-[322px] md:h-[23rem]"
              >
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className={`object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
                    (member.id === 1 || member.id === 2) ? 'scale-110' : ''
                  }`}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1 w-full max-w-[280px] md:max-w-[20rem] text-center md:text-left">
                <h5 style={docNameStyle}>
                  {member.name}
                </h5>
                <p style={docDescStyle}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE ONLY: DOTS NAVIGATION --- */}
        <div className="flex md:hidden justify-center gap-2 mt-2">
            {facultyMembers.map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index ? 'w-8 bg-white' : 'w-2 bg-white/40'
                    }`}
                    aria-label={`Go to faculty member ${index + 1}`}
                />
            ))}
        </div>

        {/* View All Button */}
        <motion.div 
          variants={itemVariants} 
          className="flex justify-center mt-4 md:mt-8"
        >
          <MotionLink 
            href="/about#faculty" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full hover:bg-gray-200 transition-colors cursor-pointer active:scale-95 no-underline"
          >
            <span className="text-[#020617] font-medium font-['Manrope'] text-sm">View all Faculty</span>
            <ArrowRight className="text-[#020617] w-4 h-4" />
          </MotionLink>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Section4;