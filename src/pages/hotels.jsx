import React, { useState, useMemo } from 'react';
import hotelyakyeti from "../images/hotelyak&yeti.jpg"
import hotellandmarkpokhara from "../images/hotel-landmark-pokhara.jpg"
import chitwanvillageresort from "../images/chitwan-village-resort.jpg"
import hotelbuddhamayagarden from "../images/hotelbuddhamayagarden.jpg"
import hotelinnepalbanner from "../images/hotelinnepalbanner.jpg"
import { 
  Search, MapPin, Calendar, Users, Star, 
  ChevronDown, Filter, Coffee, Heart, Info, X, ShieldCheck, 
  CheckCircle, Smartphone, User, Mail, Send, Plus, Minus, ThumbsUp
} from 'lucide-react';

// --- NEPAL HOTEL DATA ---
const INITIAL_HOTELS = [
  { 
    id: 1, 
    name: "Hotel Yak & Yeti", 
    location: "Kathmandu", 
    locality: "Durbar Marg", 
    rating: 5, 
    price: 8500, 
    oldPrice: 10500, 
    image: hotelyakyeti, 
    amenities: ["Free Wifi", "Pool", "AC", "Parking"], 
    category: "Luxury",
    description: "Located in the heart of Kathmandu, this landmark heritage hotel features a historic palace wing, lush gardens, and premium dining options."
  },
  { 
    id: 2, 
    name: "Hotel Landmark", 
    location: "Pokhara", 
    locality: "Lakeside", 
    rating: 4, 
    price: 4200, 
    oldPrice: 5500, 
    image: hotellandmarkpokhara, 
    amenities: ["Mountain View", "Restaurant", "Free Wifi", "AC"], 
    category: "Standard",
    description: "A beautiful property situated right on the Lakeside of Pokhara. It offers breathtaking views of the Annapurna range."
  },
  { 
    id: 3, 
    name: "Chitwan Village Resort", 
    location: "Chitwan", 
    locality: "Sauraha", 
    rating: 3, 
    price: 3100, 
    oldPrice: 4000, 
    image: chitwanvillageresort, 
    amenities: ["Breakfast Included", "Parking", "Pool"], 
    category: "Resort",
    description: "Nestled near the entrance of Chitwan National Park, this resort provides a rustic yet comfortable jungle experience."
  },
  { 
    id: 4, 
    name: "Buddha Maya Garden", 
    location: "Lumbini", 
    locality: "Lumbini Garden", 
    rating: 4, 
    price: 5800, 
    oldPrice: 6500, 
    image: hotelbuddhamayagarden, 
    amenities: ["Free Wifi", "AC", "Breakfast Included"], 
    category: "Boutique",
    description: "A tranquil oasis located just steps away from the sacred Lumbini Garden, the birthplace of Lord Buddha."
  },
  
];

const HotelBookingNepal = () => {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedLocalities, setSelectedLocalities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [priceRange, setPriceRange] = useState(10000);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Search States
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  // Modal & Form States
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  // --- REFINED FILTER LOGIC ---
  const processedHotels = useMemo(() => {
    let results = INITIAL_HOTELS.filter(hotel => {
      const matchesSearch = hotel.location.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            hotel.locality.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRating = selectedRatings.length === 0 || selectedRatings.includes(hotel.rating);
      const matchesLocality = selectedLocalities.length === 0 || selectedLocalities.includes(hotel.locality);
      const matchesAmenities = selectedAmenities.length === 0 || 
                               selectedAmenities.every(amn => hotel.amenities.includes(amn));
      const matchesPrice = hotel.price <= priceRange;
      
      return matchesSearch && matchesRating && matchesPrice && matchesLocality && matchesAmenities;
    });

    if (sortBy === "priceLow") results.sort((a, b) => a.price - b.price);
    if (sortBy === "priceHigh") results.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") results.sort((a, b) => b.rating - a.rating);
    
    return results;
  }, [searchQuery, selectedRatings, selectedLocalities, selectedAmenities, priceRange, sortBy]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); 
  };

  const closeAndResetModal = () => {
    setSelectedHotel(null);
    setShowInquiryForm(false);
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-800 flex items-center"><Filter size={18} className="mr-2"/> Filters</h3>
        <button onClick={() => {
            setSelectedRatings([]); 
            setPriceRange(10000);
            setSelectedLocalities([]);
            setSelectedAmenities([]);
        }} className="text-xs text-blue-600 font-semibold hover:underline">RESET</button>
      </div>
      
      <div className="pt-4 border-t">
        <p className="text-sm font-bold text-gray-700 mb-3">Max Price: ₹{priceRange}</p>
        <input type="range" min="2000" max="10000" step="500" className="w-full accent-blue-600 cursor-pointer" value={priceRange} onChange={(e) => setPriceRange(parseInt(e.target.value))} />
      </div>

      <div className="pt-4 border-t">
        <p className="text-sm font-bold text-gray-700 mb-3">Star Rating</p>
        {[5, 4, 3].map((star) => (
          <label key={star} className="flex items-center mb-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded text-blue-600 mr-3" checked={selectedRatings.includes(star)} 
              onChange={() => setSelectedRatings(prev => prev.includes(star) ? prev.filter(s => s !== star) : [...prev, star])} />
            <div className="flex text-yellow-400">
              {[...Array(star)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-sm text-gray-600 ml-2">{star} Star</span>
          </label>
        ))}
      </div>

      <div className="pt-4 border-t">
        <p className="text-sm font-bold text-gray-700 mb-3">Localities</p>
        {["Durbar Marg", "Lakeside", "Sauraha", "Lumbini Garden"].map((loc) => (
          <label key={loc} className="flex items-center mb-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded text-blue-600 mr-3" checked={selectedLocalities.includes(loc)} 
              onChange={() => setSelectedLocalities(prev => prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc])} />
            <span className="text-sm text-gray-600 group-hover:text-blue-600">{loc}</span>
          </label>
        ))}
      </div>

      <div className="pt-4 border-t">
        <p className="text-sm font-bold text-gray-700 mb-3">Amenities</p>
        {["Free Wifi", "Pool", "AC", "Breakfast Included", "Parking"].map((amn) => (
          <label key={amn} className="flex items-center mb-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded text-blue-600 mr-3" checked={selectedAmenities.includes(amn)} 
              onChange={() => setSelectedAmenities(prev => prev.includes(amn) ? prev.filter(a => a !== amn) : [...prev, amn])} />
            <span className="text-sm text-gray-600 group-hover:text-blue-600">{amn}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#f4f7f9] min-h-screen">
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden">
        <img src={hotelinnepalbanner} alt="Nepal" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-2">Nepal Hotel Booking</h1>
          <p className="text-white text-sm md:text-lg opacity-90">Best Price Guaranteed with Nepal Tours & Travels</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-[#ffb700] p-1 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-1">
          <div className="md:col-span-4 bg-white flex items-center px-4 py-3 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
            <Search className="text-gray-400 shrink-0" size={18} />
            <input type="text" placeholder="City or Hotel Name" className="w-full ml-2 outline-none text-sm" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <div className="md:col-span-4 bg-white flex items-center px-2 py-3 border-l">
            <Calendar className="text-gray-400 shrink-0 mx-2" size={18} />
            <input type="date" className="text-xs outline-none w-full bg-transparent" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
            <span className="mx-1 text-gray-300">|</span>
            <input type="date" className="text-xs outline-none w-full bg-transparent" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
          </div>
          
          <div className="md:col-span-2 bg-white flex items-center px-4 py-3 border-l">
            <Users className="text-gray-400 shrink-0" size={18} />
            <div className="flex items-center ml-auto bg-gray-50 rounded-lg p-1 border border-gray-100">
                <button onClick={() => setGuests(Math.max(1, guests - 1))} className="p-1 hover:bg-gray-200 rounded-md transition-colors text-blue-600"><Minus size={14}/></button>
                <span className="px-3 text-sm font-black text-gray-800">{guests}</span>
                <button onClick={() => setGuests(guests + 1)} className="p-1 hover:bg-gray-200 rounded-md transition-colors text-blue-600"><Plus size={14}/></button>
            </div>
          </div>

          <button className="md:col-span-2 bg-[#006ce4] text-white font-bold py-3 px-6 rounded-b-lg md:rounded-r-lg md:rounded-bl-none uppercase text-sm">Search</button>
        </div>
      </div>

      {/* --- NEW: MOBILE FILTER/SORT BAR --- */}
      <div className="lg:hidden sticky top-[0px] z-30 bg-white border-b shadow-sm px-4 py-3 mt-4 flex items-center justify-between">
          <div className="text-xs font-bold text-gray-500 uppercase">{processedHotels.length} Properties</div>
          <div className="flex gap-2">
              <button 
                onClick={() => setIsMobileFilterOpen(true)}
                className="flex items-center gap-1 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-100"
              >
                <Filter size={14} /> Filter
              </button>
              <div className="bg-gray-100 px-3 py-1.5 rounded-full flex items-center">
                <select className="bg-transparent text-xs font-bold outline-none text-gray-700" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="popular">Sort</option>
                    <option value="priceLow">Price Low</option>
                    <option value="priceHigh">Price High</option>
                    <option value="rating">Rating</option>
                </select>
              </div>
          </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-6 md:py-10 flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar (Hidden on mobile) */}
        <aside className="hidden lg:block w-[260px] shrink-0 sticky top-4 bg-white p-6 rounded-lg border h-fit">
          <FilterPanel />
        </aside>

        <main className="flex-1">
          {/* Desktop Sort Bar (Hidden on mobile) */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <h2 className="text-sm text-gray-600 font-semibold">Properties found: {processedHotels.length}</h2>
            <select className="text-sm font-bold text-blue-600 bg-white border p-2 rounded shadow-sm outline-none cursor-pointer" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popular">Sort By: Popular</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">User Rating</option>
            </select>
          </div>

          <div className="space-y-4">
            {processedHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-lg border shadow-sm flex flex-col sm:flex-row overflow-hidden hover:shadow-md transition-all group">
                <div className="relative w-full sm:w-[280px] h-[180px] md:h-[200px] shrink-0">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 bg-[#003580] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">{hotel.category}</div>
                </div>
                <div className="flex-1 p-4 md:p-5 flex flex-col md:flex-row justify-between">
                  <div className="flex-1 pr-0 md:pr-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight">{hotel.name}</h3>
                      <div className="bg-green-700 text-white px-2 py-0.5 rounded text-[10px] font-bold">{hotel.rating}.0 ★</div>
                    </div>
                    <p className="text-[11px] md:text-xs text-gray-500 flex items-center mb-4"><MapPin size={14} className="mr-1 text-blue-500" /> {hotel.locality}, {hotel.location}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {hotel.amenities.map((amn, i) => (
                        <span key={i} className="text-[8px] md:text-[9px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100 font-bold uppercase">{amn}</span>
                      ))}
                    </div>
                    <button onClick={() => { setSelectedHotel(hotel); setShowInquiryForm(false); }} className="text-blue-600 text-xs font-bold hover:underline">View Details & Policy</button>
                  </div>
                  <div className="w-full md:w-[170px] mt-4 md:mt-0 md:pl-5 md:border-l border-gray-100 flex flex-row md:flex-col justify-between items-center md:items-end">
                    <div className="text-left md:text-right">
                      <p className="text-[10px] text-gray-400 line-through">₹{hotel.oldPrice}</p>
                      <p className="text-xl md:text-2xl font-black text-gray-800">₹{hotel.price}</p>
                      <p className="text-[9px] text-gray-400">+ GST & Service Fees</p>
                    </div>
                    <button onClick={() => { setSelectedHotel(hotel); setShowInquiryForm(true); }} className="bg-[#e31c23] hover:bg-red-700 text-white font-bold py-2 md:py-3 px-6 rounded text-[10px] md:text-xs uppercase tracking-widest md:mt-4 shadow-sm transition-all">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* --- MODAL --- */}
      {selectedHotel && (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-2 md:p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-full max-w-4xl max-h-[95vh] rounded-2xl shadow-2xl overflow-hidden relative flex flex-col lg:flex-row">
            <button onClick={closeAndResetModal} className="absolute top-4 right-4 z-20 bg-white p-1.5 rounded-full shadow-lg text-gray-500 hover:text-red-600 transition-colors"><X size={24} /></button>

            <div className="lg:w-1/2 bg-gray-100 relative h-40 md:h-64 lg:h-auto">
              <img src={selectedHotel.image} className="w-full h-full object-cover" alt="Detail" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 md:p-6">
                <h2 className="text-white text-xl md:text-2xl font-black">{selectedHotel.name}</h2>
                <p className="text-white/80 text-xs flex items-center mt-1"><MapPin size={14} className="mr-1" /> {selectedHotel.locality}, {selectedHotel.location}</p>
              </div>
            </div>

            <div className="lg:w-1/2 p-5 md:p-10 overflow-y-auto">
              {!showInquiryForm && !isSubmitted && (
                <div className="animate-fadeIn">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(selectedHotel.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] font-black bg-blue-600 text-white px-2 py-0.5 rounded uppercase tracking-widest">Verified Stay</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-800 border-b pb-1 uppercase text-[10px] tracking-widest">Hotel Description</h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{selectedHotel.description}</p>
                    <h3 className="font-bold text-gray-800 border-b pb-1 uppercase text-[10px] tracking-widest">Amenities</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedHotel.amenities.map((amn, i) => (
                        <div key={i} className="flex items-center text-[10px] font-bold text-gray-700 bg-gray-50 p-2 rounded-lg border border-gray-100"><CheckCircle size={14} className="text-green-600 mr-2" /> {amn}</div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t flex items-center justify-between">
                    <p className="text-xl md:text-2xl font-black text-gray-800">₹{selectedHotel.price}</p>
                    <button onClick={() => setShowInquiryForm(true)} className="bg-[#006ce4] hover:bg-blue-800 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl transition-all shadow-lg uppercase text-[10px]">Reserve Spot</button>
                  </div>
                </div>
              )}

              {showInquiryForm && !isSubmitted && (
                <div className="animate-fadeIn">
                  <button onClick={() => setShowInquiryForm(false)} className="text-blue-600 text-[10px] font-bold mb-4 flex items-center hover:underline cursor-pointer">← Back</button>
                  <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-1">Book Your Stay</h3>
                  <p className="text-xs text-gray-500 mb-6">Our experts will contact you shortly.</p>
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <div className="relative"><User className="absolute left-3 top-3.5 text-gray-400" size={16} /><input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" className="w-full border-2 border-gray-100 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-blue-500 text-xs" /></div>
                    <div className="relative"><Mail className="absolute left-3 top-3.5 text-gray-400" size={16} /><input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full border-2 border-gray-100 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-blue-500 text-xs" /></div>
                    <div className="relative"><Smartphone className="absolute left-3 top-3.5 text-gray-400" size={16} /><input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="w-full border-2 border-gray-100 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-blue-500 text-xs" /></div>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} rows="2" placeholder="Special Requests" className="w-full border-2 border-gray-100 rounded-xl py-3 px-4 outline-none focus:border-blue-500 text-xs"></textarea>
                    <button type="submit" className="w-full bg-[#006ce4] hover:bg-blue-800 text-white font-bold py-3 md:py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 uppercase text-[10px] tracking-widest mt-4"><Send size={14} /> Send Inquiry</button>
                  </form>
                </div>
              )}

              {isSubmitted && (
                <div className="animate-fadeIn flex flex-col items-center justify-center h-full text-center space-y-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2 animate-bounce"><ThumbsUp size={32} /></div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-[11px] md:text-sm text-gray-500 px-4">Your inquiry for <span className="font-bold text-gray-800">{selectedHotel.name}</span> has been received.</p>
                  </div>
                  <div className="bg-gray-50 w-full p-4 rounded-2xl border border-gray-100 text-left space-y-1">
                    <p className="text-[9px] text-gray-400 uppercase font-black">Inquiry Summary</p>
                    <div className="flex justify-between text-xs md:text-sm"><span className="text-gray-500">Guests:</span><span className="font-bold text-gray-800">{guests} Adults</span></div>
                    <div className="flex justify-between text-xs md:text-sm"><span className="text-gray-500">Contact:</span><span className="font-bold text-gray-800">{formData.phone}</span></div>
                  </div>
                  <button onClick={closeAndResetModal} className="w-full py-3 md:py-4 border-2 border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50 uppercase text-[10px] tracking-widest">Back to Listings</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER OVERLAY */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 bg-black/60 z-[70] transition-opacity overflow-y-auto">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-8 pb-4 border-b">
              <h2 className="text-xl font-bold">Filter By</h2>
              <X onClick={() => setIsMobileFilterOpen(false)} className="cursor-pointer text-gray-400" />
            </div>
            <FilterPanel />
            <button onClick={() => setIsMobileFilterOpen(false)} className="w-full bg-[#006ce4] text-white font-bold py-4 rounded-lg mt-12 uppercase text-xs tracking-widest">Apply Filters</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelBookingNepal;