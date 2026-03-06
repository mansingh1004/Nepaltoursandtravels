import React, { useState } from 'react';
import caption from "../images/caption.jpg"
import { 
  Mountain, Clock, ShieldCheck, Star, 
  ChevronRight, ArrowUpRight, CheckCircle,
  Wind, Plane, Calendar, HelpCircle,
  ChevronDown, Zap, MapPin, Award, Check
} from 'lucide-react';

const MountainFlightNepalDetailed = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const flightFacts = [
    { label: "Duration", value: "50-60 Mins", icon: <Clock className="text-orange-500" size={18}/> },
    { label: "Best Time", value: "Early Morning", icon: <Calendar className="text-orange-500" size={18}/> },
    { label: "Seating", value: "Window Seats", icon: <ShieldCheck className="text-orange-500" size={18}/> },
    { label: "Service", value: "Hotel Pickup", icon: <MapPin className="text-orange-500" size={18}/> }
  ];

  const highlights = [
    "Experience a stunning 1-hour mountain flight across Himalayas.",
    "Witness Nepal’s breathtaking beauty from high above the clouds.",
    "Enjoy a smooth and scenic aerial journey over the mountains.",
    "Fly with expert pilots and enjoy wide panoramic window views."
  ];

  const advantages = [
    "Window seats assured for every passenger.",
    "Top safety measures with skilled, experienced pilots.",
    "Quick and easy booking with no complications.",
    "Airport assistance provided for a smooth experience."
  ];

  const faqs = [
    { 
      q: "How long is the mountain flight?", 
      a: "The flight time is approximately 50–60 minutes; total tour time including pickup is ~2 hours." 
    },
    { 
      q: "When is the best time to go?", 
      a: "Early morning flights (clear skies) are best — September to April gives the most stable visibility." 
    },
    { 
      q: "Can I get a window seat?", 
      a: "We request window seats for all guests, but seat assignment is subject to the airline’s final allocation." 
    },
    { 
      q: "What happens if the flight is canceled due to weather?", 
      a: "You can reschedule or receive a full refund — we monitor weather and advise early if changes are needed." 
    },
    {
        q:"Do I need travel insurance?",
        a:"Yes — we strongly recommend personal travel insurance covering flight cancellations and health."
    }
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-20 lg:pt-28 font-sans selection:bg-orange-100 overflow-x-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="px-5 lg:px-12 mb-8">
        <div className="max-w-7xl mx-auto border-l-4 border-orange-600 pl-5">
          <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
            <span>/</span>
            <span className="text-slate-900 uppercase">Adventure Sports</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            Mountain Flight <span className="text-orange-600 font-serif italic normal-case tracking-normal">in Nepal</span>
          </h1>
        </div>
      </section>

      {/* 2. CINEMATIC HERO */}
      <section className="px-3 lg:px-8 mb-12 lg:mb-20">
        <div className="max-w-7xl mx-auto relative h-[450px] lg:h-[70vh] rounded-3xl lg:rounded-[3.5rem] overflow-hidden shadow-xl group text-left">
          <img 
            src="src\images\caption.jpg" 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            alt="Himalayan Peak View"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-16">
            <div className="max-w-3xl">
               <div className="bg-orange-600/30 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full mb-4 inline-flex items-center gap-2">
                 <Zap size={12} className="text-orange-400 fill-orange-400"/>
                 <span className="text-white text-[9px] font-black uppercase tracking-widest">Scenic Everest Flight</span>
               </div>
               <h2 className="text-xl lg:text-4xl font-bold italic text-white leading-snug mb-8">
                 "Experience Nepal's Himalayas like never before with a one-hour panoramic flight from Kathmandu."
               </h2>
               
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-black/40 backdrop-blur-xl p-5 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/10">
                  {flightFacts.map((fact, i) => (
                    <div key={i} className="text-left border-l border-white/10 pl-3 first:border-0">
                       <div className="flex items-center gap-2 mb-1">
                         {fact.icon}
                         <p className="text-[8px] lg:text-[10px] font-black uppercase text-slate-300 tracking-wider">{fact.label}</p>
                       </div>
                       <p className="text-xs lg:text-base font-black text-white">{fact.value}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW: HIGHLIGHTS & ADVANTAGES BENTO GRID */}
      <section className="py-12 lg:py-16 px-5 lg:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 text-left">
        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-center group hover:border-orange-200 transition-all">
          <div className="flex items-center gap-4 mb-8">
             <div className="bg-orange-600 p-3 rounded-2xl text-white shadow-lg shadow-orange-900/10">
                <Star size={24} fill="white"/>
             </div>
             <h2 className="text-xl lg:text-3xl font-black text-slate-900 uppercase tracking-tighter">Tour Highlights</h2>
          </div>
          <ul className="space-y-5">
            {highlights.map((item, i) => (
              <li key={i} className="flex gap-4 text-xs lg:text-base text-slate-600 font-bold italic leading-relaxed items-start">
                <CheckCircle size={20} className="text-orange-600 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 blur-[100px] opacity-20"></div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
             <div className="bg-white p-3 rounded-2xl text-slate-900 shadow-xl">
                <Award size={24}/>
             </div>
             <h2 className="text-xl lg:text-3xl font-black uppercase tracking-tighter italic">Booking Advantages</h2>
          </div>
          <ul className="space-y-5 relative z-10">
            {advantages.map((item, i) => (
              <li key={i} className="flex gap-4 text-xs lg:text-base opacity-90 font-bold italic leading-relaxed items-start">
                <ShieldCheck size={20} className="text-orange-500 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. CORE CONTENT DESCRIPTION */}
      <section className="py-12 lg:py-24 px-5 lg:px-6 max-w-7xl mx-auto text-left">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl lg:text-4xl font-black text-slate-900 mb-6 lg:mb-8 tracking-tight uppercase">
              Aerial Views of the <br/><span className="text-orange-600">World's Highest Peaks</span>
            </h3>
            <p className="text-slate-600 text-sm lg:text-base font-medium italic leading-relaxed mb-8 border-l-4 border-orange-100 pl-5">
              Enjoy unforgettable aerial sights of Mount Everest, Lhotse, Makalu, and more. It's an ideal choice for photographers seeking the best scenic views in Nepal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {["50-60 Min Duration", "Guaranteed Seating", "Airport Assistance", "Professional Crew"].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm group hover:border-orange-600 transition-colors">
                    <div className="bg-orange-50 p-1.5 rounded-lg text-orange-600 group-hover:bg-orange-600 group-hover:text-white">
                       <Check size={16}/>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-slate-700 tracking-wide">{item}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
             <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-lg h-[250px] lg:h-[450px]">
                <img 
                  src="src\images\caption.jpg" 
                  className="w-full h-full object-cover" 
                  alt="Nepal Peaks" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ ACCORDION */}
      <section className="py-16 lg:py-24 bg-slate-50 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase italic">Flight Intelligence</h2>
            <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest mt-2">Essential knowledge for travelers</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden text-left">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                  className="w-full p-5 lg:p-6 flex items-center justify-between transition-colors hover:bg-slate-50"
                >
                  <span className="text-xs lg:text-base font-black uppercase text-slate-800">{faq.q}</span>
                  <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-orange-600' : 'text-slate-400'}`} size={18}/>
                </button>
                {activeFaq === i && (
                   <p className="px-5 lg:px-6 pb-6 text-slate-500 text-xs lg:text-sm font-medium leading-relaxed italic border-t border-slate-50 pt-4">
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
           <Plane className="mx-auto mb-6 text-orange-400" size={40}/>
           <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase italic tracking-tighter leading-none">Witness Everest <br/><span className="text-orange-500">From the Clouds</span></h2>
           <p className="text-slate-400 text-xs lg:text-base mb-10 opacity-90 max-w-xl mx-auto italic leading-relaxed">
             "For bookings or inquiries, contact us 24/7! Fast, convenient, and perfect for all travelers."
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-10 py-4 lg:px-14 lg:py-5 rounded-2xl font-black text-[10px] tracking-widest transition-all duration-300 hover:scale-105 shadow-xl uppercase border-2 border-transparent">
                 Book Flight: +91 8576000084
              </a>
              <div className="text-center sm:text-left">
                 <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1 leading-none">Nepal Tour & Travels</p>
                 <p className="font-bold text-xs text-slate-300 italic">Trusted Experts since 1999</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default MountainFlightNepalDetailed;