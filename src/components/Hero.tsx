import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, Home, MessageCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_STATS } from '../data/constructionData';

interface HeroProps {
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  const whatsappUrl = "https://wa.me/916303648230?text=Hello%20V-Constructions,%20please%20send%20me%20cost%20details%20for%20village%20house.";

  return (
    <section className="hero-section" id="home">
      {/* Background with Dark Atmospheric Gradients */}
      <div className="hero-bg-container">
        <img 
          src="/images/indiramma_hero.jpg" 
          alt="V-Constructions Village house construction" 
          className="hero-bg-image"
        />
        <div className="hero-overlay-gradient"></div>
        <div className="hero-blueprint-lines"></div>
      </div>

      <div className="container hero-content-wrapper">
        <div className="hero-content">
          {/* Top Badge */}
          <div className="hero-badge-row">
            <span className="badge-pill">
              <Home size={14} className="text-amber" />
              <span>Village & Rural Independent House Builders</span>
            </span>
            <span className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Booking Free Village Plot Visits</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Building Strong & Beautiful <span className="text-gradient-amber">Village Homes</span> Within Your Budget.
          </h1>

          {/* Subtitle */}
          <p className="hero-description">
            V-Constructions is a dedicated local construction startup helping rural families build 
            their dream homes. From Bhoomi Pooja to house warming in 75 to 90 days with genuine red clay bricks, 
            branded cement, and transparent pricing starting from ₹5 Lakhs.
          </p>

          {/* Key Value Bullets */}
          <div className="hero-features-list">
            <div className="hero-feature-item">
              <CheckCircle2 size={18} className="text-amber" />
              <span><strong>Budget Friendly:</strong> Simple 1BHK, 2BHK and duplex houses from ₹5 Lakhs</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={18} className="text-amber" />
              <span><strong>Two Flexible Options:</strong> With Material (A to Z) or Labor Only contract</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={18} className="text-amber" />
              <span><strong>Quality Materials:</strong> 53-Grade Cement, Fe550 TMT Steel & Red Clay Bricks</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>View House Models & Photos</span>
              <ArrowRight size={18} />
            </a>

            <button 
              onClick={onOpenEstimator} 
              className="btn btn-secondary hero-btn"
              id="hero-estimator-btn"
            >
              <Calculator size={18} className="text-amber" />
              <span>Village Cost Calculator</span>
            </button>
          </div>
        </div>

        {/* Live Site Operations Glass Card */}
        <div className="hero-site-card glass-panel">
          <div className="site-card-header">
            <div className="site-status-icon">
              <Home size={20} className="text-amber" />
            </div>
            <div>
              <div className="site-card-title">Village Housing Packages</div>
              <div className="site-card-sub">Simple Rates for Rural Families</div>
            </div>
            <span className="live-indicator">ACTIVE</span>
          </div>

          <div className="site-card-body">
            <div className="telemetry-item">
              <span className="telemetry-label">Budget 1BHK Model</span>
              <span className="telemetry-value text-amber">₹5.0 – ₹6.5 Lakhs</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">Comfort 2BHK Home (700sft)</span>
              <span className="telemetry-value">₹8.5 – ₹11.5 Lakhs</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">Labor Only Rate</span>
              <span className="telemetry-value text-emerald">₹280 – ₹350 / sq.ft</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-label">Completion Duration</span>
              <span className="telemetry-value">75 – 90 Days</span>
            </div>
          </div>

          <div className="site-card-footer" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={14} className="text-emerald" />
              <span>100% Written Agreement</span>
            </div>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#34d399', fontWeight: 600 }}
            >
              <MessageCircle size={14} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Metrics Strip */}
      <div className="hero-stats-bar">
        <div className="container">
          <div className="stats-grid">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="stat-card glass-panel">
                <div className="stat-value text-gradient-amber">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
