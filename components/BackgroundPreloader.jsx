'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BackgroundPreloader() {
  const router = useRouter();

  useEffect(() => {
    // 1. Helper to generate numbered lists efficiently (to keep code clean)
    const range = (start, end, prefix, ext) => 
      Array.from({ length: end - start + 1 }, (_, i) => `${prefix}${start + i}.${ext}`);

    // --- ASSET DATABASE ---
    
    // 1. All Next.js Page Routes
    const pageRoutes = [
      '/about', '/contactus', '/explore', '/login', '/media', 
      '/pastevents', '/register', '/visit/venue', '/visit/hotels', '/visit/places'
    ];

    // 2. Videos (Heavy items)
    const videos = [
      '/videos/Color.webm',
      '/videos/smrsc24.webm'
    ];

    // 3. Fonts
    const fonts = [
      '/fonts/BlauerNue.otf',
      '/fonts/Roba-Regular.ttf'
    ];

    // 4. All Images (Mapped from your folder structure)
    const allImages = [
      // --- ABOUT ---
      ...range(1, 4, '/images/about/benifit/image', 'webp'),
      
      // Cardiac
      ...range(1, 25, '/images/about/cardiac/per', 'webp'),
      
      // Committee (Specific names + range)
      '/images/about/committe/krawal.png',
      '/images/about/committe/somash.png', 
      '/images/about/committe/sudhir.png', 
      '/images/about/committe/vishwa.png',
      ...range(1, 34, '/images/about/committe/per', 'webp'),

      // Faculty
      '/images/about/faculty/image1.png',
      '/images/about/faculty/image1.webp',

      // General
      ...range(1, 4, '/images/about/general/per', 'webp'),

      // About Section 1 & 2
      '/images/about/section1/image1.webp',
      '/images/about/section1/img1.webp',
      '/images/about/section1/mobile.webp',
      ...range(1, 7, '/images/about/section2/image', 'webp'),

      // Urology (Complex mix)
      '/images/about/urology/clippath.webp',
      ...range(1, 8, '/images/about/urology/per', 'webp'),
      ...range(21, 34, '/images/about/urology/per', 'webp'), // Gap in your list 9-20?
      ...range(2, 14, '/images/about/urology/image', 'webp'), // image2 to image14

      // --- EXPLORE ---
      '/images/explore/hero.webp',
      '/images/explore/mobile.png',
      ...range(1, 8, '/images/explore/image', 'webp'),

      // --- HOME ---
      '/images/home/section1/image2.png',
      '/images/home/section1/image2.webp',
      '/images/home/section1/mobileimg.png',
      '/images/home/section2/card.webp',
      ...range(1, 4, '/images/home/section2/image', 'webp'),
      ...range(1, 7, '/images/home/section3/image', 'webp'),
      ...range(1, 5, '/images/home/section3/mob', 'webp'),
      ...range(1, 4, '/images/home/section4/image', 'webp'),
      ...range(1, 4, '/images/home/section5/image', 'webp'),
      ...range(1, 4, '/images/home/section5/mob', 'webp'),
      '/images/home/section6/image1.webp',
      '/images/home/section6/image1.png',
      '/images/home/section6/mobile.webp',

      // --- MEDIA ---
      ...range(1, 3, '/images/media/blog', 'webp'),
      ...range(1, 3, '/images/media/media', 'webp'),
      ...range(1, 2, '/images/media/press', 'webp'),
      '/images/media/image1.webp',
      '/images/media/mobile.webp',

      // --- PAST EVENTS ---
      // 2025
      ...range(1, 12, '/images/pastevent/2025/image', 'webp'),
      // 24
      ...range(1, 12, '/images/pastevent/24/image', 'webp'),

      // --- VISIT ---
      '/images/visit/airport.webp',
      '/images/visit/hero.webp',
      '/images/visit/veneu.webp',
      '/images/visit/image.webp',
      '/images/visit/mobile.png',
      ...range(1, 9, '/images/visit/place', 'webp'),
      ...range(1, 6, '/images/visit/venue', 'webp'),
    ];


    // --- EXECUTION ENGINE ---
    const startNuclearPreloading = async () => {
      console.log('🚀 SMRSC Turbo: Initializing Total Site Download...');
      const start = performance.now();

      // 1. Prefetch Routes (Next.js JS Chunks)
      pageRoutes.forEach((route) => router.prefetch(route));

      // 2. Preload Images (Browser Cache)
      let loadedCount = 0;
      allImages.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => loadedCount++;
      });

      // 3. Preload Videos (Fetch Blob to Disk Cache)
      videos.forEach((videoSrc) => {
        fetch(videoSrc).then(r => r.blob()).catch(e => console.log('Video fetch skipped', e));
      });

      // 4. Preload Fonts
      fonts.forEach((fontSrc) => {
        const font = new FontFace('PreloadedFont', `url(${fontSrc})`);
        font.load().then((f) => document.fonts.add(f)).catch(e => {});
      });

      console.log(`✅ SMRSC Turbo: ${allImages.length} images, ${videos.length} videos, and all routes requested.`);
    };

    // Wait 3.5s for Home LCP, then BLAST.
    const timer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => startNuclearPreloading(), { timeout: 2000 });
      } else {
        startNuclearPreloading();
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
}