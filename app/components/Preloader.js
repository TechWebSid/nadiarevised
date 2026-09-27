'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('entering'); // entering -> visible -> exiting -> gone

  useEffect(() => {
    // Phase 1: Reveal logo
    const timer1 = setTimeout(() => {
      setPhase('visible');
    }, 150);

    // Phase 2: Start curtain reveal
    const timer2 = setTimeout(() => {
      setPhase('exiting');
    }, 1200);

    // Phase 3: Remove from DOM
    const timer3 = setTimeout(() => {
      setPhase('gone');
      if (onComplete) onComplete();
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (phase === 'gone') return null;

  return (
    <div
      id="mp-overlay"
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center transition-all duration-700 ease-in-out pointer-events-none select-none ${
        phase === 'exiting' ? 'opacity-0 -translate-y-6 scale-[1.02]' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#8a866a' }}
      aria-hidden={phase === 'gone'}
    >
      <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center text-white">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            phase === 'entering'
              ? 'opacity-0 translate-y-6 scale-95'
              : 'opacity-100 translate-y-0 scale-100'
          }`}
        >
          <Logo variant="monogram" className="w-20 h-20 text-white mx-auto mb-4" />
          <h1
            className="font-serif-luxury text-2xl md:text-3xl tracking-[0.3em] uppercase font-light text-[#faf8f5]"
            style={{ letterSpacing: '0.3em' }}
          >
            nrinteriors
          </h1>
          <p
            className="font-sans-clean text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/75 mt-2 font-extralight"
            style={{ letterSpacing: '0.4em' }}
          >
            Nadia · Interior Architecture &amp; Design
          </p>
        </div>

        {/* Subtle minimalist loader line */}
        <div className="w-24 h-[1px] bg-white/20 overflow-hidden mt-2">
          <div
            className={`h-full bg-white transition-all duration-1000 ease-in-out ${
              phase === 'entering' ? 'w-0' : 'w-full'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
