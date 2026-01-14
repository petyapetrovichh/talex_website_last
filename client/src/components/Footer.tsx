import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100" style={{marginTop: '50px', height: '675px'}}>
      {/* =========================================
          MOBILE VIEW (Visible only on mobile)
          ========================================= */}
      <div className="md:hidden py-12 px-6">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <img src="/logo-new.png" alt="TaleX" className="h-6 w-auto" style={{width: '76px', height: '12px'}} />
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Where great content pays off both creators and supporters. Join the revolution of content ownership.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/features" className="hover:text-black transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-black transition-colors">Pricing</Link></li>
                <li><Link href="/creators" className="hover:text-black transition-colors">For Creators</Link></li>
  
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-black transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Connect</h4>
            <div className="grid grid-cols-2 gap-3">
              <a href="https://x.com/talex_chain" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">X (Twitter)</a>
              <a href="https://t.me/TaleX_chain" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">Telegram</a>
              <a href="https://discord.gg/talex" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">Discord</a>
              <a href="https://www.binance.com/en/square/profile/talex_chain" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">Binance Square</a>
              <a href="https://coinmarketcap.com/community/profile/TaleX_chain" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">CoinMarketCap</a>
              <a href="https://facebook.com/TaleXchain" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">Facebook</a>
              <a href="https://youtube.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">YouTube</a>
              <a href="https://www.instagram.com/talexchain" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">Instagram</a>
              <a href="https://www.tiktok.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">TikTok</a>
              <a href="https://open.spotify.com/show/51Q8zhfB2ADlmyEaUzT3iR" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">Spotify</a>
              <a href="https://www.linkedin.com/company/talexchain" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6FF000] transition-colors">LinkedIn</a>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col gap-4">
            <p className="text-xs text-gray-400 text-center">
              © 2024 TaleX Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <Link href="/privacy" className="hover:text-black transition-colors" style={{color: '#000000'}}>Privacy Policy</Link>
              <Link href="/terms" className="hover:text-black transition-colors" style={{color: '#000000'}}>Terms of Service</Link>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          DESKTOP VIEW (Visible only on desktop)
          ========================================= */}
      <div className="hidden md:block container pt-20 pb-20 lg:pb-[270px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer mb-6">
                <img src="/logo-new.png" alt="TaleX" className="h-8 w-auto" style={{width: '136px', height: '24px'}} />
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed" style={{width: '285px', color: '#000000', fontSize: '18px'}}>
              Where great content pays off both creators and supporters
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6" style={{fontSize: '18px', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', color: '#000000'}}>Explore</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="/features" className="hover:text-black transition-colors">TaleX App</Link></li>
              <li><Link href="/pricing" className="hover:text-black transition-colors">Our Model</Link></li>
              <li><Link href="/creators" className="hover:text-black transition-colors">Featured</Link></li>

            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6" style={{fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', color: '#000000', fontSize: '18px'}}>Company</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-black transition-colors">Help</Link></li>
              <li><Link href="/blog" className="hover:text-black transition-colors">Contact</Link></li>

            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6" style={{color: '#000000', fontSize: '18px', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>Community</h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://x.com/talex_chain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="X (Twitter)">
                <img src="/x-icon.png" alt="X" className="w-5 h-5" />
              </a>
              <a href="https://t.me/TaleX_chain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="Telegram">
                <img src="/telegram-icon.png" alt="Telegram" className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/talex" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="Discord">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.445.864-.607 1.25a18.27 18.27 0 00-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106 13.107 13.107 0 01-1.872-.892.077.077 0 00-.009-.128c.126-.094.252-.192.372-.291a.074.074 0 00.03-.066c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 00.033.065c.12.099.246.198.373.292a.077.077 0 00-.006.127 13.052 13.052 0 01-1.873.892.077.077 0 00-.041.107c.359.698.77 1.364 1.225 1.994a.076.076 0 00.084.028 19.86 19.86 0 006.002-3.03.077.077 0 00.032-.054c.5-4.718-.838-8.812-3.549-12.456a.06.06 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.191-.964 2.156-2.157 2.156zm7.975 0c-1.183 0-2.157-.965-2.157-2.156 0-1.193.964-2.157 2.157-2.157 1.193 0 2.157.964 2.157 2.157 0 1.191-.964 2.156-2.157 2.156z"/></svg>
              </a>
              <a href="https://www.binance.com/en/square/profile/talex_chain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="Binance Square">
                <img src="/binance-icon.png" alt="Binance" className="w-5 h-5" />
              </a>
              <a href="https://coinmarketcap.com/community/profile/TaleX_chain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="CoinMarketCap">
                <img src="/coinmarketcap-icon.png" alt="CoinMarketCap" className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/TaleXchain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="Facebook">
                <img src="/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.instagram.com/talexchain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 1.5c-4.557 0-8.25 3.693-8.25 8.25s3.693 8.25 8.25 8.25 8.25-3.693 8.25-8.25-3.693-8.25-8.25-8.25zm0 1.5c3.728 0 6.75 3.022 6.75 6.75s-3.022 6.75-6.75 6.75-6.75-3.022-6.75-6.75 3.022-6.75 6.75-6.75zm3.75-1.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@talex_chain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="TikTok">
                <img src="/tiktok-icon.png" alt="TikTok" className="w-5 h-5" />
              </a>
              <a href="https://open.spotify.com/show/51Q8zhfB2ADlmyEaUzT3iR" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="Spotify">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.6 17.3c-.3.5-.9.7-1.4.4-3.8-2.3-8.6-2.8-14.3-1.5-.5.1-1.1-.2-1.2-.7-.1-.5.2-1.1.7-1.2 6.2-1.4 11.4-.8 15.7 1.7.5.3.7.9.4 1.4zm1.5-3.3c-.4.6-1.1.8-1.7.4-4.4-2.7-11-3.5-16.2-1.9-.6.2-1.3-.1-1.5-.7-.2-.6.1-1.3.7-1.5 5.8-1.8 13.1-.9 18.1 2.2.6.4.8 1.1.4 1.7zm.1-3.4c-5.3-3.1-14-3.4-19.1-1.9-.7.2-1.4-.2-1.6-.9-.2-.7.2-1.4.9-1.6 5.6-1.7 15.2-1.3 21.1 2.2.6.4 1 1.1.6 1.7-.4.6-1.1.9-1.7.6z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/talexchain" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#6FF000] transition-colors" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.425-.654 1.187-1.586 2.882-1.586 2.105 0 3.685 1.375 3.685 4.331v5.608zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.187 0 1.915.762 1.915 1.715 0 .953-.728 1.715-1.958 1.715zm1.6 11.597H3.738V9.579h3.199v10.873zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400" style={{color: '#000000'}}>
            © 2026 Powered by TaleX. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-black transition-colors" style={{color: '#000000'}}>Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-black transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
