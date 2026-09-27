'use client';

import { useState } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import StatementSection from './components/StatementSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsGrid from './components/ProjectsGrid';
import TestimonialSection from './components/TestimonialSection';
import EnquirySection from './components/EnquirySection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ServicesModal from './components/ServicesModal';
import AboutModal from './components/AboutModal';
import JournalModal from './components/JournalModal';
import { projectsData } from './data/projects';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showServicesModal, setShowServicesModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showJournalModal, setShowJournalModal] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);

    if (sectionId === 'journal') {
      setShowJournalModal(true);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = () => {
    const el = document.getElementById('enquire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#faf8f5] text-[#181715] selection:bg-[#8a866a] selection:text-white">
      {/* 1. Splash Preloader (matching Heanly Harris signature intro) */}
      <Preloader />

      {/* 2. Sticky Header with dynamic transparency and scroll-direction awareness */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 3. Hero Architectural Slider */}
      <HeroSlider
        slides={projectsData}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 4. Statement Philosophy Section (Iconic Heanly Harris Quote + Framed Visuals) */}
      <StatementSection />

      {/* 5. About Us (Nadia's Narrative & Architecture Studio) */}
      <AboutSection
        onOpenAboutModal={() => setShowAboutModal(true)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 6. Interior Design Services (Pillars & Methodology) */}
      <ServicesSection
        onOpenServicesModal={() => setShowServicesModal(true)}
        onSelectProjectsView={() => handleNavigate('projects')}
      />

      {/* 7. Featured Projects Grid (Filterable Portfolio) */}
      <ProjectsGrid
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 8. Client Endorsement & Accreditation Bar */}
      <TestimonialSection />

      {/* 9. Get in Touch / Project Consultation Enquiry */}
      <EnquirySection />

      {/* 10. Architectural Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Interactive Lightboxes & Sub-views */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenEnquiry={handleOpenEnquiry}
        />
      )}

      {showServicesModal && (
        <ServicesModal
          onClose={() => setShowServicesModal(false)}
          onOpenEnquiry={handleOpenEnquiry}
        />
      )}

      {showAboutModal && (
        <AboutModal
          onClose={() => setShowAboutModal(false)}
          onOpenEnquiry={handleOpenEnquiry}
        />
      )}

      {showJournalModal && (
        <JournalModal
          onClose={() => setShowJournalModal(false)}
          onOpenEnquiry={handleOpenEnquiry}
        />
      )}
    </main>
  );
}
