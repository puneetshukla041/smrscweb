'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// ==========================================
//   HELPER COMPONENT: SCROLL ANIMATION
// ==========================================
const FadeInView = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const AboutTab = () => {
  
  // Conference Data - Sources updated to .webp
  const conferenceCards = [
    { text: "National & International Renowned Faculty", src: "/images/about/section2/image1.webp" },
    { text: "Live robotic surgery in multi speciality", src: "/images/about/section2/image2.webp" },
    { text: "Live telesurgery & Teleproctoring", src: "/images/about/section2/image3.webp" },
    { text: "Exclusive academic workshops, Presentations & Showcases", src: "/images/about/section2/image4.webp" }
  ];

  // Benefit Data - Sources updated to .webp
  const benefitCards = [
    { text: "Surgeons & Medical Professionals", src: "/images/about/benifit/image1.webp" },
    { text: "Researchers and Innovators", src: "/images/about/benifit/image2.webp" },
    { text: "Healthcare Administrators", src: "/images/about/benifit/image3.webp" },
    { text: "Student & Trainees", src: "/images/about/benifit/image4.webp" }
  ];

  const youtubeVideoId = "48CTgZ8oB_w";

  // --- STYLES ---
  const benefitTextStyle = {
    color: '#E3F5F6',
    fontFamily: "'Manrope', sans-serif",
    fontStyle: 'normal',
    fontWeight: 500,
  };

  return (
    <div className="flex flex-col w-full pb-20 px-4 md:px-0">
      
      {/* --- 1. Top Text Section --- */}
      <FadeInView>
        <p 
          className="w-full max-w-[1380px] text-[#E3F5F6] text-xl md:text-[32px] font-medium leading-relaxed md:leading-[40px] mb-12 md:mb-[215px]"
          style={{
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          SMRSC is a global multi-specialty robotic surgery conference bringing together surgeons, innovators, educators, and healthcare leaders. Showcasing live procedures, innovation, and collaboration shaping the future of robotic surgery.
        </p>
      </FadeInView>

      {/* --- 2. YouTube Video Card Section --- */}
      <FadeInView delay={100}>
        <div 
          className="relative w-full max-w-[1380px] bg-black overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.25)] rounded-[20px] md:rounded-[40px]"
          style={{
            aspectRatio: '1380/737', 
          }}
        >
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="SMRSC Conference Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </FadeInView>

      {/* --- 3. Heading Section --- */}
      <FadeInView>
        <div className="w-full max-w-[1380px] mt-20 md:mt-[300px]">
          <div className="flex flex-col justify-center h-auto md:h-[47px] text-[#E6E6E6] text-xl md:text-[32px] font-medium leading-tight md:leading-[32px]"
               style={{ fontFamily: "'Manrope', sans-serif" }}>
            A global stage for
          </div>

          <h2 className="text-[#E3F5F6] text-[36px] md:text-[64px] font-semibold leading-tight md:leading-[86px] uppercase mt-2 md:mt-0"
              style={{ fontFamily: "'Blauer Nue', sans-serif" }}>
            SURGICAL BREAKTHROUGHS
          </h2>
        </div>
      </FadeInView>

      {/* --- 4. Conference at glance Section --- */}
      <div className="w-full max-w-[1380px] mt-20 md:mt-[200px]">
        
        <FadeInView>
            <h3 className="text-[#F8FFFF] text-[28px] md:text-[36px] font-medium leading-tight md:leading-[40px] mb-8 md:mb-[50px]"
                style={{ fontFamily: "'Blauer Nue', sans-serif" }}>
            Conference at glance
            </h3>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {conferenceCards.map((card, index) => (
            <FadeInView key={index} delay={index * 100}>
                <div className="flex flex-col gap-4 w-full">
                  <div 
                    className="relative overflow-hidden group w-full max-w-full md:max-w-[645px] h-[300px] md:h-[459px] rounded-[20px] bg-gray-300"
                  >
                    <Image 
                      src={card.src}
                      alt={card.text}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div 
                    className="flex flex-col justify-center items-start gap-1 p-4 md:py-[10px] md:px-[24px] w-full max-w-full md:max-w-[644px] h-auto min-h-[80px] md:h-[92px] rounded-[16px] bg-black/40 border border-white/10"
                  >
                    <span className="text-[#E3F5F6] text-[18px] md:text-[20px] font-semibold leading-[24px]"
                          style={{ fontFamily: "'Blauer Nue', sans-serif" }}>
                      {card.text}
                    </span>
                  </div>
                </div>
            </FadeInView>
          ))}
        </div>
      </div>

      {/* --- 5. Who will benefit Section --- */}
      <div className="w-full max-w-[1380px] mt-24 md:mt-[200px]">
        
        <FadeInView>
            <h3 className="text-[#F8FFFF] text-[28px] md:text-[36px] font-medium leading-tight md:leading-[40px] mb-10 md:mb-[80px]"
                style={{ fontFamily: "'Blauer Nue', sans-serif" }}>
            Who will benefit
            </h3>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 md:gap-y-24 gap-x-12">
          {benefitCards.map((card, index) => {
            const isImageRight = index >= 2;

            return (
              <FadeInView key={index} delay={index * 100}>
                <div className="flex flex-col md:flex-row items-center relative h-auto md:h-[260px]">
                    
                    {/* Image Container */}
                    <div 
                      className={`
                        relative w-full h-[250px] md:h-[260px] md:w-[228px] 
                        rounded-[16px] overflow-hidden z-10 
                        md:absolute
                        ${isImageRight ? 'md:right-0' : 'md:left-0'}
                      `}
                    >
                      <Image 
                        src={card.src} 
                        alt={card.text} 
                        fill 
                        className="object-cover"
                      />
                    </div>

                    {/* Content Box */}
                    <div 
                      className={`
                        flex flex-col justify-center gap-1 
                        w-full md:w-[580px] 
                        h-auto min-h-[140px] md:h-[195px] 
                        p-6 md:py-[10px] md:px-[24px]
                        rounded-[16px] bg-black/40 relative
                        mt-[-20px] md:mt-0 
                        md:bg-opacity-40 z-0 md:z-auto
                        ${isImageRight ? 'items-start md:mr-[40px]' : 'items-start md:items-end md:ml-[40px]'}
                      `}
                      style={{
                        alignItems: isImageRight ? 'flex-start' : undefined, 
                      }}
                    >
                      <p style={{
                          ...benefitTextStyle,
                          width: '100%',
                          maxWidth: '270px'
                        }}
                        className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px]"
                      >
                          {card.text}
                      </p>
                    </div>

                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap');
      `}</style>
    </div>
  );
};

export default AboutTab;