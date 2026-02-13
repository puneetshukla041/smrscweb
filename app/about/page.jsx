'use client'
import React from 'react';
import dynamic from 'next/dynamic';

import Header from '../../components/Header';
import Footer from '../../components/footer';
import Section1 from '../../components/about/Section1';

// Lazy load the second section
const Section2 = dynamic(() => import('../../components/about/Section2'));

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Section1 />
        <Section2 />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;