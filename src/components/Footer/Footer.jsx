import "./Footer.css";
import logo from "../../assets/np-logo.webp";
import footerVideo from "../../assets/hero.mp4";

const Footer = () => {
  return (
    <footer className="np-footer">

      {/* Background Video */}
      <video autoPlay muted loop playsInline className="footer-video">
        <source src={footerVideo} type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="footer-overlay"></div>

      <div className="footer-container">

        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="NP Computers" />
          <p>
            NP Computers - Your trusted partner for IT solutions,
            computer sales, and repair services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><i className="bi bi-geo-alt"></i> 123 Main Street, City</p>
          <p><i className="bi bi-telephone"></i> +91 123 456 7890</p>
          <p><i className="bi bi-envelope"></i> support@nptech.com</p>
        </div>

        {/* Social */}
<div className="footer-social">
  <h4>Follow Us</h4>
  <div className="social-icons">
    <a href="#"><i className="bi bi-facebook"></i></a>
    <a href="#"><i className="bi bi-twitter"></i></a>
    <a href="#"><i className="bi bi-instagram"></i></a>
    <a href="#"><i className="bi bi-linkedin"></i></a>
  </div>
</div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NP Computers. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;