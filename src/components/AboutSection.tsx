import React from 'react';
import { ShieldCheck, HardHat, Compass, Award, Home, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="section-padding about-section" id="about">
      <div className="container">
        {/* Top Header */}
        <div className="section-header">
          <span className="badge-pill">
            <Home size={14} className="text-amber" />
            <span>About V-Constructions</span>
          </span>
          <h2 className="section-title">
            A Trusted Local Startup For <span className="text-gradient-amber">Village & Rural</span> Homes.
          </h2>
          <p className="section-subtitle">
            Founded by passionate young civil engineers and experienced village head masons 
            to bring honest, high-quality, and transparent home construction to rural families.
          </p>
        </div>

        {/* Story & Image Split Grid */}
        <div className="about-grid">
          {/* Left Column: Image with Overlay Badge */}
          <div className="about-image-column">
            <div className="about-image-card">
              <img 
                src="/images/village_construction_active.jpg" 
                alt="V-Constructions active village house construction" 
                className="about-team-photo"
              />
              <div className="about-image-overlay-badge glass-panel">
                <div className="overlay-badge-number text-gradient-amber">65+</div>
                <div className="overlay-badge-text">
                  <strong>Village Homes Successfully Built</strong>
                  <span>Across Rural Mandals & Gram Panchayats</span>
                </div>
              </div>
            </div>

            {/* Accreditations Strip */}
            <div className="about-cert-badges">
              <div className="cert-pill">
                <Award size={15} className="text-amber" />
                <span>Transparent Startup Builder</span>
              </div>
              <div className="cert-pill">
                <ShieldCheck size={15} className="text-emerald" />
                <span>100% Written Stamp Agreement</span>
              </div>
              <div className="cert-pill">
                <HardHat size={15} className="text-amber" />
                <span>Experienced Village Masons</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="about-text-column">
            <h3 className="about-heading">
              Building a house in your village is a lifetime dream. We make it simple and reliable.
            </h3>
            
            <p className="about-p">
              Building an independent house in a village is a family's greatest accomplishment, funded by years of hard work, agriculture, and family savings. Too often, rural families face unreliable local contractors who demand unexpected advance money, use substandard sand or cement, or delay work for months.
            </p>

            <p className="about-p">
              <strong>V-Constructions</strong> was started to solve this problem. As an organized, modern construction startup, we provide clear stage-by-stage written contracts, direct procurement of 53-grade certified cement and genuine red bricks, and daily photo updates on WhatsApp so you have complete peace of mind.
            </p>

            {/* 4 Pillars Grid */}
            <div className="about-pillars-grid">
              <div className="pillar-item glass-panel">
                <CheckCircle2 size={22} className="text-amber" />
                <div>
                  <h4 className="pillar-title">Written Stamp Agreement</h4>
                  <p className="pillar-desc">
                    Every rupee, brand of cement, steel grade, and completion date is clearly stated on paper before taking any advance.
                  </p>
                </div>
              </div>

              <div className="pillar-item glass-panel">
                <ShieldCheck size={22} className="text-amber" />
                <div>
                  <h4 className="pillar-title">53-Grade Cement & Red Clay Bricks</h4>
                  <p className="pillar-desc">
                    We strictly use branded cement (Ultratech/Maha), Fe550 certified TMT steel, and well-burnt red clay bricks for lifetime strength.
                  </p>
                </div>
              </div>

              <div className="pillar-item glass-panel">
                <HardHat size={22} className="text-amber" />
                <div>
                  <h4 className="pillar-title">21-Day Water Curing Supervision</h4>
                  <p className="pillar-desc">
                    We assign dedicated curing staff to continuously water the slab and walls for 21 full days to prevent any future slab leaks.
                  </p>
                </div>
              </div>

              <div className="pillar-item glass-panel">
                <Compass size={22} className="text-amber" />
                <div>
                  <h4 className="pillar-title">Transparent Milestone Pricing</h4>
                  <p className="pillar-desc">
                    You pay in small stage installments. You only release funds for the next stage after inspecting and approving the work.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Endorsement Quote */}
            <div className="leadership-quote glass-panel">
              <p className="quote-text">
                "Our mission is simple: To build every village family a strong, leak-proof, and beautiful home within an honest budget, without any shortcuts."
              </p>
              <div className="quote-author">
                <div className="author-name">V-Constructions Founders Team</div>
                <div className="author-title">Civil Engineers & Village Contractors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
