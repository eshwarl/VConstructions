import React, { useState } from 'react';
import { 
  Building2, 
  Home, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  HardHat, 
  CheckCircle2 
} from 'lucide-react';
import { SERVICES_DATA, type Service } from '../data/constructionData';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home size={30} className="service-icon" />;
      case 'Building2': return <Building2 size={30} className="service-icon" />;
      case 'Layers': return <Layers size={30} className="service-icon" />;
      case 'Sparkles': return <Sparkles size={30} className="service-icon" />;
      case 'ShieldCheck': return <ShieldCheck size={30} className="service-icon" />;
      default: return <HardHat size={30} className="service-icon" />;
    }
  };

  return (
    <section className="section-padding services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-pill">
            <Home size={14} className="text-amber" />
            <span>Our Construction & Contract Packages</span>
          </span>
          <h2 className="section-title">
            Simple <span className="text-gradient-amber">Packages & Transparent</span> Rates.
          </h2>
          <p className="section-subtitle">
            Whether you need a complete village house built with material or only skilled labor for centering and brickwork, we have clear, affordable pricing.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id} 
              className="service-card glass-panel-interactive"
              onClick={() => setSelectedService(service)}
            >
              <div className="service-card-top">
                <div className="service-icon-box">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className="badge-outline service-stat-chip" style={{ color: '#fbbf24', borderColor: 'rgba(245, 158, 11, 0.4)' }}>
                  {service.rateEstimate}
                </span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.shortDesc}</p>

              <div className="service-key-caps">
                {service.capabilities.slice(0, 2).map((cap, i) => (
                  <div key={i} className="service-cap-line">
                    <CheckCircle2 size={15} className="text-amber" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="service-card-bottom">
                <button 
                  className="service-explore-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                >
                  <span>See Details & Rates</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Standard Guarantee Callout */}
        <div className="services-promise-row glass-panel">
          <div className="promise-item">
            <Sparkles size={20} className="text-amber" />
            <div>
              <div className="promise-title">Written Stamp Agreement</div>
              <div className="promise-sub">Every rupee is accounted for. Zero surprise hidden costs during construction.</div>
            </div>
          </div>
          <div className="promise-item">
            <ShieldCheck size={20} className="text-emerald" />
            <div>
              <div className="promise-title">Brand Materials Only</div>
              <div className="promise-sub">53-grade cement, Fe550 certified TMT steel, and locally tested red clay bricks.</div>
            </div>
          </div>
          <div className="promise-item">
            <Home size={20} className="text-amber" />
            <div>
              <div className="promise-title">On-Time Completion (75-90 Days)</div>
              <div className="promise-sub">Fast, disciplined work so your family can step into your new home on time.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
        onSelectService={(title) => {
          setSelectedService(null);
          onSelectServiceForQuote(title);
        }}
      />
    </section>
  );
};
