import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 w-full" style={{marginTop: '82px'}}>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Heading */}
            <h1 
              className="mb-8"
              style={{
                fontSize: '64px',
                fontWeight: '700',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                color: '#000000',
                lineHeight: '1.2'
              }}
            >
              Contact TaleX
            </h1>

            {/* Subtitle */}
            <p 
              className="mb-16"
              style={{
                fontSize: '18px',
                fontWeight: '400',
                color: '#000000',
                lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
              }}
            >
              Anything? Here's how you can get in touch with us.
            </p>

            {/* Contact Information */}
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              {/* Creator Section */}
              <div>
                <p style={{fontSize: '18px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
                  <span style={{fontWeight: '700'}}>If you're a creator interested in starting your content work on TaleX:</span> visit{' '}
                  <a 
                    href="https://talex.world/profile/become-a-creator" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{textDecoration: 'underline', color: '#000000'}}
                  >
                    talex.world/profile/become-a-creator
                  </a>
                </p>
              </div>

              {/* Content Issues Section */}
              <div>
                <p style={{fontSize: '18px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
                  <span style={{fontWeight: '700'}}>For reporting content-related issues:</span> use{' '}
                  <span style={{fontWeight: '700'}}>Report</span> feature at the end of each content work
                </p>
              </div>

              {/* User Agreement Violation Section */}
              <div>
                <p style={{fontSize: '18px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
                  <span style={{fontWeight: '700'}}>For reporting a violation of TaleX's User Agreement:</span>{' '}
                  <a 
                    href="mailto:support@talex.world" 
                    style={{textDecoration: 'underline', color: '#000000'}}
                  >
                    support@talex.world
                  </a>
                </p>
              </div>

              {/* Support Section */}
              <div>
                <p style={{fontSize: '18px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
                  We also handle users' support questions on behalf of creators, so feel free to reach out to us:
                  <br />
                  <a 
                    href="https://t.me/talex_chain_community" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{textDecoration: 'underline', color: '#000000'}}
                  >
                    t.me/talex_chain_community
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
