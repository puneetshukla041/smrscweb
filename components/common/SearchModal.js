'use client';

import React, { useState, useEffect } from "react";
import { Search, MapPin, Users, FileText, Sparkles, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';

const SEARCH_INDEX = [
  { 
    title: "Cardiac Surgery on SSI Mantra", 
    href: "/map", 
    category: "Live Surgery & Map", 
    icon: <MapPin size={20} strokeWidth={1.5} />, 
    tags: ["cardiac", "surgery", "auditorium 2", "map", "navigation", "dr. sudhir srivastava", "day 2"] 
  },
  { title: "Conference Agenda & Schedule", href: "/explore", category: "Program", icon: <FileText size={20} strokeWidth={1.5} />, tags: ["timing", "dates", "plan", "day 1", "day 2", "day 3"] },
  { title: "Scientific Workshops", href: "/explore#workshops", category: "Program", icon: <FileText size={20} strokeWidth={1.5} />, tags: ["training", "hands on", "learning"] },
  { title: "Organizing Committee", href: "/about#committee", category: "Leadership", icon: <Users size={20} strokeWidth={1.5} />, tags: ["board", "team", "chairman", "secretary"] },
  { title: "International Faculty", href: "/about#faculty", category: "Speakers", icon: <Users size={20} strokeWidth={1.5} />, tags: ["doctors", "professors", "guests", "experts"] },
  { title: "Venue & Location", href: "/visit/venue", category: "Visit", icon: <MapPin size={20} strokeWidth={1.5} />, tags: ["address", "directions", "city"] },
  { title: "Hotel Accommodations", href: "/visit/hotels", category: "Visit", icon: <MapPin size={20} strokeWidth={1.5} />, tags: ["stay", "rooms", "booking", "lodging"] },
  { title: "Delegate Registration", href: "/register", category: "Action", icon: <Users size={20} strokeWidth={1.5} />, tags: ["sign up", "buy", "ticket", "fee"] },
  { title: "Contact Support", href: "/contactus", category: "Support", icon: <Users size={20} strokeWidth={1.5} />, tags: ["help", "email", "phone"] },
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
    }
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
      item.category.toLowerCase().includes(lowerQuery) ||
      item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
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
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }} // Apple-like easing curve
          className="fixed inset-0 z-[150] flex flex-col items-center pt-[15vh] px-4 font-sans"
        >
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-xl" 
            onClick={onClose}
          />
          <motion.div 
            initial={{ scale: 0.98, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.8 }}
            className="relative w-full max-w-2xl bg-[#1c1c1e]/80 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[60vh] ring-1 ring-white/5"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex items-center gap-4 p-5 border-b border-white/10 bg-[#2c2c2e]/40">
              <Search className="text-white/50" size={22} strokeWidth={1.5} />
              <input
                autoFocus
                type="text"
                placeholder="Search agenda, speakers, or venue..."
                className="flex-1 bg-transparent text-white text-lg placeholder:text-white/40 outline-none font-medium leading-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={onClose} 
                className="text-[11px] font-semibold text-white/40 border border-white/10 px-2 py-1 rounded hover:bg-white/10 transition-colors"
              >
                ESC
              </button>
            </div>

            <div className="overflow-y-auto p-2 scrollbar-hide">
              {query && results.length === 0 && (
                <div className="py-12 text-center text-white/40 text-sm font-medium">
                  <p>No results found for "{query}"</p>
                </div>
              )}

              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">
                  {query ? "Search Results" : "Suggested"}
                </span>
              </div>

              <div className="flex flex-col gap-1 pb-2 px-2">
                {results.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <motion.button
                      key={item.href + idx}
                      layout
                      onClick={() => handleSelect(item.href)}
                      onMouseEnter={() => setSelectedIndex(idx)} 
                      className={`relative flex items-center justify-between p-3 rounded-xl w-full text-left transition-all duration-200 ${isSelected ? 'bg-white/10 backdrop-blur-md shadow-sm border border-white/5' : 'hover:bg-white/5 border border-transparent'}`}
                    >
                      <div className="flex items-center gap-4 relative z-10">
                        <div className={`${isSelected ? 'text-white' : 'text-white/40'} transition-colors duration-200`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className={`text-[15px] font-medium leading-tight transition-colors duration-200 ${isSelected ? 'text-white' : 'text-white/70'}`}>
                            {item.name || item.title}
                          </h4>
                          {item.category && (
                            <span className={`text-[12px] font-medium mt-1 block transition-colors duration-200 ${isSelected ? 'text-[#3FD0D4]' : 'text-white/30'}`}>
                              {item.category}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className={`transition-all duration-200 flex items-center gap-2 ${isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                        {isSelected && (
                          <span className="text-[10px] font-medium text-white/50 mr-1">
                            Return
                          </span>
                        )}
                        <CornerDownLeft size={16} className="text-white/60" strokeWidth={1.5} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-[#2c2c2e]/40 p-2 px-4 flex items-center justify-between border-t border-white/10">
               <div className="flex gap-4">
                  <span className="text-[10px] text-white/40 flex items-center gap-1.5 font-medium tracking-wide">
                    <span className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-white/60 shadow-sm">↑</span>
                    <span className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-white/60 shadow-sm">↓</span>
                    Navigate
                  </span>
                  <span className="text-[10px] text-white/40 flex items-center gap-1.5 font-medium tracking-wide">
                    <span className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-white/60 shadow-sm">↵</span>
                    Select
                  </span>
               </div>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}