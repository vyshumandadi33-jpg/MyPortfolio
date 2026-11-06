import React from 'react';
import {
  Award,
  ExternalLink,
  Calendar,
  Sparkles,
  ShieldCheck,
  Hash
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Certifications &amp; Courses</span>
          </div>
          <h2 className="section-title">
            Certifications &amp; <br />
            <span className="gradient-text">Verified Credentials</span>
          </h2>
        <p>
  Continuously improving my skills in Java, Python, JavaScript, HTML, CSS, and MongoDB while exploring new technologies and building practical projects.
</p>
        </div>

        {/* Certifications Grid */}
        <div className="certs-grid">
          {certificationsData.map((cert, idx) => (
            <div key={idx} className="cert-card glass-card">
              {/* Card Top Row: Issuer & Badge */}
              <div className="cert-top-bar">
                <div className={`cert-badge-pill ${cert.iconBg}`}>
                  <ShieldCheck size={16} />
                  <span>{cert.badge}</span>
                </div>
                <div className="cert-date-wrap">
                  <Calendar size={13} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">{cert.issuer}</div>

              {/* Description */}
              <p className="cert-description">{cert.description}</p>
{/* Skills Tags */}
<div className="cert-skills-wrap">
  {(cert.skills || []).map((skill, sIdx) => (
    <span key={sIdx} className="cert-skill-tag">
      {skill}
    </span>
  ))}
</div>
              {/* Card Footer with Credential ID & Verify Link */}
              <div className="cert-footer">
                <div className="cert-id-block">
                  <Hash size={13} className="hash-icon" />
                  <span className="id-label">ID:</span>
                  <span className="id-value">{cert.credentialId}</span>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-verify-link"
                >
                  <span>Verify</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Callout */}
        <div className="cert-notice-box glass-card">
          <Award size={28} className="notice-icon" />
          <div className="notice-content">
            <h4>Continuous Learning &amp; Skill Development</h4>
            <p>
              Currently expanding expertise in <strong>Data Analytics, SQL querying, Python libraries</strong>, and preparing for competitive technical hackathons and certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
