import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6" style={{fontSize: '39px', width: '559px'}}>
              TaleX is where <br />
              <span className="relative inline-block" style={{color: '#6FF000'}}>
                great content
              </span> pays off <br />
              both creators and supporters
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg" style={{width: '815px'}}>
              TaleX is a new content app where creators and fans grow together. Here, supporting content means more than donating — it means predicting its future and helping it spread. Every Tale, whether it's an article, book, podcast, or video, has X ways to travel farther, faster, and reward those who believe in it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-[#6FF000]/20 transition-all hover:scale-105">
                Start a Tale
              </Button>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0">
            {/* Mobile Mockups Container */}
            <div className="relative w-full flex items-center justify-center">
              <img src="/hero-updated.png" alt="App Interface" className="w-full h-auto object-contain max-w-[500px] lg:max-w-[861px] mx-auto lg:ml-auto lg:mr-0" style={{marginTop: '-51px', width: '760px', height: '687px'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
