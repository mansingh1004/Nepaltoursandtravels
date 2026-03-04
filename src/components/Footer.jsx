import React from 'react';
import { 
  MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ChevronRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-indigo-100 font-sans pt-16 pb-8 border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Brand & About Section */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-white tracking-tight leading-none">
                Nepal <span className="text-orange-500">Tour</span>
              </span>
              <span className="text-xs text-indigo-300 font-bold tracking-widest uppercase mt-1">
                Nepal Tours And Travels
              </span>
            </div>
            <p className="text-sm text-indigo-200 leading-relaxed">
              Your ultimate travel partner for exploring the majestic Himalayas. We offer curated tour packages, trekking adventures, and seamless travel services across Nepal and beyond.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* 2. Popular Packages */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-orange-500 mr-3 rounded-full"></span>
              Top Packages
            </h3>
            <ul className="space-y-3">
              {['Nepal Tour Packages', 'Bhutan Tour Packages', 'Everest Base Camp Trek', 'Pokhara Adventure', 'Ayodhya Tour Packages'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-indigo-200 hover:text-orange-400 flex items-center transition-colors duration-200 group">
                    <ChevronRight size={14} className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-orange-500 mr-3 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Contact Us', 'Terms & Conditions', 'Privacy Policy', 'Cancellation Policy', 'FAQ'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-indigo-200 hover:text-orange-400 flex items-center transition-colors duration-200 group">
                    <ChevronRight size={14} className="mr-2 text-orange-500 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-orange-500 mr-3 rounded-full"></span>
              Contact Us
            </h3>
            <div className="space-y-4 text-sm text-indigo-200">
              <div className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <p>Head Office Opp. Gate No. -1, Railway Station, Gorakhpur (U.P) - 273001,
                
                </p>
              </div>

<div className="flex items-center">
                <Phone size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                <p> 🇮🇳 +91 8576000084 <br />🇮🇳 +91 8576000083 </p>
              </div>


                 <div className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <p>
                  Branch Office Kathmandu Nepal 9 Buddha Marg,Kathmandu Nepal
 {/* <br />🇳🇵 +977 9810198000 <br />🇳🇵 +977 9820198000 */}
 </p>
              </div>


              <div className="flex items-center">
                <Phone size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                <p>🇳🇵 +977 9810198000 <br />🇳🇵 +977 9820198000 </p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@nepaltour.com" className="hover:text-orange-400 transition-colors">
                  info@nepaltoursandtravels.com

                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Icons */}
        <div className="border-t border-indigo-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-indigo-300 text-center md:text-left">
            © {new Date().getFullYear()} Nepal Tour and Travels. All rights reserved.
          </p>
          
          {/* Placeholder for Payment Icons (Use real images if available) */}
          <div className="flex space-x-3 items-center opacity-80">
            <span className="text-xs text-indigo-300 mr-2">Secure Payments:</span>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-[10px] font-bold text-blue-800">VISA</div>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-[10px] font-bold text-red-600">MC</div>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-[10px] font-bold text-blue-500">AMEX</div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;