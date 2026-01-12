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
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-24`} style={{marginTop: '-1px', paddingBottom: '0px', marginLeft: '167px'}}>
      <div className="flex-1 w-full flex justify-center">
        {/* Mockup Container */}
        <div className="relative w-full max-w-md mx-auto">
            {/* Image Container - Removed border/shadow wrapper to let the image shine as is, or keep minimal if needed */}
            <div className="relative z-10 flex justify-center">
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="w-full h-auto object-contain max-h-[600px] drop-shadow-2xl"
                />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#82E600]/10 rounded-full blur-3xl -z-10 scale-90"></div>
        </div>
      </div>
      
      <div className="flex-1 space-y-6 text-center lg:text-left" style={{marginLeft: '-121px', paddingRight: '13px'}}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight" style={{paddingRight: '19px', marginRight: '-219px', marginBottom: '27px'}}>
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0" style={{paddingBottom: '0px', paddingLeft: '0px', marginTop: '15px', marginRight: '43px', marginBottom: '30px', marginLeft: '2px', paddingRight: '0px', width: '638px'}}>
          {description}
        </p>
        <Button className="bg-[#82E600] hover:bg-black text-black hover:text-white font-bold rounded-full px-8 py-6 text-lg mt-4 shadow-lg shadow-[#82E600]/20 transition-all hover:scale-105">
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
        description="On TaleX, discovery isn’t driven by ads, sponsored content, or engagement algorithms. The Home feed is a place to see what you and your friends genuinely choose to support — ideas that earn attention through real tips, not forced promotion. It’s designed to help people build your own information pathways."
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
