import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Model() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Header />
      
      <div className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative py-24 overflow-hidden bg-white md:h-[595px] h-[201px] md:pt-24 pt-[17px] md:mt-0 -mt-[14px]">
          
          <div className="container relative z-10 text-center md:w-[1592px] w-full md:h-[539px] h-auto mx-auto px-0">
            <div className="relative z-20">
              <h1 className="md:text-[56px] text-[26px] font-bold mb-6 font-serif tracking-tight md:h-auto h-[53px] md:mb-6 mb-[25px]" style={{fontFamily: '"Abril Fatface", serif'}}>
                A new economic engine for great content
              </h1>
              <p className="text-gray-600 md:text-xl text-[15px] md:mb-12 mb-[44px] max-w-2xl mx-auto md:mt-0 -mt-[16px]">
                Single-Content Purchase & Prediction Market
              </p>
            </div>
            
            {/* Sketch Illustration */}
            <div className="relative w-full md:max-w-5xl mx-auto md:h-[591px] h-[216px] md:mt-[-110px] -mt-[177px] z-0 md:mb-[-38px] mb-0">
               <img 
                 src="/images/Group1556239238.png" 
                 alt="People connecting sketch" 
                 className="w-full h-full md:object-fill object-cover"
               />
            </div>
          </div>
        </section>

        {/* 2. What went wrong? */}
        <section className="py-24 bg-white md:mt-[74px] mt-[3px] md:pt-24 pt-[48px]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-bold mb-2 font-serif md:text-4xl text-[26px]">What went wrong?</h2>
              <p className="text-gray-500 uppercase tracking-widest md:text-sm text-[15px]">The Broken Content Economy</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* For Creators */}
              <div>
                <h3 className="text-xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">For Creators</h3>
                <div className="space-y-8 md:pt-0 pt-[26px]">
                  <div className="flex gap-4 items-start group md:mt-0 -mt-[28px] md:pb-0 pb-[20px]">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/1.png" alt="Subscription Ceiling" className="md:w-6 md:h-6 w-[113px] h-[48px] object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      <strong>Subscription Ceiling:</strong> Hard to convince users to subscribe forever for occasional hits.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/2.png" alt="Centralized Traffic" className="md:w-6 md:h-6 w-[50px] h-[50px] object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 md:mt-0 mt-[10px]">
                      <strong>Centralized Traffic:</strong> Platforms control who sees what; good content gets buried without ads.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/3.png" alt="Unpredictable Income" className="w-6 h-6" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      <strong>Unpredictable Income:</strong> Relying on algorithms or sporadic donations is unstable.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Supporters */}
              <div>
                <h3 className="text-xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">For Supporters</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/4.png" alt="Passive Consumption" className="w-6 h-6" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      <strong>Passive Consumption:</strong> You pay, you read, you leave. No upside for discovering early gems.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/5.png" alt="No Influence" className="w-6 h-6" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      <strong>No Influence:</strong> Your taste doesn't shape the platform; algorithms do.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/6.png" alt="Wasted Insight" className="w-6 h-6" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      <strong>Wasted Insight:</strong> Knowing what's good before others do has no economic value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The TaleX Solution */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 font-serif">The TaleX Solution</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Prediction Markets for Content</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-48 mb-6 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                  <img src="/images/Group1556239239.png" alt="Buy to Access" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">Buy to Access</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Users pay a small fee (e.g., $1) to unlock a specific article or video. No monthly subscriptions required.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-48 mb-6 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                  <img src="/images/Group1556239240.png" alt="Tip to Predict" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tip to Predict</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Supporters can tip extra. This isn't just a donation—it buys a "share" of future revenue from that content.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="h-48 mb-6 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                  <img src="/images/Group1556239241.png" alt="Earn from Growth" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">Earn from Growth</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As more people unlock or tip the content, early tippers earn a portion of the new revenue. Your taste pays off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How It Works (Steps) */}
        <section className="py-24 bg-white">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center font-serif">How It Works</h2>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-right order-2 md:order-1">
                  <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-4">STEP 1</div>
                  <h3 className="text-2xl font-bold mb-4">Creator Publishes</h3>
                  <p className="text-gray-600">
                    A creator posts a high-quality article or video. They set a base unlock price (e.g., $1).
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#6FF000] flex items-center justify-center text-2xl font-bold shrink-0 order-1 md:order-2">1</div>
                <div className="flex-1 order-3">
                  <div className="bg-gray-50 rounded-xl p-6 h-48 flex items-center justify-center">
                    <img src="/images/Group1556239242.png" alt="Publish" className="h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 order-3 md:order-1">
                  <div className="bg-gray-50 rounded-xl p-6 h-48 flex items-center justify-center">
                    <img src="/images/Group1556239243.png" alt="Unlock" className="h-full object-contain" />
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#6FF000] flex items-center justify-center text-2xl font-bold shrink-0 order-1 md:order-2">2</div>
                <div className="flex-1 text-center md:text-left order-2 md:order-3">
                  <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-4">STEP 2</div>
                  <h3 className="text-2xl font-bold mb-4">Reader Unlocks</h3>
                  <p className="text-gray-600">
                    Readers pay the $1 to access the content. 80% goes to the creator immediately.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-right order-2 md:order-1">
                  <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-4">STEP 3</div>
                  <h3 className="text-2xl font-bold mb-4">Supporter Tips</h3>
                  <p className="text-gray-600">
                    A reader loves the content and tips $10. They now own a "prediction share" in the content's future success.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#6FF000] flex items-center justify-center text-2xl font-bold shrink-0 order-1 md:order-2">3</div>
                <div className="flex-1 order-3">
                  <div className="bg-gray-50 rounded-xl p-6 h-48 flex items-center justify-center">
                    <img src="/images/Group1556239244.png" alt="Tip" className="h-full object-contain" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 order-3 md:order-1">
                  <div className="bg-gray-50 rounded-xl p-6 h-48 flex items-center justify-center">
                    <img src="/images/Group1556239245.png" alt="Earn" className="h-full object-contain" />
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#6FF000] flex items-center justify-center text-2xl font-bold shrink-0 order-1 md:order-2">4</div>
                <div className="flex-1 text-center md:text-left order-2 md:order-3">
                  <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full mb-4">STEP 4</div>
                  <h3 className="text-2xl font-bold mb-4">Everyone Wins</h3>
                  <p className="text-gray-600">
                    Future unlocks and tips are split: Creator gets the majority, but early tippers also get a cut. The better the content does, the more everyone earns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA */}
        <section className="py-24 bg-black text-white text-center">
          <div className="container max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">Ready to reshape the content economy?</h2>
            <p className="text-xl text-gray-400 mb-12">
              Join TaleX today. Create great work, support what you love, and earn from your taste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = 'https://www.talex.world/publish'}
                className="bg-[#6FF000] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
              >
                Start Creating
              </button>
              <button 
                onClick={() => window.location.href = 'https://www.talex.world'}
                className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors"
              >
                Start Exploring
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
