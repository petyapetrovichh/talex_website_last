import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Model() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Header />
      
      <div className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative py-12 md:py-24 overflow-hidden bg-white">
          <div className="container relative z-10 text-center px-4 md:px-0">
            <div className="relative z-20">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 font-serif tracking-tight leading-tight">
                A new economic engine for great content
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
                Single-Content Purchase & Prediction Market
              </p>
            </div>
            
            {/* Sketch Illustration */}
            <div className="relative w-full max-w-5xl mx-auto mt-8 md:mt-12 z-0 px-4 md:px-0">
               <img src="/images/Group1556239238.png" alt="People connecting sketch" className="w-full h-auto object-contain mx-auto" />
            </div>
          </div>
        </section>

        {/* 2. What went wrong? */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-0">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif">What went wrong?</h2>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest">The Broken Content Economy</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* For Creators */}
              <div>
                <h3 className="text-xl font-bold mb-6 md:mb-8 border-b-2 border-black pb-2 inline-block">For Creators</h3>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/1.png" alt="Subscription Ceiling" className="w-6 h-6 object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 text-left">
                      <strong>Subscription Ceiling:</strong> Hard to convince users to subscribe forever for occasional hits.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/2.png" alt="Centralized Traffic" className="w-6 h-6 object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 text-left">
                      <strong>Centralized Traffic:</strong> Algorithms favor clickbait over quality.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/3.png" alt="No Ownership" className="w-6 h-6 object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 text-left">
                      <strong>No Ownership:</strong> You build the audience, but the platform owns the relationship.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Users */}
              <div>
                <h3 className="text-xl font-bold mb-6 md:mb-8 border-b-2 border-black pb-2 inline-block">For Users</h3>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/4.png" alt="Information Overload" className="w-6 h-6 object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 text-left">
                      <strong>Information Overload:</strong> Valuable content is buried in noise and ads.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/5.png" alt="Inefficient Payment" className="w-6 h-6 object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 text-left">
                      <strong>Inefficient Payment:</strong> Forced to buy “the whole farm” just to eat one apple.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/6.png" alt="Passive Role" className="w-6 h-6 object-contain" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1 text-left">
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
        <section className="py-12 md:py-24 bg-white">
          <div className="container text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif">Three core pillars of the new engine</h2>
            <p className="text-gray-500 text-xs md:text-sm mb-12 md:mb-16 uppercase tracking-widest">The Foundation of the User-Driven Business Model</p>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 text-[#6FF000] group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Single Payment</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Pay per content piece, not per creator. 
                  Flexible, low-friction micro-payments that liberate consumption.
                </p>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 text-[#6FF000] group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">User Filter</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Users “vote with money”. 
                  This signal is stronger than clicks, effectively filtering out noise.
                </p>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 text-[#6FF000] group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Prediction Game</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Payment acts as a prediction of future popularity,
                  incentivizing early discovery and dissemination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The economic mechanism: 20/80 split */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif">The economic mechanism: 20/80 split</h2>
            <p className="text-gray-500 text-xs md:text-sm mb-12 md:mb-16 uppercase tracking-widest">Your Supporters Become Your Promoters</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
              {/* Donut Chart */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f3f4f6" strokeWidth="20" />
                  {/* 80% Segment */}
                  <circle 
                    cx="50" cy="50" r="40" 
                    fill="transparent" 
                    stroke="#6FF000" 
                    strokeWidth="20" 
                    strokeDasharray="201.06 251.32" /* 80% of circumference */
                    className="drop-shadow-lg"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold">80%</span>
                  <span className="text-xs text-gray-500 uppercase">to Supporters</span>
                </div>
              </div>
              
              {/* Explanation */}
              <div className="text-left max-w-md space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#6FF000] mt-1 shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">80% to Previous Tippers</h3>
                    <p className="text-gray-600 text-sm">
                      Distributed among earlier supporters based on a bonding curve. 
                      The earlier you support, the higher your potential reward.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-gray-200 mt-1 shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">20% to Creator</h3>
                    <p className="text-gray-600 text-sm">
                      Immediate revenue for the creator. 
                      Plus, the viral effect drives more volume than traditional models.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Distribution Formula */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-0">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif">Distribution Formula</h2>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest">Transparent & Algorithmic</p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-lg mb-2">For the n-th payer:</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      When the n-th user pays amount P, 20% goes to the creator immediately.
                      The remaining 80% enters the prize pool for previous (n-1) supporters.
                    </p>
                    <div className="font-mono bg-black text-[#6FF000] p-3 rounded-lg text-sm">
                      Pool_n = P * 0.80
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-lg mb-2">Reward for k-th supporter:</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      The k-th supporter (where k &lt; n) receives a share based on their position.
                      Earlier supporters get a larger weight.
                    </p>
                    <div className="font-mono bg-black text-[#6FF000] p-3 rounded-lg text-sm">
                      Reward_k = Pool_n * (Weight_k / Σ Weights)
                    </div>
                  </div>
                </div>
                
                <div className="relative h-48 md:h-80 bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
                  <img src="/18.png" alt="Distribution Curve" className="w-full h-full object-contain p-2 md:p-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Win Win Win ecosystem */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-0">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif">Win Win Win ecosystem</h2>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest">Aligned Incentives for Everyone</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Creators Card */}
              <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer">
                <img src="/7.png" alt="Creators" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-[#6FF000]/90 transition-colors duration-300"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white group-hover:text-black transition-colors duration-300">
                  <h3 className="text-2xl font-bold mb-2">Creators</h3>
                  <p className="text-sm opacity-90 font-medium">
                    Focus on quality over quantity. Immediate 20% revenue from single hits without needing a massive subscriber base.
                  </p>
                </div>
              </div>
              
              {/* Users Card */}
              <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer md:mt-12">
                <img src="/66.png" alt="Users" className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-[#6FF000]/90 transition-colors duration-300"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white group-hover:text-black transition-colors duration-300">
                  <h3 className="text-2xl font-bold mb-2">Users</h3>
                  <p className="text-sm opacity-90 font-medium">
                    Recover attention ownership. Gain financial upside from good taste. Information feed becomes high-signal.
                  </p>
                </div>
              </div>
              
              {/* TaleX Card */}
              <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer md:mt-24">
                <div className="absolute inset-0 bg-black transition-all duration-500 group-hover:bg-[#6FF000]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-4xl font-bold text-white group-hover:text-black">TaleX</h3>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white group-hover:text-black transition-colors duration-300">
                  <p className="text-sm opacity-90 font-medium">
                    Shifts from an 'Ad Engine' to a 'Value Engine'. Revenue aligns with content quality, not view counts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Risk control and safety */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-0">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif">Risk control and safety</h2>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest">Everyone Is Safe To Go</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4 text-[#6FF000]">
                  <img src="/11.png" alt="Icon" className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">Non-Financial Product</h3>
                <p className="text-gray-600 text-sm">Not an investment vehicle. Purely a content support mechanism.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4 text-[#6FF000]">
                  <img src="/22.png" alt="Icon" className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">No Secondary Market</h3>
                <p className="text-gray-600 text-sm">Positions cannot be traded. Eliminates speculation and dumping.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4 text-[#6FF000]">
                  <img src="/33.png" alt="Icon" className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">Finite Lifecycle</h3>
                <p className="text-gray-600 text-sm">Each content piece has a capped reward period (e.g. 7 days).</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4 text-[#6FF000]">
                  <img src="/44.png" alt="Icon" className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">No Guaranteed Returns</h3>
                <p className="text-gray-600 text-sm">Rewards depend entirely on future popularity. No Ponzi promises.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. The shift from ads to direct value */}
        <section className="py-12 md:py-24 bg-black text-white overflow-hidden">
          <div className="container px-4 md:px-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                  The shift from <br/>
                  <span className="text-gray-500 line-through decoration-[#6FF000] decoration-4">Ad-Based Economy</span> <br/>
                  to <span className="text-[#6FF000]">Direct Payment Economy</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  We are building a future where quality is the only metric that matters. 
                  Join us in reshaping the internet's value layer.
                </p>
                <Button className="bg-[#6FF000] hover:bg-white text-black font-bold rounded-full px-8 py-6 text-lg transition-colors">
                  Start Publishing
                </Button>
              </div>
              
              <div className="relative w-full max-w-md aspect-square">
                {/* Abstract visualization of value shift */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6FF000]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <div className="text-2xl font-bold mb-2">Old</div>
                    <div className="text-sm text-gray-400">Attention = Product</div>
                    <div className="text-sm text-gray-400">Users = Data</div>
                  </div>
                  <div className="bg-[#6FF000]/10 backdrop-blur-sm p-6 rounded-2xl border border-[#6FF000]/30 mt-8">
                    <div className="text-2xl font-bold mb-2 text-[#6FF000]">New</div>
                    <div className="text-sm text-gray-300">Quality = Value</div>
                    <div className="text-sm text-gray-300">Users = Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
