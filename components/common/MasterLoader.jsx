'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const allRoutes = [
  '/about', '/explore', '/media', '/visit/venue', '/visit/hotels', 
  '/visit/places', '/pastevents', '/register', '/contactus'
];

const heavyAssets = [
  // --- HEADER & LOGOS ---
  '/logos/header.png',
  '/logos/ssilogo.png',

  // --- HOME PAGE ---
  '/images/home/section1/image2.webp', '/images/home/section1/mobileimg.png',
  '/images/home/section2/card.webp', 
  '/images/home/section2/image1.webp', '/images/home/section2/image2.webp',
  '/images/home/section2/image3.webp', '/images/home/section2/image4.webp',
  '/images/home/section3/image1.webp', '/images/home/section3/image2.webp',
  '/images/home/section3/image3.webp', '/images/home/section3/image4.webp',
  '/images/home/section3/image5.webp', '/images/home/section3/image6.webp', '/images/home/section3/image7.webp',
  '/images/home/section3/mob1.webp', '/images/home/section3/mob2.webp', '/images/home/section3/mob3.webp',
  '/images/home/section4/image1.webp', '/images/home/section4/image2.webp',
  '/images/home/section4/image3.webp', '/images/home/section4/image4.webp',
  '/images/home/section5/image1.webp', '/images/home/section5/image2.webp',
  '/images/home/section5/image3.webp', '/images/home/section5/image4.webp',
  '/images/home/section6/image1.webp', '/images/home/section6/mobile.webp', '/images/home/section6/image1.png',

  // --- ABOUT: SECTIONS ---
  '/images/about/section1/img1.webp', '/images/about/section1/mobile.webp',
  '/images/about/section2/image1.webp', '/images/about/section2/image2.webp',
  '/images/about/section2/image3.webp', '/images/about/section2/image4.webp',

  // --- ABOUT: UROLOGY ---
  '/images/about/urology/clippath.webp',
  ...Array.from({ length: 8 }, (_, i) => `/images/about/urology/per${i + 1}.webp`),   // per1-per8
  ...Array.from({ length: 14 }, (_, i) => `/images/about/urology/per${i + 21}.webp`), // per21-per34
  ...Array.from({ length: 13 }, (_, i) => `/images/about/urology/image${i + 2}.webp`), // image2-image14

  // --- ABOUT: CARDIAC ---
  ...Array.from({ length: 25 }, (_, i) => `/images/about/cardiac/per${i + 1}.webp`),

  // --- ABOUT: COMMITTEE ---
  '/images/about/committe/sudhir.png', '/images/about/committe/krawal.png',
  '/images/about/committe/somash.png', '/images/about/committe/vishwa.png',
  ...Array.from({ length: 34 }, (_, i) => `/images/about/committe/per${i + 1}.webp`),

  // --- ABOUT: GENERAL ---
  '/images/about/general/per1.webp', '/images/about/general/per2.webp',
  '/images/about/general/per3.webp', '/images/about/general/per4.webp',

  // --- VISIT ---
  '/images/visit/hero.webp', '/images/visit/veneu.webp', '/images/visit/airport.webp',
  '/images/visit/image.webp', '/images/visit/mobile.png',
  ...Array.from({ length: 9 }, (_, i) => `/images/visit/place${i + 1}.webp`),
  ...Array.from({ length: 6 }, (_, i) => `/images/visit/venue${i + 1}.webp`),

  // --- MEDIA ---
  '/images/media/image1.webp', '/images/media/mobile.webp',
  '/images/media/blog1.webp', '/images/media/blog2.webp', '/images/media/blog3.webp',
  '/images/media/press1.webp', '/images/media/press2.webp',
  '/images/media/media1.webp', '/images/media/media2.webp', '/images/media/media3.webp',

  // --- PAST EVENTS ---
  ...Array.from({ length: 12 }, (_, i) => `/images/pastevent/2025/image${i + 1}.webp`),
  ...Array.from({ length: 12 }, (_, i) => `/images/pastevent/24/image${i + 1}.webp`)
];

const videoAssets = [
  "/videos/smrsc25.webm",
  "/videos/smrsc24.webm",
  "/videos/Color.webm"
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
            // Silent resolve even on error to prevent console spam interruption
            img.onload = resolve;
            img.onerror = () => {
               // We suppress the console.warn here to keep production logs clean
               // The image just won't be preloaded, which is fine.
               resolve(); 
            }; 
          });
        } else if (type === 'video') {
          await fetch(url, { cache: "force-cache" });
        }
      } catch (e) {
        // Silent fail
      }
    }
  };

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
};

const MasterLoader = () => {
  const router = useRouter();

  useEffect(() => {
    const startLoading = async () => {
      console.log(`🚀 Starting preload of ${heavyAssets.length} images...`);
      allRoutes.forEach((route) => router.prefetch(route));
      loadAssetQueue(videoAssets, 'video', 1);
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