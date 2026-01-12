import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import CreatorQuote from "@/components/CreatorQuote";
import BusinessModel from "@/components/BusinessModel";
import CreatorList from "@/components/CreatorList";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <CreatorQuote />
        <BusinessModel />
        <CreatorList />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  );
}
