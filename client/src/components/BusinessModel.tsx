import { Button } from "@/components/ui/button";

export default function BusinessModel() {
  return (
    <section style={{paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: 'white'}}>
      <div className="container">
        {/* 移动端标题区域 */}
        <div className="md:hidden text-center max-w-3xl mx-auto mb-20">
          <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
            <div style={{width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
            </div>
          </div>
          <h2 style={{fontSize: '28px', fontWeight: '700', marginBottom: '1.5rem', color: '#000000'}}>A model that changes everything</h2>
          <p style={{fontSize: '16px', color: '#666666', lineHeight: '1.625', paddingLeft: '1rem', paddingRight: '1rem'}}>
            When fans don't just support creators by tipping their work, but join real economic value distribution, the magic happens. For the first time, creators get what nobody has offered them before — a natural promotional instrument powered by their own audience.

All that's left is to focus on creating great content, not on the constant headache of chasing traffic.
          </p>
          <Button style={{marginTop: '2rem', backgroundColor: '#6FF000', color: '#000000', fontWeight: '700', borderRadius: '9999px', padding: '1.5rem 2rem'}}>
            Learn more about our model
          </Button>
        </div>

        {/* PC 端标题区域 */}
        <div className="hidden md:block text-center max-w-3xl mx-auto mb-20">
          <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
            <div style={{width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
            </div>
          </div>
          <h2 style={{fontSize: '36px', fontWeight: '700', marginBottom: '1.5rem', color: '#000000'}}>A model that changes everything</h2>
          <p style={{fontSize: '18px', color: '#666666', lineHeight: '1.625', paddingLeft: '1rem', paddingRight: '1rem'}}>
            When fans don't just support creators by tipping their work, but join real economic value distribution, the magic happens. For the first time, creators get what nobody has offered them before — a natural promotional instrument powered by their own audience.

All that's left is to focus on creating great content, not on the constant headache of chasing traffic.
          </p>
          <Button style={{marginTop: '2rem', backgroundColor: '#6FF000', color: '#000000', fontWeight: '700', borderRadius: '9999px', padding: '1.5rem 2rem'}}>
            Learn more about our model
          </Button>
        </div>

        {/* 移动端 Mockup */}
        <div className="md:hidden relative max-w-5xl mx-auto w-full h-auto min-h-[600px]">
            <div style={{position: 'relative', zIndex: 10, width: '100%', maxWidth: '320px', marginLeft: 'auto', marginRight: 'auto'}}>
                <img src="/images/7.png" alt="Support & Earn" style={{width: '100%', height: 'auto', paddingTop: '5rem', marginTop: '4rem', marginBottom: '1.5rem'}} />
            </div>
        </div>

        {/* PC 端 Mockup */}
        <div className="hidden md:block relative max-w-5xl mx-auto w-full h-auto min-h-[600px]">
            <div style={{position: 'relative', zIndex: 10, width: '100%', maxWidth: '320px', marginLeft: 'auto', marginRight: 'auto'}}>
                <img src="/images/7.png" alt="Support & Earn" style={{width: '100%', height: 'auto', paddingTop: '9rem', marginTop: '4rem', marginBottom: '1.5rem'}} />
            </div>

            {/* Floating Cards - Left */}
            <div className="absolute top-0 left-0 lg:-left-10 w-64 animate-in slide-in-from-left-10 duration-1000">
                <img src="/images/8.png" alt="Unlock Full Story" className="w-full h-auto drop-shadow-xl" />
            </div>

            {/* Floating Cards - Right */}
            <div className="absolute top-20 right-0 lg:-right-10 w-64 animate-in slide-in-from-right-10 duration-1000 delay-200">
                <img src="/images/9.png" alt="Total Tipped" className="w-full h-auto drop-shadow-xl" />
            </div>
            
            <div className="absolute bottom-0 right-10 lg:right-0 w-64 animate-in slide-in-from-bottom-10 duration-1000 delay-500">
                <img src="/11.png" alt="Rewards" className="w-full h-auto drop-shadow-xl" />
            </div>
            
            <div className="absolute bottom-20 left-0 lg:-left-10 w-64 animate-in slide-in-from-bottom-10 duration-1000 delay-300">
                <img src="/10.png" alt="Earnings Detail" className="w-full h-auto drop-shadow-xl" />
            </div>
        </div>
      </div>
    </section>
  );
}
