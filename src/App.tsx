import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { Services } from './components/Services';
import { CostEstimator } from './components/CostEstimator';
import { AboutSection } from './components/AboutSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [estimateData, setEstimateData] = useState<{
    category?: string;
    budget?: string;
    notes?: string;
  } | undefined>(undefined);

  // Scroll smoothly to contact section and set form data
  const handleApplyEstimate = (data: { category: string; budget: string; area: number; notes: string }) => {
    setEstimateData({
      category: data.category,
      budget: data.budget,
      notes: `[Estimator Model Applied]\nCalculated Range: ${data.budget}\nGross Area: ${data.area.toLocaleString()} sq.ft\nParameters: ${data.notes}`,
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks "Inquire About Similar Project" from ProjectModal
  const handleSelectProjectForQuote = (projectTitle: string) => {
    setEstimateData({
      notes: `[Inquiry on Project Reference]\nInterested in specifications and constructability similar to: ${projectTitle}`,
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks "Request Bid for Service" from ServiceModal
  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setEstimateData({
      notes: `[Service RFP Request]\nRequesting engineering consultation and bid for division: ${serviceTitle}`,
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('fullName');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }
  };

  return (
    <div className="vcon-app blueprint-grid">
      {/* Sticky Header with Navigation & Announcement Bar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main>
        {/* Cinematic Hero with Live Site Telemetry */}
        <Hero onOpenEstimator={() => {
          const estimatorEl = document.getElementById('estimator');
          if (estimatorEl) estimatorEl.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Featured Projects Showcase with Real Photos & Modal Inspection */}
        <ProjectsShowcase onSelectProjectForQuote={handleSelectProjectForQuote} />

        {/* Turnkey General Contracting Services */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Interactive Cost & Timeline Estimator */}
        <CostEstimator onApplyEstimate={handleApplyEstimate} />

        {/* The 4-Stage Precision Delivery Framework & Drone QA */}
        <ProcessTimeline />

        {/* About Vconstruction & Master Engineering Team */}
        <AboutSection />

        {/* Client Testimonials, Corporate Partners & FAQs */}
        <Testimonials />

        {/* End-to-End Contact & Tender Hub */}
        <ContactSection 
          initialData={estimateData} 
          onClearInitialData={() => setEstimateData(undefined)} 
        />
      </main>

      {/* High-End Footer with Emergency Hotline Banner & Accreditations */}
      <Footer />
    </div>
  );
}

export default App;
