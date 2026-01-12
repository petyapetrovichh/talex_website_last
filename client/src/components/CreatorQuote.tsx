import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function CreatorQuote() {
  return (
    <section className="relative py-32 bg-[#F0FDF4] overflow-hidden">
      {/* World Map Background - Simulated with CSS/SVG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
           {/* Simplified World Map Paths */}
           <path d="M200,150 Q250,100 300,150 T400,200 T500,150 T600,200 T700,150 T800,200" fill="none" stroke="#82E600" strokeWidth="2" />
           <path d="M150,300 Q250,350 350,300 T550,350 T750,300" fill="none" stroke="#82E600" strokeWidth="2" />
           {/* Dots representing users */}
           <circle cx="250" cy="180" r="3" fill="#82E600" />
           <circle cx="450" cy="220" r="3" fill="#82E600" />
           <circle cx="650" cy="160" r="3" fill="#82E600" />
           <circle cx="300" cy="320" r="3" fill="#82E600" />
           <circle cx="700" cy="280" r="3" fill="#82E600" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-black text-white p-2 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
            </div>
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10">
            "Being an independent creator often means pushing yourself to earn your first $1 — and then constantly thinking about how to drive traffic. Basically, chaos comes in waves: when content's liquidity dries, thinking more about attracting traffic than about the quality of their footage. That's when the panic hits: support creators sometimes, or just stops. Only a few manage to survive this drift. For me, the most valuable thing is extending a helping hand to creators — so you don't fall into this trap. <br/>
            <span className="font-bold mt-4 block">We want a solution, a brilliant one."</span>
          </blockquote>
          
          <div className="flex flex-col items-center gap-2">
            <cite className="not-italic font-bold text-lg">- ANONYMOUS</cite>
            <span className="text-sm text-gray-500">Creator</span>
            
            <Button variant="outline" className="mt-6 rounded-full px-6 gap-2 border-black text-black hover:bg-black hover:text-white transition-colors">
              <Play size={16} fill="currentColor" /> Watch Video
            </Button>
          </div>
        </div>
        
        {/* Floating Creator Images - Simulated */}
        <div className="absolute top-1/2 left-4 md:left-20 transform -translate-y-1/2 hidden lg:block">
            <div className="w-32 h-40 bg-gray-200 rounded-lg rotate-[-6deg] shadow-lg overflow-hidden border-4 border-white">
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop" alt="Creator" className="w-full h-full object-cover" />
            </div>
        </div>
        <div className="absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2 hidden lg:block">
            <div className="w-32 h-40 bg-gray-200 rounded-lg rotate-[6deg] shadow-lg overflow-hidden border-4 border-white">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" alt="Creator" className="w-full h-full object-cover" />
            </div>
        </div>
        
        {/* Bottom Center Image */}
        <div className="flex justify-center mt-16">
             <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" alt="Founder" className="w-full h-full object-cover" />
             </div>
        </div>
      </div>
    </section>
  );
}
