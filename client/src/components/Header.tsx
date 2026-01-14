import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search, Compass, Building2, Users } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // 默认展开所有菜单
  const [expandedMenu, setExpandedMenu] = useState<string[]>(['explore', 'company', 'community']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 关闭菜单时的处理
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    // 保持菜单展开状态，以便下次打开时仍然展开
    // setExpandedMenu([]); 
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
          <button
            className="p-2 rounded-lg active:bg-gray-100 transition-colors mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMobileMenuOpen ? <X size={24} color="black" /> : <Menu size={24} color="black" />}
          </button>

          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/logo-new.png" alt="TaleX" className="h-8 w-auto" style={{width: '120px', height: 'auto'}} />
            </div>
          </Link>

          <div className="w-10" />
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
            style={{ top: '60px' }}
          />
          
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg max-h-[calc(100vh-60px)] overflow-y-auto animate-in slide-in-from-top-5 z-50">
            {/* 搜索框 */}
            <div className="p-4 border-b border-gray-100 sticky top-0 bg-white">
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
            
            <div className="p-4 flex flex-col gap-2">
            {/* Explore 菜单 */}
            <button
              onClick={() => toggleSubmenu('explore')}
              className="w-full flex items-center justify-between py-3 px-4 text-base font-medium text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <Compass size={20} className="text-[#6FF000]" />
                <span>Explore</span>
              </div>
              <ChevronDown size={18} className={`transition-transform ${expandedMenu.includes('explore') ? 'rotate-180' : ''}`} />
            </button>
            {expandedMenu.includes('explore') && (
              <div className="flex flex-col gap-1 pl-4 pb-2">
                <a href="https://www.talex.world/" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">TaleX App</a>
                <Link href="/model" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100 block" onClick={closeMobileMenu}>Our Model</Link>
                <a href="#" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">Featured</a>
              </div>
            )}

            {/* 分割线 */}
            <div className="my-1 border-b border-gray-100" />

            {/* Company 菜单 */}
            <button
              onClick={() => toggleSubmenu('company')}
              className="w-full flex items-center justify-between py-3 px-4 text-base font-medium text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <Building2 size={20} className="text-[#6FF000]" />
                <span>Company</span>
              </div>
              <ChevronDown size={18} className={`transition-transform ${expandedMenu.includes('company') ? 'rotate-180' : ''}`} />
            </button>
            {expandedMenu.includes('company') && (
              <div className="flex flex-col gap-1 pl-4 pb-2">
                <a href="https://docs.talex.world/" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">About</a>
                <a href="https://t.me/talex_chain_community" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">Help</a>
                <a href="#" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">Contact</a>
              </div>
            )}

            {/* 分割线 */}
            <div className="my-1 border-b border-gray-100" />

            {/* Community 菜单 */}
            <button
              onClick={() => toggleSubmenu('community')}
              className="w-full flex items-center justify-between py-3 px-4 text-base font-medium text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <Users size={20} className="text-[#6FF000]" />
                <span>Community</span>
              </div>
              <ChevronDown size={18} className={`transition-transform ${expandedMenu.includes('community') ? 'rotate-180' : ''}`} />
            </button>
            {expandedMenu.includes('community') && (
              <div className="flex flex-col gap-1 pl-4 pb-2 max-h-64 overflow-y-auto">
                <a href="https://x.com/talex_chain" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">X (Twitter)</a>
                <a href="https://t.me/TaleX_chain" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">Telegram</a>
                <a href="https://discord.gg/talex" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">Discord</a>
                <a href="https://www.binance.com/en/square/profile/talex_chain" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">Binance Square</a>
                <a href="https://coinmarketcap.com/community/profile/TaleX_chain" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">CoinMarketCap</a>
                <a href="https://facebook.com/TaleXchain" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">Facebook</a>
                <a href="https://youtube.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">YouTube</a>
                <a href="https://www.instagram.com/talexchain" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">Instagram</a>
                <a href="https://www.tiktok.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">TikTok</a>
                <a href="https://open.spotify.com/show/51Q8zhfB2ADlmyEaUzT3iR" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">Spotify</a>
                <a href="https://www.linkedin.com/company/talexchain" target="_blank" rel="noopener noreferrer" className="py-2.5 px-4 text-sm text-black hover:text-[#6FF000] hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100">LinkedIn</a>
              </div>
            )}

              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button 
                  onClick={() => window.location.href = 'https://www.talex.world/publish'}
                  className="w-full bg-[#6FF000] hover:bg-black text-black hover:text-white font-semibold rounded-full py-3 border-2 border-transparent transition-colors"
                >
                  Start publishing
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
