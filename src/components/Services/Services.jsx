import React from "react";
import "./Services.css";

const servicesData = [
  { icon: "bi bi-laptop", title: "Computer Sales", desc: "Laptops, desktops, and accessories." },
  { icon: "bi bi-tools", title: "Repairs", desc: "Hardware and software repair solutions." },
  { icon: "bi bi-headset", title: "IT Support", desc: "Technical support for individuals and businesses." },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, idx) => (
          <div className="service-block" key={idx}>
            <div className="icon-wrapper">
              <i className={service.icon}></i>
            </div>
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
