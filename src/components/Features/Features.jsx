import React from "react";
import "./Features.css";

const featuresData = [
  { icon: "bi bi-cpu", title: "Latest Technology", desc: "High-performance computers and accessories." },
  { icon: "bi bi-tools", title: "Expert Repair", desc: "Fast, reliable, and affordable repair services." },
  { icon: "bi bi-shield-check", title: "Trusted Support", desc: "Secure and dependable IT assistance." },
  { icon: "bi bi-graph-up", title: "Business Solutions", desc: "Tailored solutions for your business needs." },
];

const Features = () => {
  return (
    <section className="features-section">
      {/* <h2>Why Choose NP Computers</h2> */}
      <div className="features-container">
        {featuresData.map((feature, idx) => (
          <div className="feature-card" key={idx}>
            <i className={feature.icon}></i>
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
