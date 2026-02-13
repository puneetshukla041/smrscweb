'use client'
import React from 'react';
// REMOVED: import dynamic from 'next/dynamic'; <--- DELETE THIS LINE

import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';
import Section1 from '../../components/about/Section1';

// CHANGED: Direct import instead of dynamic. 
// This bundles the code together so it's ready instantly.
import Section2 from '../../components/about/Section2'; 

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