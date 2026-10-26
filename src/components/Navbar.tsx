import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Home, MessageCircle, CheckCircle } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'House Models', href: '#projects' },
    { label: 'Packages & Rates', href: '#services' },
    { label: 'Cost Calculator', href: '#estimator' },
    { label: 'Construction Steps', href: '#process' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = "https://wa.me/916303648230?text=Hello%20V-Constructions,%20I%20want%20a%20quote%20for%20my%20village%20house%20construction.";

  return (
    <header className="navbar-wrapper">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-indicator" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Top Utility Announcement Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span className="topbar-item">
              <Home size={14} className="text-amber" />
              <span>Affordable Village Homes & 1BHK / 2BHK Construction</span>
            </span>
            <span className="topbar-divider">|</span>
            <span className="topbar-item">
              <CheckCircle size={14} className="text-emerald" />
              <span>Free Village Plot Visit & Planning</span>
            </span>
          </div>

          <div className="topbar-right">
            <a href="tel:+916303648230" className="topbar-link">
              <Phone size={13} className="text-amber" />
              <span>+91 63036 48230</span>
            </a>
            <span className="topbar-divider">|</span>
            <a href="mailto:policemanojkumar46@gmail.com" className="topbar-link">
              <Mail size={13} className="text-amber" />
              <span>policemanojkumar46@gmail.com</span>
            </a>
            <span className="topbar-divider">|</span>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="topbar-badge"
              style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)' }}
            >
              <MessageCircle size={13} />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`main-nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-inner">
          {/* Brand Logo */}
          <a href="#" className="brand-logo" aria-label="V-Constructions Home">
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

          {/* Desktop Links */}
          <ul className="nav-menu desktop-menu">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="nav-actions desktop-actions">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hotline-btn" 
              title="WhatsApp for quick estimate"
              style={{ color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.3)' }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
            <button 
              onClick={onOpenQuoteModal} 
              className="btn btn-primary nav-cta-btn"
              id="header-quote-btn"
            >
              <span>Get Village Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={16} className="text-amber" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-contact">
              <div className="mobile-contact-row">
                <Phone size={16} className="text-amber" />
                <a href="tel:+916303648230">+91 63036 48230 (Direct Call)</a>
              </div>
              <div className="mobile-contact-row">
                <Mail size={16} className="text-amber" />
                <a href="mailto:policemanojkumar46@gmail.com">policemanojkumar46@gmail.com</a>
              </div>
              <div className="mobile-contact-row">
                <MessageCircle size={16} className="text-emerald" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Chat on WhatsApp (+91 63036 48230)</a>
              </div>
              <div className="mobile-contact-row">
                <MapPin size={16} className="text-amber" />
                <span>Serving All Mandals & Rural Villages</span>
              </div>
            </div>

            <div className="mobile-drawer-actions">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>Request Free Village Site Visit</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
