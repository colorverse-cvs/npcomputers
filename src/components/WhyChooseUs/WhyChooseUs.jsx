import React, { useEffect } from "react";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: "bi bi-shield-check",
    title: "Trusted & Reliable",
    desc: "Years of experience delivering dependable computer and IT solutions."
  },
  {
    icon: "bi bi-cpu",
    title: "Latest Technology",
    desc: "Modern hardware and updated software for best performance."
  },
  {
    icon: "bi bi-people",
    title: "Expert Team",
    desc: "Certified professionals with strong technical expertise."
  },
  {
    icon: "bi bi-headset",
    title: "Quick Support",
    desc: "Fast response and reliable after-sales service."
  },
  {
    icon: "bi bi-cash-coin",
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges."
  }
];

const WhyChooseUs = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".why-item");
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

    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <section className="why-clean">
        {/* Background Vectors */}
<div className="why-vectors">
  <div className="dot-vector dv1"></div>
  <div className="dot-vector dv2"></div>
  <div className="dot-vector dv3"></div>
</div>


      <div className="why-container">
<div className="why-left">
  <h2>
    Why Choose <br />
    <span className="highlight-text">NP Computers</span>
  </h2>
  <div className="line-animate"></div>
  <p>
    We provide reliable computer solutions with a strong focus on
    quality, trust, and long-term support.
  </p>
</div>



        {/* RIGHT */}
        <div className="why-right">
          {reasons.map((item, i) => (
            <div className="why-item" key={i}>
              <span className="why-dot"></span>
              <div className="why-icon">
                <i className={item.icon}></i>
              </div>
              <div className="why-text">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
