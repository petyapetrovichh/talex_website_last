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
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-12 lg:py-24 w-full relative`} style={{height: '777px'}}>
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
            marginLeft: '700px',
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
            marginRight: '499px',
            marginTop: '150px',
          }}
        />
      )}
      
      <div className="flex-1 space-y-6 text-center lg:text-left w-full" style={{marginLeft: '60px', marginRight: '-100px'}}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6 w-full" style={{fontWeight: '400', fontSize: '39px', color: '#000000'}}>
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
  );
}

export default function FeatureSection() {
  return (
    <section className="container py-10" style={{paddingBottom: '0px'}}>
      <Feature 
        title="Discover works worth supporting"
        description={`On TaleX, discovery isn’t driven by ads, sponsored content, or engagement algorithms. The Home feed is a place to see what you and your friends genuinely choose to support — ideas that earn attention through real tips, not forced promotion.
It’s designed to help people build their own information pathways.`}
        imageSrc="/2.png"
        imageAlt="Discover Feed"
      />
      
      <Feature 
        title="Support that can benefit in return"
        description="Every tip, whether to unlock full access or give extra support, is a prediction of the content’s future popularity. If others tip it after you, you can benefit from being early. Content recommendation returns to its most powerful form — word of mouth."
        imageSrc="/3.png"
        imageAlt="Support & Earn"
        reverse={true}
        buttonText="Start supporting & earning"
      />
    </section>
  );
}
