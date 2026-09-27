'use client';

import { useState } from 'react';
import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';

const categories = ['All Projects', 'Residential', 'Heritage Listed', 'Townhouses', 'Country Estates'];

export default function ProjectsGrid({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="bg-[#f3efe8] py-28 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#e6e0d3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#8a866a] font-semibold mb-3 block">
              Portfolio
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#181715] font-light leading-tight">
              Featured Projects
            </h2>
          </div>

          <div className="text-sm text-[#78756e] font-light max-w-sm">
            A curated selection of private residences, period estates, and townhouse renovations across London and the Home Counties.
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12 border-b border-[#e6e0d3] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#181715] text-[#faf8f5] shadow-xs'
                  : 'bg-[#faf8f5] text-[#524f49] hover:bg-[#e6e0d3] border border-[#e6e0d3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid (2-column layout matching Heanly Harris) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container with Elegant Hover Scale */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-[#e6e0d3] mb-5 shadow-sm">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-white/90 text-[#181715] text-xs uppercase tracking-[0.2em] font-medium backdrop-blur-xs flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </span>
                </div>

                <div className="absolute top-4 left-4 bg-[#181715]/75 backdrop-blur-xs text-white px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em]">
                  {project.category}
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif-luxury text-2xl md:text-3xl text-[#181715] font-light group-hover:text-[#8a866a] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#78756e] mt-1.5 font-light">
                    {project.location} · {project.year}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#181715]/20 group-hover:border-[#8a866a] group-hover:bg-[#8a866a] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 text-[#181715]">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
