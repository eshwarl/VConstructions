import React, { useState } from 'react';
import { 
  Phone, 
  Mail,
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterDone(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterDone(false), 4500);
    }
  };

  const whatsappDirect = "https://wa.me/916303648230?text=Hello%20V-Constructions,%20please%20send%20me%20village%20house%20plans%20and%20rates.";

  return (
    <footer className="footer-wrapper">
      {/* Pre-footer Emergency Hotline Banner */}
      <div className="pre-footer-banner">
        <div className="container banner-inner">
          <div className="banner-text">
            <span className="banner-pill">Free Village Plot Inspection</span>
            <h3 className="banner-heading">Planning to build a house in your village? Talk to us today!</h3>
          </div>
          <div className="banner-action" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href={whatsappDirect} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
              style={{ color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)' }}
            >
              <MessageCircle size={18} />
              <span>WhatsApp: +91 63036 48230</span>
            </a>
            <a href="tel:+916303648230" className="btn btn-primary banner-call-btn">
              <Phone size={18} />
              <span>Call: +91 63036 48230</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="main-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand Info */}
            <div className="footer-col brand-col">
              <a href="#" className="brand-logo footer-logo">
                <div className="logo-icon-container">
                  <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4L36 18H31V34H9V18H4L20 4Z" fill="#F59E0B" />
                    <path d="M14 18L20 28L26 18H20.5L20 19L19.5 18H14Z" fill="#0B0F19" />
                    <rect x="17" y="24" width="6" height="10" fill="#FBBF24" />
                  </svg>
                </div>
                <div className="brand-text">
                  <span className="brand-name">V<span className="text-amber">-CONSTRUCTIONS</span></span>
                  <span className="brand-tagline">VILLAGE & RURAL HOUSE BUILDERS</span>
                </div>
              </a>

              <p className="footer-about-text">
                A dedicated construction startup providing honest, durable, and budget-friendly home construction for village families. Specialized in 1BHK, 2BHK independent homes, and quality RCC slab casting.
              </p>

              <div className="footer-accreditations">
                <div className="footer-badge">
                  <Phone size={16} className="text-amber" />
                  <a href="tel:+916303648230" style={{ color: '#ffffff' }}>+91 63036 48230</a>
                </div>
                <div className="footer-badge">
                  <Mail size={16} className="text-amber" />
                  <a href="mailto:policemanojkumar46@gmail.com" style={{ color: '#cbd5e1' }}>policemanojkumar46@gmail.com</a>
                </div>
                <div className="footer-badge">
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>100% Written Agreement & Price Guarantee</span>
                </div>
              </div>
            </div>

            {/* Column 2: House Packages */}
            <div className="footer-col">
              <h4 className="footer-heading">House Models & Packages</h4>
              <ul className="footer-links">
                <li><a href="#projects">Budget 1BHK Model (₹5.0 - ₹6.5 Lakhs)</a></li>
                <li><a href="#projects">Comfort 2BHK Village Home (₹8.5 - ₹11.5L)</a></li>
                <li><a href="#projects">Modern G+1 Duplex (₹15 - ₹20 Lakhs)</a></li>
                <li><a href="#services">With-Material Contract (A to Z)</a></li>
                <li><a href="#services">Labor Only Contract (₹280 - ₹350 / sq.ft)</a></li>
                <li><a href="#services">Centering & Roof Slab Casting</a></li>
              </ul>
            </div>

            {/* Column 3: Quick Navigation */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#projects">House Gallery & Photos</a></li>
                <li><a href="#estimator">Cost Calculator</a></li>
                <li><a href="#process">5-Stage Construction Process</a></li>
                <li><a href="#about">About Our Startup Team</a></li>
                <li><a href="#testimonials">Owner Reviews & FAQs</a></li>
                <li><a href="#contact">Request Free Plot Visit</a></li>
              </ul>
            </div>

            {/* Column 4: WhatsApp & Village Updates */}
            <div className="footer-col newsletter-col">
              <h4 className="footer-heading">Village House Updates</h4>
              <p className="newsletter-text">
                Enter your mobile number or email to receive our latest 1BHK/2BHK house floor plans and material price updates.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <div className="newsletter-input-box">
                  <input
                    type="text"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter Mobile or Email"
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>

              {newsletterDone && (
                <div className="newsletter-success">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Thank you! We will send you new house plans!</span>
                </div>
              )}

              <div style={{ marginTop: '1.25rem' }}>
                <a 
                  href={whatsappDirect} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ width: '100%', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)', padding: '0.65rem 1rem' }}
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp (+91 63036 48230)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div className="footer-bottom-bar">
            <div className="legal-left">
              <span>© {new Date().getFullYear()} V-Constructions Village & Rural Housing Specialists. All rights reserved.</span>
              <span className="license-info">Serving Rural Mandals, Towns & Villages across regional districts</span>
            </div>
            <div className="legal-right">
              <a href="mailto:policemanojkumar46@gmail.com">policemanojkumar46@gmail.com</a>
              <span className="divider">•</span>
              <a href="tel:+916303648230">+91 63036 48230</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
