'use client'
import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';
import Section1 from '../../components/about/Section1';
import Section2 from '../../components/about/Section2'; // Direct Import

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      <main className="flex-grow">
        {/* Render both sections immediately */}
        <Section1 />
        <Section2 />
      </main>
      <Footer />
    </div>
  );
}