import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pokhara from "../images/pokhara.jpg";
import chitwan from "../images/chitwan.jpeg";
import lumbini from "../images/lumbin.jpeg"
import annapurna from "../images/Annapurna.jpeg"; 
import bhaktapur from "../images/bhaktapur.jpeg"; 
import nagarkot from "../images/nagarkot.jpeg";   
import mustang from "../images/mustang.jpeg";     
import patan from "../images/patan.jpeg";         

// Mock data for exactly 5 Nepal destinations
const destinations = [
  { id: 1, name: "Kathmandu", region: "Kathmandu Valley", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Pokhara", region: "Gandaki Province", packages: "Starting From ₹...", image: pokhara },
  { id: 3, name: "Everest Base Camp", region: "Khumbu Region", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Chitwan", region: "Terai Region", packages: "Starting From ₹...", image: chitwan },
  { id: 5, name: "Lumbini", region: "Lumbini Province", packages: "Starting From ₹...", image: lumbini }
];

// Array ko 3 baar duplicate kiya true infinite scroll illusion ke liye
const extendedDestinations = [...destinations, ...destinations, ...destinations];
const TOTAL_CARDS = extendedDestinations.length; // 15
const MIDDLE_START_INDEX = destinations.length;  // 5

const TrendingNepalDestinations = () => {
  const sliderRef = useRef(null);
  
  // Naya State-driven Approach
  const [currentIndex, setCurrentIndex] = useState(MIDDLE_START_INDEX);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 1. Initial Load pe slider ko middle set par set karein (Bina Animation ke)
  useEffect(() => {
    scrollToIndex(MIDDLE_START_INDEX, 'auto');
  }, []);

  // Scroll Helper Function
  const scrollToIndex = (index, behavior = 'smooth') => {
    const slider = sliderRef.current;
    if (slider && slider.children[index]) {
      const card = slider.children[index];
      const gapOffset = window.innerWidth >= 768 ? 24 : 16; 
      
      // Calculate position exactly matching the start of the targeted card
      slider.scrollTo({
        left: card.offsetLeft - slider.offsetLeft,
        behavior: behavior
      });
    }
  };

  // 2. Button Click Handler
  const handleArrowClick = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    let newIndex;

    if (direction === 'left') {
      newIndex = currentIndex - 1;
    } else {
      newIndex = currentIndex + 1;
    }

    setCurrentIndex(newIndex);
    scrollToIndex(newIndex, 'smooth');

    // Wait for smooth scroll to finish, then check for infinite jump
    setTimeout(() => {
      checkAndJump(newIndex);
    }, 500); // Wait 500ms for smooth scroll
  };

  // 3. Infinite Jump Logic (Works for both Arrows and Manual Swipe)
  const checkAndJump = (indexToCheck) => {
    let finalIndex = indexToCheck;
    let needsJump = false;

    // Agar hum pehle set ke andar ghus gaye hain (left edge)
    if (indexToCheck < MIDDLE_START_INDEX - 2) {
      finalIndex = indexToCheck + destinations.length;
      needsJump = true;
    } 
    // Agar hum aakhri set ke andar ghus gaye hain (right edge)
    else if (indexToCheck >= TOTAL_CARDS - 2) {
      finalIndex = indexToCheck - destinations.length;
      needsJump = true;
    }

    if (needsJump) {
      setCurrentIndex(finalIndex);
      scrollToIndex(finalIndex, 'auto'); // 'auto' means instant jump
    }
    
    setIsTransitioning(false);
  };

  // 4. Native Swipe Scroll Handler
  const handleNativeScroll = () => {
    if (isTransitioning || !sliderRef.current) return;

    const slider = sliderRef.current;
    const cardWidth = slider.children[0].offsetWidth;
    const gap = window.innerWidth >= 768 ? 24 : 16;
    const itemWidth = cardWidth + gap;

    // Determine currently visible card index based on scroll position
    const visibleIndex = Math.round(slider.scrollLeft / itemWidth);
    
    // Sirf index update karein jab wo change ho taaki loop fast rahe
    if (visibleIndex !== currentIndex) {
      setCurrentIndex(visibleIndex);
      // Agar border pe swipe hua, toh instant jump trigger karein
      if (visibleIndex <= 1 || visibleIndex >= TOTAL_CARDS - 2) {
        checkAndJump(visibleIndex);
      }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white w-full font-sans">
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        /* Important: Desktop arrows use karte waqt snap band karein taaki JS smooth chal sake */
        @media (min-width: 1024px) {
          .no-snap-desktop {
            scroll-snap-type: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Trending <span className="text-blue-600">Nepal</span> Destinations
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Explore the most visited locations in Nepal with our curated tour packages.
          </p>
        </div>

        <div className="relative group/carousel mb-10"> {/* Added mb-10 for spacing before button */}
          
          {/* Left Arrow */}
          <button 
            onClick={() => handleArrowClick('left')}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 border border-gray-100 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Slider Track - no-snap-desktop class add kiya gaya hai */}
          <div 
            ref={sliderRef}
            onScroll={handleNativeScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-snap-desktop hide-scrollbar pb-6 pt-2 px-1"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {extendedDestinations.map((dest, index) => (
              <div 
                key={`${dest.id}-${index}`}
                className="snap-start flex-shrink-0 w-[240px] md:w-[280px] lg:w-[300px] relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full aspect-[4/5]">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm z-20">
                    {dest.region}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100 z-10"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {dest.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-yellow-400">
                      {dest.packages}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => handleArrowClick('right')}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] items-center justify-center text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300 border border-gray-100 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll Right"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

        </div>

        {/* View All Packages Button */}
        <div className="flex justify-center mt-6">
          <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-blue-400 active:bg-blue-500 hover:shadow-lg transition-all duration-300">
            View All Packages
          </button>
        </div>

      </div>
    </section>
  );
};

export default TrendingNepalDestinations;