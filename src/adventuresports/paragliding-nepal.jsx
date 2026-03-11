// import React, { useState } from 'react';
// import Paraglidinginnepal from "../images/Paragliding-in-nepal.webp"
// import Annapurna from "../images/Annapurna.jpeg"
// import { 
//   Mountain, Clock, ShieldCheck, 
//   ChevronRight, ArrowUpRight, CheckCircle,
//   Wind, UserCheck, Calendar, HelpCircle,
//   ChevronDown, Zap
// } from 'lucide-react';

// const ResponsiveParaglidingNepal = () => {
//   const [activeFaq, setActiveFaq] = useState(0);

//   const activityStats = [
//     { label: "Age Limit", value: "5-60 Years", icon: <UserCheck className="text-orange-500" size={18}/> },
//     { label: "Weight", value: "25-90 Kg", icon: <ShieldCheck className="text-orange-500" size={18}/> },
//     { label: "Best Months", value: "Sept - Dec", icon: <Calendar className="text-orange-500" size={18}/> },
//     { label: "Duration", value: "20-60 Min", icon: <Clock className="text-orange-500" size={18}/> }
//   ];

//   const faqs = [
//     { 
//       q: "What is the best time for paragliding in Nepal?", 
//       a: "The best time for paragliding in Nepal is from September to December and February to May. During these months, the skies are clear, winds are stable, and visibility is perfect for breathtaking mountain views." 
//     },
//     { 
//       q: "Is paragliding in Nepal safe?", 
//       a: "Yes, paragliding in Nepal is very safe when done with certified pilots and registered operators. Popular destinations like Pokhara follow strict international safety standards, ensuring a smooth and secure flight experience." 
//     },
//     { 
//       q: "Can children go paragliding in Nepal?", 
//       a: "Children above 5 years of age can enjoy tandem paragliding under professional supervision. For safety, the child’s weight and weather conditions are always considered before the flight." 
//     },
//     {
//         q:"Where is the best place for paragliding in Nepal?",
//         a:"The most famous spot for paragliding in Nepal is Pokhara, especially Sarangkot Hill, offering panoramic views of the Annapurna range, Fewa Lake, and lush valleys below."
//     },
//     {
//         q:"How long does a paragliding flight last in Nepal?",
//         a:"A standard paragliding flight in Pokhara lasts around 20 to 30 minutes, while cross-country flights can go up to 60 minutes, depending on weather and package type."
//     }
//   ];

//   return (
//     <div className="bg-[#FDFDFD] min-h-screen pt-20 lg:pt-28 font-sans selection:bg-orange-100">
      
//       {/* 1. REFINED HEADER - MOBILE FRIENDLY */}
//       <section className="px-5 lg:px-12 mb-8">
//         <div className="max-w-7xl mx-auto border-l-4 border-orange-600 pl-5">
//           <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
//             <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
//             <span>/</span>
//             <span className="text-slate-900">Adventure Sports</span>
//           </nav>
//           <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase leading-tight">
//             Paragliding <span className="text-orange-600 font-serif italic normal-case tracking-normal">in Nepal</span>
//           </h1>
//         </div>
//       </section>

//       {/* 2. CINEMATIC HERO - BALANCED TYPE */}
//       <section className="px-3 lg:px-8 mb-12 lg:mb-20">
//         <div className="max-w-7xl mx-auto relative h-[450px] lg:h-[70vh] rounded-3xl lg:rounded-[3.5rem] overflow-hidden shadow-xl group">
//           <img 
//             src={Paraglidinginnepal} 
//             className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
//             alt="Paragliding over Pokhara"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
          
//           <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-16">
//             <div className="max-w-2xl">
//                <div className="bg-orange-600/30 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full mb-4 inline-flex items-center gap-2">
//                  <Zap size={12} className="text-orange-400 fill-orange-400"/>
//                  <span className="text-white text-[9px] font-black uppercase tracking-widest">Experience the Ultimate Flight</span>
//                </div>
//                <h2 className="text-xl lg:text-4xl font-bold italic text-white leading-snug mb-8">
//                  "Fly over Pokhara's serene Phewa Lake and witness the stunning Annapurna range from above."
//                </h2>
               
//                {/* Activity Bento - Responsive Grid */}
//                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-black/40 backdrop-blur-xl p-5 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/10">
//                   {activityStats.map((stat, i) => (
//                     <div key={i} className="text-left border-l border-white/10 pl-3 first:border-0">
//                        <div className="flex items-center gap-2 mb-1">
//                          {stat.icon}
//                          <p className="text-[8px] lg:text-[10px] font-black uppercase text-slate-300 tracking-wider">{stat.label}</p>
//                        </div>
//                        <p className="text-xs lg:text-base font-black text-white">{stat.value}</p>
//                     </div>
//                   ))}
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. CONTENT GRID - MOBILE OPTIMIZED */}
//       <section className="py-12 lg:py-24 px-5 lg:px-6 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
//           <div className="order-2 lg:order-1">
//             <h3 className="text-2xl lg:text-4xl font-black text-slate-900 mb-6 lg:mb-8 tracking-tight uppercase">
//               The Best Way to <br/><span className="text-orange-600">See Nepal from the Skies</span>
//             </h3>
//             <p className="text-slate-600 text-sm lg:text-base font-medium italic leading-relaxed mb-8 border-l-4 border-orange-100 pl-5">
//               Experience paragliding in Nepal where breathtaking mountain views meet heart-racing excitement. Witness the Annapurna range from a unique perspective in a safe, scenic environment.
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                {["Certified Pilots", "Standard Safety Gear", "GoPro Photography", "Lakeside Transfers"].map((item, i) => (
//                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
//                     <CheckCircle className="text-orange-600" size={18}/>
//                     <span className="text-[10px] font-bold uppercase text-slate-700 tracking-wide">{item}</span>
//                  </div>
//                ))}
//             </div>
//           </div>

//           <div className="order-1 lg:order-2">
//              <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-lg h-[250px] lg:h-[450px]">
//                 <img 
//                   src= {Annapurna} 
//                   className="w-full h-full object-cover" 
//                   alt="Nepal Views" 
//                 />
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. MODERN FAQ - CLEANER ACCORDION */}
//       <section className="py-16 lg:py-24 bg-slate-50 px-5">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight uppercase">Common Questions</h2>
//             <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest mt-2">Essential flyer knowledge</p>
//           </div>

//           <div className="space-y-3">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
//                 <button 
//                   onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
//                   className="w-full p-5 lg:p-6 flex items-center justify-between text-left"
//                 >
//                   <span className="text-xs lg:text-base font-black uppercase text-slate-800">{faq.q}</span>
//                   <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} size={18}/>
//                 </button>
//                 {activeFaq === i && (
//                    <p className="px-5 lg:px-6 pb-6 text-slate-500 text-xs lg:text-sm font-medium leading-relaxed italic">
//                      {faq.a}
//                    </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. CALL TO ACTION - OPPOSITE HOVER LOGIC */}
//       <section className="py-16 lg:py-24 px-5 text-center">
//         <div className="max-w-5xl mx-auto bg-slate-900 p-10 lg:p-20 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-xl">
//            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 blur-[120px] opacity-20"></div>
//            <h2 className="text-2xl lg:text-5xl font-black mb-6 uppercase italic">Ready to <span className="text-orange-500">Take Flight?</span></h2>
//            <p className="text-slate-400 text-xs lg:text-base mb-10 opacity-90 max-w-xl mx-auto italic">
//              "Safe, scenic, and unforgettable — it's the best way to see Nepal from the skies."
//            </p>
           
//            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
//               {/* WHITE TO ORANGE HOVER */}
//               <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-10 py-4 lg:px-14 lg:py-5 rounded-2xl font-black text-[10px] tracking-widest transition-all duration-300 hover:scale-105 shadow-xl uppercase border-2 border-transparent">
//                  Book Now: +91 8576000084
//               </a>
//               <div className="text-center sm:text-left">
//                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1 leading-none">Nepal Tour & Travels</p>
//                  <p className="font-bold text-xs text-slate-300 italic">Trusted Experts</p>
//               </div>
//            </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ResponsiveParaglidingNepal;






































import React from 'react';
import { 
  MapPin, Calendar, Search, ArrowRight, 
  PlayCircle, Star, Shield, Compass 
} from 'lucide-react';

const PremiumShowcase = () => {
  return (
    <div className="font-sans bg-[#f4f7f6] min-h-screen pb-20">
      
      {/* --- 1. GLASSMORPHISM HERO SECTION --- */}
      <div className="relative w-full h-[90vh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem] shadow-2xl">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Nepal Himalayas" 
            className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 via-black/20 to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-[-5%]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span>Award Winning Nepal Travel Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            Discover The <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Unseen Nepal
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            From the mystical streets of Kathmandu to the breathtaking heights of Everest. Craft your perfect Himalayan escape with our local experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-[0_10px_30px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-1 flex items-center group">
              Explore Packages 
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all hover:-translate-y-1 flex items-center">
              <PlayCircle size={20} className="mr-2" /> Watch Video
            </button>
          </div>
        </div>

        {/* Floating Search Bar (Glassmorphism) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 hidden md:flex items-center shadow-2xl">
          <div className="flex-1 flex items-center px-6 py-2 border-r border-white/20">
            <MapPin className="text-orange-400 mr-3" size={24} />
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-300 font-medium">Destination</span>
              <input type="text" placeholder="Where to?" className="bg-transparent border-none text-white placeholder-gray-400 outline-none font-bold" />
            </div>
          </div>
          <div className="flex-1 flex items-center px-6 py-2 border-r border-white/20">
            <Calendar className="text-orange-400 mr-3" size={24} />
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-300 font-medium">Date</span>
              <input type="text" placeholder="Select Month" className="bg-transparent border-none text-white placeholder-gray-400 outline-none font-bold" />
            </div>
          </div>
          <button className="w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white ml-2 transition-colors shrink-0">
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* --- 2. BENTO GRID SECTION (Modern Layout) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Signature Experiences</h2>
            <p className="text-gray-500 font-medium">Curated adventures handpicked by our travel experts.</p>
          </div>
          <button className="hidden md:flex items-center text-orange-500 font-bold hover:text-orange-600 group">
            View All <ArrowRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* The Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-[800px] md:h-[600px]">
          
          {/* Card 1: Big Feature (Spans 2 columns and 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Trekking" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 p-8 w-full">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4">
                <Compass size={24} />
              </div>
              <h3 className="text-3xl font-black text-white mb-2">Himalayan Treks</h3>
              <p className="text-gray-300 mb-4 line-clamp-2">Conquer the trails of Everest Base Camp, Annapurna, and Mustang with our expert Sherpa guides.</p>
              <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">12 Packages</span>
            </div>
          </div>

          {/* Card 2: Medium Top */}
          <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1610423018151-61014e7aebaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Wildlife" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-6 w-full flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Jungle Safari</h3>
                <p className="text-gray-300 text-sm">Chitwan National Park</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>

          {/* Card 3: Small Bottom Left */}
          <div className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1571295744883-9b8830182606?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Spiritual" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 p-5 w-full">
              <h3 className="text-xl font-bold text-white mb-1">Spiritual</h3>
              <p className="text-gray-300 text-xs">Lumbini & Muktinath</p>
            </div>
          </div>

          {/* Card 4: Small Bottom Right */}
          <div className="md:col-span-1 md:row-span-1 bg-indigo-950 rounded-3xl p-6 relative overflow-hidden group cursor-pointer shadow-lg flex flex-col justify-between">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
            
            <div className="relative z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange-400 mb-4">
              <Shield size={24} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Safe & Secure</h3>
              <p className="text-indigo-200 text-sm leading-relaxed mb-4">Travel with 100% peace of mind. We handle everything from borders to hotels.</p>
              <span className="text-orange-400 text-sm font-bold flex items-center group-hover:text-white transition-colors">
                Learn More <ArrowRight size={16} className="ml-1" />
              </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default PremiumShowcase;