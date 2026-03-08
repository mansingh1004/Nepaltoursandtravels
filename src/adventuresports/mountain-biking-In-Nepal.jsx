import React, { useState } from 'react';
import kathmanduvalleyrintrail from "../images/kathmanduvalleyrintrail.webp"
import pokhratosagarkottrail from "../images/pokhratosagarkottrail.webp"
import uppermustangbiking from "../images/uppermustangbiking.webp"
import mountainBiking from "../images/MountainBiking.jpeg"
import { 
  Mountain, Clock, ShieldCheck, Star, 
  ChevronRight, ArrowUpRight, CheckCircle,
  Wind, Zap, HelpCircle, ChevronDown, 
  MapPin, Camera, Award, Waves, HeartPulse,
  Compass, Navigation, Thermometer, Bike,
  Droplets, Snowflake
} from 'lucide-react';

const MountainBikingInNepalPage = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  // Data scraped specifically from the provided images
  const bikingDestinations = [
    { 
      name: "Kathmandu Valley Rim Trail", 
      difficulty: "Moderate / Cultral", 
      desc: "Discover Nepal's cultural heart on the Kathmandu Valley Rim Trail, which features ancient temples, hidden monasteries, and lush green hills. Ideal for both casual riders and adventure seekers.",
      // Replace with actual image path from image_2.png
      img: kathmanduvalleyrintrail, 
      tag: "Valley Views"
    },
    { 
      name: "Pokhara to Sarangkot Trail", 
      difficulty: "Moderate / Scenic", 
      desc: "Experience scenic beauty and adventure with the Pokhara to Sarangkot biking route. Ride along tranquil lakes, terraced farmlands, and uphill climbs to Sarangkot for breathtaking sunrise views.",
      // Replace with actual image path from image_2.png
      img: pokhratosagarkottrail,
      tag: "Sunrise Route"
    },
    { 
      name: "Upper Mustang Biking", 
      difficulty: "Challenging / Remote", 
      desc: "For serious bikers, Upper Mustang offers a challenging yet mesmerizing journey through desert-like landscapes, ancient caves, and Tibetan-influenced villages. This off-beat trail is known for its dramatic cliffs.",
      // Replace with actual image path from image_2.png
      img: uppermustangbiking,
      tag: "Forbidden Ride"
    }
  ];

  const seasons = [
    { name: "Spring", months: "March – May", desc: "Ideal season for mountain biking in Nepal with clear skies, blooming rhododendrons, and comfortable temperatures. Perfect for trails around Kathmandu Valley and Pokhara.", icon: <Star size={20} className="text-emerald-500 fill-emerald-500"/>, color: "bg-emerald-50 border-emerald-100" },
    { name: "Autumn", months: "Sept – Nov", desc: "The best time for biking adventures with dry weather, crystal clear views, and vibrant landscapes. Ideal for long rides in Upper Mustang, Annapurna, and beyond.", icon: <MapPin size={20} className="text-orange-500"/>, color: "bg-orange-50 border-orange-100" },
    { name: "Winter", months: "Dec – Feb", desc: "Cool air and clear mountain views make it pleasant for short and mid-level rides. Ideal for Kathmandu Valley, Dhulikhel, and lower-altitude biking routes.", icon: <Snowflake size={20} className="text-blue-500"/>, color: "bg-blue-50 border-blue-100" },
    { name: "Monsoon", months: "June – Aug", desc: "For serious bikers, expect occasional rain and muddy tracks, but enjoy lush greenery and quiet trails. Great for biking in rain-shadow areas like Mustang and Dolpo regions.", icon: <Droplets size={20} className="text-slate-500"/>, color: "bg-slate-50 border-slate-100" }
  ];

  const faqs = [
    { q: "What is the best time for mountain biking in Nepal?", a: "The best time for mountain biking in Nepal is during spring (March–May) and autumn (September–November). These seasons offer clear skies, dry trails, and comfortable weather for long rides and high-altitude adventures." },
    { q: "Which are the best places for mountain biking in Nepal?", a: "Top biking destinations include the Kathmandu Valley Rim Trail, Pokhara to Sarangkot route, and the Upper Mustang biking trail. Each offers stunning scenery, cultural experiences, and routes for both beginners and experts." },
    { q: "Do I need prior experience for mountain biking in Nepal?", a: "Not necessarily. Many biking routes in Nepal are beginner-friendly, especially around Kathmandu and Pokhara. However, challenging trails like Upper Mustang or Annapurna Circuit are better suited for experienced riders." },
    { q: "Is it safe to go mountain biking in Nepal?", a: "Yes, mountain biking in Nepal is safe when done with a licensed guide or tour operator. Reputable companies provide proper gear, safety equipment, and local expertise to ensure a secure and enjoyable experience." },
    { q: "How much does mountain biking in Nepal cost?", a: "The cost of mountain biking in Nepal varies from NPR 5,000 to NPR 15,000 per day, depending on the route, duration, and package. Prices usually include guide services, permits, accommodation, and bike rentals." }
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-16 lg:pt-24 font-sans selection:bg-orange-100 overflow-x-hidden text-left">
      
      {/* 1. HEADER (Structured like image_0.png) */}
      <section className="px-5 lg:px-12 mb-8 lg:mb-12">
        <div className="max-w-7xl mx-auto border-l-4 border-emerald-600 pl-5">
          <nav className="flex items-center gap-2 text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
            <a href="/" className="hover:text-emerald-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-900 uppercase">Short Adventures</span>
          </nav>
          <h1 className="text-2xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            Mountain Biking <span className="text-emerald-600 font-serif italic normal-case tracking-normal">in Nepal</span>
          </h1>
        </div>
      </section>

      {/* 2. INTRO DESCRIPTION BOX (Scraped Text) */}
      <section className="px-4 lg:px-10 mb-12 lg:mb-20">
        <div className="max-w-7xl mx-auto bg-slate-50 p-6 lg:p-14 rounded-2xl lg:rounded-[3.5rem] shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* IMAGE COLUMN */}
              <div className="lg:col-span-5 order-1">
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[300px] lg:h-[450px]">
                    <img 
                      src={mountainBiking} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt="Biking Nepal Intro"
                    />
                    <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="lg:col-span-7 order-2 text-left">
                 <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full mb-6">
                    <Bike size={14} className="fill-emerald-600"/>
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Off-Road Expeditions</span>
                 </div>
                 <h2 className="text-xl lg:text-3xl font-black text-slate-900 mb-6 border-l-4 border-emerald-600 pl-4 uppercase tracking-tight">
                    Explore the Himalayan Trails
                 </h2>
                 <div className="space-y-4 text-slate-600 text-sm lg:text-base font-medium italic leading-relaxed">
                    <p>
                      Nepal is a paradise for adventure enthusiasts, and mountain biking in Nepal offers one of the most exciting ways to explore its stunning landscapes. From ancient valleys and terraced hills to rugged Himalayan trails, biking through Nepal combines adrenaline, culture, and breathtaking scenery. Whether you're pedaling past traditional villages or conquering off-road mountain routes, every ride here promises an unforgettable experience.
                    </p>
                    <p>
                      Cycling through Nepal allows travelers to witness the country's natural and cultural beauty up close — a perfect blend of challenge and exploration. Riders can enjoy trails suitable for beginners as well as extreme routes for professionals, all surrounded by the majestic Himalayas.
                    </p>
                 </div>
                 <div className="mt-8 flex items-center gap-6 border-t border-slate-200 pt-8">
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Terrain Type</p>
                       <p className="text-xl font-black text-slate-900 tracking-tighter">Himalayan Singletrack</p>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Difficulty</p>
                       <p className="text-xl font-black text-slate-900 tracking-tighter">Moderate - Technical</p>
                    </div>
                 </div>
              </div>
            </div>
        </div>
      </section>

      {/* 3. DESTINATIONS GRID (Text from image_2.png) */}
      <section className="py-12 lg:py-16 bg-white px-5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">Top Biking Destinations</h2>
          <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em]">Curated Off-road routes & trails</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {bikingDestinations.map((site, i) => (
            <div key={i} className="group bg-white rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
              <div className="h-[200px] lg:h-[240px] relative overflow-hidden">
                <img src={site.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={site.name} />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-lg text-[8px] lg:text-[10px] font-black uppercase tracking-widest shadow-lg leading-none">{site.difficulty}</span>
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
                
                {/* BUTTON: Preserved your required color logic (slate-900 to orange-600) */}
                <button className="w-full bg-slate-900 hover:bg-orange-600 text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-black text-[9px] lg:text-[10px] tracking-widest transition-all duration-300 uppercase shadow-lg">
                  Book Now <ChevronRight size={14} className="inline ml-1"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEASON GUIDE (Scraped Text) */}
      <section className="py-16 lg:py-24 bg-slate-50 px-5">
         <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-xl lg:text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Best Time To Visit</h2>
            <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em] mt-2 text-center">Seasonal Guide for Off-road Adventures</p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {seasons.map((season, i) => (
              <div key={i} className={`p-6 lg:p-10 rounded-2xl lg:rounded-[2.5rem] border ${season.color} text-left transition-transform hover:scale-[1.02]`}>
                 <div className="flex items-center gap-3 mb-1">
                     {season.icon}
                     <h4 className="text-base lg:text-lg font-black text-slate-900 uppercase">{season.name}</h4>
                 </div>
                 <p className="text-[8px] lg:text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-4 leading-none">{season.months}</p>
                 <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic leading-relaxed">{season.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 5. FAQ SECTION (Scraped Text) */}
      <section className="py-16 lg:py-24 bg-white px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle size={32} className="mx-auto text-emerald-600 mb-4"/>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase">Common Questions</h2>
            <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest mt-2 text-center">Safety & Prep for Off-road Day Trips</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden text-left">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                  className="w-full p-5 lg:p-6 flex items-center justify-between transition-colors hover:bg-slate-100"
                >
                  <span className="text-[11px] lg:text-base font-black uppercase text-slate-800 text-left">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} size={18}/>
                </button>
                {activeFaq === i && (
                   <p className="px-5 lg:px-6 pb-6 text-slate-500 text-[10px] lg:text-sm font-medium leading-relaxed italic border-t border-slate-200/50 pt-4">
                     {faq.a}
                   </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (Structures like image_0.png) */}
      <section className="py-16 lg:py-24 px-5 text-center">
        <div className="max-w-5xl mx-auto bg-slate-900 p-10 lg:p-20 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 blur-[120px] opacity-20"></div>
           <Bike className="mx-auto mb-6 text-emerald-400" size={40}/>
           <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase italic tracking-tighter">Ready for the <span className="text-emerald-500">Ultimate Ride?</span></h2>
           <p className="text-slate-400 text-xs lg:text-base mb-10 opacity-90 max-w-xl mx-auto italic leading-relaxed">
             "Biking in Nepal is a daring and unforgettable experience that blends excitement with Himalayan beauty. Rent your bike and leap into the extraordinary!"
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

export default MountainBikingInNepalPage;