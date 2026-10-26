import React from 'react';
import { Layers, CheckCircle2, Home } from 'lucide-react';
import { PROCESS_STEPS } from '../data/constructionData';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="section-padding process-section" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-pill">
            <Layers size={14} className="text-amber" />
            <span>From Bhoomi Pooja to House Warming</span>
          </span>
          <h2 className="section-title">
            Our 5-Stage <span className="text-gradient-amber">Step-By-Step</span> Work Process.
          </h2>
          <p className="section-subtitle">
            Payment is linked strictly to stage completion. You only pay for the next stage after inspecting 
            and approving the current work!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="process-steps-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className="process-step-card glass-panel-interactive">
              <div className="step-header">
                <span className="step-number text-gradient-amber">{step.step}</span>
                <span className="badge-outline step-metric-tag">{step.metric}</span>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>

              <div className="step-indicator-bar">
                <div 
                  className="step-progress-fill" 
                  style={{ width: `${(idx + 1) * 20}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Site Quality Assurance Banner */}
        <div className="process-qa-strip glass-panel">
          <div className="qa-strip-icon">
            <Home size={28} className="text-amber" />
          </div>
          <div className="qa-strip-info">
            <h4 className="qa-strip-title">Stage-Wise Payment Protection</h4>
            <p className="qa-strip-desc">
              No need to pay the whole amount at once. You pay in small installments: Foundation Level (20%), Lintel Level (20%), Slab Casting (25%), Plastering (20%), and Final Handover (15%).
            </p>
          </div>
          <div className="qa-strip-action">
            <span className="qa-badge">
              <CheckCircle2 size={16} className="text-emerald" />
              <span>Owner in 100% Financial Control</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
