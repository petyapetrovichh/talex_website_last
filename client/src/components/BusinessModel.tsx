import { Button } from "@/components/ui/button";

export default function BusinessModel() {
  return (
    <section className="bg-white">
      {/* =========================================
          MOBILE VIEW (Visible only on mobile)
          ========================================= */}
      <div className="md:hidden py-16 px-6" style={{marginTop: '159px'}}>
        <div className="text-center mb-12" style={{marginTop: '-177px'}}>
          <h2 className="text-3xl font-bold mb-6" style={{fontSize: '20px'}}>A model that changes everything</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8" style={{fontSize: '16px'}}>
            When fans don’t just support creators by tipping their work, but join real economic value distribution, the magic happens. For the first time, creators get what nobody has offered them before — a natural promotional instrument powered by their own audience.
            <br /><br />
            All that’s left is to focus on creating great content, not on the constant headache of chasing traffic.
          </p>
          <Button 
            onClick={() => window.location.href = '/model'}
            className="bg-[#6FF000] hover:bg-black hover:text-white text-black font-bold rounded-full px-8 py-6 w-full transition-colors"
          >
            Learn more about our model
          </Button>
        </div>

        <div className="relative w-full flex justify-center">
          <img src="/images/7.png" alt="Support & Earn" className="w-full max-w-[280px] h-auto drop-shadow-2xl" />
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW (Visible only on desktop)
          ========================================= */}
      <div className="hidden md:block container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">A model that changes everything</h2>
          <p className="text-lg text-gray-600 leading-relaxed px-4 md:px-16 h-auto">
            When fans don’t just support creators by tipping their work, but join real economic value distribution, the magic happens. For the first time, creators get what nobody has offered them before — a natural promotional instrument powered by their own audience.
            <br /><br />
            All that’s left is to focus on creating great content, not on the constant headache of chasing traffic.
          </p>
          <Button 
            onClick={() => window.location.href = '/model'}
            className="mt-8 bg-[#6FF000] hover:bg-black hover:text-white text-black font-bold rounded-full px-8 py-6 transition-colors"
          >
            Learn more about our model
          </Button>
        </div>

        <div className="relative max-w-5xl mx-auto w-full h-auto min-h-[600px]">
            {/* Central Phone Mockup */}
            <div className="relative z-10 w-full max-w-[320px] mx-auto">
                <img src="/images/00.png" alt="Support & Earn" className="w-full h-auto drop-shadow-2xl pt-20 md:pt-36 mt-16 mb-6" style={{marginTop: '45px', marginBottom: '10px'}} />
            </div>

            {/* Floating Cards - Left */}
            <div className="absolute top-0 left-0 lg:-left-10 w-64 animate-in slide-in-from-left-10 duration-1000">
                <img src="/images/8.png" alt="Unlock Full Story" className="w-full h-auto drop-shadow-xl" />
            </div>

            {/* Floating Cards - Right */}
            <div className="absolute top-20 right-0 lg:-right-10 w-64 animate-in slide-in-from-right-10 duration-1000 delay-200">
                <img src="/images/0.png" alt="Total Tipped" className="w-full h-auto drop-shadow-xl" style={{marginTop: '-96px'}} />
            </div>
            
            <div className="absolute bottom-0 right-10 lg:right-0 w-64 animate-in slide-in-from-bottom-10 duration-1000 delay-500">
                <img src="/11.png" alt="Rewards" className="w-full h-auto drop-shadow-xl" style={{marginTop: '-2px', marginBottom: '81px', marginLeft: '44px'}} />
            </div>
            
            <div className="absolute bottom-20 left-0 lg:-left-10 w-64 animate-in slide-in-from-bottom-10 duration-1000 delay-300">
                <img src="/10.png" alt="Earnings Detail" className="w-full h-auto drop-shadow-xl" />
            </div>
        </div>
      </div>
    </section>
  );
}
