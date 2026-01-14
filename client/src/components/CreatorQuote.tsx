import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function CreatorQuote() {
  return (
    <section className="relative py-32 bg-[#F0FDF4] overflow-hidden" style={{paddingBottom: '0px', marginTop: '-200px'}}>
      {/* World Map Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/4.png" alt="World Map Background" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img src="/5.png" alt="Icon" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10" style={{fontWeight: '400', fontSize: '22px', color: '#000000'}}>
            "Being an independent creator often means pushing yourself to earn your first $1 — and then constantly thinking about how to drive traffic. Eventually, there comes a moment when creators inevitably starts thinking more about attracting traffic than about the quality of their content. That's when the worst thing happens: creation slows down, or just stops. Only a few manage to survive this crisis. For me, the most valuable thing is extending a helping hand to creators — so you don't fall into this trap. <br/>
            <span className="font-bold mt-4 block" style={{fontWeight: '400'}}>We have a solution, a brilliant one.</span>
          </blockquote>
          
          <div className="flex flex-col items-center gap-2">
            <cite className="not-italic font-bold" style={{fontSize: '20px', color: '#000000'}}>— Petr Osipov</cite>
            <span className="text-sm" style={{fontSize: '18px', color: '#878787', fontWeight: '700'}}>TaleX</span>
            
            <Button className="mt-6 rounded-full px-6 gap-2 bg-black text-white hover:bg-[#6FF000] hover:text-black transition-colors" onClick={() => {}}>
              <Play size={16} fill="white" className="hover:text-black" /> Watch now
            </Button>
          </div>
        </div>
        
        {/* TaleX Logo */}
        <div className="absolute" style={{
          top: '15%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '120px',
          zIndex: 5,
          pointerEvents: 'none'
        }}>
          <img src="/images/talex_logo.png" alt="TaleX Logo" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>
        
        {/* Bottom Center Image */}
        <div className="mt-12 flex justify-center" style={{paddingTop: '15px', marginTop: '0px'}}>
          <img src="/6.png" alt="Petr Osipov" className="w-64 h-auto object-contain" style={{marginTop: '11px', width: '412px', height: '386px'}} />
        </div>
      </div>
    </section>
  );
}
