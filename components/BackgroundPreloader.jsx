'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BackgroundPreloader() {
  const router = useRouter();

  useEffect(() => {
    // 1. Wait for the main thread to be idle (after Home page is fully interactive)
    const startPreloading = () => {
      console.log('🚀 SMRSC Turbo: Starting background asset download...');

      // --- A. PREFETCH ALL ROUTES (Downloads the JS/HTML chunks) ---
      const routes = [
        '/about',
        '/contactus',
        '/explore', // Downloads the heavy schedule components
        '/login',
        '/media',
        '/pastevents',
        '/register',
        '/visit/venue',
        '/visit/hotels',
        '/visit/places'
      ];

      routes.forEach((route) => {
        router.prefetch(route);
      });

      // --- B. PRELOAD HEAVY ASSETS (Downloads images to Browser Cache) ---
      // We prioritize the "Hero" images of other pages so they appear instantly.
      const heavyImages = [
        '/images/about/section1/image1.webp', 
        '/images/explore/hero.webp',
        '/images/visit/hero.webp',
        '/images/media/image1.webp',
        '/images/visit/veneu.webp',
        '/images/visit/airport.webp',
        '/fonts/BlauerNue.otf' // Preload the main font
      ];

      heavyImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    // Delay by 3.5 seconds to ensure Home Page LCP is perfect, then blast the network
    const timer = setTimeout(() => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(startPreloading);
        } else {
            startPreloading();
        }
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return null; // Renders nothing visibly
}