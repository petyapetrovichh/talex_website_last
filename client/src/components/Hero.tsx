import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden" style={{height: '1010px'}}>
      {/* Background decoration - Shared */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/hero-bg-new.png')] bg-cover bg-center bg-no-repeat pointer-events-none" />
      
      {/* =========================================
          MOBILE VIEW (Visible only on mobile)
          ========================================= */}
      <div className="md:hidden relative z-10 pt-28 pb-16 px-6 flex flex-col" style={{width: '363px', marginTop: '0px', paddingRight: '14px', paddingLeft: '14px'}}>
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
      <div className="hidden md:block container relative z-10 pt-32 pb-20" style={{height: '750px'}}>
        <div className="relative w-full h-full" style={{marginLeft: '-31px', marginTop: '-3px'}}>
          {/* Left side - Text content */}
          <div className="max-w-2xl absolute left-0 top-0" style={{marginRight: '-50px', marginLeft: '50px', marginTop: '153px'}}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 w-full max-w-[559px]" style={{fontSize: '39px', fontWeight: '400'}}>
              TaleX is where <br />
              <span className="relative inline-block" style={{color: '#6FF000'}}>
                great content
              </span> pays off <br />
              both creators and supporters
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed w-full max-w-[815px]" style={{color: '#000000', fontSize: '18px', paddingRight: '40px'}}>
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
          <div className="absolute right-0 top-0 w-1/2 h-full" style={{marginTop: '-45px', height: '795px'}}>
            {/* Phone 1 - Phone5(1).png */}
            <img 
              src="/images/Phone5(1).png" 
              alt="TaleX app screen 1"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                top: '80px',
                right: '600px',
                width: '200px',
                height: 'auto',
                marginTop: '442px',
                marginRight: '-580px',
              }}
            />

            {/* Phone 2 - Phone2(1).png */}
            <img 
              src="/images/Phone2(1).png" 
              alt="TaleX app screen 2"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                top: '100px',
                right: '400px',
                width: '200px',
                height: 'auto',
                marginTop: '328px',
                marginRight: '127px',
              }}
            />

            {/* Phone 3 - Phone1(1).png */}
            <img 
              src="/images/Phone1(1).png" 
              alt="TaleX app screen 3"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                top: '120px',
                right: '99px',
                width: '200px',
                height: '349px',
                marginTop: '-120px',
                marginRight: '428px',
              }}
            />

            {/* Phone 4 - Phone4.png */}
            <img 
              src="/images/Phone4.png" 
              alt="TaleX app screen 4"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                top: '90px',
                right: '0px',
                width: '200px',
                height: 'auto',
                marginTop: '41px',
                marginRight: '20px',
              }}
            />

            {/* Phone 5 - Phone3.png */}
            <img 
              src="/images/Phone3.png" 
              alt="TaleX app screen 5"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                top: '110px',
                right: '-180px',
                width: '350px',
                height: 'auto',
                marginTop: '-100px',
                marginRight: '378px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
