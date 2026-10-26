import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail,
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  UploadCloud, 
  ShieldCheck, 
  Sparkles,
  MessageCircle,
  Home
} from 'lucide-react';

interface ContactProps {
  initialData?: {
    category?: string;
    budget?: string;
    notes?: string;
  };
  onClearInitialData?: () => void;
}

export const ContactSection: React.FC<ContactProps> = ({ initialData, onClearInitialData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    villageMandal: '',
    phone: '',
    houseType: '1bhk',
    budgetRange: '₹5L - ₹7L (Budget 1BHK)',
    plotSize: '400 - 600 sq.ft',
    timeline: 'Within 30 Days (Immediate)',
    message: '',
  });

  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        houseType: initialData.category || prev.houseType,
        budgetRange: initialData.budget || prev.budgetRange,
        message: initialData.notes ? `${initialData.notes}\n\n` : prev.message,
      }));
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.villageMandal.trim()) {
      newErrors.villageMandal = 'Please enter your village & mandal name.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedRef = `VCON-VILLAGE-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedRef);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      villageMandal: '',
      phone: '',
      houseType: '1bhk',
      budgetRange: '₹5L - ₹7L (Budget 1BHK)',
      plotSize: '400 - 600 sq.ft',
      timeline: 'Within 30 Days (Immediate)',
      message: '',
    });
    setUploadedFileName(null);
    if (onClearInitialData) onClearInitialData();
  };

  const whatsappDirect = "https://wa.me/916303648230?text=Hello%20V-Constructions,%20I%20want%20a%20quote%20for%20village%20house%20construction.";

  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-pill">
            <Home size={14} className="text-amber" />
            <span>Free Site Visit & Quote</span>
          </span>
          <h2 className="section-title">
            Request A Free <span className="text-gradient-amber">Village Site Visit</span> & Quote.
          </h2>
          <p className="section-subtitle">
            Fill this simple form or message us directly on WhatsApp. Our site engineer will visit your village plot, 
            measure the land, and provide a clear written estimate without any pressure.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-column">
            <div className="contact-info-card glass-panel">
              <h3 className="info-card-title">Direct Contact Information</h3>
              
              <div className="info-contact-list">
                <div className="info-item">
                  <div className="info-icon-box">
                    <Phone size={20} className="text-amber" />
                  </div>
                  <div>
                    <div className="info-item-label">Direct Phone Calling</div>
                    <div className="info-item-value">
                      <a href="tel:+916303648230" className="phone-link">+91 63036 48230</a><br />
                      <span className="text-amber">Available 7:00 AM to 9:00 PM Daily</span>
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <Mail size={20} className="text-amber" />
                  </div>
                  <div>
                    <div className="info-item-label">Direct Email</div>
                    <div className="info-item-value">
                      <a href="mailto:policemanojkumar46@gmail.com" className="phone-link">policemanojkumar46@gmail.com</a><br />
                      <span>Inquiries & Plot Layouts</span>
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box" style={{ background: 'rgba(16, 185, 129, 0.15)', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                    <MessageCircle size={20} className="text-emerald" />
                  </div>
                  <div>
                    <div className="info-item-label">Instant WhatsApp Chat</div>
                    <div className="info-item-value">
                      <a href={whatsappDirect} target="_blank" rel="noopener noreferrer" className="phone-link" style={{ color: '#34d399' }}>
                        +91 63036 48230 (Click to Chat)
                      </a><br />
                      <span>Send your plot photo or ask for house plans</span>
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <MapPin size={20} className="text-amber" />
                  </div>
                  <div>
                    <div className="info-item-label">Service Areas</div>
                    <div className="info-item-value">
                      All Villages & Gram Panchayats across Khammam, Nalgonda, Warangal, Karimnagar, Medak, Krishna & Guntur Mandals.
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <Clock size={20} className="text-amber" />
                  </div>
                  <div>
                    <div className="info-item-label">Site Visit Timings</div>
                    <div className="info-item-value">
                      Monday to Sunday (Including Weekends)<br />
                      <span className="text-emerald">Free Site Visit Arranged within 24 Hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a 
                href={whatsappDirect} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{ width: '100%', marginBottom: '1.25rem', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)' }}
              >
                <MessageCircle size={18} />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              {/* Trust Box */}
              <div className="contact-trust-box">
                <ShieldCheck size={20} className="text-emerald" />
                <span>100% Free Consultation. No advance needed for site visit!</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Quote Form */}
          <div className="contact-form-column">
            <div className="contact-form-wrapper glass-panel">
              {isSubmitted ? (
                /* Submission Confirmation State */
                <div className="submission-success-card" role="status">
                  <div className="success-icon-box">
                    <CheckCircle2 size={48} className="text-emerald" />
                  </div>
                  <h3 className="success-title">Thank You! Inquiry Received!</h3>
                  <p className="success-desc">
                    Thank you <strong>{formData.fullName}</strong>. We received your request for 
                    <strong> {formData.villageMandal}</strong>. Our supervisor will call your mobile 
                    <strong> ({formData.phone})</strong> shortly to schedule your free plot visit.
                  </p>

                  <div className="ticket-reference-box glass-panel">
                    <span className="ticket-label">Your Reference ID:</span>
                    <span className="ticket-number text-gradient-amber">{referenceId}</span>
                  </div>

                  <a 
                    href={whatsappDirect} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary" 
                    style={{ width: '100%' }}
                  >
                    <MessageCircle size={18} />
                    <span>Send Inquiry Copy on WhatsApp</span>
                  </a>

                  <button onClick={handleReset} className="btn btn-secondary" style={{ width: '100%' }}>
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="project-inquiry-form" noValidate>
                  <div className="form-header-row">
                    <h3 className="form-title">Free Village Site Visit & Quote</h3>
                    <span className="required-notice">* Required</span>
                  </div>

                  {initialData?.notes && (
                    <div className="prefill-notice-badge">
                      <Sparkles size={16} className="text-amber" />
                      <span>Calculator estimate loaded into your inquiry!</span>
                    </div>
                  )}

                  {/* Row 1: Name & Mobile */}
                  <div className="form-row-2">
                    <div className="form-field">
                      <label className="form-label" htmlFor="fullName">Your Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                        required
                      />
                      {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                    </div>

                    <div className="form-field">
                      <label className="form-label" htmlFor="phone">Mobile / WhatsApp Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 6303648230"
                        className={`form-input ${errors.phone ? 'input-error' : ''}`}
                        required
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Row 2: Village/Mandal & House Type */}
                  <div className="form-row-2">
                    <div className="form-field">
                      <label className="form-label" htmlFor="villageMandal">Village & Mandal *</label>
                      <input
                        type="text"
                        id="villageMandal"
                        name="villageMandal"
                        value={formData.villageMandal}
                        onChange={handleChange}
                        placeholder="e.g. Peddapalli Village, Khammam"
                        className={`form-input ${errors.villageMandal ? 'input-error' : ''}`}
                        required
                      />
                      {errors.villageMandal && <span className="error-text">{errors.villageMandal}</span>}
                    </div>

                    <div className="form-field">
                      <label className="form-label" htmlFor="houseType">House Type</label>
                      <select
                        id="houseType"
                        name="houseType"
                        value={formData.houseType}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="1bhk">Budget 1BHK Village Home</option>
                        <option value="2bhk">Comfort 2BHK Independent House</option>
                        <option value="duplex">G+1 Duplex House (Two Floors)</option>
                        <option value="labor">Labor Only Contract</option>
                        <option value="renovation">Roof Slab or Centering Work</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Budget & Timeline */}
                  <div className="form-row-2">
                    <div className="form-field">
                      <label className="form-label" htmlFor="budgetRange">Approx Budget</label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="₹5L - ₹7L (Budget 1BHK)">₹5L – ₹7L (Budget 1BHK)</option>
                        <option value="₹8L - ₹11L (2BHK Model)">₹8L – ₹11L (2BHK Model)</option>
                        <option value="₹12L - ₹18L (Duplex)">₹12L – ₹18L (G+1 Duplex)</option>
                        <option value="Labor Contract Rate">Labor Contract (₹280 - ₹350 / sq.ft)</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label className="form-label" htmlFor="timeline">When to Start</label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="Within 30 Days (Immediate)">Immediately / Next Good Muhurtham</option>
                        <option value="Within 1-3 Months">Within 1 to 3 Months</option>
                        <option value="Currently Planning">Currently Planning & Checking Rates</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Details */}
                  <div className="form-field">
                    <label className="form-label" htmlFor="message">Plot Details or Questions</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. 30x40 feet plot, water borewell available, need front sitout..."
                      className="form-textarea"
                    ></textarea>
                  </div>

                  {/* File Upload Mock */}
                  <div className="file-upload-box">
                    <label className="upload-label-container" htmlFor="blueprintUpload">
                      <UploadCloud size={24} className="text-amber" />
                      <div className="upload-text">
                        {uploadedFileName ? (
                          <span className="uploaded-file-name text-amber">
                            Attached: {uploadedFileName}
                          </span>
                        ) : (
                          <>
                            <strong>Attach Plot Photo or Rough Sketch (Optional)</strong>
                            <span>JPG, PNG, PDF up to 25MB</span>
                          </>
                        )}
                      </div>
                      <input 
                        type="file" 
                        id="blueprintUpload" 
                        onChange={handleFileUpload} 
                        style={{ display: 'none' }} 
                      />
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary submit-bid-btn"
                    id="submit-bid-form-btn"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Book Free Plot Visit</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
