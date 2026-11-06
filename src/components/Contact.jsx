import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code,
  Sparkles,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Data Analyst / IT Internship Opportunity',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    setErrorMsg('Please fill out all required fields.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    setErrorMsg('Please enter a valid email address.');
    return;
  }

  const subject = encodeURIComponent(formData.subject);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );

  window.location.href =
    `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
};
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Contact &amp; Inquiries</span>
          </div>
          <h2 className="section-title">
            Let's Start a <br />
            <span className="gradient-text">Conversation</span>
          </h2>
         <p className="section-subtitle">
  Feel free to contact me for internship opportunities, project collaborations, and professional discussions.
</p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-col">
            <div className="info-intro-card glass-card">
              <h3 className="info-col-title">Get in Touch Directly</h3>
              <p className="info-col-text">
                Whether you have an internship opening, want to discuss a Data Analyst role, or want to collaborate on software projects, my inbox is always open!
              </p>

              {/* Contact Channels */}
              <div className="contact-methods-list">
                {/* Email Box */}
                <div className="contact-method-card">
                  <div className="method-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Direct Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="method-value">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="copy-btn"
                    title="Copy Email Address"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check size={16} className="text-green" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="contact-method-card">
                  <div className="method-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Phone Number</span>
                    <a href={`tel:${personalInfo.phone}`} className="method-value">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="contact-method-card">
                  <div className="method-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Location</span>
                    <span className="method-value">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Connect */}
              <div className="social-connect-block">
                <span className="social-connect-title">Social &amp; Coding Profiles</span>
                <div className="social-connect-buttons">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="social-tag-btn"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-tag-btn"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="social-tag-btn"
                  >
                    <Code size={16} />
                    <span>Coding Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="form-card glass-card">
              <h3 className="form-heading">Send a Message</h3>
              <p className="form-subheading">
                Fill out the quick form below and I will get back to you promptly.
              </p>

              {submitted ? (
                <div className="form-success-alert">
                  <CheckCircle2 size={36} className="success-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you for reaching out. I'll review your note and respond as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {errorMsg && <div className="form-error-banner">{errorMsg}</div>}

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="name" className="field-label">
                        Your Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Recruiter / Team Lead"
                        className="field-input"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="field-label">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="field-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject" className="field-label">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="field-input field-select"
                    >
                      <option value="Data Analyst / IT Internship Opportunity">
                        Data Analyst / IT Internship Opportunity
                      </option>
                      <option value="Full-Stack Development Opportunity">
                        Full-Stack Development Opportunity
                      </option>
                      <option value="Project Collaboration / Hackathon">
                        Project Collaboration / Hackathon
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="field-label">
                      Your Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Hello, I came across your portfolio and would like to discuss a Data Analyst or software opportunity..."
                      className="field-input field-textarea"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
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
}
