import { Button } from "@/components/ui/button";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string; // In a real app, this would be the image path
  imageAlt: string;
  reverse?: boolean;
  buttonText?: string;
}

function Feature({ title, description, imageSrc, imageAlt, reverse, buttonText = "Start exploring" }: FeatureProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-24`}>
      <div className="flex-1 w-full flex justify-center">
        {/* Mockup Container */}
        <div className="relative w-full max-w-md mx-auto">
            <div className="relative z-10 bg-white rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden aspect-[9/19.5]">
                {/* Placeholder for feature screen */}
                <div className="w-full h-full bg-gray-50 flex flex-col">
                    <div className="p-6 border-b">
                        <div className="w-8 h-8 bg-gray-200 rounded-full mb-4"></div>
                        <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
                        <div className="w-1/2 h-4 bg-gray-100 rounded"></div>
                    </div>
                    <div className="p-6 flex-1">
                        <div className="w-full h-40 bg-gray-200 rounded-xl mb-4"></div>
                        <div className="space-y-3">
                            <div className="w-full h-3 bg-gray-100 rounded"></div>
                            <div className="w-full h-3 bg-gray-100 rounded"></div>
                            <div className="w-2/3 h-3 bg-gray-100 rounded"></div>
                        </div>
                    </div>
                    {/* Mockup content simulation */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                        <span className="text-4xl font-bold text-gray-300">{imageAlt}</span>
                    </div>
                </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#82E600]/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
      
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          {title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
          {description}
        </p>
        <Button className="bg-[#82E600] hover:bg-[#70C700] text-black font-bold rounded-full px-8 py-6 text-lg mt-4">
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
        imageSrc="/images/feature-1.png"
        imageAlt="Discover Feed"
      />
      
      <Feature 
        title="Support that can benefit in return"
        description="Every interaction counts. All content on TaleX is an asset. You can support creators by buying their content shares. When the content grows in value, you benefit too."
        imageSrc="/images/feature-2.png"
        imageAlt="Support & Earn"
        reverse={true}
        buttonText="Start earning"
      />
    </section>
  );
}
