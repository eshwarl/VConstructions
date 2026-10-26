import React from 'react';
import { X, CheckCircle2, Wrench, Shield, ArrowRight, MessageCircle } from 'lucide-react';
import type { Service } from '../data/constructionData';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectService }) => {
  if (!service) return null;

  const whatsappUrl = `https://wa.me/916303648230?text=Hello%20V-Constructions,%20I%20want%20to%20know%20more%20about:%20${encodeURIComponent(service.title)}%20(${encodeURIComponent(service.rateEstimate)})`;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content service-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div className="service-modal-header">
          <span className="badge-pill">{service.badge}</span>
          <h2 className="service-modal-title">{service.title}</h2>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f59e0b', marginTop: '0.25rem' }}>
            Rate Estimate: {service.rateEstimate}
          </div>
          <p className="service-modal-desc">{service.fullDesc}</p>
        </div>

        <div className="service-modal-body">
          {/* Core Capabilities */}
          <div className="service-modal-section">
            <h4 className="modal-section-title">What is Included in This Work</h4>
            <div className="capabilities-grid">
              {service.capabilities.map((cap, i) => (
                <div key={i} className="cap-item">
                  <CheckCircle2 size={18} className="text-amber" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Equipment Deployed */}
          <div className="service-modal-section">
            <h4 className="modal-section-title">Equipment & Machinery Deployed</h4>
            <div className="machinery-tags">
              {service.machinery.map((mach, i) => (
                <div key={i} className="machinery-chip">
                  <Wrench size={14} className="text-amber" />
                  <span>{mach}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Value Guarantee */}
          <div className="service-guarantee-card glass-panel">
            <Shield size={24} className="text-amber" />
            <div>
              <div className="guarantee-title">V-Con Quality & Material Assurance</div>
              <p className="guarantee-text">{service.keyBenefit}</p>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="modal-footer-cta" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              style={{ flex: 1, minWidth: '220px', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)' }}
            >
              <MessageCircle size={18} />
              <span>Ask Details on WhatsApp</span>
            </a>
            <button 
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '220px' }}
              onClick={() => {
                onClose();
                onSelectService(service.title);
              }}
            >
              <span>Get Free Quote For This Service</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
