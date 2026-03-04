import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pokhara from "../images/pokhara.jpg";
import chitwan from "../images/chitwan.jpeg";
import lumbini from "../images/lumbin.jpeg"
import annapurna from "../images/annapurna.jpeg";
import bhaktapur from "../images/bhaktapur.jpeg";
import nagarkot from "../images/nagarkot.jpeg";
import mustang from "../images/mustang.jpeg";
import patan from "../images/patan.jpeg"
// Mock data for exactly 10 Nepal destinations
const destinations = [
  {
    id: 1,
    name: "Kathmandu",
    region: "Kathmandu Valley",
    packages: "Starting From ₹...",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Pokhara",
    region: "Gandaki Province",
    packages: "Starting From ₹...",
    image: pokhara,
  },
  {
    id: 3,
    name: "Everest Base Camp",
    region: "Khumbu Region",
    packages: "Starting From ₹...",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Chitwan",
    region: "Terai Region",
    packages: "Starting From ₹...",
    image:chitwan,
  },
  {
    id: 5,
    name: "Lumbini",
    region: "Lumbini Province",
    packages: "Starting From ₹...",
    image: lumbini,
  },
  {
    id: 6,
    name: "Annapurna",
    region: "Himalayas",
    packages: "Starting From ₹...",
    image: annapurna,
  },
  {
    id: 7,
    name: "Bhaktapur",
    region: "Kathmandu Valley",
    packages: "Starting From ₹...",
    image: bhaktapur,
  },
  {
    id: 8,
    name: "Nagarkot",
    region: "Bagmati Province",
    packages: "Starting From ₹...",
    image: nagarkot,
  },
  {
    id: 9,
    name: "Mustang",
    region: "Trans-Himalayan",
    packages: "Starting From ₹...",
    image: mustang,
  },
  {
    id: 10,
    name: "Patan",
    region: "Lalitpur",
    packages: "Starting From ₹...",
    image: patan,
  }
];

const TrendingNepalDestinations = () => {
  const sliderRef = useRef(null);

  // Scroll function for Left/Right arrows
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white w-full font-sans">
      
      {/* Hide Scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Trending <span className="text-blue-600">Nepal</span> Destinations
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Explore the most visited locations in Nepal with our curated tour packages.
          </p>
        </div>

        {/* Carousel Container - Yahan 'group/carousel' add kiya gaya hai */}
        <div className="relative group/carousel">
          
          {/* Left Arrow - Yahan 'group-hover/carousel' use kiya gaya hai */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 border border-gray-100 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Slider Track */}
          <div 
            ref={sliderRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 pt-2"
          >
            {destinations.map((dest) => (
              // Destination Card - Ye apne normal 'group' state me rahega
              <div 
                key={dest.id}
                className="snap-start flex-shrink-0 w-[240px] md:w-[280px] lg:w-[300px] relative rounded-2xl overflow-hidden cursor-pointer group"
              >
                {/* Image Container with 4:5 Aspect Ratio */}
                <div className="relative w-full aspect-[4/5]">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Region Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm z-20">
                    {dest.region}
                  </div>
                  
                  {/* Dark Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100 z-10"></div>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {dest.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-yellow-400">
                      {dest.packages}
                    </p>
                    {/* Hover Arrow Indicator */}
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow - Yahan 'group-hover/carousel' use kiya gaya hai */}
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 border border-gray-100 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default TrendingNepalDestinations;