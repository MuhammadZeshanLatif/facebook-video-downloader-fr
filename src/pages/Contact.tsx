import { useState } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEO 
        title="Contact Us - Facebook Video Downloader"
        description="Get in touch with us for any questions, feedback, or support regarding our Facebook video downloader tool."
      />
      
      <main>
        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Have questions or feedback? We'd love to hear from you. Get in touch with our team.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container">
            <div className="row g-5">
              {/* Contact Info */}
              <div className="col-lg-4">
                <div className="content-card h-100">
                  <h3 className="text-gradient mb-4">Get In Touch</h3>
                  <p className="mb-4">
                    We're here to help! Reach out to us for any questions, suggestions, or support regarding our Facebook video downloader.
                  </p>
                  
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="feature-icon me-3" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Email Us</h6>
                        <p className="mb-0">support@fbdownloader.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="feature-icon me-3" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
                        <i className="fas fa-clock"></i>
                      </div>
                      <div>
                        <h6 className="mb-1">Response Time</h6>
                        <p className="mb-0">Within 24-48 hours</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h6 className="mb-3">Follow Us</h6>
                    <div className="d-flex gap-3">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '45px', height: '45px', padding: 0, borderRadius: '50%' }}>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '45px', height: '45px', padding: 0, borderRadius: '50%' }}>
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '45px', height: '45px', padding: 0, borderRadius: '50%' }}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-lg-8">
                <div className="content-card">
                  <h3 className="mb-4">Send Us a Message</h3>
                  
                  {submitted ? (
                    <div className="text-center py-5">
                      <div className="feature-icon mx-auto mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                        <i className="fas fa-check"></i>
                      </div>
                      <h4 className="text-success mb-2">Message Sent!</h4>
                      <p className="mb-4">Thank you for contacting us. We'll get back to you soon.</p>
                      <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3 mb-3">
                        <div className="col-md-6">
                          <label className="form-label fw-semibold">Your Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-semibold">Email Address</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Subject</label>
                        <select
                          className="form-select"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          style={{ borderRadius: '50px', padding: '12px 20px' }}
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="feedback">Feedback</option>
                          <option value="dmca">DMCA / Copyright</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="mb-4">
                        <label className="form-label fw-semibold">Message</label>
                        <textarea
                          className="form-control"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="How can we help you?"
                          required
                          style={{ borderRadius: '16px', padding: '16px 20px' }}
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="loading-spinner me-2" style={{ width: '20px', height: '20px', borderWidth: '2px' }}></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            Send Message
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
      </main>
    </>
  );
}
