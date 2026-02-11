'use client'
import React from 'react';

// 👇 CHANGED: Using relative paths (../../) instead of alias (@)
import Header from '../../components/Header';
import Footer from '../../components/footer';

// Importing sections
import Section1 from '../../components/home/Section1';
import Section2 from '../../components/home/Section2';
import Section3 from '../../components/home/Section3';
import Section4 from '../../components/home/Section4';
import Section5 from '../../components/home/Section5';
import Section6 from '../../components/home/Section6';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Section1 />

        {/* This wrapper hides Section 2 on mobile (hidden) 
            and shows it on medium screens and up (md:block) */}
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