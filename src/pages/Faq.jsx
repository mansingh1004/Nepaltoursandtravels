import React, { useState } from 'react';
import { 
  Search, ChevronDown, PhoneCall, Mail, 
  HelpCircle, Map, CreditCard, FileText, Plane
} from 'lucide-react';

// --- NEPAL SPECIFIC FAQ MOCK DATA ---
const faqCategories = [
  { id: 'general', name: 'General Information', icon: <Globe size={18} /> },
  { id: 'visa', name: 'Visa & Entry', icon: <FileText size={18} /> },
  { id: 'trekking', name: 'Trekking & Adventure', icon: <Map size={18} /> },
  { id: 'payment', name: 'Booking & Payments', icon: <CreditCard size={18} /> }
];

// Dummy icon for General category (since Globe wasn't imported from lucide-react in the list above, let's use Plane or HelpCircle)
import { Globe } from 'lucide-react';

const faqData = {
  general: [
    {
      question: "When is the best time to visit Nepal?",
      answer: "The best time to visit Nepal is during the Spring (March to May) and Autumn (September to November) seasons. The weather is clear, and the mountain views are spectacular during these months."
    },
    {
      question: "Can I use Indian Rupee (INR) in Nepal?",
      answer: "Yes, Indian Rupee (INR) is widely accepted in Nepal. However, please note that Indian currency notes of ₹200, ₹500, and ₹2000 are officially not allowed. It is advisable to carry notes of ₹100 or lower denominations."
    },
    {
      question: "Is Nepal safe for family and solo female travelers?",
      answer: "Absolutely! Nepal is known for its hospitality and friendly locals. It is considered one of the safest countries in South Asia for tourists, including solo female travelers and families."
    }
  ],
  visa: [
    {
      question: "Do Indians need a Visa to enter Nepal?",
      answer: "No, Indian citizens do not require a visa to enter Nepal. You just need to carry a valid Indian Passport or a valid Voter ID card to cross the border or board a flight to Kathmandu."
    },
    {
      question: "Can I travel to Nepal with an Aadhaar Card?",
      answer: "No, Aadhaar Card, PAN Card, and Driving License are NOT accepted as valid travel documents for entering Nepal by air. Only a valid Passport or Voter ID is accepted."
    },
    {
      question: "Do children need a passport to travel to Nepal?",
      answer: "For children below 18 years, a valid Passport is recommended. If they don't have a passport, an original Birth Certificate in English is acceptable when traveling with parents."
    }
  ],
  trekking: [
    {
      question: "Do I need prior experience for the Everest Base Camp trek?",
      answer: "While prior trekking experience is beneficial, it is not strictly required for the Everest Base Camp (EBC) trek. However, you need to be in good physical condition and have strong mental stamina."
    },
    {
      question: "What is Altitude Sickness and how do you prevent it?",
      answer: "Altitude sickness can occur above 2,500 meters. We prevent it by designing itineraries with proper acclimatization days, walking at a slow pace, and keeping our guides equipped with first-aid and oxygen."
    },
    {
      question: "Are meals and drinking water included during the trek?",
      answer: "Yes, our trekking packages usually include 3 meals a day (Breakfast, Lunch, Dinner) at local teahouses. Bottled water is available for purchase, but we recommend bringing water purification tablets to reduce plastic waste."
    }
  ],
  payment: [
    {
      question: "What is your booking and payment policy?",
      answer: "To confirm a booking, a 30% advance payment is required. The remaining 70% can be paid 15 days prior to your arrival or upon reaching Kathmandu, depending on the package terms."
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "Cancellations made 30 days prior to departure will incur a 10% deduction. Cancellations within 15-30 days incur a 50% deduction. Cancellations within 14 days are non-refundable."
    },
    {
      question: "Are there any hidden charges in your tour packages?",
      answer: "No, we believe in 100% transparency. Our 'Inclusions & Exclusions' section clearly states what is covered. Generally, personal expenses, tips, and international flights are excluded unless specified."
    }
  ]
};

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // Filter FAQs based on search query
  const filteredFaqs = faqData[activeCategory].filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans bg-[#f8f9fa] min-h-screen pb-20 pt-16 lg:pt-20">
      
      {/* --- 1. HERO & SEARCH SECTION --- */}
      <div className="bg-indigo-950 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
            <HelpCircle size={32} className="text-yellow-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            How can we help you today?
          </h1>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input 
              type="text" 
              placeholder="Search for visa, trekking, payments..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-800 rounded-full pl-14 pr-6 py-4 md:py-5 text-base md:text-lg outline-none focus:ring-4 focus:ring-red-500/50 shadow-2xl transition-all"
            />
          </div>
        </div>
      </div>

      {/* --- 2. MAIN FAQ LAYOUT --- */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left: Category Sidebar */}
          <div className="w-full lg:w-1/3 xl:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden sticky top-28">
              <div className="p-5 bg-gray-50 border-b border-gray-200">
                <h3 className="font-bold text-gray-800 text-lg">Categories</h3>
              </div>
              <div className="flex flex-row lg:flex-col overflow-x-auto hide-scrollbar p-2 lg:p-0">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setSearchQuery(""); // Reset search on category change
                      setOpenFaq(null); // Close opened accordions
                    }}
                    className={`flex items-center justify-start w-full px-5 py-4 text-sm md:text-base font-semibold transition-all whitespace-nowrap lg:whitespace-normal ${
                      activeCategory === category.id 
                        ? 'bg-red-50 text-red-600 border-l-4 border-red-600' 
                        : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    <span className={`mr-3 ${activeCategory === category.id ? 'text-red-500' : 'text-gray-400'}`}>
                      {category.icon}
                    </span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordions */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-indigo-950">
                {faqCategories.find(c => c.id === activeCategory)?.name} FAQs
              </h2>
              {searchQuery && (
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {filteredFaqs.length} results found
                </span>
              )}
            </div>

            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 shadow-sm ${
                      openFaq === index ? 'border-red-200 ring-1 ring-red-100' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-start justify-between p-5 md:p-6 text-left focus:outline-none"
                    >
                      <h3 className={`font-semibold pr-4 leading-relaxed ${openFaq === index ? 'text-red-600' : 'text-gray-800'}`}>
                        {faq.question}
                      </h3>
                      <div className={`mt-0.5 p-1 rounded-full shrink-0 transition-colors ${openFaq === index ? 'bg-red-50 text-red-600' : 'text-gray-400 bg-gray-50'}`}>
                        <ChevronDown size={20} className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-gray-100 text-gray-600 leading-relaxed bg-gray-50/50">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* No Results State */
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No exact matches found</h3>
                <p className="text-gray-500 mb-6">We couldn't find an answer matching "{searchQuery}". Try different keywords or browse the categories.</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="bg-red-50 text-red-600 font-bold px-6 py-2.5 rounded-full hover:bg-red-100 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* --- 3. STILL NEED HELP? CTA --- */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between text-white">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Still have questions?</h2>
            <p className="text-red-100 text-lg">Can't find the answer you're looking for? Our travel experts are here to help.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href="tel:+918576000084" className="bg-white text-red-600 font-bold px-6 py-3.5 rounded-xl shadow-md hover:bg-gray-50 transition-colors flex items-center justify-center">
              <PhoneCall size={20} className="mr-2" /> Call Expert
            </a>
            <a href="mailto:info@nepaltour.com" className="bg-red-700 hover:bg-red-800 border border-red-400 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center">
              <Mail size={20} className="mr-2" /> Email Us
            </a>
          </div>
        </div>
      </div>

      {/* CSS for hiding scrollbar in mobile category menu */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default FaqPage;