import React from 'react';
import { X, MapPin, DollarSign, Clock, Building, CheckCircle2, Award, ArrowUpRight, MessageCircle } from 'lucide-react';
import type { Project } from '../data/constructionData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  const whatsappUrl = `https://wa.me/916303648230?text=Hello%20V-Constructions,%20I%20am%20interested%20in%20building%20a%20house%20like:%20${encodeURIComponent(project.title)}%20(${encodeURIComponent(project.budget)})`;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content project-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {/* Modal Image Header */}
        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} className="modal-header-image" />
          <div className="modal-image-overlay">
            <span className="badge-pill">{project.categoryLabel}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content">
          {/* Quick Details Bar */}
          <div className="modal-specs-bar">
            <div className="modal-spec-item">
              <MapPin size={16} className="text-amber" />
              <div>
                <span className="spec-label">Village / Location</span>
                <span className="spec-value">{project.location}</span>
              </div>
            </div>
            <div className="modal-spec-item">
              <DollarSign size={16} className="text-amber" />
              <div>
                <span className="spec-label">Total Cost</span>
                <span className="spec-value text-amber">{project.budget}</span>
              </div>
            </div>
            <div className="modal-spec-item">
              <Clock size={16} className="text-amber" />
              <div>
                <span className="spec-label">Construction Time</span>
                <span className="spec-value">{project.duration}</span>
              </div>
            </div>
            <div className="modal-spec-item">
              <Building size={16} className="text-amber" />
              <div>
                <span className="spec-label">House Dimensions</span>
                <span className="spec-value">{project.area}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="modal-section">
            <h4 className="modal-section-title">House Features & Construction Details</h4>
            <p className="modal-desc-text">{project.description}</p>
          </div>

          {/* Material & Engineering Metrics */}
          {project.specs && (
            <div className="modal-section">
              <h4 className="modal-section-title">Material Quantities Used in this House</h4>
              <div className="specs-table-grid">
                {project.specs.cementBags && (
                  <div className="spec-cell">
                    <span className="cell-label">Cement Bags</span>
                    <span className="cell-val text-amber">{project.specs.cementBags}</span>
                  </div>
                )}
                {project.specs.steelTonnage && (
                  <div className="spec-cell">
                    <span className="cell-label">TMT Steel</span>
                    <span className="cell-val">{project.specs.steelTonnage}</span>
                  </div>
                )}
                {project.specs.bricksCount && (
                  <div className="spec-cell">
                    <span className="cell-label">Red Clay Bricks</span>
                    <span className="cell-val">{project.specs.bricksCount}</span>
                  </div>
                )}
                {project.specs.rooms && (
                  <div className="spec-cell">
                    <span className="cell-label">Room Layout</span>
                    <span className="cell-val text-emerald">{project.specs.rooms}</span>
                  </div>
                )}
                {project.specs.handoverTime && (
                  <div className="spec-cell">
                    <span className="cell-label">Target Completion</span>
                    <span className="cell-val">{project.specs.handoverTime}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Scope of Work */}
          <div className="modal-section">
            <h4 className="modal-section-title">What is Included in This Package</h4>
            <div className="scope-list">
              {project.scope.map((item, i) => (
                <div key={i} className="scope-item">
                  <CheckCircle2 size={16} className="text-amber" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="modal-section">
            <h4 className="modal-section-title">Special Benefits for Village Owners</h4>
            <div className="features-list">
              {project.keyFeatures.map((feature, i) => (
                <div key={i} className="feature-item">
                  <Award size={16} className="text-amber" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="modal-footer-cta">
            <div className="modal-client-info">
              <span className="client-label">House Owner Commission:</span>
              <span className="client-name">{project.client} ({project.year})</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{ color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)' }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Quote</span>
              </a>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
              >
                <span>Book Free Village Site Visit</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
