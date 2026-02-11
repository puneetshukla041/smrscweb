'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // LERP: 0.05 is the "Golden Butter" spot. 
      // It allows the page to glide freely but stops precisely where you want.
      lerp: 0.05, 
      
      // DURATION: 1.2s is the perfect slide length. 
      // Not too long (which feels laggy), not too short (which feels jerky).
      duration: 1.2, 
      
      // EASING: This easeOutQuart function is silky smooth.
      easing: (t) => 1 - Math.pow(1 - t, 4),
      
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      
      // WHEEL MULTIPLIER: 0.8 gives you enough speed to feel responsive,
      // while the lerp handles the smoothing.
      wheelMultiplier: 0.8, 
      
      // TOUCH: Keep mobile natural.
      touchMultiplier: 2,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}