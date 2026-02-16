'use client'
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

import Header from '../../components/common/Header';
import Footer from '../../components/common/footer';
import Section1 from '../../components/home/Section1';

const Section2 = dynamic(() => import('../../components/home/Section2'));
const Section3 = dynamic(() => import('../../components/home/Section3'));
const Section4 = dynamic(() => import('../../components/home/Section4'));
const Section5 = dynamic(() => import('../../components/home/Section5'));
const Section6 = dynamic(() => import('../../components/home/Section6'));

const HomePage = () => {
  const visitStartTime = useRef(Date.now());

  // 👇 FIXED VISITOR TRACKER
  useEffect(() => {
    visitStartTime.current = Date.now();
    const screenRes = `${window.screen.width}x${window.screen.height}`;

    // 1. Initial Ping
    fetch('/api/track-visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'enter', screenResolution: screenRes })
    }).catch(err => console.error("Tracking failed", err));

    // Helper to calculate and send time
    const sendWatchTime = () => {
      if (!visitStartTime.current) return;
      
      const timeSpentInSeconds = Math.floor((Date.now() - visitStartTime.current) / 1000);
      
      // Only send if they actually spent time (avoids 0s pings)
      if (timeSpentInSeconds > 0) {
        const payload = JSON.stringify({ action: 'leave', watchTime: timeSpentInSeconds });
        navigator.sendBeacon('/api/track-visit', payload);
      }
    };

    // 2. Watch Time Ping
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // User switched tabs or minimized: Send time and pause timer
        sendWatchTime();
        visitStartTime.current = null; 
      } else if (document.visibilityState === 'visible') {
        // User came back: Restart the clock from zero
        visitStartTime.current = Date.now();
      }
    };

    // Listeners for mobile (tab switch/minimize) and desktop (close/refresh)
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', sendWatchTime);
    
    // Cleanup & handle Next.js internal page routing
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', sendWatchTime);
      
      // If they click a link to leave the component while it's still visible
      if (document.visibilityState === 'visible') {
        sendWatchTime();
      }
    };
  }, []);

  // Preloader logic goes here...

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      <main className="flex-grow">
        <Section1 />
        <div className="hidden md:block">
          <Section2 />
        </div>
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;