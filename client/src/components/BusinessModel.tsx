import { Button } from "@/components/ui/button";

export default function BusinessModel() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              <img src="/5.png" alt="TaleX" className="w-full h-full object-contain" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">A model that changes everything</h2>
          <p className="text-lg text-gray-600 leading-relaxed" style={{paddingLeft: '63px', paddingRight: '4px', marginRight: '2px', height: '169px'}}>
            When fans don’t just support creators by tipping their work, but join real economic value distribution, the magic happens. For the first time, creators get what nobody has offered them before — a natural promotional instrument powered by their own audience.

All that’s left is to focus on creating great content, not on the constant headache of chasing traffic.
          </p>
          <Button className="mt-8 bg-[#6FF000] hover:bg-[#5ED000] text-black font-bold rounded-full px-8 py-6">
            Learn more about our model
          </Button>
        </div>

        <div className="relative max-w-5xl mx-auto">
            {/* Central Phone Mockup */}
            <div className="relative z-10 w-full max-w-[320px] mx-auto">
                <img src="/images/7.png" alt="Support & Earn" className="w-full h-auto drop-shadow-2xl" style={{paddingTop: '151px', marginTop: '66px', marginBottom: '25px'}} />
            </div>

            {/* Floating Cards - Left */}
            <div className="hidden md:block absolute top-20 left-0 lg:-left-10 w-64 animate-in slide-in-from-left-10 duration-1000" style={{marginTop: '-80px', marginLeft: '1px'}}>
                <img src="/images/8.png" alt="Unlock Full Story" className="w-full h-auto drop-shadow-xl" style={{width: '237px', height: '206px'}} />
            </div>

            {/* Floating Cards - Right */}
            <div className="hidden md:block absolute top-40 right-0 lg:-right-10 w-64 animate-in slide-in-from-right-10 duration-1000 delay-200" style={{marginTop: '107px', marginRight: '-2px', marginBottom: '-36px', marginLeft: '-856px'}}>
                <img src="/images/9.png" alt="Total Tipped" className="w-full h-auto drop-shadow-xl" style={{marginLeft: '-849px'}} />
            </div>
            
            <div className="hidden md:block absolute bottom-20 right-10 lg:right-0 w-64 animate-in slide-in-from-bottom-10 duration-1000 delay-500">
                <img src="/11.png" alt="Rewards" className="w-full h-auto drop-shadow-xl" style={{marginBottom: '-208px', marginLeft: '9px', marginTop: '-35px'}} />
            </div>
            
            <div className="hidden md:block absolute bottom-40 left-0 lg:-left-10 w-64 animate-in slide-in-from-bottom-10 duration-1000 delay-300">
                <img src="/10.png" alt="Earnings Detail" className="w-full h-auto drop-shadow-xl" style={{marginTop: '3px', marginBottom: '291px', marginLeft: '821px'}} />
            </div>
        </div>
      </div>
    </section>
  );
}
