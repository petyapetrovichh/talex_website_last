import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import Footer from "@/components/Footer";

export default function ModelMobile() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const phoneRef = useRef(null);
  
  // State for Win-Win-Win ecosystem cards tap interaction
  const [activeCard, setActiveCard] = useState<string | null>(null);

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
  
  const handleCardTap = (cardName: string) => {
    if (activeCard === cardName) {
      setActiveCard(null); // Toggle off if already active
    } else {
      setActiveCard(cardName); // Set active
    }
  };

  return (
    <div className="md:hidden w-full overflow-x-hidden">
      <div className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative py-12 overflow-hidden bg-white">
          <div className="container relative z-10 text-center px-4">
            <div className="relative z-20">
              <h1 className="text-4xl font-bold mb-6 font-serif tracking-tight" style={{fontFamily: '"Abril Fatface", serif', color: '#000000', textShadow: '0 2px 4px rgba(0,0,0,0.1)', marginTop: '20px', fontWeight: '400', fontSize: '28px'}}>
                A new economic model for<br/><span style={{color: '#6FF000'}}>great content</span>
              </h1>
              <p className="text-base text-gray-600 mb-8 mx-auto" style={{color: '#000000', fontSize: '16px'}}>
                Single-Content Purchase & Prediction Market
              </p>
            </div>
            <div className="w-full h-[300px] bg-contain bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/our-model-hero-bg.png)'}}></div>
          </div>
        </section>

        {/* 2. What went wrong? */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>What went wrong?</h2>
              <p className="text-gray-500 uppercase tracking-widest" style={{fontWeight: '500', fontSize: '10px'}}>The Broken Content Economy</p>
            </div>

            <div className="space-y-12">
              {/* For Creators */}
              <div>
                <h3 className="text-xl font-bold mb-8 text-center" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>For Creators</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0">
                      <img src="/images/1.png" alt="Subscription Ceiling" className="w-16 h-auto" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-left" style={{color: '#000000'}}>
                      <strong>Subscription Ceiling:</strong> Hard to convince users to subscribe forever for occasional hits.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0">
                      <img src="/images/2.png" alt="Centralized Traffic" className="w-16 h-auto" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-left" style={{color: '#000000'}}>
                      <strong>Centralized Traffic:</strong> Algorithms favor clickbait over quality.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0">
                      <img src="/images/3.png" alt="No Ownership" className="w-16 h-auto" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-left" style={{color: '#000000'}}>
                      <strong>Monetization Gap:</strong> Single high-quality pieces often generate zero direct revenue.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Users */}
              <div>
                <h3 className="text-xl font-bold mb-8 text-center" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>For Users</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0">
                      <img src="/images/4.png" alt="Information Overload" className="w-16 h-auto" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-left" style={{color: '#000000'}}>
                      <strong>Information Overload:</strong> Valuable content is buried in noise and ads.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0">
                      <img src="/images/5.png" alt="Inefficient Payment" className="w-16 h-auto" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-left" style={{color: '#000000'}}>
                      <strong>Inefficient Payment:</strong> Forced to buy "the whole farm" just to eat one apple.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0">
                      <img src="/images/6.png" alt="Passive Role" className="w-16 h-auto" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-left" style={{color: '#000000'}}>
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
        <section className="py-12 bg-white">
          <div className="container text-center px-4">
            <h2 className="text-3xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>Three core pillars of the new engine</h2>
            <p className="text-gray-500 mb-10 uppercase tracking-widest" style={{fontWeight: '500', fontSize: '10px'}}>The Foundation of the User-Driven Business Model</p>
            
            <div className="space-y-10">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4 ml-4">
                  <img src="/images/single-payment-icon.png" alt="Single Payment" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>Single Payment</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4" style={{color: '#000000'}}>
                  Pay per content piece, not per creator. Flexible, low-friction micro-payments that liberate consumption.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4">
                  <img src="/images/user-filter-icon.png" alt="User Filter" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>User Filter</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4" style={{color: '#000000'}}>
                  Users “vote with money”. This signal is stronger than clicks, effectively filtering out noise.
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                 <div className="w-20 h-20 mb-4">
                  <img src="/images/prediction-game-icon.png" alt="Prediction Game" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>Prediction Game</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4" style={{color: '#000000'}}>
                  Payment acts as a prediction of future popularity, incentivizing early discovery and dissemination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The economic mechanism: 20/80 split */}
        <section className="py-12 bg-white">
          <div className="container text-center px-4">
            <h2 className="text-3xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>The economic mechanism: 20/80 split</h2>
            <p className="text-gray-500 mb-10 uppercase tracking-widest" style={{fontWeight: '500', fontSize: '10px'}}>Your Supporters Become Your Promoters</p>
            
            <div className="flex flex-col items-center gap-8">
              {/* Donut Chart */}
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f3f4f6" strokeWidth="20" />
                  {/* 80% Segment */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#6FF000" strokeWidth="20" strokeDasharray="201.06 251.32" strokeDashoffset="0" />
                  {/* 20% Segment */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FFE600" strokeWidth="20" strokeDasharray="50.26 251.32" strokeDashoffset="-201.06" />
                </svg>
              </div>
              
              {/* Legend */}
              <div className="text-center space-y-4 w-full max-w-xs mx-auto">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 bg-[#FFE600] rounded-sm shrink-0"></div>
                  <div>
                    <p className="font-bold text-base" style={{color: '#000000'}}>20% Content Value</p>
                    <p className="text-gray-500 text-xs" style={{color: '#000000'}}>(Direct to Creator)</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 bg-[#6FF000] rounded-sm shrink-0"></div>
                  <div>
                    <p className="font-bold text-base" style={{color: '#000000'}}>80% Prediction Market</p>
                    <p className="text-gray-500 text-xs" style={{color: '#000000'}}>(To Supporters)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-500 text-xs mt-8 px-4" style={{color: '#000000'}}>
              When a user pays $X, 20% goes directly to the creator as stable income. 80% enters the "Reward Pool" to reward those who discovered the content earlier.
            </p>
          </div>
        </section>

        {/* 5. Why users pay? */}
        <section className="py-12 bg-white overflow-hidden">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>Why users pay?</h2>
              <p className="text-gray-500 uppercase tracking-widest" style={{fontWeight: '500', fontSize: '10px'}}>Dual Motivation</p>
            </div>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#6FF000]" style={{color: '#000000', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>1. Consumption Logic</h3>
                <p className="text-gray-600 leading-relaxed italic mb-2 text-sm" style={{color: '#000000'}}>"I recognize the value of this content".</p>
                <p className="text-gray-600 leading-relaxed text-sm" style={{color: '#000000'}}>
                  The 20% payment creates a direct value exchange. It signals genuine appreciation and supports the creator's livelihood.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2 text-[#6FF000]" style={{color: '#000000', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>2. Prediction Logic</h3>
                <p className="text-gray-600 leading-relaxed italic mb-2 text-sm" style={{color: '#000000'}}>“I predict this content will go viral”.</p>
                <p className="text-gray-600 leading-relaxed text-sm" style={{color: '#000000'}}>
                  The 80% contribution is an active prediction. By spotting quality early, the user positions themselves to earn “Thank-you Rewards” from future supporters.
                </p>
              </div>
              
              <div className="relative h-[300px] flex items-center justify-center">
                <img 
                  src="/images/9.png" 
                  alt="Green Crystal Chess King" 
                  className="h-full object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-[#6FF000]/20 blur-3xl -z-10 rounded-full scale-75"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The sharing chain */}
        <section className="py-12" style={{backgroundImage: 'url(/images/sharing-chain-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll', height: '970px'}}>
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>The sharing chain</h2>
              <p className="text-gray-500 uppercase tracking-widest" style={{fontWeight: '500', fontSize: '10px'}}>How It Works</p>
            </div>

            <div className="flex flex-col items-center gap-8">
              {/* Text and Info Box moved to top */}
              <div className="w-full">
                <div className="space-y-6">
                  <div className="relative">
                    <h3 className="text-lg font-bold mb-1" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif', color: '#000000'}}>1. Seniors</h3>
                    <p className="text-gray-600 text-sm" style={{color: '#000000'}}>
                      Anyone who paid before you.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-lg font-bold mb-1" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif', color: '#000000'}}>2. Juniors</h3>
                    <p className="text-gray-600 text-sm" style={{color: '#000000'}}>
                      Anyone who pays after you.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-[#F0FDF4] rounded-xl border border-[#6FF000]/20">
                  <p className="text-sm text-gray-700 mb-4" style={{color: '#000000'}}>
                    When you pay, your 80% (Prediction Portion) rewards your seniors. When future users pay, you become the senior, earning from their payments.
                  </p>
                  <p className="text-sm text-gray-700" style={{color: '#000000'}}>
                    <span style={{fontWeight: 'bold'}}>The Goal:</span> Be the one who sees potential before the crowd does.
                  </p>
                </div>
              </div>

              {/* Phone Image moved to bottom */}
              <div ref={phoneRef} className="relative cursor-pointer w-full max-w-[280px]" onClick={handleClick}>
                <img src="/images/sharing-chain-phone.png" alt="The Sharing Chain" className="w-full h-auto drop-shadow-2xl rounded-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* 7. The 365 day window rule */}
        <section className="py-12 bg-white">
          <div className="container text-center px-4">
            <h2 className="text-3xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>The 365 day window rule</h2>
            <p className="text-gray-500 mb-10 uppercase tracking-widest" style={{fontWeight: '500', fontSize: '10px'}}>Each Prediction Has a Lifecycle</p>
            
            <div className="relative w-full mb-8">
               <img src="/images/18.png" alt="Distribution Formula" className="w-full h-auto object-contain mx-auto" />
            </div>
            
            <p className="text-gray-500 text-xs mx-auto" style={{color: '#000000'}}>
              Rewards are distributed based on <strong>recency</strong> relative to the current payer. This ensures a dynamic lifecycle for every payment.
            </p>
          </div>
        </section>

        {/* 8. Simple math */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>Simple math</h2>
              <p className="text-gray-500 uppercase tracking-widest" style={{fontWeight: '500', fontSize: '10px'}}>Distribution Formula</p>
            </div>

            <div className="space-y-6">
              {/* Creator Connected */}
              <div className="bg-[#F0FDF4] p-6 rounded-2xl border border-[#6FF000]/20">
                <h3 className="text-lg font-bold mb-4 text-gray-800" style={{color: '#000000', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>When user pays X amount:</h3>
                <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                   <p className="font-mono text-xs text-gray-500 mb-1" style={{color: '#000000', fontWeight: '700'}}>Creator Revenue</p>
                   <p className="font-mono text-lg font-bold text-[#6FF000]" style={{color: '#000000'}}>Revenue = 0.2 × X<sub>n</sub></p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                   <p className="font-mono text-xs text-gray-500 mb-1" style={{color: '#000000', fontWeight: '800'}}>Reward Pool</p>
                   <p className="font-mono text-lg font-bold text-[#6FF000]" style={{color: '#000000'}}>Pool = 0.8 × X<sub>n</sub></p>
                </div>
              </div>

              {/* Reward Distribution */}
              <div className="bg-[#f0fdf4] p-6 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-gray-800" style={{color: '#000000', fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>Reward for a specific senior i in tier k:</h3>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                   <p className="font-mono text-xs text-gray-500 mb-1" style={{color: '#000000', fontWeight: '700'}}>Reward Distribution</p>
                   <p className="font-mono text-lg font-bold text-[#6FF000]" style={{color: '#000000'}}>Reward<sub>i,k</sub> = Pool<sub>k</sub> × (X<sub>i</sub> / H<sub>k</sub>)</p>
                </div>
                <p className="text-xs text-gray-400 mt-4" style={{color: '#000000'}}>
                  Where Xi is the total contributed amount by senior i in tier k, Hk is the total historical payments in that tier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Win Win Win ecosystem */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>Win-Win-Win ecosystem</h2>
              <p className="text-gray-500 uppercase tracking-widest" style={{fontWeight: '500', fontSize: '10px'}}>Creators, Users, Platform</p>
            </div>

            <div className="space-y-8">
              {/* Creators Card */}
              <div 
                className="relative aspect-square overflow-hidden group rounded-xl cursor-pointer"
                onClick={() => handleCardTap('creators')}
              >
                <img 
                  src="/images/7.png" 
                  alt="Writer at desk" 
                  className={`w-full h-full object-cover transition-all duration-700 ${activeCard === 'creators' ? 'grayscale-0' : 'grayscale'}`}
                />
                <div className={`absolute inset-0 bg-[#6FF000] flex flex-col justify-center items-center text-center p-8 transition-opacity duration-300 ${activeCard === 'creators' ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-2xl font-bold text-black mb-4" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>Creators</h3>
                  <p className="text-sm text-black font-medium leading-relaxed" style={{fontSize: '16px'}}>
                    Focus on quality over quantity. Immediate 20% revenue from single hits without needing a massive subscriber base.
                  </p>
                </div>
              </div>

              {/* Users Card */}
              <div 
                className="relative aspect-square overflow-hidden group rounded-xl cursor-pointer"
                onClick={() => handleCardTap('users')}
              >
                <img 
                  src="/images/66.png" 
                  alt="Open book on table" 
                  className={`w-full h-full object-cover transition-all duration-700 ${activeCard === 'users' ? 'grayscale-0' : 'grayscale'}`}
                />
                <div className={`absolute inset-0 bg-[#6FF000] flex flex-col justify-center items-center text-center p-8 transition-opacity duration-300 ${activeCard === 'users' ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-2xl font-bold text-black mb-4" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>Users</h3>
                  <p className="text-sm text-black font-medium leading-relaxed" style={{fontSize: '16px'}}>
                    Recover attention ownership. Gain financial upside from good taste. Information feed becomes high-signal.
                  </p>
                </div>
              </div>

              {/* TaleX Card */}
              <div 
                className="relative aspect-square overflow-hidden group rounded-xl cursor-pointer"
                onClick={() => handleCardTap('platform')}
              >
                <img 
                  src="/images/ecosystem-laptop.jpg" 
                  alt="Laptop workspace" 
                  className={`w-full h-full object-cover transition-all duration-700 ${activeCard === 'platform' ? 'grayscale-0' : 'grayscale'}`}
                />
                <div className={`absolute inset-0 bg-[#6FF000] flex flex-col justify-center items-center text-center p-8 transition-opacity duration-300 ${activeCard === 'platform' ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-2xl font-bold text-black mb-4" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>Platform</h3>
                  <p className="text-sm text-black font-medium leading-relaxed" style={{fontSize: '16px'}}>
                    Shifts from an "Ad Engine" to a "Value Engine". Revenue aligns with content quality, not view counts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Risk control and safety */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>Risk control and safety</h2>
              <p className="text-gray-500 uppercase tracking-widest" style={{fontWeight: '500', fontSize: '10px'}}>Everyone Is Safe To Go</p>
            </div>

            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-black p-6 rounded-xl flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <img src="/images/non-financial-product.png" alt="Non-Financial Product" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-lg" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>Non-Financial Product</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    No tokens, no IPO, no ICO. Strictly a content appreciation mechanism.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-black p-6 rounded-xl flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <img src="/images/no-secondary-market.png" alt="No Secondary Market" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-lg" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>No Secondary Market</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Reward rights are tied to the account and cannot be traded or speculated on.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-black p-6 rounded-xl flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <img src="/images/finite-lifecycle.png" alt="Finite Lifecycle" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-lg" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>Finite Lifecycle</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Rights expire after 365 days. The system resets, preventing "Ponzi" structures.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-black p-6 rounded-xl flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <img src="/images/no-guaranteed-returns.png" alt="No Guaranteed Returns" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-lg" style={{fontWeight: '800', fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>No Guaranteed Returns</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    All rewards depend on future real user activity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. The shift from ads to direct value */}
        <section className="py-12 bg-white">
          <div className="container px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>The shift from ads to direct value</h2>
              <p className="text-gray-500 uppercase tracking-widest" style={{fontWeight: '500', fontSize: '10px'}}>Back to Creating Real Value</p>
            </div>

            <div className="w-full relative h-[250px] border-l border-b border-gray-200 mb-6">
              {/* Chart Area */}
              <div className="absolute inset-0 overflow-hidden">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradientMobile" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#6FF000" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#6FF000" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,250 C50,230 100,200 150,120 S250,30 300,0 L300,250 Z" fill="url(#chartGradientMobile)" />
                  <path d="M0,250 C50,230 100,200 150,120 S250,30 300,0" fill="none" stroke="#6FF000" strokeWidth="3" />
                </svg>
                
                {/* Label */}
                <div className="absolute top-[10%] right-[5%] bg-[#6FF000] text-black px-3 py-1 rounded-full font-bold text-xs shadow-lg">
                  Direct Payment
                </div>
                
                <div className="absolute bottom-[10%] left-[5%] bg-white border border-gray-200 text-gray-500 px-3 py-1 rounded-full font-bold text-xs shadow-sm">
                  Ad-Based
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-600 text-sm mx-auto" style={{color: '#000000'}}>
              The market is rapidly shifting away from attention-based ad models towards direct value exchange.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F0FDF4] text-center relative overflow-hidden" style={{backgroundImage: 'url(/images/new-way-value-discovery.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="container relative z-10 px-4">
            <h2 className="text-3xl font-bold mb-6 font-serif" style={{fontWeight: '400', fontFamily: '"Abril Fatface", serif'}}>A new way of value discovery</h2>
            <p className="text-lg text-gray-600 mb-10 mx-auto" style={{color: '#000000', fontWeight: '500'}}>
              Redefining "Tipping" from an emotional expression to a systematic tool for content discovery and growth.
            </p>
            <Button className="bg-black hover:bg-[#6FF000] text-white hover:text-black font-bold rounded-full px-8 py-6 text-lg shadow-xl transition-all w-full max-w-xs" onClick={() => window.location.href = 'https://www.talex.world/publish'}>
              Tell Your Tale
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
