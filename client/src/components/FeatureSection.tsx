import { Button } from "@/components/ui/button";
import styles from "./FeatureSection.module.css";

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
    <div className={styles.featureContainer}>
      <div style={{flex: 1, width: '100%', display: 'flex', justifyContent: 'center'}}>

      </div>
      
      {/* Phone6 - Absolutely positioned for first feature only */}
      {!reverse && (
        <img
          src="/images/Phone6.png"
          alt="TaleX app screen"
          className={`object-contain drop-shadow-2xl ${styles.phone6Image}`}
        />
      )}
      
      {/* Phone8_withdraw - Absolutely positioned next to Phone6 for first feature */}
      {!reverse && (
        <img
          src="/images/Phone8_withdraw.png"
          alt="TaleX app screen"
          className={`object-contain drop-shadow-2xl ${styles.phone8WithdrawImage}`}
        />
      )}
      
      {/* Phone8 - Absolutely positioned for reverse feature only */}
      {reverse && (
        <img
          src="/images/Phone8.png"
          alt="TaleX app screen"
          className={`object-contain drop-shadow-2xl ${styles.phone8Image}`}
        />
      )}
      
      {/* Phone7 - Absolutely positioned for reverse feature (right side) */}
      {reverse && (
        <img
          src="/images/Phone7.png"
          alt="TaleX app screen"
          className={`object-contain drop-shadow-2xl ${styles.phone7Image}`}
        />
      )}
      
      <div className={styles.featureContent}>
        <h2 className={styles.featureTitle}>
          {title}
        </h2>
        <p className={styles.featureDescription}>
          {description}
        </p>
        <Button 
          onClick={() => window.location.href = 'https://www.talex.world/reading/585449588677'}
          className={`bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold rounded-full px-8 py-6 text-lg shadow-lg shadow-[#6FF000]/20 transition-all hover:scale-105 ${styles.featureButton}`}
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
        description={`On TaleX, discovery isn't driven by ads, sponsored content, or engagement algorithms. The Home feed is a place to see what you and your friends genuinely choose to support — ideas that earn attention through real tips, not forced promotion.
It's designed to help people build their own information pathways.`}
        imageSrc="/2.png"
        imageAlt="Discover Feed"
      />
      
      <Feature 
        title="Support that can benefit in return"
        description="Every tip, whether to unlock full access or give extra support, is a prediction of the content's future popularity. If others tip it after you, you can benefit from being early. Content recommendation returns to its most powerful form — word of mouth."
        imageSrc="/3.png"
        imageAlt="Support & Earn"
        reverse={true}
        buttonText="Start supporting & earning"
      />
      
      <div className={styles.illustrationContainer}>
        <img
          src="/images/community_illustration.png"
          alt="Community illustration"
          className={`drop-shadow-2xl ${styles.communityIllustration}`}
        />
        
        <img
          src="/images/creator_illustration.png"
          alt="Creator illustration"
          className={`drop-shadow-2xl ${styles.creatorIllustration}`}
        />
      </div>
    </section>
  );
}
