import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import { educationData } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <br />
            <span className="gradient-text">Scholastic Journey</span>
          </h2>
          
          <p className="section-subtitle">
  My academic journey, achievements, and educational qualifications.
</p>
        </div>

        {/* Education Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-spine"></div>

          {educationData.map((item, idx) => (
            <div key={idx} className="timeline-node">
              {/* Timeline marker with graduation cap */}
              <div className="timeline-marker">
                <GraduationCap size={18} />
              </div>

              {/* Education Card */}
              <div className="timeline-card glass-card">
                <div className="edu-card-header">
                  <div className="edu-title-block">
                    <span className="edu-badge">{item.badge}</span>
                    <h3 className="edu-degree">{item.degree}</h3>
                    <h4 className="edu-institution">{item.institution}</h4>
                  </div>

                  <div className="edu-score-pill">
                    <Award size={16} />
                    <span>{item.score}</span>
                  </div>
                </div>

                <div className="edu-meta-row">
                  <div className="edu-meta-item">
                    <Calendar size={15} />
                    <span>{item.period}</span>
                  </div>
                  <div className="edu-meta-item">
                    <MapPin size={15} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="edu-description">{item.description}</p>

                {/* Key Coursework Tags */}
                {item.courses && item.courses.length > 0 && (
                  <div className="edu-courses-block">
                    <div className="courses-label">Key Subjects & Core Coursework:</div>
                    <div className="courses-tags">
                      {item.courses.map((course, cIdx) => (
                        <span key={cIdx} className="course-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="edu-achievements-block">
                    <div className="achievements-label">Honors & Accomplishments:</div>
                    <ul className="achievements-list">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="achievement-item">
                          <CheckCircle2 size={15} className="ach-icon" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
