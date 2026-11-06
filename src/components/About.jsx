import React from 'react';
import {
  GraduationCap,
  BookOpen,
  MapPin,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  Database,
  BarChart3,
  Code2
} from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolioData';
import './About.css';

export default function About() {
  const iconList = [BarChart3, Database, Code2, Layers];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About Data &amp; Software, <br />
            <span className="gradient-text">Committed to Continuous Learning</span>
          </h2>
          <p className="section-subtitle">
            An overview of my academic background, career aspirations as a Data Analyst, and core technical skills.
          </p>
        </div>

        {/* 2-Column About Grid */}
        <div className="about-grid">
          {/* Left Column: Narrative & Details */}
          <div className="about-bio-col">
            <div className="glass-card about-card">
              <h3 className="about-card-title">
                <span className="gradient-text-cyan">Background & Aspirations</span>
              </h3>

              <div className="bio-paragraphs">
                {aboutData.biography.map((para, idx) => (
                  <p key={idx} className="bio-p">
                    {para}
                  </p>
                ))}
              </div>

              {/* Quick Details List */}
              <div className="quick-details-grid">
                <div className="detail-item">
                  <GraduationCap size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">Degree</span>
                    <span className="detail-value">{personalInfo.degree}</span>
                  </div>
                </div>

                <div className="detail-item">
                  <BookOpen size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">College</span>
                    <span className="detail-value">{personalInfo.college}</span>
                  </div>
                </div>

                <div className="detail-item">
                  <MapPin size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="detail-item">
                  <Calendar size={18} className="detail-icon" />
                  <div>
                    <span className="detail-label">Current Academic Standing</span>
                    <span className="detail-value">{personalInfo.currentYear}</span>
                  </div>
                </div>
              </div>

              {/* CTA Link */}
              <div className="about-cta-row">
                <a href="#skills" className="btn btn-secondary btn-sm">
                  <span>Explore My Technical Skills</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights & Areas of Interest */}
          <div className="about-pillars-col">
            <h3 className="pillars-heading">Key Strengths & Competencies</h3>
            
            <div className="pillars-list">
              {aboutData.highlights.map((item, idx) => {
                const IconComponent = iconList[idx % iconList.length];
                return (
                  <div key={idx} className="pillar-card glass-card">
                    <div className="pillar-icon-box">
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h4 className="pillar-title">{item.title}</h4>
                      <p className="pillar-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Core Interests Tags */}
            <div className="interests-card glass-card">
              <h4 className="interests-title">Core Technical Focus Areas</h4>
              <div className="tags-container">
                {aboutData.interests.map((interest, idx) => (
                  <span key={idx} className="interest-tag">
                    <CheckCircle2 size={14} className="tag-check" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
