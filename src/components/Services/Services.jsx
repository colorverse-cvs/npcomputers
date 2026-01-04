import React, { useEffect } from "react";
import "./Services.css";

const servicesData = [
  {
    icon: "bi bi-laptop",
    title: "Computer Sales",
    desc: "High-performance laptops, desktops & accessories.",
    more: "Authorized brands, warranty support, and custom PC builds."
  },
  {
    icon: "bi bi-tools",
    title: "Repairs",
    desc: "Professional hardware & software repair services.",
    more: "Chip-level repairs, upgrades, virus removal & diagnostics."
  },
  {
    icon: "bi bi-headset",
    title: "IT Support",
    desc: "Reliable IT solutions for business & home users.",
    more: "AMC, networking, cloud support & on-site services."
  }
];

const Services = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".service-block");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <section className="services-section">

      {/* SVG TOP WAVE */}
<svg className="wave top" viewBox="0 0 1440 90" preserveAspectRatio="none">
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ffffffff" />
      <stop offset="50%" stopColor="#ffffffff" />
      <stop offset="100%" stopColor="#ffffffff" />
    </linearGradient>
  </defs>

  <path
    d="M0,40 C200,80 400,0 600,30 800,60 1000,10 1200,30 1400,50 1440,40 1440,40 L1440,0 L0,0 Z"
    fill="url(#waveGradient)"
  />
</svg>


      <h2>Our Services</h2>

      <div className="services-grid">
        {servicesData.map((s, i) => (
          <div className="service-block" key={i}>
            <div className="icon-wrapper">
              <i className={s.icon}></i>
            </div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
            <div className="service-more">{s.more}</div>
          </div>
        ))}
      </div>

      {/* SVG BOTTOM WAVE */}
<svg className="wave bottom" viewBox="0 0 1440 90" preserveAspectRatio="none">
  <defs>
    <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ffffffff" />
      <stop offset="50%" stopColor="#ffffffff" />
      <stop offset="100%" stopColor="#ffffffff" />
    </linearGradient>
  </defs>

  <path
    d="M0,30 C200,0 400,60 600,40 800,20 1000,70 1200,40 1400,20 1440,30 1440,30 L1440,90 L0,90 Z"
    fill="url(#waveGradientBottom)"
  />
</svg>


    </section>
  );
};

export default Services;
