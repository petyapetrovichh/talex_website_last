import { Button } from "@/components/ui/button";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  buttonText?: string;
  // 新增属性，用于指定移动端显示的图片
  mobileImages?: { src: string; alt: string }[];
}

function Feature({ title, description, imageSrc, imageAlt, reverse, buttonText = "Start exploring in the app", mobileImages }: FeatureProps) {
  return (
    <>
      {/* =========================================
          MOBILE VIEW (Visible only on mobile)
          ========================================= */}
      <div className="md:hidden flex flex-col gap-8 py-12 w-full">
        {/* Mobile Image - Moved to top */}
        <div className="w-full flex justify-center px-4 gap-4 -mt-[87px]">
          {mobileImages ? (
            // 如果有指定的移动端图片组，则并排显示
            mobileImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={`w-1/2 max-w-[180px] object-contain drop-shadow-xl ${index === 0 ? 'mt-[33px] h-[313px]' : 'mt-[91px] h-auto'}`}
              />
            ))
          ) : (
            // 否则显示默认单张图片
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full max-w-sm object-contain drop-shadow-xl"
            />
          )}
        </div>

        <div className="w-full px-6 -mt-[21px]">
          <h2 className="text-3xl font-bold tracking-tight leading-tight mb-4 text-left" style={{fontSize: '22px'}}>
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
      </div>

      {/* =========================================
          DESKTOP VIEW (Visible only on desktop)
          ========================================= */}
      <div className={`hidden md:flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-12 lg:py-24 w-full relative min-h-[777px]`}>
        <div className="flex-1 w-full flex justify-center relative h-[600px]">
          {/* Phone6 - Absolutely positioned for first feature only */}
          {!reverse && (
            <>
              <img
                src="/images/Phone6.png"
                alt="TaleX app screen"
                className="hidden lg:block absolute object-contain drop-shadow-2xl w-[450px] h-auto"
                style={{
                  left: '0',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
              <img
                src="/images/Phone8_withdraw.png"
                alt="TaleX app screen"
                className="hidden lg:block absolute object-contain drop-shadow-2xl w-[450px] h-auto"
                style={{
                  right: '-20%',
                  bottom: '-20%',
                  zIndex: 10
                }}
              />
            </>
          )}
          
          {/* Phone8 - Absolutely positioned for reverse feature only */}
          {reverse && (
            <>
              <img
                src="/images/Phone8.png"
                alt="TaleX app screen"
                className="hidden lg:block absolute object-contain drop-shadow-2xl w-[450px] h-auto"
                style={{
                  left: '-20%',
                  top: '-10%',
                }}
              />
              <img
                src="/images/Phone7.png"
                alt="TaleX app screen"
                className="hidden lg:block absolute object-contain drop-shadow-2xl w-[450px] h-auto"
                style={{
                  right: '0',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10
                }}
              />
            </>
          )}
        </div>
        
        <div className="flex-1 space-y-6 text-center lg:text-left w-full pl-12">
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
    <section className="container py-10 pb-0 px-4 mb-2">
      <Feature 
        title="Discover works worth supporting"
        description={`On TaleX, discovery isn’t driven by ads, sponsored content, or engagement algorithms. The Home feed is a place to see what you and your friends genuinely choose to support — ideas that earn attention through real tips, not forced promotion.
It’s designed to help people build their own information pathways.`}
        imageSrc="/images/Phone6.png"
        imageAlt="Discover Feed"
        // 为第一个特性指定移动端并排显示的图片
        mobileImages={[
          { src: "/images/Phone6.png", alt: "Discover Feed" },
          { src: "/images/Phone8.png", alt: "Support & Earn" }
        ]}
      />
      
      <Feature 
        title="Support that can benefit in return"
        description="Every tip, whether to unlock full access or give extra support, is a prediction of the content's future popularity. If others tip it after you, you can benefit from being early. Content recommendation returns to its most powerful form — word of mouth."
        imageSrc="/images/Phone8.png"
        imageAlt="Support & Earn"
        reverse={true}
        buttonText="Start supporting & earning"
        // 为第二个特性指定移动端并排显示的图片
        mobileImages={[
          { src: "/images/Phone7.png", alt: "Support Feature" },
          { src: "/images/Phone9.png", alt: "Withdraw Feature" }
        ]}
      />
      
      {/* Mobile Illustration */}
      <div className="md:hidden w-full -mt-[60px] px-4 relative h-[300px]">
        <img
          src="/images/community_illustration.png"
          alt="Community illustration"
          className="absolute left-0 top-8 w-[174px] h-auto object-contain drop-shadow-xl"
        />
        <img
          src="/images/creator_illustration.png"
          alt="Creator illustration"
          className="absolute right-0 top-12 w-[158px] h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Desktop Illustration */}
      <div className="hidden md:block relative w-full h-[400px] mt-[100px]">
        <img
          src="/images/community_illustration.png"
          alt="Community illustration"
          className="absolute left-[10%] top-[-150px] w-[600px] h-auto object-contain drop-shadow-2xl"
        />
        
        <img
          src="/images/creator_illustration.png"
          alt="Creator illustration"
          className="absolute right-0 top-[-150px] w-[500px] h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
