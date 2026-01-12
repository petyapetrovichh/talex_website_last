import { Fingerprint, Leaf, Heart, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Fingerprint className="w-12 h-12 text-[#82E600]" />,
    title: "No Account",
    description: "Start supporting creators instantly. No sign-up required for basic interactions. We believe in removing friction between you and the content you love."
  },
  {
    icon: <Leaf className="w-12 h-12 text-[#82E600]" />,
    title: "Natural Promotion",
    description: "Our algorithm promotes content based on organic engagement, not paid ads. Quality content naturally rises to the top, ensuring a fair playing field."
  },
  {
    icon: <Heart className="w-12 h-12 text-[#82E600]" />,
    title: "Healthy Virality",
    description: "We encourage meaningful interactions over clickbait. Our system rewards content that builds community and fosters genuine connection."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-[#82E600]" />,
    title: "Ultimate Ownership",
    description: "You own your data and your audience. We provide the tools, but you build the kingdom. Export your data anytime, no lock-in."
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-20">Why Creators Choose TaleX</h2>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 p-4 bg-[#F0FDF4] rounded-2xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <button className="mt-4 text-[#82E600] font-bold text-sm hover:underline">
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
