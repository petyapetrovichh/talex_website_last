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
                      <strong>Centralized Traffic:</strong> Algorithms favor clickbait over quality.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group" style={{paddingTop: '9px'}}>
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/3.png" alt="No Ownership" className="md:w-6 md:h-6 w-[50px] h-[50px] object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 md:mt-0 mt-[10px]">
                      <strong>No Ownership:</strong> You build the audience, but the platform owns the relationship.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Users */}
              <div>
                <h3 className="text-xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">For Users</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform md:w-12 md:h-12 w-[48px] h-[48px]">
                      <img src="/images/4.png" alt="Information Overload" className="md:w-6 md:h-6 w-[50px] h-[50px] object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 md:mt-0 mt-[13px]">
                      <strong>Information Overload:</strong> Valuable content is buried in noise and ads.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform overflow-visible">
                      <img src="/images/5.png" alt="Inefficient Payment" className="w-full h-full object-contain md:w-auto md:h-auto" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 md:mt-0 mt-[10px]">
                      <strong>Inefficient Payment:</strong> Forced to buy “the whole farm” just to eat one apple.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/6.png" alt="Passive Role" className="md:w-6 md:h-6 w-[50px] h-[50px] object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 md:mt-0 mt-[11px]">
                      <strong>Passive Role:</strong> No incentive to curate or filter good content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="w-full relative z-10">
          <img src="/images/Maskgroup.png" alt="Separator" className="w-full h-auto object-cover" />
        </div>

        {/* 3. Three core pillars of the new engine */}
        <section className="py-24 bg-white md:mt-[47px] mt-0">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-2 font-serif">Three core pillars of the new engine</h2>
            <p className="text-gray-500 text-sm mb-16 uppercase tracking-widest">The Foundation of the User-Driven Business Model</p>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 mb-6 text-[#6FF000] group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Single Payment</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Pay per content piece, not per creator. 
Flexible, low-friction micro-payments that liberate consumption.
                </p>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 mb-6 text-[#6FF000] group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">User Filter</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Users “vote with money”. 
This signal is stronger than clicks, effectively filtering out noise.
                </p>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 mb-6 text-[#6FF000] group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Prediction Game</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Payment acts as a prediction of future popularity,
incentivizing early discovery and dissemination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The economic mechanism: 20/80 split */}
        <section className="py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-2 font-serif">The economic mechanism: 20/80 split</h2>
            <p className="text-gray-500 text-sm mb-16 uppercase tracking-widest">Your Supporters Become Your Promoters</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-4xl mx-auto">
              {/* Donut Chart */}
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f3f4f6" strokeWidth="20" />
                  {/* 80% Segment */}
                  <circle 
                    cx="50" cy="50" r="40" 
                    fill="transparent" 
                    stroke="#000000" 
                    strokeWidth="20" 
                    strokeDasharray="201 251" // 80% of circumference
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                  {/* 20% Segment */}
                  <circle 
                    cx="50" cy="50" r="40" 
                    fill="transparent" 
                    stroke="#6FF000" 
                    strokeWidth="20" 
                    strokeDasharray="50 251" // 20% of circumference
                    strokeDashoffset="-201"
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold font-serif">80%</span>
                  <span className="text-xs text-gray-500">Creator</span>
                </div>
              </div>

              {/* Legend/Explanation */}
              <div className="text-left space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-black mt-1 shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg">80% to Creator</h3>
                    <p className="text-gray-600 text-sm">
                      The majority of revenue goes directly to the content creator.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#6FF000] mt-1 shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg">20% to Previous Supporters</h3>
                    <p className="text-gray-600 text-sm">
                      Distributed among earlier supporters based on their entry timing.
                    </p>
                  </div>
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
