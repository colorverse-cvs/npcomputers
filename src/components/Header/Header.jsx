import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg custom-header">
      <div className="container header-container">
        <a className="navbar-brand logo-text" href="#">
          NP Computers
        </a>
        {/* Left Menu */}
        <ul className="navbar-nav left-menu d-none d-lg-flex">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Products</a>
          </li>
        </ul>

        <div className="right-buttons">
          <a className="btn contact-btn" href="#">Contact</a>
          <a className="btn enquiry-btn" href="#">Enquiry</a>
        </div>
      </div>
    </nav>
  );
}
