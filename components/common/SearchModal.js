'use client';

import React, { useState, useEffect } from "react";
import { Search, MapPin, Users, FileText, Sparkles, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';

const SEARCH_INDEX = [
  { title: "Conference Agenda & Schedule", href: "/explore", category: "Program", icon: <FileText size={20}/>, tags: ["timing", "dates", "plan", "day 1", "day 2", "day 3"] },
  { title: "Scientific Workshops", href: "/explore#workshops", category: "Program", icon: <FileText size={20}/>, tags: ["training", "hands on", "learning"] },
  { title: "Organizing Committee", href: "/about#committee", category: "Leadership", icon: <Users size={20}/>, tags: ["board", "team", "chairman", "secretary"] },
  { title: "International Faculty", href: "/about#faculty", category: "Speakers", icon: <Users size={20}/>, tags: ["doctors", "professors", "guests", "experts"] },
  { title: "Venue & Location", href: "/visit/venue", category: "Visit", icon: <MapPin size={20}/>, tags: ["address", "map", "directions", "city"] },
  { title: "Hotel Accommodations", href: "/visit/hotels", category: "Visit", icon: <MapPin size={20}/>, tags: ["stay", "rooms", "booking", "lodging"] },
  { title: "Delegate Registration", href: "/register", category: "Action", icon: <Users size={20}/>, tags: ["sign up", "buy", "ticket", "fee"] },
  { title: "Contact Support", href: "/contactus", category: "Support", icon: <Users size={20}/>, tags: ["help", "email", "phone"] },
];

const QUICK_LINKS = [
  { name: "Scientific Agenda", href: "/explore", icon: <FileText size={18} /> },
  { name: "Registration", href: "/register", icon: <Users size={18} /> },
  { name: "Venue Map", href: "/visit/venue", icon: <MapPin size={18} /> },
  { name: "Contact Support", href: "/contactus", icon: <Sparkles size={18} /> }
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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[150] flex flex-col items-center pt-[15vh] px-4 font-sans"
        >
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md" 
            onClick={onClose}
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-full max-w-2xl bg-black/40 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[60vh] ring-1 ring-white/5"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex items-center gap-4 p-5 border-b border-white/10">
              <Search className="text-white/50" size={24} strokeWidth={2} />
              <input
                autoFocus
                type="text"
                placeholder="Search agenda, speakers, or venue..."
                className="flex-1 bg-transparent text-white text-xl placeholder:text-white/40 outline-none font-medium leading-none"
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
                <div className="py-12 text-center text-white/30 text-base font-medium">
                  <p>No results found for "{query}"</p>
                </div>
              )}

              <div className="px-3 py-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white/30 uppercase tracking-wider">
                  {query ? "Search Results" : "Suggested"}
                </span>
              </div>

              <div className="flex flex-col gap-1 pb-2">
                {results.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <motion.button
                      key={item.href + idx}
                      layout
                      onClick={() => handleSelect(item.href)}
                      onMouseEnter={() => setSelectedIndex(idx)} 
                      className={`relative flex items-center justify-between p-3 rounded-xl w-full text-left transition-all duration-200 ${isSelected ? 'bg-white/10 backdrop-blur-md shadow-lg border border-white/5' : 'hover:bg-white/5 border border-transparent'}`}
                    >
                      <div className="flex items-center gap-4 relative z-10">
                        <div className={`${isSelected ? 'text-white' : 'text-white/50'} transition-colors duration-200`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className={`text-[15px] font-medium leading-tight transition-colors duration-200 ${isSelected ? 'text-white' : 'text-white/80'}`}>
                            {item.name || item.title}
                          </h4>
                          {item.category && (
                            <span className={`text-[12px] font-medium mt-0.5 block transition-colors duration-200 ${isSelected ? 'text-white/60' : 'text-white/30'}`}>
                              {item.category}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className={`transition-all duration-200 flex items-center gap-2 ${isSelected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                        {isSelected && (
                          <span className="text-[10px] font-medium text-white/50 mr-1">
                            Open
                          </span>
                        )}
                        <CornerDownLeft size={16} className="text-white" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
            
            <div className="bg-white/5 p-2 px-4 flex items-center justify-between border-t border-white/5">
               <div className="flex gap-4">
                  <span className="text-[10px] text-white/40 flex items-center gap-1.5 font-medium">
                    <span className="bg-white/10 border border-white/5 px-1.5 py-0.5 rounded-md text-white/70 shadow-sm">↑</span>
                    <span className="bg-white/10 border border-white/5 px-1.5 py-0.5 rounded-md text-white/70 shadow-sm">↓</span>
                    to navigate
                  </span>
                  <span className="text-[10px] text-white/40 flex items-center gap-1.5 font-medium">
                    <span className="bg-white/10 border border-white/5 px-1.5 py-0.5 rounded-md text-white/70 shadow-sm">↵</span>
                    to select
                  </span>
               </div>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}