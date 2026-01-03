import React from "react";
import "./Hero.css";
import logo from "../../assets/np-logo.webp";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Video */}
      <div className="hero-video">
        <video autoPlay muted loop playsInline>
          <source
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1607614/Architecture%20-%20303%20compressed.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-container">
        <div className="hero-left">
          <img src={logo} alt="NP Technologies" className="hero-logo" />

          <div className="line-animate" />

          <h1 className="hero-title">
            The Group of <span>Technologies</span>
          </h1>

          <p className="hero-text">
            Delivering secure, scalable and professional IT solutions for
            businesses and enterprises.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Our Services</button>
            <button className="btn-secondary">Contact</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
