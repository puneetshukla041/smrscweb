'use client';
import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  // --- Styles ---

  const addressStyle = {
    color: '#FFF',
    fontFamily: "'Sora', sans-serif",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '32px', /* 228.571% */
    // Moved 'width' to className for responsiveness
  };

  const linkStyle = {
    color: '#FFF',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '32px',
    cursor: 'pointer',
  };

  const bottomLinkStyle = {
    color: '#E9E9E9',
    fontFamily: "'Sora', sans-serif",
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '32px',
    cursor: 'pointer',
  };

  const copyrightStyle = {
    color: '#E9E9E9',
    fontFamily: "'Sora', sans-serif",
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '24px', 
    marginTop: '20px',
  };

  return (
    // UPDATED PADDING: 
    // - pt-12 (Mobile) -> lg:pt-[100px] (Desktop)
    // - pb-[32px] (Bottom)
    // - px-6 (Mobile) -> lg:px-[270px] (Desktop)
    <footer className="w-full pt-12 lg:pt-[100px] pb-[32px] px-6 lg:px-[270px] border-t border-white/10">
      
      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&family=Sora:wght@300&display=swap');
      `}</style>

      <div className="w-full mx-auto flex flex-col">
        
        {/* === TOP SECTION === */}
        {/* Mobile: Flex-col (stacked), Desktop: Flex-row (side-by-side) */}
        {/* Adjusted gap-12 to gap-10 for mobile to tighten spacing */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0 mb-16">
          
          {/* 1. Logo Column */}
          {/* Changed mr-12 to lg:mr-12 to remove right margin on mobile */}
          <div className="flex-shrink-0 lg:mr-12">
            <img 
              src="/logos/header.png" 
              alt="SMRSC Logo" 
              className="w-[120px] h-auto brightness-200"
            />
          </div>

          {/* 2. Address Column */}
          {/* Added className w-full lg:w-[394px] to handle responsive width */}
          <div style={addressStyle} className="lg:mr-auto w-full lg:w-[394px]">
            <p>Sudhir Srivastava Innovations Pvt. Ltd. (R&D HQ – India)</p>
            <p>404-405, 3rd Floor, iLabs Center, Udyog Vihar, Phase III, Gurugram, Haryana, India – 122016</p>
            <p>Phone: +91 8130027337 | +91 8130027785 | +91 8492010373</p>
            <p>Email: smrsc@ssinnovations.org</p>
            <p>Web: www.ssinnovations.com</p>
          </div>

          {/* MOBILE FIX: Wrapped Links in a container.
              - Mobile: flex-row gap-20 (side-by-side links)
              - Desktop: lg:contents (Unwraps the div, children become direct siblings of main container, preserving original desktop layout)
          */}
          <div className="flex flex-row w-full lg:w-auto justify-start gap-20 lg:gap-0 lg:contents">
            
            {/* 3. Links Column 1 */}
            {/* Changed mr-20 to lg:mr-20 */}
            <div className="flex flex-col gap-1 lg:mr-20">
              <a style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">About SMRSC</a>
              <a style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">Explore Event</a>
              <a style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">Venue</a>
              <a style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">Brochure</a>
            </div>

            {/* 4. Links Column 2 */}
            <div className="flex flex-col gap-1">
              <a style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">Media</a>
              <a style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">Register now</a>
              <a style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">Contact us</a>
            </div>

          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/20 mb-8" />

        {/* === BOTTOM SECTION === */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white hover:text-[#E3F5F6] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                 <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h0.001zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
               </svg>
            </a>
            <a href="#" className="text-white hover:text-[#E3F5F6] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white hover:text-[#E3F5F6] transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-white hover:text-[#E3F5F6] transition-colors"><Mail size={20} /></a>
            <a href="#" className="text-white hover:text-[#E3F5F6] transition-colors"><Phone size={20} /></a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-center">
              <span style={bottomLinkStyle} className="hover:text-white">Cookies</span>
              <span style={bottomLinkStyle}>|</span>
              <span style={bottomLinkStyle} className="hover:text-white">Privacy Policy</span>
              <span style={bottomLinkStyle}>|</span>
              <span style={bottomLinkStyle} className="hover:text-white">Contact us</span>
              <span style={bottomLinkStyle}>|</span>
              <span style={bottomLinkStyle} className="hover:text-white">Terms of use</span>
              <span style={bottomLinkStyle}>|</span>
              <span style={bottomLinkStyle} className="hover:text-white">Sitemap</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center w-full">
          <p style={copyrightStyle}>
            © Copyright SMRSC 2026 | All Rights Reserved.
          </p>
        </div>

      </div>
      
    </footer>
  );
};

export default Footer;