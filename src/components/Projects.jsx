import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Sparkles,
  Info,
  CheckCircle2,
  Layers
} from 'lucide-react';

import { projectsData, personalInfo } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import './Projects.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    'All',
    ...new Set(projectsData.map((p) => p.category).filter(Boolean))
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter(
          (p) => p.category === selectedCategory
        );

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Portfolio & Work</span>
          </div>

          <h2 className="section-title">
            Featured Projects & <br />
            <span className="gradient-text">
              Practical Applications
            </span>
          </h2>

          <p className="section-subtitle">
            Explore my academic projects, creative ideas,
            and practical applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter-bar">
          {categories.map((category, index) => (
            <button
              key={`${category}-${index}`}
              className={`project-filter-btn ${
                selectedCategory === category ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id || project.title || index}
              className="project-card glass-card"
            >

              {/* Project Image */}
              <div className="project-img-wrapper">

                {/* Fallback shown when image is unavailable */}
                <div className="project-image-placeholder">
                  <Layers size={48} />
                  <span>Project Preview</span>
                </div>

                {project.image && (
                  <img
                    src={project.image}
                    alt=""
                    className="project-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}

                {/* Category Badge */}
                <div className="project-img-badge-overlay">
                  <span className="project-category-tag">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="project-featured-tag">
                      ★ Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="project-body">

                <h3 className="project-card-title">
                  {project.title}
                </h3>

                <p className="project-tagline">
                  {project.tagline}
                </p>

                <p className="project-desc">
                  {project.summary}
                </p>

                {/* Technologies */}
                <div className="project-tech-pills">
                  {(project.techStack || [])
                    .slice(0, 4)
                    .map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-pill"
                      >
                        {tech}
                      </span>
                    ))}

                  {(project.techStack || []).length > 4 && (
                    <span className="tech-pill-more">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Project Metric */}
                {project.metrics && (
                  <div className="project-metric-banner">
                    <CheckCircle2
                      size={14}
                      className="metric-icon"
                    />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Buttons */}
                <div className="project-footer-actions">

                  <button
                    className="btn btn-secondary btn-sm details-btn"
                    onClick={() =>
                      setActiveModalProject(project)
                    }
                  >
                    <Info size={15} />
                    <span>Project Details</span>
                  </button>

                  <div className="external-links-group">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-icon-link"
                        title="View GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-icon-link"
                        title="View Live Project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="more-projects-box glass-card">

          <div className="more-projects-text">
            <h4>Explore My GitHub</h4>
            <p>
              Visit my GitHub profile to explore my projects
              and source code.
            </p>
          </div>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <span>Visit My GitHub</span>
            <ExternalLink size={16} />
          </a>

        </div>
      </div>

      {/* Project Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}