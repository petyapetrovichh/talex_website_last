import { Fingerprint, Leaf, Heart, ShieldCheck } from "lucide-react";

const features = [
  {
    image: "/12.png",
    title: "No Account",
    description: "Neither creators nor users need to register an account to start publishing or exploring. While most platforms force you through a time-consuming registration process, we simply removed it. All you need to do is enter a unique username and use what you already do every day when unlocking your phone — your fingerprint or face — as a passkey to access your account. Your username is your account, and only when you need it."
  },
  {
    image: "/13.png",
    title: "Natural Promotion",
    description: "The problem of attracting traffic to content is the most common challenge in the creator economy. We offer creators a model where they no longer have to worry about it. Your supporters become your promoters through word of mouth, because they can now benefit from your growth as well. All that’s left for you is the most important and enjoyable part — creating great content."
  },
  {
    image: "/14.png",
    title: "Healthy Virality",
    description: "Creators no longer fight algorithms that constantly favor noise or ads over their work. Our recommendation mechanism allows users to actively train their own content feed through real tipping behavior. The platform does not treat user attention as inventory to be freely sold. As a result, content virality is naturally biased toward works that aim to create real value for users."
  },
  {
    image: "/15.png",
    title: "Ultimate Ownership",
    description: "Creators keep what matters most — complete freedom over how, when, and where their content is distributed. We don’t require any transfer of rights, so you can publish, edit, or remove your work at any time. Many creators continue monetizing the same content across other platforms in parallel. But over time, their fans naturally choose to support works on TaleX — because here, they can benefit together with creators’ growth."
  }
];

export default function WhyChoose() {
  return (
    <section className="bg-white" style={{marginTop: '119px'}}>
      {/* =========================================
          MOBILE VIEW (Visible only on mobile)
          ========================================= */}
      <div className="md:hidden py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12" style={{fontSize: '22px'}}>Why Creators Choose TaleX</h2>
        
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div key={`mobile-${index}`} className="flex flex-col gap-4 items-center text-center">
              <div className="flex-shrink-0">
                <img src={feature.image} alt={feature.title} className="w-20 h-20 object-contain" style={{width: '152px', height: '152px'}} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{fontSize: '20px'}}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base" style={{fontSize: '16px'}}>
                  {feature.description}
                </p>
                <button className="mt-3 text-[#6FF000] font-bold text-sm hover:underline">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW (Visible only on desktop)
          ========================================= */}
      <div className="hidden md:block container py-24" style={{marginBottom: '197px'}}>
        <h2 className="text-4xl font-bold text-center mb-20">Why Creators Choose TaleX</h2>
        
        <div className="max-w-4xl mx-auto space-y-16 h-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <img src={feature.image} alt={feature.title} className="w-24 h-24 md:w-[180px] md:h-[180px] object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <button className="mt-4 text-[#6FF000] font-bold text-sm hover:underline">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
