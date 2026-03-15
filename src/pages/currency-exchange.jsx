import React, { useState } from 'react';
import nepal_note_10 from "../images/nepal_note_10.jpg"
import nepal_notes_20 from "../images/nepal_notes_20.jpg"
import nepal_notes_50 from "../images/nepal_notes_50.jpg"
import nepal_note_100 from "../images/nepal-note_100.jpg"
import nepal_note_500 from "../images/nepal_note_500.jpg"
import nepal_notes_1000 from "../images/nepal_notes_1000.jpg"
import currency_exchange_banner from "../images/currency_exchange_banner.jpg"

import { Link } from 'react-router-dom';
import { 
  RefreshCcw, ShieldCheck, Banknote, HelpCircle, 
  CheckCircle2, Smartphone, User, Mail, Send, 
  Info, ArrowRightLeft, Globe, Zap, ThumbsUp, TrendingUp, Landmark, Eye, X, FileText, Fingerprint, Camera, MapPin, Truck
} from 'lucide-react';

const CurrencyExchangeNepal = () => {
  // Exchange Rate Logic
  const [inrAmount, setInrAmount] = useState(1000);
  const [nprAmount, setNprAmount] = useState(1600);
  const exchangeRate = 1.60; 

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDocsModal, setShowDocsModal] = useState(false); 

  const handleInrChange = (val) => {
    setInrAmount(val);
    setNprAmount((val * exchangeRate).toFixed(0));
  };

  const handleNprChange = (val) => {
    setNprAmount(val);
    setInrAmount((val / exchangeRate).toFixed(0));
  };

  // Mock data for the trend graph
  const trendData = [
    { month: 'Oct', rate: 1.60 },
    { month: 'Nov', rate: 1.60 },
    { month: 'Dec', rate: 1.60 },
    { month: 'Jan', rate: 1.60 },
    { month: 'Feb', rate: 1.60 },
    { month: 'Mar', rate: 1.60 },
  ];

  // Denomination Data
  const denominations = [
    { value: "रू 10", use: "Tea & Snacks", color: "bg-blue-50", img: nepal_note_10 },
    { value: "रू 20", use: "Local Bus Fare", color: "bg-purple-50", img: nepal_notes_20 },
    { value: "रू 50", use: "Temple Entry", color: "bg-green-50", img: nepal_notes_50 },
    { value: "रू 100", use: "Daily Meals", color: "bg-orange-50", img: nepal_note_100 },
    { value: "रू 500", use: "Hotel Stay", color: "bg-slate-50", img: nepal_note_500 },
    { value: "रू 1000", use: "Large Purchases", color: "bg-red-50", img: nepal_notes_1000 },
  ];

  // WhatsApp Link Helper
  const whatsappNumber = "918576000084";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi,%20I%20want%20to%20inquire%20about%20Nepal%20Currency%20Exchange%20rates.`;

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans overflow-x-hidden">
      
      {/* --- HERO BANNER SECTION --- */}
      <div className="relative w-full h-[400px] md:h-[550px] flex items-center overflow-hidden">
        <img src={currency_exchange_banner} alt="Nepal Currency Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003580]/95 via-[#003580]/70 to-transparent"></div>
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[#ffb700] text-[#003580] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-xl animate-bounce">
            <Zap size={14} fill="currentColor" /> Best Exchange Rates in India
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1] uppercase italic">Nepal Forex <br/> <span className="text-[#ffb700] not-italic">Simplified.</span></h1>
          <p className="text-blue-50 text-sm md:text-xl max-w-xl font-medium leading-relaxed opacity-90 border-l-4 border-[#ffb700] pl-4">Authorized currency exchange for your Nepal spiritual and adventure tours. Get the best INR to NPR rates instantly.</p>
        </div>
      </div>

      {/* --- FLOATING CALCULATOR & FORM BOX --- */}
      <div className="max-w-[1200px] mx-auto px-4 -mt-24 md:-mt-32 relative z-20">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,53,128,0.3)] bg-white">
          <div className="lg:w-[45%] bg-[#003580] p-8 md:p-12 text-white relative">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Landmark size={120} /></div>
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-10 flex items-center gap-3"><RefreshCcw className="text-[#ffb700] animate-spin-slow" /> Instant Rate Check</h2>
            <div className="space-y-8">
                <div className="relative group">
                    <label className="block text-[10px] font-black text-blue-300 uppercase tracking-widest mb-2">You Pay (INR)</label>
                    <div className="flex items-center bg-white/10 rounded-2xl border-2 border-white/10 group-focus-within:border-[#ffb700] transition-all p-4">
                        <span className="text-2xl font-bold text-[#ffb700] mr-4">₹</span>
                        <input type="number" className="bg-transparent text-3xl font-black outline-none w-full placeholder-white/30" value={inrAmount} onChange={(e) => handleInrChange(e.target.value)} />
                        <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-lg">INR</span>
                    </div>
                </div>
                <div className="flex justify-center -my-6 relative z-10"><div className="bg-[#ffb700] text-[#003580] p-3 rounded-full shadow-2xl hover:rotate-180 transition-transform duration-500 cursor-pointer"><ArrowRightLeft size={24} /></div></div>
                <div className="relative group">
                    <label className="block text-[10px] font-black text-blue-300 uppercase tracking-widest mb-2">You Get (NPR)</label>
                    <div className="flex items-center bg-white/10 rounded-2xl border-2 border-white/10 group-focus-within:border-[#ffb700] transition-all p-4">
                        <span className="text-2xl font-bold text-[#ffb700] mr-4">रू</span>
                        <input type="number" className="bg-transparent text-3xl font-black outline-none w-full" value={nprAmount} onChange={(e) => handleNprChange(e.target.value)} />
                        <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-lg">NPR</span>
                    </div>
                </div>
            </div>
            <p className="mt-10 text-[11px] text-blue-200 font-medium text-center italic">*Official standard 1:1.60 applied. Subject to cash availability.</p>
          </div>

          <div className="lg:w-[55%] p-8 md:p-12 bg-white relative">
            {!isSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-black text-[#003580] uppercase tracking-tighter">Get Live Quote</h2>
                            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-1">Verified Forex Assistance</p>
                        </div>
                        <TrendingUp className="text-green-500" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-gray-400 uppercase ml-1">Full Name</span>
                            <div className="flex items-center bg-gray-50 rounded-xl p-3 border border-gray-100 focus-within:border-blue-500 transition-all">
                                <User size={18} className="text-gray-400 mr-2" /><input required type="text" className="bg-transparent w-full outline-none text-sm font-bold" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-gray-400 uppercase ml-1">Contact No.</span>
                            <div className="flex items-center bg-gray-50 rounded-xl p-3 border border-gray-100 focus-within:border-blue-500 transition-all">
                                <Smartphone size={18} className="text-gray-400 mr-2" /><input required type="tel" className="bg-transparent w-full outline-none text-sm font-bold" placeholder="WhatsApp Number" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1 mb-8">
                        <span className="text-[10px] font-bold text-gray-400 uppercase ml-1">Your Requirements</span>
                        <textarea rows="3" className="w-full bg-gray-50 rounded-xl p-4 border border-gray-100 focus:border-blue-500 outline-none text-sm font-medium transition-all" placeholder="Tell us how much you need and for which city..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#ffb700] hover:bg-[#003580] hover:text-white text-[#003580] font-black py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest transition-all text-sm group">Confirm Rates & Request Call <Send size={18} className="group-hover:translate-x-1 transition-transform" /></button>
                </form>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fadeIn">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner rotate-12"><ThumbsUp size={40} /></div>
                    <h3 className="text-3xl font-black text-[#003580] uppercase tracking-tighter">Request Sent!</h3>
                    <p className="text-gray-500 mt-4 font-medium leading-relaxed underline">Expect a call in 15 mins.</p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-12 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-200 hover:text-[#003580] transition-colors">Submit Another Request</button>
                </div>
            )}
          </div>
        </div>
      </div>

      {/* --- LIVE RATE TRACKER --- */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-green-600 font-black text-xs uppercase tracking-[0.2em] mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Live Market Status
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#003580] uppercase tracking-tighter">Rate Trend: INR vs NPR</h2>
            </div>
            <div className="bg-blue-50 px-6 py-3 rounded-2xl border border-blue-100">
              <p className="text-[10px] font-black text-blue-400 uppercase mb-1">Current Pegged Rate</p>
              <p className="text-2xl font-black text-[#003580]">1.6000</p>
            </div>
          </div>
          <div className="relative h-[250px] w-full mt-8">
            <svg viewBox="0 0 1000 200" className="w-full h-full preserve-3d">
              <defs><linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#003580" stopOpacity="0.2" /><stop offset="100%" stopColor="#003580" stopOpacity="0" /></linearGradient></defs>
              <line x1="0" y1="50" x2="1000" y2="50" stroke="#f1f5f9" strokeWidth="1" /><line x1="0" y1="100" x2="1000" y2="100" stroke="#f1f5f9" strokeWidth="1" /><line x1="0" y1="150" x2="1000" y2="150" stroke="#f1f5f9" strokeWidth="1" />
              <path d="M0 100 Q 125 95, 250 100 T 500 100 T 750 100 T 1000 100 V 200 H 0 Z" fill="url(#graphGradient)" />
              <path d="M0 100 Q 125 95, 250 100 T 500 100 T 750 100 T 1000 100" fill="none" stroke="#003580" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
              {trendData.map((d, i) => ( <circle key={i} cx={i * 200} cy="100" r="6" fill="#ffb700" stroke="#white" strokeWidth="2" /> ))}
            </svg>
            <div className="flex justify-between mt-4 px-2">{trendData.map((d, i) => ( <span key={i} className="text-[10px] font-black text-gray-400 uppercase">{d.month}</span> ))}</div>
          </div>
        </div>
      </div>

      {/* --- HOW IT WORKS & DOCUMENTS CHECKLIST --- */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#003580] uppercase tracking-tighter mb-4">Exchange in 3 Simple Steps</h2>
            <div className="w-24 h-2 bg-[#ffb700] mx-auto mt-4 rounded-full mb-8"></div>
            <button onClick={() => setShowDocsModal(true)} className="mt-8 inline-flex items-center gap-2 bg-blue-50 text-[#003580] px-6 py-3 rounded-2xl font-black uppercase text-xs tracking-widest border border-blue-100 hover:bg-blue-100 transition-all shadow-sm mb-12"><FileText size={16} /> View Documents Required</button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{ icon: <Smartphone />, title: "Request Rate", desc: "Fill the form or call us to get the live best rate of the day." }, { icon: <ShieldCheck />, title: "Verification", desc: "Quick verification of travel documents for legitimate exchange." }, { icon: <Banknote />, title: "Instant Cash", desc: "Collect NPR cash from our office or get doorstep delivery." }].map((step, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group text-left">
                        <div className="w-16 h-16 bg-blue-50 text-[#003580] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#003580] group-hover:text-white transition-all">{step.icon}</div>
                        <h3 className="text-xl font-black text-[#003580] uppercase mb-3">{step.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
      </div>

      {/* --- NEW: CURRENCY DELIVERY AREAS (MAP SECTION) --- */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="text-left">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3"><Truck size={12} /> Doorstep Delivery</div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#003580] uppercase tracking-tighter">Our Service Hubs</h2>
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ city: "Gorakhpur", area: "Gorakhpur (U.P), Railway Station", time: "30 Mins" }, { city: "Kathmandu", area: "Kathmandu Nepal", time: "4 Hours" }, { city: "Sonauli", area: "Border Gate Point", time: "Instant" }].map((hub, i) => (
                  <div key={i} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 group-hover:bg-[#ffb700] transition-colors"></div>
                      <MapPin className="text-[#ffb700] mb-6 group-hover:scale-110 transition-transform" size={32} />
                      <h3 className="text-2xl font-black text-[#003580] uppercase mb-2">{hub.city}</h3>
                      <p className="text-gray-600 text-sm font-medium mb-8 leading-relaxed">{hub.area}</p>
                      <div className="flex items-center gap-2 text-[#006ce4] font-black text-[10px] uppercase tracking-widest bg-blue-50 w-fit px-3 py-1.5 rounded-full"><Zap size={12} fill="currentColor" /> Delivery in {hub.time}</div>
                  </div>
              ))}
          </div>
      </div>

      {/* --- CURRENCY DENOMINATION GALLERY --- */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 bg-white/40 rounded-[50px] border border-white/60 mb-20 shadow-inner">
        <div className="text-center mb-12">
            <div className="inline-block bg-blue-50 text-[#003580] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">Nepal Cash Guide</div>
            <h2 className="text-3xl md:text-5xl font-black text-[#003580] uppercase tracking-tighter">Official NPR Denominations</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {denominations.map((note, i) => (
                <div key={i} className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden text-left">
                    <div className={`h-40 ${note.color} flex items-center justify-center p-6 relative`}><img src={note.img} alt={note.value} className="w-full h-32 object-contain drop-shadow-2xl group-hover:scale-110 transition-all" /><div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Eye size={16} className="text-[#003580]" /></div></div>
                    <div className="p-6 bg-white"><div className="flex justify-between items-center mb-2"><h3 className="text-2xl font-black text-[#003580]">{note.value}</h3><span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Original Note</span></div><div className="flex items-center gap-2 text-gray-500"><CheckCircle2 size={14} className="text-green-500" /><p className="text-xs font-bold uppercase tracking-tighter italic">Ideal for: {note.use}</p></div></div>
                </div>
            ))}
        </div>
      </div>

      {/* --- INDIAN RULES SECTION --- */}
   <div className="bg-white py-20 border-y border-gray-100">
    <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
      <div>
          <h2 className="text-3xl font-black text-[#003580] uppercase tracking-tighter mb-6">Indian Currency Rules in Nepal</h2>
          <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-[#f8fafc] rounded-2xl border-l-4 border-[#ffb700]">
                  <CheckCircle2 className="text-green-500 shrink-0" />
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">Indian Rupees (INR) of denominations <strong>Rs. 10, 20, 50, and 100</strong> are freely used across Nepal without any restrictions.</p>
              </div>
              <div className="flex gap-4 p-5 bg-[#f8fafc] rounded-2xl border-l-4 border-[#003580]">
                  <Info className="text-blue-500 shrink-0" />
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">Denominations of <strong>Rs. 200, 500, and 2000</strong> are regulated. We strongly advise exchanging these for NPR before your trip.</p>
              </div>
          </div>
       </div>
      
      {/* UPDATE THIS PART BELOW */}
      <div className="relative flex justify-center lg:justify-start">
          <img src="https://images.unsplash.com/photo-1578593052523-86162389851a?w=800" alt="" className="rounded-[40px] shadow-2xl w-full max-w-md lg:max-w-full" />
          
          {/* REMOVED 'hidden md:block' to show on mobile */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-left-6 bg-[#ffb700] p-6 md:p-8 rounded-3xl shadow-xl">
              <p className="text-[#003580] font-black text-3xl md:text-4xl italic">1.60</p>
              <p className="text-[#003580] font-bold text-[10px] md:text-xs uppercase tracking-widest">Fixed Ratio</p>
          </div>
      </div>
    </div>
  </div>

      <div className="max-w-[1200px] mx-auto px-6 py-20 text-center">
         <div className="bg-[#003580] p-10 md:p-20 rounded-[50px] shadow-2xl relative overflow-hidden text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"><RefreshCcw size={400} className="absolute -top-20 -left-20 text-white" /></div>
            <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter mb-6 relative z-10">Need Bulk Exchange?</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
                <a href="tel:+918576000084" className="bg-[#ffb700] text-[#003580] px-10 py-5 rounded-2xl font-black uppercase text-sm shadow-xl hover:scale-105 transition-all tracking-widest">Call: +91 85760 00084</a>
                {/* UPDATED: Working WhatsApp Button */}
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-[#003580] px-10 py-5 rounded-2xl font-black uppercase text-sm shadow-xl hover:scale-105 transition-all tracking-widest"
                >
                  Chat on WhatsApp
                </a>
            </div>
         </div>
      </div>

      {/* --- DOCUMENTS CHECKLIST MODAL (MOBILE FIX) --- */}
      {showDocsModal && (
        <div className="fixed inset-0 bg-black/80 z-[70] flex items-center justify-center p-3 md:p-4 backdrop-blur-md animate-fadeIn">
          <div className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden relative border border-gray-100 flex flex-col max-h-[90vh]">
            <button onClick={() => setShowDocsModal(false)} className="absolute top-6 right-6 z-20 bg-gray-100 p-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-all text-gray-500"><X size={24} /></button>
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar text-left">
               <h2 className="text-2xl md:text-3xl font-black text-[#003580] uppercase tracking-tighter mb-8 leading-tight">Documents <br/>Required</h2>
               <div className="grid grid-cols-1 gap-4 mb-10">
                  {[
                    { icon: <Fingerprint className="text-blue-600" />, title: "Aadhar Card" },
                    { icon: <Landmark className="text-blue-600" />, title: "PAN Card" },
                    { icon: <Camera className="text-blue-600" />, title: "Passport" },
                    { icon: <FileText className="text-blue-600" />, title: "Tickets" }
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-3xl border border-gray-100">
                        <div className="shrink-0">{doc.icon}</div>
                        <p className="font-black text-[#003580] text-sm uppercase leading-none">{doc.title}</p>
                    </div>
                  ))}
               </div>
               <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100 flex gap-4 mb-6 italic text-[11px] text-yellow-800">
                  <Info className="text-yellow-600 shrink-0" />
                  <p>Valid Identity proof is mandatory at border custom points for currency verification.</p>
               </div>
               <button onClick={() => setShowDocsModal(false)} className="w-full bg-[#003580] text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs shadow-xl">Got it, Close</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-draw { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw 3s ease-out forwards; }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
      `}</style>
    </div>
  );
};

export default CurrencyExchangeNepal;