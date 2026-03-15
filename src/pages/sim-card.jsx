import React, { useState, useRef } from 'react';
import simcardpagebanner from "../images/simcardpagebanner.jpg"
import Ncell_Logo from "../images/Ncell_Logo.svg.png"
import Nepal_Telecom_logo from "../images/Nepal_Telecom_logo.jfif"
import emailjs from '@emailjs/browser';
import { 
  Wifi, ShieldCheck, Smartphone, HelpCircle, 
  CheckCircle2, User, Send, Info, Globe, Zap, 
  ThumbsUp, Eye, X, FileText, Fingerprint, Camera, 
  Signal, CreditCard, MapPin, MessageCircle, Landmark 
} from 'lucide-react';

const NepalSimCard = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showDocsModal, setShowDocsModal] = useState(false);
  
  // --- NEW STATE FOR BUTTON FUNCTIONALITY ---
  const [selectedOp, setSelectedOp] = useState(""); 
  const form = useRef();

  // --- NEW FUNCTION TO HANDLE BUTTON CLICK ---
  const handleRequestClick = (operatorName) => {
    setSelectedOp(operatorName); // Set the dropdown value
    const formSection = document.getElementById('inquiry-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to form
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setIsSubmitted(true);
          setIsSending(false);
      }, (error) => {
          alert("Failed to send. Please use WhatsApp.");
          setIsSending(false);
      });
  };

  const operators = [
    { 
      name: "Ncell", 
      logo: Ncell_Logo,
      bestFor: "High-speed 4G Data",
      coverage: "Excellent in Cities & Trekking trails",
      color: "border-purple-500",
      tag: "Tourist Favorite"
    },
    { 
      name: "Nepal Telecom (NTC)", 
      logo: Nepal_Telecom_logo,
      bestFor: "Wide Network Coverage",
      coverage: "Best in Remote Rural Areas",
      color: "border-blue-500",
      tag: "Reliable Government Provider"
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans overflow-x-hidden relative">
      
      {/* --- FLOATING WHATSAPP SUPPORT --- */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <a 
          href="https://wa.me/918576000084?text=Hi, I need assistance with a Nepal SIM Card." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:scale-110 transition-all"
        >
          <MessageCircle size={32} />
        </a>
      </div>

      {/* --- HERO BANNER SECTION --- */}
      <div className="relative w-full h-[350px] md:h-[500px] flex items-center overflow-hidden">
        <img 
          src={simcardpagebanner} 
          alt="Nepal SIM Card Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003580]/90 via-[#003580]/60 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[#ffb700] text-[#003580] px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 shadow-xl">
            <Signal size={14} fill="currentColor" /> Stay Connected in Nepal
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight uppercase italic">
            Nepal SIM <br/> <span className="text-[#ffb700] not-italic">For Tourists.</span>
          </h1>
          <p className="text-blue-50 text-sm md:text-xl max-w-xl font-medium leading-relaxed opacity-90 border-l-4 border-[#ffb700] pl-4">
            Don't pay heavy roaming charges. Get a local 4G Nepal SIM card instantly with high-speed data for your Yatra or Trek.
          </p>
        </div>
      </div>

      {/* --- QUICK ACTION SECTION --- */}
      <div className="max-w-[1200px] mx-auto px-4 -mt-12 md:-mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100">
            <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner">
                    <Wifi size={32} />
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl font-black text-[#003580] uppercase tracking-tighter">Instant SIM Activation</h2>
                    <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">Available at Kathmandu Airport & Sonauli Border</p>
                </div>
            </div>
            <button 
                onClick={() => setShowDocsModal(true)}
                className="w-full md:w-auto bg-[#003580] hover:bg-[#ffb700] hover:text-[#003580] text-white font-black py-4 px-10 rounded-2xl shadow-xl transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3"
            >
                <FileText size={18} /> Required Documents
            </button>
        </div>
      </div>

      {/* --- OPERATOR COMPARISON SECTION --- */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#003580] uppercase tracking-tighter">Choose Your Network</h2>
            <div className="w-24 h-2 bg-[#ffb700] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {operators.map((op, i) => (
                <div key={i} className={`bg-white rounded-[40px] border-t-8 ${op.color} p-8 md:p-12 shadow-sm hover:shadow-2xl transition-all group`}>
                    <img src={op.logo} className="h-12 md:h-16 object-contain mb-8 grayscale group-hover:grayscale-0 transition-all" alt={op.name} />
                    <div className="inline-block bg-gray-50 text-gray-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">{op.tag}</div>
                    <h3 className="text-2xl font-black text-[#003580] uppercase mb-6">{op.name}</h3>
                    
                    <div className="space-y-4 mb-10">
                        <div className="flex gap-4"><CheckCircle2 className="text-green-500 shrink-0" size={20} /> <p className="text-sm font-bold text-gray-600"><span className="text-[#003580]">Best For:</span> {op.bestFor}</p></div>
                        <div className="flex gap-4"><Globe className="text-blue-500 shrink-0" size={20} /> <p className="text-sm font-bold text-gray-600"><span className="text-[#003580]">Coverage:</span> {op.coverage}</p></div>
                    </div>

                    {/* --- UPDATED BUTTON ACTION --- */}
                    <button 
                      onClick={() => handleRequestClick(op.name === "Ncell" ? "Ncell" : "NTC")}
                      className="w-full py-4 border-2 border-gray-100 rounded-2xl font-black text-[#003580] uppercase text-xs tracking-widest hover:bg-[#003580] hover:text-white transition-all"
                    >
                      Request eSIM / Physical SIM
                    </button>
                </div>
            ))}
        </div>
      </div>

      {/* --- HOW IT WORKS (STEP BY STEP) --- */}
      <div className="bg-[#003580] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 -mr-48 -mt-48"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">How to get your SIM</h2>
                <p className="text-blue-200 mt-4 font-medium">Simple 3-step process for international travelers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { step: "01", title: "Visit Counter", desc: "Visit our office in Gorakhpur ." },
                    { step: "02", title: "Verify ID", desc: "Submit a copy of your Aadhar Card or Passport and 1 Passport size photograph." },
                    { step: "03", title: "Ready to Use", desc: "Our agent will register the SIM for you. Usually gets activated within 10-30 minutes." }
                ].map((item, i) => (
                    <div key={i} className="relative group">
                        <div className="text-7xl font-black text-white/10 absolute -top-8 -left-4 group-hover:text-[#ffb700]/20 transition-colors">{item.step}</div>
                        <h3 className="text-xl font-black text-[#ffb700] uppercase mb-4 relative z-10">{item.title}</h3>
                        <p className="text-blue-100 text-sm leading-relaxed relative z-10">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* --- INQUIRY FORM SECTION (ID ADDED HERE) --- */}
      <div id="inquiry-form" className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="bg-white rounded-[50px] shadow-2xl border border-gray-50 flex flex-col lg:flex-row overflow-hidden">
              <div className="lg:w-1/2 p-8 md:p-16 bg-[#f8fafc]">
                  <h2 className="text-3xl md:text-4xl font-black text-[#003580] uppercase tracking-tighter mb-6">Need a SIM <br/> Before you arrive?</h2>
                  <p className="text-gray-500 font-medium mb-10 leading-relaxed">Fill out the form below to book your Nepal SIM Card or eSIM. Our specialists will help you with the pre-activation process to ensure you have internet as soon as you cross the border.</p>
                  
                  <div className="space-y-6">
                      <div className="flex gap-4 items-center">
                          <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600"><Smartphone size={20}/></div>
                          <p className="font-black text-[#003580] uppercase text-xs">eSIM Support Available</p>
                      </div>
                      <div className="flex gap-4 items-center">
                          <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600"><Zap size={20}/></div>
                          <p className="font-black text-[#003580] uppercase text-xs">Pre-registered for Border Pickup</p>
                      </div>
                  </div>
              </div>

              <div className="lg:w-1/2 p-8 md:p-16">
                {!isSubmitted ? (
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border-b-2 border-gray-100 focus-within:border-[#ffb700] transition-all">
                                <input name="user_name" required type="text" placeholder="Your Name" className="w-full py-3 outline-none bg-transparent font-bold text-sm" />
                            </div>
                            <div className="border-b-2 border-gray-100 focus-within:border-[#ffb700] transition-all">
                                <input name="user_whatsapp" required type="tel" placeholder="WhatsApp Number" className="w-full py-3 outline-none bg-transparent font-bold text-sm" />
                            </div>
                        </div>
                        <div className="border-b-2 border-gray-100 focus-within:border-[#ffb700] transition-all">
                            {/* --- SELECT DROPDOWN UPDATED WITH VALUE --- */}
                            <select 
                              name="operator_preference" 
                              required 
                              value={selectedOp} 
                              onChange={(e) => setSelectedOp(e.target.value)}
                              className="w-full py-3 outline-none bg-transparent font-bold text-sm text-gray-500 appearance-none"
                            >
                                <option value="" disabled>Select Preferred Operator</option>
                                <option value="Ncell">Ncell (Best for 4G)</option>
                                <option value="NTC">NTC (Best for Remote Area)</option>
                                <option value="Expert Suggestion">Unsure (Expert Suggestion)</option>
                            </select>
                        </div>
                        <textarea name="message" rows="3" placeholder="Travel Date & Any specific data requirements..." className="w-full bg-gray-50 rounded-2xl p-4 outline-none border border-gray-100 focus:border-[#003580] text-sm"></textarea>
                        <button 
                          type="submit" 
                          disabled={isSending}
                          className="w-full bg-[#ffb700] text-[#003580] disabled:bg-gray-200 font-black py-5 rounded-2xl shadow-xl uppercase tracking-[0.2em] text-xs hover:bg-[#003580] hover:text-white transition-all"
                        >
                          {isSending ? "Sending..." : "Submit Request"}
                        </button>
                    </form>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fadeIn">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner rotate-12">
                            <ThumbsUp size={40} />
                        </div>
                        <h3 className="text-3xl font-black text-[#003580] uppercase tracking-tighter">Perfect!</h3>
                        <p className="text-gray-500 mt-2 font-medium">Our Nepal specialist will contact you on <span className="text-[#006ce4] font-black underline">WhatsApp</span> shortly.</p>
                        <button onClick={() => setIsSubmitted(false)} className="mt-8 text-xs font-black text-gray-400 border-b border-gray-200 uppercase tracking-widest">Send another query</button>
                    </div>
                )}
              </div>
          </div>
      </div>

      {/* --- IMPORTANT TIPS --- */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
              <h2 className="text-3xl font-black text-[#003580] uppercase tracking-tighter mb-8">Important SIM Tips</h2>
              <div className="space-y-4">
                  <div className="flex gap-4 p-6 bg-white rounded-3xl shadow-sm border-l-4 border-[#ffb700]">
                      <Info className="text-[#ffb700] shrink-0" />
                      <div className="text-sm text-gray-700 font-medium leading-relaxed">
                          <strong>Registration:</strong> According to Nepal Law, you must provide fingerprints and a photo at the time of SIM purchase for biometrics.
                      </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-white rounded-3xl shadow-sm border-l-4 border-[#003580]">
                      <Landmark className="text-blue-500 shrink-0" />
                      <div className="text-sm text-gray-700 font-medium leading-relaxed">
                          <strong>Indian Numbers:</strong> While international roaming works, it is very expensive. A local SIM is almost always cheaper (approx NPR 100 for SIM).
                      </div>
                  </div>
              </div>
          </div>
          <div className="order-1 md:order-2 relative">
             <img src={simcardpagebanner} className="rounded-[40px] shadow-2xl" alt="Connected in Nepal" />
             <div className="absolute -bottom-6 -left-6 bg-[#ffb700] p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-[#003580] font-black text-4xl italic">4G LTE</p>
                <p className="text-[#003580] font-bold text-xs uppercase tracking-widest">Network Speed</p>
             </div>
          </div>
      </div>

      {/* --- DOCUMENTS MODAL --- */}
      {showDocsModal && (
        <div className="fixed inset-0 bg-black/80 z-[110] flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn">
          <div className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden relative border border-gray-100 flex flex-col max-h-[90vh]">
            <button onClick={() => setShowDocsModal(false)} className="absolute top-6 right-6 z-20 bg-gray-100 p-2 rounded-full hover:text-red-600 transition-all text-gray-500"><X size={24} /></button>
            <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar text-left">
               <h2 className="text-2xl md:text-3xl font-black text-[#003580] uppercase tracking-tighter mb-8 leading-tight">Identity <br/>Requirements</h2>
               <div className="grid grid-cols-1 gap-4 mb-8">
                 {[
                    { icon: <Fingerprint className="text-blue-600" />, title: "Original Photo ID", desc: "Aadhar Card (Indians) or Passport" },
                    { icon: <Camera className="text-blue-600" />, title: "Photograph", desc: "1 Passport-size color photo" },
                    { icon: <Globe className="text-blue-600" />, title: "Border Registration", desc: "Proof of border entry stamp" }
                 ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-3xl border border-gray-100">
                        <div className="p-2 bg-white rounded-xl shadow-sm">{doc.icon}</div>
                        <div>
                          <p className="font-black text-[#003580] text-sm uppercase leading-none">{doc.title}</p>
                          <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-tighter">{doc.desc}</p>
                        </div>
                    </div>
                 ))}
               </div>
               <button onClick={() => setShowDocsModal(false)} className="w-full mt-10 bg-[#003580] text-white font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs shadow-xl">Understood, Close</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default NepalSimCard;