import React from 'react';
import { 
  CarFront, Building2, Smartphone, Banknote, Plane, FileText 
} from 'lucide-react';

// Added 'description' to each service to explain it briefly
const servicesData = [
  {
    id: 1,
    title: "Taxi & Cabs",
    description: "Reliable airport transfers & local sightseeing cabs.",
    icon: <CarFront size={40} strokeWidth={1.2} />,
  },
  {
    id: 2,
    title: "Hotel Booking",
    description: "Best stays from budget hotels to luxury resorts.",
    icon: <Building2 size={40} strokeWidth={1.2} />,
  },
  {
    id: 3,
    title: "SIM Card",
    description: "Pre-activated 4G/5G tourist SIM cards on arrival.",
    icon: <Smartphone size={40} strokeWidth={1.2} />,
  },
  {
    id: 4,
    title: "Forex",
    description: "Best currency exchange rates with zero hassle.",
    icon: <Banknote size={40} strokeWidth={1.2} />,
  },
  {
    id: 5,
    title: "Flight Tickets",
    description: "Affordable domestic & international flight bookings.",
    icon: <Plane size={40} strokeWidth={1.2} />,
  },
  {
    id: 6,
    title: "Visa Assistance",
    description: "Smooth and fast tourist visa processing support.",
    icon: <FileText size={40} strokeWidth={1.2} />,
  }
];

const NepalServices = () => {
  return (
    <section className="py-12 md:py-16 bg-white w-full font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-indigo-950 mb-3">
            Essential <span className="text-blue-600">Travel Services</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl mx-auto">
            Everything you need for a seamless and comfortable trip to Nepal, all in one place.
          </p>
        </div>

        {/* SOTC Style Icon Grid with Descriptions */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-10 lg:gap-x-14">
          
          {servicesData.map((service) => (
            <a 
              key={service.id} 
              href="#" 
              // Width badha di gayi hai taaki description achhe se show ho (w-[140px] to w-[180px])
              className="flex flex-col items-center group w-[140px] md:w-[180px] cursor-pointer"
            >
              {/* Circular Icon Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2 mb-4">
                {service.icon}
              </div>
              
              {/* Service Title & Description */}
              <div className="text-center">
                <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight mb-2">
                  {service.title}
                </h3>
                {/* Naya Description Text */}
                <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default NepalServices;