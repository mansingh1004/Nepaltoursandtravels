import React, { useState, useEffect } from 'react';
import Chitrkotbanner from "../images/chitrakootbanner.jpg"
import chitrakoot from "../images/chitrakootbanner.jpg"
import prayagraj from "../images/prayagraj.png"
import Chitrakoot2 from "../images/Chitrakoot2.jpg"
import guptgodavari from "../images/guptgodavari.jpg"
import { 
  MapPin, Calendar, Star, Share2, Heart, Download, 
  Minus, Plus, Info, BedDouble, Utensils, 
  Camera, Bus, Award, Users 
} from 'lucide-react';

// --- PRAYAGRAJ TO CHITRAKOOT PACKAGE DATA ---
const packageData = {
  title: "Ramayana Path: Prayagraj to Chitrakoot Tour",
  rating: 4.8,
  reviews: 640,
  duration: "2 Nights 3 Days",
  route: "Prayagraj (1N) → Chitrakoot (1N) → Gupt Godavari",
  originalPrice: ".....",
  basePriceAdult: ".....",
  basePriceChildWithBed: "....",
  basePriceChildWithoutBed: "....",
  // High-quality banner representing the spiritual transition to the forest circuit
  topBannerImage: Chitrkotbanner, 
  images: [
    chitrakoot, // Chitrakoot Ghats
    prayagraj, // Prayagraj Sangam
    Chitrakoot2  // Ancient Temples
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Prayagraj & Sangam Visit",
      image: prayagraj,
      description: "Arrival at Prayagraj. Transfer to hotel. Afternoon visit to Triveni Sangam for a holy dip, Anand Bhawan, and the reclining Hanuman Temple. Explore the local spiritual markets in the evening. Overnight stay in Prayagraj."
    },
    {
      day: 2,
      title: "Drive to Chitrakoot & Local Darshan",
      image: Chitrakoot2,
      description: "After breakfast, drive to Chitrakoot, the sacred forest where Lord Rama spent years of exile. Visit Ram Ghat on the banks of Mandakini River, Kamadgiri, and Janaki Kund. Witness the evening Aarti at Mandakini river. Overnight stay in Chitrakoot."
    },
    {
      day: 3,
      title: "Chitrakoot Sightseeing & Departure",
      image: guptgodavari,
      description: "Morning visit to Gupt Godavari Caves and Hanuman Dhara. After local exploration and lunch, you will be transferred to the nearest railway station or airport for your onward journey."
    }
  ],
  highlights: [
    "3 Days spiritual tour following the footsteps of Lord Rama from the Sangam to the forests of exile.",
    "Holy dip at Triveni Sangam and guided tour of Gupt Godavari Caves.",
    "Experience the peaceful Mandakini River Aarti in Chitrakoot.",
    "Private AC vehicle for all inter-city and local sightseeing.",
    "Read More"
  ],
  transfer: [
    "Pickup from Prayagraj Airport/Railway Station.",
    "Inter-city transfer (Prayagraj to Chitrakoot) in private AC vehicle.",
    "Local sightseeing in both cities as per itinerary.",
    "All toll, parking, and driver allowances included."
  ],
  sightseeing: [
    "Prayagraj: Triveni Sangam, Anand Bhawan, Hanuman Temple.",
    "Chitrakoot: Ram Ghat, Kamadgiri, Gupt Godavari, Hanuman Dhara, Janaki Kund."
  ],
  accommodation: [
    "Prayagraj: 1 Night in a 3-star category hotel.",
    "Chitrakoot: 1 Night in a Deluxe Resort or Premium Hotel."
  ],
  meals: [
    "Daily buffet breakfast at all hotels.",
    "1 bottle of packaged drinking water per person per day.",
    "Traditional Satvik dinner included at Chitrakoot stay."
  ],
  inclusionExclusions: {
    inclusions: [
      "Accommodation on twin-sharing basis.",
      "Breakfast and Dinner as per the plan.",
      "All transfers by private AC vehicle.",
      "Boat ride at Sangam."
    ],
    exclusions: [
      "Airfare or Train tickets.",
      "Monument entrance fees.",
      "Personal expenses (Laundry, Tips, etc.).",
      "GST as per government norms."
    ]
  }
};

// --- VEHICLE SELECTION DATA ---
const vehicleData = [
  { name: "Sedan (Swift Dzire/Etios)", capacity: 4 },
  { name: "SUV (Innova/Ertiga)", capacity: 7 },
  { name: "Tempo Traveller (12 Seater)", capacity: 12 },
  { name: "Tempo Traveller (17 Seater)", capacity: 17 },
  { name: "Mini Bus (25 Seater)", capacity: 25 },
  { name: "Luxury Coach (45 Seater)", capacity: 45 },
];

const GuestCounter = ({ label, subLabel, value, onIncrement, onDecrement, minVal }) => (
  <div className="flex flex-col items-center">
    <span className="text-[13px] font-medium text-gray-700 mb-0.5 whitespace-nowrap">{label}</span>
    <span className="text-[11px] text-gray-400 mb-2">{subLabel}</span>
    <div className="flex items-center space-x-3">
      <button onClick={onDecrement} disabled={value <= minVal} className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${value <= minVal ? 'border-gray-200 text-gray-300' : 'border-red-200 text-red-500 hover:bg-red-50'}`}><Minus size={14} strokeWidth={2.5} /></button>
      <span className="w-3 text-center text-[15px] font-bold text-gray-800">{value}</span>
      <button onClick={onIncrement} className="w-7 h-7 rounded-full border border-red-200 text-red-500 flex items-center justify-center hover:bg-red-50 transition-colors"><Plus size={14} strokeWidth={2.5} /></button>
    </div>
  </div>
);

const PrayagrajChitrakootTour = () => {
  const [openDay, setOpenDay] = useState(1);
  const [activeMainTab, setActiveMainTab] = useState('itinerary'); 
  const [activeSubTab, setActiveSubTab] = useState('highlights'); 

  const [rooms, setRooms] = useState([{ id: 1, adult: 2, childWithBed: 0, childWithoutBed: 0, infant: 0 }]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [travelDate, setTravelDate] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [displayedPrice, setDisplayedPrice] = useState(packageData.basePriceAdult);
  const [isCalculated, setIsCalculated] = useState(false);
  const [formError, setFormError] = useState("");

  const handleAddRoom = () => {
    const newRoomId = rooms.length ? rooms[rooms.length - 1].id + 1 : 1;
    setRooms([...rooms, { id: newRoomId, adult: 1, childWithBed: 0, childWithoutBed: 0, infant: 0 }]);
  };

  const updateRoomGuests = (id, type, amount) => {
    setRooms(rooms.map(room => room.id === id ? { ...room, [type]: room[type] + amount } : room));
  };

  const totalGuests = rooms.reduce((acc, curr) => acc + curr.adult + curr.childWithBed + curr.childWithoutBed, 0);

  const handleCalculatePrice = () => {
    setFormError(""); 
    if (!travelDate) { setFormError("Please select a Date of Travel."); return; }
    if (!selectedVehicle) { setFormError("Please select a Car/Bus option."); return; }
    if (!mobileNo || mobileNo.length < 10) { setFormError("Please enter a valid Mobile Number."); return; }
    if (!agreedToTerms) { setFormError("Please accept the Privacy Policy & Terms & Conditions."); return; }
    
    let totalCalculated = 0;
    rooms.forEach(room => {
      totalCalculated += (room.adult * packageData.basePriceAdult);
      totalCalculated += (room.childWithBed * packageData.basePriceChildWithBed);
      totalCalculated += (room.childWithoutBed * packageData.basePriceChildWithoutBed);
    });

    setDisplayedPrice(totalCalculated);
    setIsCalculated(true);
  };

  return (
    <div className="font-sans bg-[#f8f9fa] min-h-screen pb-20">
      <div className="w-full h-[250px] md:h-[350px] lg:h-[400px] mb-6 relative">
        <img src={packageData.topBannerImage} alt="Sangam to Chitrakoot" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-5">
          <h1 className="text-[28px] md:text-3xl font-bold text-gray-800 mb-2 flex items-center">
            {packageData.title}
            <span className="text-sm ml-4 font-normal text-gray-600 flex items-center">
              {packageData.rating} <Star size={14} className="mx-1 text-yellow-400 fill-current" /> ({packageData.reviews})
            </span>
          </h1>
          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-y-2">
            <span className="flex items-center font-medium mr-4"><Calendar size={16} className="mr-1.5 text-gray-500" /> {packageData.duration}</span>
            <span className="flex items-center text-gray-500"><MapPin size={16} className="mr-1.5" /> {packageData.route}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-[68%]">
            <div className="flex flex-col md:flex-row gap-2 h-[300px] md:h-[400px] mb-6 relative rounded-lg overflow-hidden">
              <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 rounded text-red-600 text-xs font-bold flex items-center shadow-md"><Users size={14} className="mr-1" /> Ramayana Circuit</div>
              <div className="w-full md:w-2/3 h-full overflow-hidden"><img src={packageData.images[0]} alt="Ghat" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
              <div className="hidden md:flex flex-col gap-2 w-full md:w-1/3 h-full">
                <div className="flex-1 overflow-hidden"><img src={packageData.images[1]} alt="Sangam" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" /></div>
                <div className="flex-1 overflow-hidden relative cursor-pointer group"><img src={packageData.images[2]} alt="Cave" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-10 pb-6 border-b border-gray-200 overflow-x-auto hide-scrollbar">
              {[{ icon: <BedDouble size={24} />, label: "Hotel", color: "bg-pink-500" }, { icon: <Utensils size={24} />, label: "Meals", color: "bg-orange-500" }, { icon: <Camera size={24} />, label: "Sightseeing", color: "bg-purple-600" }, { icon: <Bus size={24} />, label: "Transfer", color: "bg-yellow-500" }, { icon: <Award size={24} />, label: "Highlights", color: "bg-orange-400" }].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center min-w-[80px]"><div className={`w-14 h-14 rounded-full ${item.color} text-white flex items-center justify-center mb-2 shadow-md`}>{item.icon}</div><span className="text-xs font-semibold text-gray-700">{item.label}</span></div>
              ))}
            </div>

            <div className="sticky top-20 z-30 bg-[#f8f9fa] border-b-2 border-gray-200 flex space-x-6 md:space-x-10 mb-8 pt-2 overflow-x-auto hide-scrollbar">
              {['ITINERARY', 'PACKAGE DETAILS', 'CALCULATE PRICE', 'TERMS & CONDITIONS'].map((tab) => (
                <button key={tab} onClick={() => setActiveMainTab(tab.toLowerCase())} className={`pb-4 text-[13px] md:text-[15px] font-bold tracking-wide whitespace-nowrap transition-colors relative ${activeMainTab === tab.toLowerCase() ? 'text-red-600' : 'text-gray-500 hover:text-gray-800'}`}>{tab}{activeMainTab === tab.toLowerCase() && <span className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-red-600"></span>}</button>
              ))}
            </div>

            {activeMainTab === 'itinerary' && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fadeIn">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Itinerary</h2>
                <div className="space-y-4">
                  {packageData.itinerary.map((day) => (
                    <div key={day.day} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                      <button onClick={() => setOpenDay(openDay === day.day ? null : day.day)} className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4"><div className="border border-red-500 text-red-600 px-3 py-1 rounded-full text-xs font-bold">Day {day.day}</div><h3 className="font-semibold text-gray-800 text-base">{day.title}</h3></div>
                        <div className="text-gray-400 bg-gray-100 p-1 rounded-full">{openDay === day.day ? <Minus size={18} /> : <Plus size={18} />}</div>
                      </button>
                      {openDay === day.day && (
                        <div className="p-4 pt-2 border-t border-gray-100 flex flex-col md:flex-row gap-5">
                          <img src={day.image} alt={day.title} className="w-full md:w-[280px] h-[160px] object-cover rounded-md shadow-sm" /><p className="text-sm text-gray-600 leading-relaxed">{day.description}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeMainTab === 'package details' && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex space-x-6 border-b border-gray-200 mb-6 overflow-x-auto hide-scrollbar">
                  {['Highlights', 'Transfer', 'Sightseeing', 'Accommodation', 'Meals', 'Inclusion/Exclusions'].map((sub) => (
                    <button key={sub} onClick={() => setActiveSubTab(sub.toLowerCase().replace('/', ''))} className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors relative ${activeSubTab === sub.toLowerCase().replace('/', '') ? 'text-red-600' : 'text-gray-500 hover:text-gray-800'}`}>{sub}{activeSubTab === sub.toLowerCase().replace('/', '') && <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-red-600"></span>}</button>
                  ))}
                </div>
                <div className="animate-fadeIn">
                   {activeSubTab !== 'inclusionexclusions' ? (
                     <ul className="space-y-4">{packageData[activeSubTab]?.map((item, i) => (<li key={i} className="flex items-start text-sm text-gray-600 font-medium"><div className="min-w-[6px] h-[6px] rounded-full bg-red-500 mt-1.5 mr-3"></div><span>{item}</span></li>))}</ul>
                   ) : (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div><h3 className="text-lg font-bold text-green-700 mb-4">Inclusions</h3><ul className="space-y-4">{packageData.inclusionExclusions.inclusions.map((item, i) => (<li key={i} className="flex items-start text-sm text-gray-600 font-medium"><div className="min-w-[6px] h-[6px] rounded-full bg-green-500 mt-1.5 mr-3"></div>{item}</li>))}</ul></div>
                       <div><h3 className="text-lg font-bold text-red-600 mb-4">Exclusions</h3><ul className="space-y-4">{packageData.inclusionExclusions.exclusions.map((item, i) => (<li key={i} className="flex items-start text-sm text-gray-600 font-medium"><div className="min-w-[6px] h-[6px] rounded-full bg-red-500 mt-1.5 mr-3"></div>{item}</li>))}</ul></div>
                     </div>
                   )}
                </div>
              </div>
            )}

            {activeMainTab === 'calculate price' && (
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 animate-fadeIn">
                <h2 className="text-[22px] font-medium text-gray-800 mb-8">Calculate Price</h2> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Departure City <span className="text-red-500">*</span></label><select className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-red-400 bg-white"><option>Prayagraj</option><option>Varanasi</option><option>Delhi</option></select></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Tour Type</label><select className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-red-400 bg-white"><option>Standard</option><option>Premium</option></select></div>
                  <div><label className="block text-sm font-semibold text-gray-700 mb-2">Car/Bus Selection <span className="text-red-500">*</span></label>
                    <select value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-red-400 bg-white">
                      <option value="">Select Option</option>
                      {vehicleData.filter(v => v.capacity >= totalGuests).map((v, idx) => (<option key={idx} value={v.name}>{v.name}</option>))}
                    </select>
                  </div>
                </div>

                <h3 className="font-bold text-gray-800 mb-2">Traveller Details</h3>
                <div className="space-y-6"> 
                  {rooms.map((room, index) => (
                    <div key={room.id} className="flex flex-col md:flex-row items-start md:items-center py-4 border-b border-gray-100">
                      <div className="w-full md:w-32 mb-4 md:mb-0 flex flex-col"><span className="font-medium text-gray-800 text-[15px]">Room {index + 1}</span>{index === rooms.length - 1 && (<button onClick={handleAddRoom} className="text-red-500 font-bold text-xs mt-1 self-start hover:underline">Add Room</button>)}</div>
                      <div className="flex flex-wrap gap-4 md:gap-8 flex-1 justify-start">
                        <GuestCounter label="Adult" subLabel="(12+ yrs)" minVal={1} value={room.adult} onIncrement={() => updateRoomGuests(room.id, 'adult', 1)} onDecrement={() => updateRoomGuests(room.id, 'adult', -1)} />
                        <GuestCounter label="Child(With bed)" subLabel="(Below 12 yrs)" minVal={0} value={room.childWithBed} onIncrement={() => updateRoomGuests(room.id, 'childWithBed', 1)} onDecrement={() => updateRoomGuests(room.id, 'childWithBed', -1)} />
                        <GuestCounter label="Child(Without bed)" subLabel="(Below 12 yrs)" minVal={0} value={room.childWithoutBed} onIncrement={() => updateRoomGuests(room.id, 'childWithoutBed', 1)} onDecrement={() => updateRoomGuests(room.id, 'childWithoutBed', -1)} />
                        <GuestCounter label="Infant" subLabel="(0-2 yrs)" minVal={0} value={room.infant} onIncrement={() => updateRoomGuests(room.id, 'infant', 1)} onDecrement={() => updateRoomGuests(room.id, 'infant', -1)} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-4"><div><label className="block text-sm font-semibold text-gray-700 mb-2">Date of Travel <span className="text-red-500">*</span></label><input type="date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-red-400" /></div></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2"><div><label className="block text-sm font-semibold text-gray-700 mb-2">Mobile No. <span className="text-red-500">*</span></label><input type="tel" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} placeholder="10 digit number" className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-red-400" /></div><div><label className="block text-sm font-semibold text-gray-700 mb-2">Email ID</label><input type="email" placeholder="example@gmail.com" className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-red-400" /></div></div>
                {formError && (<div className="text-red-600 text-sm font-bold bg-red-50 py-2 px-4 rounded mb-4 text-center border border-red-200">{formError}</div>)}
                <div className="flex flex-col items-center justify-center pt-4">
                   <label className="flex items-center text-sm text-gray-700 mb-4 cursor-pointer"><input type="checkbox" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="w-4 h-4 mr-2 accent-red-600 rounded cursor-pointer" /><span>I accept the <a href="#" className="text-red-500 font-bold hover:underline">Privacy Policy</a> & <a href="#" className="text-red-500 font-bold hover:underline">Terms & Conditions</a></span></label>
                   <button onClick={handleCalculatePrice} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-8 md:px-12 rounded shadow-md transition-colors text-base w-full md:w-auto">Calculate Package Price</button>
                   {isCalculated && (<div className="mt-6 p-4 w-full md:w-auto border-2 border-green-500 bg-green-50 rounded-lg text-center animate-fadeIn"><p className="text-gray-600 text-sm font-medium mb-1">Total Price</p><h2 className="text-2xl font-black text-green-700">₹{displayedPrice.toLocaleString('en-IN')}</h2></div>)}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full lg:w-[32%] sticky top-28 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center">
              {!isCalculated && <p className="text-gray-400 line-through text-sm font-medium mb-1">₹{packageData.originalPrice.toLocaleString('en-IN')}</p>}
              <h2 className="text-3xl font-extrabold text-gray-800 mb-1">₹{displayedPrice.toLocaleString('en-IN')}</h2>
              <p className="text-xs text-gray-500 mb-5">{isCalculated ? "Total Calculated Price" : "Starting price per adult"}</p>
              
              <div className="bg-[#f9f9f9] border border-gray-100 rounded-md py-3 px-4 flex items-center justify-center mb-5">
                <div className="text-left flex items-center text-xs text-gray-600">
                  <div className="w-6 h-6 bg-red-100 text-red-600 rounded mr-2 flex items-center justify-center font-bold text-[10px]">HR</div>
                  <span><strong className="text-gray-800 text-sm">Earn +420</strong><br/>Holiday Reward points</span>
                  <Info size={14} className="ml-2 text-gray-400" />
                </div>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded shadow-md transition-colors text-lg mb-4">Book Now</button>
              <button className="w-full flex items-center justify-center py-2.5 border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-50 transition-colors mb-4 text-sm"><Heart size={16} className="mr-2 text-gray-500" /> Add to Wishlist</button>
              <div className="flex justify-center items-center space-x-6 text-sm text-gray-600 font-medium pt-2 border-t border-gray-100">
                <button className="flex items-center hover:text-blue-600"><Download size={16} className="mr-1.5" /> PDF</button>
                <button className="flex items-center hover:text-blue-600"><Share2 size={16} className="mr-1.5" /> Share</button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-gray-800 flex items-center mb-4"><div className="bg-green-100 text-green-600 p-1.5 rounded-full mr-2"><Star size={16}/></div>Offers</h3>
              <p className="text-xs text-green-600 font-semibold mb-4 bg-green-50 px-2 py-1 rounded inline-block">Applicable after calculating price</p>
              <div className="space-y-3">
                <div className="border border-dashed border-gray-300 rounded bg-[#fcfcfc] p-3 opacity-60">
                  <div className="flex items-center text-sm font-semibold text-gray-600 mb-1"><input type="radio" disabled className="mr-2" /> SANGAM26</div>
                  <p className="text-[11px] text-gray-500 ml-6">Upto 4K off on River Circuit Tours*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }.animate-fadeIn { animation: fadeIn 0.4s ease-in-out; }@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
};

export default PrayagrajChitrakootTour;