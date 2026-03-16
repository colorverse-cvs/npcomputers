import React, { useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import herovideo from "../../assets/hero3.WEBM"
import logo from "../../assets/np-logo.webp";
import InquiryPopup from "../../components/InquiryPopup/InquiryPopup";

const Hero = () => {

  const [openPopup, setOpenPopup] = useState(false);


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
            <span>Powering</span> Your Digital <br />World with <span className="hero-np-name">NP Computers</span>
          </h1>
          <p className="hero-text">
            High-performance PCs, laptops, accessories, and expert repair services —
            bringing technology closer to you with trust and speed.
          </p>
          <div className="hero-actions">
            <a href="/Services" className="btn-primary">
              Explore Our Services
            </a>
            <button
              onClick={() => setOpenPopup(true)}
              className="btn-secondary"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      {/* Popup */}
      <InquiryPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />

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
