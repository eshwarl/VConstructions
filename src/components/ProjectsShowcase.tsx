import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Building, DollarSign, Home } from 'lucide-react';
import { PROJECTS_DATA, type Project } from '../data/constructionData';
import { ProjectModal } from './ProjectModal';

interface ProjectsShowcaseProps {
  onSelectProjectForQuote: (title: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProjectForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Village Homes' },
    { id: '1bhk', label: 'Budget 1BHK Homes' },
    { id: '2bhk', label: '2BHK Houses' },
    { id: 'active', label: 'Live Site Work' },
    { id: 'duplex', label: 'G+1 Duplex' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-pill">
            <Home size={14} className="text-amber" />
            <span>Our Village Homes Portfolio</span>
          </span>
          <h2 className="section-title">
            Images Of Our <span className="text-gradient-amber">Village House</span> Projects.
          </h2>
          <p className="section-subtitle">
            Take a look at real houses built by our startup team in villages and rural mandals. 
            Built with 100% genuine red clay bricks, strong RCC roof slabs, and attractive front elevations within budget.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="project-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              {cat.id === 'all' && <span className="filter-count">({PROJECTS_DATA.length})</span>}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card glass-panel-interactive"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container with Badges */}
              <div className="project-image-box">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-thumb-img"
                  loading="lazy"
                />
                <div className="project-badge-overlay">
                  <span className="badge-outline project-cat-tag">
                    {project.categoryLabel}
                  </span>
                  <span className="project-year-tag">{project.budget.split('(')[0].trim()}</span>
                </div>

                {/* Hover Reveal Quick Action */}
                <div className="project-hover-curtain">
                  <span className="inspect-btn-text">
                    <span>View Plan & Material Specs</span>
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="project-card-details">
                <div className="project-location-row">
                  <MapPin size={14} className="text-amber" />
                  <span>{project.location}</span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                
                <p className="project-card-snippet">
                  {project.description.slice(0, 125)}...
                </p>

                {/* Key Spec Chips */}
                <div className="project-chips-row">
                  <div className="project-chip">
                    <DollarSign size={13} className="text-amber" />
                    <span>{project.budget}</span>
                  </div>
                  <div className="project-chip">
                    <Building size={13} className="text-amber" />
                    <span>{project.area.split('(')[0]}</span>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="project-card-footer">
                  <span className="client-meta">Owner: {project.client}</span>
                  <button 
                    className="view-specs-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <span>Full Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="projects-cta-banner glass-panel">
          <div className="cta-banner-content">
            <h4 className="cta-banner-title">Planning to Build a House in Your Village or Mandal?</h4>
            <p className="cta-banner-text">
              We provide free village site visits across all rural mandals. We measure your plot, 
              provide a Vastu-compliant 1BHK or 2BHK plan, and give you an exact written quote within your budget.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary cta-banner-btn">
            <span>Book Free Plot Visit</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onInquire={(title) => {
          setSelectedProject(null);
          onSelectProjectForQuote(title);
        }}
      />
    </section>
  );
};
