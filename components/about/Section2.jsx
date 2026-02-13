'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

// Direct Imports
import AboutTab from './tabs/AboutTab';
import CommitteeTab from './tabs/CommitteeTab';
import GuestsTab from './tabs/GuestsTab';
import FacultyTab from './tabs/FacultyTab';

const Section2 = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get('tab');
  
  const [activeTab, setActiveTab] = useState("About SMRSC");

  const navItems = [
    "About SMRSC",
    "Organizing Committee",
    "Chief Guests",
    "Faculty"
  ];

  const handleTabChange = (item) => {
    setActiveTab(item);
    router.push(`/about?tab=${encodeURIComponent(item)}`, { scroll: false });
  };

  useEffect(() => {
    if (tabParam && navItems.includes(tabParam)) {
      setActiveTab(tabParam);
      // Optional: Scroll to tabs if deep linking
      // document.getElementById('about-tabs-nav')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [tabParam]);

  return (
    <section className="w-full min-h-screen relative flex flex-col py-10 bg-transparent">
      <div className="w-full max-w-[1920px] mx-auto md:px-0">
        <div className="flex flex-col gap-10 md:gap-[130px] md:ml-[100px] xl:ml-[270px]">
          
          {/* Navigation Buttons */}
          <div id="about-tabs-nav" className="flex flex-wrap items-center gap-4 px-6 md:px-0 pt-4">
            {navItems.map((item) => {
              const isActive = activeTab === item;
              return (
                <button
                  key={item}
                  onClick={() => handleTabChange(item)}
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
                    transition: 'all 0.2s ease', // Faster transition
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

          {/* FAST RENDERING TRICK: 
             Render ALL tabs but hide inactive ones with CSS. 
             This means they are already in the DOM and don't need to "mount" when clicked.
          */}
          <div className="w-full min-h-[400px]">
            <div style={{ display: activeTab === "About SMRSC" ? 'block' : 'none' }}>
              <AboutTab />
            </div>
            <div style={{ display: activeTab === "Organizing Committee" ? 'block' : 'none' }}>
              <CommitteeTab />
            </div>
            <div style={{ display: activeTab === "Chief Guests" ? 'block' : 'none' }}>
              <GuestsTab />
            </div>
            <div style={{ display: activeTab === "Faculty" ? 'block' : 'none' }}>
              <FacultyTab />
            </div>
          </div>

        </div>
      </div>

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