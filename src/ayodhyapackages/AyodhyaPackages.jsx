import React, { useState, useEffect } from 'react';
import RamMandir from "../images/Ram-Mandir-Ayodhya-Tour.jpg"
import SarayuGhats from "../images/sarayu-ghat.jpg"
import Rammandir from "../images/rammandir_0.jpg"
import Kashi from "../images/kashi-vishhwanath-temple-varanasi-india.jpg"
import Prayagraj from "../images/Triveni-Sangam.webp"
import Gorakhpur from "../images/Visit-Gorakhnath-Temple.jpg"
import Lucknow from "../images/luknow.jpg"
import Chitrakoot from "../images/Chitrakoot2.jpg"
import Nepal_Sonauli from "../images/GettyImages-1439040510.webp"
import { Link } from 'react-router-dom';
import { 
  MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
  Star, Filter, ChevronRight, ChevronLeft, Bus, Mountain,
  Zap, Calendar
} from 'lucide-react';

// 1. Updated Banner Carousel with 4 Images
const bannerData = [
  { 
    id: 1, 
    title: "Ayodhya: Spiritual Odyssey", 
    subtitle: "Experience the home of Shri Ram Janmabhoomi. A journey of faith and heritage.", 
    image: RamMandir 
  },
  { 
    id: 2, 
    title: "The Holy Sarayu Ghats", 
    subtitle: "Discover ancient temples and peaceful ghats in a serene spiritual environment.", 
    image: SarayuGhats
  },
  { 
    id: 3, 
    title: "Ram Janmabhoomi Mandir", 
    subtitle: "Witness the architectural marvel and divine presence of Prabhu Shri Ram.", 
    image: Rammandir 
  }
 
];

// 2. Package Data
const packagesData = [
  {
    id: 1,
    title: "Ayodhya → Kashi (Varanasi)",
    region: "Spiritual Circuit",
    image: Kashi,
    destinations: "Ram Janmabhoomi • Kashi Vishwanath • Sarnath",
    duration: "5 Days / 4 Nights",
    daysValue: 5, 
    originalPrice: "₹.....",
    discountedPrice: "₹.....",
    priceValue: 14999, 
    discount: ".. OFF",
    rating: 5.0,
    style: "Spiritual / Pilgrimage", 
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Most Popular"
  },
  {
    id: 2,
    title: "Ayodhya → Prayagraj",
    region: "Holy Sangam",
    image: Prayagraj,
    destinations: "Triveni Sangam • Hanuman Garhi • Kanak Bhawan",
    duration: "3 Days / 2 Nights",
    daysValue: 3,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 9500,
    discount: "... OFF",
    rating: 4.8,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Family Choice"
  },
  {
    id: 3,
    title: "Ayodhya → Gorakhpur",
    region: "Heritage Route",
    image: Gorakhpur,
    destinations: "Gorakhnath Temple • Ayodhya Mandir • Maghar",
    duration: "3 Days / 2 Night",
    daysValue: 2,
    originalPrice: "₹....",
    discountedPrice: "₹....",
    priceValue: 6499,
    discount: ".. OFF",
    rating: 4.7,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Short Trip"
  },
  {
    id: 4,
    title: "Ayodhya → Lucknow",
    region: "City Link",
    image: Lucknow,
    destinations: "Bara Imambara • Ram Mandir • Residency",
    duration: "3 Days / 2 Nights",
    daysValue: 3,
    originalPrice: "₹.....",
    discountedPrice: "₹....",
    priceValue: 8999,
    discount: ".. OFF",
    rating: 4.6,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Trending"
  },
  {
    id: 5,
    title: "Ayodhya → Chitrakoot",
    region: "Ramayana Path",
    image: Chitrakoot ,
    destinations: "Gupt Godavari • Ram Ghat • Janaki Kund",
    duration: "4 Days / 3 Nights",
    daysValue: 4,
    originalPrice: "₹....",
    discountedPrice: "₹.....",
    priceValue: 12500,
    discount: ".. OFF",
    rating: 4.9,
    style: "Spiritual / Pilgrimage",
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Spiritual Path"
  },
  {
    id: 6,
    title: "Ayodhya → Nepal (Sonauli)",
    region: "International Link",
    image: Nepal_Sonauli,
    destinations: "Ayodhya • Gorakhpur • Nepal Border",
    duration: "4 Days / 3 Nights",
    daysValue: 4,
    originalPrice: "₹.....",
    discountedPrice: "₹.....",
    priceValue: 11999,
    discount: ".. OFF",
    rating: 4.8,
    style: "Trekking & Adventure",
    inclusions: ['Hotel', 'Breakfast', 'Sightseeing', 'Transfer'],
    tag: "Border Tour"
  }
];

const AyodhyaTourPage = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 3. Exact State from Nepal Page
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

  // 4. Exact Filtering Logic from Nepal Page
  const filteredPackages = packagesData.filter(pkg => {
    if (filters.region.length > 0 && !filters.region.includes(pkg.region)) return false;
    if (filters.style.length > 0 && !filters.style.includes(pkg.style)) return false;
    
    if (filters.duration.length > 0) {
      const matchesDuration = filters.duration.some(range => {
        if (range === '1 - 3 Days') return pkg.daysValue <= 3;
        if (range === '4 - 6 Days') return pkg.daysValue >= 4 && pkg.daysValue <= 6;
        if (range === '7 - 10 Days') return pkg.daysValue >= 7 && pkg.daysValue <= 10;
        if (range === '11+ Days') return pkg.daysValue >= 11;
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
    if (text.includes('transfer')) return <Bus size={16} />;
    if (text.includes('hotel')) return <BedDouble size={16} />;
    if (text.includes('meal') || text.includes('breakfast')) return <Utensils size={16} />;
    return <Camera size={16} />;
  };


   const createSlug = (name) => {
    return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
  };
  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen pb-16">
      
      {/* 5. BANNER CAROUSEL (4 Images) */}
      <div className="relative group w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-900">
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerData.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative">
              <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-7xl mx-auto text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-md tracking-tight uppercase">{banner.title}</h2>
                <p className="text-base md:text-xl font-medium text-gray-200 drop-shadow-md max-w-lg mb-6">{banner.subtitle}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-bold py-3 px-8 rounded-full w-max shadow-lg">Explore Ayodhya</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"><ChevronLeft size={28} /></button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"><ChevronRight size={28} /></button>
      </div>

      {/* 6. MAIN CONTENT AREA (Same Responsive Behavior as Nepal) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle */}
        <button className="lg:hidden flex items-center justify-center w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm text-indigo-950 font-bold mb-4"
          onClick={() => setShowMobileFilters(!showMobileFilters)}>
          <Filter size={20} className="mr-2 text-orange-500" />
          {showMobileFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Sidebar Filters (Same UI/UX as Nepal) */}
        <aside className={`w-full lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h2 className="text-lg font-extrabold text-indigo-950 flex items-center"><Filter size={18} className="mr-2 text-orange-500" /> Filters</h2>
              <button onClick={resetFilters} className="text-sm text-orange-500 font-semibold hover:underline">Reset All</button>
            </div>

            {/* Region Filter */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3">Region</h3>
              {['Spiritual Circuit', 'Holy Sangam', 'Heritage Route', 'Ramayana Path', 'City Link', 'International Link'].map((r) => (
                <label key={r} className="flex items-center space-x-3 cursor-pointer mb-2 group">
                  <input type="checkbox" checked={filters.region.includes(r)} onChange={() => toggleFilter('region', r)} className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500" />
                  <span className="text-gray-600 group-hover:text-orange-500 text-sm transition-colors font-medium">{r}</span>
                </label>
              ))}
            </div>

            {/* Budget Filter */}
            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Budget (Per Person)</h3>
              {['Below ₹10,000', '₹10,000 - ₹15,000', 'Above ₹15,000'].map((b) => (
                <label key={b} className="flex items-center space-x-3 cursor-pointer mb-2 group">
                  <input type="checkbox" checked={filters.budget.includes(b)} onChange={() => toggleFilter('budget', b)} className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500" />
                  <span className="text-gray-600 group-hover:text-orange-500 text-sm transition-colors font-medium">{b}</span>
                </label>
              ))}
            </div>

            {/* Duration Filter */}
            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Duration</h3>
              {['1 - 3 Days', '4 - 6 Days', '7 - 10 Days', '11+ Days'].map((d) => (
                <label key={d} className="flex items-center space-x-3 cursor-pointer mb-2 group">
                  <input type="checkbox" checked={filters.duration.includes(d)} onChange={() => toggleFilter('duration', d)} className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500" />
                  <span className="text-gray-600 group-hover:text-orange-500 text-sm transition-colors font-medium">{d}</span>
                </label>
              ))}
            </div>

            {/* Style Filter */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Tour Style</h3>
              {['Leisure & Culture', 'Spiritual / Pilgrimage', 'Trekking & Adventure'].map((s) => (
                <label key={s} className="flex items-center space-x-3 cursor-pointer mb-2 group">
                  <input type="checkbox" checked={filters.style.includes(s)} onChange={() => toggleFilter('style', s)} className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500" />
                  <span className="text-gray-600 group-hover:text-orange-500 text-sm transition-colors font-medium">{s}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* 7. Package Grid (6 Cards) */}
        <div className="w-full lg:w-3/4">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2 uppercase tracking-tight">Ayodhya Tour Packages</h1>
            <p className="text-gray-600 text-base italic">Ayodhya is perfect for family trips and pilgrimage tourism, offering beautiful ghats on the Sarayu River and ancient temples in a peaceful environment.</p>
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
                  <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">{pkg.region}</div>
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

          {/* Highlights & Contact (Nepal Style) */}
          <section className="mt-16 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
              <Calendar className="mx-auto text-orange-500 mb-6" size={56}/>
              <h2 className="text-3xl lg:text-4xl font-black text-indigo-950 mb-4 uppercase">Ready for Darshan?</h2>
              <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">Contact us 24/7 for a peaceful, well-planned spiritual journey to Ayodhya and beyond.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="tel:+918576000084" className="w-full sm:w-auto bg-indigo-950 text-white px-10 py-4 rounded-2xl font-black uppercase text-sm hover:bg-orange-500 transition-all shadow-xl">
                  Call: +91 8576000084
                </a>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Head Office</p>
                  <p className="font-bold text-slate-700 italic">Gorakhpur (U.P) - 273001</p>
                </div>
              </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AyodhyaTourPage;