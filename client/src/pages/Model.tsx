import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";

export default function Model() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const phoneRef = useRef(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    const rect = (phoneRef.current as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    setIsClicked(true);
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 300);
    setTimeout(() => window.open('https://www.talex.world/reading/585449588677', '_self'), 150);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Header />
      
      <div className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative py-24 overflow-hidden" style={{height: '655px', backgroundImage: 'url(/images/our-model-hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          
          <div className="container relative z-10 text-center" style={{paddingRight: '0px', paddingLeft: '0px', width: '1592px', height: '539px', marginRight: '0px', marginLeft: '0px', display: 'inline'}}>
            <div className="relative z-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight" style={{fontSize: '56px', fontFamily: '"Abril Fatface", serif', color: '#000000', textShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '50px', fontWeight: '400'}}>
                A new economic engine for <span style={{color: '#6FF000'}}>great content</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto" style={{color: '#000000'}}>
                Single-Content Purchase & Prediction Market
              </p>
            </div>
            

          </div>
        </section>

        {/* 2. What went wrong? */}
        <section className="py-24 bg-white" style={{marginTop: '0px'}}>
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif', fontSize: '39px'}}>What went wrong?</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest" style={{fontWeight: '500'}}>The Broken Content Economy</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* For Creators */}
              <div>
                <h3 className="text-xl font-bold mb-12 text-center" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', fontSize: '24px'}}>For Creators</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 items-center group" style={{marginBottom: '50px'}}>
                    <div className="w-24 h-24 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/1.png" alt="Subscription Ceiling" className="w-6 h-6" style={{width: '226px', height: '96px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{color: '#000000', fontSize: '18px'}}>
                      <strong>Subscription Ceiling:</strong> Hard to convince users to subscribe forever for occasional hits.
                    </p>
                  </div>
                  <div className="flex gap-4 items-center group" style={{marginBottom: '50px'}}>
                    <div className="w-24 h-24 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/2.png" alt="Centralized Traffic" className="w-6 h-6" style={{width: '100px', height: '100px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{color: '#000000', fontSize: '18px'}}>
                      <strong>Centralized Traffic:</strong> Algorithms favor clickbait over quality.
                    </p>
                  </div>
                  <div className="flex gap-4 items-center group" style={{marginBottom: '50px'}}>
                    <div className="w-24 h-24 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/3.png" alt="No Ownership" className="w-6 h-6" style={{width: '100px', height: '100px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{color: '#000000', fontSize: '18px'}}>
                      <strong>No Ownership:</strong> You build the audience, but the platform owns the relationship.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Users */}
              <div>
                <h3 className="text-xl font-bold mb-12 text-center" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', fontSize: '24px'}}>For Users</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 items-center group" style={{marginBottom: '50px'}}>
                    <div className="w-24 h-24 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/4.png" alt="Information Overload" className="w-6 h-6" style={{width: '100px', height: '100px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{color: '#000000', fontSize: '18px'}}>
                      <strong>Information Overload:</strong> Valuable content is buried in noise and ads.
                    </p>
                  </div>
                  <div className="flex gap-4 items-center group" style={{marginBottom: '50px'}}>
                    <div className="w-24 h-24 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform overflow-visible">
                      <img src="/images/5.png" alt="Inefficient Payment" className="w-full h-full object-contain" style={{width: '100px', height: '100px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{color: '#000000', fontSize: '18px'}}>
                      <strong>Inefficient Payment:</strong> Forced to buy "the whole farm" just to eat one apple.
                    </p>
                  </div>
                  <div className="flex gap-4 items-center group" style={{marginBottom: '50px'}}>
                    <div className="w-24 h-24 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img src="/images/6.png" alt="Passive Role" className="w-6 h-6" style={{width: '100px', height: '100px'}} />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed" style={{color: '#000000', fontSize: '18px'}}>
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
        <section className="py-24 bg-white" style={{marginTop: '0px'}}>
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '39px', fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>Three core pillars of the new engine</h2>
            <p className="text-gray-500 text-sm mb-16 uppercase tracking-widest" style={{fontWeight: '500'}}>The Foundation of the User-Driven Business Model</p>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/single-payment-icon.png" alt="Single Payment" className="w-full h-full object-contain" style={{marginLeft: '10px'}} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>Single Payment</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs" style={{color: '#000000', fontSize: '18px'}}>
                  Pay per content piece, not per creator. 
Flexible, low-friction micro-payments that liberate consumption.
                </p>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/user-filter-icon.png" alt="User Filter" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>User Filter</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs" style={{color: '#000000', fontSize: '18px'}}>
                  Users “vote with money”. 
This signal is stronger than clicks, effectively filtering out noise.
                </p>
              </div>
              
              <div className="flex flex-col items-center group">
                 <div className="w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/images/prediction-game-icon.png" alt="Prediction Game" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>Prediction Game</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs" style={{color: '#000000', fontSize: '18px'}}>
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
            <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '39px', fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>The economic mechanism: 20/80 split</h2>
            <p className="text-gray-500 text-sm mb-16 uppercase tracking-widest" style={{fontWeight: '500'}}>Your Supporters Become Your Promoters</p>
            
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
                    <p className="font-bold text-lg" style={{color: '#000000', fontSize: '18px'}}>20% Content Value <span className="text-gray-500 text-sm" style={{color: '#000000', fontSize: '18px', fontWeight: '400'}}>(Direct to Creator)</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-[#6FF000] rounded-sm"></div>
                  <div>
                    <p className="font-bold text-lg" style={{color: '#000000', fontSize: '18px'}}>80% Prediction Market <span className="text-gray-500 text-sm" style={{color: '#000000', fontSize: '18px', fontWeight: '400'}}>(To Supporters)</span></p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-500 text-xs mt-12 max-w-2xl mx-auto italic" style={{color: '#000000', fontSize: '18px'}}>
              When a user pays $X, 20% goes directly to the creator as stable income. 80% enters the
 "Reward Pool" to reward those who discovered the content earlier.
            </p>
          </div>
        </section>

        {/* 5. Why users pay? */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-bold mb-12 font-serif" style={{fontSize: '39px', fontWeight: '400', fontFamily: '"Abril Fatface", serif', marginBottom: '8px'}}>Why users pay?</h2>
                <p className="text-gray-500 text-sm mb-8 uppercase tracking-widest" style={{fontWeight: '500'}}>Dual Motivation</p>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#6FF000]" style={{color: '#000000', fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>1. Consumption Logic</h3>
                    <p className="text-gray-600 leading-relaxed italic mb-2" style={{color: '#000000', fontSize: '18px'}}>"I recognize the value of this content".</p>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{color: '#000000', fontSize: '18px'}}>
                      The 20% payment creates a direct value exchange. It signals genuine appreciation and supports the creator's livelihood.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#6FF000]" style={{color: '#000000', fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>2. Prediction Logic</h3>
                    <p className="text-gray-600 leading-relaxed italic mb-2" style={{color: '#000000', fontSize: '18px'}}>“I predict this content will go viral”.</p>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{color: '#000000', fontSize: '18px'}}>
                      The 80% contribution is an active prediction. By spotting quality early, the user positions themselves to earn “Thank-you Rewards” from future supporters.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[500px] flex items-center justify-center">
                {/* Green Chess Piece Image */}
                <img 
                  src="/images/9.png" 
                  alt="Green Crystal Chess King" 
                  className="h-full object-contain drop-shadow-2xl" style={{marginTop: '-41px', width: '463px', height: '523px'}}
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#6FF000]/20 blur-3xl -z-10 rounded-full scale-75"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The sharing chain */}
        <section className="py-24" style={{backgroundImage: 'url(/images/sharing-chain-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', height: '730px'}}>
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div ref={phoneRef} className="flex justify-center relative cursor-pointer" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                <img src="/images/sharing-chain-phone.png" alt="The Sharing Chain" className="w-full max-w-sm h-auto drop-shadow-2xl rounded-3xl" />
                {isHovering && (
                  <div className="absolute w-24 h-24 rounded-full flex items-center justify-center" style={{
                    left: `${mousePos.x - 48}px`,
                    top: `${mousePos.y - 48}px`,
                    pointerEvents: 'none',
                    backgroundColor: isClicked ? '#000000' : '#6FF000',
                    transform: isBouncing ? 'scale(0.85)' : 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}>
                    <span className="font-bold text-center text-sm" style={{
                      color: isClicked ? '#FFFFFF' : '#000000'
                    }}>Try now</span>
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-8 font-serif" style={{fontSize: '39px', marginBottom: '8px', fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>The sharing chain</h2>
                <p className="text-gray-500 text-sm mb-12 uppercase tracking-widest" style={{fontWeight: '500'}}>How It Works</p>
                
                <div className="space-y-8">
                  <div className="relative">
                    <h3 className="text-lg font-bold mb-2" style={{fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', color: '#000000'}}>1. Seniors</h3>
                    <p className="text-gray-600 text-sm" style={{color: '#000000', fontSize: '18px'}}>
                      Anyone who paid before you.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-lg font-bold mb-2" style={{fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', color: '#000000'}}>2. Juniors</h3>
                    <p className="text-gray-600 text-sm" style={{color: '#000000', fontSize: '18px'}}>
                      Anyone who pays after you.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-[#F0FDF4] rounded-xl border border-[#6FF000]/20">
                  <p className="text-sm text-gray-700 italic" style={{color: '#000000', fontSize: '18px', marginBottom: '16px'}}>
                    When you pay, your 80% (Prediction Portion) rewards your seniors. When future users pay, you become the senior, earning from their payments.
                  </p>
                  <p className="text-sm text-gray-700 italic" style={{color: '#000000', fontSize: '18px'}}>
                    <span style={{fontWeight: 'bold'}}>The Goal:</span> Be the one who sees potential before the crowd does.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. The 365 day window rule */}
        <section className="py-24 bg-white" style={{paddingBottom: '51px'}}>
          <div className="container text-center" style={{paddingRight: '0px', paddingLeft: '0px'}}>
            <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '39px', fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>The 365 day window rule</h2>
            <p className="text-gray-500 text-sm mb-16 uppercase tracking-widest" style={{fontWeight: '500'}}>Each Prediction Has a Lifecycle, Not the Content</p>
            
            <div className="relative w-full max-w-5xl mx-auto mb-11 px-4">
               <img src="/images/18.png" alt="Distribution Formula" className="w-full h-auto object-contain mx-auto" />
            </div>
            
            <p className="text-gray-500 text-xs mt-8 max-w-xl mx-auto" style={{color: '#000000', fontSize: '18px'}}>
              Rewards are distributed based on recency relative to the current payer. This ensures a dynamic lifecycle for every payment.
            </p>
          </div>
        </section>

        {/* 8. Simple math */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '39px', fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>Simple math</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest" style={{fontWeight: '500'}}>Distribution Formula</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Creator Connected */}
              <div className="bg-[#F0FDF4] p-8 rounded-2xl border border-[#6FF000]/20">
                <h3 className="text-lg font-bold mb-4 text-gray-800" style={{color: '#000000', fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>For the n-th payer contributing amount $X:</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                   <p className="font-mono text-sm text-gray-500 mb-2" style={{color: '#000000', fontSize: '14px', fontWeight: '700'}}>Creator Revenue</p>
                   <p className="font-mono text-xl font-bold text-[#6FF000]" style={{color: '#000000', fontSize: '20px'}}>Revenue = 0.2 × X<sub>n</sub></p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                   <p className="font-mono text-sm text-gray-500 mb-2" style={{color: '#000000', fontWeight: '800'}}>Reward Pool</p>
                   <p className="font-mono text-xl font-bold text-[#6FF000]" style={{color: '#000000', fontSize: '20px'}}>Pool = 0.8 × X<sub>n</sub></p>
                </div>
              </div>

              {/* Reward Distribution */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col justify-center" style={{backgroundColor: '#f0fdf4'}}>
                <h3 className="text-lg font-bold mb-4 text-gray-800" style={{color: '#000000', fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>Reward for a specific senior i in tier k:</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                   <p className="font-mono text-sm text-gray-500 mb-2" style={{color: '#000000', fontSize: '14px', fontWeight: '700'}}>Reward Distribution</p>
                   <p className="font-mono text-xl font-bold text-[#6FF000]" style={{color: '#000000', fontSize: '20px'}}>Reward<sub>i,k</sub> = Pool<sub>k</sub> × (X<sub>i</sub> / H<sub>k</sub>)</p>
                </div>
                <p className="text-xs text-gray-400 mt-6 text-center" style={{color: '#000000', fontSize: '18px', textAlign: 'left'}}>
                  Where Xi is the total contributed amount by senior i in tier k, Hk is the total historical payments in that tier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Win Win Win ecosystem */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '39px', fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>Win-Win-Win ecosystem</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest" style={{fontWeight: '500'}}>Creators, Users, Platform</p>
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
                  <h3 className="text-2xl font-bold text-black mb-4" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>Creators</h3>
                  <p className="text-sm text-black font-medium leading-relaxed" style={{fontSize: '18px'}}>
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
                  <h3 className="text-2xl font-bold text-black mb-4" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>Users</h3>
                  <p className="text-sm text-black font-medium leading-relaxed" style={{fontSize: '18px'}}>
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
                <div className="absolute inset-0 bg-transparent group-hover:bg-[#6FF000] flex flex-col justify-center items-center text-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-black mb-4" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>Platform</h3>
                  <p className="text-sm text-black font-medium leading-relaxed" style={{fontSize: '18px'}}>
                    Shifts from an "Ad Engine" to a "Value Engine". Revenue aligns with content quality, not view counts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Risk control and safety */}
        <section className="py-24 bg-white" style={{paddingBottom: '120px'}}>
          <div className="container" style={{paddingRight: '0px', paddingLeft: '0px'}}>
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl font-bold mb-2 font-serif" style={{fontSize: '39px', fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>Risk control and safety</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest" style={{fontWeight: '500'}}>Everyone Is Safe To Go</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" style={{width: '1072px', height: 'auto', overflow: 'visible'}}>
              {/* Card 1 */}
              <div className="bg-black p-8 rounded-xl flex items-center gap-6 group hover:bg-[#1a1a1a] transition-colors">
                <div className="flex-shrink-0" style={{width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="/images/non-financial-product.png" alt="Non-Financial Product" style={{width: '100px', height: '100px', objectFit: 'contain'}} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2" style={{fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>Non-Financial Product</h3>
                  <p className="text-gray-400 text-xs leading-relaxed" style={{fontSize: '14px', fontWeight: '500'}}>
                    No tokens, no IPO, no ICO. Strictly a content appreciation mechanism.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-black p-8 rounded-xl flex items-start gap-6 group hover:bg-[#1a1a1a] transition-colors">
                <div className="w-12 h-12 rounded-full border border-[#6FF000] flex items-center justify-center shrink-0" style={{width: '68px', height: '68px'}}>
                  <img src="/images/22.png" alt="No Secondary Market" className="w-6 h-6" style={{width: '40px', height: '40px'}} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2" style={{fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>No Secondary Market</h3>
                  <p className="text-gray-400 text-xs leading-relaxed" style={{fontSize: '14px', fontWeight: '500'}}>
                    Reward rights are tied to the account and cannot be traded or speculated on.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-black p-8 rounded-xl flex items-start gap-6 group hover:bg-[#1a1a1a] transition-colors">
                <div className="w-12 h-12 rounded-full border border-[#6FF000] flex items-center justify-center shrink-0" style={{width: '68px', height: '68px'}}>
                  <img src="/images/33.png" alt="Finite Lifecycle" className="w-6 h-6" style={{width: '40px', height: '40px'}} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2" style={{fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>Finite Lifecycle</h3>
                  <p className="text-gray-400 text-xs leading-relaxed" style={{fontSize: '14px', fontWeight: '500'}}>
                    Rights expire after 365 days. The system resets, preventing "Ponzi" structures.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-black p-8 rounded-xl flex items-start gap-6 group hover:bg-[#1a1a1a] transition-colors">
                <div className="w-12 h-12 rounded-full border border-[#6FF000] flex items-center justify-center shrink-0" style={{width: '68px', height: '68px'}}>
                  <img src="/images/44.png" alt="No Guaranteed Returns" className="w-6 h-6" style={{width: '40px', height: '40px'}} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2" style={{fontSize: '24px', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>No Guaranteed Returns</h3>
                  <p className="text-gray-400 text-xs leading-relaxed" style={{fontSize: '14px', fontWeight: '500'}}>
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
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 font-serif">The shift from ads to direct value</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Back to Creating Real Value</p>
            </div>

            <div className="max-w-4xl mx-auto relative h-[400px] border-l border-b border-gray-200">
              {/* Chart Area */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Area */}
                <svg className="w-full h-full" preserveAspectRatio="none">
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
            <h2 className="text-5xl font-bold mb-8 font-serif">A new way of value discovery</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join TaleX today and be part of the revolution that puts value back into the hands of creators and supporters.
            </p>
            <Button className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-bold rounded-full px-12 py-8 text-xl shadow-xl shadow-[#6FF000]/30 transition-all hover:scale-105">
              Start Publishing Now
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
