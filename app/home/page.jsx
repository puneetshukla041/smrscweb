'use client'
import React from 'react';
import dynamic from 'next/dynamic'; 

// 👇 1. IMPORT THE ALGORITHM (The "Silent Downloader")
// Ensure this path matches where you created the file. 
// If your file is in 'components/BackgroundPreloader.jsx', this path is correct.
import BackgroundPreloader from '../../components/BackgroundPreloader';

// Static Imports (Load immediately for LCP)
import Header from '../../components/Header';
import Footer from '../../components/footer';
import Section1 from '../../components/home/Section1';

// 2. Lazy Load Sections (Load in background)
const Section2 = dynamic(() => import('../../components/home/Section2'));
const Section3 = dynamic(() => import('../../components/home/Section3'));
const Section4 = dynamic(() => import('../../components/home/Section4'));
const Section5 = dynamic(() => import('../../components/home/Section5'));
const Section6 = dynamic(() => import('../../components/home/Section6'));

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 👇 3. ACTIVATE THE ALGORITHM HERE 
          It triggers the 3.5s timer to start downloading everything else silently. */}
      <BackgroundPreloader />

      <Header />
      
      <main className="flex-grow">
        <Section1 />

        {/* Section 2: Hidden on mobile, lazy loaded */}
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