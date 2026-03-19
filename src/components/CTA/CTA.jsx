import React, { useState } from "react";
import "./CTA.css";
import ctcbg from "../../assets/cta-bg.MP4";
import InquiryPopup from "../../components/InquiryPopup/InquiryPopup";

const CTA = () => {
   const [openPopup, setOpenPopup] = useState(false);

  return (
    <section className="cta-section d-flex align-items-center">
      {/* Background Video */}
      <video className="cta-video" autoPlay muted loop playsInline>
        <source src={ctcbg} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="cta-gradient-overlay"></div>
      <div className="cta-text-backdrop"></div>

      {/* Content */}
      <div className="container position-relative z-3">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10 text-center">
            <h2 className="cta-title">
              Power Your Business with Smarter Technology
            </h2>

            <p className="cta-text">
              <strong>NP Computers</strong> delivers modern IT solutions,
              reliable systems, and expert support designed for long-term
              growth.
            </p>

            <button className="btn-cta" onClick={() => setOpenPopup(true)}>
              Speak With Our Experts
            </button>
          </div>
                <InquiryPopup
        isOpen={openPopup}
        onClose={() => setOpenPopup(false)}
      />
        </div>
      </div>
    </section>
  );
};

export default CTA;
