'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const allRoutes = [
  '/about', '/explore', '/media', '/visit/venue', 
  '/visit/hotels', '/visit/places', '/pastevents', 
  '/register', '/contactus'
];

// MASSIVE ASSET LIST - Forces browser to download these immediately
const heavyAssets = [
  // --- ABOUT: SECTION 1 & 2 ---
  '/images/about/section1/img1.webp',
  '/images/about/section1/mobile.webp',
  '/images/about/section2/image1.webp',
  '/images/about/section2/image2.webp',
  '/images/about/section2/image3.webp',
  '/images/about/section2/image4.webp',
  
  // --- ABOUT: BENEFITS ---
  '/images/about/benifit/image1.webp',
  '/images/about/benifit/image2.webp',
  '/images/about/benifit/image3.webp',
  '/images/about/benifit/image4.webp',

  // --- ABOUT: COMMITTEE (LEADERSHIP) ---
  '/images/about/committe/sudhir.png',
  '/images/about/committe/krawal.png',
  '/images/about/committe/somash.png',
  '/images/about/committe/vishwa.png',

  // --- ABOUT: COMMITTEE (MEMBERS - Sample High Priority) ---
  '/images/about/committe/per5.webp', '/images/about/committe/per6.webp',
  '/images/about/committe/per7.webp', '/images/about/committe/per8.webp',
  '/images/about/committe/per9.webp', '/images/about/committe/per10.webp',
  '/images/about/committe/per11.webp', '/images/about/committe/per12.webp',
  
  // --- ABOUT: FACULTY (CARDIAC - Sample High Priority) ---
  '/images/about/faculty/image1.png', // Husam Balkhy
  '/images/about/image2.webp', '/images/about/image3.webp', 
  '/images/about/image4.webp', '/images/about/image5.webp',
  '/images/about/cardiac/per1.webp', '/images/about/cardiac/per2.webp',
  
  // --- ABOUT: UROLOGY ---
  '/images/about/urology/per1.webp', '/images/about/urology/per2.webp',
  '/images/about/urology/per3.webp', '/images/about/urology/per4.webp',

  // --- VISIT & EXPLORE HEROES ---
  '/images/explore/hero.webp',
  '/images/visit/hero.webp',
  '/images/visit/veneu.webp',
  '/images/visit/airport.webp'
];

const MasterLoader = () => {
  const router = useRouter();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Start downloading 2 seconds after Home Page loads
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldLoad) {
      // 1. Prefetch page JSON/JS
      allRoutes.forEach((route) => router.prefetch(route));
    }
  }, [shouldLoad, router]);

  if (!shouldLoad) return null;

  return (
    <div className="fixed inset-0 pointer-events-none opacity-0 overflow-hidden z-[-9999] w-[1px] h-[1px]">
      {/* 2. Render images hidden to force browser cache */}
      {heavyAssets.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="cache-warmer"
          width={10}
          height={10}
          priority={true} // FORCE DOWNLOAD
          unoptimized={true} // SKIP OPTIMIZATION FOR RAW SPEED IN CACHE
        />
      ))}
    </div>
  );
};

export default MasterLoader;