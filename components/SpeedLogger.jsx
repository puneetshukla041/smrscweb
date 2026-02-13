'use client';
import { useReportWebVitals } from 'next/web-vitals';

export default function SpeedLogger() {
  useReportWebVitals((metric) => {
    // This specific metric measures time from route change to render
    if (metric.name === 'Next.js-route-change-to-render') {
      console.log(
        `%c⚡ Page Render: ${metric.value.toFixed(2)} ms`, 
        'background: #222; color: #00ff00; padding: 4px; font-weight: bold; border-radius: 4px;'
      );
    }
  });

  return null;
}