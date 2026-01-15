import { Button } from "@/components/ui/button";
import { IMAGE_CONFIG } from "@/const";

export default function BusinessModel() {
  return (
    <section className="bg-white">
      {/* =========================================
          MOBILE VIEW (Visible only on mobile)
          ========================================= */}
      <div className="md:hidden py-16 px-6" style={{marginTop: '159px', height: '740px'}}>
        <div className="text-center mb-12" style={{marginTop: '-177px'}}>
          <h2 className="text-3xl font-bold mb-6" style={{fontSize: '20px'}}>A model that changes everything</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8" style={{fontSize: '16px'}}>
            When fans don't just support creators by tipping their work, but join real economic value distribution, the magic happens. For the first time, creators get what nobody has offered them before — a natural promotional instrument powered by their own audience.
            <br /><br />
            All that's left is to focus on creating great content, not on the constant headache of chasing traffic.
          </p>
          <Button 
            onClick={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = 'black';
              btn.style.color = 'white';
              setTimeout(() => {
                window.location.href = '/model';
              }, 100);
            }}
            className="bg-[#6FF000] hover:bg-black hover:text-white text-black font-bold rounded-full px-8 py-6 transition-all hover:scale-105 shadow-lg shadow-[#6FF000]/20" 
            onMouseDown={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = 'black';
              btn.style.color = 'white';
            }}
            onTouchStart={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = 'black';
              btn.style.color = 'white';
            }}
          >
            Learn more about our model
          </Button>
        </div>

        <div className="relative w-full flex justify-center">
          <img 
            src="/images/00.png" 
            alt="Support & Earn" 
            className="h-auto drop-shadow-2xl" 
            style={{width: `${IMAGE_CONFIG.unlockForMore.width}px`}} 
          />
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW (Visible only on desktop)
          ========================================= */}
      <div className="hidden md:block py-24 relative w-screen" style={{marginLeft: 'calc(-50vw + 50%)', height: '1241px'}}>
        {/* TEXT CONTAINER WITH MAX-WIDTH */}
        <div className="text-center max-w-3xl mx-auto mb-20" style={{marginTop: '-50px'}}>
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontSize: '39px', fontWeight: '400'}}>A model that changes everything</h2>
          <p className="text-lg text-gray-600 leading-relaxed px-4 md:px-16 h-auto" style={{color: '#000000'}}>
            When fans don't just support creators by tipping their work, but join real economic value distribution, the magic happens. For the first time, creators get what nobody has offered them before — a natural promotional instrument powered by their own audience.
            <br /><br />
            All that's left is to focus on creating great content, not on the constant headache of chasing traffic.
          </p>
          <Button 
            onClick={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = 'black';
              btn.style.color = 'white';
              setTimeout(() => {
                window.location.href = '/model';
              }, 100);
            }}
            className="mt-8 bg-[#6FF000] hover:bg-black hover:text-white text-black font-bold rounded-full px-8 py-6 transition-all hover:scale-105 shadow-lg shadow-[#6FF000]/20" 
            onMouseDown={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = 'black';
              btn.style.color = 'white';
            }}
            onTouchStart={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.backgroundColor = 'black';
              btn.style.color = 'white';
            }}
            style={{fontSize: '18px'}}
          >
            Learn more about our model
          </Button>
        </div>

        {/* Central Phone Mockup - /images/00.png */}
        <div 
          className="absolute" 
          style={{
            width: `${IMAGE_CONFIG.unlockForMore.width}px`,
            height: IMAGE_CONFIG.unlockForMore.height,
            top: IMAGE_CONFIG.unlockForMore.top,
            left: IMAGE_CONFIG.unlockForMore.left,
            right: IMAGE_CONFIG.unlockForMore.right,
            bottom: IMAGE_CONFIG.unlockForMore.bottom,
            transform: IMAGE_CONFIG.unlockForMore.transform,
            marginTop: IMAGE_CONFIG.unlockForMore.marginTop,
            marginBottom: IMAGE_CONFIG.unlockForMore.marginBottom,
            zIndex: 10,
          }}
        >
            <img 
              src="/images/00.png" 
              alt="Support & Earn" 
              className="w-full h-auto drop-shadow-2xl" 
            />
        </div>

        {/* Left Card - /images/8.png */}
        <div 
          className="absolute" 
          style={{
            width: `${IMAGE_CONFIG.eyesight.width}px`,
            height: IMAGE_CONFIG.eyesight.height,
            top: IMAGE_CONFIG.eyesight.top,
            left: IMAGE_CONFIG.eyesight.left,
            right: IMAGE_CONFIG.eyesight.right,
            bottom: IMAGE_CONFIG.eyesight.bottom,
            transform: IMAGE_CONFIG.eyesight.transform,
            zIndex: 9,
          }}
        >
            <img 
              src="/images/8.png" 
              alt="Your eyesight is very valuable" 
              className="w-full h-auto drop-shadow-xl" 
            />
        </div>

        {/* Right Top Card - /images/0.png */}
        <div 
          className="absolute" 
          style={{
            width: `${IMAGE_CONFIG.earningsDetail.width}px`,
            height: IMAGE_CONFIG.earningsDetail.height,
            top: IMAGE_CONFIG.earningsDetail.top,
            left: IMAGE_CONFIG.earningsDetail.left,
            right: IMAGE_CONFIG.earningsDetail.right,
            bottom: IMAGE_CONFIG.earningsDetail.bottom,
            transform: IMAGE_CONFIG.earningsDetail.transform,
            marginTop: IMAGE_CONFIG.earningsDetail.marginTop,
            zIndex: 9,
          }}
        >
            <img 
              src="/images/0.png" 
              alt="Earnings Detail" 
              className="w-full h-auto drop-shadow-xl" 
            />
        </div>
        
        {/* Right Bottom Card - /11.png */}
        <div 
          className="absolute" 
          style={{
            width: `${IMAGE_CONFIG.rewards.width}px`,
            height: IMAGE_CONFIG.rewards.height,
            top: IMAGE_CONFIG.rewards.top,
            left: IMAGE_CONFIG.rewards.left,
            right: IMAGE_CONFIG.rewards.right,
            bottom: IMAGE_CONFIG.rewards.bottom,
            transform: IMAGE_CONFIG.rewards.transform,
            marginTop: IMAGE_CONFIG.rewards.marginTop,
            marginBottom: IMAGE_CONFIG.rewards.marginBottom,
            marginLeft: IMAGE_CONFIG.rewards.marginLeft,
            zIndex: 9,
          }}
        >
            <img 
              src="/11.png" 
              alt="Rewards" 
              className="w-full h-auto drop-shadow-xl" 
            />
        </div>
        
        {/* Left Bottom Card - /10.png */}
        <div 
          className="absolute" 
          style={{
            width: `${IMAGE_CONFIG.totalTipped.width}px`,
            height: IMAGE_CONFIG.totalTipped.height,
            top: IMAGE_CONFIG.totalTipped.top,
            left: IMAGE_CONFIG.totalTipped.left,
            right: IMAGE_CONFIG.totalTipped.right,
            bottom: IMAGE_CONFIG.totalTipped.bottom,
            transform: IMAGE_CONFIG.totalTipped.transform,
            zIndex: 9,
          }}
        >
            <img 
              src="/10.png" 
              alt="Total Tipped" 
              className="w-full h-auto drop-shadow-xl" 
            />
        </div>
      </div>
    </section>
  );
}
