import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

// Mock data based on the design image
const creators = [
  {
    id: 1,
    title: "How RWB changes the idea...",
    author: "PETR OSIPOV",
    role: "TaleX Co-Founder and Chief Marketing Officer",
    reads: "1.2k Reads",
    tipped: "$84.37 Tipped",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    bgImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    cardColor: "#1e293b"
  },
  {
    id: 2,
    title: "What Should a \"Principled\"...",
    author: "CHARI",
    role: "Founder of TaleX, Founder of Z*******, Portfolio of Sequoia.",
    reads: "3.7k Reads",
    tipped: "$106.00 Tipped",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bgImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    cardColor: "#3f3f46"
  },
  {
    id: 3,
    title: "How RWB changes the idea...",
    author: "PETR OSIPOV",
    role: "TaleX Co-Founder and Chief Marketing Officer",
    reads: "1.2k Reads",
    tipped: "$84.37 Tipped",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    cardColor: "#1e293b"
  },
  {
    id: 4,
    title: "What Should a \"Principled\"...",
    author: "CHARI",
    role: "Founder of TaleX, Founder of Z*******, Portfolio of Sequoia.",
    reads: "3.7k Reads",
    tipped: "$106.00 Tipped",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bgImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    cardColor: "#3f3f46"
  },
  {
    id: 5,
    title: "How RWB changes the idea...",
    author: "PETR OSIPOV",
    role: "TaleX Co-Founder and Chief Marketing Officer",
    reads: "1.2k Reads",
    tipped: "$84.37 Tipped",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bgImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    cardColor: "#1e293b"
  }
];

// Duplicate creators to ensure smooth infinite scroll
const marqueeCreators = [...creators, ...creators, ...creators];

const CreatorCard = ({ creator }: { creator: typeof creators[0] }) => (
  <div className="w-[280px] h-[380px] flex-shrink-0 rounded-xl overflow-hidden relative group mx-3">
    {/* Background Image with Blur */}
    <div className="absolute inset-0 z-0">
      <img 
        src={creator.bgImage} 
        alt="background" 
        className="w-full h-full object-cover filter blur-xl scale-150 opacity-60"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    {/* Content Container */}
    <div className="relative z-10 h-full flex flex-col">
      {/* Top Section - Avatar */}
      <div className="flex-1 flex items-center justify-center pt-4">
        <div className="w-24 h-24 rounded-full border-4 border-white/20 overflow-hidden shadow-lg">
          <img src={creator.avatar} alt={creator.author} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom Section - Info Card */}
      <div className="bg-[#4A4A4A]/90 backdrop-blur-sm p-4 text-white h-[200px] flex flex-col justify-between">
        <div>
          {/* Stats Row */}
          <div className="flex items-center gap-2 text-[10px] font-bold text-[#6FF000] mb-1">
            <span>{creator.reads}</span>
            <span>•</span>
            <span>{creator.tipped}</span>
          </div>
          
          {/* Author Name */}
          <div className="text-[10px] text-gray-300 uppercase tracking-wider mb-1">
            BY {creator.author}
          </div>
          
          {/* Title */}
          <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2 font-serif">
            {creator.title}
          </h3>
          
          {/* Role/Description */}
          <p className="text-[10px] text-gray-300 line-clamp-2 leading-relaxed">
            {creator.role}
          </p>
        </div>

        {/* Button */}
        <Button className="w-full bg-white text-black hover:bg-[#6FF000] hover:text-black font-bold text-xs h-8 rounded-md mt-3 transition-colors">
          Read now
        </Button>
      </div>
    </div>
  </div>
);

export default function CreatorList() {
  return (
    <section className="bg-[#C1F09D] py-20 overflow-hidden relative" style={{height: '1297px'}}>
      {/* Top Gradient Overlay for smooth blending if needed, though design shows solid background */}
      
      {/* First Row - Marquee Left */}
      <div className="mb-16 relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeCreators.map((creator, index) => (
            <CreatorCard key={`row1-${index}`} creator={creator} />
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="container text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-black">
          Ideas already live on TaleX
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-8 max-w-xl mx-auto">
          Here are just a few of many people you can support and grow together
        </p>
        <Button className="bg-black text-white hover:bg-white hover:text-black px-8 py-6 rounded-full text-sm font-medium transition-colors">
          Discover ever more ideas
        </Button>
      </div>

      {/* Second Row - Marquee Right */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {marqueeCreators.map((creator, index) => (
            <CreatorCard key={`row2-${index}`} creator={creator} />
          ))}
        </div>
      </div>

      {/* CSS for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        /* Pause on hover */
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
