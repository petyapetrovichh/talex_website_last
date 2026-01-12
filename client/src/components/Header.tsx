import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white py-3 shadow-sm`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-2xl font-bold tracking-tight">TaleX</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer py-4">
                <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors">Explore</span>
                <ChevronDown size={16} className="text-gray-400 group-hover:text-black transition-colors group-hover:rotate-180 duration-200" />
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                <div className="flex flex-col">
                  <a href="#" className="px-4 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">TaleX App</a>
                  <a href="#" className="px-4 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">Our Model</a>
                  <a href="#" className="px-4 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">Featured</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer py-4">
                <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors">Community</span>
                <ChevronDown size={16} className="text-gray-400 group-hover:text-black transition-colors group-hover:rotate-180 duration-200" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                <div className="flex flex-col">
                  <a href="#" className="px-4 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">About</a>
                  <a href="#" className="px-4 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">Help Center</a>
                  <a href="#" className="px-4 py-2.5 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search TaleX..." 
              className="bg-[#F6F6F6] text-sm rounded-full pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-[#82E600]/20 w-64 transition-all"
            />
          </div>
          <Link href="/signup">
            <Button className="bg-[#82E600] hover:bg-white text-black font-semibold rounded-full px-6 border-2 border-transparent hover:border-[#82E600] transition-colors">
              Start publishing
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
