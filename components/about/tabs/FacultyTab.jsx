'use client';
import React, { useState, useEffect, useRef } from 'react';
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
    { name: "Dr. Valluvan Jeevanandam", desc: "The University of Chicago Medicine and Biological Sciences Chicago, Chicago, IL, USA", image: "image2.png" },
    { name: "Dr. T Sloane Guy", desc: "Georgia Heart Institute, Gainesville, GA, USA", image: "image3.png" },
    { name: "Dr. Gianluca Torregrossa", desc: "Lankenau Heart Institute, Philadelphia, PA, USA", image: "image4.png" },
    { name: "Dr. Frank Van Praet", desc: "OLV Clinic, Aalst, Belgium", image: "image5.png" },
    { name: "Dr. Bob Kiaii", desc: "Foothills Medical Centre, Libin Cardiovascular Institute, University of Calgary", image: "image6.png" },
    { name: "Dr. Jae Won Lee", desc: "Buchon Sejong Hospital, Seoul, South Korea", image: "image7.png" },
    { name: "Dr John D Puskas", desc: "Emory University Hospital Midtown, Atlanta", image: "image8.png" },
    { name: "Dr. Johannes Oliver Bonatti", desc: "University of Pittsburgh Medical Center, Pittsburg, PA, USA", image: "image9.png" },
    { name: "Dr. Dudy Hanafy", desc: "Harapan Kita Hospital, Jakarta, Indonesia", image: "image10.png" },
    { name: "Dr. Go Watanabe", desc: "New Heart Watanabe Hospital, Tokyo, Japan", image: "image11.png" },
    { name: "Dr. Nirav Patel", desc: "Lenox Hill Hospital, New York, NY, USA", image: "image12.png" },
    { name: "Dr. Victor Castillo", desc: "Fundación Cardiovascular de Colombia, Bucaramanga, Colombia", image: "image13.png" },
    { name: "Dr. Feras Khaliel", desc: "King Faisal Specialist Hospital and Research Centre, Riyadh, Saudi Arabia", image: "image14.png" }
  ];

  // --- 2. NATIONAL CARDIAC ---
  const nationalFacultyList = [
    { name: "Dr. Lalitaditya Malik", desc: "Manipal Hospitals, Jaipur, Rajasthan", image: "per2.png" },
    { name: "Dr. Harish Badami", desc: "Malla Reddy Narayana Multispeciality Hospital, Hyderabad", image: "per3.png" },
    { name: "Dr. Nitin Rajput", desc: "Medanta - The Medicity, Gurugram, Haryana", image: "per4.png" },
    { name: "Dr. Hiremath CS", desc: "Sri Sathya Sai Institute of Higher Medical Sciences, Bengaluru, KA", image: "per5.png" },
    { name: "Dr. Ashok Seth", desc: "Fortis Escorts, Okhla, Delhi", image: "per6.png" },
    { name: "Dr. Zile Singh Meherwal", desc: "Fortis Escorts, Okhla, Delhi", image: "per7.png" },
    { name: "Dr. Yugal Kishore Mishra", desc: "Manipal Hospitals, Dwarka, Delhi", image: "per8.png" },
    { name: "Dr. Praveen Chandra", desc: "Medanta - The Medicity, Gurugram, Haryana", image: "per9.png" },
    { name: "Dr. Krishna Subramony Iyer", desc: "Fortis Escorts, Okhla, Delhi", image: "per10.png" },
    { name: "Dr. Arul Furtado", desc: "Aster CMI Hospital, Bengaluru, KA", image: "per11.png" },
    { name: "Dr. Ritwick Raj Bhuyan", desc: "Fortis Escorts, Okhla, Delhi", image: "per12.png" },
    { name: "Dr. T.S. Mahant", desc: "Fortis Hospital, Mohali, PB", image: "per13.png" },
    { name: "Dr. Ganeshakrishnan Iyer", desc: "Aster CMI Hospital, Bengaluru, KA", image: "per14.png" },
    { name: "Dr. Manoj Durairaj", desc: "Marian Cardiac Centre and Research Foundation, Pune, MH", image: "per15.png" },
    { name: "Dr. M M Yusuf", desc: "Apollo Hospital, Chennai, TN", image: "per16.png" },
    { name: "Dr. Ajay Kaul", desc: "Fortis Hospital, Noida, UP", image: "per17.png" },
    { name: "Dr. Kunal Sarkar", desc: "Medica Superspecialty Hospital, Kolkata, WB", image: "per18.png" },
    { name: "Dr. S K Agarwal", desc: "Sanjay Gandhi Postgraduate Institute of Medical Sciences, Lucknow, UP", image: "per19.png" },
    { name: "Dr. Arunkumar Ulaganathan", desc: "KG Hospital, Coimbatore, TN", image: "per20.png" },
    { name: "Dr. Devagourou Velayoudam", desc: "Aiims, New Delhi", image: "per21.png" },
    { name: "Dr. Anubhav Gupta", desc: "Vardhman Mahavir Medical College and Safdarjung Hospital, Delhi", image: "per22.png" },
    { name: "Dr. Amit Chandan", desc: "Marengo CIMS Hospital, Ahmedabad, GJ", image: "per23.png" },
    { name: "Dr. Satyajit Bose", desc: "The Mission Hospital, Durgapur, WB", image: "per24.png" },
    { name: "Dr. Dhiren Shah", desc: "Marengo CIMS Hospital, Ahmedabad, GJ", image: "per25.png" }
  ];

  // --- 3. UROLOGY ---
  const urologyFacultyList = [
    { name: "Dr. Amitabh Singh", desc: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", image: "per4.png" },
    { name: "Dr. Sarbartha Kumar Pratihar", desc: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", image: "per5.png" },
    { name: "Dr. Nikhil Saurabh", desc: "Rajiv Gandhi Cancer Institute and Research Center, Delhi", image: "per6.png" },
    { name: "Dr. M Ramalingam", desc: "Hindustan Hospital, Coimbatore, TN", image: "per7.png" },
    { name: "Dr. R.S. Sinha", desc: "VMMC & Safdarjung Hospital, New Delhi", image: "per8.png" }
  ];
  const urologyCoChairpersons = [
    { name: "Dr. Chandra Mohan vaddi", desc: "Preeti Urology & Kidney Hospital, Hyderabad, TL", image: "per2.png" },
    { name: "Dr. Ritesh Mongha", desc: "Metro Hospital, Faridabad, HR", image: "per3.png" }
  ];

  // --- 4. GENERAL SURGERY ---
  const generalFacultyList = [
    { name: "Dr. Deepak Mittal", desc: "Aadhar Hospital, Hisar, HR", image: "per3.png" },
    { name: "Dr. Harish Sharma", desc: "Aadhar Hospital, Hisar, HR", image: "per4.png" }
  ];

  // --- 5. COLORECTAL SURGERY ---
  const colorectalFacultyList = [
    { name: "Dr. Deepak Mittal", desc: "Aadhar Hospital, Hisar, HR", image: "per3.png" },
    { name: "Dr. Harish Sharma", desc: "Aadhar Hospital, Hisar, HR", image: "per4.png" }
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
      {/* Updated: flex-col for mobile to center/stack, md:flex-row to keep desktop as is */}
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
            {/* Updated: items-center for mobile, md:items-start for desktop */}
            <div className="flex flex-col items-center md:items-start mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Chairman</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div style={cardImageContainer} className="group cursor-pointer">
                        <img 
                            src="/images/about/faculty/image1.png" 
                            alt="Dr. Husam Balkhy" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                        />
                    </div>
                    <div style={nameStyle}>Dr. Husam Balkhy</div>
                    <div style={descStyle}>The University of Chicago Medicine and Biological Sciences Chicago, Chicago, IL, USA</div>
                    </div>
                </FadeInView>
            </div>

            {/* Faculty Int. */}
            {/* Updated: items-center for mobile, md:items-start for desktop */}
            <div className="flex flex-col items-center md:items-start w-full mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Faculty Members</span>
                </div>
                {/* Updated: justify-items-center for mobile grid alignment */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
                {internationalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <img 
                                src={`/images/about/${faculty.image}`} 
                                alt={faculty.name} 
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
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
            {/* Updated: items-center for mobile, md:items-start for desktop */}
            <div className="flex flex-col items-center md:items-start mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Chairman</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div style={cardImageContainer} className="group cursor-pointer">
                        <img 
                            src="/images/about/cardiac/per1.png" 
                            alt="Dr. Sudhir Srivastava" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                        />
                    </div>
                    <div style={nameStyle}>Dr. Sudhir Srivastava</div>
                    <div style={descStyle}>Founder, Chairman and CEO SS Innovations, INDIA</div>
                    </div>
                </FadeInView>
            </div>

            {/* Faculty Nat. */}
            {/* Updated: items-center for mobile, md:items-start for desktop */}
            <div className="flex flex-col items-center md:items-start w-full mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Faculty Members</span>
                </div>
                {/* Updated: justify-items-center for mobile grid alignment */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
                {nationalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <img 
                                src={`/images/about/cardiac/${faculty.image}`} 
                                alt={faculty.name} 
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
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
                {/* Updated: items-center for mobile, md:items-start for desktop */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Chairman</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                        <img 
                            src="/images/about/urology/per1.png" 
                            alt="Dr. Sudhir K Rawal" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                        />
                        </div>
                        <div style={nameStyle}>Dr. Sudhir K Rawal</div>
                        <div style={descStyle}>Rajiv Gandhi Cancer Institute and Research Center</div>
                    </div>
                </FadeInView>
                </div>

                {/* Co-Chair Urology */}
                {/* Updated: items-center for mobile, md:items-start for desktop */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Co - Chairperson</span>
                </div>
                {/* Updated: justify-center for mobile */}
                <div className="flex gap-8 flex-wrap justify-center md:justify-start">
                    {urologyCoChairpersons.map((co, index) => (
                    <FadeInView key={index} delay={100}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div style={cardImageContainer} className="group cursor-pointer">
                            <img 
                                src={`/images/about/urology/${co.image}`} 
                                alt={co.name} 
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
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
            {/* Updated: items-center for mobile, md:items-start for desktop */}
            <div className="flex flex-col items-center md:items-start w-full mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Faculty Members</span>
                </div>
                {/* Updated: justify-items-center for mobile grid alignment */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
                {urologyFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <img 
                                src={`/images/about/urology/${faculty.image}`} 
                                alt={faculty.name} 
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
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
                {/* Updated: items-center for mobile, md:items-start for desktop */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Chairman</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                        <img 
                            src="/images/about/general/per1.png" 
                            alt="Dr. Raj Gajbhiye" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                        />
                        </div>
                        <div style={nameStyle}>Dr. Raj Gajbhiye</div>
                        <div style={descStyle}>Government Medical College, Nagpur, MH</div>
                    </div>
                </FadeInView>
                </div>

                {/* Co-Chair Gen. */}
                {/* Updated: items-center for mobile, md:items-start for desktop */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Co - Chairperson</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                        <img 
                            src="/images/about/general/per2.png" 
                            alt="Dr. Magan Mehrotra" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                        />
                        </div>
                        <div style={nameStyle}>Dr. Magan Mehrotra</div>
                        <div style={descStyle}>Apex Hospital, Moradabad, UP</div>
                    </div>
                </FadeInView>
                </div>
            </div>

            {/* Faculty Gen. */}
            {/* Updated: items-center for mobile, md:items-start for desktop */}
            <div className="flex flex-col items-center md:items-start w-full mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Faculty Members</span>
                </div>
                {/* Updated: justify-items-center for mobile grid alignment */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
                {generalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <img 
                                src={`/images/about/general/${faculty.image}`} 
                                alt={faculty.name} 
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
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
                {/* Chairman Colorectal - Reusing per1.png */}
                {/* Updated: items-center for mobile, md:items-start for desktop */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Chairman</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                        <img 
                            src="/images/about/general/per1.png" 
                            alt="Dr. Raj Gajbhiye" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                        />
                        </div>
                        <div style={nameStyle}>Dr. Raj Gajbhiye</div>
                        <div style={descStyle}>Government Medical College, Nagpur, MH</div>
                    </div>
                </FadeInView>
                </div>

                {/* Co-Chair Colorectal - Reusing per2.png */}
                {/* Updated: items-center for mobile, md:items-start for desktop */}
                <div className="flex flex-col items-center md:items-start">
                <div style={sectionLabelBoxStyle}>
                    <span style={sectionLabelTextStyle}>Co - Chairperson</span>
                </div>
                <FadeInView>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                        <img 
                            src="/images/about/general/per2.png" 
                            alt="Dr. Magan Mehrotra" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                        />
                        </div>
                        <div style={nameStyle}>Dr. Magan Mehrotra</div>
                        <div style={descStyle}>Apex Hospital, Moradabad, UP</div>
                    </div>
                </FadeInView>
                </div>
            </div>

            {/* Faculty Colorectal - Uses per3.png and per4.png from general folder */}
            {/* Updated: items-center for mobile, md:items-start for desktop */}
            <div className="flex flex-col items-center md:items-start w-full mb-16">
                <div style={sectionLabelBoxStyle}>
                <span style={sectionLabelTextStyle}>Faculty Members</span>
                </div>
                {/* Updated: justify-items-center for mobile grid alignment */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center md:justify-items-start">
                {colorectalFacultyList.map((faculty, index) => (
                    <FadeInView key={index} delay={index * 30}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div style={cardImageContainer} className="group cursor-pointer">
                            <img 
                                src={`/images/about/general/${faculty.image}`} 
                                alt={faculty.name} 
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
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