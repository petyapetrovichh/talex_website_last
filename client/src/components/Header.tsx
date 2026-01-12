import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold tracking-tight">TaleX</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/explore">
            <span className="text-sm font-medium text-gray-600 hover:text-black transition-colors cursor-pointer">Explore</span>
          </Link>
          <Link href="/community">
            <span className="text-sm font-medium text-gray-600 hover:text-black transition-colors cursor-pointer">Community</span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-sm font-medium">
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-[#82E600] hover:bg-white text-black font-semibold rounded-full px-6 border-2 border-transparent hover:border-[#82E600] transition-colors">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <Link href="/explore">
            <span className="block py-2 text-base font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Explore</span>
          </Link>
          <Link href="/community">
            <span className="block py-2 text-base font-medium text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Community</span>
          </Link>
          <div className="h-px bg-gray-100 my-2" />
          <Link href="/login">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setIsMobileMenuOpen(false)}>
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="w-full bg-[#82E600] hover:bg-white text-black font-semibold rounded-full border-2 border-transparent hover:border-[#82E600] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
