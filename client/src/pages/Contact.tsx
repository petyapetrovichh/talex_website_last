import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Contact() {
  const [clickedLinks, setClickedLinks] = useState<Set<string>>(new Set());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = (href: string) => {
    setClickedLinks(prev => new Set(prev).add(href));
  };

  const getLinkColor = (href: string) => {
    return clickedLinks.has(href) ? '#6FF000' : '#000000';
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    (e.target as HTMLAnchorElement).style.color = '#6FF000';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    (e.target as HTMLAnchorElement).style.color = getLinkColor(href);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900" style={{height: '850px'}}>
      <Header />
      
      <main className="flex-grow" style={{paddingTop: '82px'}}>
        {/* DESKTOP VIEW */}
        <div className="hidden md:block container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Heading */}
            <h1 
              className="mb-8"
              style={{
                fontSize: '64px',
                fontWeight: '400',
                fontFamily: '"Abril Fatface", cursive',
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
            <div className="space-y-6" style={{width: 'fit-content', margin: '0 auto', marginLeft: '-89px'}}>
              {/* Creator Section */}
              <div>
                <p style={{fontSize: '18px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', whiteSpace: 'nowrap', textAlign: 'left'}}>
                  <span style={{fontWeight: '700'}}>If you're a creator interested in starting your content work on TaleX:</span> visit{' '}
                  <a 
                    href="https://www.talex.world/publish" 
                    style={{textDecoration: 'underline', color: getLinkColor('https://www.talex.world/publish'), cursor: 'pointer', transition: 'color 0.3s ease'}}
                    onClick={() => handleLinkClick('https://www.talex.world/publish')}
                    onMouseEnter={(e) => handleMouseEnter(e, 'https://www.talex.world/publish')}
                    onMouseLeave={(e) => handleMouseLeave(e, 'https://www.talex.world/publish')}
                  >
                    www.talex.world/publish
                  </a>
                </p>
              </div>

              {/* Content Issues Section */}
              <div>
                <p style={{fontSize: '18px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', whiteSpace: 'nowrap', textAlign: 'left'}}>
                  <span style={{fontWeight: '700'}}>For reporting content-related issues:</span> use{' '}
                  <span style={{fontWeight: '700'}}>Report</span> feature at the end of each content work
                </p>
              </div>

              {/* User Agreement Violation Section */}
              <div>
                <p style={{fontSize: '18px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', whiteSpace: 'nowrap', textAlign: 'left'}}>
                  <span style={{fontWeight: '700'}}>For reporting a violation of TaleX's User Agreement:</span>{' '}
                  <a 
                    href="mailto:support@talex.world" 
                    style={{textDecoration: 'underline', color: getLinkColor('mailto:support@talex.world'), cursor: 'pointer', transition: 'color 0.3s ease'}}
                    onClick={() => handleLinkClick('mailto:support@talex.world')}
                    onMouseEnter={(e) => handleMouseEnter(e, 'mailto:support@talex.world')}
                    onMouseLeave={(e) => handleMouseLeave(e, 'mailto:support@talex.world')}
                  >
                    support@talex.world
                  </a>
                </p>
              </div>

              {/* Support Section */}
              <div>
                <p style={{fontSize: '18px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', whiteSpace: 'nowrap', textAlign: 'left'}}>
                  We also handle users' support questions on behalf of creators, so feel free to reach out to us:{' '}
                  <a 
                    href="https://t.me/talex_chain_community" 
                    style={{textDecoration: 'underline', color: getLinkColor('https://t.me/talex_chain_community'), cursor: 'pointer', transition: 'color 0.3s ease'}}
                    onClick={() => handleLinkClick('https://t.me/talex_chain_community')}
                    onMouseEnter={(e) => handleMouseEnter(e, 'https://t.me/talex_chain_community')}
                    onMouseLeave={(e) => handleMouseLeave(e, 'https://t.me/talex_chain_community')}
                  >
                    t.me/talex_chain_community
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden px-6 py-4" style={{paddingTop: '40px', paddingBottom: '20px'}}>
          <div className="text-center" style={{marginTop: '50px'}}>
            {/* Main Heading - Single Line */}
            <h1 
              className="mb-6"
              style={{
                fontSize: '28px',
                fontWeight: '400',
                fontFamily: '"Abril Fatface", cursive',
                color: '#000000',
                lineHeight: '1.2',
                whiteSpace: 'nowrap'
              }}
            >
              Contact TaleX
            </h1>

            {/* Subtitle - Single Line */}
            <p 
              className="mb-12"
              style={{
                fontSize: '14px',
                fontWeight: '400',
                color: '#000000',
                lineHeight: '1.4',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                whiteSpace: 'nowrap'
              }}
            >
              Anything? Here's how you can get in touch with us.
            </p>

            {/* Contact Information - Wrapped Text */}
            <div className="space-y-6 text-left">
              {/* Creator Section */}
              <div>
                <p style={{fontSize: '14px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', textAlign: 'left', wordWrap: 'break-word', whiteSpace: 'normal'}}>
                  <span style={{fontWeight: '700'}}>If you're a creator interested in starting your content work on TaleX:</span> visit{' '}
                  <a 
                    href="https://www.talex.world/publish" 
                    style={{textDecoration: 'underline', color: getLinkColor('https://www.talex.world/publish'), cursor: 'pointer', transition: 'color 0.3s ease', wordBreak: 'break-all'}}
                    onClick={() => handleLinkClick('https://www.talex.world/publish')}
                    onMouseEnter={(e) => handleMouseEnter(e, 'https://www.talex.world/publish')}
                    onMouseLeave={(e) => handleMouseLeave(e, 'https://www.talex.world/publish')}
                  >
                    www.talex.world/publish
                  </a>
                </p>
              </div>

              {/* Content Issues Section */}
              <div>
                <p style={{fontSize: '14px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', textAlign: 'left', wordWrap: 'break-word', whiteSpace: 'normal'}}>
                  <span style={{fontWeight: '700'}}>For reporting content-related issues:</span> use{' '}
                  <span style={{fontWeight: '700'}}>Report</span> feature at the end of each content work
                </p>
              </div>

              {/* User Agreement Violation Section */}
              <div>
                <p style={{fontSize: '14px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', textAlign: 'left', wordWrap: 'break-word', whiteSpace: 'normal'}}>
                  <span style={{fontWeight: '700'}}>For reporting a violation of TaleX's User Agreement:</span>{' '}
                  <a 
                    href="mailto:support@talex.world" 
                    style={{textDecoration: 'underline', color: getLinkColor('mailto:support@talex.world'), cursor: 'pointer', transition: 'color 0.3s ease', wordBreak: 'break-all'}}
                    onClick={() => handleLinkClick('mailto:support@talex.world')}
                    onMouseEnter={(e) => handleMouseEnter(e, 'mailto:support@talex.world')}
                    onMouseLeave={(e) => handleMouseLeave(e, 'mailto:support@talex.world')}
                  >
                    support@talex.world
                  </a>
                </p>
              </div>

              {/* Support Section */}
              <div>
                <p style={{fontSize: '14px', fontWeight: '400', color: '#000000', lineHeight: '1.6', fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', textAlign: 'left', wordWrap: 'break-word', whiteSpace: 'normal'}}>
                  We also handle users' support questions on behalf of creators, so feel free to reach out to us:
                  <br />
                  <a 
                    href="https://t.me/talex_chain_community" 
                    style={{textDecoration: 'underline', color: getLinkColor('https://t.me/talex_chain_community'), cursor: 'pointer', transition: 'color 0.3s ease', wordBreak: 'break-all', display: 'inline-block', marginTop: '0px'}}
                    onClick={() => handleLinkClick('https://t.me/talex_chain_community')}
                    onMouseEnter={(e) => handleMouseEnter(e, 'https://t.me/talex_chain_community')}
                    onMouseLeave={(e) => handleMouseLeave(e, 'https://t.me/talex_chain_community')}
                  >
                    t.me/talex_chain_community
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer mobileMarginTop="-600px" />
    </div>
  );
}
