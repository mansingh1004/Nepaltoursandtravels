import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Clock, Plane, BedDouble, Utensils, Camera, 
  Star, Filter, ChevronRight, ChevronLeft, Bus, Mountain,
  ShieldCheck, Zap, Globe, Award, Headphones, CheckCircle, ArrowUpRight 
} from 'lucide-react';

// 1. Banner Data
const bannerData = [
  { 
    id: 1, 
    title: "Explore the Last Shangri-La", 
    subtitle: "Discover ancient monasteries, vibrant festivals, and the untouched beauty of Bhutan.", 
    image: "https://nepaltoursandtravels.com/wp-content/uploads/2025/12/pexels-peng-lim-6377-910368.jpg" 
  },
  { 
    id: 2, 
    title: "Architectural Marvels", 
    subtitle: "Explore the majestic Punakha Dzong and the cliffside wonders of Paro.", 
    image: "https://nepaltoursandtravels.com/wp-content/uploads/2025/12/palace-2725141_640.jpg" 
  }
];

// 2. Bhutan Package Data
const packagesData = [
  {
    id: 1,
    title: "Paro Taktsang Experience",
    region: "Paro Region",
    image: "https://nepaltoursandtravels.com/wp-content/uploads/2025/12/pexels-peng-lim-6377-910368.jpg",
    destinations: "Tiger's Nest • Paro Valley • National Museum",
    duration: "4 Days / 3 Nights",
    daysValue: 4, 
    originalPrice: "₹....",
    discountedPrice: "₹.....",
    priceValue: 22500, 
    discount: ".. OFF",
    rating: 5.0,
    style: "Spiritual / Pilgrimage", 
    inclusions: ['Flight', 'Hotel', 'All Meals', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Iconic Monastery"
  },
  {
    id: 2,
    title: "Punakha Heritage Tour",
    region: "Punakha Region",
    image: "https://nepaltoursandtravels.com/wp-content/uploads/2025/12/palace-2725141_640.jpg",
    destinations: "Punakha Dzong • Suspension Bridge • Chimi Lhakhang",
    duration: "5 Days / 4 Nights",
    daysValue: 5,
    originalPrice: "₹....",
    discountedPrice: "₹......",
    priceValue: 26999,
    discount: ".. OFF",
    rating: 4.8,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer', 'Guide'],
    tag: "Architectural Marvel"
  },
  {
    id: 3,
    title: "Thimphu Capital Heart",
    region: "Thimphu Region",
    image: "https://nepaltoursandtravels.com/wp-content/uploads/2025/12/Thimphu.jpg",
    destinations: "Buddha Dordenma • Memorial Chorten • Tashichho Dzong",
    duration: "3 Days / 2 Nights",
    daysValue: 3,
    originalPrice: "₹.....",
    discountedPrice: "₹.....",
    priceValue: 14500,
    discount: ".. OFF",
    rating: 4.9,
    style: "Leisure & Culture",
    inclusions: ['Hotel', 'All Meals', 'Sightseeing', 'Transfer'],
    tag: "Capital Heart"
  },
  {
    id: 4,
    title: "Phobjikha Scenic Valley",
    region: "Phobjikha Region",
    image: "https://nepaltoursandtravels.com/wp-content/uploads/2025/12/phobjikha-valley-in-bhutan-4897677_640.jpg",
    destinations: "Gangtey Monastery • Black-Necked Crane Valley",
    duration: "10 Days / 9 Nights",
    daysValue: 10,
    originalPrice: "₹.....",
    discountedPrice: "₹.....",
    priceValue: 31000,
    discount: ".. OFF",
    rating: 4.9,
    style: "Wildlife Safari",
    inclusions: ['Flight', 'Hotel', 'All Meals', 'Sightseeing', 'Guide'],
    tag: "Scenic Nature"
  }
];

const BhutanTourPackages = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // State for Filters (Mirroring Nepal Logic)
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

  // Filtering Logic (Exact Mirror of Nepal)
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
    if (text.includes('hotel')) return <BedDouble size={16} />;
    if (text.includes('meal')) return <Utensils size={16} />;
    return <Camera size={16} />;
  };

  const highlights = [
    "Fast & reliable INR → BTN currency exchange",
    "Best rates compared to banks and airports in Bhutan",
    "100% safe, secure & fully transparent service",
    "Instant cash exchange with no hidden fees",
    "Verified & authorized exchange facility"
  ];

  const createSlug = (name) => {
    return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
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
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-bold py-3 px-8 rounded-full w-max shadow-lg">Explore Bhutan</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"><ChevronLeft size={28} /></button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all"><ChevronRight size={28} /></button>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 flex flex-col lg:flex-row gap-8">
        
        {/* Mobile Filter Toggle Button */}
        <button 
          className="lg:hidden flex items-center justify-center w-full bg-white border border-gray-200 py-3 rounded-xl shadow-sm text-indigo-950 font-bold mb-4"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <Filter size={20} className="mr-2 text-orange-500" />
          {showMobileFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Sidebar Filters (Desktop & Mobile Drawer logic) */}
        <aside className={`w-full lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <h2 className="text-lg font-extrabold text-indigo-950 flex items-center">
                <Filter size={18} className="mr-2 text-orange-500" /> Filters
              </h2>
              <button onClick={resetFilters} className="text-sm text-orange-500 font-semibold hover:underline">Reset All</button>
            </div>

            {/* Region Filter */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-3">Region in Bhutan</h3>
              <div className="space-y-2">
                {['Paro Region', 'Punakha Region', 'Thimphu Region', 'Phobjikha Region'].map((r) => (
                  <label key={r} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" checked={filters.region.includes(r)} onChange={() => toggleFilter('region', r)} className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500" />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors text-sm">{r}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget Filter */}
            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Budget (Per Person)</h3>
              <div className="space-y-2">
                {['Below ₹15,000', '₹15,000 - ₹25,000', '₹25,000 - ₹40,000', 'Above ₹40,000'].map((b) => (
                  <label key={b} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" checked={filters.budget.includes(b)} onChange={() => toggleFilter('budget', b)} className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500" />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors text-sm">{b}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div className="mb-6 border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Duration</h3>
              <div className="space-y-2">
                {['1 - 3 Days', '4 - 6 Days', '7 - 10 Days', '11+ Days'].map((d) => (
                  <label key={d} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" checked={filters.duration.includes(d)} onChange={() => toggleFilter('duration', d)} className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500" />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors text-sm">{d}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Style Filter */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-gray-800 mb-3">Tour Style</h3>
              <div className="space-y-2">
                {['Leisure & Culture', 'Trekking & Adventure', 'Wildlife Safari', 'Spiritual / Pilgrimage'].map((s) => (
                  <label key={s} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" checked={filters.style.includes(s)} onChange={() => toggleFilter('style', s)} className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500" />
                    <span className="text-gray-600 group-hover:text-orange-500 transition-colors text-sm">{s}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="bg-indigo-900 p-5 rounded-2xl text-white mt-8">
               <Zap size={20} className="text-orange-400 mb-2"/>
               <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Bonus Benefit</p>
               <p className="text-xs font-bold mt-1">Instant currency exchange available at all offices.</p>
            </div>
          </div>
        </aside>

        {/* Main Grid Area */}
        <div className="w-full lg:w-3/4">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-2">Bhutan Tour Packages</h1>
            <p className="text-gray-600 text-base max-w-3xl italic">Bhutan, the mystical kingdom nestled in the Himalayas, offers a perfect blend of culture, spirituality, and natural beauty. From ancient monasteries perched on cliffs to serene valleys and vibrant festivals, our Bhutan tours promise an unforgettable journey. Explore the land where tradition meets tranquility.</p>
          </div>

          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-lg md:text-xl font-extrabold text-indigo-950">Showing {filteredPackages.length} Packages</h2>
            <select className="border border-gray-300 text-gray-700 text-sm rounded-lg p-2.5 outline-none bg-white cursor-pointer font-medium shadow-sm">
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
                    <div className="absolute top-4 right-4 bg-indigo-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase">{pkg.region}</div>
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
                            <span className="text-[10px] font-semibold text-gray-500 truncate w-12 text-center">{inc}</span>
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
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <Filter size={24} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-indigo-950 mb-2">No Packages Found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters to find your Bhutan journey.</p>
              <button onClick={resetFilters} className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold">Clear All Filters</button>
            </div>
          )}
        </div>
      </div>

      {/* Highlights & CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-extrabold text-indigo-950 mb-6 uppercase tracking-tighter border-l-4 border-orange-500 pl-4">Why Choose Nepal Tour & Travels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              {highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-sm font-bold text-gray-600 italic">
                  <CheckCircle size={20} className="text-orange-500 shrink-0" /> {h}
                </li>
              ))}
            </ul>
            <div className="bg-indigo-50 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                <Award size={40} className="text-indigo-600 mb-2"/>
                <p className="font-black text-indigo-950 uppercase tracking-widest text-sm">Trusted Since 1999</p>
                <p className="text-xs text-gray-500 mt-1">100% Secure & Authorized Himalayan Gateway</p>
            </div>
          </div>
        </div>

        <section className="mt-20">
          <div className="bg-indigo-950 p-10 lg:p-16 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl">
             <h2 className="text-3xl lg:text-5xl font-black mb-6 uppercase tracking-tighter">Experience the Dragon Kingdom</h2>
             <p className="text-indigo-200 text-lg mb-10 italic font-medium opacity-80 max-w-2xl mx-auto">Contact us 24/7 for custom bookings and instant support!</p>
             <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="tel:+918576000084" className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase hover:scale-105 transition-transform shadow-xl">
                   Call: +91 8576000084
                </a>
                <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-1">Head Office</p>
                    <p className="font-bold text-sm italic text-gray-300">Gorakhpur (U.P) - 273001</p>
                </div>
             </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default BhutanTourPackages;