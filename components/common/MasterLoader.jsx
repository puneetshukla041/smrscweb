'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// 1. All Routes to Prefetch (RSC Payload + JS)
const allRoutes = [
  '/about', 
  '/explore', 
  '/media', 
  '/visit/venue', 
  '/visit/hotels', 
  '/visit/places', 
  '/pastevents', 
  '/register', 
  '/contactus'
];

// 2. All Static Images to Preload (Forces Browser Cache)
const heavyAssets = [
  // --- HEADER & LOGOS ---
  '/logos/header.png',

  // --- MEDIA PAGE ASSETS (NEW) ---
  '/images/media/image1.webp',      // Media Hero Desktop
  '/images/media/mobile.webp',      // Media Hero Mobile
  '/images/media/blog1.webp',       // Blog 1
  '/images/media/blog2.webp',       // Blog 2
  '/images/media/blog3.webp',       // Blog 3
  '/images/media/press1.webp',      // Press Release 1
  '/images/media/press2.webp',      // Press Release 2

  // --- PAST EVENTS (2025) ---
  '/images/pastevent/2025/image1.webp', '/images/pastevent/2025/image2.webp',
  '/images/pastevent/2025/image3.webp', '/images/pastevent/2025/image4.webp',
  '/images/pastevent/2025/image5.webp', '/images/pastevent/2025/image6.webp',
  '/images/pastevent/2025/image7.webp', '/images/pastevent/2025/image8.webp',
  '/images/pastevent/2025/image9.webp', '/images/pastevent/2025/image10.webp',
  '/images/pastevent/2025/image11.webp', '/images/pastevent/2025/image12.webp',

  // --- PAST EVENTS (2024) ---
  '/images/pastevent/24/image1.webp', '/images/pastevent/24/image2.webp',
  '/images/pastevent/24/image3.webp', '/images/pastevent/24/image4.webp',
  '/images/pastevent/24/image5.webp', '/images/pastevent/24/image6.webp',
  '/images/pastevent/24/image7.webp', '/images/pastevent/24/image8.webp',
  '/images/pastevent/24/image9.webp', '/images/pastevent/24/image10.webp',
  '/images/pastevent/24/image11.webp', '/images/pastevent/24/image12.webp',

  // --- ABOUT SECTION ---
  '/images/about/section1/img1.webp', '/images/about/section1/mobile.webp',
  '/images/about/section2/image1.webp', '/images/about/section2/image2.webp',
  '/images/about/section2/image3.webp', '/images/about/section2/image4.webp',
  
  // --- BENIFITS & COMMITTEE ---
  '/images/about/benifit/image1.webp', '/images/about/benifit/image2.webp',
  '/images/about/benifit/image3.webp', '/images/about/benifit/image4.webp',
  '/images/about/committe/sudhir.png', '/images/about/committe/krawal.png',
  '/images/about/committe/somash.png', '/images/about/committe/vishwa.png',

  // --- VISIT & EXPLORE ---
  '/images/explore/hero.webp',
  '/images/visit/hero.webp',
  '/images/visit/veneu.webp',
  '/images/visit/airport.webp'
];

// 3. Videos to Preload (Browser will buffer these)
const videoAssets = [
  "/videos/smrsc25.webm",
  "/videos/smrsc24.webm"
];

const MasterLoader = () => {
  const router = useRouter();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Wait for the Home Page to be fully interactive first (1.5s delay)
    // Then start the heavy lifting
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldLoad) {
      // A. Prefetch Next.js Routes (JSON + JS Chunks)
      allRoutes.forEach((route) => {
        router.prefetch(route);
      });

      // B. Manually fetch videos to populate browser cache
      videoAssets.forEach((videoSrc) => {
        fetch(videoSrc).catch(() => {}); // Fire and forget
      });
    }
  }, [shouldLoad, router]);

  if (!shouldLoad) return null;

  return (
    <div className="fixed inset-0 pointer-events-none opacity-0 overflow-hidden z-[-9999] w-[1px] h-[1px]">
      
      {/* C. Render Images hidden to force 'Decode' and 'Cache' */}
      {heavyAssets.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="cache-warmer"
          width={1} 
          height={1}
          priority={true} // FORCE NEXT.JS TO LOAD IMMEDIATELY
          unoptimized={true} // SKIP OPTIMIZATION TO GET THE RAW FILE CACHED
          loading="eager"
        />
      ))}

      {/* D. Hidden Video Tags to Force Buffering */}
      {videoAssets.map((src, index) => (
        <video 
          key={`vid-${index}`}
          src={src} 
          muted 
          playsInline 
          preload="auto" // FORCE BROWSER TO BUFFER
          width="1" 
          height="1" 
        />
      ))}
    </div>
  );
};

export default MasterLoader;