import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Ambient background glows for the dark blue and purple theme */}
      <div className="ambient-glow-wrapper" aria-hidden="true">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Home / Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Education & Qualifications */}
        <Education />

        {/* Projects Section with Live Demos & GitHub Links */}
        <Projects />

        {/* Industry Certifications */}
        <Certifications />

        {/* Contact & Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
