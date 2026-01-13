import { Link } from "wouter";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 border-t border-gray-100 pb-20 lg:pb-[270px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer mb-6">
                <img src="/logo-new.png" alt="TaleX" className="h-8 w-auto" style={{width: '136px', height: '24px'}} />
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed" style={{width: '285px'}}>
              Where great content pays off both creators and supporters. Join the revolution of content ownership.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="/features" className="hover:text-black transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-black transition-colors">Pricing</Link></li>
              <li><Link href="/creators" className="hover:text-black transition-colors">For Creators</Link></li>
              <li><Link href="/supporters" className="hover:text-black transition-colors">For Supporters</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-black transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
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
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © 2024 TaleX Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-black transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
