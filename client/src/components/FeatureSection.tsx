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
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-24`}>
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
      
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
          {description}
        </p>
        <Button className="bg-[#82E600] hover:bg-[#70C700] text-black font-bold rounded-full px-8 py-6 text-lg mt-4 shadow-lg shadow-[#82E600]/20 transition-transform hover:scale-105">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section className="container py-10">
      <Feature 
        title="Discover works worth supporting"
        description="On TaleX, finding new content by your favorite creators or discovering hidden gems has never been easier. Our feed is designed to help you build your own information ecology."
        imageSrc="/17.png"
        imageAlt="Discover Feed"
      />
      
      <Feature 
        title="Support that can benefit in return"
        description="Every interaction counts. All content on TaleX is an asset. You can support creators by buying their content shares. When the content grows in value, you benefit too."
        imageSrc="/18.png"
        imageAlt="Support & Earn"
        reverse={true}
        buttonText="Start supporting & earning"
      />
    </section>
  );
}
