import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header Image */}
        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} className="modal-img" />
          <div className="modal-image-overlay">
            <span className="modal-category-badge">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="modal-content">
          {/* Overview */}
          <div className="modal-section">
            <h3 className="modal-sec-title">
              <Layers size={18} className="modal-icon-cyan" />
              <span>Project Overview & Architecture</span>
            </h3>
            <p className="modal-summary">{project.summary}</p>
          </div>

          {/* Key Engineering Features */}
          <div className="modal-section">
            <h3 className="modal-sec-title">
              <Cpu size={18} className="modal-icon-purple" />
              <span>Key Technical Highlights & Features</span>
            </h3>
            <ul className="modal-features-list">
              {project.features.map((feat, idx) => (
                <li key={idx} className="modal-feature-item">
                  <CheckCircle2 size={16} className="feature-check-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h3 className="modal-sec-title">
              <BarChart3 size={18} className="modal-icon-cyan" />
              <span>Technologies & Tools Employed</span>
            </h3>
            <div className="modal-tech-tags">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="modal-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Metric */}
          {project.metrics && (
            <div className="modal-metric-card">
              <span className="metric-badge">System Metric / Impact</span>
              <p className="metric-text">{project.metrics}</p>
            </div>
          )}

          {/* Modal Actions */}
          <div className="modal-actions-footer">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <span>Launch Live Preview</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <Github size={18} />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
