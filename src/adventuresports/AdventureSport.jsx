import React from 'react';
import { 
  Mountain, Wind, Bike, Map, Activity, 
  ChevronRight, Compass, ArrowDownCircle 
} from 'lucide-react';
 import paragliding  from "../images/Paragliding-in-nepal.webp"
 import mauntainhelicopter from "../images/Mountain Helicopter.jpeg";
 import Bungeejumping from "../images/Bungee jumping.jpeg";
 import mountainBiking from "../images/MountainBiking.jpeg"
 import nepalbikeriding from "../images/nepalbikeriding.jpeg"
// Mock Data for Adventure Sports
const adventures = [
  {
    id: 1,
    title: "Paragliding",
    location: "Pokhara / Sarangkot",
    description: "Soar like a bird over the majestic Phewa Lake with stunning views of the Annapurna range.",
    icon: <Wind size={24} />,
    image: paragliding,
    intensity: "Moderate",
  },
  {
    id: 2,
    title: "Mountain Helicopter",
    location: "Everest / Annapurna Base Camp",
    description: "Experience the ultimate luxury thrill by flying directly to the lap of the highest peaks.",
    icon: <Compass size={24} />,
    image: mauntainhelicopter,
    intensity: "Easy",
  },
  {
    id: 3,
    title: "Bungee Jumping",
    location: "Kushma /Pokhara",
    description: "Take a leap of faith into a breathtaking Himalayan gorge. Pure adrenaline rush guaranteed.",
    icon: <ArrowDownCircle size={24} />,
    image: Bungeejumping,
    intensity: "Extreme",
  },
  {
    id: 4,
    title: "Trekking in Nepal",
    location: "EBC / Annapurna ",
    description: "Conquer the world's most famous trails and immerse yourself in Sherpa culture.",
    icon: <Mountain size={24} />,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    intensity: "High",
  },
  {
    id: 5,
    title: "Hiking in Nepal",
    location: "Nagarkot / Shivapuri",
    description: "Enjoy scenic day hikes through lush forests, traditional villages, and terraced fields.",
    icon: <Map size={24} />,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    intensity: "Moderate",
  },
  {
    id: 6,
    title: "Mountain Biking",
    location: "Kathmandu Valley Rim / Mustang",
    description: "Ride through rugged dirt trails, suspension bridges, and ancient mountainous terrain.",
    icon: <Bike size={24} />,
    image:mountainBiking,
    intensity: "High",
  },
  {
    id: 7,
    title: "Nepal Bike Riding",
    location: "Upper Mustang / Manang",
    description: "Embark on an epic motorcycle road trip through the forbidden kingdom of the Himalayas.",
    icon: <Activity size={24} />,
    image: nepalbikeriding,
    intensity: "Extreme",
  }
];

const AdventureSportsPage = () => {
  
  // Helper function to color-code intensity levels
  const getIntensityColor = (intensity) => {
    if (intensity === "Easy") return "bg-green-500";
    if (intensity === "Moderate") return "bg-yellow-500";
    if (intensity === "High") return "bg-orange-500";
    if (intensity === "Extreme") return "bg-red-600";
    return "bg-blue-500";
  };

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen pb-20 pt-10">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center md:text-left">
        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-widest mb-4">
          Thrill & Excitement
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-4">
          Adventure Sports in <span className="text-orange-500">Nepal</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl">
          Push your limits and experience the ultimate adrenaline rush. From diving into Himalayan gorges to flying over the highest peaks on earth, find your next great adventure below.
        </p>
      </div>

      {/* 2. Adventure Grid Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          
          {adventures.map((adv) => (
            // Adventure Card
            <div 
              key={adv.id} 
              className="relative h-[380px] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={adv.image} 
                  alt={adv.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Intensity Badge */}
              <div className={`absolute top-4 left-4 z-20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md ${getIntensityColor(adv.intensity)}`}>
                {adv.intensity}
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100 z-10"></div>

              {/* Card Content (Pushed to the bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
                
                {/* Icon & Title */}
                <div className="flex items-center mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mr-3 shadow-inner">
                    {adv.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {adv.title}
                  </h3>
                </div>

                {/* Hidden Text & Button that appears on Hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-[150px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <p className="text-sm text-gray-300 mb-2 font-medium">
                    <span className="text-orange-400 font-bold">Location:</span> {adv.location}
                  </p>
                  <p className="text-sm text-gray-300 line-clamp-2 mb-4 leading-relaxed">
                    {adv.description}
                  </p>
                  
                  <button className="flex items-center text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-lg transition-colors w-full justify-center shadow-lg">
                    View Details
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default AdventureSportsPage;