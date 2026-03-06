import React, { useState } from 'react';
import TheLastResort from "../images/Bungee-Jumping-at-The-Last-Resort.jpg"
import KushmaBungee from "../images/caption (1).jpg"
import PokharaBungee from "../images/Bungee-jump.jpg"
import Bungeejumping from "../images/Bungee jumping.jpeg"

import { 
  Mountain, Clock, ShieldCheck, Star, 
  ChevronRight, ArrowUpRight, CheckCircle,
  Wind, Zap, HelpCircle, ChevronDown, 
  MapPin, Camera, Award, Waves, HeartPulse
} from 'lucide-react';

const BungeeJumpingNepal = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const jumpSites = [
    { 
      name: "The Last Resort", 
      height: "160 Meters", 
      desc: "Suspended 160 meters above the wild Bhote Koshi River near the Tibetan border. Nepal's original and most iconic natural jump site.", 
      img: TheLastResort,
      tag: "Highest Natural"
    },
    { 
      name: "Kushma Bungee", 
      height: "228 Meters", 
      desc: "Experience the world's second-highest bungee jump over the jaw-dropping Kali Gandaki Gorge surrounded by epic Himalayan views.", 
      img: KushmaBungee ,
      tag: "World Rank #2"
    },
    { 
      name: "Pokhara Bungee", 
      height: "Scenic Dive", 
      desc: "Leap above the stunning Phewa Lake with breathtaking views of the Annapurna range. Perfect for first-timers seeking scenic beauty.", 
      img: PokharaBungee,
      tag: "Scenic Thrill"
    }
  ];

  const seasons = [
    { name: "Spring", months: "March – May", desc: "Ideal time with clear skies, mild weather, and vibrant surroundings. Perfect for all sites.", color: "bg-orange-50 border-orange-100" },
    { name: "Autumn", months: "Sept – Nov", desc: "Best season with stable weather and crystal visibility. Enjoy jumps amid golden landscapes.", color: "bg-blue-50 border-blue-100" },
    { name: "Monsoon", months: "June – Aug", desc: "Sites remain open but expect rain. Great time for lush greenery and fewer crowds.", color: "bg-slate-50 border-slate-100" },
    { name: "Winter", months: "Dec – Feb", desc: "Cool temperatures and clear mountain views create dramatic backdrops for experienced jumpers.", color: "bg-orange-50 border-orange-100" }
  ];

  const faqs = [
    { q: "What is the best time for bungee jumping in Nepal?", a: "The best time is during spring (March–May) and autumn (September–November) when the weather is clear, stable, and ideal for outdoor adventures." },
    { q: "Which are the best places for bungee jumping?", a: "The top sites are The Last Resort (Bhote Koshi), Kushma Bungee Jump (world's 2nd highest), and Pokhara Bungee Jump." },
    { q: "Is bungee jumping in Nepal safe?", a: "Yes, bungee jumping in Nepal is very safe when done with licensed operators. All major sites follow international safety standards." },
    { q: "How much does bungee jumping cost in Nepal?", a: "The average bungee jumping price in Nepal ranges from NPR 7,000 to NPR 12,000 per jump, depending on the location." },
    { q: "Can beginners try bungee jumping in Nepal?", a: "Absolutely! Bungee jumping in Nepal is open to both beginners and experienced jumpers. Professional instructors guide you through every step." }
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-16 lg:pt-24 font-sans selection:bg-orange-100 overflow-x-hidden text-left">
      
      {/* 1. REFINED HEADER */}
      <section className="px-5 lg:px-12 mb-8 lg:mb-12">
        <div className="max-w-7xl mx-auto border-l-4 border-orange-600 pl-5">
          <nav className="flex items-center gap-2 text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
            <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-900 uppercase">Adventure Sports</span>
          </nav>
          <h1 className="text-2xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            Bungee Jumping <span className="text-orange-600 font-serif italic normal-case tracking-normal">in Nepal</span>
          </h1>
        </div>
      </section>

      {/* 2. INTRO DESCRIPTION BOX - UPDATED LAYOUT (IMAGE LEFT, CONTENT RIGHT) */}
      <section className="px-4 lg:px-10 mb-12 lg:mb-20">
        <div className="max-w-7xl mx-auto bg-slate-50 p-6 lg:p-14 rounded-2xl lg:rounded-[3.5rem] shadow-sm border border-slate-100">
           <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* IMAGE COLUMN (LEFT SIDE) */}
              <div className="lg:col-span-5 order-1">
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[300px] lg:h-[450px]">
                    <img 
                      src="src\images\Bungee jumping.jpeg" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt="Bungee Jumping Experience"
                    />
                    <div className="absolute inset-0 bg-orange-600/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
              </div>

              {/* CONTENT COLUMN (RIGHT SIDE) */}
              <div className="lg:col-span-7 order-2 text-left">
                 <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full mb-6">
                    <Zap size={14} className="fill-orange-600"/>
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Elite Adventure</span>
                 </div>
                 <h2 className="text-xl lg:text-3xl font-black text-slate-900 mb-6 border-l-4 border-orange-600 pl-4 uppercase tracking-tight">
                    The Ultimate Adrenaline Rush
                 </h2>
                 <div className="space-y-4 text-slate-600 text-sm lg:text-base font-medium italic leading-relaxed">
                    <p>
                      Nepal isn't just a land of mountains — it's a playground for thrill seekers who crave the ultimate adrenaline rush. Bungee jumping in Nepal stands out as one of the most daring and unforgettable experiences.
                    </p>
                    <p>
                      Imagine leaping from dizzying heights surrounded by lush hills, deep river gorges, and the breathtaking backdrop of the Himalayas — a once-in-a-lifetime adventure that blends heart-pounding excitement with natural beauty.
                    </p>
                 </div>
                 <div className="mt-8 flex items-center gap-6 border-t border-slate-200 pt-8">
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Jump Height</p>
                       <p className="text-xl font-black text-slate-900 tracking-tighter">228m Max</p>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Safety Gear</p>
                       <p className="text-xl font-black text-slate-900 tracking-tighter">Global Std.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. JUMP SITES GRID (IMAGE TOP) */}
      <section className="py-12 lg:py-16 bg-white px-5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">Top Bungee Destinations</h2>
          <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em]">World-class thrill spots in the Himalayas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {jumpSites.map((site, i) => (
            <div key={i} className="group bg-white rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
              <div className="h-[200px] lg:h-[240px] relative overflow-hidden">
                <img src={site.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={site.name} />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-2 py-0.5 rounded-lg text-[8px] lg:text-[10px] font-black uppercase tracking-widest shadow-lg leading-none">{site.height}</span>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-black text-base lg:text-xl text-slate-800 mb-2 uppercase tracking-tight flex items-center justify-between">
                    {site.name}
                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-orange-600 transition-colors"/>
                  </h4>
                  <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic mb-6 leading-relaxed">{site.desc}</p>
                </div>
                <button className="w-full bg-slate-900 hover:bg-orange-600 text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-black text-[9px] lg:text-[10px] tracking-widest transition-all duration-300 uppercase shadow-lg">
                  Book Now <ChevronRight size={14} className="inline ml-1"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEASON GUIDE BENTO GRID */}
      <section className="py-16 lg:py-24 bg-slate-50 px-5">
         <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-xl lg:text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Best Time To Visit</h2>
            <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em] mt-2 text-center">Seasonal Guide for Bungee Adventures</p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {seasons.map((season, i) => (
              <div key={i} className={`p-6 lg:p-10 rounded-2xl lg:rounded-[2.5rem] border ${season.color} text-left transition-transform hover:scale-[1.02]`}>
                 <h4 className="text-base lg:text-lg font-black text-slate-900 uppercase mb-1">{season.name}</h4>
                 <p className="text-[8px] lg:text-[9px] font-black text-orange-600 uppercase tracking-widest mb-4 leading-none">{season.months}</p>
                 <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic leading-relaxed">{season.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 5. CLEAN FAQ ACCORDION */}
      <section className="py-16 lg:py-24 bg-white px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle size={32} className="mx-auto text-orange-600 mb-4"/>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase">Common Questions</h2>
            <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest mt-2 text-center">Essential safety & knowledge</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden text-left">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                  className="w-full p-5 lg:p-6 flex items-center justify-between transition-colors hover:bg-slate-100"
                >
                  <span className="text-[11px] lg:text-base font-black uppercase text-slate-800 text-left">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-orange-600' : 'text-slate-400'}`} size={18}/>
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

      {/* 6. CALL TO ACTION - BRANDED STYLE */}
      <section className="py-16 lg:py-24 px-5 text-center">
        <div className="max-w-5xl mx-auto bg-slate-900 p-10 lg:p-20 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 blur-[120px] opacity-20"></div>
           <Wind className="mx-auto mb-6 text-orange-400" size={40}/>
           <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase italic tracking-tighter">Ready for the <span className="text-orange-500">Ultimate Leap?</span></h2>
           <p className="text-slate-400 text-xs lg:text-base mb-10 opacity-90 max-w-xl mx-auto italic leading-relaxed">
             "Bungee jumping in Nepal is a daring and unforgettable experience that blends excitement with natural beauty. Leap into the extraordinary!"
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-8">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-8 lg:px-12 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-[9px] lg:text-[11px] tracking-widest transition-all duration-300 hover:scale-105 shadow-xl uppercase border-2 border-transparent">
                 Book Jump: +91 8576000084
              </a>
              <div className="text-center sm:text-left">
                 <p className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-slate-500 mb-0.5 leading-none">Nepal Tour & Travels</p>
                 <p className="font-bold text-[10px] lg:text-xs text-slate-300 italic leading-none">Gorakhpur HQ</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default BungeeJumpingNepal;