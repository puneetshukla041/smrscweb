"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";

// --- Helper Functions ---
const formatTime = (val) => (val < 10 ? `0${val}` : `${val}`);

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// --- Sub-Components for Timer ---

const RollingDigit = ({ digit }) => {
  return (
    <div className="relative w-[9px] h-[20px] flex justify-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          // BUTTERY SMOOTH DIGITS: Lower stiffness, higher damping for a "glide" feel
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 24,
            mass: 1,
          }}
          className="absolute inset-0 flex items-center justify-center font-bold text-white"
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "15px",
            lineHeight: "20px",
            textShadow: "0px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const TimeUnit = ({ value, label }) => {
  const digits = value.toString().split("");
  return (
    <div className="flex flex-col items-center gap-0">
      <div className="flex h-[20px] overflow-hidden relative">
        {digits.map((d, i) => (
          <RollingDigit key={i} digit={d} />
        ))}
      </div>
      <span className="text-[7px] font-bold uppercase tracking-wider text-white/40 font-['Manrope'] leading-none mt-0.5">
        {label}
      </span>
    </div>
  );
};

const Separator = () => (
  <div className="flex flex-col h-[18px] justify-start pt-[2px]">
    <span className="text-white/30 text-[12px] font-bold animate-pulse leading-none">
      :
    </span>
  </div>
);

// --- Content Components ---

const CompactContent = () => (
  <motion.div
    layout // Crucial for smooth morphing
    initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
    transition={{ duration: 0.25, ease: "circOut" }}
    className="flex items-center justify-center w-full h-full gap-2 px-3 whitespace-nowrap"
  >
    <div className="w-1.5 h-1.5 bg-[#CE921B] rounded-full animate-pulse shadow-[0_0_8px_rgba(206,146,27,0.5)] flex-shrink-0" />
    <Clock className="w-3 h-3 text-white/50 flex-shrink-0" />
    <span className="text-[10px] font-bold text-white/90 tracking-widest font-['Manrope'] uppercase">
      SMRSC 2026
    </span>
  </motion.div>
);

const ExpandedTimerContent = () => {
  const targetDate = new Date("2026-04-08T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.div
      layout // Crucial for smooth morphing
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(4px)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex items-center justify-between w-full gap-3 px-1"
    >
      <div className="flex items-center gap-1.5 pl-1">
        <TimeUnit value={formatTime(timeLeft.days)} label="Days" />
        <Separator />
        <TimeUnit value={formatTime(timeLeft.hours)} label="Hrs" />
        <Separator />
        <TimeUnit value={formatTime(timeLeft.minutes)} label="Min" />
        <Separator />
        <TimeUnit value={formatTime(timeLeft.seconds)} label="Sec" />
      </div>

      <motion.div
        layout // Ensures the button slides into place smoothly
        className="flex h-7 items-center justify-center rounded-full px-3 text-[9px] font-bold text-white uppercase tracking-wider transition-transform active:scale-95 cursor-not-allowed whitespace-nowrap"
        style={{
          background: "linear-gradient(180deg, #CE921B 0%, #B88218 100%)",
          boxShadow:
            "0px 2px 8px rgba(206, 146, 27, 0.3), inset 0px 1px 0px rgba(255,255,255,0.2)",
          textShadow: "0px 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        Registration Opening Soon
      </motion.div>
    </motion.div>
  );
};

// --- Main Timer Component ---

export default function Timer() {
  const [active, setActive] = useState("idle");
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);

    const initialTimer = setTimeout(() => {
      setActive("timer");
    }, 1000);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < 15) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setActive("idle");
      } else if (currentScrollY < lastScrollY.current) {
        setActive("timer");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] flex flex-col items-center">
      <motion.div
        layout
        onClick={() => setActive(active === "idle" ? "timer" : "idle")}
        className={cn(
          "relative overflow-hidden flex items-center justify-center cursor-pointer select-none",
          active === "timer"
            ? "min-w-[330px] h-[54px] px-2"
            : "w-[140px] h-[34px]"
        )}
        style={{
          borderRadius: active === "timer" ? "28px" : "20px",
          background: "rgba(10, 10, 12, 0.95)",
          backdropFilter: "blur(25px) saturate(180%)",
          WebkitBackdropFilter: "blur(25px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow:
            "0px 10px 40px -10px rgba(0, 0, 0, 0.8), inset 0px 1px 0px rgba(255, 255, 255, 0.1)",
        }}
        // BUTTER PHYSICS:
        // Stiffness 280 is fast but not "snappy/jerky".
        // Damping 24 absorbs the momentum perfectly without bounce.
        transition={{
          layout: {
            type: "spring",
            stiffness: 280,
            damping: 24,
            mass: 0.8,
          },
        }}
      >
        {/* 'popLayout' allows the old component to leave WHILE the new one enters,
            creating a morphing effect rather than a wait-and-switch effect. */}
        <AnimatePresence mode="popLayout">
          {active === "idle" ? (
            <motion.div
              key="idle"
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CompactContent />
            </motion.div>
          ) : (
            <motion.div
              key="timer"
              className="w-full h-full flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ExpandedTimerContent />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}