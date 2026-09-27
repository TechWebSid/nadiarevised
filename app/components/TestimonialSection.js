'use client';

import { Quote, Star } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="bg-[#181715] text-[#faf8f5] py-28 md:py-36 px-6 md:px-12 lg:px-20 relative overflow-hidden select-none">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8a866a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Quote Icon */}
        <div className="w-14 h-14 rounded-full bg-[#8a866a]/20 border border-[#8a866a]/40 flex items-center justify-center mx-auto mb-10 text-[#8a866a]">
          <Quote className="w-6 h-6 rotate-180" />
        </div>

        {/* Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-8 text-[#8a866a]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Main Authentic Testimonial Quote */}
        <blockquote className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light leading-[1.35] text-[#faf8f5] italic tracking-tight mb-10">
          “Nadia created the most beautiful home for us. Her communication skills are exceptional and she clearly takes great pride in delivering amazing rooms. She has a strong attention to detail and her combination of experience, contacts and creativity means she is good at problem solving, working with builders etc. and importantly she sources beautiful pieces of furniture and antiques. A very personalised approach from lovely people.”
        </blockquote>

        {/* Client Attribution */}
        <div className="flex flex-col items-center">
          <span className="font-serif-luxury text-xl tracking-[0.1em] text-white font-normal">
            Private Residence
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#8a866a] mt-1 font-light">
            Wimbledon Common, London
          </span>
        </div>

        {/* Industry Accreditation Bar (BIID, House & Garden, etc.) */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/50 block mb-10">
            Professional Accreditations &amp; Features
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center opacity-75 hover:opacity-100 transition-opacity">
            <div className="flex flex-col items-center border border-white/15 p-4 rounded-xs">
              <span className="font-serif-luxury text-2xl tracking-[0.15em] text-white">BIID</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 mt-1">
                Registered Practice
              </span>
            </div>

            <div className="flex flex-col items-center border border-white/15 p-4 rounded-xs">
              <span className="font-serif-luxury text-xl tracking-[0.1em] text-white">HOUSE &amp; GARDEN</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 mt-1">
                The List Selected
              </span>
            </div>

            <div className="flex flex-col items-center border border-white/15 p-4 rounded-xs">
              <span className="font-serif-luxury text-xl tracking-[0.1em] text-white">ARCHITECTURAL DIGEST</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 mt-1">
                Feature Studio
              </span>
            </div>

            <div className="flex flex-col items-center border border-white/15 p-4 rounded-xs">
              <span className="font-serif-luxury text-xl tracking-[0.1em] text-white">ELLE DECORATION</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/60 mt-1">
                British Design Award
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
