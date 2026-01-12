import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6" style={{fontSize: '45px', paddingBottom: '1px'}}>
              TaleX is where <br />
              <span className="relative inline-block">
                great content
              </span> pays off <br />
              both creators and supporters
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              The all-in-one content application designed to bridge the gap between creators and supporters. 
              Earn from your first dollar, not your millionth view.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#82E600] hover:bg-[#70C700] text-black font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-[#82E600]/20 transition-transform hover:scale-105">
                Start now
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-gray-50">
                Learn more <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative mt-12 lg:mt-0">
            {/* Mobile Mockups Container */}
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* We will use CSS to position these mockups to match the design */}
              <div className="absolute top-0 right-10 w-64 z-10 transform rotate-[-5deg] shadow-2xl rounded-[3rem] overflow-hidden border-8 border-white bg-white">
                <img src="/images/design-mockup.png" alt="App Interface" className="w-full h-auto object-cover object-top" style={{ aspectRatio: '9/19.5' }} />
              </div>
              <div className="absolute bottom-10 left-10 w-64 z-20 transform rotate-[5deg] shadow-2xl rounded-[3rem] overflow-hidden border-8 border-white bg-white">
                 {/* Placeholder for second screen */}
                 <div className="w-full h-full bg-gray-100 flex flex-col p-4">
                    <div className="w-full h-40 bg-gray-200 rounded-xl mb-4 animate-pulse"></div>
                    <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded mb-6"></div>
                    <div className="flex gap-2 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        <div className="flex-1">
                            <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
                            <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                 </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-0 bg-white p-4 rounded-2xl shadow-xl z-30 max-w-[200px] animate-bounce-slow">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#82E600] flex items-center justify-center font-bold text-xs">TX</div>
                    <div className="text-sm font-bold">New Supporter!</div>
                </div>
                <div className="text-xs text-gray-500">Alex just subscribed to your exclusive content.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
