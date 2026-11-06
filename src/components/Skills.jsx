import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Database,
  Terminal,
  Sparkles,
  BarChart3,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((group) => group.category)];

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Programming & Databases':
        return <Database size={18} />;
      case 'Web & Full-Stack Development':
        return <Layout size={18} />;
      case 'Core IT & Analytics Foundations':
        return <BarChart3 size={18} />;
      default:
        return <Cpu size={18} />;
    }
  };

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((group) => group.category === selectedCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Skills & Tech Stack</span>
          </div>
          <h2 className="section-title">
            Technical Arsenal & <br />
            <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="section-subtitle">
            Focused on Python, SQL, Advanced Java, HTML/CSS/JavaScript, and Full-Stack web development.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skills-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-groups-wrapper">
          {filteredSkills.map((group, groupIdx) => (
            <div key={groupIdx} className="skill-group-block">
              {selectedCategory === 'All' && (
                <div className="group-header">
                  <div className="group-icon-wrap">{getCategoryIcon(group.category)}</div>
                  <h3 className="group-title">{group.category}</h3>
                </div>
              )}

              <div className="skills-card-grid">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-card glass-card">
                    <div className="skill-top-row">
                      <div className="skill-name-wrap">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className="skill-badge-level">{skill.level}</span>
                      </div>
                      <span className="skill-percent">{skill.rating}%</span>
                    </div>

                    <p className="skill-desc">{skill.desc}</p>

                    {/* Animated Progress Bar */}
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.rating}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="skills-summary-banner glass-card">
          <div className="banner-metric">
            <span className="metric-val gradient-text">Python &amp; SQL</span>
            <span className="metric-sub">Data Analytics &amp; Querying</span>
          </div>
          <div className="banner-divider"></div>
          <div className="banner-metric">
            <span className="metric-val gradient-text">Advanced Java</span>
            <span className="metric-sub">Object-Oriented Programming</span>
          </div>
          <div className="banner-divider"></div>
          <div className="banner-metric">
            <span className="metric-val gradient-text">HTML, CSS &amp; JS</span>
            <span className="metric-sub">Full-Stack Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}
