'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// 1. LIST ALL YOUR HEAVY HERO IMAGES HERE
// These will be downloaded silently in the background
const heavyAssets = [
  '/images/explore/hero.webp',
  '/images/explore/mobile.png',
  '/images/visit/hero.webp',
  '/images/visit/mobile.png',
  '/images/media/image1.webp',
  '/images/media/mobile.webp',
  '/images/visit/veneu.webp',
  '/images/visit/airport.webp'
];

// 2. LIST ALL YOUR PAGES HERE
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

const MasterLoader = () => {
  const router = useRouter();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Wait 2.5 seconds after Home loads to let the main animation finish
    // purely to prevent lagging the opening animation
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldLoad) {
      console.log('🚀 Silent Loader: Prefetching all routes...');
      
      // Prefetch routes one by one to avoid network congestion
      allRoutes.forEach((route) => {
        router.prefetch(route);
      });
    }
  }, [shouldLoad, router]);

  if (!shouldLoad) return null;

  return (
    <div className="fixed inset-0 pointer-events-none opacity-0 overflow-hidden z-[-9999] w-[1px] h-[1px]">
      {/* This forces the browser to download and cache the images 
        because they are technically "rendered" in the DOM 
      */}
      {heavyAssets.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="preloader"
          width={1920}
          height={1080}
          priority={true} // FORCE DOWNLOAD NOW
          quality={80}
        />
      ))}
    </div>
  );
};

export default MasterLoader;