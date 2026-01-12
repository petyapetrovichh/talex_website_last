import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function CreatorQuote() {
  return (
    <section className="relative py-32 bg-[#F0FDF4] overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/images/4.png" alt="World Map Background" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img src="/5.png" alt="Icon" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10" style={{fontWeight: '300'}}>
            "Being an independent creator often means pushing yourself to earn your first $1 — and then constantly thinking about how to drive traffic. Basically, chaos comes in waves: when content's liquidity dries, thinking more about attracting traffic than about the quality of their footage. That's when the panic hits: support creators sometimes, or just stops. Only a few manage to survive this drift. For me, the most valuable thing is extending a helping hand to creators — so you don't fall into this trap. <br/>
            <span className="font-bold mt-4 block" style={{fontWeight: '300'}}>We want a solution, a brilliant one."</span>
          </blockquote>
          
          <div className="flex flex-col items-center gap-2">
            <cite className="not-italic font-bold text-lg">- Petr Osipov</cite>
            <span className="text-sm text-gray-500">TaleX</span>
            
            <Button variant="outline" className="mt-6 rounded-full px-6 gap-2 border-black text-black hover:bg-black hover:text-white transition-colors">
              <Play size={16} fill="currentColor" /> Watch Video
            </Button>
          </div>
        </div>
        
        {/* Floating Creator Images - Simulated */}
        <div className="absolute top-1/2 left-4 md:left-20 transform -translate-y-1/2 hidden lg:block">
            <div className="w-32 h-40 bg-gray-200 rounded-lg rotate-[-6deg] shadow-lg overflow-hidden border-4 border-white" style={{width: '255px', height: '327px', marginRight: '5px', marginBottom: '-284px', marginLeft: '-148px'}}>
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop" alt="Creator" className="w-full h-full object-cover" style={{marginTop: '-5px', marginRight: '13px', width: '255px', height: '334px'}} />
            </div>
        </div>
        <div className="absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2 hidden lg:block">
            <div className="w-32 h-40 bg-gray-200 rounded-lg rotate-[6deg] shadow-lg overflow-hidden border-4 border-white" style={{width: '253px', height: '338px', marginTop: '43px', marginRight: '-172px', marginBottom: '58px'}}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" alt="Creator" className="w-full h-full object-cover" style={{marginTop: '-4px', width: '288px', height: '331px', marginRight: '-93px'}} />
            </div>
        </div>
        
        {/* Bottom Center Image */}
        <div className="flex justify-center mt-16">
             <div className="overflow-hidden border-4 border-white shadow-xl" style={{width: '206px', height: '215px', borderRadius: '20px'}}>
                <img src="/images/6.png" alt="Petr Osipov" className="w-full h-full object-cover" style={{paddingBottom: '15px'}} />
             </div>
        </div>
      </div>
    </section>
  );
}
