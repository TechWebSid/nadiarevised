'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onNavigate, onOpenEnquiry }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  const handleLink = (e, target) => {
    e.preventDefault();
    if (target === 'enquire') {
      if (onOpenEnquiry) onOpenEnquiry();
      else {
        const el = document.getElementById('enquire');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (onNavigate) {
      onNavigate(target);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#181715] text-[#faf8f5] pt-24 pb-12 px-6 md:px-12 lg:px-20 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto">
        {/* Top Tier: Giant Brand Wordmark & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          <div className="lg:col-span-6 space-y-6">
            <Logo variant="monogram" className="w-14 h-14 text-white" />
            <h2
              className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.22em] font-light text-white leading-none"
              style={{ letterSpacing: '0.22em' }}
            >
              nrinteriors
            </h2>
            <p className="text-sm font-light text-white/70 max-w-md leading-relaxed">
              London-based interior architecture and design studio crafting unique, timeless interiors focused on intuition, heritage, and modern function.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 lg:pl-10 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-medium block">
              Private Journal
            </span>
            <h3 className="font-serif-luxury text-2xl font-light text-white">
              Subscribe to Curated Notes on Architecture &amp; Craft
            </h3>
            <p className="text-xs text-white/60 font-light">
              Receive quarterly design observations, private open houses, and architectural sourcing insights from Nadia.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-[#8a866a] pt-2">
                <Check className="w-4 h-4" />
                <span>Thank you. You have been added to our private journal list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-xs text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#8a866a] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#8a866a] hover:bg-[#726e55] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Tier: Navigation Links */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-light tracking-wide text-white/75 border-b border-white/10">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-medium mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={(e) => handleLink(e, 'projects')} className="hover:text-white transition-colors cursor-pointer">
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'services')} className="hover:text-white transition-colors cursor-pointer">
                  Interior Design Services
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'about')} className="hover:text-white transition-colors cursor-pointer">
                  About Nadia
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'journal')} className="hover:text-white transition-colors cursor-pointer">
                  Journal &amp; Insights
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-medium mb-4">
              Commissions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={(e) => handleLink(e, 'enquire')} className="hover:text-white transition-colors cursor-pointer">
                  Initial Design Consultation
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'projects')} className="hover:text-white transition-colors cursor-pointer">
                  Heritage Renovations
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'projects')} className="hover:text-white transition-colors cursor-pointer">
                  Townhouses &amp; Villas
                </button>
              </li>
              <li>
                <button onClick={(e) => handleLink(e, 'projects')} className="hover:text-white transition-colors cursor-pointer">
                  Country Estates
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-medium mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:enquiries@nrinteriors.co.uk" className="hover:text-white transition-colors">
                  enquiries@nrinteriors.co.uk
                </a>
              </li>
              <li>
                <a href="tel:+447973123000" className="hover:text-white transition-colors">
                  +44 (0)7973 123 000
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram: @nrinteriors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-medium mb-4">
              Practice
            </h4>
            <p className="text-white/60 leading-relaxed text-[11px]">
              NR Interiors is a registered British interior architecture studio. Member of the British Institute of Interior Design (BIID).
            </p>
          </div>
        </div>

        {/* Locations Covered Bar (Exact as on Heanly Harris) */}
        <div className="py-8 text-[11px] text-white/50 border-b border-white/10 leading-relaxed font-light">
          <p>
            <strong className="text-white/80 font-medium">Areas covered include:</strong> Harpenden, Hertfordshire, Berkshire, Surrey, London, Wimbledon, Richmond, Sunningdale, Ascot, Berkhamsted, Kensington &amp; Chelsea, and international commissions.
          </p>
        </div>

        {/* Bottom Tier: Legal & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 font-light gap-4">
          <p>© {new Date().getFullYear()} NR Interiors. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Terms &amp; Conditions</span>
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-[#8a866a]">Bespoke Demo for Nadia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
