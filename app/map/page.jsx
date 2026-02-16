'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ZoomIn, ZoomOut, Navigation, ArrowLeft, Info } from 'lucide-react';
import Link from 'next/link';

export default function MapPage() {
  const [activeFloor, setActiveFloor] = useState('Ground Floor');

  const floors = ['Ground Floor', 'First Floor', 'Auditorium 2'];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden flex flex-col">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#151516]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/60 hover:text-white"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
          </Link>
          <div>
            <h1 className="text-lg font-medium tracking-wide">Interactive Venue Map</h1>
            <p className="text-xs text-white/40 font-light">SMRSC 2026 • Live Surgery Navigation</p>
          </div>
        </div>
        
        {/* Floor Selector */}
        <div className="hidden sm:flex bg-white/5 p-1 rounded-xl border border-white/10">
          {floors.map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={`px-4 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                activeFloor === floor 
                  ? 'bg-white/10 text-white shadow-sm' 
                  : 'text-white/40 hover:text-white/80'
              }`}
            >
              {floor}
            </button>
          ))}
        </div>
      </header>

      {/* MAP AREA */}
      <div className="flex-1 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1c] to-[#0a0a0a] flex items-center justify-center p-4 sm:p-8">
        
        {/* Background Grid Pattern for map aesthetic */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        {/* The "Map" Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="relative w-full max-w-5xl aspect-video border border-white/[0.05] bg-[#151516]/50 rounded-3xl shadow-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center"
        >
          {/* Example Map Pin / Point of Interest */}
          <div className="absolute top-1/3 left-1/3 group cursor-pointer">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-8 h-8 bg-blue-500/20 rounded-full animate-ping" />
              <div className="relative z-10 p-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 backdrop-blur-md transition-transform group-hover:scale-110">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              
              {/* Tooltip */}
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-48 z-20">
                <div className="bg-[#1c1c1e] border border-white/10 p-3 rounded-xl shadow-xl">
                  <h4 className="text-sm font-medium text-white mb-1">Auditorium 2</h4>
                  <p className="text-[11px] text-white/50 leading-tight">SSI Mantra Live Cardiac Surgery.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white/20 text-lg font-light tracking-widest uppercase">
            Map Placeholder Graphic
          </p>
        </motion.div>

        {/* Floating Action Buttons (Zoom & Tools) */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-2">
          <button className="p-3 bg-[#151516]/80 backdrop-blur-md border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-lg">
            <ZoomIn size={20} strokeWidth={1.5} />
          </button>
          <button className="p-3 bg-[#151516]/80 backdrop-blur-md border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-lg">
            <ZoomOut size={20} strokeWidth={1.5} />
          </button>
          <button className="p-3 bg-[#151516]/80 backdrop-blur-md border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all shadow-lg mt-2">
            <Navigation size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Floor Selector (visible only on small screens) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex sm:hidden bg-[#151516]/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-lg">
           <select 
             className="bg-transparent text-sm text-white px-4 py-2 outline-none appearance-none text-center"
             value={activeFloor}
             onChange={(e) => setActiveFloor(e.target.value)}
           >
             {floors.map(floor => (
               <option key={floor} value={floor} className="bg-[#151516]">{floor}</option>
             ))}
           </select>
        </div>
      </div>
    </main>
  );
}