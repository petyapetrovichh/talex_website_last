import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Compass, Building2, Users } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  // 默认展开所有菜单
  const [expandedMenu, setExpandedMenu] = useState<string[]>(['explore', 'company', 'community']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // 关闭菜单时的处理
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    // 保持菜单展开状态，以便下次打开时仍然展开
    // setExpandedMenu([]); 
  };

  // 处理菜单项点击
  const handleMenuItemClick = (itemName: string) => {
    setActiveMenuItem(itemName);
    // 300ms后清除活动状态
    setTimeout(() => {
      setActiveMenuItem(null);
    }, 300);
  };

  // 切换子菜单
  const toggleSubmenu = (menu: string) => {
    if (expandedMenu.includes(menu)) {
      setExpandedMenu(expandedMenu.filter(item => item !== menu));
    } else {
      setExpandedMenu([...expandedMenu, menu]);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white py-3 shadow-sm`}
    >
      <div className="container flex items-center justify-between">
        {/* =========================================
            MOBILE HEADER (Visible only on mobile)
            ========================================= */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-lg active:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
            >
              <Menu size={24} color="black" />
            </button>

            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <img src="/logo-new.png" alt="TaleX" className="h-8 w-auto" style={{width: '100px', height: 'auto'}} />
              </div>
            </Link>
          </div>

          <Button 
            onClick={() => window.location.href = 'https://www.talex.world/publish'}
            className="font-semibold rounded-full px-6 border-2 border-transparent transition-colors outline-none active:scale-95" 
            style={{
              width: '130px', 
              height: '30px', 
              fontSize: '14px', 
              marginRight: '5px', 
              border: 'none', 
              boxShadow: 'none',
              backgroundColor: '#6FF000',
              color: 'black',
              transition: 'background-color 0.2s ease, color 0.2s ease'
            }}
          >
            Start publishing
          </Button>
        </div>

        {/* =========================================
            DESKTOP HEADER (Visible only on desktop)
            ========================================= */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center gap-8">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <img src="/logo-new.png" alt="TaleX" className="h-8 w-auto" style={{width: '165px', height: '29px'}} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center gap-6">
              <div className="relative group">
                <div className="flex items-center gap-1 cursor-pointer py-4">
                  <span className="text-sm font-medium text-black group-hover:text-[#6FF000] transition-colors" style={{fontSize: '18px'}}>Explore</span>
                  <ChevronDown size={16} className="text-gray-400 group-hover:text-[#6FF000] transition-colors group-hover:rotate-180 duration-200" />
                </div>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                  <div className="flex flex-col">
                    <a href="https://www.talex.world/" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">TaleX App</a>
                    <Link href="/model" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors block">Our Model</Link>
                    <a href="#" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">Featured</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center gap-1 cursor-pointer py-4">
                  <span className="text-sm font-medium text-black group-hover:text-[#6FF000] transition-colors" style={{fontSize: '18px'}}>Company</span>
                  <ChevronDown size={16} className="text-gray-400 group-hover:text-[#6FF000] transition-colors group-hover:rotate-180 duration-200" />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                  <div className="flex flex-col">
                    <a href="https://docs.talex.world/" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">About</a>
                    <a href="https://t.me/talex_chain_community" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">Help</a>
                    <a href="#" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">Contact</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center gap-1 cursor-pointer py-4">
                  <span className="text-sm font-medium text-black group-hover:text-[#6FF000] transition-colors" style={{fontSize: '18px'}}>Community</span>
                  <ChevronDown size={16} className="text-gray-400 group-hover:text-[#6FF000] transition-colors group-hover:rotate-180 duration-200" />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                  <div className="flex flex-col">
                    <a href="https://x.com/talex_chain" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">X (Twitter)</a>
                    <a href="https://t.me/TaleX_chain" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">Telegram</a>
                    <a href="https://discord.gg/talex" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">Discord</a>
                    <a href="https://www.binance.com/en/square/profile/talex_chain" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">Binance Square</a>
                    <a href="https://coinmarketcap.com/community/profile/TaleX_chain" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">CoinMarketCap</a>
                    <a href="https://facebook.com/TaleXchain" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">Facebook</a>
                    <a href="https://youtube.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">YouTube</a>
                    <a href="https://www.instagram.com/talexchain" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">Instagram</a>
                    <a href="https://www.tiktok.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">TikTok</a>
                    <a href="https://open.spotify.com/show/51Q8zhfB2ADlmyEaUzT3iR" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">Spotify</a>
                    <a href="https://www.linkedin.com/company/talexchain" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
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
        </div>
      </div>

      {/* Mobile Menu - 改进的移动端菜单 */}
      {isMobileMenuOpen && (
        <>
          {/* 半透明背景模糊 */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ 
              top: '60px',
              animation: 'fadeInSlow 0.4s ease-out'
            }}
          />
          
          <div 
            className="md:hidden fixed left-0 right-0 bottom-0 bg-white shadow-lg z-50" 
            style={{
              width: '100vw', 
              top: '60px', 
              display: 'flex', 
              flexDirection: 'column',
              animation: 'slideLeftToRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            {/* 搜索框 */}
            <div className="p-4 border-b border-gray-100 bg-white flex-shrink-0" style={{paddingTop: '1rem'}}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search TaleX..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#F6F6F6] text-sm rounded-full pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-[#6FF000]/20 transition-all"
                />
              </div>
            </div>
            
            <div className="p-4 flex flex-col gap-0 overflow-y-auto flex-1" style={{paddingBottom: '60px'}}>
              {/* Explore */}
              <div className="py-3 px-4 text-base font-bold text-black">Explore</div>
              <a href="https://www.talex.world/" onClick={() => handleMenuItemClick('talex-app')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'talex-app' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>TaleX App</a>
              <Link href="/model" onClick={() => { handleMenuItemClick('our-model'); closeMobileMenu(); }} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 block ${activeMenuItem === 'our-model' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>Our Model</Link>
              <a href="#" onClick={() => handleMenuItemClick('featured')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'featured' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>Featured</a>

              {/* Company */}
              <div className="py-3 px-4 text-base font-bold text-black mt-4">Company</div>
              <a href="https://docs.talex.world/" onClick={() => handleMenuItemClick('about')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'about' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>About</a>
              <a href="https://t.me/talex_chain_community" onClick={() => handleMenuItemClick('help')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'help' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>Help</a>
              <a href="#" onClick={() => handleMenuItemClick('contact')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'contact' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>Contact</a>

              {/* Community */}
              <div className="py-3 px-4 text-base font-bold text-black mt-4">Community</div>
              <a href="https://x.com/talex_chain" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('twitter')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'twitter' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>X (Twitter)</a>
              <a href="https://t.me/TaleX_chain" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('telegram')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'telegram' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>Telegram</a>
              <a href="https://discord.gg/talex" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('discord')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'discord' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>Discord</a>
              <a href="https://www.binance.com/en/square/profile/talex_chain" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('binance')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'binance' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>Binance Square</a>
              <a href="https://coinmarketcap.com/community/profile/TaleX_chain" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('cmc')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'cmc' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>CoinMarketCap</a>
              <a href="https://facebook.com/TaleXchain" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('facebook')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'facebook' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>Facebook</a>
              <a href="https://youtube.com/@talex_chain" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('youtube')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'youtube' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>YouTube</a>
              <a href="https://www.instagram.com/talexchain" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('instagram')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'instagram' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>Instagram</a>
              <a href="https://www.tiktok.com/@talex_chain" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('tiktok')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'tiktok' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>TikTok</a>
              <a href="https://open.spotify.com/show/51Q8zhfB2ADlmyEaUzT3iR" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('spotify')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'spotify' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>Spotify</a>
              <a href="https://www.linkedin.com/company/talexchain" target="_blank" rel="noopener noreferrer" onClick={() => handleMenuItemClick('linkedin')} className={`py-2.5 px-4 text-sm rounded-lg transition-colors hover:text-[#6FF000] hover:bg-gray-50 ${activeMenuItem === 'linkedin' ? 'text-[#6FF000] bg-gray-100' : 'text-black'}`}>LinkedIn</a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
