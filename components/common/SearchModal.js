'use client';

import React, { useState, useEffect } from "react";
import { Search, MapPin, Users, FileText, Sparkles, CornerDownLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';

const SEARCH_INDEX = [
  { 
    title: "Cardiac Surgery on SSI Mantra", 
    href: "/map", 
    category: "Live Surgery & Map", 
    icon: <MapPin size={18} strokeWidth={1.5} />, 
    tags: ["cardiac", "surgery", "auditorium 2", "map", "navigation", "dr. sudhir srivastava", "day 2"] 
  },
  { title: "Conference Agenda & Schedule", href: "/explore", category: "Program", icon: <FileText size={18} strokeWidth={1.5} />, tags: ["timing", "dates", "plan", "day 1", "day 2", "day 3"] },
  { title: "Scientific Workshops", href: "/explore#workshops", category: "Program", icon: <FileText size={18} strokeWidth={1.5} />, tags: ["training", "hands on", "learning"] },
  { title: "Organizing Committee", href: "/about#committee", category: "Leadership", icon: <Users size={18} strokeWidth={1.5} />, tags: ["board", "team", "chairman", "secretary"] },
  { title: "International Faculty", href: "/about#faculty", category: "Speakers", icon: <Users size={18} strokeWidth={1.5} />, tags: ["doctors", "professors", "guests", "experts"] },
  { title: "Venue & Location", href: "/visit/venue", category: "Visit", icon: <MapPin size={18} strokeWidth={1.5} />, tags: ["address", "directions", "city"] },
  { title: "Hotel Accommodations", href: "/visit/hotels", category: "Visit", icon: <MapPin size={18} strokeWidth={1.5} />, tags: ["stay", "rooms", "booking", "lodging"] },
  { title: "Delegate Registration", href: "/register", category: "Action", icon: <Users size={18} strokeWidth={1.5} />, tags: ["sign up", "buy", "ticket", "fee"] },
  { title: "Contact Support", href: "/contactus", category: "Support", icon: <Users size={18} strokeWidth={1.5} />, tags: ["help", "email", "phone"] },
];

const QUICK_LINKS = [
  { name: "Scientific Agenda", href: "/explore", icon: <FileText size={18} strokeWidth={1.5} /> },
  { name: "Registration", href: "/register", icon: <Users size={18} strokeWidth={1.5} /> },
  { name: "Venue Map", href: "/visit/venue", icon: <MapPin size={18} strokeWidth={1.5} /> },
  { name: "Contact Support", href: "/contactus", icon: <Sparkles size={18} strokeWidth={1.5} /> }
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0); 
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setQuery(""), 100);
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling on mobile
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    if (!query) {
      setResults(QUICK_LINKS); 
      setSelectedIndex(0);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.category?.toLowerCase().includes(lowerQuery) ||
      item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
    setResults(filtered);
    setSelectedIndex(0); 
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].href);
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, results]);

  const handleSelect = (href) => {
    router.push(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }} 
          className="fixed inset-0 z-[150] flex flex-col items-center justify-start pt-[5vh] sm:pt-[12vh] px-4 sm:px-6 font-sans"
        >
          {/* Deep Blur Backdrop */}
          <div 
            className="absolute inset-0 bg-[#000000]/50 backdrop-blur-xl" 
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ scale: 0.96, opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ scale: 1, opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ scale: 0.98, opacity: 0, y: 10, filter: "blur(8px)" }}
            transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
            className="relative w-full max-w-2xl bg-[#151516]/85 backdrop-blur-3xl border border-white/[0.08] rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[65vh]"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* SEARCH INPUT HEADER */}
            <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 border-b border-white/[0.08] bg-white/[0.02]">
              <Search className="text-white/40 flex-shrink-0" size={22} strokeWidth={1.5} />
              <input
                autoFocus
                type="text"
                placeholder="Search agenda, speakers, or venue..."
                className="flex-1 bg-transparent text-white text-xl sm:text-2xl font-light placeholder:text-white/30 outline-none leading-none tracking-wide"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {/* Mobile Close Icon */}
              <button 
                onClick={onClose} 
                className="sm:hidden text-white/50 hover:text-white transition-colors p-2 cursor-pointer"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
              {/* Desktop ESC Button */}
              <button 
                onClick={onClose} 
                className="hidden sm:block text-[10px] tracking-wider font-medium text-white/40 bg-white/5 border border-white/[0.08] px-2 py-1 rounded hover:bg-white/10 hover:text-white transition-colors uppercase cursor-pointer"
              >
                ESC
              </button>
            </div>

            {/* RESULTS BODY */}
            <div className="overflow-y-auto p-2 scrollbar-hide flex-1 overscroll-contain">
              {query && results.length === 0 && (
                <div className="py-16 text-center text-white/40 text-sm font-light tracking-wide">
                  <p>No results found for "{query}"</p>
                </div>
              )}

              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white/30 uppercase tracking-widest">
                  {query ? "Results" : "Suggestions"}
                </span>
              </div>

              <div className="flex flex-col gap-1 pb-2 px-1 sm:px-2">
                {results.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <motion.button
                      key={item.href + idx}
                      layout
                      whileTap={{ scale: 0.98 }} // Native iOS tap feeling
                      onClick={() => handleSelect(item.href)}
                      onMouseEnter={() => setSelectedIndex(idx)} 
                      className={`relative flex items-center justify-between px-4 py-3.5 sm:py-4 rounded-xl w-full text-left transition-all duration-200 cursor-pointer outline-none ${
                        isSelected 
                          ? 'bg-white/[0.08] shadow-sm' 
                          : 'hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-4 relative z-10">
                        <div className={`p-1.5 rounded-lg transition-colors duration-200 flex items-center justify-center ${
                          isSelected ? 'bg-white/10 text-white shadow-sm' : 'text-white/40'
                        }`}>
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <h4 className={`text-[15px] sm:text-[16px] tracking-wide transition-colors duration-200 ${
                            isSelected ? 'text-white font-medium' : 'text-white/80 font-light'
                          }`}>
                            {item.name || item.title}
                          </h4>
                          {item.category && (
                            <span className={`text-[11px] sm:text-[12px] mt-0.5 block transition-colors duration-200 ${
                              isSelected ? 'text-white/70 font-medium' : 'text-white/30 font-light'
                            }`}>
                              {item.category}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className={`hidden sm:flex transition-all duration-200 items-center gap-2 ${
                        isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}>
                        {isSelected && (
                          <span className="text-[10px] font-medium text-white/40 mr-1">
                            Jump to
                          </span>
                        )}
                        <CornerDownLeft size={16} className="text-white/50" strokeWidth={1.5} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            
            {/* APPLE STYLE FOOTER (Hidden on mobile, visible on tablet/desktop) */}
            <div className="hidden sm:flex bg-[#1c1c1e]/60 px-6 py-3 items-center justify-between border-t border-white/[0.05]">
               <div className="flex gap-6">
                  <div className="flex items-center gap-2 text-[11px] text-white/40 font-light tracking-wide">
                    <div className="flex items-center gap-1">
                      <kbd className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[10px] font-sans text-white/60 shadow-sm">↑</kbd>
                      <kbd className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[10px] font-sans text-white/60 shadow-sm">↓</kbd>
                    </div>
                    Navigate
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-white/40 font-light tracking-wide">
                    <kbd className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[10px] font-sans text-white/60 shadow-sm">↵</kbd>
                    Select
                  </div>
               </div>
               
               {/* Apple minimalist watermark detail */}
               <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-medium">
                 SMRSC 2026
               </div>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}