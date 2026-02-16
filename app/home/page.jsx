'use client'
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Static Imports (Highest Priority)
import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';
import Section1 from '../../components/home/Section1';

// Lazy Load Home Sections
const Section2 = dynamic(() => import('../../components/home/Section2'));
const Section3 = dynamic(() => import('../../components/home/Section3'));
const Section4 = dynamic(() => import('../../components/home/Section4'));
const Section5 = dynamic(() => import('../../components/home/Section5'));
const Section6 = dynamic(() => import('../../components/home/Section6'));

const HomePage = () => {
  // 👇 THE SILENT BACKGROUND ASSET PRELOADER
  useEffect(() => {
    const preloadBackgroundAssets = () => {
      // List of every single image URL in Sections 2 through 6
      const assetsToPreload = [
        // Section 2
        "/images/home/section2/image1.webp", "/images/home/section2/image2.webp", "/images/home/section2/image3.webp", "/images/home/section2/image4.webp",
        // Section 3 (Desktop & Mobile)
        "/images/home/section3/image1.webp", "/images/home/section3/image2.webp", "/images/home/section3/image3.webp", "/images/home/section3/image5.webp", "/images/home/section3/image6.webp",
        "/images/home/section3/mob1.webp", "/images/home/section3/mob2.webp", "/images/home/section3/mob3.webp", "/images/home/section3/mob4.webp", "/images/home/section3/mob5.webp",
        // Section 4
        "/images/home/section4/image1.webp", "/images/home/section4/image2.webp", "/images/home/section4/image3.webp", "/images/home/section4/image4.webp",
        // Section 5 (Desktop & Mobile)
        "/images/home/section5/image1.webp", "/images/home/section5/image2.webp", "/images/home/section5/image3.webp", "/images/home/section5/image4.webp",
        "/images/home/section5/mob1.webp", "/images/home/section5/mob2.webp", "/images/home/section5/mob3.webp", "/images/home/section5/mob4.webp",
        // Section 6 (Desktop & Mobile)
        "/images/home/section6/image1.webp", "/images/home/section6/mobile.webp"
      ];

      // Delay by 800ms to guarantee Section 1 gets 100% of the internet connection first
      setTimeout(() => {
        assetsToPreload.forEach((src) => {
          const img = new window.Image();
          img.src = src; // This forces the browser to silently download and cache the image
        });
      }, 800); 
    };

    // Trigger the preloader ONLY after the initial page (Section 1) has fully loaded
    if (document.readyState === 'complete') {
      preloadBackgroundAssets();
    } else {
      window.addEventListener('load', preloadBackgroundAssets);
      return () => window.removeEventListener('load', preloadBackgroundAssets);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-grow">
        <Section1 />

        <div className="hidden md:block">
          <Section2 />
        </div>

        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;