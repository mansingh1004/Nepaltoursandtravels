// import React, { useState, useEffect } from 'react';
// import { 
//   MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
//   Star, Filter, ChevronRight, ChevronLeft, Bus, Mountain 
// } from 'lucide-react';
// import pokhara from "../images/pokhara.jpg";
// import chitwan from "../images/chitwan.jpeg";
// import lumbini from "../images/lumbin.jpeg"
// import annapurna from "../images/Annapurna.jpeg"; 
// import bhaktapur from "../images/bhaktapur.jpeg"; 
// import nagarkot from "../images/nagarkot.jpeg";   
// import mustang from "../images/mustang.jpeg";     
// import patan from "../images/patan.jpeg"; 
// import pokharabanner from "../images/pokharabanner.png"
// import chitwanbanner from "../images/chitwanbanner.png"
// // 1. Premium Nepal Banner Carousel Data
// const bannerData = [
//   { 
//     id: 1, 
//     title: "Explore Kathmandu Valley", 
//     subtitle: "Discover ancient temples, vibrant culture, and the heritage of the Himalayas.", 
//     image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
//   },
//   { 
//     id: 2, 
//     title: "Pokhara: The City of Lakes", 
//     subtitle: "Experience serenity by Phewa Lake with stunning Annapurna views.", 
//     image: pokharabanner 
//   },
//   { 
//     id: 3, 
//     title: "Everest Base Camp Trek", 
//     subtitle: "Conquer the ultimate adventure and stand at the roof of the world.", 
//     image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
//   },
//   { 
//     id: 4, 
//     title: "Chitwan Wildlife Safari", 
//     subtitle: "Dive into the deep jungles and spot the rare one-horned rhino.", 
//     image: chitwanbanner 
//   }
// ];

// // 2. Nepal Packages Data for Filtering
// const packagesData = [
//   {
//     id: 1,
//     title: " Kathmandu",
//     region: "Kathmandu Valley",
//     image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     destinations: "...",
//     duration: "... Days / ... Nights",
//     daysValue: 4, 
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     priceValue: 14999, 
//     discount: "..% OFF",
//     rating: 4.8,
//     style: "Leisure & Culture", 
//     inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
//     tag: "Bestseller"
//   },
//   {
//     id: 2,
//     title: " Base Camp Trek",
//     region: "Everest Region",
//     image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     destinations: "...",
//     duration: "... Days / ... Nights",
//     daysValue: 14,
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     priceValue: 45500,
//     discount: "...% OFF",
//     rating: 4.9,
//     style: "Trekking & Adventure",
//    inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
//     tag: "Adventure"
//   },
//   {
//     id: 3,
//     title: "Pokhara Lakes & Mountains",
//     region: "Annapurna Region",
//     image: pokhara,
//     destinations: "...",
//     duration: "... Days / ... Nights",
//     daysValue: 6,
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     priceValue: 19999,
//     discount: "...% OFF",
//     rating: 4.7,
//     style: "Leisure & Culture",
//     inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
//     tag: "Family Favorite"
//   },
//   {
//     id: 4,
//     title: "Chitwan Wildlife Safari",
//     region: "Terai Region",
//     image: chitwan,
//     destinations: "Chitwan National Park",
//     duration: "... Days / ... Nights",
//     daysValue: 3,
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     priceValue: 11500,
//     discount: "...% OFF",
//     rating: 4.6,
//     style: "Wildlife Safari",
//    inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
//     tag: "Trending"
//   },
//   {
//     id: 5,
//     title: "Annapurna Base Camp",
//     region: "Annapurna Region",
//     image: annapurna,
//     destinations: "Pokhara • ABC • Jhinu Danda",
//     duration: "... Days / ... Nights",
//     daysValue: 10,
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     priceValue: 32500,
//     discount: "...% OFF",
//     rating: 4.8,
//     style: "Trekking & Adventure",
//     inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
//     tag: "Popular Trek"
//   },
//   {
//     id: 6,
//     title: " Lumbini Tour",
//     region: "Lumbini Region",
//     image: lumbini,
//     destinations: "...",
//     duration: "... Days / ... Nights",
//     daysValue: 4,
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     priceValue: 13500,
//     discount: "...% OFF",
//     rating: 4.5,
//     style: "Spiritual / Pilgrimage",
//     inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
//     tag: "Peaceful"
//   } ,
//   {
//     id: 7,
//     title: " Mustang Tour",
//     region: "Mustang Region",
//     image: mustang,
//     destinations: "...",
//     duration: "... Days / ... Nights",
//     daysValue: 4,
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     priceValue: 13500,
//     discount: "...% OFF",
//     rating: 4.5,
//     style: "Spiritual / Pilgrimage",
//     inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
//     tag: "Peaceful"
//   },
//   {
//     id: 8,
//     title: " Nagarkot Tour",
//     region: "Nagarkot Region",
//     image: nagarkot,
//     destinations: "...",
//     duration: "... Days / ... Nights",
//     daysValue: 4,
//     originalPrice: "₹...",
//     discountedPrice: "₹...",
//     priceValue: 13500,
//     discount: "...% OFF",
//     rating: 4.5,
//     style: "Spiritual / Pilgrimage",
//     inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
//     tag: "Peaceful"
//   }
// ];

// const NepalPackagesPage = () => {
//   const [showMobileFilters, setShowMobileFilters] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   // 3. State for Nepal Specific Filters
//   const [filters, setFilters] = useState({
//     region: [],
//     budget: [],
//     duration: [],
//     style: []
//   });

//   // --- Auto-Slide logic for the Banner ---
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
//     }, 4000); 
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => setCurrentSlide(currentSlide === bannerData.length - 1 ? 0 : currentSlide + 1);
//   const prevSlide = () => setCurrentSlide(currentSlide === 0 ? bannerData.length - 1 : currentSlide - 1);

//   // Filter Toggle Handler
//   const toggleFilter = (category, value) => {
//     setFilters(prev => {
//       const currentCategory = prev[category];
//       if (currentCategory.includes(value)) {
//         return { ...prev, [category]: currentCategory.filter(item => item !== value) };
//       } else {
//         return { ...prev, [category]: [...currentCategory, value] };
//       }
//     });
//   };

//   // Clear All Filters
//   const resetFilters = () => {
//     setFilters({ region: [], budget: [], duration: [], style: [] });
//   };

//   // 4. Filtering Logic
//   const filteredPackages = packagesData.filter(pkg => {
//     if (filters.region.length > 0 && !filters.region.includes(pkg.region)) return false;
//     if (filters.style.length > 0 && !filters.style.includes(pkg.style)) return false;
    
//     if (filters.duration.length > 0) {
//       const matchesDuration = filters.duration.some(range => {
//         if (range === '1 - 3 Days') return pkg.daysValue <= 3;
//         if (range === '4 - 6 Days') return pkg.daysValue >= 4 && pkg.daysValue <= 6;
//         if (range === '7 - 10 Days') return pkg.daysValue >= 7 && pkg.daysValue <= 10;
//         if (range === '11+ Days (Trekking)') return pkg.daysValue >= 11;
//         return false;
//       });
//       if (!matchesDuration) return false;
//     }

//     if (filters.budget.length > 0) {
//       const matchesBudget = filters.budget.some(range => {
//         if (range === 'Below ₹15,000') return pkg.priceValue < 15000;
//         if (range === '₹15,000 - ₹25,000') return pkg.priceValue >= 15000 && pkg.priceValue <= 25000;
//         if (range === '₹25,000 - ₹40,000') return pkg.priceValue >= 25000 && pkg.priceValue <= 40000;
//         if (range === 'Above ₹40,000') return pkg.priceValue > 40000;
//         return false;
//       });
//       if (!matchesBudget) return false;
//     }
//     return true;
//   });

//   const getInclusionIcon = (item) => {
//     const text = item.toLowerCase();
//     if (text.includes('flight')) return <Plane size={16} />;
//     if (text.includes('bus') || text.includes('transfer')) return <Bus size={16} />;
//     if (text.includes('hotel') || text.includes('teahouse')) return <BedDouble size={16} />;
//     if (text.includes('meal') || text.includes('breakfast')) return <Utensils size={16} />;
//     if (text.includes('guide') || text.includes('trek')) return <Mountain size={16} />;
//     return <Camera size={16} />;
//   };

//   return (
//     <div className="w-full font-sans bg-gray-50 min-h-screen pb-16">
      
//       {/* 1. FULL WIDTH BANNER CAROUSEL */}
//       <div className="relative group w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-900">
        
//         <div 
//           className="flex h-full w-full transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {bannerData.map((banner) => (
//             <div key={banner.id} className="min-w-full h-full relative">
//               <img 
//                 src={banner.image} 
//                 alt={banner.title} 
//                 className="w-full h-full object-cover"
//               />
//               {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div> */}
              
//               <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto text-white">
//                 <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-md tracking-tight">
//                   {banner.title}
//                 </h2>
//                 <p className="text-base md:text-xl font-medium text-gray-200 drop-shadow-md max-w-lg mb-6">
//                   {banner.subtitle}
//                 </p>
//                 <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-bold py-3 px-8 rounded-full w-max transition-colors shadow-lg">
//                   Explore Packages
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button 
//           onClick={prevSlide}
//           className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-indigo-950 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
//         >
//           <ChevronLeft size={28} />
//         </button>
        
//         <button 
//           onClick={nextSlide}
//           className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-indigo-950 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
//         >
//           <ChevronRight size={28} />
//         </button>

//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
//           {bannerData.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentSlide(idx)}
//               className={`h-2.5 rounded-full transition-all duration-300 ${
//                 currentSlide === idx ? "bg-orange-500 w-8" : "bg-white/60 hover:bg-white w-2.5"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* 2. MAIN CONTENT AREA */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 flex flex-col lg:flex-row gap-8">
        
//         {/* Mobile Filter Toggle */}
//         <button 
//           className="lg:hidden flex items-center justify-center w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm text-indigo-950 font-bold mb-4"
//           onClick={() => setShowMobileFilters(!showMobileFilters)}
//         >
//           <Filter size={20} className="mr-2 text-orange-500" />
//           {showMobileFilters ? "Hide Filters" : "Show Filters"}
//         </button>

//         {/* Sidebar (Filters) */}
//         <aside className={`w-full lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
//           <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-sm">
//             <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
//               <h2 className="text-lg font-extrabold text-indigo-950 flex items-center">
//                 <Filter size={18} className="mr-2 text-orange-500" /> Filters
//               </h2>
//               <button 
//                 onClick={resetFilters}
//                 className="text-sm text-orange-500 font-semibold cursor-pointer hover:underline outline-none"
//               >
//                 Reset All
//               </button>
//             </div>

//             {/* Filter Group: Nepal Region */}
//             <div className="mb-6">
//               <h3 className="font-bold text-gray-800 mb-3">Region in Nepal</h3>
//               <div className="space-y-2">
//                 {['Kathmandu Valley', 'Annapurna Region', 'Everest Region', 'Terai Region'].map((region, i) => (
//                   <label key={i} className="flex items-center space-x-3 cursor-pointer group">
//                     <input 
//                       type="checkbox" 
//                       checked={filters.region.includes(region)}
//                       onChange={() => toggleFilter('region', region)}
//                       className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" 
//                     />
//                     <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{region}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Filter Group: Price Budget */}
//             <div className="mb-6 border-t border-gray-100 pt-6">
//               <h3 className="font-bold text-gray-800 mb-3">Budget (Per Person)</h3>
//               <div className="space-y-2">
//                 {['Below ₹15,000', '₹15,000 - ₹25,000', '₹25,000 - ₹40,000', 'Above ₹40,000'].map((price, i) => (
//                   <label key={i} className="flex items-center space-x-3 cursor-pointer group">
//                     <input 
//                       type="checkbox" 
//                       checked={filters.budget.includes(price)}
//                       onChange={() => toggleFilter('budget', price)}
//                       className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" 
//                     />
//                     <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{price}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Filter Group: Duration */}
//             <div className="mb-6 border-t border-gray-100 pt-6">
//               <h3 className="font-bold text-gray-800 mb-3">Duration</h3>
//               <div className="space-y-2">
//                 {['1 - 3 Days', '4 - 6 Days', '7 - 10 Days', '11+ Days (Trekking)'].map((duration, i) => (
//                   <label key={i} className="flex items-center space-x-3 cursor-pointer group">
//                     <input 
//                       type="checkbox" 
//                       checked={filters.duration.includes(duration)}
//                       onChange={() => toggleFilter('duration', duration)}
//                       className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" 
//                     />
//                     <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{duration}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Filter Group: Tour Style */}
//             <div className="border-t border-gray-100 pt-6">
//               <h3 className="font-bold text-gray-800 mb-3">Tour Style</h3>
//               <div className="space-y-2">
//                 {['Leisure & Culture', 'Trekking & Adventure', 'Wildlife Safari', 'Spiritual / Pilgrimage'].map((style, i) => (
//                   <label key={i} className="flex items-center space-x-3 cursor-pointer group">
//                     <input 
//                       type="checkbox" 
//                       checked={filters.style.includes(style)}
//                       onChange={() => toggleFilter('style', style)}
//                       className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" 
//                     />
//                     <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{style}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </aside>

//         {/* Package Grid Area */}
//         <div className="w-full lg:w-3/4">

//           <div className="mb-6">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2">Nepal Tour Packages</h1>
//             <p className="text-gray-600 text-base max-w-3xl">
//               Explore the majestic Himalayas. From the cultural heart of Kathmandu to the thrilling heights of Everest, find your perfect Nepal holiday.
//             </p>
//           </div>

//           {/* Results Count & Sort Dropdown */}
//           <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
//             <h2 className="text-lg md:text-xl font-extrabold text-indigo-950">Showing {filteredPackages.length} Packages</h2>
//             <select className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 p-2.5 outline-none bg-white cursor-pointer shadow-sm font-medium">
//               <option>Sort by: Popularity</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Duration: Short to Long</option>
//             </select>
//           </div>

//           {/* Package Grid */}
//           {filteredPackages.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {filteredPackages.map((pkg) => (
//                 <div key={pkg.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col">
                  
//                   {/* Image & Badges */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img 
//                       src={pkg.image} 
//                       alt={pkg.title} 
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
                    
//                     <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md">
//                       {pkg.discount}
//                     </div>
                    
//                     <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wide">
//                       {pkg.region}
//                     </div>
//                   </div>

//                   {/* Card Body */}
//                   <div className="p-5 flex flex-col flex-grow">
                    
//                     <div className="flex justify-between items-start mb-2">
//                       <h3 className="text-xl font-extrabold text-indigo-950 leading-tight group-hover:text-orange-600 transition-colors pr-2">
//                         {pkg.title}
//                       </h3>
//                       <div className="flex items-center bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold shrink-0 mt-1">
//                         {pkg.rating} <Star size={12} className="ml-1 fill-current" />
//                       </div>
//                     </div>

//                     <div className="text-sm text-gray-500 font-medium space-y-2 mb-4 mt-2">
//                       <div className="flex items-center">
//                         <MapPin size={16} className="text-orange-500 mr-2 shrink-0" />
//                         <span className="truncate">{pkg.destinations}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <Clock size={16} className="text-orange-500 mr-2 shrink-0" />
//                         {pkg.duration}
//                       </div>
//                     </div>

//                     <div className="border-t border-b border-gray-100 py-3 mb-4 mt-auto">
//                       <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Inclusions</p>
//                       <div className="flex flex-wrap gap-4">
//                         {pkg.inclusions.map((inclusion, idx) => (
//                           <div key={idx} className="flex flex-col items-center justify-center text-gray-500">
//                             <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-1 text-indigo-600">
//                               {getInclusionIcon(inclusion)}
//                             </div>
//                             <span className="text-[10px] font-semibold text-center leading-tight w-12 truncate">{inclusion}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="flex items-end justify-between">
//                       <div>
//                         <p className="text-xs text-gray-400 font-semibold line-through mb-0.5">{pkg.originalPrice}</p>
//                         <div className="flex items-baseline">
//                           <span className="text-2xl font-black text-indigo-950">{pkg.discountedPrice}</span>
//                           <span className="text-xs text-gray-500 ml-1 font-medium">/ person</span>
//                         </div>
//                       </div>
//                       <button className="bg-orange-500 hover:bg-indigo-950 text-white px-5 py-2.5 rounded-xl font-bold transition-colors duration-300 shadow-lg shadow-orange-500/20 text-sm flex items-center">
//                         View Details
//                         <ChevronRight size={16} className="ml-1" />
//                       </button>
//                     </div>

//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
//               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Filter size={24} className="text-gray-400" />
//               </div>
//               <h3 className="text-xl font-bold text-indigo-950 mb-2">No Packages Found</h3>
//               <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
//               <button 
//                 onClick={resetFilters}
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-colors"
//               >
//                 Clear All Filters
//               </button>
//             </div>
//           )}
          
//           {filteredPackages.length > 0 && (
//             <div className="mt-10 flex justify-center">
//               <button className="bg-white border-2 border-indigo-950 text-indigo-950 hover:bg-indigo-950 hover:text-white px-8 py-3 rounded-full font-bold transition-colors duration-300">
//                 Load More Packages
//               </button>
//             </div>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default NepalPackagesPage;









































import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. Link import kiya
import { 
  MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
  Star, Filter, ChevronRight, ChevronLeft, Bus, Mountain 
} from 'lucide-react';
import pokhara from "../images/pokhara.jpg";
import chitwan from "../images/chitwan.jpeg";
import lumbini from "../images/lumbin.jpeg"
import annapurna from "../images/Annapurna.jpeg"; 
import bhaktapur from "../images/bhaktapur.jpeg"; 
import nagarkot from "../images/nagarkot.jpeg";   
import mustang from "../images/mustang.jpeg";     
import patan from "../images/patan.jpeg"; 
import pokharabanner from "../images/pokharabanner.png"
import chitwanbanner from "../images/chitwanbanner.png"

// 1. Premium Nepal Banner Carousel Data
const bannerData = [
  { 
    id: 1, 
    title: "Explore Kathmandu Valley", 
    subtitle: "Discover ancient temples, vibrant culture, and the heritage of the Himalayas.", 
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
  },
  { 
    id: 2, 
    title: "Pokhara: The City of Lakes", 
    subtitle: "Experience serenity by Phewa Lake with stunning Annapurna views.", 
    image: pokharabanner 
  },
  { 
    id: 3, 
    title: "Everest Base Camp Trek", 
    subtitle: "Conquer the ultimate adventure and stand at the roof of the world.", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600&q=80" 
  },
  { 
    id: 4, 
    title: "Chitwan Wildlife Safari", 
    subtitle: "Dive into the deep jungles and spot the rare one-horned rhino.", 
    image: chitwanbanner 
  }
];

// 2. Nepal Packages Data for Filtering
const packagesData = [
  {
    id: 1,
    title: " Kathmandu",
    region: "Kathmandu Valley",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: "Kathmandu (2N) → Bhaktapur (1N) → Patan (1N) → Nagarkot",
    duration: "5 Days / 4 Nights",
    daysValue: 4, 
    originalPrice: "₹...",
    discountedPrice: "₹...",
    priceValue: 14999, 
    discount: "..% OFF",
    rating: 4.8,
    style: "Leisure & Culture", 
    inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
    tag: "Bestseller"
  },
  {
    id: 2,
    title: " BaseCamp",
    region: "Everest Region",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    destinations: "Gorakhpur → Pokhara (2N) → ABC Trek (6N) → Gorakhpur",
    duration: "9 Days/ 8 Nights",
    daysValue: 14,
    originalPrice: "₹...",
    discountedPrice: "₹...",
    priceValue: 45500,
    discount: "...% OFF",
    rating: 4.9,
    style: "Trekking & Adventure",
   inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
    tag: "Adventure"
  },
  {
    id: 3,
    title: "Pokhara",
    region: "Annapurna Region",
    image: pokhara,
    destinations: "Gorakhpur → Lumbini → Pokhara (3N) → Gorakhpur",
    duration: "4 Days / 3 Nights",
    daysValue: 6,
    originalPrice: "₹...",
    discountedPrice: "₹...",
    priceValue: 19999,
    discount: "...% OFF",
    rating: 4.7,
    style: "Leisure & Culture",
    inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
    tag: "Family Favorite"
  },
  {
    id: 4,
    title: "Chitwan",
    region: "Terai Region",
    image: chitwan,
    destinations: "Gorakhpur → Sunauli → Chitwan National Park (3N) → Gorakhpur",
    duration: "4 Days/ 3 Nights",
    daysValue: 3,
    originalPrice: "₹...",
    discountedPrice: "₹...",
    priceValue: 11500,
    discount: "...% OFF",
    rating: 4.6,
    style: "Wildlife Safari",
   inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
    tag: "Trending"
  },
  {
    id: 5,
    title: "Annapurna",
    region: "Annapurna Region",
    image: annapurna,
    destinations: "Gorakhpur → Pokhara (2N) → ABC (Heli Landing) → Gorakhpur",
    duration: "3 Days / 2 Nights",
    daysValue: 10,
    originalPrice: "₹...",
    discountedPrice: "₹...",
    priceValue: 32500,
    discount: "...% OFF",
    rating: 4.8,
    style: "Trekking & Adventure",
    inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
    tag: "Popular Trek"
  },
  {
    id: 6,
    title: " Lumbini",
    region: "Lumbini Region",
    image: lumbini,
    destinations: "Gorakhpur → Sunauli → Lumbini (1N) → Gorakhpur",
    duration: "2 Days / 1 Nights",
    daysValue: 4,
    originalPrice: "₹...",
    discountedPrice: "₹...",
    priceValue: 13500,
    discount: "...% OFF",
    rating: 4.5,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
    tag: "Peaceful"
  } ,
  {
    id: 7,
    title: " Mustang",
    region: "Mustang Region",
    image: mustang,
    destinations: "Gorakhpur → Pokhara (2N) → Jomsom/Mustang (2N) → Pokhara (1N) → Gorakhpur",
    duration: "6 Days /5 Nights",
    daysValue: 4,
    originalPrice: "₹...",
    discountedPrice: "₹...",
    priceValue: 13500,
    discount: "...% OFF",
    rating: 4.5,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
    tag: "Peaceful"
  },
  {
    id: 8,
    title: " Nagarkot",
    region: "Nagarkot Region",
    image: nagarkot,
    destinations: "Gorakhpur → Kathmandu (2N) → Nagarkot (1N) → Gorakhpur",
    duration: "4 Days / 3Nights",
    daysValue: 4,
    originalPrice: "₹...",
    discountedPrice: "₹...",
    priceValue: 13500,
    discount: "...% OFF",
    rating: 4.5,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Flight', ' Hotel', 'All Meals', 'Sightseeing','Transfer', 'Guide'],
    tag: "Peaceful"
  }
];

const NepalPackagesPage = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // State for Nepal Specific Filters
  const [filters, setFilters] = useState({
    region: [],
    budget: [],
    duration: [],
    style: []
  });

  // --- Auto-Slide logic for the Banner ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(currentSlide === bannerData.length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? bannerData.length - 1 : currentSlide - 1);

  // Filter Toggle Handler
  const toggleFilter = (category, value) => {
    setFilters(prev => {
      const currentCategory = prev[category];
      if (currentCategory.includes(value)) {
        return { ...prev, [category]: currentCategory.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...currentCategory, value] };
      }
    });
  };

  // Clear All Filters
  const resetFilters = () => {
    setFilters({ region: [], budget: [], duration: [], style: [] });
  };

  // Filtering Logic
  const filteredPackages = packagesData.filter(pkg => {
    if (filters.region.length > 0 && !filters.region.includes(pkg.region)) return false;
    if (filters.style.length > 0 && !filters.style.includes(pkg.style)) return false;
    
    if (filters.duration.length > 0) {
      const matchesDuration = filters.duration.some(range => {
        if (range === '1 - 3 Days') return pkg.daysValue <= 3;
        if (range === '4 - 6 Days') return pkg.daysValue >= 4 && pkg.daysValue <= 6;
        if (range === '7 - 10 Days') return pkg.daysValue >= 7 && pkg.daysValue <= 10;
        if (range === '11+ Days (Trekking)') return pkg.daysValue >= 11;
        return false;
      });
      if (!matchesDuration) return false;
    }

    if (filters.budget.length > 0) {
      const matchesBudget = filters.budget.some(range => {
        if (range === 'Below ₹15,000') return pkg.priceValue < 15000;
        if (range === '₹15,000 - ₹25,000') return pkg.priceValue >= 15000 && pkg.priceValue <= 25000;
        if (range === '₹25,000 - ₹40,000') return pkg.priceValue >= 25000 && pkg.priceValue <= 40000;
        if (range === 'Above ₹40,000') return pkg.priceValue > 40000;
        return false;
      });
      if (!matchesBudget) return false;
    }
    return true;
  });

  const getInclusionIcon = (item) => {
    const text = item.toLowerCase();
    if (text.includes('flight')) return <Plane size={16} />;
    if (text.includes('bus') || text.includes('transfer')) return <Bus size={16} />;
    if (text.includes('hotel') || text.includes('teahouse')) return <BedDouble size={16} />;
    if (text.includes('meal') || text.includes('breakfast')) return <Utensils size={16} />;
    if (text.includes('guide') || text.includes('trek')) return <Mountain size={16} />;
    return <Camera size={16} />;
  };

  // 2. Helper function to create URL slug from Title
  const createSlug = (name) => {
    return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
  };

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen pb-16">
      
      {/* 1. FULL WIDTH BANNER CAROUSEL */}
      <div className="relative group w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-900">
        
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerData.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative">
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div> */}
              
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-md tracking-tight">
                  {banner.title}
                </h2>
                <p className="text-base md:text-xl font-medium text-gray-200 drop-shadow-md max-w-lg mb-6">
                  {banner.subtitle}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-bold py-3 px-8 rounded-full w-max transition-colors shadow-lg">
                  Explore Packages
                </button>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-indigo-950 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronLeft size={28} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-indigo-950 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {bannerData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "bg-orange-500 w-8" : "bg-white/60 hover:bg-white w-2.5"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button 
          className="lg:hidden flex items-center justify-center w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm text-indigo-950 font-bold mb-4"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <Filter size={20} className="mr-2 text-orange-500" />
          {showMobileFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Sidebar (Filters) */}
        <aside className={`w-full lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h2 className="text-lg font-extrabold text-indigo-950 flex items-center">
                <Filter size={18} className="mr-2 text-orange-500" /> Filters
              </h2>
              <button 
                onClick={resetFilters}
                className="text-sm text-orange-500 font-semibold cursor-pointer hover:underline outline-none"
              >
                Reset All
              </button>
            </div>

            {/* Filter Group: Nepal Region */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3">Region in Nepal</h3>
              <div className="space-y-2">
                {['Kathmandu Valley', 'Annapurna Region', 'Everest Region', 'Terai Region'].map((region, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={filters.region.includes(region)}
                      onChange={() => toggleFilter('region', region)}
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" 
                    />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{region}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Price Budget */}
            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Budget (Per Person)</h3>
              <div className="space-y-2">
                {['Below ₹15,000', '₹15,000 - ₹25,000', '₹25,000 - ₹40,000', 'Above ₹40,000'].map((price, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={filters.budget.includes(price)}
                      onChange={() => toggleFilter('budget', price)}
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" 
                    />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Duration */}
            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Duration</h3>
              <div className="space-y-2">
                {['1 - 3 Days', '4 - 6 Days', '7 - 10 Days', '11+ Days (Trekking)'].map((duration, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={filters.duration.includes(duration)}
                      onChange={() => toggleFilter('duration', duration)}
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" 
                    />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{duration}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Group: Tour Style */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Tour Style</h3>
              <div className="space-y-2">
                {['Leisure & Culture', 'Trekking & Adventure', 'Wildlife Safari', 'Spiritual / Pilgrimage'].map((style, i) => (
                  <label key={i} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={filters.style.includes(style)}
                      onChange={() => toggleFilter('style', style)}
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer" 
                    />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors">{style}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </aside>

        {/* Package Grid Area */}
        <div className="w-full lg:w-3/4">

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2">Nepal Tour Packages</h1>
            <p className="text-gray-600 text-base max-w-3xl">
              Explore the majestic Himalayas. From the cultural heart of Kathmandu to the thrilling heights of Everest, find your perfect Nepal holiday.
            </p>
          </div>

          {/* Results Count & Sort Dropdown */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg md:text-xl font-extrabold text-indigo-950">Showing {filteredPackages.length} Packages</h2>
            <select className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 p-2.5 outline-none bg-white cursor-pointer shadow-sm font-medium">
              <option>Sort by: Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Duration: Short to Long</option>
            </select>
          </div>

          {/* Package Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col">
                  
                  {/* Image & Badges */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md">
                      {pkg.discount}
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wide">
                      {pkg.region}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-extrabold text-indigo-950 leading-tight group-hover:text-orange-600 transition-colors pr-2">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold shrink-0 mt-1">
                        {pkg.rating} <Star size={12} className="ml-1 fill-current" />
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 font-medium space-y-2 mb-4 mt-2">
                      <div className="flex items-center">
                        <MapPin size={16} className="text-orange-500 mr-2 shrink-0" />
                        <span className="truncate">{pkg.destinations}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="text-orange-500 mr-2 shrink-0" />
                        {pkg.duration}
                      </div>
                    </div>

                    <div className="border-t border-b border-gray-100 py-3 mb-4 mt-auto">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Inclusions</p>
                      <div className="flex flex-wrap gap-4">
                        {pkg.inclusions.map((inclusion, idx) => (
                          <div key={idx} className="flex flex-col items-center justify-center text-gray-500">
                            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-1 text-indigo-600">
                              {getInclusionIcon(inclusion)}
                            </div>
                            <span className="text-[10px] font-semibold text-center leading-tight w-12 truncate">{inclusion}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-gray-400 font-semibold line-through mb-0.5">{pkg.originalPrice}</p>
                        <div className="flex items-baseline">
                          <span className="text-2xl font-black text-indigo-950">{pkg.discountedPrice}</span>
                          <span className="text-xs text-gray-500 ml-1 font-medium">/ person</span>
                        </div>
                      </div>
                      {/* 3. Link Added Here */}
                      <Link 
                        to={`/package/${createSlug(pkg.title)}`}
                        className="bg-orange-500 hover:bg-indigo-950 text-white px-5 py-2.5 rounded-xl font-bold transition-colors duration-300 shadow-lg shadow-orange-500/20 text-sm flex items-center"
                      >
                        View Details
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-indigo-950 mb-2">No Packages Found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
              <button 
                onClick={resetFilters}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
          
          {filteredPackages.length > 0 && (
            <div className="mt-10 flex justify-center">
              <button className="bg-white border-2 border-indigo-950 text-indigo-950 hover:bg-indigo-950 hover:text-white px-8 py-3 rounded-full font-bold transition-colors duration-300">
                Load More Packages
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default NepalPackagesPage;