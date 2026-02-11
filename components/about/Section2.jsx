'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'; // Added useRouter

// Import your separate content files
import AboutTab from './tabs/AboutTab';
import CommitteeTab from './tabs/CommitteeTab';
import GuestsTab from './tabs/GuestsTab';
import FacultyTab from './tabs/FacultyTab';

const Section2Content = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); // Initialize router
  const tabParam = searchParams.get('tab');
  
  const [activeTab, setActiveTab] = useState("About SMRSC");

  const navItems = [
    "About SMRSC",
    "Organizing Committee",
    "Chief Guests",
    "Faculty"
  ];

  // Function to handle tab changes and update URL
  const handleTabChange = (item) => {
    setActiveTab(item);
    // This updates the URL without refreshing the page
    router.push(`/about?tab=${encodeURIComponent(item)}`, { scroll: false });
  };

  // Sync state if user types URL directly or presses back/forward
  useEffect(() => {
    if (tabParam && navItems.includes(tabParam)) {
      setActiveTab(tabParam);
      
      const section = document.getElementById('about-tabs-nav');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [tabParam]);

  return (
    <div className="w-full max-w-[1920px] mx-auto md:px-0">
      <div className="flex flex-col gap-10 md:gap-[130px] md:ml-[100px] xl:ml-[270px]">
        
        {/* Navigation Buttons */}
        <div id="about-tabs-nav" className="flex flex-wrap items-center gap-4 px-6 md:px-0 pt-4">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => handleTabChange(item)} // Use the new handler
                className="nav-button"
                style={{
                  display: 'flex',
                  padding: '12px 24px',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '40px',
                  color: '#FFF',
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: isActive ? '1px solid #FFF' : '1px solid transparent',
                  background: isActive 
                    ? 'linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%)'
                    : 'rgba(0, 0, 0, 0.20)',
                }}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Area */}
        <div className="w-full min-h-[400px]">
          {activeTab === "About SMRSC" && <AboutTab />}
          {activeTab === "Organizing Committee" && <CommitteeTab />}
          {activeTab === "Chief Guests" && <GuestsTab />}
          {activeTab === "Faculty" && <FacultyTab />}
        </div>
      </div>
    </div>
  );
};

// ... keep Section2 component and styles exactly as they were
// --- Main Section Component ---
const Section2 = () => {
  return (
    <section className="w-full min-h-screen relative flex flex-col py-10 bg-transparent">
      {/* Suspense boundary is required when using useSearchParams in Next.js */}
      <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
        <Section2Content />
      </Suspense>

      <style jsx>{`
        .nav-button:hover {
          border: 1px solid #FFF !important;
          background: linear-gradient(180deg, rgba(51, 51, 51, 0.20) 0%, rgba(0, 0, 0, 0.20) 137.5%) !important;
          transform: scale(1.05);
        }
      `}</style>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600&display=swap');
      `}</style>
    </section>
  );
};

export default Section2;