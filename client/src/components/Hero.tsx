import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const phoneImages = [
    '/images/Phone5(1).png',
    '/images/Phone2(1).png',
    '/images/Phone1(1).png',
    '/images/Phone4.png',
    '/images/Phone3.png',
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white" style={{height: '750px'}}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/hero-bg-new.png')] bg-cover bg-center bg-no-repeat pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Text content */}
          <div className="max-w-2xl" style={{marginRight: '-50px', marginLeft: '50px', marginTop: '75px'}}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 w-full max-w-[559px]" style={{fontSize: '39px', fontWeight: '400'}}>
              TaleX is where <br />
              <span className="relative inline-block" style={{color: '#6FF000'}}>
                great content
              </span> pays off <br />
              both creators and supporters
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed w-full max-w-[815px]" style={{color: '#000000', fontSize: '19px', paddingRight: '5px'}}>
              TaleX is a new content app where creators and fans grow together. Here, supporting content means more than donating — it means predicting its future and helping it spread. Every Tale, whether it's an article, book, podcast, or video, has X ways to travel farther, faster, and reward those who believe in it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-[#6FF000]/20 transition-all hover:scale-105">
                Tell a Tale
              </Button>
            </div>
          </div>

          {/* Right side - Phone mockups carousel */}
          <div className="hidden lg:flex justify-center items-center gap-4 overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {phoneImages.map((image, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 transform transition-transform hover:scale-105"
                  style={{
                    animation: `slide-in 0.6s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <img 
                    src={image} 
                    alt={`TaleX app screen ${index + 1}`}
                    className="h-96 object-contain drop-shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
