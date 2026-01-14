import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`relative overflow-hidden bg-white ${styles.heroContainer}`} style={{height: '750px'}}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/hero-bg-new.png')] bg-cover bg-center bg-no-repeat pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="relative w-full h-full">
          {/* Left side - Text content */}
          <div className={styles.textContainer}>
            <h1 className={`font-bold tracking-tight leading-[1.1] mb-6 w-full max-w-[559px] ${styles.title}`}>
              TaleX is where <br />
              <span className="relative inline-block" style={{color: '#6FF000'}}>
                great content
              </span> pays off <br />
              both creators and supporters
            </h1>
            <p className={`text-gray-600 mb-8 leading-relaxed w-full max-w-[815px] ${styles.description}`}>
              TaleX is a new content app where creators and fans grow together. Here, supporting content means more than donating — it means predicting its future and helping it spread. Every Tale, whether it's an article, book, podcast, or video, has X ways to travel farther, faster, and reward those who believe in it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.location.href = 'https://www.talex.world/publish'}
                className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-[#6FF000]/20 transition-all hover:scale-105"
              >
                Tell Your Tale
              </Button>
            </div>
          </div>

          {/* Right side - Phone mockups with absolute positioning */}
          <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
            {/* Phone 1 - Phone5(1).png */}
            <img 
              src="/images/Phone5(1).png" 
              alt="TaleX app screen 1"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                top: '80px',
                right: '600px',
                width: '200px',
                height: 'auto',
                marginTop: '270px',
                marginRight: '-580px',
              }}
            />

            {/* Phone 2 - Phone2(1).png */}
            <img 
              src="/images/Phone2(1).png" 
              alt="TaleX app screen 2"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                top: '100px',
                right: '400px',
                width: '200px',
                height: 'auto',
                marginTop: '275px',
                marginRight: '127px',
              }}
            />

            {/* Phone 3 - Phone1(1).png */}
            <img 
              src="/images/Phone1(1).png" 
              alt="TaleX app screen 3"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                top: '120px',
                right: '99px',
                width: '200px',
                height: '349px',
                marginTop: '-167px',
                marginRight: '428px',
              }}
            />

            {/* Phone 4 - Phone4.png */}
            <img 
              src="/images/Phone4.png" 
              alt="TaleX app screen 4"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                top: '90px',
                right: '0px',
                width: '200px',
                height: 'auto',
                marginTop: '-100px',
                marginRight: '20px',
              }}
            />

            {/* Phone 5 - Phone3.png */}
            <img 
              src="/images/Phone3.png" 
              alt="TaleX app screen 5"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                top: '110px',
                right: '-180px',
                width: '350px',
                height: 'auto',
                marginTop: '-100px',
                marginRight: '378px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
