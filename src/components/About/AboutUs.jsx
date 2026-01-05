import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import ceoImg from "../../assets/about-us-p.png";

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("active");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <section className="np-about" ref={sectionRef}>
      <div className="np-about-wrap">

        {/* CONTENT */}
        <div className="np-about-content">

          {/* BACK BRAND TEXT */}
          <div className="np-about-bgtext">NP COMPUTERS</div>

          <span className="np-about-tag">ABOUT US</span>

          <h2 className="np-about-heading">
            Technology Built on Trust
          </h2>

          <p>
            NP Computers delivers reliable, future-ready computer solutions
            designed for performance, stability, and long-term value.
          </p>

          <p>
            We focus on precision hardware, professional repairs, and
            transparent IT services that businesses and individuals can trust.
          </p>

          <div className="np-about-founder">
            <strong>Founder & CEO</strong>
            <span> NP Computers</span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="np-about-image">
          <div className="image-gradient"></div>
          <img src={ceoImg} alt="Founder of NP Computers" />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
