'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ onOpenAboutModal, onOpenEnquiry }) {
  return (
    <section id="about" className="bg-[#f3efe8] py-28 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#e6e0d3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Architectural Portrait Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden rounded-xs bg-[#e6e0d3] aspect-[4/5] shadow-xl">
              <img
                src="https://heanlyharris-com.nimbus-cdn.uk/wp-content/uploads/2025/10/Belvedere-Drive-014.jpeg?format=webp"
                alt="Nadia - Principal Interior Designer at NR Interiors"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Luxury Detail Badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#8a866a] text-white p-6 md:p-8 rounded-xs shadow-2xl max-w-[240px] hidden sm:block">
              <span className="font-serif-luxury text-3xl font-light block mb-1">BIID</span>
              <p className="text-[10px] uppercase tracking-[0.2em] font-light opacity-90 leading-relaxed">
                Registered British Interior Design Practice
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8a866a] font-semibold mb-4 block">
              About Us
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#181715] font-light leading-[1.2] mb-8">
              Refined, Timeless Interiors Shaped by Story &amp; Architecture
            </h2>

            <div className="space-y-5 text-[#524f49] text-base md:text-[17px] font-light leading-relaxed">
              <p>
                <strong className="font-medium text-[#181715]">NR Interiors</strong> is a creative studio, established by <strong className="font-medium text-[#181715]">Nadia</strong>. Offering extensive experience and a deep knowledge of the creative aspects of interiors, Nadia provides meticulous oversight across every phase of design, execution, and installation.
              </p>
              <p>
                Her process is deeply collaborative, working closely with each client to understand the unique architectural language of your property, the nuances of your personal history, and your daily lifestyle.
              </p>
              <p>
                From private family estates in Surrey and Berkshire to historic townhouses in Wimbledon, Richmond, and central London, every space is composed with an instinctive balance of natural light, heritage craft, and understated luxury.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-4 my-8 pt-6 border-t border-[#e6e0d3]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8a866a] mt-1 shrink-0" />
                <span className="text-xs uppercase tracking-[0.15em] text-[#181715] font-medium">
                  Bespoke Architectural Schemes
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8a866a] mt-1 shrink-0" />
                <span className="text-xs uppercase tracking-[0.15em] text-[#181715] font-medium">
                  Heritage &amp; Conservation Expertise
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8a866a] mt-1 shrink-0" />
                <span className="text-xs uppercase tracking-[0.15em] text-[#181715] font-medium">
                  Artisanal Sourcing &amp; Joinery
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8a866a] mt-1 shrink-0" />
                <span className="text-xs uppercase tracking-[0.15em] text-[#181715] font-medium">
                  Meticulous Turnkey Delivery
                </span>
              </div>
            </div>

            {/* Action CTA Links */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={() => onOpenAboutModal && onOpenAboutModal()}
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#181715] text-[#faf8f5] hover:bg-[#8a866a] rounded-full transition-all duration-300 shadow-md cursor-pointer"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-medium">
                  Find out More
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="text-xs uppercase tracking-[0.2em] text-[#181715] hover:text-[#8a866a] py-2 border-b border-[#181715]/40 hover:border-[#8a866a] transition-all cursor-pointer font-medium"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
