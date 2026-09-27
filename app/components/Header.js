'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { InstagramIcon } from './Icons';
import Logo from './Logo';

export default function Header({ activeSection, onNavigate, onOpenEnquiry }) {
  const [isSolid, setIsSolid] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prev = 0;
    const SHOW_AFTER = 600;
    const SOLID_AT = 100;
    const DELTA = 6;

    const onScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;

      if (currentScroll <= 0) {
        setIsHidden(false);
        setIsSolid(false);
        prev = 0;
        return;
      }

      setIsSolid(currentScroll > SOLID_AT);

      if (currentScroll <= SHOW_AFTER) {
        setIsHidden(false);
        prev = currentScroll;
        return;
      }

      const diff = currentScroll - prev;
      if (Math.abs(diff) >= DELTA) {
        setIsHidden(diff > 0);
        prev = currentScroll;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        } ${
          isSolid
            ? 'bg-[#faf8f5]/95 backdrop-blur-md text-[#181715] shadow-xs border-b border-[#e5dfd3]/70 py-4'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1">
            <button
              onClick={(e) => handleLinkClick(e, 'projects')}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 hover:opacity-100 ${
                activeSection === 'projects'
                  ? 'opacity-100 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-current'
                  : 'opacity-85 hover:text-[#8a866a]'
              }`}
            >
              Projects
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'services')}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 hover:opacity-100 ${
                activeSection === 'services'
                  ? 'opacity-100 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-current'
                  : 'opacity-85 hover:text-[#8a866a]'
              }`}
            >
              Services
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'about')}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 hover:opacity-100 ${
                activeSection === 'about'
                  ? 'opacity-100 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-current'
                  : 'opacity-85 hover:text-[#8a866a]'
              }`}
            >
              About
            </button>
          </nav>

          {/* Center Brand Logo */}
          <div className="flex-shrink-0 text-center">
            <button
              onClick={(e) => handleLinkClick(e, 'hero')}
              className="group focus:outline-none cursor-pointer"
              aria-label="nrinteriors Home"
            >
              <Logo className={`transition-all duration-300 ${isSolid ? 'text-[#181715]' : 'text-white'}`} />
            </button>
          </div>

          {/* Right Navigation (Desktop) */}
          <nav className="hidden md:flex items-center justify-end gap-8 lg:gap-12 flex-1">
            <button
              onClick={(e) => handleLinkClick(e, 'journal')}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 hover:opacity-100 ${
                activeSection === 'journal'
                  ? 'opacity-100 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-current'
                  : 'opacity-85 hover:text-[#8a866a]'
              }`}
            >
              Journal
            </button>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] font-medium opacity-85 hover:opacity-100 hover:text-[#8a866a] transition-all duration-300 flex items-center gap-1"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <button
              onClick={(e) => {
                if (onOpenEnquiry) onOpenEnquiry();
                else handleLinkClick(e, 'enquire');
              }}
              className={`text-xs uppercase tracking-[0.22em] font-medium px-5 py-2 rounded-full border transition-all duration-300 ${
                isSolid
                  ? 'border-[#181715]/80 text-[#181715] hover:bg-[#181715] hover:text-[#faf8f5]'
                  : 'border-white/80 text-white hover:bg-white hover:text-[#181715]'
              }`}
            >
              Enquire
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 transition-colors ${isSolid ? 'text-[#181715]' : 'text-white'}`}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Luxury Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[100] bg-[#181715] text-[#faf8f5] transition-all duration-700 ease-in-out md:hidden flex flex-col ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-x-0'
            : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        {/* Mobile Header Bar */}
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <Logo className="text-white" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white/80 hover:text-white"
            aria-label="Close Navigation Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex-1 px-8 py-10 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-medium">
              Navigation
            </span>
            <button
              onClick={(e) => handleLinkClick(e, 'hero')}
              className="text-left font-serif-luxury text-3xl font-light hover:text-[#8a866a] transition-colors"
            >
              Home
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'projects')}
              className="text-left font-serif-luxury text-3xl font-light hover:text-[#8a866a] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'services')}
              className="text-left font-serif-luxury text-3xl font-light hover:text-[#8a866a] transition-colors"
            >
              Services
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'about')}
              className="text-left font-serif-luxury text-3xl font-light hover:text-[#8a866a] transition-colors"
            >
              About Nadia
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'journal')}
              className="text-left font-serif-luxury text-3xl font-light hover:text-[#8a866a] transition-colors"
            >
              Journal
            </button>
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
                else handleLinkClick(e, 'enquire');
              }}
              className="text-left font-serif-luxury text-3xl font-light text-[#8a866a]"
            >
              Enquire
            </button>
          </div>

          {/* Contact Details at bottom of Mobile Drawer */}
          <div className="pt-8 border-t border-white/10 space-y-4 text-xs font-light text-white/70">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8a866a] mb-1">Direct Studio</p>
              <p className="text-sm font-normal text-white">enquiries@nrinteriors.co.uk</p>
              <p className="text-sm font-normal text-white">+44 7973 123 000</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/80 hover:text-white"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#8a866a]" />
                <span>@nrinteriors</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
