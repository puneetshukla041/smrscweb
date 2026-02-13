'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SlidersHorizontal, Check } from 'lucide-react';

// ==========================================
//   HELPER COMPONENT: SCROLL ANIMATION
// ==========================================
const FadeInView = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Trigger if ANY part is visible (isIntersecting)
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0, // Trigger immediately upon entering viewport
      rootMargin: '50px' // Start animation slightly before element enters viewport
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  // Changed duration-1000 to duration-500 for faster animation
  return (
    <div
      ref={domRef}
      className={`w-full transition-all duration-500 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const FacultyTab = () => {
  // ==========================================
  //                STATE
  // ==========================================
  const [activeFilter, setActiveFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterOptions = [
    'All',
    'Cardiac',
    'Urology',
    'General Surgery',
    'Colorectal Surgery'
  ];

  // ==========================================
  //                DATA SOURCES
  // ==========================================

  // --- 1. INTERNATIONAL CARDIAC ---
  const internationalFacultyList = [
    { name: "Dr. Valluvan Jeevanandam", desc: "The University of Chicago Medicine...", image: "image2.webp" },
    { name: "Dr. T Sloane Guy", desc: "Georgia Heart Institute, Gainesville, GA, USA", image: "image3.webp" },
    { name: "Dr. Gianluca Torregrossa", desc: "Lankenau Heart Institute, Philadelphia, PA, USA", image: "image4.webp" },
    { name: "Dr. Frank Van Praet", desc: "OLV Clinic, Aalst, Belgium", image: "image5.webp" },
    { name: "Dr. Bob Kiaii", desc: "Foothills Medical Centre, University of Calgary", image: "image6.webp" },
    { name: "Dr. Jae Won Lee", desc: "Buchon Sejong Hospital, Seoul, South Korea", image: "image7.webp" },
    { name: "Dr John D Puskas", desc: "Emory University Hospital Midtown, Atlanta", image: "image8.webp" },
    { name: "Dr. Johannes Oliver Bonatti", desc: "University of Pittsburgh Medical Center", image: "image9.webp" },
    { name: "Dr. Dudy Hanafy", desc: "Harapan Kita Hospital, Jakarta, Indonesia", image: "image10.webp" },
    { name: "Dr. Go Watanabe", desc: "New Heart Watanabe Hospital, Tokyo, Japan", image: "image11.webp" },
    { name: "Dr. Nirav Patel", desc: "Lenox Hill Hospital, New York, NY, USA", image: "image12.webp" },
    { name: "Dr. Victor Castillo", desc: "Fundación Cardiovascular de Colombia", image: "image13.webp" },
    { name: "Dr. Feras Khaliel", desc: "King Faisal Specialist Hospital, Saudi Arabia", image: "image14.webp" }
  ];

  // --- 2. NATIONAL CARDIAC ---
  const nationalFacultyList = [
    { name: "Dr. Lalitaditya Malik", desc: "Manipal Hospitals, Jaipur, Rajasthan", image: "per2.webp" },
    { name: "Dr. Harish Badami", desc: "Malla Reddy Narayana Hospital, Hyderabad", image: "per3.webp" },
    { name: "Dr. Nitin Rajput", desc: "Medanta - The Medicity, Gurugram, Haryana", image: "per4.webp" },
    { name: "Dr. Hiremath CS", desc: "Sri Sathya Sai Institute, Bengaluru, KA", image: "per5.webp" },
    { name: "Dr. Ashok Seth", desc: "Fortis Escorts, Okhla, Delhi", image: "per6.webp" },
    { name: "Dr. Zile Singh Meherwal", desc: "Fortis Escorts, Okhla, Delhi", image: "per7.webp" },
    { name: "Dr. Yugal Kishore Mishra", desc: "Manipal Hospitals, Dwarka, Delhi", image: "per8.webp" },
    { name: "Dr. Praveen Chandra", desc: "Medanta - The Medicity, Gurugram, Haryana", image: "per9.webp" },
    { name: "Dr. Krishna Subramony Iyer", desc: "Fortis Escorts, Okhla, Delhi", image: "per10.webp" },
    { name: "Dr. Arul Furtado", desc: "Aster CMI Hospital, Bengaluru, KA", image: "per11.webp" },
    { name: "Dr. Ritwick Raj Bhuyan", desc: "Fortis Escorts, Okhla, Delhi", image: "per12.webp" },
    { name: "Dr. T.S. Mahant", desc: "Fortis Hospital, Mohali, PB", image: "per13.webp" },
    { name: "Dr. Ganeshakrishnan Iyer", desc: "Aster CMI Hospital, Bengaluru, KA", image: "per14.webp" },
    { name: "Dr. Manoj Durairaj", desc: "Marian Cardiac Centre, Pune, MH", image: "per15.webp" },
    { name: "Dr. M M Yusuf", desc: "Apollo Hospital, Chennai, TN", image: "per16.webp" },
    { name: "Dr. Ajay Kaul", desc: "Fortis Hospital, Noida, UP", image: "per17.webp" },
    { name: "Dr. Kunal Sarkar", desc: "Medica Superspecialty Hospital, Kolkata, WB", image: "per18.webp" },
    { name: "Dr. S K Agarwal", desc: "SGPGI, Lucknow, UP", image: "per19.webp" },
    { name: "Dr. Arunkumar Ulaganathan", desc: "KG Hospital, Coimbatore, TN", image: "per20.webp" },
    { name: "Dr. Devagourou Velayoudam", desc: "Aiims, New Delhi", image: "per21.webp" },
    { name: "Dr. Anubhav Gupta", desc: "Safdarjung Hospital, Delhi", image: "per22.webp" },
    { name: "Dr. Amit Chandan", desc: "Marengo CIMS Hospital, Ahmedabad, GJ", image: "per23.webp" },
    { name: "Dr. Satyajit Bose", desc: "The Mission Hospital, Durgapur, WB", image: "per24.webp" },
    { name: "Dr. Dhiren Shah", desc: "Marengo CIMS Hospital, Ahmedabad, GJ", image: "per25.webp" }
  ];

  const urologyFacultyList = [
    { name: "Dr. Amitabh Singh", desc: "RGCI, Delhi", image: "per4.webp" },
    { name: "Dr. Sarbartha Kumar Pratihar", desc: "RGCI, Delhi", image: "per5.webp" },
    { name: "Dr. Nikhil Saurabh", desc: "RGCI, Delhi", image: "per6.webp" },
    { name: "Dr. M Ramalingam", desc: "Hindustan Hospital, Coimbatore, TN", image: "per7.webp" },
    { name: "Dr. R.S. Sinha", desc: "VMMC & Safdarjung Hospital, New Delhi", image: "per8.webp" }
  ];

  const urologyCoChairpersons = [
    { name: "Dr. Chandra Mohan vaddi", desc: "Preeti Urology & Kidney Hospital", image: "per2.webp" },
    { name: "Dr. Ritesh Mongha", desc: "Metro Hospital, Faridabad, HR", image: "per3.webp" }
  ];

  const generalFacultyList = [
    { name: "Dr. Deepak Mittal", desc: "Aadhar Hospital, Hisar, HR", image: "per3.webp" },
    { name: "Dr. Harish Sharma", desc: "Aadhar Hospital, Hisar, HR", image: "per4.webp" }
  ];

  const colorectalFacultyList = [
    { name: "Dr. Deepak Mittal", desc: "Aadhar Hospital, Hisar, HR", image: "per3.webp" },
    { name: "Dr. Harish Sharma", desc: "Aadhar Hospital, Hisar, HR", image: "per4.webp" }
  ];

  // ==========================================
  //                STYLES
  // ==========================================

  const allSpecialtyStyle = {
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '36px',
  };

  const bannerContainerStyle = (color) => ({
    display: 'flex',
    width: '100%',
    maxWidth: '1390px', 
    padding: '20px',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: color,
    marginTop: '24px',
    marginBottom: '30px',
    borderRadius: '4px', 
  });

  const bannerTextStyle = {
    color: '#E6E6E6',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '32px',
  };

  const sectionLabelBoxStyle = {
    display: 'flex',
    width: '100%',
    maxWidth: '300px', // Responsive width
    padding: '10px 20px',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '20px',
    border: '1px solid #114D7E',
    background: 'linear-gradient(90deg, #1A689D 0%, rgba(0, 0, 0, 0.00) 42.79%)',
    marginBottom: '20px',
  };

  const sectionLabelTextStyle = {
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '40px',
  };

  const cardImageContainer = {
    position: 'relative',
    width: '100%',
    maxWidth: '300px', // Responsive width
    height: '373.333px',
    aspectRatio: '45/56',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  };

  const nameStyle = {
    display: 'flex',
    height: 'auto',
    minHeight: '27px',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '28px', 
    marginTop: '16px', 
  };

  const descStyle = {
    alignSelf: 'stretch',
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '18px', 
    marginTop: '4px',
    width: '100%',
    maxWidth: '300px', // Responsive width
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      
      {/* --- PAGE HEADER & FILTER --- */}
      <div className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-[1390px] relative gap-6 md:gap-0">
        <h2 style={allSpecialtyStyle} className="text-center md:text-left">{activeFilter === 'All' ? 'All Specialty' : `${activeFilter} Faculty`}</h2>
        
        <div className="relative">
            <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border shadow-lg transition-all duration-300 cursor-pointer ${
                    isFilterOpen 
                    ? 'bg-[#3FD0D4] border-[#3FD0D4] text-[#0B1C2E] shadow-[#3FD0D4]/20' 
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-[#3FD0D4] hover:text-[#3FD0D4]'
                }`}
            >
            <span className="text-sm font-semibold tracking-wide mr-2 hidden md:block">FILTER</span>
            <SlidersHorizontal size={20} />
            </button>

            {/* Filter Dropdown */}
            {isFilterOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-[#0B1C2E] border border-[#114D7E] rounded-2xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl bg-opacity-95">
                    {filterOptions.map((option) => (
                        <button
                            key={option}
                            onClick={() => {
                                setActiveFilter(option);
                                setIsFilterOpen(false);
                            }}
                            className="flex items-center justify-between w-full px-6 py-4 text-left text-gray-300 hover:bg-[#1A689D]/30 hover:text-white transition-all border-b border-white/5 last:border-0 cursor-pointer"
                        >
                            <span className="font-medium">{option}</span>
                            {activeFilter === option && <Check size={18} className="text-[#3FD0D4]" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
      </div>

      {/* =========================================================
                                CARDIAC SECTION
      ========================================================= */}
      {(activeFilter === 'All' || activeFilter === 'Cardiac') && (
        <FadeInView>
            {/* --- INTERNATIONAL CARDIAC --- */}
            <div style={bannerContainerStyle('rgba(121, 46, 46, 0.85)')} className="justify-center md:justify-start">
                <h3 style={bannerTextStyle}>International Faculty Cardiac</h3>
            </div>

            {/* Chairman Int. */}
            <div className="flex flex-col items-center md:items-start mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Chairman</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div style={cardImageContainer} className="group cursor-pointer">
                        <Image 
                            src="/images/about/faculty/image1.png" 
                            alt="Dr. Husam Balkhy" 
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                            unoptimized={true} // ⚡ ZERO BUFFERING
                        />
                    </div>
                    <div style={nameStyle}>Dr. Husam Balkhy</div>
                    <div style={descStyle}>The University of Chicago Medicine and Biological Sciences Chicago, Chicago, IL, USA</div>
                    </div>
                </FadeInView>
            </div>

            {/* Faculty Int. */}
            <div className="flex flex-col items-center md:items-start w-full mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Faculty Members</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
                {internationalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <Image 
                                src={`/images/about/${faculty.image}`} 
                                alt={faculty.name} 
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                                unoptimized={true} // ⚡ ZERO BUFFERING
                            />
                        </div>
                        <div style={nameStyle}>{faculty.name}</div>
                        <div style={descStyle}>{faculty.desc}</div>
                        </div>
                    </FadeInView>
                ))}
                </div>
            </div>

            {/* --- NATIONAL CARDIAC --- */}
            <div style={bannerContainerStyle('rgba(121, 46, 46, 0.85)')} className="justify-center md:justify-start">
                <h3 style={bannerTextStyle}>National Faculty Cardiac</h3>
            </div>

            {/* Chairman Nat. */}
            <div className="flex flex-col items-center md:items-start mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Chairman</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div style={cardImageContainer} className="group cursor-pointer">
                        <Image 
                            src="/images/about/cardiac/per1.webp" 
                            alt="Dr. Sudhir Srivastava" 
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                            unoptimized={true} // ⚡ ZERO BUFFERING
                        />
                    </div>
                    <div style={nameStyle}>Dr. Sudhir Srivastava</div>
                    <div style={descStyle}>Founder, Chairman and CEO SS Innovations, INDIA</div>
                    </div>
                </FadeInView>
            </div>

            {/* Faculty Nat. */}
            <div className="flex flex-col items-center md:items-start w-full mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Faculty Members</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
                {nationalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <Image 
                                src={`/images/about/cardiac/${faculty.image}`} 
                                alt={faculty.name} 
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                                unoptimized={true} // ⚡ ZERO BUFFERING
                            />
                        </div>
                        <div style={nameStyle}>{faculty.name}</div>
                        <div style={descStyle}>{faculty.desc}</div>
                        </div>
                    </FadeInView>
                ))}
                </div>
            </div>
        </FadeInView>
      )}


      {/* =========================================================
                                UROLOGY SECTION
      ========================================================= */}
      {(activeFilter === 'All' || activeFilter === 'Urology') && (
        <FadeInView>
            <div style={bannerContainerStyle('rgba(46, 88, 121, 0.85)')} className="justify-center md:justify-start">
                <h3 style={bannerTextStyle}>Urology Faculty</h3>
            </div>

            <div className="flex flex-wrap gap-16 mb-16 justify-center md:justify-start">
                {/* Chairman Urology */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Chairman</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                        <Image 
                            src="/images/about/urology/per1.webp" 
                            alt="Dr. Sudhir K Rawal" 
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                            unoptimized={true} // ⚡ ZERO BUFFERING
                        />
                        </div>
                        <div style={nameStyle}>Dr. Sudhir K Rawal</div>
                        <div style={descStyle}>Rajiv Gandhi Cancer Institute and Research Center</div>
                    </div>
                </FadeInView>
                </div>

                {/* Co-Chair Urology */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Co - Chairperson</span>
                </div>
                <div className="flex gap-8 flex-wrap justify-center md:justify-start">
                    {urologyCoChairpersons.map((co, index) => (
                    <FadeInView key={index} delay={100}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div style={cardImageContainer} className="group cursor-pointer">
                            <Image 
                                src={`/images/about/urology/${co.image}`} 
                                alt={co.name} 
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                                unoptimized={true} // ⚡ ZERO BUFFERING
                            />
                            </div>
                            <div style={nameStyle}>{co.name}</div>
                            <div style={descStyle}>{co.desc}</div>
                        </div>
                    </FadeInView>
                    ))}
                </div>
                </div>
            </div>

            {/* Faculty Urology */}
            <div className="flex flex-col items-center md:items-start w-full mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Faculty Members</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
                {urologyFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <Image 
                                src={`/images/about/urology/${faculty.image}`} 
                                alt={faculty.name} 
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                                unoptimized={true} // ⚡ ZERO BUFFERING
                            />
                        </div>
                        <div style={nameStyle}>{faculty.name}</div>
                        <div style={descStyle}>{faculty.desc}</div>
                        </div>
                    </FadeInView>
                ))}
                </div>
            </div>
        </FadeInView>
      )}


      {/* =========================================================
                            GENERAL SURGERY SECTION
      ========================================================= */}
      {(activeFilter === 'All' || activeFilter === 'General Surgery') && (
        <FadeInView>
            <div style={bannerContainerStyle('rgba(64, 25, 107, 0.85)')} className="justify-center md:justify-start">
                <h3 style={bannerTextStyle}>General Surgery Faculty</h3>
            </div>

            <div className="flex flex-wrap gap-16 mb-16 justify-center md:justify-start">
                {/* Chairman Gen. */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Chairman</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                        <Image 
                            src="/images/about/general/per1.webp" 
                            alt="Dr. Raj Gajbhiye" 
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                            unoptimized={true} // ⚡ ZERO BUFFERING
                        />
                        </div>
                        <div style={nameStyle}>Dr. Raj Gajbhiye</div>
                        <div style={descStyle}>Government Medical College, Nagpur, MH</div>
                    </div>
                </FadeInView>
                </div>

                {/* Co-Chair Gen. */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Co - Chairperson</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                        <Image 
                            src="/images/about/general/per2.webp" 
                            alt="Dr. Magan Mehrotra" 
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                            unoptimized={true} // ⚡ ZERO BUFFERING
                        />
                        </div>
                        <div style={nameStyle}>Dr. Magan Mehrotra</div>
                        <div style={descStyle}>Apex Hospital, Moradabad, UP</div>
                    </div>
                </FadeInView>
                </div>
            </div>

            {/* Faculty Gen. */}
            <div className="flex flex-col items-center md:items-start w-full mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Faculty Members</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
                {generalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <Image 
                                src={`/images/about/general/${faculty.image}`} 
                                alt={faculty.name} 
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                                unoptimized={true} // ⚡ ZERO BUFFERING
                            />
                        </div>
                        <div style={nameStyle}>{faculty.name}</div>
                        <div style={descStyle}>{faculty.desc}</div>
                        </div>
                    </FadeInView>
                ))}
                </div>
            </div>
        </FadeInView>
      )}

      {/* =========================================================
                          COLORECTAL SURGERY SECTION
      ========================================================= */}
      {(activeFilter === 'All' || activeFilter === 'Colorectal Surgery') && (
        <FadeInView>
            <div style={bannerContainerStyle('rgba(42, 85, 156, 0.85)')} className="justify-center md:justify-start">
                <h3 style={bannerTextStyle}>Colorectal Surgery Faculty</h3>
            </div>

            <div className="flex flex-wrap gap-16 mb-16 justify-center md:justify-start">
                {/* Chairman Colorectal */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Chairman</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                        <Image 
                            src="/images/about/general/per1.webp" 
                            alt="Dr. Raj Gajbhiye" 
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                            unoptimized={true} // ⚡ ZERO BUFFERING
                        />
                        </div>
                        <div style={nameStyle}>Dr. Raj Gajbhiye</div>
                        <div style={descStyle}>Government Medical College, Nagpur, MH</div>
                    </div>
                </FadeInView>
                </div>

                {/* Co-Chair Colorectal */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Co - Chairperson</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                        <Image 
                            src="/images/about/general/per2.webp" 
                            alt="Dr. Magan Mehrotra" 
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                            unoptimized={true} // ⚡ ZERO BUFFERING
                        />
                        </div>
                        <div style={nameStyle}>Dr. Magan Mehrotra</div>
                        <div style={descStyle}>Apex Hospital, Moradabad, UP</div>
                    </div>
                </FadeInView>
                </div>
            </div>

            {/* Faculty Colorectal */}
            <div className="flex flex-col items-center md:items-start w-full mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Faculty Members</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
                {colorectalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <Image 
                                src={`/images/about/general/${faculty.image}`} 
                                alt={faculty.name} 
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                                unoptimized={true} // ⚡ ZERO BUFFERING
                            />
                        </div>
                        <div style={nameStyle}>{faculty.name}</div>
                        <div style={descStyle}>{faculty.desc}</div>
                        </div>
                    </FadeInView>
                ))}
                </div>
            </div>
        </FadeInView>
      )}

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
};

export default FacultyTab;