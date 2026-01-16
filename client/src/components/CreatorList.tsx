import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

// Mock data based on the design image
const creators = [
  {
    id: 1,
    title: "What Changes Is the Form of Assets. What Endures Is the Logic of Value Capture...",
    author: "CHARI",
    role: "Founder of TaleX, exploring a new world built and...",
    reads: "1.2K Reads",
    tipped: "$24.12 Tipped",
    avatar: "https://bres.talex.world/avatar/3948d698-e996-4aec-a2c7-4878f63e98c6.webp",
    bgImage: "https://bres.talex.world/avatar/3948d698-e996-4aec-a2c7-4878f63e98c6.webp",
    cardColor: "#1e293b",
    link: "https://www.talex.world/reading/585449588677"
  },
  {
    id: 2,
    title: "Polymarket: The 0.1%...",
    author: "DFARM",
    role: "Unwritten pages. Exploring the world of TaleX.",
    reads: "1.1K Reads",
    tipped: "$106.3 Tipped",
    avatar: "https://bres.talex.world/avatar/a831afd6-97be-4b06-be47-9d4e2d4139fc.webp",
    bgImage: "https://bres.talex.world/avatar/a831afd6-97be-4b06-be47-9d4e2d4139fc.webp",
    cardColor: "#3f3f46",
    link: "https://www.talex.world/reading/311088460094"
  },
  {
    id: 3,
    title: "Prediction on CZ's New...",
    author: "GUANZIZAI",
    role: "Unwritten pages. Exploring the world of TaleX.",
    reads: "1.4K Reads",
    tipped: "$62.45 Tipped",
    avatar: "https://bres.talex.world/avatar/0e961cc0-2497-4dad-86b9-eff1c9566bd6.webp",
    bgImage: "https://bres.talex.world/avatar/0e961cc0-2497-4dad-86b9-eff1c9566bd6.webp",
    cardColor: "#1e293b",
    link: "https://www.talex.world/reading/220997829917"
  },
  {
    id: 4,
    title: "China's Digital Yuan 2.0...",
    author: "Canjian | 残剑",
    role: "不专业投资者｜Crypto × Stocks",
    reads: "1.1K Reads",
    tipped: "$62.41 Tipped",
    avatar: "https://bres.talex.world/avatar/557e251a-a6b8-470c-9251-9c523fd6ad19.webp",
    bgImage: "https://bres.talex.world/avatar/557e251a-a6b8-470c-9251-9c523fd6ad19.webp",
    cardColor: "#3f3f46",
    link: "https://www.talex.world/reading/392244031139"
  },
  {
    id: 5,
    title: "Polymarket Explained...",
    author: "DFARM",
    role: "Unwritten pages. Exploring the world of TaleX.",
    reads: "2.1K Reads",
    tipped: "$75.47 Tipped",
    avatar: "https://bres.talex.world/avatar/a831afd6-97be-4b06-be47-9d4e2d4139fc.webp",
    bgImage: "https://bres.talex.world/avatar/a831afd6-97be-4b06-be47-9d4e2d4139fc.webp",
    cardColor: "#1e293b",
    link: "https://www.talex.world/reading/739909406060"
  }
];

// Duplicate creators to ensure smooth infinite scroll
const marqueeCreators = [...creators, ...creators];

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
        <Button 
          onClick={(e) => {
            if (creator.link) {
              window.open(creator.link, '_self');
            }
            const btn = e.currentTarget as HTMLButtonElement;
            btn.style.backgroundColor = 'black';
            btn.style.color = 'white';
          }}
          className="w-full bg-white text-black hover:bg-black hover:text-white font-bold text-xs h-8 rounded-md mt-3 transition-all hover:scale-105 shadow-lg shadow-[#6FF000]/20"
          onMouseDown={(e) => {
            const btn = e.currentTarget as HTMLButtonElement;
            btn.style.backgroundColor = 'black';
            btn.style.color = 'white';
          }}
          onTouchStart={(e) => {
            const btn = e.currentTarget as HTMLButtonElement;
            btn.style.backgroundColor = 'black';
            btn.style.color = 'white';
          }}
        >
          Read now
        </Button>
      </div>
    </div>
  </div>
);

export default function CreatorList() {
  return (
    <>
      {/* Mobile Version */}
      <section className="md:hidden bg-[#C1F09D] py-20 overflow-hidden relative" style={{height: '1250px', marginTop: '225px'}}>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-black" style={{fontSize: '39px', fontWeight: '400', fontFamily: '"Abril Fatface", cursive'}}>
            Ideas already live on TaleX
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-8 max-w-xl mx-auto" style={{fontSize: '18px', color: '#000000'}}>
            Here are just a few of many people you can support and grow together
          </p>
          <Button 
            onClick={(e) => {
              window.open('https://www.talex.world/', '_self');
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = '#6FF000';
              btn.style.color = 'black';
            }}
            className="bg-black text-white hover:bg-[#6FF000] hover:text-black px-8 py-6 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg shadow-[#6FF000]/20"
            onMouseDown={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = '#6FF000';
              btn.style.color = 'black';
            }}
            onTouchStart={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = '#6FF000';
              btn.style.color = 'black';
            }}
            style={{fontSize: '18px'}}
          >
            Discover even more ideas
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
            animation: marquee 5.334s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 5.334s linear infinite;
          }
          /* Pause on hover */
          .animate-marquee:hover, .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Desktop Version */}
      <section className="hidden md:block bg-[#C1F09D] py-20 overflow-hidden relative" style={{height: '1250px'}}>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-black" style={{fontSize: '39px', fontWeight: '400', fontFamily: '"Abril Fatface", cursive'}}>
            Ideas already live on TaleX
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-8 max-w-xl mx-auto" style={{fontSize: '18px', color: '#000000'}}>
            Here are just a few of many people you can support and grow together
          </p>
          <Button 
            onClick={(e) => {
              window.open('https://www.talex.world/', '_self');
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = '#6FF000';
              btn.style.color = 'black';
            }}
            className="bg-black text-white hover:bg-[#6FF000] hover:text-black px-8 py-6 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg shadow-[#6FF000]/20"
            onMouseDown={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = '#6FF000';
              btn.style.color = 'black';
            }}
            onTouchStart={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = '#6FF000';
              btn.style.color = 'black';
            }}
            style={{fontSize: '18px'}}
          >
            Discover even more ideas
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
            animation: marquee 26.67s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 26.67s linear infinite;
          }
          /* Pause on hover */
          .animate-marquee:hover, .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </>
  );
}
