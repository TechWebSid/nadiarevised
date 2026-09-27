'use client';

import { X, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

const articles = [
  {
    title: 'The Art of Restoring Character Properties: A Dialogue Between Past & Present',
    date: 'February 2026',
    readTime: '4 min read',
    image: 'https://heanlyharris-com.nimbus-cdn.uk/wp-content/uploads/2026/04/Heanly-Harris23680.jpg?format=webp',
    snippet:
      'How to honor original cornicing, historic timber panelling, and uneven lime plaster while weaving in modern lighting, concealed acoustic architecture, and effortless luxury.',
  },
  {
    title: 'Curating with Soul: Sourcing Antiques & Heirloom Pieces for Contemporary Living',
    date: 'January 2026',
    readTime: '5 min read',
    image: 'https://heanlyharris-com.nimbus-cdn.uk/wp-content/uploads/2025/10/Pembrook-Villas-008.jpg?format=webp',
    snippet:
      'Why every room needs tension: pairing mid-century ceramic lamps and Georgian consoles with bespoke Belgian linen sofas and tactile raw silks.',
  },
  {
    title: 'Mineral Pigments & Natural Daylight: The Palette of NR Interiors',
    date: 'November 2025',
    readTime: '3 min read',
    image: 'https://heanlyharris-com.nimbus-cdn.uk/wp-content/uploads/2025/10/Belvedere-Drive-014.jpeg?format=webp',
    snippet:
      'Understanding the soft northern light of English homes and how chalky lime washes, warm taupes, and olive undertones create sanctuary.',
  },
];

export default function JournalModal({ onClose, onOpenEnquiry }) {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#faf8f5] text-[#181715] rounded-xs shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 md:px-8 border-b border-[#e6e0d3] flex items-center justify-between bg-white shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-semibold">
              NR Interiors Journal
            </span>
            <h2 className="font-serif-luxury text-2xl md:text-3xl text-[#181715] font-light">
              Design Notes &amp; Observations
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
            A quiet collection of reflections from Nadia on craftsmanship, architectural discoveries, sourcing travels, and the art of modern English living.
          </p>

          <div className="space-y-8">
            {articles.map((art, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-xs bg-[#f3efe8] border border-[#e6e0d3] hover:border-[#8a866a] transition-all group"
              >
                <div className="md:col-span-4 aspect-[4/3] rounded-xs overflow-hidden bg-[#e6e0d3]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="md:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[11px] text-[#78756e] font-light mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#8a866a]" />
                        <span>{art.date}</span>
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#8a866a]" />
                        <span>{art.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-xl md:text-2xl text-[#181715] font-normal leading-snug group-hover:text-[#8a866a] transition-colors mb-3">
                      {art.title}
                    </h3>

                    <p className="text-sm text-[#524f49] font-light leading-relaxed">
                      {art.snippet}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#181715] group-hover:text-[#8a866a] font-medium transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#e6e0d3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#78756e] font-light">
              Looking to consult on your residence?
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
