import React, { useState, useEffect } from 'react';
import KashiVaranasi from "../images/kashi page banner_1.jpg"
import HolyGangaAarti from "../images/kashi page banner_2.webp"
import AyodhyaTour from "../images/Ram-Mandir-Ayodhya-Tour.jpg"
import PrayagrajTour from "../images/Triveni-Sangam.webp"
import GorakhpurTour from "../images/Visit-Gorakhnath-Temple.jpg" 
import LucknowTour from "../images/luknow.jpg"
import ChitrakootTour from "../images/Chitrakoot2.jpg"
import NepalBorder from "../images/GettyImages-1439040510.webp"


import { 
  MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
  Star, Filter, ChevronRight, ChevronLeft, Bus, Mountain,
  Waves, Hotel, Globe, ShieldCheck, Zap
} from 'lucide-react';

// 1. Kashi Banner Carousel Data (4 Premium Slides)
const bannerData = [
  { 
    id: 1, 
    title: "Explore Kashi Varanasi", 
    subtitle: "Experience the spiritual essence of Kashi Vishwanath and the timeless Ganga heritage.", 
    image: KashiVaranasi 
  },
  { 
    id: 2, 
    title: "Holy Ganga Aarti", 
    subtitle: "Witness the divine spectacle of the evening Aarti at Dashashwamedh Ghat.", 
    image: HolyGangaAarti 
  }
];

// 2. Kashi 6 Cards (Restored all content from your original code)
const packagesData = [
  {
    id: 1,
    title: "Kashi → Ayodhya Tour",
    region: "Temple Circuit",
    image: AyodhyaTour,
    destinations: "Varanasi • Ayodhya • Ram Mandir",
    duration: "2 Days / 1 Night",
    daysValue: 2, 
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 8999, 
    discount: ".. OFF",
    rating: 5.0,
    style: "Spiritual / Pilgrimage", 
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Bestseller"
  },
  {
    id: 2,
    title: "Kashi → Prayagraj Tour",
    region: "Holy Sangam",
    image: PrayagrajTour,
    destinations: "Varanasi • Triveni Sangam • Prayagraj",
    duration: "2 Days / 1 Night",
    daysValue: 2,
    originalPrice: "₹....",
    discountedPrice: "₹...",
    priceValue: 7499,
    discount: "... OFF",
    rating: 4.9,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Trending"
  },
  {
    id: 3,
    title: "Kashi → Gorakhpur Tour",
    region: "Nepal Gateway",
    image: GorakhpurTour,
    destinations: "Varanasi • Gorakhnath Temple • Maghar",
    duration: "3 Days / 2 Nights",
    daysValue: 3,
    originalPrice: "₹....",
    discountedPrice: "₹...",
    priceValue: 11500,
    discount: "18% OFF",
    rating: 4.7,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Cultural"
  },
  {
    id: 4,
    title: "Kashi → Lucknow Tour",
    region: "Nawab Heritage",
    image: LucknowTour,
    destinations: "Varanasi • Bara Imambara • Lucknow",
    duration: "3 Days / 2 Nights",
    daysValue: 3,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 12999,
    discount: "... OFF",
    rating: 4.8,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Family Favorite"
  },
  {
    id: 5,
    title: "Kashi → Chitrakoot Tour",
    region: "Spiritual Forest",
    image: ChitrakootTour,
    destinations: "Varanasi • Ram Ghat • Gupt Godavari",
    duration: "4 Days / 3 Nights",
    daysValue: 4,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 14999,
    discount: "... OFF",
    rating: 4.9,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Sacred Journey"
  },
  {
    id: 6,
    title: "Kashi → Nepal Border",
    region: "Cross Border Link",
    image: NepalBorder,
    destinations: "Varanasi • Gorakhpur • Sonauli Border",
    duration: "5 Days / 4 Nights",
    daysValue: 5,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 17999,
    discount: "... OFF",
    rating: 4.6,
    style: "Trekking & Adventure",
    inclusions: ['Hotel', 'Sightseeing', 'Transfer', 'Guide'],
    tag: " Nepal Gateway"
  }
];

const KashiTourPage = () => {
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
        if (range === '7+ Days') return pkg.daysValue >= 7;
        return false;
      });
      if (!matchesDuration) return false;
    }

    if (filters.budget.length > 0) {
      const matchesBudget = filters.budget.some(range => {
        if (range === 'Below ₹10,000') return pkg.priceValue < 10000;
        if (range === '₹10,000 - ₹15,000') return pkg.priceValue >= 10000 && pkg.priceValue <= 15000;
        if (range === 'Above ₹15,000') return pkg.priceValue > 15000;
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
              <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-md tracking-tight uppercase">{banner.title}</h2>
                <p className="text-base md:text-xl font-medium text-gray-200 drop-shadow-md max-w-lg mb-6">{banner.subtitle}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-bold py-3 px-8 rounded-full w-max transition-colors shadow-lg">Explore Kashi</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"><ChevronLeft size={28} /></button>
        <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"><ChevronRight size={28} /></button>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button className="lg:hidden flex items-center justify-center w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm text-indigo-950 font-bold mb-4" onClick={() => setShowMobileFilters(!showMobileFilters)}>
          <Filter size={20} className="mr-2 text-orange-500" />
          {showMobileFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Sidebar Filters (Exact same as Nepal) */}
        <aside className={`w-full lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h2 className="text-lg font-extrabold text-indigo-950 flex items-center"><Filter size={18} className="mr-2 text-orange-500" /> Filters</h2>
              <button onClick={resetFilters} className="text-sm text-orange-500 font-semibold hover:underline">Reset All</button>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3 uppercase text-xs tracking-wider">Region</h3>
              {['Temple Circuit', 'Holy Sangam', 'Nepal Gateway', 'Nawab Heritage', 'Spiritual Forest', 'Cross Border Link'].map((r) => (
                <label key={r} className="flex items-center space-x-3 cursor-pointer group mb-2">
                  <input type="checkbox" checked={filters.region.includes(r)} onChange={() => toggleFilter('region', r)} className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                  <span className="text-gray-600 group-hover:text-orange-500 text-sm transition-colors font-medium">{r}</span>
                </label>
              ))}
            </div>

            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3 uppercase text-xs tracking-wider">Budget</h3>
              {['Below ₹10,000', '₹10,000 - ₹15,000', 'Above ₹15,000'].map((b) => (
                <label key={b} className="flex items-center space-x-3 cursor-pointer group mb-2">
                  <input type="checkbox" checked={filters.budget.includes(b)} onChange={() => toggleFilter('budget', b)} className="w-4 h-4 text-orange-500 rounded" />
                  <span className="text-gray-600 group-hover:text-orange-500 text-sm transition-colors font-medium">{b}</span>
                </label>
              ))}
            </div>

            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3 uppercase text-xs tracking-wider">Duration</h3>
              {['1 - 3 Days', '4 - 6 Days', '7+ Days'].map((d) => (
                <label key={d} className="flex items-center space-x-3 cursor-pointer group mb-2">
                  <input type="checkbox" checked={filters.duration.includes(d)} onChange={() => toggleFilter('duration', d)} className="w-4 h-4 text-orange-500 rounded" />
                  <span className="text-gray-600 group-hover:text-orange-500 text-sm transition-colors font-medium">{d}</span>
                </label>
              ))}
            </div>

            <div className="bg-indigo-950 p-5 rounded-2xl text-white mt-8">
               <Zap size={20} className="text-orange-500 mb-2"/>
               <p className="text-[10px] font-black uppercase tracking-widest text-orange-400">Trusted Since 1999</p>
               <p className="text-xs font-bold mt-1">Providing reliable spiritual journeys for over 25 years.</p>
            </div>
          </div>
        </aside>

        {/* Package Grid (All 6 Cards) */}
        <div className="w-full lg:w-3/4">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2 uppercase tracking-tight">Kashi Varanasi Packages</h1>
            <p className="text-gray-600 text-base max-w-3xl italic">
              "Our **Kashi Tour Packages** offer a seamless travel solution for Kashi Vishwanath Darshan, local sightseeing, and holy temple visits. We provide smooth city transfers with expert drivers and clean vehicles for a peaceful spiritual journey.
            </p>
          </div>

          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg md:text-xl font-extrabold text-indigo-950">Showing {filteredPackages.length} Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md">{pkg.discount}</div>
                  <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase">{pkg.region}</div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-extrabold text-indigo-950 leading-tight group-hover:text-orange-600 transition-colors uppercase">{pkg.title}</h3>
                    <div className="flex items-center bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold shrink-0">{pkg.rating} <Star size={12} className="ml-1 fill-current" /></div>
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
                      <p className="text-xs text-gray-400 font-semibold line-through">{pkg.originalPrice}</p>
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

          {/* CTA Section (Same as Nepal) */}
          <section className="mt-16 bg-indigo-950 p-10 lg:p-16 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
             <h2 className="text-3xl lg:text-5xl font-black mb-6 uppercase tracking-tighter italic">Plan Your Darshan</h2>
             <p className="text-indigo-200 text-lg mb-10 italic opacity-80 max-w-2xl mx-auto leading-relaxed">
               "Our Kashi tours promise an unforgettable spiritual journey. Contact us 24/7 for bookings!"
             </p>
             <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="tel:+918576000084" className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase hover:scale-105 transition-transform shadow-xl">
                   Call: +91 8576000084
                </a>
                <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-1">Head Office</p>
                    <p className="font-bold text-sm italic text-gray-300">Gorakhpur (U.P) - 273001</p>
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default KashiTourPage;