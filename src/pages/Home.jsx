// import React, { useRef } from 'react';
// import { MapPin, Calendar, Star, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

// // Make sure your video path is correct here!
// import nepalVideo from '../images/nepalvideo.mp4'; 

// const HomePage = () => {
//   // Reference for the carousel scrolling
//   const carouselRef = useRef(null);

//   // Scroll function for the carousel buttons
//   const scroll = (scrollOffset) => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
//     }
//   };

//   // Sample data for the carousel
//   const featuredPackages = [
//     {
//       id: 1,
//       title: "Everest Base Camp Trek",
//       image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       duration: "14 Days",
//       location: "Khumbu Region",
//       price: "₹45,000",
//       rating: "4.9"
//     },
//     {
//       id: 2,
//       title: "Pokhara Adventure & Lakes",
//       image: "https://images.unsplash.com/photo-1605640840469-60ce8f05eeac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       duration: "5 Days",
//       location: "Pokhara",
//       price: "₹15,500",
//       rating: "4.8"
//     },
//     {
//       id: 3,
//       title: "Kathmandu Cultural Tour",
//       image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       duration: "4 Days",
//       location: "Kathmandu Valley",
//       price: "₹12,000",
//       rating: "4.7"
//     },
//     {
//       id: 4,
//       title: "Annapurna Circuit Trek",
//       image: "https://images.unsplash.com/photo-1589802787167-393ff80e6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       duration: "12 Days",
//       location: "Annapurna Region",
//       price: "₹38,000",
//       rating: "4.9"
//     },
//     {
//       id: 5,
//       title: "Chitwan Jungle Safari",
//       image: "https://images.unsplash.com/photo-1610423018151-61014e7aebaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       duration: "3 Days",
//       location: "Chitwan National Park",
//       price: "₹10,500",
//       rating: "4.6"
//     }
//   ];

//   return (
//     <div className="w-full font-sans bg-gray-50 pb-20">
      
//       {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
//       <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        
//         {/* Clean, High-Quality Video Tag */}
//         <video 
//           autoPlay 
//           loop 
//           muted 
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0"
//         >
//           <source src={nepalVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Improved Overlay: Better for video visibility (no muddy shadows) */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60 z-10"></div>

//         {/* Hero Content (Shadows removed) */}
//         <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/40 text-sm font-bold uppercase tracking-widest mb-6">
//             <PlayCircle size={16} className="text-orange-400" />
//             Discover The Himalayas
//           </span>
//           <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
//             Unleash Your Spirit <br/> in <span className="text-orange-400">Nepal</span>
//           </h1>
//           <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-medium">
//             From the peak of Mount Everest to the peaceful lakes of Pokhara. Your ultimate Himalayan adventure starts here.
//           </p>
          
//           {/* Quick Search Bar (Removed shadow, added clean border) */}
//           <div className="bg-white p-3 rounded-full flex flex-col md:flex-row items-center justify-between border-4 border-white/20 max-w-3xl mx-auto space-y-3 md:space-y-0">
//             <div className="flex items-center px-4 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0">
//               <MapPin className="text-orange-500 mr-2" size={24} />
//               <input type="text" placeholder="Where do you want to go?" className="w-full md:w-48 outline-none text-gray-700 font-semibold placeholder-gray-400 bg-transparent" />
//             </div>
//             <div className="flex items-center px-4 w-full md:w-auto">
//               <Calendar className="text-orange-500 mr-2" size={24} />
//               <input type="text" placeholder="Month (e.g. October)" className="w-full md:w-40 outline-none text-gray-700 font-semibold placeholder-gray-400 bg-transparent" />
//             </div>
//             <button className="w-full md:w-auto bg-orange-500 text-white px-8 py-3.5 rounded-full font-bold hover:bg-indigo-900 transition-colors duration-300">
//               Search Tour
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* 2. CAROUSEL SECTION (Trending Packages) */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        
//         <div className="flex justify-between items-end mb-8">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2">Trending Packages</h2>
//             <p className="text-gray-500 font-medium">Explore our most popular Nepal travel itineraries.</p>
//           </div>
          
//           {/* Custom Carousel Navigation Buttons (Removed shadows, added border) */}
//           <div className="hidden md:flex gap-3">
//             <button 
//               onClick={() => scroll(-400)} 
//               className="p-3 rounded-full bg-white border border-gray-200 text-indigo-900 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button 
//               onClick={() => scroll(400)} 
//               className="p-3 rounded-full bg-white border border-gray-200 text-indigo-900 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>

//         {/* Carousel Container */}
//         <div 
//           ref={carouselRef} 
//           className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-2"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           <style>{`
//             div::-webkit-scrollbar { display: none; }
//           `}</style>

//           {featuredPackages.map((pkg) => (
//             // Card Container (Removed shadow, added clean border)
//             <div 
//               key={pkg.id} 
//               className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl border border-gray-200 overflow-hidden snap-start group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
//             >
//               {/* Card Image */}
//               <div className="relative h-56 overflow-hidden">
//                 <img 
//                   src={pkg.image} 
//                   alt={pkg.title} 
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 {/* Rating Badge (Removed shadow) */}
//                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center border border-gray-100">
//                   <Star size={14} className="text-yellow-500 fill-current mr-1" />
//                   <span className="text-sm font-bold text-gray-800">{pkg.rating}</span>
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-5">
//                 <div className="flex items-center text-sm text-gray-500 mb-2 font-medium">
//                   <MapPin size={16} className="text-orange-500 mr-1" />
//                   {pkg.location}
//                   <span className="mx-2">•</span>
//                   <Calendar size={16} className="text-orange-500 mr-1" />
//                   {pkg.duration}
//                 </div>
                
//                 <h3 className="text-xl font-bold text-indigo-950 mb-4 line-clamp-1 group-hover:text-orange-500 transition-colors">
//                   {pkg.title}
//                 </h3>
                
//                 <div className="flex items-center justify-between border-t border-gray-100 pt-4">
//                   <div>
//                     <span className="text-xs text-gray-500 font-semibold uppercase">Starting from</span>
//                     <div className="text-lg font-extrabold text-indigo-900">{pkg.price}</div>
//                   </div>
//                   <button className="bg-orange-50 text-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition-colors duration-300">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//       </section>
//     </div>
//   );
// };

// export default HomePage;
















import React, { useState, useEffect } from 'react';
import { 
  MapPin, Search, Plane, Building2, Map, 
  CreditCard, Palmtree, Bike, FileText 
} from 'lucide-react';

// Make sure your video path is correct here!
import nepalVideo from '../images/nepalvideo.mp4'; 
import IndiaPackages from '../pages/IndiaPackages';
import NepalPackages from "../pages/NepalPackages"
import AdventureSport from '../adventuresports/AdventureSport';
import Services from "../pages/Services"


const popularDestinations = [
  "Kathmandu Valley",
  "Pokhara",
  "Chitwan National Park",
  "Lumbini",
  "Everest Base Camp",
  "Annapurna Base Camp",
  "Bhaktapur",
  "Nagarkot",
  "Mustang Region"
];

// Array of Quick Services (Icons)
const quickServices = [
  { name: 'Holidays', icon: <Palmtree size={24} strokeWidth={1.5} /> },
  { name: 'Flights', icon: <Plane size={24} strokeWidth={1.5} /> },
  { name: 'Hotels', icon: <Building2 size={24} strokeWidth={1.5} /> },
  { name: 'Forex', icon: <CreditCard size={24} strokeWidth={1.5} /> },
  { name: 'Packages', icon: <Bike size={24} strokeWidth={1.5} /> },
  { name: 'Services', icon: <Map size={24} strokeWidth={1.5} /> },
  { name: 'Visa', icon: <FileText size={24} strokeWidth={1.5} /> },
];

const HomePage = () => {
  const [destination, setDestination] = useState("");

  // Typewriter Effect State
  const [placeholderText, setPlaceholderText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Animation Effect for Placeholder
  useEffect(() => {
    const currentWord = popularDestinations[wordIndex];
    // Speed: Typing is slower, deleting is faster
    const typingSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && placeholderText === currentWord) {
        // Pause when the word is fully typed before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && placeholderText === "") {
        // Move to the next word when fully deleted
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % popularDestinations.length);
      } else {
        // Type or delete characters
        setPlaceholderText(
          currentWord.substring(0, placeholderText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [placeholderText, isDeleting, wordIndex]);

  return (
    <>
      <div className="w-full font-sans bg-gray-50">
        
        {/* CSS to hide scrollbar for the mobile icon row */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>

        {/* HERO SECTION WITH VIDEO BACKGROUND */}
        <section className="relative w-full h-[85vh] flex flex-col items-center justify-center overflow-hidden">
          
          {/* Video Tag */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={nepalVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10"></div>

          {/* Hero Content */}
          <div className="relative z-20 text-center px-4 w-full max-w-6xl mx-auto mt-16 md:mt-20 flex flex-col items-center">
            
            {/* TRANSPARENT QUICK ACCESS ICONS (MOVED ABOVE HEADING) */}
            {/* Only visible on Mobile */}
            <div className="block md:hidden w-full max-w-4xl overflow-x-auto hide-scrollbar mb-8">
              <div className="flex justify-start gap-4 px-2 snap-x snap-mandatory">
                {quickServices.map((service, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="flex flex-col items-center justify-center min-w-[70px] snap-start group"
                  >
                    {/* Glassmorphism Icon Container */}
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center mb-2 shadow-lg group-hover:bg-white/30 group-hover:text-orange-400 group-hover:border-orange-400/50 transition-all duration-300 transform group-hover:-translate-y-1">
                      {service.icon}
                    </div>
                    {/* Icon Text */}
                    <span className="text-[10px] font-bold text-white/90 text-center tracking-wide group-hover:text-orange-400 transition-colors">
                      {service.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
              Unleash Your Spirit <br className="hidden md:block"/> in <span className="text-orange-400">Nepal</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto font-medium px-2">
              From the peak of Mount Everest to the peaceful lakes of Pokhara. Your ultimate Himalayan adventure starts here.
            </p>
            
            {/* SEARCH BAR */}
            <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center justify-between border-4 border-white/20 max-w-3xl mx-auto space-y-2 md:space-y-0 text-left shadow-2xl w-full">
              
              {/* Destination Input */}
              <div className="relative flex-1 w-full">
                <div className="flex items-center px-4 py-3 md:py-2">
                  <MapPin className="text-orange-500 mr-3 flex-shrink-0" size={26} />
                  <div className="w-full">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 hidden md:block">
                      Search Destination
                    </p>
                    <input 
                      type="text" 
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder={`e.g. ${placeholderText}`} 
                      className="w-full outline-none text-gray-800 font-bold placeholder-gray-400 bg-transparent text-base md:text-lg" 
                    />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="w-full md:w-auto px-2 pb-2 md:pb-0 pt-1 md:pt-0">
                <button className="w-full md:w-auto flex items-center justify-center bg-orange-500 text-white px-10 py-3.5 md:py-4 rounded-xl md:rounded-full font-bold hover:bg-indigo-950 transition-colors duration-300 shadow-lg shadow-orange-500/30 text-base">
                  <Search size={22} className="mr-2 hidden md:block" />
                  Explore Now
                </button>
              </div>
              
            </div>
          </div>
        </section>

      </div>

      <IndiaPackages />

      <NepalPackages/>
      <AdventureSport/>
      <Services/>
    </>
  );
};

export default HomePage;