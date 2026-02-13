'use client'
import React from 'react';
import dynamic from 'next/dynamic';

// 👇 FIX: Use '../../' to go back 2 levels (from home -> app -> root)
import BackgroundPreloader from '../../components/common/BackgroundPreloader'; 
import MasterLoader from '../../components/common/MasterLoader'; 

// Static Imports
import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';
import Section1 from '../../components/home/Section1';

// Lazy Load Home Sections (Also update these paths)
const Section2 = dynamic(() => import('../../components/home/Section2'));
const Section3 = dynamic(() => import('../../components/home/Section3'));
const Section4 = dynamic(() => import('../../components/home/Section4'));
const Section5 = dynamic(() => import('../../components/home/Section5'));
const Section6 = dynamic(() => import('../../components/home/Section6'));

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      {/* 👇 2. ACTIVATE ENGINES */}
      <BackgroundPreloader /> 
      <MasterLoader /> 

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