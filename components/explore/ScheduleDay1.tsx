'use client';
import React from 'react';

// --- Mock Data for Schedule ---
const scheduleData = [
  { time: "7:30 AM", title: "Registration and Continental Breakfast", speaker: "", type: "normal" },
  { time: "8:25 AM", title: "Master of Ceremony", speaker: "-Shruti Mishra", type: "normal" },
  { time: "8:30 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava", type: "normal" },
  { time: "8:30 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava", type: "normal" },
  { time: "8:30 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava", type: "normal" },
  { time: "8:30 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava", type: "normal" },
  { time: "8:30 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava", type: "normal" },
  { time: "9:45 AM", title: "Coffee Break", speaker: "", type: "break" },
  { time: "7:30 AM", title: "Registration and Continental Breakfast", speaker: "", type: "normal" },
  { time: "8:25 AM", title: "Master of Ceremony", speaker: "-Shruti Mishra", type: "normal" },
  { time: "8:30 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava", type: "normal" },
  { time: "8:30 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava", type: "normal" },
  { time: "8:30 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava", type: "normal" },
  { time: "8:30 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava", type: "normal" },
  { time: "8:30 AM", title: "Welcome Address", speaker: "-Dr. Vishwa Srivastava", type: "normal" },
  { time: "9:45 AM", title: "Coffee Break", speaker: "", type: "break" },
];

const ScheduleDay1 = () => {
  return (
    <div className="w-full flex flex-col items-center animate-fadeIn pb-20 pt-10 px-4 md:px-0 bg-[#020617]">
      
      {/* 1. Main Title */}
      <h1 className="text-white text-[48px] md:text-[64px] font-semibold font-['Blauer_Nue'] mb-10">
        Day - 1
      </h1>

      {/* 2. Section Title */}
      <div className="w-full max-w-[1200px] mb-6">
        <h2 className="text-white text-2xl md:text-[28px] font-medium font-manrope">
          Day 1 – Scientific Sessions & Keynotes
        </h2>
      </div>

      {/* 3. Schedule Container */}
      <div className="w-full max-w-[1200px] relative rounded-t-[20px] bg-[#0a0a0a]/50 border border-white/5 shadow-2xl flex flex-col">
        
        {/* Header Bar 1: Date (Styled as requested) */}
        <div 
          className="w-full"
          style={{
            display: 'flex',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            borderRadius: '20px 20px 0px 0px',
            background: 'linear-gradient(90deg, rgba(11, 211, 211, 0.80) 2.04%, rgba(34, 92, 240, 0.80) 99.58%)'
          }}
        >
           <span className="text-white text-lg font-medium">8'th March 2026</span>
        </div>

        {/* Header Bar 2: Hall Info */}
        <div className="w-full h-[50px] bg-[#111111] flex items-center px-6 md:px-10 relative border-b border-white/10">
           <span className="text-[#E6E6E6] text-base font-medium">DAY 1: Hall A</span>
        </div>

        {/* Schedule List */}
        <div className="w-full flex flex-col">
          {scheduleData.map((item, idx) => (
             <React.Fragment key={idx}>
               {item.type === 'break' ? (
                 // Break Row (Styled as requested)
                 <div className="px-6 md:px-10 my-2">
                   <div 
                     style={{
                        display: 'flex',
                        padding: '8px 10px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        borderRadius: '10px',
                        background: 'linear-gradient(90deg, rgba(11, 211, 211, 0.40) 2.04%, rgba(34, 92, 240, 0.40) 99.58%)',
                        backdropFilter: 'blur(2px)',
                      }}
                   >
                      <span className="text-white text-sm font-medium">{item.title}</span>
                      <span className="text-white text-sm font-medium">{item.time}</span>
                   </div>
                 </div>
               ) : (
                 // Normal Row
                 <div className="w-full py-4 px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center border-b border-white/5 hover:bg-white/5 transition-colors">
                    {/* Time */}
                    <div className="w-[100px] shrink-0 text-[#A0A0A0] text-xs font-manrope uppercase tracking-wide">
                      {item.time}
                    </div>
                    
                    {/* Title */}
                    <div className="flex-grow text-[#E3F5F6] text-sm font-medium font-manrope">
                      {item.title}
                    </div>
                    
                    {/* Speaker */}
                    {item.speaker && (
                      <div className="shrink-0 text-[#A0A0A0] text-xs font-manrope text-right mt-1 md:mt-0">
                        {item.speaker}
                      </div>
                    )}
                 </div>
               )}
             </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ScheduleDay1;