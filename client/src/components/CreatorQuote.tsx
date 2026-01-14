import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function CreatorQuote() {
  return (
    <section 
      className="relative py-16 md:py-32 bg-[#F0FDF4] overflow-hidden -mt-[471px] md:-mt-[138px]" 
      style={{height: '1092px'}}
    >

      {/* World Map Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/4.png" alt="World Map Background" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="container relative z-10 -mt-[104px]">
        <div className="max-w-4xl mx-auto text-center" style={{marginTop: '65px'}}>
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img src="/5.png" alt="Icon" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <blockquote className="text-base md:text-3xl font-normal leading-relaxed mb-10 text-black" style={{fontSize: '24px'}}>
            Being an independent creator often means pushing yourself to earn your first $1 — and then constantly thinking about how to drive traffic. Eventually, there comes a moment when creators inevitably starts thinking more about attracting traffic than about the quality of their content. That's when the worst thing happens: creation slows down, or just stops. Only a few manage to survive this crisis. For me, the most valuable thing is extending a helping hand to creators — so you don't fall into this trap. <br/>
            <span className="font-normal mt-4 block">We have a solution, a brilliant one.</span>
          </blockquote>
          
          <div className="flex flex-col items-center gap-2" style={{marginTop: '-23px'}}>
            <cite className="not-italic font-bold text-lg text-black">— Petr Osipov</cite>
            <span className="text-sm text-[#878787] font-medium">TaleX</span>
            
            <Button 
              className="mt-6 rounded-full px-6 gap-2 bg-black text-white hover:bg-[#6FF000] hover:text-black transition-all hover:scale-105 shadow-lg shadow-[#6FF000]/20 group" 
              onClick={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.backgroundColor = '#6FF000';
                btn.style.color = 'black';
                const playIcon = btn.querySelector('svg');
                if (playIcon) playIcon.style.fill = 'black';
                setTimeout(() => {
                  window.open('https://youtu.be/Vn8x8L4dNi4', '_blank');
                }, 100);
              }}
              onMouseDown={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.backgroundColor = '#6FF000';
                btn.style.color = 'black';
                const playIcon = btn.querySelector('svg');
                if (playIcon) playIcon.style.fill = 'black';
              }}
              onTouchStart={(e) => {
                const btn = e.currentTarget as HTMLButtonElement;
                btn.style.backgroundColor = '#6FF000';
                btn.style.color = 'black';
                const playIcon = btn.querySelector('svg');
                if (playIcon) playIcon.style.fill = 'black';
              }}
            >
              <Play size={16} fill="white" className="group-hover:fill-black" /> Watch now
            </Button>
          </div>
        </div>
        
        
        {/* Bottom Center Image */}
        <div className="mt-6 md:mt-0 flex justify-center pt-4 md:pt-0">
          <img 
            src="/6.png" 
            alt="Petr Osipov" 
            className="w-[342px] h-auto md:w-[487px] md:h-[414px] object-contain mt-[26px]" 
          />
        </div>
      </div>
    </section>
  );
}
