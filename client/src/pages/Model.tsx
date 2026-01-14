import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Model() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Header />
      
      <div className="pt-20">
        {/* 1. Hero Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#F0FDF4] to-white">
          {/* Background Sketch Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236FF000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}>
          </div>
          
          {/* Top Background Image */}
          <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0">
             <img src="/Group1556239238.png" alt="Background pattern" className="w-full h-full object-cover opacity-50" />
          </div>
          
          <div className="container relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: '"Abril Fatface", serif' }}>
              A new economic engine for <br/>
              <span className="italic relative inline-block">
                great content
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#6FF000]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Single-Content Purchase & Prediction Market
            </p>
            
            {/* Sketch Illustration Placeholder */}
            <div className="relative w-full max-w-5xl mx-auto h-[400px] mt-12">
               <img src="/images/sketch-people.png" alt="People connecting sketch" className="w-full h-full object-contain opacity-80 mix-blend-multiply" onError={(e) => {
                 // Fallback if image doesn't exist yet
                 e.currentTarget.style.display = 'none';
               }}/>
               {/* Fallback visual if image missing */}
               <div className="absolute inset-0 flex items-end justify-center gap-4 opacity-20 pointer-events-none">
                  <div className="w-32 h-64 bg-[#6FF000] rounded-t-full"></div>
                  <div className="w-32 h-48 bg-[#6FF000] rounded-t-full"></div>
                  <div className="w-32 h-80 bg-[#6FF000] rounded-t-full"></div>
                  <div className="w-32 h-56 bg-[#6FF000] rounded-t-full"></div>
               </div>
            </div>
          </div>
        </section>

        {/* 2. What went wrong? */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: '"Abril Fatface", serif' }}>What went wrong?</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">The Broken Content Economy</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* For Creators */}
              <div>
                <h3 className="text-xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">For Creators</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      Algorithms prioritize clickbait over quality, forcing creators to chase trends instead of art.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      Unpredictable income. Platforms take huge cuts, leaving crumbs for the actual makers.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      No ownership. You build the audience, but the platform owns the relationship.
                    </p>
                  </div>
                </div>
              </div>

              {/* For Users */}
              <div>
                <h3 className="text-xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">For Users</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      Information overload. Feeds are filled with ads and irrelevant suggested content.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      Passive consumption. You spend hours scrolling but gain little real value or connection.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#6FF000] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed pt-1">
                      Support feels futile. Your likes and shares benefit the platform, not you or the creator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <div className="w-full h-4 bg-[#6FF000] transform -skew-y-1"></div>

        {/* 3. Three core pillars of the new engine */}
        <section className="py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: '"Abril Fatface", serif' }}>Three core pillars of the new engine</h2>
            <p className="text-gray-500 text-sm mb-16 uppercase tracking-widest">The Foundation of TaleX</p>
            
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 mb-6 text-[#6FF000] group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Single Payment</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  One-time payment for permanent access. No subscriptions, no hidden fees. You own what you pay for.
                </p>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 mb-6 text-[#6FF000] group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">User Filter</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Quality is determined by willingness to pay, not just clicks. A natural filter for high-value content.
                </p>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-24 h-24 mb-6 text-[#6FF000] group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Prediction Market</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  Early supporters share in the success. Identify great content early and get rewarded as it grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The 365-day window rule */}
        <section className="py-24 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: '"Abril Fatface", serif' }}>The 365-day window rule</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Fair Distribution Mechanism</p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-6">How it works</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-bold">1</div>
                        <div>
                          <h4 className="font-bold mb-1">Early Bird Period</h4>
                          <p className="text-gray-600 text-sm">Support within the first 7 days to get maximum future revenue share.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-bold">2</div>
                        <div>
                          <h4 className="font-bold mb-1">Standard Window</h4>
                          <p className="text-gray-600 text-sm">From day 8 to 365, revenue share gradually decreases.</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 font-bold">3</div>
                        <div>
                          <h4 className="font-bold mb-1">Creator Forever</h4>
                          <p className="text-gray-600 text-sm">After 365 days, 100% of new revenue goes directly to the creator.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1 flex justify-center">
                    {/* Replaced with Maskgroup.png */}
                    <img src="/Maskgroup.png" alt="365-day window rule visualization" className="w-full max-w-sm object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Economic Model */}
        <section className="py-24 bg-white">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-16" style={{ fontFamily: '"Abril Fatface", serif' }}>Economic Model</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-6xl font-bold text-[#6FF000] mb-4">80%</div>
                <h3 className="text-xl font-bold mb-2">Creator Pool</h3>
                <p className="text-gray-600 text-sm">
                  Directly to the creator. Sustainable income for quality work.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-6xl font-bold text-black mb-4">20%</div>
                <h3 className="text-xl font-bold mb-2">Supporter Pool</h3>
                <p className="text-gray-600 text-sm">
                  Distributed to early backers. The earlier you support, the more you earn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Why this works */}
        <section className="py-24 bg-black text-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2 text-[#6FF000]" style={{ fontFamily: '"Abril Fatface", serif' }}>Why this works</h2>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Incentive Alignment</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 border border-gray-800 rounded-2xl hover:border-[#6FF000] transition-colors">
                <h3 className="text-xl font-bold mb-4">For Creators</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Focus on quality, not quantity. Build a loyal community of true backers, not just passive viewers.
                </p>
              </div>
              <div className="p-8 border border-gray-800 rounded-2xl hover:border-[#6FF000] transition-colors">
                <h3 className="text-xl font-bold mb-4">For Backers</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your taste has value. Discover great content early and get rewarded for your curation skills.
                </p>
              </div>
              <div className="p-8 border border-gray-800 rounded-2xl hover:border-[#6FF000] transition-colors">
                <h3 className="text-xl font-bold mb-4">For Ecosystem</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Quality rises to the top naturally. No black-box algorithms deciding what you should see.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-24 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: '"Abril Fatface", serif' }}>Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2">Is this a subscription?</h3>
                <p className="text-gray-600">No. You pay once for each piece of content (article, video, etc.) and own access to it forever.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2">How much can I earn?</h3>
                <p className="text-gray-600">It depends on how early you support and how popular the content becomes. The earlier you are, the higher your share of the supporter pool.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold mb-2">Can I withdraw my earnings?</h3>
                <p className="text-gray-600">Yes, anytime. Earnings are credited to your wallet instantly and can be withdrawn to your bank account or crypto wallet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="py-32 bg-[#F0FDF4] text-center">
          <div className="container">
            <h2 className="text-5xl font-bold mb-8" style={{ fontFamily: '"Abril Fatface", serif' }}>Ready to join the new economy?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Start supporting creators you love and get rewarded for your taste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-full">
                Start Exploring
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100 text-lg px-8 py-6 rounded-full">
                Become a Creator
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
