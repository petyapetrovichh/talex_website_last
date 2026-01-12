import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, X, DollarSign, Filter, TrendingUp } from "lucide-react";

export default function Model() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#F0FDF4] to-white">
          <div className="container text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 font-serif">
              A new economic engine for great content
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Simple. Content-first. User-driven. Fair.
            </p>
            
            {/* Illustration Placeholder - Green sketch style */}
            <div className="relative w-full max-w-5xl mx-auto h-64 md:h-80 mt-8">
               {/* This would be the green sketch illustration from the design */}
               <div className="absolute inset-0 flex items-end justify-between opacity-80">
                  <div className="w-1/3 h-full bg-[url('/images/sketch-1.jpg')] bg-contain bg-no-repeat bg-bottom opacity-20 mix-blend-multiply filter sepia hue-rotate-90 saturate-200"></div>
                  <div className="w-1/3 h-full bg-[url('/images/sketch-2.jpg')] bg-contain bg-no-repeat bg-bottom opacity-20 mix-blend-multiply filter sepia hue-rotate-90 saturate-200"></div>
               </div>
               {/* Green overlay to match brand */}
               <div className="absolute inset-0 bg-gradient-to-t from-[#6FF000]/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* 2. What went wrong? */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 font-serif">What went wrong?</h2>
              <p className="text-gray-500 uppercase tracking-widest text-sm">The Broken Content Economy</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* For Creators */}
              <div>
                <h3 className="text-xl font-bold mb-8 border-b pb-2">For Creators</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center flex-shrink-0">
                      <X className="text-black w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">Algorithms prioritize clickbait and watch time over quality and depth.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center flex-shrink-0">
                      <X className="text-black w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">Income is unstable. One month you're viral, the next you're invisible.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center flex-shrink-0">
                      <X className="text-black w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">You don't own your audience. Platforms can change rules overnight.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Users */}
              <div>
                <h3 className="text-xl font-bold mb-8 border-b pb-2">For Users</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center flex-shrink-0">
                      <X className="text-black w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">Feeds are flooded with ads and sponsored content you didn't ask for.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center flex-shrink-0">
                      <X className="text-black w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">It's hard to find high-quality, niche content that actually matters.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center flex-shrink-0">
                      <X className="text-black w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">Supporting creators feels like charity, with no return on investment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Green torn paper divider effect */}
          <div className="w-full h-16 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Green_brush_stroke.png/1200px-Green_brush_stroke.png')] bg-repeat-x bg-contain mt-16 opacity-80" style={{filter: 'hue-rotate(45deg) brightness(1.5)'}}></div>
        </section>

        {/* 3. Three core pillars */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-2 font-serif">Three core pillars of the new engine</h2>
              <p className="text-gray-500 text-sm">The foundation of a sustainable ecosystem</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-6 text-[#6FF000]">
                  <DollarSign className="w-full h-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4">Single Payment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No subscriptions. Pay once for the content you value. Simple, transparent, and direct support.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-6 text-[#6FF000]">
                  <Filter className="w-full h-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4">User Filter</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Users curate the feed with their wallets. High-quality content rises naturally without algorithmic bias.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-6 text-[#6FF000]">
                  <TrendingUp className="w-full h-full" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4">Prediction Game</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Early supporters share in the success. Identify potential hits and earn rewards as they grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Economic Mechanism */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 font-serif">The economic mechanism: 20/80 split</h2>
              <p className="text-gray-500 text-sm">Fair Distribution & Real Incentives</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-4xl mx-auto">
              {/* Donut Chart */}
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* 20% Segment - Yellow */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#FDE047"
                    strokeWidth="20"
                    strokeDasharray="25.13 251.32" // 20% of circumference
                  />
                  {/* 80% Segment - Green */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#6FF000"
                    strokeWidth="20"
                    strokeDasharray="201.06 251.32" // 80% of circumference
                    strokeDashoffset="-25.13"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#FDE047] rounded-sm"></div>
                  <span className="font-bold text-lg">20% Content Value <span className="font-normal text-gray-500 text-sm">(Goes to Creator)</span></span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-[#6FF000] rounded-sm"></div>
                  <span className="font-bold text-lg">80% Prediction Market <span className="font-normal text-gray-500 text-sm">(To Success Pool)</span></span>
                </div>
                <p className="text-gray-500 text-xs mt-8 max-w-xs">
                  * All transactions are transparent and verifiable. The split ensures creators are paid while incentivizing promotion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
