'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 1. ALL PAGES to prefetch (Next.js Router Cache)
const TARGET_PAGES = [
  '/about',
  '/explore',
  '/media',
  '/visit/venue',
  '/visit/hotels',
  '/visit/places',
  '/pastevents',
  '/register',
  '/contactus',
  '/login'
];

// 2. HEAVY ASSETS (Browser Disk Cache)
// Based exactly on your file structure provided
const ASSET_QUEUE = [
  // -- About Page Assets --
  '/images/about/section1/image1.webp',
  '/images/about/section2/image1.webp',
  '/images/about/benifit/image1.webp',
  
  // -- Explore Page Assets --
  '/images/explore/hero.webp',
  '/images/explore/mobile.png',
  '/images/explore/image1.webp',
  
  // -- Visit Page Assets --
  '/images/visit/hero.webp',
  '/images/visit/mobile.png',
  '/images/visit/veneu.webp', // noted spelling from your list
  
  // -- Media Page Assets --
  '/images/media/image1.webp',
  '/images/media/mobile.webp',
  
  // -- Past Events --
  '/images/pastevent/2025/image1.webp',
  '/images/pastevent/24/image1.webp',
  
  // -- Heavy Videos (Preload metadata only to save bandwidth, or full fetch) --
  '/videos/smrsc25.webm',
  '/videos/smrsc24.webm'
];

export default function BackgroundPreloader() {
  const router = useRouter();

  useEffect(() => {
    // 🛑 WAIT 3.5 SECONDS
    // This ensures the Main Homepage (LCP) is totally finished and interactive
    // before we start clogging the network with background downloads.
    const startDelay = setTimeout(() => {
      runSmartQueue();
    }, 3500);

    return () => clearTimeout(startDelay);
  }, []);

  const runSmartQueue = () => {
    console.log("⚡ Starting Background Asset Hydration...");

    // Helper: Process queue during idle time (scrolling breaks)
    const processQueue = (deadline) => {
      // 1. Prefetch Routes
      while (deadline.timeRemaining() > 0 && TARGET_PAGES.length > 0) {
        const page = TARGET_PAGES.shift();
        if (page) router.prefetch(page);
      }

      // 2. Prefetch Images (Standard HTML preloading)
      while (deadline.timeRemaining() > 0 && ASSET_QUEUE.length > 0) {
        const src = ASSET_QUEUE.shift();
        if (src) {
            // If it's a video, we fetch it as a blob
            if (src.endsWith('.webm')) {
                fetch(src, { mode: 'no-cors' }); 
            } else {
                // Images
                const img = new Image();
                img.src = src;
            }
        }
      }

      // If queue still has items, request another idle callback
      if (TARGET_PAGES.length > 0 || ASSET_QUEUE.length > 0) {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(processQueue);
        } else {
          setTimeout(() => processQueue({ timeRemaining: () => 50 }), 100);
        }
      }
    };

    // Initialize
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(processQueue);
    } else {
      setTimeout(() => processQueue({ timeRemaining: () => 50 }), 100);
    }
  };

  return null; // Invisible component
}