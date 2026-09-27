'use client';

import { X, ArrowRight, Award, Compass, Heart, Sparkles } from 'lucide-react';

export default function AboutModal({ onClose, onOpenEnquiry }) {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#faf8f5] text-[#181715] rounded-xs shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 md:px-8 border-b border-[#e6e0d3] flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-semibold">
              Studio &amp; Founder
            </span>
            <h2 className="font-serif-luxury text-2xl md:text-3xl text-[#181715] font-light">
              About Nadia &amp; NR Interiors
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[#e6e0d3] hover:border-[#181715] flex items-center justify-center text-[#181715] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 aspect-[4/5] rounded-xs overflow-hidden bg-[#e6e0d3]">
              <img
                src="https://heanlyharris-com.nimbus-cdn.uk/wp-content/uploads/2025/10/Belvedere-Drive-014.jpeg?format=webp"
                alt="Nadia, Founder & Principal Interior Designer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-semibold block">
                The Founder's Story
              </span>
              <h3 className="font-serif-luxury text-2xl md:text-3xl text-[#181715] font-light leading-snug">
                “A home should feel like an intuitive extension of who you are — layered with history, quiet comfort, and soulful artistry.”
              </h3>
              <p className="text-sm text-[#524f49] font-light leading-relaxed">
                Founded by Nadia, NR Interiors was born from a desire to create characterful British residences that move beyond fleeting trends. With years of experience managing complex architectural restorations and luxury private commissions, Nadia combines an artistic eye for proportions with rigorous project management.
              </p>
            </div>
          </div>

          {/* Ethos pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#e6e0d3]">
            <div className="p-5 bg-[#f3efe8] rounded-xs border border-[#e6e0d3]">
              <div className="w-8 h-8 rounded-full bg-[#8a866a]/15 text-[#8a866a] flex items-center justify-center mb-3">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="font-serif-luxury text-lg text-[#181715] font-normal mb-1">
                Architectural Respect
              </h4>
              <p className="text-xs text-[#78756e] font-light leading-relaxed">
                We study the historic DNA of each building, enhancing original mouldings, timber beams, and proportions with modern flow.
              </p>
            </div>

            <div className="p-5 bg-[#f3efe8] rounded-xs border border-[#e6e0d3]">
              <div className="w-8 h-8 rounded-full bg-[#8a866a]/15 text-[#8a866a] flex items-center justify-center mb-3">
                <Heart className="w-4 h-4" />
              </div>
              <h4 className="font-serif-luxury text-lg text-[#181715] font-normal mb-1">
                Heirloom Philosophy
              </h4>
              <p className="text-xs text-[#78756e] font-light leading-relaxed">
                We believe in sourcing pieces that age gracefully over decades, prioritising natural honest materials and master craftsmanship.
              </p>
            </div>

            <div className="p-5 bg-[#f3efe8] rounded-xs border border-[#e6e0d3]">
              <div className="w-8 h-8 rounded-full bg-[#8a866a]/15 text-[#8a866a] flex items-center justify-center mb-3">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="font-serif-luxury text-lg text-[#181715] font-normal mb-1">
                Meticulous Delivery
              </h4>
              <p className="text-xs text-[#78756e] font-light leading-relaxed">
                From structural drawings to white-glove turnkey installation, our studio oversees every detail with warmth and professionalism.
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#e6e0d3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#78756e] font-light">
              We look forward to discussing your upcoming project.
            </span>
            <button
              onClick={() => {
                onClose();
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="px-6 py-3 bg-[#181715] hover:bg-[#8a866a] text-white rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Get in Touch with Nadia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
