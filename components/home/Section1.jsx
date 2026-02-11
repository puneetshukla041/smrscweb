"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Section1 = () => {
  // --- BUTTON STYLES ---
  const buttonContainerStyle = {
    display: "flex",
    width: "236px",
    height: "51px",
    padding: "12px 24px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "40px",
    border: "1px solid #FFF",
    background:
      "linear-gradient(180deg, #E5B648 0%, #C8890C 100%), radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.20) 100%)",
    backdropFilter: "blur(21px)",
    cursor: "pointer",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
    textDecoration: "none",
  };

  const buttonTextStyle = {
    color: "#FFF",
    fontFamily: "Manrope, sans-serif",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "20px",
    whiteSpace: "nowrap",
  };

  return (
    // Base Section with consistent vertical padding for all screens
    <section className="relative w-full flex justify-center items-center overflow-x-clip bg-[#02091A] pt-24 pb-12 md:pt-32 md:pb-20">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap');
      `}</style>

      {/* Cinematic glow background */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-0 pointer-events-none"
        style={{
          width: "70%",
          height: "100%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0, 186, 254, 0.5)",
          filter: "blur(250px)",
          borderRadius: "100%",
        }}
      />

      {/* --- DESKTOP, LAPTOP & TABLET VIEW --- */}
      {/* 1. w-full max-w-[1440px]: Fills screen but caps at 1440px for super-wide screens.
          2. mx-auto: Centers the container.
          3. px-4 md:px-8: Adds safe zones on sides.
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 hidden md:flex justify-center items-center"
      >
        <div
          // This ensures the box ALWAYS maintains the image's aspect ratio.
          // It will shrink/grow fluidly based on the width of the screen.
          className="relative w-full"
          style={{
            aspectRatio: "1693 / 861",
          }}
        >
          <Image
            src="/images/home/section1/image2.webp"
            alt="SMRSC 2026 Hero"
            fill
            priority
            style={{ objectFit: "contain" }}
          />

          <MotionLink
            href="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={buttonContainerStyle}
            // Positioned relatively to the image container
            // left-1/2 -translate-x-1/2 centers it perfectly horizontally
            className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-20 origin-center scale-90 lg:scale-100"
          >
            <span style={buttonTextStyle}>Register Now</span>
          </MotionLink>
        </div>
      </motion.div>

      {/* --- MOBILE VIEW (UNCHANGED) --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full flex md:hidden justify-center px-6"
      >
        <div
          style={{
            width: "350px",
            height: "592px",
            aspectRatio: "81 / 137",
            borderRadius: "4px 100px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          className="relative flex justify-center shadow-2xl"
        >
          <Image
            src="/images/home/section1/mobileimg.png"
            alt="SMRSC 2026 Hero Mobile"
            fill
            priority
            style={{ objectFit: "cover" }}
          />

          <MotionLink
            href="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ ...buttonContainerStyle, width: "200px", height: "45px" }}
            className="absolute bottom-[8%] z-20"
          >
            <span style={{ ...buttonTextStyle, fontSize: "18px" }}>
              Register Now
            </span>
          </MotionLink>
        </div>
      </motion.div>
    </section>
  );
};

export default Section1;