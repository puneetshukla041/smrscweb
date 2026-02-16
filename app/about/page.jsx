'use client'
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';
import Section1 from '../../components/about/Section1';

// 👇 FIX: Dynamically import Section2 so clicking the header link is INSTANT
const Section2 = dynamic(() => import('../../components/about/Section2'));

export default function AboutPage() {
  
  // 👇 BACKGROUND PRELOADER LOGIC
  useEffect(() => {
    const preloadBackgroundAssets = async () => {
      // Pre-fetch the heavy Section2 code
      await import('../../components/about/Section2');
      
      // List of heavy images to silently cache in the background
      const assetsToPreload = [
        "/images/about/section2/image1.webp", "/images/about/section2/image2.webp", 
        "/images/about/section2/image3.webp", "/images/about/section2/image4.webp",
        "/images/about/benifit/image1.webp", "/images/about/benifit/image2.webp", 
        "/images/about/benifit/image3.webp", "/images/about/benifit/image4.webp",
        "/images/about/committe/sudhir.png", "/images/about/committe/krawal.png", 
        "/images/about/committe/somash.png", "/images/about/committe/vishwa.png"
      ];

      // Delay by 800ms to guarantee Section 1 gets 100% of the internet connection first
      setTimeout(() => {
        assetsToPreload.forEach((src) => {
          const img = new window.Image();
          img.src = src; 
        });
      }, 800); 
    };

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
        {/* Render Section1 immediately for instant page transition */}
        <Section1 />
        
        {/* Section2 loads dynamically in the background */}
        <Section2 />
      </main>
      <Footer />
    </div>
  );
}