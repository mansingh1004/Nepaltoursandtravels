import React, { useState } from 'react';
import nepalbikeriding from "../images/nepalbikeriding.jpeg"
import pokhrabike from "../images/pokhrabike.webp"
import Mustangbike from "../images/Mustangbike.webp"
import Muktinathbike from "../images/Muktinathbike.webp"
import { 
  Mountain, Clock, ShieldCheck, Star, 
  ChevronRight, ArrowUpRight, CheckCircle,
  Wind, Zap, HelpCircle, ChevronDown, 
  MapPin, Camera, Award, Waves, HeartPulse,
  Compass, Navigation, Thermometer, Sunrise,
  Binoculars
} from 'lucide-react';

const BikeTourInNepalPage = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  // Data scraped specifically from the provided images
  const bikingRoutes = [
    { 
      name: "Gorakhpur to Pokhara", 
      rating: 4.8, 
      desc: "An epic cross-border journey starting from Gorakhpur and winding through scenic hills to the lakeside city of Pokhara. Offers smooth highways and cultural shifts.",
      // Using placeholder, replace with actual image path from image_3.png
      img: pokhrabike, 
      tag: "Best for Cross-Border"
    },
    { 
      name: "Pokhara to Mustang", 
      rating: 4.9, 
      desc: "Experience the ultimate off-road adventure from Pokhara into the heart of Mustang. Ride through arid landscapes, ancient caves, and centuries-old monasteries.",
      // Using placeholder, replace with actual image path from image_3.png
      img: Mustangbike,
      tag: "Challenging Off-Road"
    },
    { 
      name: "Pokhara to Muktinath", 
      rating: 4.9, 
      desc: "A spiritual and adventurous ride from Pokhara to the sacred pilgrimage site of Muktinath. Traverse the deepest gorge and witness dramatic Himalayan transitions.",
      // Using placeholder, replace with actual image path from image_3.png
      img: Muktinathbike,
      tag: "Spiritual Ride"
    }
  ];

  const highlights = [
    "Scenic cross-border ride to Pokhara",
    "Stunning Mustang and Muktinath views",
    "Smooth highways and mountain curves",
    "Guided rides with expert captains"
  ];

  const advantages = [
    "Powerful, well-maintained adventure bikes",
    "Safety team with backup support",
    "Fast and flexible booking options",
    "Full permit and route assistance"
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-16 lg:pt-24 font-sans selection:bg-orange-100 overflow-x-hidden text-left">
      
      {/* 1. HEADER (Structured like image_0.png) */}
      <section className="px-5 lg:px-12 mb-8 lg:mb-12">
        <div className="max-w-7xl mx-auto border-l-4 border-emerald-600 pl-5">
          <nav className="flex items-center gap-2 text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
            <a href="/" className="hover:text-emerald-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-900 uppercase">Motorbike Tours</span>
          </nav>
          <h1 className="text-2xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            Bike Tour <span className="text-emerald-600 font-serif italic normal-case tracking-normal">in Nepal</span>
          </h1>
        </div>
      </section>

      {/* 2. INTRO DESCRIPTION BOX (Scraped Text from image_3.png) */}
      <section className="px-4 lg:px-10 mb-12 lg:mb-20">
        <div className="max-w-7xl mx-auto bg-slate-50 p-6 lg:p-14 rounded-2xl lg:rounded-[3.5rem] shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* IMAGE COLUMN */}
              <div className="lg:col-span-5 order-1">
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[300px] lg:h-[450px]">
                    <img 
                      src={nepalbikeriding} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt="Bike Tour Nepal Intro"
                    />
                    <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="lg:col-span-7 order-2 text-left">
                 <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full mb-6">
                    <Navigation size={14} className="fill-emerald-600"/>
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Nepal Tours & Travels</span>
                 </div>
                 <h2 className="text-xl lg:text-3xl font-black text-slate-900 mb-6 border-l-4 border-emerald-600 pl-4 uppercase tracking-tight">
                    Ride the Himalayan Roads
                 </h2>
                 <div className="space-y-4 text-slate-600 text-sm lg:text-base font-medium italic leading-relaxed">
                    <p>
                      Experience the ultimate adventure with our Bike Tour in Nepal, covering the most popular routes like Gorakhpur to Pokhara, Pokhara to Mustang, Pokhara to Muktinath, and the spectacular Himalayan riding circuits. These high-altitude motorcycle routes offer scenic valleys, rugged mountain trails, and pure Himalayan excitement for every biker.
                    </p>
                    <p>
                      Whether you're cruising smooth highways or conquering challenging off-road tracks, our expert guides and powerful adventure bikes ensure a journey that blends heart-pounding exploration with genuine cultural immersion.
                    </p>
                 </div>
                 <div className="mt-8 flex items-center gap-6 border-t border-slate-200 pt-8">
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Route Difficulty</p>
                       <p className="text-xl font-black text-slate-900 tracking-tighter">Smooth - Off-Road</p>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Terrain</p>
                       <p className="text-xl font-black text-slate-900 tracking-tighter">Valleys - High Passes</p>
                    </div>
                 </div>
              </div>
            </div>
        </div>
      </section>

      {/* 3. BIKING ROUTES GRID (Ratings & Book buttons from image_3.png) */}
      <section className="py-12 lg:py-16 bg-white px-5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">Featured Riding Routes</h2>
          <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em]">Select your next Himalayan adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {bikingRoutes.map((site, i) => (
            <div key={i} className="group bg-white rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col relative">
              
              {/* Rating Badge from image_3.png */}
              <div className="absolute top-4 right-4 z-10 bg-white px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-slate-100">
                <Star size={16} className="text-orange-500 fill-orange-500"/>
                <span className="text-xs font-black text-slate-900">{site.rating.toFixed(1)}</span>
              </div>

              <div className="h-[200px] lg:h-[240px] relative overflow-hidden">
                <img src={site.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={site.name} />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-lg text-[8px] lg:text-[10px] font-black uppercase tracking-widest shadow-lg leading-none">{site.tag}</span>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-black text-base lg:text-xl text-slate-800 mb-2 uppercase tracking-tight flex items-center justify-between">
                    {site.name}
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-emerald-600 transition-colors"/>
                  </h4>
                  <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic mb-6 leading-relaxed">{site.desc}</p>
                </div>
                
                {/* BUTTON: Keeps your required logic (slate-900 to orange-600) */}
                <button className="w-full bg-slate-900 hover:bg-orange-600 text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-black text-[9px] lg:text-[10px] tracking-widest transition-all duration-300 uppercase shadow-lg">
                  Book Now <ChevronRight size={14} className="inline ml-1"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HIGHLIGHTS & ADVANTAGES BENTO GRID (Text from image_3.png) */}
      <section className="py-16 lg:py-24 bg-slate-50 px-5">
         <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-xl lg:text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Why Ride With Us</h2>
            <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em] mt-2 text-center">Your Tour Highlights & Booking Benefits</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            
            {/* Highlights Bento Box */}
            <div className={`p-8 lg:p-12 rounded-2xl lg:rounded-[2.5rem] border bg-emerald-50 border-emerald-100 text-left transition-transform hover:scale-[1.02]`}>
               <div className="flex items-center gap-3 mb-6">
                   <Binoculars size={24} className="text-emerald-600"/>
                   <h4 className="text-lg lg:text-xl font-black text-slate-900 uppercase">Tour Highlights</h4>
               </div>
               <ul className="space-y-4">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] lg:text-sm text-slate-600 font-bold italic leading-relaxed">
                      <CheckCircle size={16} className="text-emerald-500 shrink-0"/>
                      {item}
                    </li>
                  ))}
               </ul>
            </div>

            {/* Advantages Bento Box */}
            <div className={`p-8 lg:p-12 rounded-2xl lg:rounded-[2.5rem] border bg-orange-50 border-orange-100 text-left transition-transform hover:scale-[1.02]`}>
               <div className="flex items-center gap-3 mb-6">
                   <ShieldCheck size={24} className="text-orange-600"/>
                   <h4 className="text-lg lg:text-xl font-black text-slate-900 uppercase">Booking Advantages</h4>
               </div>
               <ul className="space-y-4">
                  {advantages.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] lg:text-sm text-slate-600 font-bold italic leading-relaxed">
                      <CheckCircle size={16} className="text-orange-500 shrink-0"/>
                      {item}
                    </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>

      {/* 5. QUICK FACTS SECTION (Bento Style from image_3.png) */}
      <section className="py-16 lg:py-24 bg-white px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Zap size={32} className="mx-auto text-emerald-600 mb-4"/>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase">Quick Riding Facts</h2>
            <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest mt-2 text-center">Fast, smooth, and ideal for every bike traveler</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            
            {/* Fact 1 */}
            <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100 text-left flex items-center gap-5 transition-transform hover:scale-[1.03]">
              <Clock size={32} className="text-emerald-600 shrink-0"/>
              <div>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Ride Duration</p>
                <p className="text-xl font-black text-slate-900 tracking-tighter">5-7 hrs ride</p>
              </div>
            </div>

            {/* Fact 2 */}
            <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100 text-left flex items-center gap-5 transition-transform hover:scale-[1.03]">
              <Star size={32} className="text-orange-600 shrink-0 fill-orange-500"/>
              <div>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Daily Schedule</p>
                <p className="text-xl font-black text-slate-900 tracking-tighter">Early start time</p>
              </div>
            </div>

            {/* Fact 3 */}
            <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100 text-left flex items-center gap-5 transition-transform hover:scale-[1.03]">
              <Compass size={32} className="text-emerald-600 shrink-0"/>
              <div>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Bike Fleet</p>
                <p className="text-xl font-black text-slate-900 tracking-tighter">Powerful bikes</p>
              </div>
            </div>

            {/* Fact 4 */}
            <div className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100 text-left flex items-center gap-5 transition-transform hover:scale-[1.03]">
              <ShieldCheck size={32} className="text-orange-600 shrink-0"/>
              <div>
                <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1">Support Team</p>
                <p className="text-xl font-black text-slate-900 tracking-tighter">Backup vehicle</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (structures like image_0.png) */}
      <section className="py-16 lg:py-24 px-5 text-center">
        <div className="max-w-5xl mx-auto bg-slate-900 p-10 lg:p-20 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 blur-[120px] opacity-20"></div>
           <Sunrise className="mx-auto mb-6 text-emerald-400" size={40}/>
           <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase italic tracking-tighter">Ready for the <span className="text-emerald-500">Ultimate Leap?</span></h2>
           <p className="text-slate-400 text-xs lg:text-base mb-10 opacity-90 max-w-xl mx-auto italic leading-relaxed">
             "Riding the high-altitude trails of Mustang and Muktinath is a daring and unforgettable experience that blends excitement with Himalayan beauty."
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-8">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-8 lg:px-12 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-[9px] lg:text-[11px] tracking-widest transition-all duration-300 hover:scale-105 shadow-xl uppercase border-2 border-transparent">
                 Book Now: +91 8576000084
              </a>
              <div className="text-center sm:text-left">
                 <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-slate-500 mb-0.5 leading-none">Nepal Tours & Travels</p>
                 <p className="font-bold text-[10px] lg:text-xs text-slate-300 italic leading-none">Gorakhpur HQ</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default BikeTourInNepalPage;