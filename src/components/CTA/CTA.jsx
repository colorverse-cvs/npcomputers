import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section mt-5">
      <div className="cta-overlay"></div>

      <div className="cta-content">
        <h2>Ready to Upgrade Your Tech?</h2>
        <p>
          Contact <strong>NP Computers</strong> today and experience reliable,
          modern & professional IT solutions.
        </p>
        <a href="/contact" className="btn-cta">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CTA;
