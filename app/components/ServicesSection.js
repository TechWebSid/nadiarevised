'use client';

import { useState } from 'react';
import { ArrowRight, Compass, Sparkles, Sofa, Palette } from 'lucide-react';

const servicePillars = [
  {
    icon: Compass,
    title: 'Architectural Interior Design',
    desc: 'Spatial restructuring, lighting architecture, detailed CAD elevations, and custom bathroom & culinary layouts.',
  },
  {
    icon: Sparkles,
    title: 'Heritage Decoration & Restoration',
    desc: 'Respectful conservation of cornicing, panelling, and stone hearths for Grade II and character country homes.',
  },
  {
    icon: Sofa,
    title: 'Custom Furniture & Joinery',
    desc: 'Bespoke library shelving, dressing rooms, dining tables, and upholstery manufactured by specialist British ateliers.',
  },
  {
    icon: Palette,
    title: 'Curated Antiques & Art Advisory',
    desc: 'Sourcing singular heirloom pieces, mid-century pottery, antique rugs, and contemporary artworks with soul.',
  },
];

export default function ServicesSection({ onOpenServicesModal, onSelectProjectsView }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="bg-[#faf8f5] py-28 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#e6e0d3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Narrative & Service Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8a866a] font-semibold mb-4 block">
              Interior Design
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#181715] font-light leading-[1.2] mb-8">
              Spaces Tailored to the Rhythms of Everyday Living
            </h2>

            <div className="space-y-5 text-[#524f49] text-base md:text-[17px] font-light leading-relaxed mb-10">
              <p>
                Our studio specialises in the interior design and decoration of character properties, creating refined, beautiful, and timeless interiors that are both deeply personal and aligned with the rhythms of everyday life.
              </p>
              <p>
                We believe each project possesses its own distinct identity, often rooted in a treasured piece of art, a family heirloom, or a well-loved antique — items that carry meaning and become a natural starting point for the design narrative.
              </p>
            </div>

            {/* Interactive Service Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {servicePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xs bg-[#f3efe8] hover:bg-[#ede7dd] border border-[#e6e0d3] transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#8a866a]/15 text-[#8a866a] flex items-center justify-center mb-3 group-hover:bg-[#8a866a] group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif-luxury text-lg text-[#181715] font-normal mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#78756e] font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => onSelectProjectsView && onSelectProjectsView()}
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#8a866a] text-white hover:bg-[#726e55] rounded-full transition-all duration-300 shadow-md cursor-pointer"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-medium">
                  Explore our Interiors
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onOpenServicesModal && onOpenServicesModal()}
                className="text-xs uppercase tracking-[0.2em] text-[#181715] hover:text-[#8a866a] py-2 border-b border-[#181715]/40 hover:border-[#8a866a] transition-all cursor-pointer font-medium"
              >
                Our 4-Stage Process
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Photography (Matching heanlyharris.com layout) */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative group overflow-hidden rounded-xs bg-[#e6e0d3] aspect-[4/5] shadow-xl">
              <img
                src="https://heanlyharris-com.nimbus-cdn.uk/wp-content/uploads/2025/10/Grade-2-Listed-016.jpg?format=webp"
                alt="NR Interiors Edwardian House Design"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-50" />

              <div className="absolute bottom-6 left-6 right-6 text-white p-4 backdrop-blur-xs bg-black/25 rounded-xs border border-white/10">
                <p className="font-serif-luxury text-xl font-light">Grade II Listed Edwardian Residence</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/80 mt-1">Surrey Hills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
