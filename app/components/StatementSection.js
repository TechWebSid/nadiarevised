'use client';

export default function StatementSection() {
  return (
    <section className="bg-[#faf8f5] py-24 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#e6e0d3]/60 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Central Iconic Pullquote */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <span className="block text-[11px] uppercase tracking-[0.35em] text-[#8a866a] font-medium mb-6">
            Design Philosophy
          </span>
          <blockquote className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light leading-[1.25] text-[#181715] italic tracking-tight">
            “Elegant interiors that feel truly personal, crafted with intuition, artistry, and ease”
          </blockquote>
          <div className="w-16 h-[1.5px] bg-[#8a866a] mx-auto mt-8 opacity-70" />
        </div>

        {/* Asymmetrical Framed Visuals (Matching heanlyharris.com layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Visual Frame */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-xs bg-[#e6e0d3]">
            <div className="aspect-[4/3] md:aspect-[16/11] overflow-hidden">
              <img
                src="https://heanlyharris-com.nimbus-cdn.uk/wp-content/uploads/2026/04/Heanly-Harris23680.jpg?format=webp"
                alt="NR Interiors bespoke drawing room"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-[#faf8f5] flex justify-between items-center text-xs text-[#78756e]">
              <span className="font-serif-luxury italic text-sm text-[#181715]">
                Drawing Room, Richmond Residence
              </span>
              <span className="tracking-[0.15em] text-[10px] uppercase">Craftsmanship &amp; Heritage</span>
            </div>
          </div>

          {/* Right Visual Frame - Offset */}
          <div className="md:col-span-5 md:-mb-10 group relative overflow-hidden rounded-xs bg-[#e6e0d3]">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://heanlyharris-com.nimbus-cdn.uk/wp-content/uploads/2025/10/Pembrook-Villas-008.jpg?format=webp"
                alt="NR Interiors architectural details"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-[#faf8f5] flex justify-between items-center text-xs text-[#78756e]">
              <span className="font-serif-luxury italic text-sm text-[#181715]">
                Architectural Joinery
              </span>
              <span className="tracking-[0.15em] text-[10px] uppercase">Bespoke Millwork</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
