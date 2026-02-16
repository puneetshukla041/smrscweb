'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Header from '../components/Header'; // Assuming you have your header component

const FAQPage = () => {
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is SMRSC?",
      answer: "SMRSC (SSI Multi-Specialty Robotic Surgery Conference) is a global conference focused on robotic and technology-driven surgery, bringing together surgeons, innovators, educators, and healthcare leaders."
    },
    {
      question: "Who should attend SMRSC?",
      answer: "The conference is designed for surgeons, clinicians, hospital administrators, researchers, innovators, and fellowship trainees interested in robotic surgery and advanced surgical technologies."
    },
    {
      question: "Will there be live robotic surgeries?",
      answer: "Yes, live robotic surgical demonstrations are a key part of the conference program."
    },
    {
      question: "Is the conference academic or industry-focused?",
      answer: "SMRSC combines academic discussions, live clinical demonstrations, and technology showcases within a structured program."
    },
    {
      question: "How do I register?",
      // Note: Text from image duplicated the previous answer. 
      // I have kept it consistent with the image provided, but you may want to update this text.
      answer: "SMRSC combines academic discussions, live clinical demonstrations, and technology showcases within a structured program." 
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-[#02050A] text-white pt-32 pb-20 px-4 flex flex-col items-center">
        
        {/* Container constrained to the width of the answers as per specs (approx 1143px) */}
        <div className="w-full max-w-[1143px] flex flex-col">
          
          {/* Page Heading */}
          <h1 
            className="mb-16"
            style={{
              color: '#E5E5E5',
              fontFamily: 'Sora, sans-serif',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '50px',
            }}
          >
            Frequently Asked Questions
          </h1>

          {/* FAQ List */}
          <div className="flex flex-col w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className="border-b border-[#E5E5E5]/20 last:border-none"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-start justify-between w-full py-8 text-left group transition-colors duration-300"
                  >
                    <span 
                      style={{
                        maxWidth: '744px',
                        color: '#F8FFFF',
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '32px',
                      }}
                      className="group-hover:text-[#CE921B] transition-colors"
                    >
                      {faq.question}
                    </span>
                    
                    <span className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/30 transition-all duration-300 ${isOpen ? 'bg-white text-black border-white' : 'text-white'}`}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p 
                          className="pb-8"
                          style={{
                            maxWidth: '1143px', // Matches spec width for answers
                            color: '#E5E5E5',
                            fontFamily: 'Manrope, sans-serif',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '24px',
                            opacity: 0.8 // Visual adjustment for readability vs raw hex
                          }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom Button */}
          <div className="w-full flex justify-end mt-12">
            <button 
              className="flex items-center gap-2 bg-white text-[#02050A] px-6 py-3 rounded-full font-manrope font-medium text-sm hover:bg-gray-200 transition-colors"
            >
              View all Faqs
            </button>
          </div>

        </div>
      </main>
    </>
  );
};

export default FAQPage;