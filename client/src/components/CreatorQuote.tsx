import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function CreatorQuote() {
  return (
    <section 
      className="relative py-32 bg-[#F0FDF4] overflow-hidden" 
      style={{
        paddingBottom: '0px',
        // Mobile styles (default)
        marginTop: '-471px',
        width: '363px',
        height: '917px',
        paddingTop: '128px', // Restored mobile padding
      }}
    >
      {/* Desktop styles override using style tag for specific values that can't be easily handled by Tailwind classes alone due to specific pixel values */}
      <style>{`
        @media (min-width: 768px) {
          section.relative {
            margin-top: -138px !important;
            width: 1737px !important;
            height: 1012px !important;
            padding-top: 135px !important;
          }
          .quote-image {
            margin-top: 26px !important;
            width: 487px !important;
            height: 414px !important;
          }
        }
      `}</style>

      {/* World Map Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/4.png" alt="World Map Background" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="container relative z-10" style={{marginTop: '-104px', height: '1482px'}}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img src="/5.png" alt="Icon" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10" style={{fontWeight: '400', fontSize: '16px', color: '#000000'}}>
            Being an independent creator often means pushing yourself to earn your first $1 — and then constantly thinking about how to drive traffic. Eventually, there comes a moment when creators inevitably starts thinking more about attracting traffic than about the quality of their content. That's when the worst thing happens: creation slows down, or just stops. Only a few manage to survive this crisis. For me, the most valuable thing is extending a helping hand to creators — so you don't fall into this trap. <br/>
            <span className="font-bold mt-4 block" style={{fontWeight: '400'}}>We have a solution, a brilliant one.</span>
          </blockquote>
          
          <div className="flex flex-col items-center gap-2">
            <cite className="not-italic font-bold" style={{fontSize: '18px', color: '#000000'}}>— Petr Osipov</cite>
            <span className="text-sm" style={{fontSize: '14px', color: '#878787', fontWeight: '500'}}>TaleX</span>
            
            <Button className="mt-6 rounded-full px-6 gap-2 bg-black text-white hover:bg-[#6FF000] hover:text-black transition-colors group" onClick={() => window.open('https://youtu.be/Vn8x8L4dNi4', '_blank')}>
              <Play size={16} fill="white" className="group-hover:fill-black" /> Watch now
            </Button>
          </div>
        </div>
        
        
        {/* Bottom Center Image */}
        <div className="mt-12 flex justify-center" style={{paddingTop: '15px', marginTop: '0px'}}>
          <img 
            src="/6.png" 
            alt="Petr Osipov" 
            className="w-64 h-auto object-contain quote-image" 
            style={{
              // Mobile styles (default)
              marginTop: '26px', 
              width: '342px', 
              height: '378px'
            }} 
          />
        </div>
      </div>
    </section>
  );
}
