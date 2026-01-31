import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

import aboutBg from "../../assets/bc-2.JPG";
import productsBg from "../../assets/bc-7.jpeg";
import servicesBg from "../../assets/bc-7.jpeg";
import contactBg from "../../assets/bc-7.jpeg";

const Breadcrumb = () => {
  const location = useLocation();

  const pagesConfig = {
    "/about": {
      title: "About NP Computer",
      subtitle: "Your trusted partner for computer sales, repairs, and IT solutions.",
      bg: aboutBg,
    },
    "/products": {
      title: "Our Products",
      subtitle: "Explore high-quality laptops, desktops, and accessories.",
      bg: productsBg,
    },
    "/Services": {
      title: "Our Services",
      subtitle: "Expert repair, upgrades, networking, and IT support.",
      bg: servicesBg,
    },
    "/contact": {
      title: "Contact NP Computer",
      subtitle: "Get in touch with us for reliable computer solutions.",
      bg: contactBg,
    },
  };

  const config = pagesConfig[location.pathname] || {};
  if (location.pathname === "/") return null;

  const pathnames = location.pathname.split("/").filter(Boolean);

const heroStyle = {
  backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0), #010c21),
    url(${config.bg})
  `,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundBlendMode: "darken",
};


  return (
    <div className="breadcrumb-hero" style={heroStyle}>
      <div className="breadcrumb-overlay">
        <div className="breadcrumb-content container">

          <div className="breadcrumb-header">
            <h2 className="breadcrumb-title">{config.title}</h2>
            <p className="breadcrumb-subtitle">{config.subtitle}</p>
          </div>

          <nav className="breadcrumb-nav">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>

              {pathnames.map((name, index) => {
                const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                const isLast = index === pathnames.length - 1;

                return (
                  <li
                    key={routeTo}
                    className={`breadcrumb-item ${isLast ? "active" : ""}`}
                  >
                    {isLast ? formatLabel(name) : <Link to={routeTo}>{formatLabel(name)}</Link>}
                  </li>
                );
              })}
            </ol>
          </nav>

        </div>
      </div>
    </div>
  );
};

const formatLabel = (str) =>
  str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default Breadcrumb;
