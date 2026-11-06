import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Code,
  Mail,
  Database
} from 'lucide-react';

import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const roles = [
    'B.Tech Information Technology (3rd Year)',
    'Aspiring Software Engineer',
    'Full-Stack Developer',
    'Java & Python Programmer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">

        {/* Left Column: Bio & CTAs */}
        <div className="hero-content">

          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="pulse-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          <h1 className="hero-title">
            Building Modern <br />
            <span className="gradient-text">
              Web Applications
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="hero-typing-wrap">
            <span className="typing-prefix">&gt; </span>
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>

          {/* Description */}
          <p className="hero-description">
            Hello, I am{' '}
            <strong className="highlight-white">
              {personalInfo.name}
            </strong>
            , a 3rd-year Information Technology student aspiring to
            become a Software Engineer. I enjoy building web
            applications and improving my skills in Java, Python,
            JavaScript, HTML, CSS, and MongoDB basics.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Featured Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download="Mandadi-Vyshnavi-Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="hero-socials">
            <span className="social-label">Connect:</span>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>

            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="Coding Profile"
            >
              <Code size={20} />
            </a>

            <a
              href={personalInfo.socialLinks.email}
              className="social-icon-btn"
              title="Send Direct Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Terminal Card */}
        <div className="hero-visual">

          <div className="terminal-card glass-card">

            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>

              <div className="terminal-title">
                student_profile.json
              </div>

              <div className="terminal-badge">
                IT_YEAR_3
              </div>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body">
              <pre className="terminal-code">
                <code>
                  <span className="token-keyword">const</span>{' '}
                  <span className="token-variable">
                    studentProfile
                  </span>{' '}
                  = {'{'}
                  <br />

                  &nbsp;&nbsp;
                  <span className="token-property">name:</span>{' '}
                  <span className="token-string">
                    "{personalInfo.name}"
                  </span>,
                  <br />

                  &nbsp;&nbsp;
                  <span className="token-property">degree:</span>{' '}
                  <span className="token-string">
                    "B.Tech Information Tech"
                  </span>,
                  <br />

                  &nbsp;&nbsp;
                  <span className="token-property">standing:</span>{' '}
                  <span className="token-string">
                    "3rd Year"
                  </span>,
                  <br />

                  &nbsp;&nbsp;
                  <span className="token-property">
                    careerFocus:
                  </span>{' '}
                  <span className="token-string">
                    "Software Engineer"
                  </span>,
                  <br />

                  &nbsp;&nbsp;
                  <span className="token-property">
                    coreSkills:
                  </span>{' '}
                  [
                  <br />

                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="token-string">"Java"</span>,
                  <br />

                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="token-string">"Python"</span>,
                  <br />

                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="token-string">
                    "JavaScript"
                  </span>,
                  <br />

                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="token-string">
                    "HTML & CSS"
                  </span>,
                  <br />

                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="token-string">
                    "MongoDB Basics"
                  </span>
                  <br />

                  &nbsp;&nbsp;],
                  <br />

                  &nbsp;&nbsp;
                  <span className="token-property">
                    seekingInternship:
                  </span>{' '}
                  <span className="token-boolean">true</span>
                  <br />

                  {'};'}
                </code>
              </pre>
            </div>

            {/* Terminal Footer */}
            <div className="terminal-footer">
              <div className="terminal-status">
                <span className="live-indicator"></span>
                <span>Ready for Internships & Projects</span>
              </div>

              <span className="terminal-lang">
                React &bull; Vite
              </span>
            </div>
          </div>

          {/* Floating Feature Badges */}
          <div className="floating-badge badge-top animate-float">
            <div className="badge-icon-wrap icon-purple">
              <Code size={18} />
            </div>

            <div>
              <div className="badge-title">
                Software Engineer
              </div>
              <div className="badge-sub">
                Career Goal
              </div>
            </div>
          </div>

          <div
            className="floating-badge badge-bottom animate-float"
            style={{ animationDelay: '2s' }}
          >
            <div className="badge-icon-wrap icon-cyan">
              <Database size={18} />
            </div>

            <div>
              <div className="badge-title">
                Java & Python
              </div>
              <div className="badge-sub">
                Programming Skills
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Stats Grid */}
      <div className="container">
        <div className="hero-stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <div className="stat-number-wrap">
                <span className="stat-number gradient-text">
                  {stat.value}
                </span>

                {stat.suffix && (
                  <span className="stat-suffix">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <div className="stat-label">
                {stat.label}
              </div>

              <div className="stat-note">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}