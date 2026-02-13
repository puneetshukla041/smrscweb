'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function SpeedLogger() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  // 1. Log destination path
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return; 
    }
    console.log(
      `%c🏁 Navigated to: ${pathname}`, 
      'color: #00ffff; font-weight: bold; font-size: 11px;'
    );
  }, [pathname]);

  // 2. Capture Exact Speed
  useReportWebVitals((metric) => {
    if (metric.name === 'Next.js-route-change-to-render') {
      const speed = metric.value; // This is the exact duration
      
      // Color Logic
      // < 200ms = Green (Instant)
      // < 500ms = Orange (Fast)
      // > 500ms = Red (Slow)
      const color = speed < 200 ? '#00ff00' : speed < 500 ? 'orange' : '#ff4444';

      console.group(`⚡ Performance: ${pathname}`); // Groups logs neatly
      
      // Log 1: Readable Speed
      console.log(
        `%c Render Time: ${speed.toFixed(2)} ms `, 
        `background: #222; color: ${color}; padding: 4px; font-weight: bold; border-radius: 4px; border: 1px solid ${color};`
      );

      // Log 2: EXACT Raw Speed
      console.log(`%c Exact Raw Duration:`, 'color: gray;', speed, 'ms');
      
      console.groupEnd();
    }
  });

  return null;
}