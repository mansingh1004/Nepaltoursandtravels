
// import React, { useState } from 'react';
// import { 
//   MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
//   Star, Filter, ChevronRight, Bus 
// } from 'lucide-react';

// // Mock Data for Nepal Packages (Area Wise)
// const packagesData = [
//   {
//     id: 1,
//     title: "Classic Kathmandu Valley",
//     area: "Kathmandu Valley",
//     image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     destinations: "Kathmandu • Patan • Bhaktapur",
//     duration: "4 Days / 3 Nights",
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     discount: "...",
//     rating: 4.8,
//     reviews: 124,
//     inclusions: ['Flight', '3 Star Hotel', 'Breakfast', 'Sightseeing'],
//     tag: "Bestseller"
//   },
//   {
//     id: 2,
//     title: "Everest Base Camp Trek",
//     area: "Everest Region",
//     image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     destinations: "Lukla • Namche Bazaar • EBC",
//     duration: "14 Days / 13 Nights",
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     discount: "...",
//     rating: 4.9,
//     reviews: 89,
//     inclusions: ['Flight', 'Teahouse', 'All Meals', 'Guide'],
//     tag: "Adventure"
//   },
//   {
//     id: 3,
//     title: "Pokhara Lakes & Mountains",
//     area: "Annapurna Region",
//     image: "https://images.unsplash.com/photo-1605640840469-60ce8f05eeac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     destinations: "Kathmandu • Pokhara • Sarangkot",
//     duration: "6 Days / 5 Nights",
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     discount: "...",
//     rating: 4.7,
//     reviews: 210,
//     inclusions: ['Bus Transfer', '4 Star Hotel', 'Breakfast', 'Boating'],
//     tag: "Family Favorite"
//   },
//   {
//     id: 4,
//     title: "Chitwan Wildlife Safari",
//     area: "Terai Region",
//     image: "https://images.unsplash.com/photo-1610423018151-61014e7aebaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     destinations: "Chitwan National Park",
//     duration: "3 Days / 2 Nights",
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     discount: "...",
//     rating: 4.6,
//     reviews: 156,
//     inclusions: ['Hotel', 'All Meals', 'Jungle Safari', 'Transfers'],
//     tag: "Trending"
//   }
// ];

// const NepalPackagesPage = () => {
//   const [showMobileFilters, setShowMobileFilters] = useState(false);

//   // Helper to render inclusion icons
//   const getInclusionIcon = (item) => {
//     if (item.toLowerCase().includes('flight')) return <Plane size={16} />;
//     if (item.toLowerCase().includes('bus') || item.toLowerCase().includes('transfer')) return <Bus size={16} />;
//     if (item.toLowerCase().includes('hotel') || item.toLowerCase().includes('teahouse')) return <BedDouble size={16} />;
//     if (item.toLowerCase().includes('meal') || item.toLowerCase().includes('breakfast')) return <Utensils size={16} />;
//     return <Camera size={16} />;
//   };

//   return (
//     <div className="w-full font-sans bg-gray-50 min-h-screen pb-16 pt-10">
      
//       {/* Main Content Area */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        
//         {/* Mobile Filter Toggle */}
//         <button 
//           className="lg:hidden flex items-center justify-center w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm text-indigo-950 font-bold"
//           onClick={() => setShowMobileFilters(!showMobileFilters)}
//         >
//           <Filter size={20} className="mr-2 text-orange-500" />
//           {showMobileFilters ? "Hide Filters" : "Show Filters"}
//         </button>

//         {/* 1. Sidebar (Filters) */}
//         <aside className={`w-full lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
//           <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-sm">
//             <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
//               <h2 className="text-lg font-extrabold text-indigo-950 flex items-center">
//                 <Filter size={18} className="mr-2 text-orange-500" /> Filters
//               </h2>
//               <span className="text-sm text-orange-500 font-semibold cursor-pointer hover:underline">Reset All</span>
//             </div>

//             {/* Filter Group: Nepal Regions (Area Wise) */}
//             <div className="mb-6">
//               <h3 className="font-bold text-gray-800 mb-3">Filter by Region</h3>
//               <div className="space-y-2">
//                 {['Kathmandu Valley', 'Annapurna Region', 'Everest Region', 'Terai Region (Wildlife)', 'Lumbini (Pilgrimage)'].map((dest, i) => (
//                   <label key={i} className="flex items-center space-x-3 cursor-pointer group">
//                     <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
//                     <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{dest}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Filter Group: Duration */}
//             <div className="mb-6 border-t border-gray-100 pt-6">
//               <h3 className="font-bold text-gray-800 mb-3">Duration</h3>
//               <div className="space-y-2">
//                 {['1 - 3 Nights', '4 - 6 Nights', '7 - 10 Nights', '11+ Nights (Trekking)'].map((duration, i) => (
//                   <label key={i} className="flex items-center space-x-3 cursor-pointer group">
//                     <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
//                     <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{duration}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Filter Group: Tour Style */}
//             <div className="border-t border-gray-100 pt-6">
//               <h3 className="font-bold text-gray-800 mb-3">Tour Style</h3>
//               <div className="space-y-2">
//                 {['Leisure & Sightseeing', 'Trekking & Adventure', 'Wildlife Safari', 'Spiritual / Pilgrimage'].map((style, i) => (
//                   <label key={i} className="flex items-center space-x-3 cursor-pointer group">
//                     <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" />
//                     <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{style}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </aside>

//         {/* 2. Package Grid Area */}
//         <div className="w-full lg:w-3/4">
          
//           {/* Moved the Main Heading Here */}
//           <div className="mb-8">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2">Nepal Tour Packages</h1>
//             <p className="text-gray-600 text-base max-w-3xl">
//               Explore the majestic Himalayas. From the cultural heart of Kathmandu to the thrilling heights of Everest, find your perfect Nepal holiday.
//             </p>
//           </div>

//           {/* Results Count & Sort Dropdown */}
//           <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
//             <h2 className="text-lg font-bold text-gray-800">Found {packagesData.length} Nepal Packages</h2>
//             <select className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 p-2.5 outline-none bg-white cursor-pointer shadow-sm">
//               <option>Sort by: Popularity</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Duration: Short to Long</option>
//             </select>
//           </div>

//           {/* Package Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {packagesData.map((pkg) => (
//               <div key={pkg.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col">
                
//                 {/* Image & Badges */}
//                 <div className="relative h-56 overflow-hidden">
//                   <img 
//                     src={pkg.image} 
//                     alt={pkg.title} 
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {/* Discount Badge */}
//                   <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md">
//                     {pkg.discount}
//                   </div>
//                   {/* Tag Badge */}
//                   <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
//                     {pkg.tag}
//                   </div>
//                 </div>

//                 {/* Card Body */}
//                 <div className="p-5 flex flex-col flex-grow">
                  
//                   {/* Title & Rating */}
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-xl font-extrabold text-indigo-950 leading-tight group-hover:text-orange-600 transition-colors pr-2">
//                       {pkg.title}
//                     </h3>
//                     <div className="flex items-center bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold shrink-0 mt-1">
//                       {pkg.rating} <Star size={12} className="ml-1 fill-current" />
//                     </div>
//                   </div>

//                   {/* Area Badge */}
//                   <div className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-2 py-1 rounded mb-3 self-start">
//                     Region: {pkg.area}
//                   </div>

//                   {/* Destinations & Duration */}
//                   <div className="text-sm text-gray-500 font-medium space-y-2 mb-4">
//                     <div className="flex items-center">
//                       <MapPin size={16} className="text-orange-500 mr-2 shrink-0" />
//                       <span className="truncate">{pkg.destinations}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Clock size={16} className="text-orange-500 mr-2 shrink-0" />
//                       {pkg.duration}
//                     </div>
//                   </div>

//                   {/* Inclusions Row */}
//                   <div className="border-t border-b border-gray-100 py-3 mb-4 mt-auto">
//                     <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Inclusions</p>
//                     <div className="flex flex-wrap gap-4">
//                       {pkg.inclusions.map((inclusion, idx) => (
//                         <div key={idx} className="flex flex-col items-center justify-center text-gray-500">
//                           <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-1 text-indigo-600">
//                             {getInclusionIcon(inclusion)}
//                           </div>
//                           <span className="text-[10px] font-semibold text-center leading-tight w-12 truncate">{inclusion}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Pricing & Buttons */}
//                   <div className="flex items-end justify-between">
//                     <div>
//                       <p className="text-xs text-gray-400 font-semibold line-through mb-0.5">{pkg.originalPrice}</p>
//                       <div className="flex items-baseline">
//                         <span className="text-2xl font-black text-indigo-950">{pkg.discountedPrice}</span>
//                         <span className="text-xs text-gray-500 ml-1 font-medium">/ person</span>
//                       </div>
//                     </div>
//                     <button className="bg-orange-500 hover:bg-indigo-950 text-white px-5 py-2.5 rounded-xl font-bold transition-colors duration-300 shadow-lg shadow-orange-500/20 text-sm flex items-center">
//                       View Details
//                       <ChevronRight size={16} className="ml-1" />
//                     </button>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Load More Button */}
//           <div className="mt-10 flex justify-center">
//             <button className="bg-white border-2 border-indigo-950 text-indigo-950 hover:bg-indigo-950 hover:text-white px-8 py-3 rounded-full font-bold transition-colors duration-300">
//               Load More Packages
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default NepalPackagesPage;





















import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pokhara from "../images/pokhara.jpg";
import chitwan from "../images/chitwan.jpeg";

// Mock data (7 items)
const destinations = [
  { id: 1, name: "Kathmandu", country: "Nepal", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Kashmir", country: "India", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Pokhara", country: "Nepal", packages: "Starting From ₹...", image: pokhara },
  { id: 4, name: "Kerala", country: "India", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Chitwan", country: "Nepal", packages: "Starting From ₹...", image: chitwan },
  { id: 6, name: "Goa", country: "India", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Rajasthan", country: "India", packages: "Starting From ₹...", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

// Array ko 3 baar duplicate kiya (Total 21 items) True Infinite Illusion ke liye
const extendedDestinations = [...destinations, ...destinations, ...destinations];

const TrendingDestinations = () => {
  const sliderRef = useRef(null);
  const isAutoScrolling = useRef(false);

  // 1. Initial Load pe slider ko middle set par set karein
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider && slider.children.length > 0) {
      // Index 7 (destinations.length) matlab doosre set ka pehla card
      const middleSetStart = slider.children[destinations.length].offsetLeft;
      slider.scrollLeft = middleSetStart;
    }
  }, []);

  // 2. True Infinite Loop: Silent Jump Logic
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider || isAutoScrolling.current) return;

    const singleSetWidth = slider.children[destinations.length].offsetLeft;

    // Agar user left swipe karte hue ekdum start par aa jaye -> silently jump to middle
    if (slider.scrollLeft === 0) {
      slider.style.scrollBehavior = 'auto'; // Animation disable for jump
      slider.scrollLeft = singleSetWidth;
    } 
    // Agar user right swipe karte hue ekdum end par aa jaye -> silently jump back
    else if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 5) {
      slider.style.scrollBehavior = 'auto';
      slider.scrollLeft -= singleSetWidth;
    }
  };

  // 3. Desktop Arrows ke liye Smooth Scroll
  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (slider) {
      isAutoScrolling.current = true;
      slider.style.scrollBehavior = 'smooth'; // Arrows par click ke liye smooth slide
      
      const cardWidth = slider.children[0].offsetWidth;
      const gap = window.innerWidth >= 768 ? 24 : 16; // md:gap-6 (24px) or gap-4 (16px)
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
      
      slider.scrollBy({ left: scrollAmount });

      // Scroll finish hone ke baad AutoScrolling flag hata dein
      setTimeout(() => {
        isAutoScrolling.current = false;
        // Snap the position to trigger the infinite loop check if needed
        handleScroll();
      }, 500);
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Trending <span className="text-blue-600">India</span> & <span className="text-orange-500">Nepal</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Explore the most visited domestic and cross-border locations with our curated tour packages.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/slider mb-10">
          
          {/* Left Arrow (Hidden on Mobile & Tablet, visible only on lg screens) */}
          <button 
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] items-center justify-center text-gray-700 hover:text-orange-500 hover:scale-105 transition-all duration-300 border border-gray-100 opacity-0 group-hover/slider:opacity-100"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* SOTC Style Viewport: Native Touch Scrolling + Scroll Snap + onScroll listener */}
          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 pt-2 px-1"
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
                    {dest.country}
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

          {/* Right Arrow (Hidden on Mobile & Tablet, visible only on lg screens) */}
          <button 
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] items-center justify-center text-gray-700 hover:text-orange-500 hover:scale-105 transition-all duration-300 border border-gray-100 opacity-0 group-hover/slider:opacity-100"
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

export default TrendingDestinations;