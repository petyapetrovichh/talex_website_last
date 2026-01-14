import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background decoration - Shared */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/hero-bg-new.png')] bg-cover bg-center bg-no-repeat pointer-events-none" />
      
      {/* =========================================
          MOBILE VIEW (Visible only on mobile)
          ========================================= */}
      <div className="md:hidden relative z-10 pt-28 pb-16 px-6 flex flex-col w-full">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold tracking-tight leading-[1.1] mb-6 text-left" style={{fontWeight: '800', fontSize: '26px'}}>
            TaleX is where <br />
            <span className="relative inline-block text-[#6FF000]">
              great content
            </span> pays off <br />
            both creators and supporters
          </h1>
          
          <p className="text-base text-gray-600 mb-8 leading-relaxed text-left" style={{fontSize: '15px'}}>
            TaleX is a new content app where creators and fans grow together. Here, supporting content means more than donating — it means predicting its future and helping it spread. Every Tale, whether it's an article, book, podcast, or video, has X ways to travel farther, faster, and reward those who believe in it.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => window.location.href = 'https://www.talex.world/publish'}
              className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-[#6FF000]/20 transition-all hover:scale-105 w-full sm:w-auto"
            >
              Tell Your Tale
            </Button>
          </div>
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW (Visible only on desktop)
          ========================================= */}
      <div className="hidden md:block container relative z-10 pt-32 pb-20 min-h-[750px]">
        <div className="relative w-full h-full flex items-center">
          {/* Left side - Text content */}
          <div className="w-1/2 pr-8 pt-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 w-full" style={{fontSize: '39px', fontWeight: '400'}}>
              TaleX is where <br />
              <span className="relative inline-block" style={{color: '#6FF000'}}>
                great content
              </span> pays off <br />
              both creators and supporters
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed w-full" style={{color: '#000000', fontSize: '18px'}}>
              TaleX is a new content app where creators and fans grow together. Here, supporting content means more than donating — it means predicting its future and helping it spread. Every Tale, whether it's an article, book, podcast, or video, has X ways to travel farther, faster, and reward those who believe in it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.location.href = 'https://www.talex.world/publish'}
                className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-[#6FF000]/20 transition-all hover:scale-105"
              >
                Tell Your Tale
              </Button>
            </div>
          </div>

          {/* Right side - Phone mockups with absolute positioning */}
          <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
            <div className="relative w-full h-full">
              {/* Phone 1 - Phone5(1).png */}
              <img 
                src="/images/Phone5(1).png" 
                alt="TaleX app screen 1"
                className="absolute object-contain drop-shadow-2xl w-[200px] h-auto"
                style={{
                  bottom: '0',
                  left: '10%',
                  transform: 'translateY(10%)'
                }}
              />

              {/* Phone 2 - Phone2(1).png */}
              <img 
                src="/images/Phone2(1).png" 
                alt="TaleX app screen 2"
                className="absolute object-contain drop-shadow-2xl w-[200px] h-auto"
                style={{
                  bottom: '20%',
                  left: '30%',
                }}
              />

              {/* Phone 3 - Phone1(1).png */}
              <img 
                src="/images/Phone1(1).png" 
                alt="TaleX app screen 3"
                className="absolute object-contain drop-shadow-2xl w-[200px] h-auto"
                style={{
                  top: '10%',
                  left: '20%',
                }}
              />

              {/* Phone 4 - Phone4.png */}
              <img 
                src="/images/Phone4.png" 
                alt="TaleX app screen 4"
                className="absolute object-contain drop-shadow-2xl w-[200px] h-auto"
                style={{
                  top: '20%',
                  right: '10%',
                }}
              />

              {/* Phone 5 - Phone3.png */}
              <img 
                src="/images/Phone3.png" 
                alt="TaleX app screen 5"
                className="absolute object-contain drop-shadow-2xl w-[350px] h-auto"
                style={{
                  top: '5%',
                  right: '-5%',
                  zIndex: 10
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
