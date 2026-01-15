import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import "./Model.css";

export default function Model() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Header />
      
      <div className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative py-24 overflow-hidden bg-white model-hero-section" style={{height: '247px', marginTop: '4px'}}>
          
          <div className="container relative z-10 text-center model-hero-container" style={{paddingRight: '0px', paddingLeft: '0px', width: '1592px', height: '539px', marginRight: '0px', marginLeft: '0px', display: 'inline'}}>
            <div className="relative z-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight model-hero-title" style={{fontSize: '56px', fontFamily: '"Abril Fatface", serif'}}>
                A new economic engine for great content
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto model-hero-subtitle">
                Single-Content Purchase & Prediction Market
              </p>
            </div>
            
            {/* Sketch Illustration */}
            <div className="relative w-full max-w-5xl mx-auto h-[400px] mt-12 z-0 model-hero-image-wrapper" style={{marginTop: '-110px', marginBottom: '-38px', width: '1119px', height: '591px', display: 'inline'}}>
               <img src="/images/Group1556239238.png" alt="People connecting sketch" className="w-full h-full object-contain model-hero-image" style={{width: '394px', height: '143px', objectFit: 'fill', marginLeft: '0px', marginTop: '-37px'}} />
            </div>
          </div>
        </section>

        {/* 2. What went wrong? */}
        <section className="py-24 bg-white model-what-wrong-section" style={{marginTop: '74px'}}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 font-serif model-what-wrong-title">What went wrong?</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest model-what-wrong-subtitle">The Broken Content Economy</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto" style={{marginTop: '-37px'}}>
              {/* For Creators */}
              <div>
                <h3 className="text-xl font-bold mb-8 inline-block" style={{marginLeft: '102px'}}>For Creators</h3>
                <div className="space-y-8" style={{paddingTop: '26px'}}>
                  <div className="flex gap-4 items-start group" style={{marginTop: '-28px', paddingBottom: '20px', height: '54px'}}>
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/1.png" alt="Subscription Ceiling" className="w-6 h-6" style={{width: '113px', height: '48px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1" style={{marginTop: '-16px'}}>
                      <strong>Subscription Ceiling:</strong> Hard to convince users to subscribe forever for occasional hits.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/2.png" alt="Centralized Traffic" className="w-6 h-6" style={{width: '50px', height: '50px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1" style={{marginTop: '-3px'}}>
                      <strong>Centralized Traffic:</strong> Algorithms favor clickbait over quality.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group" style={{paddingTop: '9px'}}>
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/3.png" alt="No Ownership" className="w-6 h-6" style={{width: '50px', height: '50px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1" style={{marginTop: '0px'}}>
                      <strong>No Ownership:</strong> You build the audience, but the platform owns the relationship.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Users */}
              <div>
                <h3 className="text-xl font-bold mb-8 inline-block" style={{marginLeft: '125px'}}>For Users</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{width: '48px', height: '48px'}}>
                      <img src="/images/4.png" alt="Information Overload" className="w-6 h-6" style={{width: '50px', height: '50px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1" style={{marginTop: '-1px'}}>
                      <strong>Information Overload:</strong> Valuable content is buried in noise and ads.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform overflow-visible">
                      <img src="/images/5.png" alt="Inefficient Payment" className="w-full h-full object-contain" style={{width: 'auto', height: 'auto'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1" style={{marginTop: '-2px'}}>
                      <strong>Inefficient Payment:</strong> Forced to buy “the whole farm” just to eat one apple.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/6.png" alt="Passive Role" className="w-6 h-6" style={{width: '50px', height: '50px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1" style={{marginTop: '-1px'}}>
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
          <img src="/images/Maskgroup.png" alt="Separator" className="w-full h-auto object-cover" style={{marginTop: '-33px'}} />
        </div>

        {/* 3. Three core pillars of the new engine */}
        <section className="py-24 bg-white" style={{marginTop: '47px'}}>
          <div className="container text-center" style={{marginTop: '-95px'}}>
            <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '26px'}}>Three core pillars of the new engine</h2>
            <p className="text-gray-500 text-sm mb-16 uppercase tracking-widest" style={{fontSize: '15px'}}>The Foundation of the User-Driven Business Model</p>
            
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
        <section className="py-24 bg-white" style={{height: '855px'}}>
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '26px'}}>The economic mechanism: 20/80 split</h2>
            <p className="text-gray-500 text-sm mb-16 uppercase tracking-widest">Your Supporters Become Your Promoters</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 max-w-4xl mx-auto">
              {/* Donut Chart */}
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f3f4f6" strokeWidth="20" />
                  {/* 80% Segment */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#6FF000" strokeWidth="20" strokeDasharray="201.06 251.32" strokeDashoffset="0" className="hover:opacity-90 transition-opacity" />
                  {/* 20% Segment */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FFE600" strokeWidth="20" strokeDasharray="50.26 251.32" strokeDashoffset="-201.06" className="hover:opacity-90 transition-opacity" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full w-32 h-32 m-auto shadow-inner">
                  <span className="font-bold text-xl"></span>
                </div>
              </div>
              
              {/* Legend */}
              <div className="text-left space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-[#FFE600] rounded-sm"></div>
                  <div>
                    <p className="font-bold text-lg">20% Content Value</p>
                    <p className="text-gray-500 text-sm">(Direct to Creator)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-[#6FF000] rounded-sm"></div>
                  <div>
                    <p className="font-bold text-lg">80% Prediction Market</p>
                    <p className="text-gray-500 text-sm">(To Supporters)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-500 text-xs mt-12 max-w-2xl mx-auto italic">
              * When a user pays $X, 20% goes directly to the creator as stable income. 80% enters the
 “Reward Pool” to reward those who discovered the content earlier.
            </p>
          </div>
        </section>

        {/* 5. Why users pay? */}
        <section className="py-24 bg-white overflow-hidden" style={{paddingTop: '20px', height: '863px'}}>
          <div className="container" style={{height: '857px', marginTop: '-15px'}}>
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-12 font-serif" style={{fontSize: '26px', paddingLeft: '58px'}}>Why users pay?</h2>
                <p className="text-gray-500 text-sm mb-8 uppercase tracking-widest" style={{marginTop: '-45px', paddingLeft: '84px'}}>Dual Motivation</p>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#6FF000]" style={{color: '#000000', paddingLeft: '66px'}}>1. Consumption Logic</h3>
                    <p className="text-gray-600 leading-relaxed italic mb-2"></p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      “I recognize the value of this content”.

The 20% payment creates a direct value exchange. It signals genuine appreciation and supports the creator's livelihood.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#6FF000]" style={{color: '#000000', paddingLeft: '76px'}}>2. Prediction Logic</h3>
                    <p className="text-gray-600 leading-relaxed italic mb-2">“I predict this content will go viral”.</p>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      The 80% contribution is an active prediction. By spotting quality early, the user positions themselves to earn “Thank-you Rewards” from future supporters.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[500px] flex flex-col items-center justify-center" style={{height: '490px'}}>
                {/* Dual Motivation Label */}
                <p className="text-gray-500 text-sm mb-8 uppercase tracking-widest text-center"></p>
                {/* Green Chess Piece Image */}
                <img 
                  src="/images/9.png" 
                  alt="Green Crystal Chess King" 
                  className="h-full object-contain drop-shadow-2xl" style={{marginTop: '-206px', width: '463px', height: '396px'}}
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#6FF000]/20 blur-3xl -z-10 rounded-full scale-75"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The sharing chain */}
        <section className="py-24 bg-gradient-to-b from-[#F0FDF4] to-white" style={{height: '1398px'}}>
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
                <h2 className="text-4xl font-bold mb-8 font-serif" style={{fontSize: '26px', paddingLeft: '52px'}}>The sharing chain</h2>
                <p className="text-gray-500 text-sm mb-12 uppercase tracking-widest" style={{paddingLeft: '98px', marginTop: '-26px'}}>How It Works</p>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-[#6FF000]">
                    <h3 className="text-lg font-bold mb-2">1. Survivors:</h3>
                    <p className="text-gray-600 text-sm">
                      Anyone who paid before you.
                    </p>
                  </div>
                  
                  <div className="relative pl-8 border-l-2 border-gray-200">
                    <h3 className="text-lg font-bold mb-2">2. Juniors: Anyone who pays after you...</h3>
                    <p className="text-gray-600 text-sm">
                      Anyone who pays after you.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-[#F0FDF4] rounded-xl border border-[#6FF000]/20">
                  <p className="text-sm text-gray-700 italic">
                    When you pay, your 80% (Prediction Portion) rewards your seniors. 
When future users pay, you become the senior, earning from their payments.

The Goal: Be the one who sees potential before the crowd does.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. The 365 day window rule */}
        <section className="py-24 bg-white" style={{paddingBottom: '51px', height: '495px', paddingTop: '12px', marginTop: '-23px'}}>
          <div className="container text-center" style={{paddingRight: '0px', paddingLeft: '0px'}}>
            <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '26px'}}>The 365 day window rule</h2>
            <p className="text-gray-500 text-sm mb-16 uppercase tracking-widest">Time-Decay Incentive Model</p>
            
            <div className="relative w-full max-w-5xl mx-auto mb-11 px-4" style={{paddingRight: '0px', paddingLeft: '0px'}}>
               <img src="/images/18.png" alt="Distribution Formula" className="w-full h-auto object-contain mx-auto" style={{width: '372px', height: '184px', display: 'inline', objectFit: 'cover', marginTop: '-17px'}} />
            </div>
            
            <p className="text-gray-500 text-xs mt-8 max-w-xl mx-auto" style={{paddingRight: '6px', paddingLeft: '6px', marginTop: '-5px'}}>
              * Rewards are highest in the first 24 hours to incentivize discovery. The window closes after 365 days, ensuring content liquidity.
            </p>
          </div>
        </section>

        {/* 8. Simple math */}
        <section className="py-24 bg-white" style={{paddingTop: '66px', marginTop: '-44px'}}>
          <div className="container">
            <div className="text-center mb-16" style={{marginTop: '-52px'}}>
              <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '26px'}}>Simple math</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Distribution Formula</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Creator Connected */}
              <div className="bg-[#F0FDF4] p-8 rounded-2xl border border-[#6FF000]/20" style={{marginTop: '-45px'}}>
                <p className="text-sm text-gray-600 mb-4">For the n-th payer contributing amount $X:</p>
                <h3 className="text-lg font-bold mb-4 text-gray-800">For those who pay & contribute amount (X):</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                   <p className="font-mono text-sm text-gray-500 mb-2">Creator Connected</p>
                   <p className="font-mono text-xl font-bold text-[#6FF000]">Revenue = 0.2 × Xn</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                   <p className="font-mono text-sm text-gray-500 mb-2">Reward Pool</p>
                   <p className="font-mono text-xl font-bold text-[#6FF000]">Pool = 0.8 * Xn</p>
                </div>
              </div>

              {/* Reward Distribution */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-center" style={{marginTop: '-16px'}}>
                <p className="text-sm text-gray-600 mb-4">Reward for a specific senior i in tier k:</p>
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
                  * Where Xi is the total contributed amount by senior i in tier k,
Hk is the total historical payments in that tier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Win Win Win ecosystem */}
        <section className="py-24 bg-white" style={{paddingTop: '16px', marginTop: '-61px', height: '1308px'}}>
          <div className="container">
            <div className="text-center mb-16" style={{marginBottom: '26px'}}>
              <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '26px'}}>Win Win Win ecosystem</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Creators • Users • TaleX</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" style={{alignItems: 'start'}}>
              {/* Creators Card */}
              <div className="relative aspect-square overflow-hidden group" style={{marginTop: '0px'}}>
                <img 
                  src="/images/7.png" 
                  alt="Writer at desk" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#6FF000] flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-black mb-4">Creators</h3>
                  <p className="text-sm text-black font-medium leading-relaxed">
                    Focus on quality over quantity. Immediate 20% revenue from single hits without needing a massive subscriber base.
                  </p>
                </div>
              </div>

              {/* Users Card (Image) */}
              <div className="relative aspect-square overflow-hidden group" style={{marginTop: '40px'}}>
                <img 
                  src="/images/66.png" 
                  alt="Open book on table" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#6FF000] flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-black mb-4">Users</h3>
                  <p className="text-sm text-black font-medium leading-relaxed">
                    Recover attention ownership. Gain financial upside from good taste. Information feed becomes high-signal.
                  </p>
                </div>
              </div>

              {/* TaleX Card (Image) */}
              <div className="relative aspect-square overflow-hidden group" style={{marginTop: '80px'}}>
                <img 
                  src="/images/ecosystem-laptop.jpg" 
                  alt="Laptop workspace" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#6FF000] flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{paddingTop: '12px', paddingBottom: '12px', marginTop: '-34px'}}>
                  <h3 className="text-2xl font-bold text-black mb-4">TaleX</h3>
                  <p className="text-sm text-black font-medium leading-relaxed">
                    Shifts from an "Ad Engine" to a "Value Engine". Revenue aligns with content quality, not view counts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Risk control and safety */}
        <section className="py-24 bg-white" style={{paddingBottom: '120px', paddingRight: '012px', paddingLeft: '012px', paddingTop: '24px', height: '907px'}}>
          <div className="container" style={{paddingRight: '0px', paddingLeft: '0px'}}>
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '26px'}}>Risk control and safety</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Everyone Is Safe To Go</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" style={{width: '1072px', height: 'auto', overflow: 'visible', marginTop: '-38px'}}>
              {/* Card 1 */}
              <div className="bg-black p-8 rounded-xl flex items-start gap-6 group hover:bg-[#1a1a1a] transition-colors" style={{width: '337px', height: '134px'}}>
                <div className="w-12 h-12 rounded-full border border-[#6FF000] flex items-center justify-center shrink-0" style={{width: '68px', height: '68px'}}>
                  <img src="/images/11.png" alt="Non-Financial" className="w-6 h-6" style={{width: '40px', height: '40px'}} />
                </div>
                <div style={{marginTop: '-9px'}}>
                  <h3 className="text-white font-bold mb-2">Non-Financial Product</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    No tokens, no IPO, no ICO. Strictly a content appreciation mechanism.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-black p-8 rounded-xl flex items-start gap-6 group hover:bg-[#1a1a1a] transition-colors" style={{width: '337px'}}>
                <div className="w-12 h-12 rounded-full border border-[#6FF000] flex items-center justify-center shrink-0" style={{width: '68px', height: '68px'}}>
                  <img src="/images/22.png" alt="No Secondary Market" className="w-6 h-6" style={{width: '40px', height: '40px'}} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">No Secondary Market</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Reward rights are tied to the account and cannot be traded or speculated on.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-black p-8 rounded-xl flex items-start gap-6 group hover:bg-[#1a1a1a] transition-colors" style={{width: '337px'}}>
                <div className="w-12 h-12 rounded-full border border-[#6FF000] flex items-center justify-center shrink-0" style={{width: '68px', height: '68px'}}>
                  <img src="/images/33.png" alt="Finite Lifecycle" className="w-6 h-6" style={{width: '40px', height: '40px'}} />
                </div>
                <div style={{marginTop: '-13px'}}>
                  <h3 className="text-white font-bold mb-2">Finite Lifecycle</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Rights expire after 365 days. The system resets, preventing "Ponzi" structures.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-black p-8 rounded-xl flex items-start gap-6 group hover:bg-[#1a1a1a] transition-colors" style={{width: '337px'}}>
                <div className="w-12 h-12 rounded-full border border-[#6FF000] flex items-center justify-center shrink-0" style={{width: '68px', height: '68px'}}>
                  <img src="/images/44.png" alt="No Guaranteed Returns" className="w-6 h-6" style={{width: '40px', height: '40px'}} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">No Guaranteed Returns</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    All rewards depend on future real user activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. The shift from ads to direct value */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16" style={{marginTop: '-129px'}}>
              <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '25px'}}>The shift from ads to direct value</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Back to Creating Real Value</p>
            </div>

            <div className="max-w-4xl mx-auto relative h-[400px] border-l border-b border-gray-200">
              {/* Chart Area */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Area */}
                <svg className="w-full h-full" preserveAspectRatio="none" style={{height: '400px'}}>
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#6FF000" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#6FF000" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,400 C200,380 400,350 600,200 S800,50 900,0 L900,400 Z" fill="url(#chartGradient)" />
                  <path d="M0,400 C200,380 400,350 600,200 S800,50 900,0" fill="none" stroke="#6FF000" strokeWidth="3" />
                </svg>
                
                {/* Label */}
                <div className="absolute top-[20%] right-[10%] bg-[#6FF000] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Direct Payment Economy
                </div>
                
                <div className="absolute bottom-[10%] left-[10%] bg-white border border-gray-200 text-gray-500 px-4 py-2 rounded-full font-bold text-sm shadow-sm">
                  Ad-Based Economy
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-500 text-xs mt-8">
              
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 bg-gradient-to-b from-white to-[#F0FDF4] text-center">
          <div className="container">
            <h2 className="text-5xl font-bold mb-8 font-serif" style={{fontSize: '26px'}}>A new way of value discovery</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto" style={{fontSize: '15px', marginTop: '-19px'}}>
              Join TaleX today and be part of the revolution that puts value back into the hands of creators and supporters.
            </p>
            <Button className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold rounded-full px-12 py-8 text-xl shadow-xl shadow-[#6FF000]/30 transition-all hover:scale-105" style={{fontSize: '16px', paddingTop: '22px', paddingBottom: '22px', paddingLeft: '46px', width: '232px', height: '40px'}}>
              Start Publishing Now
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
