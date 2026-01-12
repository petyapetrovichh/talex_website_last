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

        {/* 5. Why users pay? */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-bold mb-12 font-serif">Why users pay?</h2>
                <p className="text-gray-500 text-sm mb-8 uppercase tracking-widest">Dual Motivation</p>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#6FF000]">1. Consumption Logic</h3>
                    <p className="text-gray-600 leading-relaxed italic mb-2">"Because I value this piece of art"</p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Direct support for creators. Unlocking premium content. No ads, no noise. Just pure value exchange.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#6FF000]">2. Prediction Logic</h3>
                    <p className="text-gray-600 leading-relaxed italic mb-2">"Because I believe this will go viral"</p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      By tipping early, you become a stakeholder in the content's success. If it grows, you grow with it.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[500px] flex items-center justify-center">
                {/* Green Chess Piece Image */}
                <img 
                  src="/images/chess-king.jpg" 
                  alt="Green Crystal Chess King" 
                  className="h-full object-contain drop-shadow-2xl mix-blend-multiply filter brightness-110 contrast-125"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#6FF000]/20 blur-3xl -z-10 rounded-full scale-75"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The sharing chain */}
        <section className="py-24 bg-gradient-to-b from-[#F0FDF4] to-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-full max-w-[320px]">
                <div className="relative rounded-[3rem] overflow-hidden border-8 border-gray-800 bg-white shadow-2xl aspect-[9/19]">
                  {/* Mockup Content */}
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <div className="h-4 w-24 bg-gray-100 rounded"></div>
                    </div>
                    
                    <div className="bg-[#F6F6F6] p-4 rounded-2xl mb-4">
                      <h4 className="font-bold mb-2">Support & Earn</h4>
                      <p className="text-xs text-gray-500 mb-4">Your tip supports the author and previous backers.</p>
                      <div className="flex justify-between gap-2 mb-4">
                        <div className="flex-1 py-2 bg-white rounded-lg text-center text-sm font-bold shadow-sm border border-gray-100">$1</div>
                        <div className="flex-1 py-2 bg-[#6FF000] rounded-lg text-center text-sm font-bold shadow-sm border border-[#6FF000]">$5</div>
                        <div className="flex-1 py-2 bg-white rounded-lg text-center text-sm font-bold shadow-sm border border-gray-100">$10</div>
                      </div>
                      <div className="w-full py-2 bg-white rounded-lg px-3 text-xs text-gray-400 border border-gray-100 mb-2">
                        $ Custom Amount
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="w-full h-12 bg-black rounded-full text-white flex items-center justify-center font-bold text-sm">
                        Confirm Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold mb-8 font-serif">The sharing chain</h2>
                <p className="text-gray-500 text-sm mb-12 uppercase tracking-widest">Viral Growth</p>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-[#6FF000]">
                    <h3 className="text-lg font-bold mb-2">1. Survivors: Anyone who paid before you...</h3>
                    <p className="text-gray-600 text-sm">
                      ...receives a portion of your tip as a reward for discovering the content early.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-gray-200">
                    <h3 className="text-lg font-bold mb-2">2. Juniors: Anyone who pays after you...</h3>
                    <p className="text-gray-600 text-sm">
                      ...contributes to your reward pool. The earlier you are, the larger your potential upside.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-[#F0FDF4] rounded-xl border border-[#6FF000]/20">
                  <p className="text-sm text-gray-700 italic">
                    "Everyone is incentivized to share good content, because their own return depends on its future popularity."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. The 365 day window rule */}
        <section className="py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-2 font-serif">The 365 day window rule</h2>
            <p className="text-gray-500 text-sm mb-16 uppercase tracking-widest">Time-Decay Incentive Model</p>
            
            <div className="relative max-w-3xl mx-auto aspect-[2/1] overflow-hidden">
               {/* Concentric Arcs representing time decay */}
               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[200%] rounded-full border-[40px] border-[#6FF000] opacity-20 animate-ripple" style={{ animationDelay: '600ms' }}></div>
               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[160%] rounded-full border-[40px] border-[#6FF000] opacity-40 animate-ripple" style={{ animationDelay: '400ms' }}></div>
               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60%] h-[120%] rounded-full border-[40px] border-[#6FF000] opacity-60 animate-ripple" style={{ animationDelay: '200ms' }}></div>
               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[40%] h-[80%] rounded-full border-[40px] border-[#6FF000] opacity-80 flex items-end justify-center pb-8 animate-ripple" style={{ animationDelay: '0ms' }}>
                  <span className="text-white font-bold text-2xl">24h</span>
               </div>
               
               {/* Labels */}
               <div className="absolute bottom-4 left-[15%] text-xs font-bold text-gray-400">31-365 days</div>
               <div className="absolute bottom-16 left-[25%] text-xs font-bold text-gray-500">8-30 days</div>
               <div className="absolute bottom-28 left-[35%] text-xs font-bold text-gray-600">1-7 days</div>
            </div>
            
            <p className="text-gray-500 text-xs mt-8 max-w-xl mx-auto">
              * Rewards are highest in the first 24 hours to incentivize discovery. The window closes after 365 days, ensuring content liquidity.
            </p>
          </div>
        </section>

        {/* 8. Simple math */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 font-serif">Simple math</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Transparent Formula</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Creator Connected */}
              <div className="bg-[#F0FDF4] p-8 rounded-2xl border border-[#6FF000]/20">
                <h3 className="text-lg font-bold mb-4 text-gray-800">For those who pay & contribute amount (X):</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                   <p className="font-mono text-sm text-gray-500 mb-2">Creator Connected</p>
                   <p className="font-mono text-xl font-bold text-[#6FF000]">Revenue = 0.2 * X</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                   <p className="font-mono text-sm text-gray-500 mb-2">Reward Pool</p>
                   <p className="font-mono text-xl font-bold text-[#6FF000]">Pool = 0.8 * X</p>
                </div>
              </div>

              {/* Reward Distribution */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Reward for a specific senior (Y) will be:</h3>
                <div className="bg-[#F6F6F6] p-8 rounded-xl flex items-center justify-center">
                   <div className="text-center">
                      <p className="font-serif text-2xl italic text-gray-800">
                        Reward(Y) = Pool * <span className="inline-block border-b-2 border-black px-2 mx-1">X(Y)</span>
                      </p>
                      <p className="font-serif text-lg italic text-gray-600 mt-2">ΣX</p>
                   </div>
                </div>
                <p className="text-xs text-gray-400 mt-6 text-center">
                  * Your reward is proportional to your contribution relative to the total pool at the time of distribution.
                </p>
              </div>
            </div>
          </div>
        </section>
