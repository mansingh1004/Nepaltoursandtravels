import React, { useState, useEffect } from 'react';
import BodhGaya from "../images/Bodhgaya.jpg"
import BodhGaya_2 from "../images/Bodhgaya banner_2.webp"
import Varanasi from "../images/kashi-vishhwanath-temple-varanasi-india.jpg"
import Rajgir from "../images/Shanti_Stupa_at_Rajgir_(cropped) (2).jpg"
import Nalanda from "../images/nalanda-university-ruins.jpg"
import Patna from "../images/patna.webp"
import Kushinagar from "../images/kushinagar-banner2.webp" 
import Nepal from "../images/GettyImages-1439040510.webp"

import { Link } from 'react-router-dom';


import { 
  MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
  Star, Filter, ChevronRight, ChevronLeft, Bus, Mountain,
  ShieldCheck, Zap, Landmark, CheckCircle 
} from 'lucide-react';

// 1. Premium Bodh Gaya Banner Carousel Data
const bannerData = [
  { 
    id: 1, 
    title: "Bodh Gaya: Land of Enlightenment", 
    subtitle: "Experience the peace and divinity where Lord Buddha attained supreme wisdom.", 
    image: BodhGaya 
  },
  { 
    id: 2, 
    title: "UNESCO World Heritage Site", 
    subtitle: "Visit the majestic Mahabodhi Temple and the sacred Bodhi Tree.", 
    image: BodhGaya_2 
  },
 
];

// 2. Bodh Gaya 6 Packages Data
const packagesData = [
  {
    id: 1,
    title: "Bodh Gaya to Varanasi",
    region: "Spiritual Link",
    image: Varanasi ,
    destinations: "Mahabodhi Temple • Kashi Vishwanath • Ganga Aarti",
    duration: "2 Days / 1 Night",
    daysValue: 2, 
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 7499, 
    discount: ".. OFF",
    rating: 5.0,
    style: "Spiritual / Pilgrimage", 
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Bestseller"
  },
  {
    id: 2,
    title: "Bodh Gaya to Rajgir",
    region: "Short Drive",
    image: Rajgir,
    destinations: "Shanti Stupa • Griddhakuta Hill • Venu Van",
    duration: "2 Days / 1 Night",
    daysValue: 2, 
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 4999,
    discount: ".. OFF",
    rating: 4.8,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Peaceful"
  },
  {
    id: 3,
    title: "Bodh Gaya to Nalanda",
    region: "Ancient Wisdom",
    image: Nalanda,
    destinations: "Nalanda University Ruins • Archaeological Museum",
    duration: "1 Day / 0 Night",
    daysValue: 1,
    originalPrice: "₹...",
    discountedPrice: "₹....",
    priceValue: 2499,
    discount: ".. OFF",
    rating: 4.9,
    style: "Leisure & Culture",
    inclusions: ['Sightseeing', 'Transfer', 'Guide'],
    tag: "Historic"
  },
  {
    id: 4,
    title: "Bodh Gaya to Patna",
    region: "State Capital",
    image: Patna,
    destinations: "Mahavir Mandir • Golghar • Patna Museum",
    duration: "2 Days / 1 Night",
    daysValue: 2,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 5999,
    discount: ".. OFF",
    rating: 4.7,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Capital Link"
  },
  {
    id: 5,
    title: "Bodh Gaya to Kushinagar",
    region: "Mahaparinirvana",
    image: Kushinagar,
    destinations: "Parinirvana Temple • Ramabhar Stupa",
    duration: "3 Days / 2 Nights",
    daysValue: 3,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 9999,
    discount: ".. OFF",
    rating: 4.9,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer'],
    tag: "Buddhist Circuit"
  },
  {
    id: 6,
    title: "Bodh Gaya to Nepal (Lumbini)",
    region: "Lumbini Border",
    image: Nepal,
    destinations: "Lumbini (Birthplace) • Sonauli Border • Gorakhpur",
    duration: "4 Days / 3 Nights",
    daysValue: 4,
    originalPrice: "₹....",
    discountedPrice: "₹.....",
    priceValue: 14999,
    discount: ".. OFF",
    rating: 4.8,
    style: "Trekking & Adventure",
    inclusions: ['Hotel', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Cross Border"
  }
];

const BodhGayaTourPackages = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [filters, setFilters] = useState({
    region: [],
    budget: [],
    duration: [],
    style: []
  });

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
    if (text.includes('transfer') || text.includes('car')) return <Bus size={16} />;
    if (text.includes('hotel')) return <BedDouble size={16} />;
    if (text.includes('meal') || text.includes('breakfast')) return <Utensils size={16} />;
    if (text.includes('guide')) return <Camera size={16} />;
    return <Mountain size={16} />;
  };

  const whyVisit = [
    "Place where Lord Buddha attained enlightenment",
    "Home to the UNESCO-listed Mahabodhi Temple",
    "International center of Buddhist learning & meditation",
    "Peaceful atmosphere ideal for meditation retreats",
    "Perfect for family trips and pilgrimage tourism"
  ];

  const topAttractions = [
    "Mahabodhi Temple",
    "The Sacred Bodhi Tree",
    "Great Buddha Statue",
    "Thai, Japanese & Tibetan Monasteries",
    "Sujata Kuti & Niranjana River"
  ];

  const createSlug = (name) => {
    return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
  };

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen pb-16">
      
      {/* 1. FULL WIDTH BANNER CAROUSEL */}
      <div className="relative group w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-900">
        <div className="flex h-full w-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {bannerData.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative">
              <img src={banner.image} alt={banner.title} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-md tracking-tight uppercase">{banner.title}</h2>
                <p className="text-base md:text-xl font-medium text-gray-200 drop-shadow-md max-w-lg mb-6 italic leading-relaxed">"{banner.subtitle}"</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-bold py-3 px-8 rounded-full w-max transition-all shadow-lg uppercase">Explore Bodh Gaya</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-indigo-950 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"><ChevronLeft size={28} /></button>
        <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-indigo-950 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"><ChevronRight size={28} /></button>
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
              <button onClick={resetFilters} className="text-sm text-orange-500 font-semibold hover:underline outline-none">Reset All</button>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3 text-sm">Region</h3>
              <div className="space-y-2">
                {['Spiritual Link', 'Short Drive', 'Ancient Wisdom', 'State Capital', 'Mahaparinirvana', 'Lumbini Border'].map((r) => (
                  <label key={r} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" checked={filters.region.includes(r)} onChange={() => toggleFilter('region', r)} className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors text-sm">{r}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3 text-sm">Budget</h3>
              <div className="space-y-2">
                {['Below ₹5,000', '₹5,000 - ₹10,000', 'Above ₹10,000'].map((b) => (
                  <label key={b} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" checked={filters.budget.includes(b)} onChange={() => toggleFilter('budget', b)} className="w-4 h-4 text-orange-500 rounded" />
                    <span className="text-gray-600 group-hover:text-orange-500 text-sm font-medium">{b}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3 text-sm">Tour Style</h3>
              <div className="space-y-2">
                {['Leisure & Culture', 'Trekking & Adventure', 'Spiritual / Pilgrimage'].map((s) => (
                  <label key={s} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" checked={filters.style.includes(s)} onChange={() => toggleFilter('style', s)} className="w-4 h-4 text-orange-500 rounded" />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors text-sm">{s}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* 3. Package Grid Area */}
        <div className="w-full lg:w-3/4">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2 uppercase tracking-tight">Bodh Gaya Tour Packages</h1>
            <p className="text-gray-600 text-base max-w-3xl italic">Our Bodh Gaya Tour Packages offer a complete travel solution for Mahabodhi Temple darshan, Buddhist pilgrimage, local sightseeing, and nearby spiritual destinations like Rajgir, Nalanda, Varanasi, Kushinagar, and Nepal (Lumbini). With experienced drivers, clean vehicles, and trusted service since 1999, we ensure your Bodh Gaya journey is peaceful, safe, and spiritually fulfilling.</p>
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
                  <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase">{pkg.tag}</div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-extrabold text-indigo-950 leading-tight group-hover:text-orange-600 transition-colors uppercase">{pkg.title}</h3>
                    <div className="flex items-center bg-green-100 px-1.5 py-0.5 rounded text-green-700 text-xs font-bold shrink-0 mt-1">
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
                          <span className="text-[10px] font-semibold text-center leading-tight w-12 truncate uppercase">{inclusion}</span>
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

          {/* Why Visit Bodh Gaya & Top Attractions */}
          <div className="mt-16 grid lg:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center">
              <h2 className="text-2xl font-black text-indigo-950 mb-6 border-l-8 border-indigo-900 pl-6 uppercase tracking-tighter italic">Why Visit Bodh Gaya?</h2>
              <ul className="space-y-4">
                {whyVisit.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600 font-bold italic leading-relaxed">
                    <CheckCircle size={20} className="text-indigo-900 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-indigo-950 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 blur-[100px] opacity-20"></div>
              <h2 className="text-2xl font-black mb-6 border-l-8 border-orange-600 pl-6 uppercase tracking-tighter italic">Top Attractions</h2>
              <ul className="space-y-4">
                {topAttractions.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm opacity-90 font-bold italic leading-relaxed">
                    <Star size={20} className="text-orange-600 shrink-0 mt-0.5" fill="currentColor" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Call to Action */}
      <section className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-indigo-950 p-10 lg:p-16 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
          <Zap size={48} className="mx-auto text-orange-500 mb-6" />
          <h2 className="text-3xl lg:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none">Plan Your Sacred Journey</h2>
          <p className="text-indigo-200 text-lg mb-10 italic opacity-80 max-w-2xl mx-auto">"For bookings or inquiries, contact us 24/7! We ensure a serene and well-planned pilgrimage."</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="tel:+918576000084" className="bg-orange-500 text-white px-12 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:scale-105 transition-transform shadow-xl">
              Call: +91 8576000084
            </a>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-1 leading-none">Head Office</p>
              <p className="font-bold text-sm italic text-gray-300">Gorakhpur (U.P) - 273001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BodhGayaTourPackages;