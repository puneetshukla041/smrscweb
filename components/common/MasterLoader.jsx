'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const allRoutes = [
  '/about', '/explore', '/media', '/visit/venue', '/visit/hotels', 
  '/visit/places', '/pastevents', '/register', '/contactus'
];

const heavyAssets = [
  // --- KEEP YOUR FULL LIST OF IMAGES HERE ---
  '/logos/header.png',
  '/images/about/section1/img1.webp', 
  '/images/about/section1/mobile.webp',
  '/images/about/section2/image1.webp', '/images/about/section2/image2.webp',
  '/images/about/section2/image3.webp', '/images/about/section2/image4.webp',
  '/images/about/benifit/image1.webp', '/images/about/benifit/image2.webp',
  '/images/about/benifit/image3.webp', '/images/about/benifit/image4.webp',
  '/images/about/committe/sudhir.png', '/images/about/committe/krawal.png',
  '/images/about/committe/somash.png', '/images/about/committe/vishwa.png',
  // ... (Add all your other images from your list here) ...
];

const videoAssets = [
  "/videos/smrsc25.webm",
  "/videos/smrsc24.webm"
];

// --- SMART QUEUE SYSTEM ---
const loadAssetQueue = async (urls, type = 'image', concurrency = 5) => {
  const queue = [...urls];
  const worker = async () => {
    while (queue.length > 0) {
      const url = queue.shift();
      if (!url) break;
      try {
        if (type === 'image') {
          await new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = resolve; 
          });
        } else if (type === 'video') {
          await fetch(url, { cache: "force-cache" });
        }
      } catch (e) {}
    }
  };
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
};

const MasterLoader = () => {
  const router = useRouter();

  useEffect(() => {
    const startLoading = async () => {
      // 1. Prefetch Routes
      allRoutes.forEach((route) => router.prefetch(route));

      // 2. Download Videos (1 at a time)
      loadAssetQueue(videoAssets, 'video', 1);

      // 3. Download Images (5 at a time - High Priority)
      await loadAssetQueue(heavyAssets, 'image', 5);
      
      console.log("✅ All Assets Cached Successfully");
    };

    const timer = setTimeout(() => {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(startLoading);
        } else {
            startLoading();
        }
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
};

export default MasterLoader;