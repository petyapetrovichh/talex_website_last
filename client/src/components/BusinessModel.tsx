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
      <div className="hidden md:block pt-24 pb-0 relative" style={{marginLeft: '9px', height: '1241px', width: '1500px'}}>
        {/* TEXT CONTAINER WITH MAX-WIDTH */}
        <div className="text-center max-w-3xl mx-auto mb-20" style={{marginTop: '-50px'}}>
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontSize: '39px', fontWeight: '400', color: '#000000'}}>A model that changes everything</h2>
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

        {/* Model 1 Card - /images/model1.png */}
        <div 
          className="absolute" 
          style={{
            width: `${IMAGE_CONFIG.model1.width}px`,
            height: IMAGE_CONFIG.model1.height,
            top: IMAGE_CONFIG.model1.top,
            left: `calc(${IMAGE_CONFIG.model1.left} + ${IMAGE_CONFIG.model1.offsetX}px)`,
            right: IMAGE_CONFIG.model1.right,
            bottom: IMAGE_CONFIG.model1.bottom,
            transform: IMAGE_CONFIG.model1.transform,
            marginTop: IMAGE_CONFIG.model1.marginTop,
            marginLeft: IMAGE_CONFIG.model1.marginLeft,
            zIndex: 9,
          }}
        >
            <img 
              src="/images/model1.png" 
              alt="Model 1" 
              className="w-full h-auto drop-shadow-xl"
            />
        </div>

        {/* Model 2 - /images/model2.png */}
        <div 
          className="absolute" 
          style={{
            width: `${IMAGE_CONFIG.model2.width}px`,
            height: IMAGE_CONFIG.model2.height,
            top: IMAGE_CONFIG.model2.top,
            left: IMAGE_CONFIG.model2.left,
            right: IMAGE_CONFIG.model2.right,
            bottom: IMAGE_CONFIG.model2.bottom,
            transform: `${IMAGE_CONFIG.model2.transform} translate(${IMAGE_CONFIG.model2.offsetX}px, ${IMAGE_CONFIG.model2.offsetY}px)`,
            marginTop: IMAGE_CONFIG.model2.marginTop,
            marginLeft: IMAGE_CONFIG.model2.marginLeft,
            zIndex: 9,
          }}
        >
            <img 
              src="/images/model2.png" 
              alt="Model 2" 
              className="w-full h-auto drop-shadow-xl"
            />
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
            transform: `${IMAGE_CONFIG.unlockForMore.transform} translate(${IMAGE_CONFIG.unlockForMore.offsetX}px, ${IMAGE_CONFIG.unlockForMore.offsetY}px)`,
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

        {/* Model 3 - /images/model3.png */}
        <div 
          className="absolute" 
          style={{
            width: `${IMAGE_CONFIG.model3.width}px`,
            height: IMAGE_CONFIG.model3.height,
            top: IMAGE_CONFIG.model3.top,
            left: IMAGE_CONFIG.model3.left,
            right: IMAGE_CONFIG.model3.right,
            bottom: IMAGE_CONFIG.model3.bottom,
            transform: `${IMAGE_CONFIG.model3.transform} translate(${IMAGE_CONFIG.model3.offsetX}px, ${IMAGE_CONFIG.model3.offsetY}px)`,
            marginTop: IMAGE_CONFIG.model3.marginTop,
            marginRight: IMAGE_CONFIG.model3.marginRight,
            zIndex: 9,
          }}
        >
            <img 
              src="/images/model3.png" 
              alt="Model 3" 
              className="w-full h-auto drop-shadow-xl"
            />
        </div>

        {/* MODEL 4 - Right side, bottom */}
        <div
          style={{
            position: "absolute",
            width: `${IMAGE_CONFIG.model4.width}px`,
            height: IMAGE_CONFIG.model4.height,
            top: IMAGE_CONFIG.model4.top,
            left: IMAGE_CONFIG.model4.left,
            right: IMAGE_CONFIG.model4.right,
            bottom: IMAGE_CONFIG.model4.bottom,
            transform: IMAGE_CONFIG.model4.transform,
            marginTop: IMAGE_CONFIG.model4.marginTop,
            marginRight: IMAGE_CONFIG.model4.marginRight,
            zIndex: 9,
          }}
        >
            <img 
              src="/images/model4.png" 
              alt="Model 4" 
              className="w-full h-auto drop-shadow-xl"
            />
        </div>


      </div>
    </section>
  );
}
