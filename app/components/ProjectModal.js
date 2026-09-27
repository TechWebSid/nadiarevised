'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Check, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenEnquiry }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage];

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#faf8f5] text-[#181715] rounded-xs shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-5 md:px-8 border-b border-[#e6e0d3] flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8a866a] font-semibold">
              {project.category} · {project.location}
            </span>
            <h2 className="font-serif-luxury text-2xl md:text-3xl text-[#181715] font-light">
              {project.title}
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

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8">
          {/* Gallery Carousel */}
          <div className="relative aspect-[16/10] bg-[#181715] rounded-xs overflow-hidden shadow-inner group">
            <img
              src={images[activeImageIndex]}
              alt={`${project.title} photography`}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Carousel Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 right-4 bg-black/60 text-white text-[11px] px-3 py-1 rounded-full backdrop-blur-xs">
                  {activeImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Bar */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-14 rounded-xs overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx ? 'border-[#8a866a] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Project Narrative & Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4 border-t border-[#e6e0d3]">
            <div className="md:col-span-7 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-semibold block">
                Architectural Narrative
              </span>
              <p className="text-base text-[#4a4742] font-light leading-relaxed">
                {project.overview}
              </p>
              <p className="text-sm text-[#78756e] font-light leading-relaxed">
                Nadia supervised all bespoke craftsmanship on-site, aligning bespoke joinery with period architectural proportions to create rooms that feel organic, personal, and serene.
              </p>
            </div>

            <div className="md:col-span-5 bg-[#f3efe8] p-6 rounded-xs border border-[#e6e0d3] space-y-4 text-xs">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8a866a] font-semibold block mb-2">
                Project Specifications
              </span>

              {project.details &&
                project.details.map((d, i) => (
                  <div key={i} className="pb-2.5 border-b border-[#e6e0d3] last:border-0 last:pb-0">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#78756e]">{d.label}</p>
                    <p className="text-sm font-medium text-[#181715] mt-0.5">{d.value}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-6 border-t border-[#e6e0d3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#78756e] font-light">
              Interested in a bespoke interior scheme for your home?
            </span>
            <button
              onClick={() => {
                onClose();
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="px-6 py-3 bg-[#181715] hover:bg-[#8a866a] text-white rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Enquire About Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
