'use client';
import React from 'react';
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/footer';

const hotels = [
  {
    id: 1,
    name: 'Le Meridien, New Delhi',
    distance: '2.6 km',
    rating: '4.1',
    price: 'INR 18,000/ night',
    image: '/images/visit/venue1.webp',
  },
  {
    id: 2,
    name: 'Radisson Blu',
    distance: '2.6 km',
    rating: '4.1',
    price: 'INR 24,000/ night',
    image: '/images/visit/venue2.webp',
  },
  {
    id: 3,
    name: 'The LaLit',
    distance: '2.6 km',
    rating: '4.1',
    price: 'INR 15,000/ night',
    image: '/images/visit/venue3.webp',
  },
  {
    id: 4,
    name: 'Ambassador',
    distance: '2.6 km',
    rating: '4.1',
    price: 'INR 16,000/ night',
    image: '/images/visit/venue4.webp',
  },
  {
    id: 5,
    name: 'Andaz Delhi, by Hyatt',
    distance: '2.6 km',
    rating: '4.1',
    price: 'INR 12,000/ night',
    image: '/images/visit/venue5.webp',
  },
  {
    id: 6,
    name: 'The Park',
    distance: '2.6 km',
    rating: '4.1',
    price: 'INR 20,000/ night',
    image: '/images/visit/venue6.webp',
  },
];

const HotelsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 bg-[#020617] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center">
          
          {/* --- Section Title --- */}
          <div className="w-full max-w-[1344px] mb-12">
             <h2 className="text-3xl md:text-4xl font-semibold font-manrope">
               Stay nearby
            </h2>
          </div>

          {/* --- Hotels Grid --- */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1344px] mb-20">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="flex flex-col sm:flex-row items-center w-full max-w-[660px] p-6 gap-6 rounded-[20px] border border-white/10 bg-transparent"
              >
                {/* Image */}
                <div className="relative shrink-0">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    width={187}
                    height={175}
                    className="w-[187px] h-[175px] rounded-[20px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col w-full h-full justify-center">
                  <div>
                    <h3 className="font-manrope text-[28px] font-semibold leading-[24px] text-white mb-2">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300 mb-4 font-manrope">
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <span>{hotel.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FACC15" className="w-4 h-4">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span>{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="font-manrope text-[18px] font-normal leading-[16px] text-white">
                      {hotel.price}
                    </p>
                  </div>
                  {/* BUTTON REMOVED HERE */}
                </div>
              </div>
            ))}
          </div>

          {/* --- Need Help Section --- */}
          <div className="w-full max-w-[1344px] flex flex-col gap-6 mb-20">
            
            {/* Title */}
            <h2 className="text-[#F8FFFF] text-[36px] font-semibold leading-normal font-['Blauer_Nue'] w-full max-w-[472px]">
              Need help? We’re here.
            </h2>

            {/* Content Box */}
            <div className="w-full p-8 rounded-[20px] border border-white/10 bg-transparent">
              <div className="flex flex-col gap-6 text-[#F8FFFF] font-manrope text-[18px] font-normal leading-[20px]">
                
                <p>
                  Our team can assist with hotel bookings and accommodation-related queries for SMRSC 2026 attendees.
                </p>

                <div>
                  <p>Phone: +91 8130027337, +91 8492010373</p>
                  <p>Mon - Fri, 8:30 to 17:30</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HotelsPage;