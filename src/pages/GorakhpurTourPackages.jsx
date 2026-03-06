import React, { useState, useEffect } from 'react';
import SpiritualGateway from "../images/gorakhpur.webp"
import ScenicNaukaVihar from "../images/Nauka-Vihar-in.jpg"
import kushinagarbanner from "../images/kushinagar-banner2.webp"
import Kashi from "../images/kashi-vishhwanath-temple-varanasi-india.jpg"
import Ayodhya from "../images/Ram-Mandir-Ayodhya-Tour.jpg"
import Kushinagar from "../images/kushinagar-banner2.webp"
import NepalBorder from "../images/GettyImages-1439040510.webp" 
import Prayagraj from "../images/Triveni-Sangam.webp"
import Lucknow from "../images/luknow.jpg"



import { 
  MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
  Star, Filter, ChevronRight, ChevronLeft, Bus, Mountain,
  ShieldCheck, Zap, Landmark, CheckCircle
} from 'lucide-react';
import { fromJSON } from 'postcss';

// 1. Gorakhpur Banner Carousel Data
const bannerData = [
  { 
    id: 1, 
    title: "Gorakhpur: Spiritual Gateway", 
    subtitle: "Explore the divine Gorakhnath Temple and the cultural heart of Eastern UP.", 
    image: SpiritualGateway 
  },
  { 
    id: 2, 
    title: "Scenic Nauka Vihar", 
    subtitle: "Relax by the beautiful Ramgarh Tal and enjoy the vibrant Marine Drive.", 
    image: ScenicNaukaVihar 
  },
  { 
    id: 3, 
    title: "Gateway to Nepal & Kushinagar", 
    subtitle: "Your starting point for the Buddhist circuit and Himalayan adventures.", 
    image: kushinagarbanner 
  }
];

// 2. Gorakhpur Packages Data (Formatted for Filtering)
const packagesData = [
  {
    id: 1,
    title: "Gorakhpur → Kashi",
    region: "Spiritual Circuit",
    image: Kashi,
    destinations: "Gorakhpur • Varanasi • Vishwanath Temple",
    duration: "2 Days / 1 Night",
    daysValue: 2, 
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 6499, 
    discount: ".. OFF",
    rating: 4.9,
    style: "Spiritual / Pilgrimage", 
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Bestseller"
  },
  {
    id: 2,
    title: "Gorakhpur → Ayodhya",
    region: "Ramayana Circuit",
    image: Ayodhya ,
    destinations: "Gorakhpur • Ayodhya • Ram Janmabhoomi",
    duration: "2 Days / 1 Night",
    daysValue: 2,
    originalPrice: "₹...",
    discountedPrice: "₹...",
    priceValue: 5999,
    discount: ".. OFF",
    rating: 5.0,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Most Popular"
  },
  {
    id: 3,
    title: "Gorakhpur → Kushinagar",
    region: "Buddhist Circuit",
    image: Kushinagar,
    destinations: "Mahaparinirvana Temple • Ramabhar Stupa",
    duration: "1 Day / 0 Night",
    daysValue: 1,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 2499,
    discount: ".. OFF",
    rating: 4.8,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Sightseeing', 'Transfer', 'Guide'],
    tag: "Short Trip"
  },
  {
    id: 4,
    title: "Gorakhpur → Nepal Border",
    region: "Cross Border Link",
    image: NepalBorder ,
    destinations: "Sonauli Border • Lumbini Gateway",
    duration: "2 Days / 1 Night",
    daysValue: 2,
    originalPrice: "₹....",
    discountedPrice: "₹...",
    priceValue: 7500,
    discount: ".. OFF",
    rating: 4.7,
    style: "Trekking & Adventure",
    inclusions: ['Hotel', 'Transfer', 'Guide'],
    tag: "International Link"
  },
  {
    id: 5,
    title: "Gorakhpur → Prayagraj",
    region: "Sangam Circuit",
    image: Prayagraj ,
    destinations: "Sangam Darshan • Anand Bhawan",
    duration: "3 Days / 2 Nights",
    daysValue: 3,
    originalPrice: "₹....",
    discountedPrice: "₹...",
    priceValue: 9999,
    discount: ".. OFF",
    rating: 4.8,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer'],
    tag: "Cultural"
  },
  {
    id: 6,
    title: "Gorakhpur → Lucknow",
    region: "City Link",
    image: Lucknow ,
    destinations: "Bara Imambara • Residency • Lucknow City",
    duration: "3 Days / 2 Nights",
    daysValue: 3,
    originalPrice: "₹....",
    discountedPrice: "₹...",
    priceValue: 8999,
    discount: ".. OFF",
    rating: 4.6,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Family Choice"
  }
];

const GorakhpurTourPackages = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filters, setFilters] = useState({ region: [], budget: [], duration: [], style: [] });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(currentSlide === bannerData.length - 1 ? 0 : currentSlide + 1);
  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? bannerData.length - 1 : currentSlide - 1);

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

  const resetFilters = () => setFilters({ region: [], budget: [], duration: [], style: [] });

  const filteredPackages = packagesData.filter(pkg => {
    if (filters.region.length > 0 && !filters.region.includes(pkg.region)) return false;
    if (filters.style.length > 0 && !filters.style.includes(pkg.style)) return false;
    
    if (filters.duration.length > 0) {
      const matchesDuration = filters.duration.some(range => {
        if (range === '1 - 3 Days') return pkg.daysValue <= 3;
        if (range === '4 - 6 Days') return pkg.daysValue >= 4 && pkg.daysValue <= 6;
        return false;
      });
      if (!matchesDuration) return false;
    }

    if (filters.budget.length > 0) {
      const matchesBudget = filters.budget.some(range => {
        if (range === 'Below ₹5,000') return pkg.priceValue < 5000;
        if (range === '₹5,000 - ₹10,000') return pkg.priceValue >= 5000 && pkg.priceValue <= 10000;
        if (range === 'Above ₹10,000') return pkg.priceValue > 10000;
        return false;
      });
      if (!matchesBudget) return false;
    }
    return true;
  });

  const getInclusionIcon = (item) => {
    const text = item.toLowerCase();
    if (text.includes('flight')) return <Plane size={16} />;
    if (text.includes('transfer') || text.includes('bus')) return <Bus size={16} />;
    if (text.includes('hotel')) return <BedDouble size={16} />;
    if (text.includes('meal') || text.includes('breakfast')) return <Utensils size={16} />;
    return <Camera size={16} />;
  };

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen pb-16">
      
      {/* 1. BANNER CAROUSEL */}
      <div className="relative group w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-900">
        <div className="flex h-full w-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {bannerData.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative">
              <img src={banner.image} alt={banner.title} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-md tracking-tight uppercase">{banner.title}</h2>
                <p className="text-base md:text-xl font-medium text-gray-200 drop-shadow-md max-w-lg mb-6 leading-relaxed italic">"{banner.subtitle}"</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-bold py-3 px-8 rounded-full w-max transition-all shadow-lg">Explore Packages</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"><ChevronLeft size={28} /></button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"><ChevronRight size={28} /></button>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button className="lg:hidden flex items-center justify-center w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm text-indigo-950 font-bold mb-4" onClick={() => setShowMobileFilters(!showMobileFilters)}>
          <Filter size={20} className="mr-2 text-orange-500" />
          {showMobileFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Sidebar Filters */}
        <aside className={`w-full lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h2 className="text-lg font-extrabold text-indigo-950 flex items-center"><Filter size={18} className="mr-2 text-orange-500" /> Filters</h2>
              <button onClick={resetFilters} className="text-sm text-orange-500 font-semibold hover:underline">Reset All</button>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3 uppercase text-xs">Region</h3>
              {['Spiritual Circuit', 'Ramayana Circuit', 'Buddhist Circuit', 'Cross Border Link', 'Sangam Circuit', 'City Link'].map((r, i) => (
                <label key={i} className="flex items-center space-x-3 cursor-pointer group mb-2">
                  <input type="checkbox" checked={filters.region.includes(r)} onChange={() => toggleFilter('region', r)} className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                  <span className="text-gray-600 group-hover:text-orange-500 text-sm transition-colors">{r}</span>
                </label>
              ))}
            </div>

            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3 uppercase text-xs">Budget</h3>
              {['Below ₹5,000', '₹5,000 - ₹10,000', 'Above ₹10,000'].map((b, i) => (
                <label key={i} className="flex items-center space-x-3 cursor-pointer group mb-2">
                  <input type="checkbox" checked={filters.budget.includes(b)} onChange={() => toggleFilter('budget', b)} className="w-4 h-4 text-orange-500 rounded" />
                  <span className="text-gray-600 group-hover:text-orange-500 text-sm transition-colors">{b}</span>
                </label>
              ))}
            </div>

            <div className="bg-blue-900 rounded-2xl p-5 text-white mt-8 shadow-xl">
               <Zap size={20} className="text-orange-400 mb-2"/>
               <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Gorakhpur HQ</p>
               <p className="text-xs font-bold mt-1 leading-relaxed">Trusted local expertise since 1999.</p>
            </div>
          </div>
        </aside>

        {/* Package Grid Area */}
        <div className="w-full lg:w-3/4">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2 uppercase tracking-tight">Gorakhpur Tour Packages</h1>
            <p className="text-gray-600 text-base max-w-3xl italic">Our Gorakhpur Tour Packages offer a complete travel experience covering spiritual sites, cultural attractions, family-friendly spots, and nearby pilgrimage destinations. From Gorakhnath Temple Darshan to relaxing at Nauka Vihar and exploring heritage locations, we provide smooth travel, clean vehicles, and reliable service for a comfortable journey.</p>
          </div>

          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg md:text-xl font-extrabold text-indigo-950 uppercase tracking-tighter">Showing {filteredPackages.length} Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md">{pkg.discount}</div>
                  <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase">{pkg.region}</div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-extrabold text-indigo-950 leading-tight group-hover:text-orange-600 transition-colors uppercase">{pkg.title}</h3>
                    <div className="flex items-center bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold">{pkg.rating} <Star size={12} className="ml-1 fill-current" /></div>
                  </div>

                  <div className="text-sm text-gray-500 font-medium space-y-2 mb-4">
                    <div className="flex items-center"><MapPin size={16} className="text-orange-500 mr-2 shrink-0" /> <span className="truncate">{pkg.destinations}</span></div>
                    <div className="flex items-center"><Clock size={16} className="text-orange-500 mr-2 shrink-0" /> {pkg.duration}</div>
                  </div>

                  <div className="border-t border-b border-gray-100 py-3 mb-4 mt-auto">
                    <div className="flex flex-wrap gap-4">
                      {pkg.inclusions.map((inc, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-1 text-indigo-600">{getInclusionIcon(inc)}</div>
                          <span className="text-[10px] font-semibold text-gray-500 uppercase">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-400 font-semibold line-through mb-0.5">{pkg.originalPrice}</p>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-black text-indigo-950">{pkg.discountedPrice}</span>
                        <span className="text-xs text-gray-500 ml-1">/ person</span>
                      </div>
                    </div>
                    <button className="bg-orange-500 hover:bg-indigo-950 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg text-sm flex items-center">
                      View Details <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA Section */}
          <section className="mt-16 bg-slate-900 p-10 lg:p-16 rounded-[3rem] text-white relative overflow-hidden shadow-2xl text-center">
             <h2 className="text-3xl lg:text-5xl font-black mb-6 uppercase tracking-tighter italic">Experience Gorakhpur</h2>
             <p className="text-slate-400 text-lg mb-10 italic opacity-80 max-w-2xl mx-auto leading-relaxed">
               "Trusted local expertise since 1999. Contact us 24/7 for custom bookings!"
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a href="tel:+918576000084" className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase transition-transform hover:scale-105 shadow-xl">
                   Call: +91 8576000084
                </a>
                <div className="text-left text-slate-500">
                    <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Nepal Tour & Travels</p>
                    <p className="font-bold text-sm italic text-gray-300">HQ: Gorakhpur (U.P)</p>
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GorakhpurTourPackages;