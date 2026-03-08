import React, { useState } from 'react';
import annupamabasecamp from "../images/annupama-base-camp.jpg"
import AnnapurnaCircuit from "../images/Annapurna-Circuit.webp"
import vally from "../images/vally.webp"
import { 
  Mountain, Clock, ShieldCheck, Star, 
  ChevronRight, ArrowUpRight, CheckCircle,
  Wind, Zap, HelpCircle, ChevronDown, 
  MapPin, Camera, Award, Waves, HeartPulse,
  Compass, Navigation, Thermometer
} from 'lucide-react';

const TrekkingInNepal = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const trekSites = [
    { 
      name: "Everest Base Camp Trek", 
      height: "5,364 Meters", 
      desc: "The Everest Base Camp Trek takes you through Sherpa villages and Himalayan trails to Mount Everest's base, offering breathtaking views and rich culture.",
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop", 
      tag: "Iconic Path"
    },
    { 
      name: "Annapurna Base Camp Trek", 
      height: "4,130 Meters", 
      desc: "The Annapurna Base Camp Trek combines scenic mountain views, Gurung villages, and serene landscapes — a perfect mix of adventure and cultural immersion in Nepal.",
      img: annupamabasecamp,
      tag: "Pure Serenity"
    },
    { 
      name: "Mustang Trek", 
      height: "3,840 Meters", 
      desc: "The Mustang Trek explores Nepal's ancient desert kingdom with Tibetan culture, colorful cliffs, and centuries-old monasteries in a unique Himalayan setting.",
      img: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2070&auto=format&fit=crop",
      tag: "Hidden Kingdom"
    },
    { 
      name: "Annapurna Circuit Trek", 
      height: "5,416 Meters", 
      desc: "The Annapurna Circuit Trek circles the Annapurna range, crossing Thorong La Pass and showcasing stunning landscapes, local culture, and diverse Himalayan terrain.",
      img: AnnapurnaCircuit,
      tag: "The Classic"
    },
    { 
      name: "Langtang Valley Trek", 
      height: "3,870 Meters", 
      desc: "The Langtang Valley Trek offers peaceful trails, Tamang culture, and mountain views close to Kathmandu — ideal for short yet scenic Himalayan adventures.",
      img: vally,
      tag: "Cultural Valley"
    },
    { 
      name: "Khopra Ridge Trek", 
      height: "3,660 Meters", 
      desc: "The Khopra Ridge Trek provides quiet trails, stunning sunrise views, and authentic local hospitality in Nepal's beautiful Annapurna region.",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      tag: "Off-Beat"
    }
  ];

  const seasons = [
    { name: "Autumn", months: "Sept – Nov", desc: "The 'Golden Season'. Crystal clear skies and stable weather provide the best mountain views. Ideal for high passes.", color: "bg-orange-50 border-orange-100" },
    { name: "Spring", months: "March – May", desc: "Nature in bloom. Giant rhododendrons color the hills. Mild temperatures make it perfect for higher altitude treks.", color: "bg-emerald-50 border-emerald-100" },
    { name: "Winter", months: "Dec – Feb", desc: "Quiet trails and crisp air. Best for lower altitude treks like Ghorepani. Expect snow and fewer crowds.", color: "bg-blue-50 border-blue-100" },
    { name: "Monsoon", months: "June – Aug", desc: "Lush greenery and waterfalls. The best time for rain-shadow areas like Upper Mustang.", color: "bg-slate-50 border-slate-100" }
  ];

  const faqs = [
    { q: "What is the best time for trekking in Nepal?", a: "The best time for trekking in Nepal is during spring (March–May) and autumn (September–November) when the weather is clear, trails are dry, and mountain views are spectacular." },
    { q: "Do I need a permit for trekking in Nepal?", a: "Yes, most treks require permits such as the TIMS Card and specific national park or conservation area permits. These can be arranged through trekking agencies in Kathmandu or Pokhara." },
    { q: "Which is the most popular trek in Nepal?", a: "The Everest Base Camp Trek and Annapurna Base Camp Trek are Nepal’s most famous trekking routes, known for stunning Himalayan scenery, local Sherpa culture, and well-marked trails." },
    { q: "Is trekking in Nepal suitable for beginners?", a: "Absolutely! Nepal offers easy to moderate treks like Langtang Valley Trek and Khopra Ridge Trek, perfect for beginners with basic fitness levels." },
    { q: "What should I pack for a trekking trip in Nepal?", a: "Pack comfortable hiking shoes, layered clothing, a down jacket, rain gear, sunscreen, water bottles, and essential medicines. Always travel light yet prepared for changing mountain weather." }
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-16 lg:pt-24 font-sans selection:bg-orange-100 overflow-x-hidden text-left">
      
      {/* 1. REFINED HEADER */}
      <section className="px-5 lg:px-12 mb-8 lg:mb-12">
        <div className="max-w-7xl mx-auto border-l-4 border-emerald-600 pl-5">
          <nav className="flex items-center gap-2 text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
            <a href="/" className="hover:text-emerald-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-900 uppercase">Himalayan Adventures</span>
          </nav>
          <h1 className="text-2xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            Trekking <span className="text-emerald-600 font-serif italic normal-case tracking-normal">in Nepal</span>
          </h1>
        </div>
      </section>

      {/* 2. INTRO DESCRIPTION BOX */}
      <section className="px-4 lg:px-10 mb-12 lg:mb-20">
        <div className="max-w-7xl mx-auto bg-slate-50 p-6 lg:p-14 rounded-2xl lg:rounded-[3.5rem] shadow-sm border border-slate-100">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* IMAGE COLUMN */}
              <div className="lg:col-span-5 order-1">
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-[300px] lg:h-[450px]">
                    <img 
                      src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt="Trekking Nepal"
                    />
                    <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="lg:col-span-7 order-2 text-left">
                 <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full mb-6">
                    <Compass size={14} className="fill-emerald-600"/>
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Elite Exploration</span>
                 </div>
                 <h2 className="text-xl lg:text-3xl font-black text-slate-900 mb-6 border-l-4 border-emerald-600 pl-4 uppercase tracking-tight">
                    A Journey Beyond the Mountains
                 </h2>
                 <div className="space-y-4 text-slate-600 text-sm lg:text-base font-medium italic leading-relaxed">
                    <p>
                      Nepal is a paradise for adventure lovers, offering some of the world's most breathtaking trails. From lush green valleys to snow-capped peaks, trekking here is more than a walk—it's a spiritual connection with nature.
                    </p>
                    <p>
                      Whether you're looking for iconic base camps or hidden ridges, our curated packages ensure a journey that blends heart-pounding exploration with genuine cultural immersion.
                    </p>
                 </div>
                 <div className="mt-8 flex items-center gap-6 border-t border-slate-200 pt-8">
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Max Altitude</p>
                       <p className="text-xl font-black text-slate-900 tracking-tighter">5,550m +</p>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 leading-none">Difficulty</p>
                       <p className="text-xl font-black text-slate-900 tracking-tighter">Easy - Alpine</p>
                    </div>
                 </div>
              </div>
            </div>
        </div>
      </section>

      {/* 3. JUMP SITES GRID (NOW 6 TREKKING PACKAGES) */}
      <section className="py-12 lg:py-16 bg-white px-5">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">Featured Trekking Routes</h2>
          <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em]">World-class trails in the Himalayas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {trekSites.map((site, i) => (
            <div key={i} className="group bg-white rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
              <div className="h-[200px] lg:h-[240px] relative overflow-hidden">
                <img src={site.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={site.name} />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-lg text-[8px] lg:text-[10px] font-black uppercase tracking-widest shadow-lg leading-none">{site.height}</span>
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
                
                {/* BUTTONS: Fixed to bg-slate-900 with hover:bg-orange-600 */}
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
            <h2 className="text-xl lg:text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Best Time To Trek</h2>
            <p className="text-slate-500 font-bold text-[9px] lg:text-xs uppercase tracking-[0.2em] mt-2 text-center">Seasonal Guide for Himalayan Adventures</p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {seasons.map((season, i) => (
              <div key={i} className={`p-6 lg:p-10 rounded-2xl lg:rounded-[2.5rem] border ${season.color} text-left transition-transform hover:scale-[1.02]`}>
                 <h4 className="text-base lg:text-lg font-black text-slate-900 uppercase mb-1">{season.name}</h4>
                 <p className="text-[8px] lg:text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-4 leading-none">{season.months}</p>
                 <p className="text-[10px] lg:text-[13px] text-slate-500 font-bold italic leading-relaxed">{season.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 5. CLEAN FAQ ACCORDION */}
      <section className="py-16 lg:py-24 bg-white px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle size={32} className="mx-auto text-emerald-600 mb-4"/>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase">Trekking Guide</h2>
            <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest mt-2 text-center">Essential mountain logistics</p>
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

      {/* 6. CALL TO ACTION - BRANDED STYLE */}
      <section className="py-16 lg:py-24 px-5 text-center">
        <div className="max-w-5xl mx-auto bg-slate-900 p-10 lg:p-20 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 blur-[120px] opacity-20"></div>
           <Mountain className="mx-auto mb-6 text-emerald-400" size={40}/>
           <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase italic tracking-tighter">Ready for the <span className="text-emerald-500">Peak?</span></h2>
           <p className="text-slate-400 text-xs lg:text-base mb-10 opacity-90 max-w-xl mx-auto italic leading-relaxed">
             "Every mountain top is within reach if you just keep climbing. Join us for a spiritual and cultural experience that connects you with the heart of Nepal."
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-5 lg:gap-8">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-8 lg:px-12 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black text-[9px] lg:text-[11px] tracking-widest transition-all duration-300 hover:scale-105 shadow-xl uppercase border-2 border-transparent">
                 Book Trek: +91 8576000084
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

export default TrekkingInNepal;