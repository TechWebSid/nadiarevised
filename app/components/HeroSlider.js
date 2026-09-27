'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function HeroSlider({ slides, onSelectProject }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPaused, total]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[680px] bg-[#181715] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Backgrounds */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Slow Subtle Scale */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url('${slide.heroImage}')`,
              }}
            />

            {/* Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
            <div className="absolute inset-0 bg-black/15" />

            {/* Slide Project Callout (Bottom-Left as on heanlyharris.com) */}
            <div className="absolute bottom-16 md:bottom-20 left-6 md:left-14 lg:left-20 z-20 max-w-xl">
              <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#faf8f5]/85 font-medium mb-2.5">
                {slide.location} · {slide.category}
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#faf8f5] font-light leading-tight drop-shadow-xs mb-5">
                {slide.title}
              </h2>
              <button
                onClick={() => onSelectProject && onSelectProject(slide)}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#faf8f5]/15 hover:bg-[#faf8f5] text-[#faf8f5] hover:text-[#181715] backdrop-blur-md border border-[#faf8f5]/30 hover:border-white transition-all duration-300 shadow-lg cursor-pointer"
              >
                <span className="font-sans-clean text-xs uppercase tracking-[0.2em] font-medium">
                  Explore Project
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-16 md:bottom-20 right-6 md:right-14 lg:right-20 z-30 flex items-center gap-6">
        {/* Numbered Indicators */}
        <div className="text-white/80 font-serif-luxury text-sm tracking-[0.2em] hidden sm:block">
          <span className="text-white font-normal">0{current + 1}</span>
          <span className="opacity-40 mx-2">/</span>
          <span className="opacity-50">0{total}</span>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2 ml-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/20 bg-black/20 hover:bg-white/20 backdrop-blur-xs flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/20 bg-black/20 hover:bg-white/20 backdrop-blur-xs flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
