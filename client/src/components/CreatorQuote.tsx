import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function CreatorQuote() {
  return (
    <section 
      className="relative py-32 bg-[#F0FDF4] overflow-hidden" 
      style={{
        paddingBottom: '0px',
      }}
    >
      {/* Styles for specific pixel values that differ between mobile and desktop */}
      <style>{`
        /* Mobile styles (default) */
        section.relative {
          margin-top: -471px;
          width: 363px;
          height: 927px;
          padding-top: 128px;
        }
        .quote-container {
          margin-top: -104px;
          height: 983px;
        }
        .quote-text {
          font-weight: 400;
          font-size: 16px;
          color: #000000;
        }
        .quote-image {
          margin-top: -21px;
          width: 342px;
          height: 378px;
        }

        /* Desktop quote image */
        @media (min-width: 768px) {
          .quote-image-mobile {
            margin-top: -21px !important;
          }
        }

        /* Desktop styles (min-width: 768px) */
        @media (min-width: 768px) {
          section.relative {
            margin-top: -138px !important;
            width: 1737px !important;
            height: 1184px !important;
            padding-top: 135px !important;
          }
          .quote-container {
            margin-top: -104px !important;
            height: 983px !important;
          }
          .quote-text {
            font-size: 30px !important; /* 3xl equivalent */
            line-height: 1.6 !important;
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

      <div className="container relative z-10 quote-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img src="/5.png" alt="Icon" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <blockquote className="font-medium leading-relaxed mb-10 quote-text">
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
            className="object-contain quote-image" 
          />
        </div>
      </div>
    </section>
  );
}
