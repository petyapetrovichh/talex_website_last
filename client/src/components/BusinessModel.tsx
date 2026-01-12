import { Button } from "@/components/ui/button";

export default function BusinessModel() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-6">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">TX</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">A model that changes everything</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every interaction on TaleX is an asset. By buying content shares, you become a co-owner of the content's future revenue. The more popular the content becomes, the more you earn. It's a win-win for creators and supporters.
          </p>
          <Button className="mt-8 bg-[#82E600] hover:bg-[#70C700] text-black font-bold rounded-full px-8 py-6">
            Learn more about our model
          </Button>
        </div>

        <div className="relative max-w-5xl mx-auto">
            {/* Central Phone Mockup */}
            <div className="relative z-10 w-full max-w-[320px] mx-auto bg-white rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden aspect-[9/19.5]">
                <div className="w-full h-full bg-gray-50 flex flex-col">
                    <div className="p-6 pt-12">
                        <h3 className="text-2xl font-bold mb-4">Support & Earn</h3>
                        <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold">The Golden Ratio</span>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span>50% Creator Earnings</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>50% Supporter Rewards</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 mb-6">
                            <div className="bg-white p-3 rounded-lg text-center shadow-sm border border-gray-100">
                                <div className="font-bold">$1</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg text-center shadow-sm border border-gray-100">
                                <div className="font-bold">$5</div>
                            </div>
                            <div className="bg-white p-3 rounded-lg text-center shadow-sm border border-gray-100">
                                <div className="font-bold">$10</div>
                            </div>
                        </div>
                        
                        <Button className="w-full bg-black text-white rounded-full py-6">Support Now</Button>
                    </div>
                </div>
            </div>

            {/* Floating Cards - Left */}
            <div className="hidden md:block absolute top-20 left-0 lg:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-64 animate-in slide-in-from-left-10 duration-1000">
                <h4 className="font-bold mb-4">Trial Payout</h4>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">Initial Support</div>
                        <div className="font-bold">$10.00</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">Current Value</div>
                        <div className="font-bold text-[#82E600]">$15.40</div>
                    </div>
                    <div className="h-px bg-gray-100"></div>
                    <div className="flex justify-between items-center">
                        <div className="text-sm font-bold">Total Return</div>
                        <div className="font-bold text-[#82E600]">+54%</div>
                    </div>
                </div>
            </div>

            {/* Floating Cards - Right */}
            <div className="hidden md:block absolute top-40 right-0 lg:-right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-64 animate-in slide-in-from-right-10 duration-1000 delay-200">
                <h4 className="font-bold mb-4">Earnings Data</h4>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">Revenue Share</div>
                        <div className="font-bold text-[#82E600]">+$3.20</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">Total Balance</div>
                        <div className="font-bold">$118.50</div>
                    </div>
                </div>
            </div>
            
            <div className="hidden md:block absolute bottom-20 right-10 lg:right-0 bg-black text-white p-4 rounded-xl shadow-xl w-56 animate-in slide-in-from-bottom-10 duration-1000 delay-500">
                <div className="flex items-center gap-3">
                    <div className="text-3xl font-bold">160</div>
                    <div className="text-xs text-gray-400">Supporters backed this content</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
