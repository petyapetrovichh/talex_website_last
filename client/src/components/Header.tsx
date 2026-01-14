import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = (menuName: string) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMenu(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white py-3 shadow-sm`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/logo-new.png" alt="TaleX" className="h-8 w-auto" style={{width: '165px', height: '29px'}} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Explore Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer py-4">
                <span className={`text-sm font-medium group-hover:text-[#6FF000] transition-colors ${styles.desktopNavText}`}>Explore</span>
                <ChevronDown size={16} className="text-gray-400 group-hover:text-[#6FF000] transition-colors group-hover:rotate-180 duration-200" />
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                <div className="flex flex-col">
                  <a href="https://www.talex.world/" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>TaleX App</a>
                  <Link href="/model" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.desktopDropdownText}`}>Our Model</Link>
                  <a href="#" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>Featured</a>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer py-4">
                <span className={`text-sm font-medium group-hover:text-[#6FF000] transition-colors ${styles.desktopNavText}`}>Company</span>
                <ChevronDown size={16} className="text-gray-400 group-hover:text-[#6FF000] transition-colors group-hover:rotate-180 duration-200" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                <div className="flex flex-col">
                  <a href="https://docs.talex.world/" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>About</a>
                  <a href="https://t.me/talex_chain_community" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>Help</a>
                  <a href="#" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>Contact</a>
                </div>
              </div>
            </div>

            {/* Community Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer py-4">
                <span className={`text-sm font-medium group-hover:text-[#6FF000] transition-colors ${styles.desktopNavText}`}>Community</span>
                <ChevronDown size={16} className="text-gray-400 group-hover:text-[#6FF000] transition-colors group-hover:rotate-180 duration-200" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                <div className="flex flex-col">
                  <a href="https://x.com/talex_chain" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>X (Twitter)</a>
                  <a href="https://t.me/TaleX_chain" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>Telegram</a>
                  <a href="https://discord.gg/talex" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>Discord</a>
                  <a href="https://www.binance.com/en/square/profile/talex_chain" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>Binance Square</a>
                  <a href="https://coinmarketcap.com/community/profile/TaleX_chain" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>CoinMarketCap</a>
                  <a href="https://facebook.com/TaleXchain" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>Facebook</a>
                  <a href="https://youtube.com/@talex_chain" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>YouTube</a>
                  <a href="https://www.instagram.com/talexchain" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>Instagram</a>
                  <a href="https://www.tiktok.com/@talex_chain" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>TikTok</a>
                  <a href="https://open.spotify.com/show/51Q8zhfB2ADlmyEaUzT3iR" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>Spotify</a>
                  <a href="https://www.linkedin.com/company/talexchain" target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 text-sm hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.desktopDropdownText}`}>LinkedIn</a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search TaleX..." 
              className="bg-[#F6F6F6] text-sm rounded-full pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-[#6FF000]/20 w-64 transition-all"
            />
          </div>
          <Button 
            onClick={() => window.location.href = 'https://www.talex.world/publish'}
            className="bg-[#6FF000] hover:bg-black text-black hover:text-white font-semibold rounded-full px-6 border-2 border-transparent transition-colors"
          >
            Start publishing
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-4 flex flex-col gap-2">
            {/* Explore Menu */}
            <div>
              <button
                onClick={() => toggleMenu('explore')}
                className={`w-full flex items-center justify-between py-3 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.mobileMenuText}`}
              >
                <span>Explore</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-200 ${expandedMenu === 'explore' ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedMenu === 'explore' && (
                <div className="pl-4 flex flex-col gap-1 mt-1">
                  <a href="https://www.talex.world/" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>TaleX App</a>
                  <a href="#" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>Our Model</a>
                  <a href="#" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>Featured</a>
                </div>
              )}
            </div>

            {/* Company Menu */}
            <div>
              <button
                onClick={() => toggleMenu('company')}
                className={`w-full flex items-center justify-between py-3 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.mobileMenuText}`}
              >
                <span>Company</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-200 ${expandedMenu === 'company' ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedMenu === 'company' && (
                <div className="pl-4 flex flex-col gap-1 mt-1">
                  <a href="https://docs.talex.world/" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>About</a>
                  <a href="https://t.me/talex_chain_community" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>Help</a>
                  <a href="#" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>Contact</a>
                </div>
              )}
            </div>

            {/* Community Menu */}
            <div>
              <button
                onClick={() => toggleMenu('community')}
                className={`w-full flex items-center justify-between py-3 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors ${styles.mobileMenuText}`}
              >
                <span>Community</span>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-200 ${expandedMenu === 'community' ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedMenu === 'community' && (
                <div className="pl-4 flex flex-col gap-1 mt-1">
                  <a href="https://x.com/talex_chain" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>X (Twitter)</a>
                  <a href="https://t.me/TaleX_chain" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>Telegram</a>
                  <a href="https://discord.gg/talex" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>Discord</a>
                  <a href="https://www.binance.com/en/square/profile/talex_chain" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>Binance Square</a>
                  <a href="https://coinmarketcap.com/community/profile/TaleX_chain" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>CoinMarketCap</a>
                  <a href="https://facebook.com/TaleXchain" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>Facebook</a>
                  <a href="https://youtube.com/@talex_chain" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>YouTube</a>
                  <a href="https://www.instagram.com/talexchain" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>Instagram</a>
                  <a href="https://www.tiktok.com/@talex_chain" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>TikTok</a>
                  <a href="https://open.spotify.com/show/51Q8zhfB2ADlmyEaUzT3iR" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>Spotify</a>
                  <a href="https://www.linkedin.com/company/talexchain" target="_blank" rel="noopener noreferrer" className={`py-2 px-4 hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block ${styles.mobileMenuSubText}`}>LinkedIn</a>
                </div>
              )}
            </div>

            <div className="h-px bg-gray-100 my-2" />

            {/* Mobile CTA Button */}
            <Button 
              onClick={() => {
                window.location.href = 'https://www.talex.world/publish';
                closeMobileMenu();
              }}
              className="w-full bg-[#6FF000] hover:bg-black text-black hover:text-white font-semibold rounded-full py-3 border-2 border-transparent transition-colors"
            >
              Start publishing
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
