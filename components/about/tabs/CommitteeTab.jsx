'use client';
import React from 'react';

const CommitteeTab = () => {

  // --- DATA: International Committee (per5 - per20) ---
  const internationalCommittee = [
    { name: "Dr. Mani Menon", role: "Vattikuti Urology Institute, Detroit, MI, USA", src: "/images/about/committe/per5.png" },
    { name: "Dr. Ashutosh K. Tewari", role: "Icahn School of Medicine at Mount Sinai, NY, USA", src: "/images/about/committe/per6.png" },
    { name: "Dr. Vipul Patel", role: "Global Robotics Institute, Orlando, FL, USA", src: "/images/about/committe/per7.png" },
    { name: "Dr. Pier C. Giulianotti", role: "The University of Chicago Medicine and Biological Sciences Chicago, Chicago, IL, USA", src: "/images/about/committe/per8.png" },
    { name: "Dr. Dudy Hanafy", role: "Harapan Kita Hospital, Jakarta, Indonesia", src: "/images/about/committe/per9.png" },
    { name: "Dr. Pedro Luis Maldonado Munoz", role: "Interhospital, Guayaquil, Ecuador", src: "/images/about/committe/per10.png" },
    { name: "Dr. Ashok K. Hemal", role: "Wake Forest Medical School & Baptist Medical Center, NC, USA", src: "/images/about/committe/per11.png" },
    { name: "Dr. Husam Balkhy", role: "The University of Chicago Medicine and Biological Sciences Chicago, Chicago, IL, USA", src: "/images/about/committe/per12.png" },
    { name: "Dr. T Sloane Guy", role: "Georgia Heart Institute, Gainesville, GA, USA", src: "/images/about/committe/per13.png" },
    { name: "Dr. Gianluca Torregrossa", role: "Lankenau Heart Institute, Philadelphia, PA, USA", src: "/images/about/committe/per14.png" },
    { name: "Dr. Frank Van Praet", role: "OLV Clinic, Aalst, Belgium", src: "/images/about/committe/per15.png" },
    { name: "Dr John D Puskas", role: "Emory University Hospital Midtown, Atlanta", src: "/images/about/committe/per16.png" },
    { name: "Dr. Bob Kiaii", role: "Foothills Medical Centre, Libin Cardiovascular Institute, University of Calgary", src: "/images/about/committe/per17.png" },
    { name: "Dr. Max Gubitz Scheibe", role: "Interhospital, Guayaquil, Ecuador", src: "/images/about/committe/per18.png" },
    { name: "Dr. Marcos Lenin Zambrano Avellan", role: "Interhospital, Guayaquil, Ecuador", src: "/images/about/committe/per19.png" },
    { name: "Dr. Ivan Rizal Sini", role: "Bunda Group Hospitals, Jakarta, Indonesia", src: "/images/about/committe/per20.png" },
  ];

  // --- DATA: National Committee (per21 - per34) ---
  const nationalCommittee = [
    { name: "Dr. Sudhir K Rawal", role: "Rajiv Gandhi Cancer Institute and Research Center", src: "/images/about/per21.png" },
    { name: "Dr. Somashekhar SP", role: "Aster DM Healthcare", src: "/images/about/per22.png" },
    { name: "Dr. Lalitaditya Malik", role: "Manipal Hospitals, Jaipur, RJ", src: "/images/about/per23.png" },
    { name: "Dr. Priya Bhave Chittawar", role: "Her Health Hospital, Bhopal, MP", src: "/images/about/per24.png" },
    { name: "Dr. Ritesh Mongha", role: "Marengo Asia Hospitals, Faridabad, Haryana", src: "/images/about/per25.png" },
    { name: "Dr. Mohit Bhandari", role: "Bhandari Hospital and Research Centre, Indore", src: "/images/about/per26.png" },
    { name: "Dr. Chandra Mohan Vaddi", role: "Preeti Urology & Kidney Hospital, Telangana, Hyderabad", src: "/images/about/per27.png" },
    { name: "Dr. Venkatesh Munikrishnan", role: "Apollo Hospitals, Chennai", src: "/images/about/per28.png" },
    { name: "Dr. Harish Badami", role: "Malla Reddy Narayana Multispeciality Hospital, Hyderabad", src: "/images/about/per29.png" },
    { name: "Dr. Subhash Khanna", role: "Swagat Hospitals, Guwahati", src: "/images/about/per30.png" },
    { name: "Dr. Magan Mehrotra", role: "Apex Hospital, Moradabad, UP", src: "/images/about/per31.png" },
    { name: "Dr. Leena Mehrotra", role: "Apex Hospital, Moradabad, UP", src: "/images/about/per32.png" },
    { name: "Dr. Manjiri Somashekhar", role: "Aster CMI Bangalore, Aster RV Bangalore", src: "/images/about/per33.png" },
    { name: "Dr. Raj Gajbhiye", role: "Government Medical College, Nagpur", src: "/images/about/per34.png" },
  ];

  // --- STYLES ---

  // 1. Headings
  const baseHeadingStyle = {
    color: '#F8FFFF',
    fontFamily: '"Blauer Nue", sans-serif',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '40px',
    marginBottom: '24px', 
    textAlign: 'left',
  };

  const sectionHeadingStyle = {
    ...baseHeadingStyle,
    width: '100%', 
    marginTop: '100px', 
    marginBottom: '60px'
  };

  // 3. Text Styles
  const textWrapperStyle = {
    // width is handled via classes for responsiveness
    marginTop: '16px', 
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  };

  const nameStyle = {
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '24px', 
  };

  const descStyle = {
    color: '#FFF',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px', 
    opacity: 0.8
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      
      {/* ================= SECTION 1: TOP LEADERSHIP ================= */}
      <div className="w-full px-6 xl:pl-0 xl:pr-[270px] flex flex-col xl:flex-row items-start justify-between gap-12 xl:gap-8">
        
        {/* Organizing Chairman */}
        <div className="flex flex-col items-center flex-1 w-full xl:w-auto">
          {/* Responsive Width: w-full on mobile, 330px on XL */}
          <h3 style={baseHeadingStyle} className="w-full xl:w-[330px]">Organizing Chairman</h3>
          
          {/* Responsive Image Container: w-full max 305px on mobile, fixed 305px on XL via max-w */}
          <div className="relative rounded-[12px] overflow-hidden w-full max-w-[305px] h-[390px]">
            <img src="/images/about/committe/per1.png" alt="Dr. Sudhir Srivastava" className="object-contain w-full h-full" />
          </div>
          
          <div style={textWrapperStyle} className="w-full max-w-[305px]">
            <div style={nameStyle}>Dr. Sudhir Srivastava</div>
            <div style={descStyle}>Founder, Chairman and CEO SS Innovations, INDIA</div>
          </div>
        </div>

        {/* Organizing Co-Chairpersons */}
        <div className="flex flex-col items-center flex-[1.5] w-full xl:w-auto">
          {/* Responsive Width & Whitespace: Wrap on mobile, NoWrap on XL */}
          <h3 
            style={baseHeadingStyle} 
            className="w-full xl:w-[435px] whitespace-normal xl:whitespace-nowrap"
          >
            Organizing Co-Chairpersons
          </h3>
          
          <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto items-center md:items-start">
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <div className="relative rounded-[12px] overflow-hidden w-full max-w-[305px] h-[390px]">
                <img src="/images/about/committe/per2.png" alt="Dr. Sudhir K Rawal" className="object-contain w-full h-full" />
              </div>
              <div style={textWrapperStyle} className="w-full max-w-[305px]">
                <div style={nameStyle}>Dr. Sudhir K Rawal</div>
                <div style={descStyle}>Rajiv Gandhi Cancer Institute and Research Center</div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start w-full md:w-auto">
              <div className="relative rounded-[12px] overflow-hidden w-full max-w-[305px] h-[390px]">
                <img src="/images/about/committe/per3.png" alt="Dr. S.P. Somashekhar" className="object-contain w-full h-full" />
              </div>
              <div style={textWrapperStyle} className="w-full max-w-[305px]">
                <div style={nameStyle}>Dr. S.P. Somashekhar</div>
                <div style={descStyle}>Aster CMI Hospital, Bangalore</div>
              </div>
            </div>
          </div>
        </div>

        {/* Organizing Secretary */}
        <div className="flex flex-col items-center flex-1 w-full xl:w-auto">
          <h3 style={baseHeadingStyle} className="w-full xl:w-[330px]">Organizing Secretary</h3>
          <div className="relative rounded-[12px] overflow-hidden w-full max-w-[305px] h-[390px]">
            <img src="/images/about/committe/per4.png" alt="Dr. Minu Bajpai" className="object-contain w-full h-full" />
          </div>
          <div style={textWrapperStyle} className="w-full max-w-[305px]">
            <div style={nameStyle}>Dr. Minu Bajpai</div>
            <div style={descStyle}>VMMC & Safdarjung Hospital, New Delhi</div>
          </div>
        </div>

      </div>

      {/* ================= SECTION 2: INTERNATIONAL COMMITTEE ================= */}
      <div className="w-full px-6 xl:pl-0 xl:pr-[270px]">
        <h3 style={sectionHeadingStyle}>Scientific Organizing Committee International</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12 place-items-center">
          {internationalCommittee.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center w-full max-w-[305px]">
              <div 
                className="relative rounded-[12px] overflow-hidden w-full h-[390px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              >
                <img 
                  src={member.src} 
                  alt={member.name} 
                  className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div style={textWrapperStyle} className="w-full">
                <div style={nameStyle}>{member.name}</div>
                <div style={descStyle}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECTION 3: NATIONAL COMMITTEE (NEW) ================= */}
      <div className="w-full px-6 xl:pl-0 xl:pr-[270px]">
        <h3 style={sectionHeadingStyle}>Scientific Organizing Committee national</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12 place-items-center">
          {nationalCommittee.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center w-full max-w-[305px]">
              <div 
                 className="relative rounded-[12px] overflow-hidden w-full h-[390px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
              >
                <img 
                  src={member.src} 
                  alt={member.name} 
                  className="object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div style={textWrapperStyle} className="w-full">
                <div style={nameStyle}>{member.name}</div>
                <div style={descStyle}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');
      `}</style>
    </div>
  );
};

export default CommitteeTab;