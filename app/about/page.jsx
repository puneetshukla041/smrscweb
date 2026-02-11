
'use client'
import React from 'react';

// ✅ FIXED: Using relative paths and Capitalized names
import Header from '../../components/Header';
import Footer from '../../components/footer';

// ✅ FIXED: Importing from lowercase 'about' folder to match the file I gave you
import Section1 from '../../components/about/Section1';
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


