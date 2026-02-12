'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import localFont from 'next/font/local';

// FIXED: Added one more '../' to reach the root public folder from app/visit/venue
const blauerNue = localFont({
  src: '../../../public/fonts/BlauerNue.otf', 
  display: 'swap',
  variable: '--font-blauer-nue',
});

const VenuePage = () => {
  return (
    <div className="flex flex-col items-center px-4 w-full animate-fadeIn">
      
      {/* === VENUE INFO === */}
      <div className="w-full max-w-[1377px] flex flex-col gap-8">
        
        <h1 className={`${blauerNue.className} text-[#F8FFFF] text-[36px] font-medium leading-[36px] w-full md:w-[350px]`}>
          Bharat Mandapam
        </h1>

        <p className="font-manrope text-[#E3F5F6] text-[24px] font-normal leading-[36px] w-full">
          SMRSC 2026 will be held at Bharat Mandapam, a premier convention centre located in New Delhi, India. It is one of the largest and most advanced convention centres in the country.
        </p>

        <div className="relative w-full mt-4 h-[500px] md:h-[631px] rounded-[20px] overflow-hidden shadow-2xl group">
          <Image
            src="/images/visit/veneu.webp" 
            alt="Bharat Mandapam"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black" />
          
          <div className="absolute bottom-0 left-0 w-full z-20 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-2xl font-bold font-manrope">Bharat Mandapam</h3>
              <p className="text-white/80 text-lg font-manrope">Pragati Maidan, New Delhi – 110001, India</p>
            </div>
            
            <a 
              href="https://www.itpo.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-manrope font-semibold text-sm transition-all hover:bg-[#CE921B] hover:text-white"
            >
              See More <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* === PLANNING JOURNEY === */}
      <div className="w-full max-w-[1377px] mt-[100px] md:mt-[150px] flex flex-col gap-12">
        <h2 className={`${blauerNue.className} text-[#F8FFFF] text-[36px] font-medium leading-[36px]`}>
          Planning your journey
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Airport */}
          <div className="relative w-full lg:w-[670px] h-[400px] overflow-hidden rounded-[40px] shadow-2xl group border border-white/10">
            <Image 
              src="/images/visit/airport.webp" 
              alt="Airport" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/80" />
            <div className="absolute bottom-8 left-8 z-20 flex flex-col gap-1">
              <h3 className="text-[#F8FFFF] font-manrope text-[32px] font-semibold leading-[40px]">Indira Gandhi International Airport</h3>
              <p className="text-[#F8FFFF] font-manrope text-[16px] font-normal leading-[20px]">Nearest international airport<br />30 minutes to the venue</p>
            </div>
          </div>
          
          {/* Visa */}
          <div className="flex flex-col justify-center flex-1 gap-6 p-4">
            <h3 className={`${blauerNue.className} text-[#F8FFFF] text-[36px] font-normal leading-[36px]`}>
              Visa Guidance
            </h3>
            <p className="font-manrope text-[#F8FFFF] text-[18px] font-normal leading-[22px] max-w-[500px]">
              International attendees may require a valid Indian visa. Visa requirements vary by nationality.
            </p>
            
            <a 
              href="https://indianvisaonline.gov.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-black w-fit px-8 py-3 rounded-full font-manrope font-semibold text-sm transition-all hover:bg-[#CE921B] hover:text-white"
            >
              Check visa requirements <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* === ENTRY & METRO INFO === */}
        <div className="flex flex-col gap-4 mt-8">
            <div className="flex flex-col lg:flex-row gap-6 justify-between">
                {/* Box 1: Car & Cab */}
                <div className="flex flex-col justify-center gap-[10px] p-[20px_16px] rounded-[20px] border border-white/20 bg-transparent w-full lg:w-[426px]">
                    <h3 className="text-[#F8FFFF] font-manrope text-[20px] font-normal">Car & Cab Entry</h3>
                    <p className="text-[#E3F5F6] font-manrope text-[16px] font-normal opacity-80">
                        Use <span className="font-bold text-white">Gate 7</span> for all vehicle access and drop-offs.
                    </p>
                </div>

                {/* Box 2: Pedestrian */}
                <div className="flex flex-col justify-center gap-[10px] p-[20px_16px] rounded-[20px] border border-white/20 bg-transparent w-full lg:w-[426px]">
                    <h3 className="text-[#F8FFFF] font-manrope text-[20px] font-normal">Pedestrian Entry</h3>
                    <p className="text-[#E3F5F6] font-manrope text-[16px] font-normal opacity-80">
                        Use <span className="font-bold text-white">Gate 10</span> if arriving by metro or on foot.
                    </p>
                </div>

                {/* Box 3: Metro */}
                <div className="flex flex-col justify-center gap-[10px] p-[20px_16px] rounded-[20px] border border-white/20 bg-transparent w-full lg:w-[426px]">
                    <h3 className="text-[#F8FFFF] font-manrope text-[20px] font-normal">Nearest Metro</h3>
                    <p className="text-[#E3F5F6] font-manrope text-[16px] font-normal opacity-80">
                        Supreme Court Metro Station — a short walk to Gate 10.
                    </p>
                </div>
            </div>
            
            <p className="text-[#E3F5F6] font-manrope text-[14px] font-normal opacity-60 mt-2">
                Please follow venue signage upon arrival for smooth access.
            </p>
        </div>
      </div>

      {/* === NEED HELP === */}
      <div className="w-full max-w-[1377px] mt-[100px] flex flex-col gap-8 mb-10">
          <h2 className={`${blauerNue.className} text-[#F8FFFF] text-[36px] font-medium leading-[36px]`}>
            Need help? We're here.
          </h2>
          <div className="w-full border border-white/20 bg-white/5 rounded-[20px] p-8 md:p-10 flex flex-col gap-4">
              <p className="text-[#E6E6E6] font-manrope text-lg">Our team can assist with venue-related queries.</p>
              <div className="flex flex-col gap-1 text-[#E6E6E6]/80 font-manrope text-base mt-2">
                  <p>Phone: +91 8130027337, +91 8492010373</p>
                  <p>Mon - Fri, 8:30 to 17:30</p>
              </div>
          </div>
      </div>

      {/* === MAP SECTION === */}
      <div className="w-full max-w-[1380px] mb-20 flex justify-center">
         <div 
           className="w-full relative rounded-[20px] overflow-hidden shadow-2xl border border-white/10"
           style={{ aspectRatio: '1380/487' }}
         >
            <iframe
              src="https://maps.google.com/maps?q=Bharat+Mandapam%2C+Pragati+Maidan%2C+New+Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
         </div>
      </div>

    </div>
  );
};
export default VenuePage;