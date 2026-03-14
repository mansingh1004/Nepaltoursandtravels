import React, { useState, useEffect, useRef } from 'react';
import { 
  PlaneTakeoff, PlaneLanding, Calendar, Users, 
  ArrowRightLeft, Percent, ShieldCheck, Clock, 
  Headset, ChevronRight, Loader2, MapPin, Plus, Minus
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

const FlightPage = () => {
  const navigate = useNavigate();

  // State Management for Search Widget
  const [tripType, setTripType] = useState('oneway');
  const [fareType, setFareType] = useState('regular');

  // Selected Airport States (Empty by default)
  const [fromAirport, setFromAirport] = useState(null); 
  const [toAirport, setToAirport] = useState(null); 

  // Search Input States (Empty by default)
  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  
  // Date States
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Dropdown Visibility States
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);
  const [showTravellerDropdown, setShowTravellerDropdown] = useState(false);

  // Error State for Validation
  const [errorMessage, setErrorMessage] = useState("");

  // Loading State
  const [isSearching, setIsSearching] = useState(false);

  // Traveller & Class States
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("Economy");

  const totalTravellers = adults + children + infants;

  // Click Outside to Close Dropdowns (Refs)
  const fromRef = useRef(null);
  const toRef = useRef(null);
  const travellerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fromRef.current && !fromRef.current.contains(event.target)) setShowFromList(false);
      if (toRef.current && !toRef.current.contains(event.target)) setShowToList(false);
      if (travellerRef.current && !travellerRef.current.contains(event.target)) setShowTravellerDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter Logic for Dropdowns
  const filteredFromAirports = availableAirports.filter(a => 
    a.city.toLowerCase().includes(fromQuery.toLowerCase()) || 
    a.code.toLowerCase().includes(fromQuery.toLowerCase())
  );

  const filteredToAirports = availableAirports.filter(a => 
    a.city.toLowerCase().includes(toQuery.toLowerCase()) || 
    a.code.toLowerCase().includes(toQuery.toLowerCase())
  );

  // Swap From & To Cities
  const handleSwapCities = () => {
    const tempAirport = fromAirport;
    const tempQuery = fromQuery;
    
    setFromAirport(toAirport);
    setFromQuery(toQuery);
    
    setToAirport(tempAirport);
    setToQuery(tempQuery);
  };

  // Search Submit Handler (WITH VALIDATION)
  const handleSearchFlights = () => {
    // Validation Checks
    if (!fromAirport) {
      setErrorMessage("Please select an origin city.");
      return;
    }
    if (!toAirport) {
      setErrorMessage("Please select a destination city.");
      return;
    }
    if (fromAirport.code === toAirport.code) {
      setErrorMessage("Origin and destination cannot be the same.");
      return;
    }
    if (!departureDate) {
      setErrorMessage("Please select a departure date.");
      return;
    }
    if (tripType === 'roundtrip' && !returnDate) {
      setErrorMessage("Please select a return date for round trip.");
      return;
    }

    setErrorMessage(""); // Clear error if all good
    setIsSearching(true);
    
    // Fake API Delay for Premium Feel
    setTimeout(() => {
      setIsSearching(false);
      const searchUrl = `/flight-results?from=${fromAirport.code}&to=${toAirport.code}&type=${tripType}&adults=${adults}&class=${travelClass}`;
      navigate(searchUrl); 
    }, 2000);
  };

  // Mock Data: Offers & Routes
  const offers = [
    { id: 1, title: "Up to 15% Off on India-Nepal Flights", code: "NEPAL15", expire: "Valid till 31st Mar", bg: "bg-blue-50 border-blue-200 text-blue-800" },
    { id: 2, title: "Flat ₹... Off on Round Trips", code: "RETURN...", expire: "Valid till 15th Apr", bg: "bg-green-50 border-green-200 text-green-800" },
    { id: 3, title: "10% Cashback with HDFC Cards", code: "HDFCFLY", expire: "Valid till 10th Apr", bg: "bg-orange-50 border-orange-200 text-orange-800" },
  ];

  const popularRoutes = [
    { id: 1, route: "New Delhi to Kathmandu", price: "₹...", img: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, route: "Gorakhpur to Kathmandu", price: "₹...", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, route: "Pune to Pokhara", price:"₹...", img: "https://images.unsplash.com/photo-1522206090980-4c8f52554783?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, route: "New Delhi to Lumbini", price: "₹...", img: "https://images.unsplash.com/photo-1571295744883-9b8830182606?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    // FIX: Added overflow-x-hidden to prevent horizontal scrolling
    <div className="font-sans bg-gray-50 min-h-screen pb-20 relative overflow-x-hidden">

      {/* --- SEARCHING LOADER OVERLAY --- */}
      {isSearching && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex flex-col items-center justify-center text-white px-4 text-center">
          <PlaneTakeoff size={60} className="animate-bounce text-orange-500 mb-4" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Searching Best Flights...</h2>
          <p className="text-base md:text-lg text-gray-300">From <span className="text-white font-bold">{fromAirport?.city}</span> to <span className="text-white font-bold">{toAirport?.city}</span></p>
          <Loader2 size={30} className="animate-spin mt-6 text-orange-400" />
        </div>
      )}

      {/* --- HERO SECTION WITH TALL IMAGE & OVERLAPPING SEARCH WIDGET --- */}
      <div className="relative z-40 min-h-[50vh] md:min-h-[75vh] flex flex-col justify-center pt-16 md:pt-20 pb-16 overflow-visible w-full">
        
        <div className="absolute inset-0 z-0">
          <img 
            src={flightbanner} 
            alt="Flight Banner" 
            className="w-full h-full object-cover object-top"
          />

        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center text-white mb-8 mt-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-3 drop-shadow-lg">Book Flight Tickets</h1>
          <p className="text-base md:text-xl font-medium text-gray-100 drop-shadow-md">Exclusive fares and seamless booking experience.</p>
        </div>

        {/* --- BOOKING SYSTEM WIDGET --- */}
        <div className="relative z-50 w-full max-w-[1200px] mx-auto px-2 md:px-4">
          <div className="bg-white shadow-2xl p-4 md:p-6 rounded-xl md:border border-gray-200 w-full">
            
            {/* Error Message */}
            {errorMessage && (
              <div className="mb-4 bg-red-50 text-red-600 px-4 py-2 rounded text-sm font-bold border border-red-200">
                {errorMessage}
              </div>
            )}

            {/* Trip Type Radio Buttons */}
            <div className="flex items-center space-x-4 md:space-x-6 mb-4">
              <label className={`flex items-center cursor-pointer px-3 md:px-4 py-1.5 rounded-full transition-colors ${tripType === 'roundtrip' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
                <input 
                  type="radio" 
                  name="triptype" 
                  checked={tripType === 'roundtrip'} 
                  onChange={() => setTripType('roundtrip')} 
                  className="w-4 h-4 accent-blue-600 cursor-pointer" 
                />
                <span className="ml-2 text-sm font-medium text-gray-700">Round Trip</span>
              </label>
              
              <label className={`flex items-center cursor-pointer px-3 md:px-4 py-1.5 rounded-full transition-colors ${tripType === 'oneway' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
                <input 
                  type="radio" 
                  name="triptype" 
                  checked={tripType === 'oneway'} 
                  onChange={() => {
                    setTripType('oneway');
                    setReturnDate(""); 
                  }} 
                  className="w-4 h-4 accent-blue-600 cursor-pointer" 
                />
                <span className="ml-2 text-sm font-medium text-gray-700">One way</span>
              </label>
            </div>

            {/* Main Search Row */}
            <div className="flex flex-col lg:flex-row items-center border border-gray-300 rounded-md overflow-visible relative bg-white w-full">
              
              {/* FROM FIELD */}
              <div ref={fromRef} className="w-full lg:flex-1 p-3 md:p-4 border-b lg:border-b-0 lg:border-r border-gray-300 relative hover:bg-gray-50 cursor-pointer">
                <input 
                  type="text" 
                  value={fromQuery} 
                  onChange={(e) => { setFromQuery(e.target.value); setShowFromList(true); setFromAirport(null); }}
                  onFocus={() => setShowFromList(true)}
                  className="w-full outline-none text-sm md:text-base font-medium text-gray-800 bg-transparent placeholder-gray-500" 
                  placeholder="From: City or Airport Code"
                />
                
                {/* FIX: w-full in mobile, specific width in desktop */}
                {showFromList && fromQuery.length > 0 && (
                  <div className="absolute top-[105%] left-0 w-full lg:w-[350px] bg-white border border-gray-200 shadow-xl rounded-b-md z-[100] max-h-60 overflow-y-auto">
                    {filteredFromAirports.length > 0 ? filteredFromAirports.map((airport) => (
                      <div 
                        key={airport.code} 
                        onMouseDown={() => {
                          setFromAirport(airport);
                          setFromQuery(`${airport.city} (${airport.code})`);
                          setShowFromList(false);
                        }}
                        className="p-3 border-b border-gray-100 hover:bg-blue-50 cursor-pointer flex justify-between items-center"
                      >
                        <div>
                          <div className="flex items-center text-gray-800 font-bold text-sm"><MapPin size={14} className="mr-1 text-gray-400"/> {airport.city}, {airport.country}</div>
                          <div className="text-xs text-gray-500 ml-5">{airport.name}</div>
                        </div>
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{airport.code}</span>
                      </div>
                    )) : <div className="p-3 text-sm text-gray-500 text-center">No airports found</div>}
                  </div>
                )}
              </div>

              {/* SWAP ICON (Center overlay for Desktop) */}
              <div 
                className="hidden lg:flex absolute left-[15%] xl:left-[21%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-8 h-8 bg-white border border-gray-300 rounded-full items-center justify-center text-blue-500 hover:bg-gray-50 cursor-pointer shadow-sm" 
                onClick={handleSwapCities}
              >
                <ArrowRightLeft size={16} strokeWidth={2} />
              </div>
              
              {/* Swap Mobile Icon */}
              <div 
                className="lg:hidden z-10 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center text-blue-500 hover:bg-gray-50 cursor-pointer shadow-sm -my-4 relative bg-white" 
                onClick={handleSwapCities}
              >
                <ArrowRightLeft size={16} strokeWidth={2} className="rotate-90" />
              </div>

              {/* TO FIELD */}
              <div ref={toRef} className="w-full lg:flex-1 p-3 md:p-4 border-b lg:border-b-0 lg:border-r border-gray-300 relative hover:bg-gray-50 cursor-pointer lg:pl-8">
                <input 
                  type="text" 
                  value={toQuery} 
                  onChange={(e) => { setToQuery(e.target.value); setShowToList(true); setToAirport(null); }}
                  onFocus={() => setShowToList(true)}
                  className="w-full outline-none text-sm md:text-base font-medium text-gray-800 bg-transparent placeholder-gray-500" 
                  placeholder="To: City or Airport Code"
                />

                {/* FIX: w-full in mobile, specific width in desktop */}
                {showToList && toQuery.length > 0 && (
                  <div className="absolute top-[105%] left-0 w-full lg:w-[350px] bg-white border border-gray-200 shadow-xl rounded-b-md z-[100] max-h-60 overflow-y-auto">
                    {filteredToAirports.length > 0 ? filteredToAirports.map((airport) => (
                      <div 
                        key={airport.code} 
                        onMouseDown={() => {
                          setToAirport(airport);
                          setToQuery(`${airport.city} (${airport.code})`);
                          setShowToList(false);
                        }}
                        className="p-3 border-b border-gray-100 hover:bg-blue-50 cursor-pointer flex justify-between items-center"
                      >
                        <div>
                          <div className="flex items-center text-gray-800 font-bold text-sm"><MapPin size={14} className="mr-1 text-gray-400"/> {airport.city}, {airport.country}</div>
                          <div className="text-xs text-gray-500 ml-5">{airport.name}</div>
                        </div>
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{airport.code}</span>
                      </div>
                    )) : <div className="p-3 text-sm text-gray-500 text-center">No airports found</div>}
                  </div>
                )}
              </div>

              {/* DEPARTURE & RETURN DATES (Combined Block) */}
              <div className="w-full lg:w-[280px] flex items-center border-b lg:border-b-0 lg:border-r border-gray-300">
                
                {/* Depart On */}
                <div className="flex-1 p-3 md:p-4 hover:bg-gray-50 cursor-pointer relative h-full flex items-center justify-between">
                  <div className="flex items-center w-full">
                    <Calendar size={16} className="text-gray-400 mr-2 flex-shrink-0"/>
                    <div className="w-full relative">
                      {!departureDate && (
                        <span className="absolute inset-0 flex items-center text-gray-500 text-sm pointer-events-none">
                          Depart On
                        </span>
                      )}
                      <input 
                        type="date" 
                        value={departureDate} 
                        onChange={(e) => setDepartureDate(e.target.value)} 
                        className={`bg-transparent outline-none w-full text-sm font-medium text-gray-800 cursor-pointer ${!departureDate ? 'text-transparent' : ''}`} 
                        min={new Date().toISOString().split('T')[0]} 
                      />
                    </div>
                  </div>
                </div>

                <div className="h-6 w-[1px] bg-gray-300 flex-shrink-0"></div>

                {/* Return On */}
                <div 
                  className={`flex-1 p-3 md:p-4 cursor-pointer relative h-full flex items-center justify-between transition-colors ${tripType === 'oneway' ? 'bg-gray-50 opacity-60' : 'hover:bg-gray-50'}`}
                  onClick={() => { if(tripType === 'oneway') setTripType('roundtrip'); }}
                >
                  <div className="flex items-center w-full">
                    {tripType === 'roundtrip' && <Calendar size={16} className="text-gray-400 mr-2 flex-shrink-0"/>}
                    
                    <div className="w-full relative">
                      {(!returnDate || tripType === 'oneway') && (
                        <span className="absolute inset-0 flex items-center text-gray-500 text-sm pointer-events-none">
                          Return on
                        </span>
                      )}
                      <input 
                        type="date" 
                        value={returnDate} 
                        onChange={(e) => setReturnDate(e.target.value)} 
                        disabled={tripType === 'oneway'}
                        className={`bg-transparent outline-none w-full text-sm font-medium text-gray-800 cursor-pointer ${(!returnDate || tripType === 'oneway') ? 'text-transparent' : ''} ${tripType === 'oneway' ? 'cursor-not-allowed' : ''}`} 
                        min={departureDate || new Date().toISOString().split('T')[0]} 
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* TRAVELLERS & CLASS */}
              <div 
                ref={travellerRef} 
                className="w-full lg:w-[240px] p-3 md:p-4 hover:bg-gray-50 cursor-pointer relative flex items-center justify-between border-b lg:border-b-0"
                onClick={() => setShowTravellerDropdown(!showTravellerDropdown)}
              >
                <div className="flex items-center text-gray-800 w-full overflow-hidden">
                  <Users size={16} className="mr-2 text-gray-400 flex-shrink-0"/>
                  <span className="text-sm font-medium truncate">{totalTravellers} {totalTravellers > 1 ? 'Travellers' : 'Adult'}, {travelClass}</span>
                </div>
                <ChevronRight size={16} className="text-gray-400 transform rotate-90 flex-shrink-0 ml-1"/>

                {/* Traveller Dropdown */}
                {/* FIX: right-0 changed to left-0 in mobile so it doesn't cross screen width */}
                {showTravellerDropdown && (
                  <div className="absolute top-[105%] left-0 lg:left-auto lg:right-0 w-full sm:w-[300px] bg-white border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-md z-[100] p-4" onClick={(e) => e.stopPropagation()}>
                    
                    <h4 className="font-bold text-gray-800 mb-4 text-sm">Travellers</h4>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div><p className="font-medium text-sm text-gray-800">Adults</p><p className="text-xs text-gray-500">&gt; 12 yrs</p></div>
                      <div className="flex items-center space-x-3">
                        <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"><Minus size={14}/></button>
                        <span className="font-bold w-4 text-center text-sm">{adults}</span>
                        <button onClick={() => setAdults(Math.min(9, adults + 1))} className="w-7 h-7 rounded-full border border-blue-500 text-blue-600 flex items-center justify-center hover:bg-blue-50"><Plus size={14}/></button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div><p className="font-medium text-sm text-gray-800">Children</p><p className="text-xs text-gray-500">2 - 12 yrs</p></div>
                      <div className="flex items-center space-x-3">
                        <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"><Minus size={14}/></button>
                        <span className="font-bold w-4 text-center text-sm">{children}</span>
                        <button onClick={() => setChildren(Math.min(9, children + 1))} className="w-7 h-7 rounded-full border border-blue-500 text-blue-600 flex items-center justify-center hover:bg-blue-50"><Plus size={14}/></button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div><p className="font-medium text-sm text-gray-800">Infants</p><p className="text-xs text-gray-500">&lt; 2 yrs</p></div>
                      <div className="flex items-center space-x-3">
                        <button onClick={() => setInfants(Math.max(0, infants - 1))} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"><Minus size={14}/></button>
                        <span className="font-bold w-4 text-center text-sm">{infants}</span>
                        <button onClick={() => setInfants(Math.min(adults, infants + 1))} className="w-7 h-7 rounded-full border border-blue-500 text-blue-600 flex items-center justify-center hover:bg-blue-50"><Plus size={14}/></button>
                      </div>
                    </div>

                    <hr className="mb-4" />
                    <h4 className="font-bold text-gray-800 mb-3 text-sm">Travel Class</h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {['Economy', 'Premium Economy', 'Business', 'First Class'].map((cls) => (
                        <label key={cls} className={`text-xs p-2 rounded border cursor-pointer text-center transition-colors ${travelClass === cls ? 'bg-blue-50 border-blue-500 text-blue-700 font-bold' : 'border-gray-200 hover:bg-gray-50'}`}>
                          <input type="radio" className="hidden" checked={travelClass === cls} onChange={() => setTravelClass(cls)} />
                          {cls}
                        </label>
                      ))}
                    </div>

                    <button onClick={() => setShowTravellerDropdown(false)} className="w-full bg-[#d62828] hover:bg-red-700 text-white font-bold py-2 rounded">Apply</button>
                  </div>
                )}
              </div>

              {/* SEARCH BUTTON (RED) */}
              <div className="w-full lg:w-auto h-full min-h-[50px] lg:min-h-full">
                <button 
                  onClick={handleSearchFlights}
                  className="w-full h-full min-h-[50px] lg:min-h-[56px] bg-[#d62828] hover:bg-red-700 text-white font-bold text-base lg:rounded-r-md transition-colors p-3 lg:p-0 lg:px-8"
                >
                  Search
                </button>
              </div>

            </div>

            {/* Special Fare Types (Bottom Row) */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-4 overflow-x-auto hide-scrollbar pb-2">
              <span className="text-xs font-bold text-gray-800 mr-2 whitespace-nowrap">Select Fare Type:</span>
              {['Regular', 'Armed Forces', 'Student', 'Senior Citizen'].map((type) => (
                <label key={type} className={`px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium cursor-pointer border transition-all whitespace-nowrap ${fareType === type.toLowerCase() ? 'bg-blue-50 border-blue-400 text-blue-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                  <input type="radio" className="hidden" checked={fareType === type.toLowerCase()} onChange={() => setFareType(type.toLowerCase())} />
                  {type}
                </label>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* --- 3. OFFERS SECTION --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 flex items-center">
            <Percent className="mr-2 text-red-600" size={24} /> Trending Offers
          </h2>
          <a href="#" className="text-blue-600 font-bold text-sm hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className={`border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow ${offer.bg} flex flex-col justify-between w-full`}>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Flight Offer</p>
                <h3 className="font-extrabold text-base md:text-lg mb-4 leading-tight">{offer.title}</h3>
              </div>
              <div className="flex items-center justify-between border-t border-black/10 pt-4 mt-2">
                <div>
                  <p className="text-[10px] font-medium opacity-70 mb-0.5">USE CODE</p>
                  <p className="font-black text-sm uppercase">{offer.code}</p>
                </div>
                <p className="text-xs font-bold opacity-80">{offer.expire}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 4. POPULAR ROUTES SECTION --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6">Popular Flight Routes to Nepal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {popularRoutes.map((flight) => (
            <div key={flight.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all group cursor-pointer w-full">
              <div className="h-32 overflow-hidden relative">
                <img src={flight.img} alt={flight.route} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <p className="absolute bottom-3 left-4 text-white font-bold text-sm">{flight.route}</p>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5">Starts From</p>
                  <p className="text-lg font-black text-gray-900">{flight.price}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ChevronRight size={16} strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 5. WHY BOOK WITH US (SOTC Trust Markers) --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-10">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center w-full">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck size={28} className="md:w-8 md:h-8" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">100% Secure Payments</h3>
            <p className="text-sm text-gray-500">Your payment details are completely safe and encrypted.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
              <Clock size={28} className="md:w-8 md:h-8" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Easy Cancellations</h3>
            <p className="text-sm text-gray-500">Get hassle-free refunds and flexible rescheduling options.</p>
          </div>
          <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4">
              <Headset size={28} className="md:w-8 md:h-8" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">24/7 Expert Support</h3>
            <p className="text-sm text-gray-500">Our travel experts are available round the clock to assist you.</p>
          </div>
        </div>
      </div>

      {/* Hide Scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        /* Native date picker icon hiding for cleaner look */
        input[type="date"]::-webkit-inner-spin-button,
        input[type="date"]::-webkit-calendar-picker-indicator {
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

export default FlightPage;