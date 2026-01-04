import React from "react";
import "./Hero.css";
import herovideo from "../../assets/hero2.WEBM"
import logo from "../../assets/np-logo.webp";

const Hero = () => {
  return (
<section className="hero">
  {/* Background Video */}
  <div className="hero-video">
    <video autoPlay muted loop playsInline>
      <source src={herovideo} type="video/WEBM" />
    </video>
  </div>

  {/* Dark Overlay */}
  <div className="hero-overlay" />

  {/* Content */}
  <div className="hero-container">
<div className="hero-left">
  <img src={logo} alt="NP Computers Rahata" className="hero-logo" />
  <div className="line-animate" />
  <h1 className="hero-title">
    Powering Your Digital <span>World</span> with <span className="hero-np-name">NP Computers</span>
  </h1>
  <p className="hero-text">
    High-performance PCs, laptops, accessories, and expert repair services — 
    bringing technology closer to you with trust and speed.
  </p>
  <div className="hero-actions">
    <button className="btn-primary">Explore Our Services</button>
    <button className="btn-secondary">Get in Touch</button>
  </div>
</div>

  </div>

  {/* Hero Bottom Curve */}
  <div className="hero-curve">
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
      <path d="M0,0 C720,100 720,100 1440,0 L1440,100 L0,100 Z" fill="#fff" />
    </svg>
  </div>
</section>

  );
};

export default Hero;
