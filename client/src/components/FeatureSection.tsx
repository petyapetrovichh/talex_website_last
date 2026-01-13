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
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-12 lg:py-24 w-full`}>
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#6FF000]/10 rounded-full blur-3xl -z-10 scale-90"></div>
        </div>
      </div>
      
      <div className="flex-1 space-y-6 text-center lg:text-left w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 w-full">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 w-full">
          {description}
        </p>
        <Button className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold rounded-full px-8 py-6 text-lg mt-4 shadow-lg shadow-[#6FF000]/20 transition-all hover:scale-105">
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
