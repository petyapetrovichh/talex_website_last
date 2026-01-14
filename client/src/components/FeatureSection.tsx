import { Button } from "@/components/ui/button";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  buttonText?: string;
}

function Feature({ title, description, imageSrc, imageAlt, reverse, buttonText = "Start exploring in the app" }: FeatureProps) {
  return (
    <>
      {/* =========================================
          MOBILE VIEW (Visible only on mobile)
          ========================================= */}
      <div className="md:hidden flex flex-col gap-8 py-12 w-full">
        <div className="w-full px-6">
          <h2 className="text-3xl font-bold tracking-tight leading-tight mb-4 text-left" style={{fontSize: '28px'}}>
            {title}
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6 text-left" style={{fontSize: '16px'}}>
            {description}
          </p>
          <Button 
            onClick={() => window.location.href = 'https://www.talex.world/reading/585449588677'}
            className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold rounded-full px-8 py-6 text-lg shadow-lg shadow-[#6FF000]/20 transition-all hover:scale-105 w-full" 
          >
            {buttonText}
          </Button>
        </div>
        
        {/* Mobile Image */}
        <div className="w-full flex justify-center px-4">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-w-sm object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW (Visible only on desktop)
          ========================================= */}
      <div className={`hidden md:flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-12 lg:py-24 w-full relative`} style={{height: '777px'}}>
        <div className="flex-1 w-full flex justify-center">

        </div>
        
        {/* Phone6 - Absolutely positioned for first feature only */}
        {!reverse && (
          <img
            src="/images/Phone6.png"
            alt="TaleX app screen"
            className="hidden lg:block absolute object-contain drop-shadow-2xl"
            style={{
              left: '-150px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '450px',
              height: 'auto',
              marginLeft: '160px',
            }}
          />
        )}
        
        {/* Phone8_withdraw - Absolutely positioned next to Phone6 for first feature */}
        {!reverse && (
          <img
            src="/images/Phone8_withdraw.png"
            alt="TaleX app screen"
            className="hidden lg:block absolute object-contain drop-shadow-2xl"
            style={{
              left: '-150px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '450px',
              height: 'auto',
              marginLeft: '1185px',
              marginTop: '826px',
            }}
          />
        )}
        
        {/* Phone8 - Absolutely positioned for reverse feature only */}
        {reverse && (
          <img
            src="/images/Phone8.png"
            alt="TaleX app screen"
            className="hidden lg:block absolute object-contain drop-shadow-2xl"
            style={{
              right: '-150px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '450px',
              height: 'auto',
              marginRight: '762px',
              marginTop: '-700px',
            }}
          />
        )}
        
        {/* Phone7 - Absolutely positioned for reverse feature (right side) */}
        {reverse && (
          <img
            src="/images/Phone7.png"
            alt="TaleX app screen"
            className="hidden lg:block absolute object-contain drop-shadow-2xl"
            style={{
              right: '-150px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '450px',
              height: 'auto',
              marginRight: '515px',
              marginTop: '150px',
            }}
          />
        )}
        
        <div className="flex-1 space-y-6 text-center lg:text-left w-full" style={{marginLeft: '60px', marginRight: '-100px', marginTop: '200px'}}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6 w-full" style={{fontWeight: '400', fontSize: '39px', color: '#000000', marginBottom: '24px'}}>
            {title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 w-full" style={{color: '#000000'}}>
            {description}
          </p>
          <Button 
            onClick={() => window.location.href = 'https://www.talex.world/reading/585449588677'}
            className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold rounded-full px-8 py-6 text-lg mt-4 shadow-lg shadow-[#6FF000]/20 transition-all hover:scale-105" 
            style={{marginTop: '-15px'}}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </>
  );
}

export default function FeatureSection() {
  return (
    <section className="container py-10" style={{paddingBottom: '0px'}}>
      <Feature 
        title="Discover works worth supporting"
        description={`On TaleX, discovery isn’t driven by ads, sponsored content, or engagement algorithms. The Home feed is a place to see what you and your friends genuinely choose to support — ideas that earn attention through real tips, not forced promotion.
It’s designed to help people build their own information pathways.`}
        imageSrc="/images/Phone6.png"
        imageAlt="Discover Feed"
      />
      
      <Feature 
        title="Support that can benefit in return"
        description="Every tip, whether to unlock full access or give extra support, is a prediction of the content's future popularity. If others tip it after you, you can benefit from being early. Content recommendation returns to its most powerful form — word of mouth."
        imageSrc="/images/Phone8.png"
        imageAlt="Support & Earn"
        reverse={true}
        buttonText="Start supporting & earning"
      />
      
      {/* Mobile Illustration */}
      <div className="md:hidden w-full mt-12 px-4">
        <img
          src="/images/community_illustration.png"
          alt="Community illustration"
          className="w-full h-auto object-contain drop-shadow-xl mb-8"
        />
        <img
          src="/images/creator_illustration.png"
          alt="Creator illustration"
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Desktop Illustration */}
      <div className="hidden md:block relative w-full" style={{height: '400px', marginTop: '100px'}}>
        <img
          src="/images/community_illustration.png"
          alt="Community illustration"
          className="absolute object-contain drop-shadow-2xl"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: 'auto',
            top: '0',
            marginTop: '-150px',
            marginLeft: '-466px',
          }}
        />
        
        <img
          src="/images/creator_illustration.png"
          alt="Creator illustration"
          className="absolute object-contain drop-shadow-2xl"
          style={{
            right: '0',
            width: '500px',
            height: 'auto',
            top: '50%',
            transform: 'translateY(-50%)',
            marginTop: '-158px',
            marginRight: '-40px',
          }}
        />
      </div>
    </section>
  );
}
