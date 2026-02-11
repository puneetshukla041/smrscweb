'use client';
import React from 'react';

// Data for the 3 blog images
const blogsData = [
  {
    id: 1,
    image: '/images/media/blog1.png',
  },
  {
    id: 2,
    image: '/images/media/blog2.png',
  },
  {
    id: 3,
    image: '/images/media/blog3.png',
  }
];

const Blogs = () => {
  return (
    // Container: Centered, Flex wrap for smaller screens, Gap of 40px (gap-10)
    // ADDED: px-4 for mobile padding so cards don't touch edges
    <div className="w-full flex flex-wrap justify-center gap-10 pb-10 px-4 md:px-0">
      {blogsData.map((blog) => (
        <div 
          key={blog.id}
          // Exact dimensions: 434px width (max), 412px height, 20px border radius
          // CHANGED: w-[434px] -> w-full max-w-[434px] to prevent overflow on mobile
          className="relative w-full max-w-[434px] h-[412px] rounded-[20px] overflow-hidden shrink-0 group cursor-pointer shadow-lg"
        >
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${blog.image})` }}
          />
          
          {/* Gradient Overlay Layer (Kept as per previous styling requirement) */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 66.65%, rgba(0, 0, 0, 0.50) 100%)'
            }}
          />
          
          {/* Text Content Layer Removed Here */}
        </div>
      ))}
    </div>
  );
};

export default Blogs;