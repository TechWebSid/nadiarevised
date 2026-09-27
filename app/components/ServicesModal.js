'use client';

import { X, ArrowRight, Compass, Palette, Sparkles, Home, CheckCircle2 } from 'lucide-react';

const stages = [
  {
    num: '01',
    title: 'Intuitive Consultation & Architectural Discovery',
    desc: 'Nadia conducts an in-depth on-site study of your property. We explore how natural daylight moves across rooms, examine historic architectural details, and discuss your lifestyle, routines, and aesthetic aspirations.',
    deliverables: ['Spatial analysis', 'Heritage review', 'Creative brief & mood concept', 'Budget alignment'],
  },
  {
    num: '02',
    title: 'Spatial Architecture & Material Chemistry',
    desc: 'Translating concepts into precise spatial plans, lighting layouts, and custom joinery elevations. We curate tactile sample boards of natural stone, unlacquered metals, lime washes, and heritage textiles.',
    deliverables: ['Detailed CAD drawings', 'Lighting & electrical schematics', 'Physical material boards', 'Joinery specifications'],
  },
  {
    num: '03',
    title: 'Artisan Commissioning & Bespoke Procurement',
    desc: 'Working closely with our network of specialist British cabinetmakers, stonemasons, and antique dealers across Europe to manufacture one-of-a-kind furniture, rugs, and bespoke fittings.',
    deliverables: ['Custom furniture commissions', 'Antique sourcing & provenance', 'Trade procurement oversight', 'Budget tracking'],
  },
  {
    num: '04',
    title: 'On-Site Execution & Turnkey Curation',
    desc: 'Nadia oversees all installations with painstaking precision. From coordinating with builders and decorators to final hanging of art, styling, and scenting each room for your homecoming.',
    deliverables: ['Contractor liaison', 'Joinery fitting supervision', 'Art placement & accessorising', 'Turnkey handover'],
  },
];

export default function ServicesModal({ onClose, onOpenEnquiry }) {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#faf8f5] text-[#181715] rounded-xs shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 md:px-8 border-b border-[#e6e0d3] flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-semibold">
              NR Interiors Methodology
            </span>
            <h2 className="font-serif-luxury text-2xl md:text-3xl text-[#181715] font-light">
              Our 4-Stage Design Process
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
          <p className="text-base text-[#524f49] font-light leading-relaxed max-w-2xl">
            At NR Interiors, Nadia takes a high-touch, bespoke approach to every commission. We ensure clear communication, complete transparency, and meticulous execution at every milestone.
          </p>

          <div className="space-y-6">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xs bg-[#f3efe8] border border-[#e6e0d3] hover:border-[#8a866a] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="font-serif-luxury text-3xl text-[#8a866a] font-light shrink-0">
                    {stage.num}
                  </span>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-serif-luxury text-xl md:text-2xl text-[#181715] font-normal">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-[#524f49] font-light leading-relaxed">
                      {stage.desc}
                    </p>

                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#78756e] font-semibold block mb-2">
                        Key Deliverables
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {stage.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-[#181715]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8a866a] shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="pt-4 border-t border-[#e6e0d3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#78756e] font-light">
              Ready to explore your property's potential?
            </span>
            <button
              onClick={() => {
                onClose();
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="px-6 py-3 bg-[#181715] hover:bg-[#8a866a] text-white rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Schedule Initial Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
