import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Power Your Business with Smarter Technology</h2>
        <p>
          <strong>NP Computers</strong> delivers modern IT solutions, reliable
          systems, and expert support designed for long-term growth.
        </p>

        <a href="/contact" className="btn-cta">
          Speak With Our Experts
        </a>
      </div>
    </section>
  );
};

export default CTA;
