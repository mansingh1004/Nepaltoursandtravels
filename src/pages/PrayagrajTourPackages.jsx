import React, { useState, useEffect } from 'react';
import TriveniSangam from "../images/Triveni-Sangam.webp"
import HistoricPrayagraj from "../images/anand-bhawan-prayagraj-uttar-pradesh-2.jpg"
import KumbhMela from "../images/Kumbh Mela Destination.webp"
import Ayodhya from "../images/Ram-Mandir-Ayodhya-Tour.jpg"
import Kashi from "../images/kashi-vishhwanath-temple-varanasi-india.jpg"
import Chitrakoot from "../images/Chitrakoot2.jpg"
import Gorakhpur from "../images/Visit-Gorakhnath-Temple.jpg"
import NepalBorder from "../images/GettyImages-1439040510.webp"
import Lucknow from "../images/luknow.jpg"



import { 
  MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
  Star, Filter, ChevronRight, ChevronLeft, Bus, Mountain,
  ShieldCheck, Zap, Landmark, CheckCircle
} from 'lucide-react';

// 1. Prayagraj Banner Carousel Data
const bannerData = [
  { 
    id: 1, 
    title: "Triveni Sangam: The Holy Confluence", 
    subtitle: "Experience the spiritual energy where Ganga, Yamuna, and Saraswati meet.", 
    image: TriveniSangam 
  },
  { 
    id: 2, 
    title: "Historic Prayagraj Heritage", 
    subtitle: "Discover the legacy of Anand Bhawan and ancient spiritual landmarks.", 
    image: HistoricPrayagraj 
  },
  { 
    id: 3, 
    title: "Kumbh Mela Destination", 
    subtitle: "Join the world's largest spiritual gathering in the heart of Uttar Pradesh.", 
    image: KumbhMela 
  }
];

// 2. Prayagraj Packages Data (Formatted for Filtering)
const packagesData = [
  {
    id: 1,
    title: "Prayagraj → Ayodhya",
    region: "Temple Circuit",
    image: Ayodhya,
    destinations: "Sangam • Ayodhya • Ram Mandir",
    duration: "2 Days / 1 Night",
    daysValue: 2, 
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 6499, 
    discount: ".. OFF",
    rating: 5.0,
    style: "Spiritual / Pilgrimage", 
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Bestseller"
  },
  {
    id: 2,
    title: "Prayagraj → Kashi",
    region: "Spiritual Circuit",
    image: Kashi,
    destinations: "Sangam • Kashi Vishwanath • Dashashwamedh Ghat",
    duration: "3 Days / 2 Nights",
    daysValue: 3,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 9999,
    discount: ".. OFF",
    rating: 4.9,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer'],
    tag: "Holy Sangam"
  },
  {
    id: 3,
    title: "Prayagraj → Chitrakoot",
    region: "Ramayana Path",
    image: Chitrakoot,
    destinations: "Sangam • Gupt Godavari • Ram Ghat",
    duration: "2 Days / 1 Night",
    daysValue: 2,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 5999,
    discount: ".. OFF",
    rating: 4.8,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Sacred Forest"
  },
  {
    id: 4,
    title: "Prayagraj → Gorakhpur",
    region: "Nepal Gateway",
    image: Gorakhpur,
    destinations: "Gorakhnath Temple • Maghar • Kushinagar",
    duration: "4 Days / 3 Nights",
    daysValue: 4,
    originalPrice: "₹...",
    discountedPrice: "₹....",
    priceValue: 12500,
    discount: ".. OFF",
    rating: 4.7,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Trending"
  },
  {
    id: 5,
    title: "Prayagraj → Nepal Border",
    region: "International Link",
    image: NepalBorder,
    destinations: "Lumbini • Sonauli • Gorakhpur",
    duration: "5 Days / 4 Nights",
    daysValue: 5,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 18500,
    discount: ".. OFF",
    rating: 4.6,
    style: "Trekking & Adventure",
    inclusions: ['Hotel', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Cross Border"
  },
  {
    id: 6,
    title: "Prayagraj → Lucknow",
    region: "Heritage Path",
    image: Lucknow,
    destinations: "Bara Imambara • Rumi Darwaza • Residency",
    duration: "3 Days / 2 Nights",
    daysValue: 3,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 8999,
    discount: ".. OFF",
    rating: 4.8,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Nawab City"
  }
];

const PrayagrajTourPackages = () => {
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
        if (range === 'Below ₹10,000') return pkg.priceValue < 10000;
        if (range === '₹10,000 - ₹20,000') return pkg.priceValue >= 10000 && pkg.priceValue <= 20000;
        if (range === 'Above ₹20,000') return pkg.priceValue > 20000;
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
    if (text.includes('hotel')) return <BedDouble size={16} />;
    if (text.includes('meal') || text.includes('breakfast')) return <Utensils size={16} />;
    return <Camera size={16} />;
  };

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen pb-16">
      
      {/* 1. HERO BANNER */}
      <div className="relative group w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-900">
        <div className="flex h-full w-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {bannerData.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative">
              <img src={banner.image} alt={banner.title} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto text-white">
                {/* <span className="bg-orange-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 w-max">Established 1999</span> */}
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-md tracking-tight uppercase">{banner.title}</h2>
                <p className="text-base md:text-xl font-medium text-gray-200 drop-shadow-md max-w-lg mb-6">{banner.subtitle}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-bold py-3 px-8 rounded-full w-max transition-colors shadow-lg">Explore Prayagraj</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"><ChevronLeft size={28} /></button>
        <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"><ChevronRight size={28} /></button>
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
              <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase">Region</h3>
              {['Temple Circuit', 'Spiritual Circuit', 'Ramayana Path', 'Nepal Gateway', 'Heritage Path'].map((region, i) => (
                <label key={i} className="flex items-center space-x-3 cursor-pointer group mb-2">
                  <input type="checkbox" checked={filters.region.includes(region)} onChange={() => toggleFilter('region', region)} className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500" />
                  <span className="text-gray-600 group-hover:text-orange-500 transition-colors text-sm">{region}</span>
                </label>
              ))}
            </div>

            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase">Budget</h3>
              {['Below ₹10,000', '₹10,000 - ₹20,000', 'Above ₹20,000'].map((price, i) => (
                <label key={i} className="flex items-center space-x-3 cursor-pointer group mb-2">
                  <input type="checkbox" checked={filters.budget.includes(price)} onChange={() => toggleFilter('budget', price)} className="w-4 h-4 text-orange-500 rounded" />
                  <span className="text-gray-600 group-hover:text-orange-500 transition-colors text-sm">{price}</span>
                </label>
              ))}
            </div>

            <div className="bg-blue-900 rounded-2xl p-5 text-white mt-8">
               <Zap size={20} className="text-orange-400 mb-2"/>
               <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Expert Pickup</p>
               <p className="text-xs font-bold mt-1">Reliable station & airport pickup for all tourists.</p>
            </div>
          </div>
        </aside>

        {/* Package Grid Area */}
        <div className="w-full lg:w-3/4">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2 uppercase tracking-tight">Prayagraj Tour Packages</h1>
            <p className="text-gray-600 text-base max-w-3xl italic">
              "Our Prayagraj Tour Packages offer a complete spiritual and cultural experience, including Triveni Sangam Darshan, Bade Hanuman Ji Temple visit, and sightseeing across the historic city of Prayagraj. From sacred rituals to heritage exploration, we provide smooth travel, clean vehicles, and reliable service for a peaceful pilgrimage.
            </p>
          </div>

          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg md:text-xl font-extrabold text-indigo-950 uppercase tracking-tighter">Showing {filteredPackages.length} Packages</h2>
            <select className="border border-gray-300 text-gray-700 text-sm rounded-lg p-2.5 outline-none bg-white cursor-pointer font-medium">
              <option>Sort by: Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {filteredPackages.length > 0 ? (
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
                      <h3 className="text-xl font-extrabold text-indigo-950 leading-tight group-hover:text-orange-600 transition-colors pr-2 uppercase">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold">
                        {pkg.rating} <Star size={12} className="ml-1 fill-current" />
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 font-medium space-y-2 mb-4 mt-2">
                      <div className="flex items-center"><MapPin size={16} className="text-orange-500 mr-2 shrink-0" /> <span className="truncate">{pkg.destinations}</span></div>
                      <div className="flex items-center"><Clock size={16} className="text-orange-500 mr-2 shrink-0" /> {pkg.duration}</div>
                    </div>

                    <div className="border-t border-b border-gray-100 py-3 mb-4 mt-auto">
                      <div className="flex flex-wrap gap-4">
                        {pkg.inclusions.map((inclusion, idx) => (
                          <div key={idx} className="flex flex-col items-center justify-center text-gray-500">
                            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center mb-1 text-indigo-600">{getInclusionIcon(inclusion)}</div>
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
                      <button className="bg-orange-500 hover:bg-indigo-950 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg text-sm flex items-center">
                        View Details <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <Filter size={24} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-indigo-950 mb-2 uppercase">No Packages Found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters for the Sangam experience.</p>
              <button onClick={resetFilters} className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold">Clear All Filters</button>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER CTA SECTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 p-12 lg:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
           <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tighter uppercase leading-none italic">Experience Prayagraj</h2>
           <p className="text-slate-400 text-sm lg:text-base mb-10 italic font-medium opacity-80 leading-relaxed max-w-2xl mx-auto">
             "Our Prayagraj tours promise an unforgettable spiritual journey. Contact us 24/7 for bookings!"
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+918576000084" className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-black text-[11px] tracking-widest transition-transform hover:scale-105 shadow-xl uppercase">
                 Call: +91 8576000084
              </a>
              <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1 text-slate-500">Head Office</p>
                  <p className="font-bold text-xs text-slate-300 italic">Gorakhpur (U.P) - 273001</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default PrayagrajTourPackages;