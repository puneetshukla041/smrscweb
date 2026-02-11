'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '../../components/Header'; 
import Footer from '../../components/footer'; 

export default function VisitLayout({ children }) {
  const pathname = usePathname();

  // Helper to check if a tab is active
  const isActive = (path) => pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-grow pt-24 pb-20 flex flex-col">
        
        {/* === 1. HERO IMAGE === */}
        <div className="w-full px-4 md:px-0 flex justify-center">
          
          {/* --- DESKTOP VIEW (Hidden on Mobile) --- */}
          <div 
            className="hidden md:block relative w-full max-w-[1693px] overflow-hidden shadow-2xl"
            style={{
               height: '833px', 
               borderRadius: '8px 200px', 
            }}
          >
            <Image
              src="/images/visit/hero.webp"
              alt="SMRSC Venue"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* --- MOBILE VIEW (Visible only on Mobile) --- */}
          <div className="md:hidden w-full flex justify-center mb-6">
              <div style={{ width: '350px', height: '476px', position: 'relative' }}>
                <Image
                  src="/images/visit/mobile.png"
                  alt="SMRSC Venue Mobile"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
          </div>

        </div>

        {/* === 2. NAVIGATION BUTTONS (Stays Constant) === */}
        <div className="w-full flex flex-wrap justify-start gap-[15px] mt-[40px] lg:mt-[150px] px-6 lg:pl-[270px] mb-12">
          {[
            { label: 'Venue', path: '/visit/venue' },
            { label: 'Hotels', path: '/visit/hotels' },
            { label: 'Tourism', path: '/visit/places' } 
          ].map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              style={{
                background: 'linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%)'
              }}
              className={`
                flex w-[150px] px-6 py-3 justify-center items-center gap-[10px] shrink-0
                rounded-[40px] border cursor-pointer
                text-sm font-semibold uppercase tracking-wider transition-all duration-300
                ${isActive(tab.path) 
                  ? 'border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                  : 'border-white/30 text-white/60 hover:text-white hover:bg-white/5'
                }
              `}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* === 3. DYNAMIC CONTENT (Changes based on file) === */}
        <div className="w-full">
          {children}
        </div>

      </main>

      <Footer />
    </div>
  );
}