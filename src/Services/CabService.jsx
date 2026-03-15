import React, { useState, useEffect, useRef } from 'react';
import { 
  Car, MapPin, Calendar, Clock, ArrowRightLeft, 
  ShieldCheck, CheckCircle, Briefcase, 
  ChevronRight, Users, Navigation, Filter, Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import flightbanner from "../images/flightbanner.png"

// --- MOCK AIRPORT DATA ---
const availableAirports = [
  { code: 'DEL', city: 'New Delhi', name: 'Indira Gandhi International Airport', country: 'India' },
  { code: 'GOP', city: 'Gorakhpur', name: 'Mahayogi Gorakhnath Airport', country: 'India' },
  { code: 'PNQ', city: 'Pune', name: 'Pune International Airport', country: 'India' },
  { code: 'KTM', city: 'Kathmandu', name: 'Tribhuvan International Airport', country: 'Nepal' },
  { code: 'PKR', city: 'Pokhara', name: 'Pokhara International Airport', country: 'Nepal' },
  { code: 'BWA', city: 'Bhairahawa', name: 'Gautam Buddha Int. Airport (Lumbini)', country: 'Nepal' },
];

const CabPage = () => {
  const navigate = useNavigate();

  // Search Widget States
  const [tripType, setTripType] = useState('outstation-oneway');
  const [pickupCity, setPickupCity] = useState('');
  const [dropCity, setDropCity] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [returnDate, setReturnDate] = useState('');

  // Error State
  const [errorMessage, setErrorMessage] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortByPrice, setSortByPrice] = useState('default');

  const handleSwapCities = () => {
    const temp = pickupCity;
    setPickupCity(dropCity);
    setDropCity(temp);
  };

  const handleSearchCabs = () => {
    if (!pickupCity) {
      setErrorMessage("Please enter a pickup location.");
      return;
    }
    if (tripType !== 'rental' && !dropCity) {
      setErrorMessage("Please enter a drop location.");
      return;
    }
    if (!pickupDate || !pickupTime) {
      setErrorMessage("Please select pickup date and time.");
      return;
    }
    if (tripType === 'outstation-roundtrip' && !returnDate) {
      setErrorMessage("Please select a return date for round trips.");
      return;
    }

    setErrorMessage("");
    setIsSearching(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsSearching(false);
      navigate('/cab-results'); 
    }, 1500);
  };

  // EXTENDED MOCK DATA: Comprehensive Fleet including variants
  const initialFleetData = [
    // Standard
    { id: 1, type: "Hatchback", models: "WagonR, Swift", seats: 4, bags: 1, pricePerKm: "...", rating: 4.5, isAc: true, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, type: "Sedan", models: "Dzire, Etios", seats: 4, bags: 2, pricePerKm: "...", rating: 4.8, isAc: true, img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, type: "SUV", models: "Ertiga", seats: 6, bags: 3, pricePerKm: "...", rating: 4.6, isAc: true, img: "https://images.unsplash.com/photo-1563720225384-9c02604084f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    
    // Brands
    { id: 4, type: "Toyota", models: "Innova Crysta", seats: 7, bags: 4, pricePerKm: "...", rating: 4.9, isAc: true, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, type: "Toyota", models: "Fortuner", seats: 7, bags: 4, pricePerKm: "...", rating: 4.9, isAc: true, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    
    { id: 6, type: "Hyundai", models: "Creta", seats: 4, bags: 3, pricePerKm: "...", rating: 4.7, isAc: true, img: "https://images.unsplash.com/photo-1563720225384-9c02604084f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 7, type: "Hyundai", models: "Verna", seats: 4, bags: 2, pricePerKm:"...", rating: 4.8, isAc: true, img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    
    // Luxury Brands
    { id: 8, type: "BMW", models: "BMW 3 Series", seats: 4, bags: 2, pricePerKm: "...", rating: 5.0, isAc: true, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 9, type: "BMW", models: "BMW 5 Series", seats: 4, bags: 2, pricePerKm: "...", rating: 5.0, isAc: true, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 10, type: "BMW", models: "BMW X1 SUV", seats: 4, bags: 3, pricePerKm: "...", rating: 4.9, isAc: true, img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    
    { id: 11, type: "Audi", models: "Audi A6", seats: 4, bags: 2, pricePerKm: "...", rating: 4.9, isAc: true, img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 12, type: "Mercedes", models: "Mercedes E-Class", seats: 4, bags: 2, pricePerKm: "...", rating: 5.0, isAc: true, img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    
    // Group & Commuter Vehicles (Tempo Traveller)
    { id: 13, type: "Tempo Traveller", models: "12 Seater Force Traveller", seats: 12, bags: 8, pricePerKm: "...", rating: 4.6, isAc: true, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 14, type: "Tempo Traveller", models: "13 Seater Force Traveller", seats: 13, bags: 9, pricePerKm: "...", rating: 4.6, isAc: true, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 15, type: "Tempo Traveller", models: "17 Seater Force Traveller", seats: 17, bags: 12, pricePerKm: "...", rating: 4.7, isAc: true, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 16, type: "Tempo Traveller", models: "20 Seater Force Traveller", seats: 20, bags: 15, pricePerKm: "...", rating: 4.7, isAc: true, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 17, type: "Tempo Traveller", models: "26 Seater Force Traveller", seats: 26, bags: 20, pricePerKm: "...", rating: 4.5, isAc: true, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Force Urbania
    { id: 18, type: "Force Urbania", models: "10 Seater Luxury Urbania", seats: 10, bags: 8, pricePerKm: "...", rating: 4.9, isAc: true, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 19, type: "Force Urbania", models: "13 Seater Luxury Urbania", seats: 13, bags: 10, pricePerKm: "...", rating: 4.8, isAc: true, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 20, type: "Force Urbania", models: "17 Seater Luxury Urbania", seats: 17, bags: 14, pricePerKm: "...", rating: 4.9, isAc: true, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },

    // Bus Options
    { id: 21, type: "Bus", models: "35 Seater Volvo Bus (AC)", seats: 35, bags: 35, pricePerKm: "...", rating: 4.7, isAc: true, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 22, type: "Bus", models: "45 Seater Luxury Bus (AC)", seats: 45, bags: 45, pricePerKm: "...", rating: 4.6, isAc: true, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 23, type: "Bus", models: "45 Seater Standard Bus (Non-AC)", seats: 45, bags: 45, pricePerKm: "...", rating: 4.2, isAc: false, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  // Filtering Logic
  let displayedFleet = initialFleetData;
  if (selectedCategory !== 'All') {
    displayedFleet = displayedFleet.filter(cab => cab.type === selectedCategory);
  }

  // Sorting Logic
  if (sortByPrice === 'lowToHigh') {
    displayedFleet.sort((a, b) => a.pricePerKm - b.pricePerKm);
  } else if (sortByPrice === 'highToLow') {
    displayedFleet.sort((a, b) => b.pricePerKm - a.pricePerKm);
  }

  // Array for Filter Buttons
  const filterCategories = [
    'All', 'Hatchback', 'Sedan', 'SUV', 'Toyota', 'Hyundai', 
    'BMW', 'Audi', 'Mercedes', 'Tempo Traveller', 'Force Urbania', 'Bus'
  ];

  return (
    <div className="font-sans bg-[#f8fafd] min-h-screen pb-20 relative overflow-x-hidden">

      {/* --- SEARCHING LOADER OVERLAY --- */}
      {isSearching && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-md z-[100] flex flex-col items-center justify-center text-gray-900 px-4 text-center transition-all duration-300">
          <div className="relative">
            {/* <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full animate-pulse"></div> */}
            <Car size={64} className="animate-bounce text-blue-600 mb-6 relative z-10" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">Finding Your Perfect Ride...</h2>
          <p className="text-base md:text-lg text-gray-500 font-medium">Connecting with top-rated drivers nearby.</p>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <div className="relative z-40 min-h-[55vh] md:min-h-[70vh] flex flex-col justify-center pt-16 md:pt-20 pb-20 overflow-visible w-full">
        <div className="absolute inset-0 z-0">
          <img 
            src={
            // {carbanner}
            "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            }
            alt="Cab Banner" 
            className="w-full h-full object-cover object-center"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-gray-900/60 to-[#f8fafd]"></div> */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center text-white mb-10 mt-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tight drop-shadow-2xl leading-tight">Your Journey, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200">Your Way</span></h1>
          <p className="text-base md:text-xl font-medium text-gray-300 drop-shadow-md max-w-2xl mx-auto">Intercity travel, airport drops, and luxury rentals made incredibly easy.</p>
        </div>

        {/* --- CAB BOOKING WIDGET (GLASSMORPHISM) --- */}
        <div className="relative z-50 max-w-[1200px] mx-auto w-full px-4">
          <div className="bg-black/30 backdrop-blur-xl shadow-2xl p-4 md:p-6 rounded-2xl border border-white/20 w-full">
            
            {/* Error Message */}
            {errorMessage && (
              <div className="mb-5 bg-red-500/20 text-red-200 px-4 py-2.5 rounded-lg text-sm font-bold border border-red-500/30 flex items-center animate-pulse shadow-sm">
                 <ShieldCheck size={16} className="mr-2" /> {errorMessage}
              </div>
            )}

            {/* Segmented Trip Type Toggle */}
            <div className="flex justify-center md:justify-start mb-5">
              <div className="inline-flex bg-black/40 p-1 rounded-full border border-white/10 shadow-inner overflow-x-auto hide-scrollbar max-w-full">
                {[
                  { id: 'outstation-oneway', label: 'One-Way' },
                  { id: 'outstation-roundtrip', label: 'Round-Trip' },
                  { id: 'airport', label: 'Airport' },
                  { id: 'rental', label: 'Rentals' }
                ].map((type) => (
                  <button 
                    key={type.id} 
                    onClick={() => {
                      setTripType(type.id);
                      setReturnDate("");
                      if(type.id === 'rental') setDropCity(""); 
                    }}
                    className={`px-5 py-2 rounded-full text-[13px] md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${tripType === type.id ? 'bg-blue-600 text-white shadow-md' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Search Row (Compact & Transparent) */}
            <div className="flex flex-col lg:flex-row items-stretch border border-white/20 rounded-xl lg:rounded-2xl overflow-visible relative bg-white/10 backdrop-blur-md w-full transition-all duration-300">
              
              {/* --- FROM & TO WRAPPER (Fixes Swap Icon Shifting) --- */}
              <div className="flex flex-col lg:flex-row flex-1 w-full relative">
                
                {/* FROM FIELD */}
                <div className="w-full lg:flex-1 p-2.5 md:p-3 lg:px-5 border-b lg:border-b-0 lg:border-r border-white/20 relative hover:bg-white/10 transition-colors group cursor-pointer rounded-t-xl lg:rounded-l-2xl lg:rounded-tr-none">
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest flex items-center mb-0.5"><MapPin size={12} className="mr-1 text-blue-300"/> Pickup</p>
                  <input 
                    type="text" 
                    value={pickupCity} 
                    onChange={(e) => setPickupCity(e.target.value)}
                    className="w-full outline-none text-sm md:text-base font-bold text-white bg-transparent placeholder-white/50" 
                    placeholder="Enter City or Address"
                  />
                </div>

                {/* FIXED SWAP ICON - Anchored to the exact center of From & To */}
                {tripType !== 'rental' && (
                  <div 
                    className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-9 h-9 lg:w-10 lg:h-10 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all cursor-pointer shadow-lg" 
                    onClick={handleSwapCities}
                  >
                    <ArrowRightLeft className="w-4 h-4 lg:w-[18px] lg:h-[18px] rotate-90 lg:rotate-0" strokeWidth={2.5} />
                  </div>
                )}

                {/* TO FIELD */}
                <div className={`w-full lg:flex-1 p-2.5 md:p-3 lg:px-5 border-b lg:border-b-0 lg:border-r border-white/20 relative hover:bg-white/10 transition-colors cursor-pointer lg:pl-10 ${tripType === 'rental' ? 'bg-black/20 opacity-50 cursor-not-allowed' : ''}`}>
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest flex items-center mb-0.5"><Navigation size={12} className="mr-1 text-green-300"/> Drop</p>
                  <input 
                    type="text" 
                    value={dropCity} 
                    onChange={(e) => setDropCity(e.target.value)}
                    disabled={tripType === 'rental'}
                    className="w-full outline-none text-sm md:text-base font-bold text-white bg-transparent placeholder-white/50 disabled:cursor-not-allowed" 
                    placeholder={tripType === 'rental' ? "N/A for Rentals" : "Enter City or Address"}
                  />
                </div>

              </div>

              {/* DATE & TIME DATES */}
              <div className="w-full lg:w-[280px] flex items-stretch border-b lg:border-b-0 lg:border-r border-white/20">
                <div className="flex-1 p-2.5 md:p-3 lg:px-4 hover:bg-white/10 transition-colors cursor-pointer relative flex flex-col justify-center">
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest flex items-center mb-0.5"><Calendar size={12} className="mr-1 text-orange-300"/> Date</p>
                  <input 
                    type="date" 
                    value={pickupDate} 
                    onChange={(e) => setPickupDate(e.target.value)} 
                    className="bg-transparent outline-none w-full text-sm font-bold text-white cursor-pointer [color-scheme:dark]" 
                    min={new Date().toISOString().split('T')[0]} 
                  />
                </div>
                <div className="w-[1px] bg-white/20 flex-shrink-0"></div>
                <div className="flex-1 p-2.5 md:p-3 lg:px-4 hover:bg-white/10 transition-colors cursor-pointer relative flex flex-col justify-center">
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest flex items-center mb-0.5"><Clock size={12} className="mr-1 text-purple-300"/> Time</p>
                  <input 
                    type="time" 
                    value={pickupTime} 
                    onChange={(e) => setPickupTime(e.target.value)} 
                    className="bg-transparent outline-none w-full text-sm font-bold text-white cursor-pointer [color-scheme:dark]" 
                  />
                </div>
              </div>

              {/* RETURN DATE (Only for Round Trip) */}
              {tripType === 'outstation-roundtrip' && (
                <div className="w-full lg:w-[130px] p-2.5 md:p-3 lg:px-4 hover:bg-white/10 transition-colors cursor-pointer border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col justify-center">
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest flex items-center mb-0.5"><Calendar size={12} className="mr-1 text-red-300"/> Return</p>
                  <input 
                    type="date" 
                    value={returnDate} 
                    onChange={(e) => setReturnDate(e.target.value)} 
                    className="bg-transparent outline-none w-full text-sm font-bold text-white cursor-pointer [color-scheme:dark]" 
                    min={pickupDate || new Date().toISOString().split('T')[0]} 
                  />
                </div>
              )}

              {/* SEARCH BUTTON */}
              <div className="w-full lg:w-auto h-auto lg:h-auto">
                <button 
                  onClick={handleSearchCabs}
                  className="w-full h-full min-h-[48px] lg:h-[68px] bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm lg:text-base rounded-b-xl lg:rounded-none lg:rounded-r-2xl transition-all duration-300 px-8 flex items-center justify-center uppercase tracking-widest"
                >
                  Search
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* --- LUXURY FLEET EXPLORER SECTION --- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-24 mb-16">
        
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b border-gray-200 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Premium Fleet</h2>
            <p className="text-gray-500 font-medium text-base mt-2">From economical hatchbacks to ultra-luxury rides and group coaches.</p>
          </div>

          <div className="flex flex-col items-end gap-4 w-full md:w-auto overflow-hidden">
            {/* Sort Dropdown */}
            <div className="relative flex items-center bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-sm hover:border-blue-300 transition-colors w-max ml-auto">
              <Filter size={16} className="text-blue-500 mr-2" />
              <select 
                value={sortByPrice} 
                onChange={(e) => setSortByPrice(e.target.value)}
                className="text-sm font-bold text-gray-700 outline-none bg-transparent cursor-pointer"
              >
                <option value="default">Sort by Price</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>

            {/* Scrollable Category Filter */}
            <div className="flex bg-white rounded-xl p-1.5 border border-gray-200 shadow-sm w-full md:max-w-xl lg:max-w-4xl overflow-x-auto hide-scrollbar">
              {filterCategories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex-shrink-0 ${selectedCategory === cat ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Fleet Grid (FULL IMAGE VIEW DESIGN) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayedFleet.length > 0 ? displayedFleet.map((cab) => (
            <div key={cab.id} className="bg-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)] hover:-translate-y-2 transition-all duration-500 group flex flex-col h-[400px] relative cursor-pointer">
              
              <div className="absolute inset-0 w-full h-full">
                <img src={cab.img} alt={cab.type} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div> */}
              </div>
              
              <div className="relative z-10 flex justify-between items-start p-5">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black px-3 py-1.5 rounded-full flex items-center shadow-lg">
                  <Star size={12} className="text-yellow-400 mr-1 fill-yellow-400" /> {cab.rating}
                </div>
                
                {/* Dynamic AC/Non-AC Badge */}
                {cab.isAc ? (
                  <span className="bg-emerald-500/80 backdrop-blur text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-full shadow-lg">AC</span>
                ) : (
                  <span className="bg-gray-500/80 backdrop-blur text-white text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-full shadow-lg">Non-AC</span>
                )}
              </div>
              
              <div className="relative z-10 p-5 mt-auto flex flex-col">
                <h3 className="font-black text-2xl text-white mb-1 drop-shadow-md">{cab.models}</h3>
                <p className="text-sm text-gray-300 font-medium mb-4 drop-shadow-md">{cab.type}</p>
                
                <div className="flex items-center gap-3 text-xs text-white font-bold mb-5 bg-black/40 backdrop-blur-sm py-2 px-3 rounded-lg border border-white/10 w-max">
                  <span className="flex items-center"><Users size={14} className="mr-1.5 text-blue-400"/> {cab.seats} Seats</span>
                  <span className="w-[1px] h-3 bg-white/30 rounded-full"></span>
                  <span className="flex items-center"><Briefcase size={14} className="mr-1.5 text-orange-400"/> {cab.bags} Bags</span>
                </div>
                
                <div className="flex items-end justify-between border-t border-white/20 pt-4">
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-0.5">Est. Fare</p>
                    <p className="text-xl font-black text-white leading-none">₹{cab.pricePerKm}<span className="text-xs text-gray-400 font-medium">/km</span></p>
                  </div>
                  <button className="bg-white text-gray-900 hover:bg-blue-600 hover:text-white text-xs font-black py-2.5 px-5 rounded-lg transition-colors flex items-center shadow-lg">
                    Book Now <ChevronRight size={14} className="ml-1"/>
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-16 text-center text-gray-500 font-medium bg-white rounded-3xl border border-gray-100 shadow-sm">
              <Car size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-lg">No vehicles found in this category.</p>
              <button onClick={() => setSelectedCategory('All')} className="mt-4 text-blue-600 font-bold hover:underline">Clear Filters</button>
            </div>
          )}
        </div>
      </div>

      {/* --- WHY BOOK CABS WITH US --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-20">
        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-3xl p-8 md:p-12 shadow-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-center w-full overflow-hidden relative border border-blue-800">
          
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500 rounded-full blur-[100px] opacity-30 translate-y-1/3 -translate-x-1/3"></div>

          <div className="flex flex-col items-center relative z-10 group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/20 backdrop-blur-md group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
              <CheckCircle size={32} />
            </div>
            <h3 className="font-black text-white text-xl mb-3">Verified Drivers</h3>
            <p className="text-sm text-blue-200 font-medium leading-relaxed">Expert, background-verified drivers with excellent local route knowledge.</p>
          </div>

          <div className="flex flex-col items-center relative z-10 group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/20 backdrop-blur-md group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-black text-white text-xl mb-3">Transparent Billing</h3>
            <p className="text-sm text-blue-200 font-medium leading-relaxed">Absolutely no hidden charges. You pay exactly what you see during booking.</p>
          </div>

          <div className="flex flex-col items-center sm:col-span-2 md:col-span-1 relative z-10 group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/20 backdrop-blur-md group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
              <Car size={32} />
            </div>
            <h3 className="font-black text-white text-xl mb-3">Clean & Sanitized</h3>
            <p className="text-sm text-blue-200 font-medium leading-relaxed">Premium, well-maintained AC cars deep-cleaned before every single trip.</p>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        input[type="date"]::-webkit-calendar-picker-indicator,
        input[type="time"]::-webkit-calendar-picker-indicator {
            opacity: 0;
            cursor: pointer;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
      `}</style>
    </div>
  );
};

export default CabPage;