import { Button } from "@/components/ui/button";
import styles from "./BusinessModel.module.css";

export default function BusinessModel() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headerContainer}>
          <div style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'}}>
            <div style={{width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
            </div>
          </div>
          <h2 className={styles.headerTitle}>A model that changes everything</h2>
          <p className={styles.headerDescription}>
            When fans don't just support creators by tipping their work, but join real economic value distribution, the magic happens. For the first time, creators get what nobody has offered them before — a natural promotional instrument powered by their own audience.

All that's left is to focus on creating great content, not on the constant headache of chasing traffic.
          </p>
          <Button className={styles.learnMoreButton}>
            Learn more about our model
          </Button>
        </div>

        <div className={styles.mockupContainer}>
            {/* Central Phone Mockup */}
            <div className={styles.centralPhone}>
                <img src="/images/7.png" alt="Support & Earn" className={styles.centralPhoneImage} />
            </div>

            {/* Floating Cards - Left */}
            <div className={`${styles.floatingCard} ${styles.leftCard} animate-in slide-in-from-left-10 duration-1000`}>
                <img src="/images/8.png" alt="Unlock Full Story" className="w-full h-auto drop-shadow-xl" />
            </div>

            {/* Floating Cards - Right */}
            <div className={`${styles.floatingCard} ${styles.rightCard} animate-in slide-in-from-right-10 duration-1000 delay-200`}>
                <img src="/images/9.png" alt="Total Tipped" className="w-full h-auto drop-shadow-xl" />
            </div>
            
            <div className={`${styles.floatingCard} ${styles.bottomRightCard} animate-in slide-in-from-bottom-10 duration-1000 delay-500`}>
                <img src="/11.png" alt="Rewards" className="w-full h-auto drop-shadow-xl" />
            </div>
            
            <div className={`${styles.floatingCard} ${styles.bottomLeftCard} animate-in slide-in-from-bottom-10 duration-1000 delay-300`}>
                <img src="/10.png" alt="Earnings Detail" className="w-full h-auto drop-shadow-xl" />
            </div>
        </div>
      </div>
    </section>
  );
}
