import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">HARI VARADHAN</span>
          </h1>
          <h2 className="hero-subtitle">Java Full Stack Developer</h2>
          <p className="hero-description">
            I create beautiful, functional, and user-centered digital experiences.
            Welcome to my portfolio!
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            {!imageError ? (
              <img 
                src="/images/IMG_20250523_002544_470.jpeg" 
                alt="Hari Varadhan" 
                className="avatar-image"
                onError={() => setImageError(true)}
              />
            ) : null}
            <div className={`avatar-emoji-overlay ${imageError ? 'avatar-fallback' : ''}`}>
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;

