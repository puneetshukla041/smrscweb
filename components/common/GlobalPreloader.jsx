'use client';

import { useEffect } from 'react';

// This is the master list of all your assets
const ASSETS_TO_PRELOAD = [
  // --- FONTS ---
  "/fonts/BlauerNue.otf",
  "/fonts/Roba-Regular.ttf",

  // --- EXPLORE PAGE ---
  "/images/explore/hero.webp",
  "/images/explore/mobile.png",
  "/images/explore/image1.webp",
  "/images/explore/image2.webp",
  "/images/explore/image3.webp",
  "/images/explore/image4.webp",
  "/images/explore/image5.webp",
  "/images/explore/image6.webp",
  "/images/explore/image7.webp",
  "/images/explore/image8.webp",

  // --- HOME PAGE ---
  "/images/home/section1/image2.webp",
  "/images/home/section1/mobileimg.png",
  "/images/home/section2/card.webp",
  "/images/home/section2/image1.webp",
  "/images/home/section2/image2.webp",
  "/images/home/section2/image3.webp",
  "/images/home/section2/image4.webp",
  "/images/home/section3/image1.webp",
  "/images/home/section3/image2.webp",
  "/images/home/section3/image3.webp",
  "/images/home/section3/image4.webp",
  "/images/home/section3/image5.webp",
  "/images/home/section3/image6.webp",
  "/images/home/section3/image7.webp",
  "/images/home/section3/mob1.webp",
  "/images/home/section3/mob2.webp",
  "/images/home/section3/mob3.webp",
  "/images/home/section3/mob4.webp",
  "/images/home/section3/mob5.webp",
  "/images/home/section4/image1.webp",
  "/images/home/section4/image2.webp",
  "/images/home/section4/image3.webp",
  "/images/home/section4/image4.webp",
  "/images/home/section5/image1.webp",
  "/images/home/section5/image2.webp",
  "/images/home/section5/image3.webp",
  "/images/home/section5/image4.webp",
  "/images/home/section5/mob1.webp",
  "/images/home/section5/mob2.webp",
  "/images/home/section5/mob3.webp",
  "/images/home/section5/mob4.webp",
  "/images/home/section6/image1.webp",
  "/images/home/section6/mobile.webp",
  "/images/home/section6/image1.png",

  // --- LOGOS & ICONS ---
  "/logos/header.png",
  "/logos/ssilogo.png",
  "/file.svg",
  "/globe.svg",
  "/next.svg",
  "/vercel.svg",

  // --- MEDIA PAGE ---
  "/images/media/blog1.webp",
  "/images/media/blog2.webp",
  "/images/media/blog3.webp",
  "/images/media/image1.webp",
  "/images/media/media1.webp",
  "/images/media/media2.webp",
  "/images/media/media3.webp",
  "/images/media/mobile.webp",
  "/images/media/press1.webp",
  "/images/media/press2.webp",

  // --- VISIT PAGE ---
  "/images/visit/airport.webp",
  "/images/visit/hero.webp",
  "/images/visit/image.webp",
  "/images/visit/mobile.png",
  "/images/visit/place1.webp",
  "/images/visit/place2.webp",
  "/images/visit/place3.webp",
  "/images/visit/place4.webp",
  "/images/visit/place5.webp",
  "/images/visit/place6.webp",
  "/images/visit/place7.webp",
  "/images/visit/place8.webp",
  "/images/visit/place9.webp",
  "/images/visit/veneu.webp",
  "/images/visit/venue1.webp",
  "/images/visit/venue2.webp",
  "/images/visit/venue3.webp",
  "/images/visit/venue4.webp",
  "/images/visit/venue5.webp",
  "/images/visit/venue6.webp",

  // --- PAST EVENTS (2024 & 2025) ---
  "/images/pastevent/24/image1.webp",
  "/images/pastevent/24/image2.webp",
  "/images/pastevent/24/image3.webp",
  "/images/pastevent/24/image4.webp",
  "/images/pastevent/24/image5.webp",
  "/images/pastevent/24/image6.webp",
  "/images/pastevent/24/image7.webp",
  "/images/pastevent/24/image8.webp",
  "/images/pastevent/24/image9.webp",
  "/images/pastevent/24/image10.webp",
  "/images/pastevent/24/image11.webp",
  "/images/pastevent/24/image12.webp",
  "/images/pastevent/2025/image1.webp",
  "/images/pastevent/2025/image2.webp",
  "/images/pastevent/2025/image3.webp",
  "/images/pastevent/2025/image4.webp",
  "/images/pastevent/2025/image5.webp",
  "/images/pastevent/2025/image6.webp",
  "/images/pastevent/2025/image7.webp",
  "/images/pastevent/2025/image8.webp",
  "/images/pastevent/2025/image9.webp",
  "/images/pastevent/2025/image10.webp",
  "/images/pastevent/2025/image11.webp",
  "/images/pastevent/2025/image12.webp",

  // --- ABOUT PAGE (Committees, Faculty, etc.) ---
  "/images/about/section1/image1.webp",
  "/images/about/section1/img1.webp",
  "/images/about/section1/mobile.webp",
  "/images/about/section2/image1.webp",
  "/images/about/section2/image2.webp",
  "/images/about/section2/image3.webp",
  "/images/about/section2/image4.webp",
  "/images/about/section2/image5.webp",
  "/images/about/section2/image6.webp",
  "/images/about/section2/image7.webp",
  "/images/about/benifit/image1.webp",
  "/images/about/benifit/image2.webp",
  "/images/about/benifit/image3.webp",
  "/images/about/benifit/image4.webp",
  "/images/about/faculty/image1.png",
  "/images/about/faculty/image1.webp",
  "/images/about/committe/krawal.png",
  "/images/about/committe/somash.png",
  "/images/about/committe/sudhir.png",
  "/images/about/committe/vishwa.png",
  
  // Note: Add your per1.webp to per34.webp loops here if needed, 
  // I kept it to the main structural images so we don't crash the browser cache limit.
  "/images/about/cardiac/per1.webp",
  "/images/about/urology/per1.webp",
  "/images/about/general/per1.webp"
];

// --- VIDEOS ---
// Videos are heavy, we fetch them differently
const VIDEOS_TO_PRELOAD = [
  "/videos/Color.webm",
  "/videos/smrsc24.webm",
  "/videos/smrsc25.webm"
];

export default function GlobalPreloader() {
  useEffect(() => {
    // We wait 3 SECONDS before starting so we NEVER steal internet speed 
    // from the page the user is currently looking at.
    const startPreloading = async () => {
      // 1. Loop through and aggressively fetch the FULL files into the disk cache
      for (const src of ASSETS_TO_PRELOAD) {
        try {
          // Using fetch with 'force-cache' prevents the 0.1kb issue
          fetch(src, { cache: 'force-cache', mode: 'no-cors' });
        } catch (e) {
          console.error("Failed to preload:", src);
        }
      }

      // 2. Preload Videos
      for (const src of VIDEOS_TO_PRELOAD) {
        try {
          fetch(src, { cache: 'force-cache', mode: 'no-cors' });
        } catch (e) {}
      }
    };

    // requestIdleCallback tells the browser "only do this when you have free time"
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(startPreloading);
      } else {
        startPreloading();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null; // This component is entirely invisible
}