'use client';
import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  // --- Styles ---

  const addressStyle = {
    color: '#FFF',
    fontFamily: "'Sora', sans-serif",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '32px', /* 228.571% */
  };

  const linkStyle = {
    color: '#FFF',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '32px',
    cursor: 'pointer',
    display: 'block', // Ensure links take up space
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
    <footer className="w-full pt-12 lg:pt-[100px] pb-[32px] px-6 lg:px-[270px] border-t border-white/10">
      
      {/* Font Imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500&family=Sora:wght@300&display=swap');
      `}</style>

      <div className="w-full mx-auto flex flex-col">
        
        {/* === TOP SECTION === */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0 mb-16">
          
          {/* 1. Logo Column */}
          <div className="flex-shrink-0 lg:mr-12">
            <img 
              src="/logos/header.png" 
              alt="SMRSC Logo" 
              className="w-[120px] h-auto brightness-200"
            />
          </div>

          {/* 2. Address Column */}
          <div style={addressStyle} className="lg:mr-auto w-full lg:w-[394px]">
            <p>Sudhir Srivastava Innovations Pvt. Ltd. (R&D HQ – India)</p>
            <p>404-405, 3rd Floor, iLabs Center, Udyog Vihar, Phase III, Gurugram, Haryana, India – 122016</p>
            <p>Phone: +91 8130027337 | +91 8130027785 | +91 8492010373</p>
            <p>Email: smrsc@ssinnovations.org</p>
            <p>Web: www.ssinnovations.com</p>
          </div>

          {/* Links Container */}
          <div className="flex flex-row w-full lg:w-auto justify-start gap-20 lg:gap-0 lg:contents">
            
            {/* 3. Links Column 1 */}
            <div className="flex flex-col gap-1 lg:mr-20">
              <Link href="/about" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                About SMRSC
              </Link>
              <Link href="/explore" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                Explore Event
              </Link>
              <Link href="/visit/venue" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                Venue
              </Link>
              
              {/* UPDATED: Brochure link does not redirect */}
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} 
                style={linkStyle} 
                className="hover:text-[#E3F5F6] transition-colors cursor-default opacity-80"
                title="Coming Soon"
              >
                Brochure
              </a>
            </div>

            {/* 4. Links Column 2 */}
            <div className="flex flex-col gap-1">
              <Link href="/media" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                Media
              </Link>
              <Link href="/register" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                Register now
              </Link>
              <Link href="/contactus" style={linkStyle} className="hover:text-[#E3F5F6] transition-colors">
                Contact us
              </Link>
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
            <a href="mailto:smrsc@ssinnovations.org" className="text-white hover:text-[#E3F5F6] transition-colors"><Mail size={20} /></a>
            <a href="tel:+918130027337" className="text-white hover:text-[#E3F5F6] transition-colors"><Phone size={20} /></a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-center">
              <Link href="#" style={bottomLinkStyle} className="hover:text-white">Cookies</Link>
              <span style={bottomLinkStyle}>|</span>
              <Link href="#" style={bottomLinkStyle} className="hover:text-white">Privacy Policy</Link>
              <span style={bottomLinkStyle}>|</span>
              <Link href="/contactus" style={bottomLinkStyle} className="hover:text-white">Contact us</Link>
              <span style={bottomLinkStyle}>|</span>
              <Link href="#" style={bottomLinkStyle} className="hover:text-white">Terms of use</Link>
              <span style={bottomLinkStyle}>|</span>
              <Link href="#" style={bottomLinkStyle} className="hover:text-white">Sitemap</Link>
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