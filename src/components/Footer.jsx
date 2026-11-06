import React from 'react';
import { ArrowUp, Terminal, Github, Linkedin, Code, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const displayName = personalInfo.name && !personalInfo.name.includes('[')
    ? personalInfo.name.split(' ')[0]
    : (personalInfo.shortName || 'Portfolio');

  const copyrightName = personalInfo.name && !personalInfo.name.includes('[')
    ? personalInfo.name
    : 'B.Tech IT Student Portfolio';

  return (
    <footer className="footer-wrap">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-main-row">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              <div className="logo-icon-box">
                <Terminal size={18} className="logo-icon" />
              </div>
              <span className="logo-text">
                {displayName}
                <span className="logo-dot">.it()</span>
              </span>
            </a>
            <p className="footer-tagline">
              3rd-year B.Tech Information Technology student &amp; aspiring Data Analyst driven to solve real-world problems through data-driven insights, clean code, and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect &amp; Follow</h4>
            <div className="footer-social-icons">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title="Coding Profile"
              >
                <Code size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                className="footer-social-btn"
                title="Email Me"
              >
                <Mail size={18} />
              </a>
            </div>
            <div className="footer-status-tag">
              <span className="live-dot"></span>
              <span>Open to Data Analyst &amp; IT Roles</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {copyrightName}. Built with React, Vite &amp; Modern Dark CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Scroll to top of page"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
