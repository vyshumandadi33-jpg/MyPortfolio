import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayName = personalInfo.name && !personalInfo.name.includes('[')
    ? personalInfo.name.split(' ')[0]
    : (personalInfo.shortName || 'Portfolio');

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo">
          <div className="logo-icon-box">
            <Terminal size={20} className="logo-icon" />
          </div>
          <span className="logo-text">
            {displayName}
            <span className="logo-dot">.it()</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                    {isActive && <span className="active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Contact / Hire CTA */}
          <a
            href="#contact"
            className="btn btn-primary btn-sm resume-nav-btn"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
          >
            <Sparkles size={16} />
            <span>Connect</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mobile-drawer-footer">
          <a
            href="#contact"
            className="btn btn-primary w-full"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
          >
            <Sparkles size={16} />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
}
