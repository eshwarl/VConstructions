import React, { useState } from 'react';
import { Star, MessageSquareQuote, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA, TRUST_HIGHLIGHTS, FAQS } from '../data/constructionData';

export const Testimonials: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="section-padding testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-pill">
            <MessageSquareQuote size={14} className="text-amber" />
            <span>Client Reviews & Feedback</span>
          </span>
          <h2 className="section-title">
            What Village House Owners <span className="text-gradient-amber">Say About Our Work</span>.
          </h2>
          <p className="section-subtitle">
            Read real feedback from families who entrusted their village house constructions to our startup team.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((item) => (
            <div key={item.id} className="testimonial-card glass-panel">
              <div className="testimonial-rating-row">
                <div className="stars-group">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" className="text-amber" />
                  ))}
                </div>
                <span className="verified-badge">
                  <ShieldCheck size={13} className="text-emerald" />
                  <span>Verified House Owner</span>
                </span>
              </div>

              <p className="testimonial-quote">"{item.content}"</p>

              <div className="testimonial-project-tag">
                <span>Model: <strong>{item.houseType}</strong> ({item.cost})</span>
              </div>

              <div className="testimonial-author-row">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="author-avatar" 
                  loading="lazy"
                />
                <div className="author-meta">
                  <div className="author-name">{item.name}</div>
                  <div className="author-role">{item.village}</div>
                  <div className="author-company text-amber">{item.district}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Highlights Marquee */}
        <div className="trust-marquee-wrapper glass-panel">
          <div className="trust-marquee-label">Our Core Commitments:</div>
          <div className="trust-marquee-row">
            {TRUST_HIGHLIGHTS.map((highlight, i) => (
              <div key={i} className="trust-logo-chip" style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                <span>✓ {highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-wrapper">
          <div className="faq-header">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <p className="faq-sub">Common questions by rural families and village plot owners.</p>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item glass-panel ${openFaq === idx ? 'faq-item-open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-row">
                  <span className="faq-q-text">{faq.q}</span>
                  <button className="faq-toggle-icon" aria-label="Toggle answer">
                    {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer-row">
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
