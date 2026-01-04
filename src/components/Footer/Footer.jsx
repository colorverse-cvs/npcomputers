import "./Footer.css";
import logo from "../../assets/np-logo.webp";

const Footer = () => {
  return (
    <footer className="np-footer">
      <div className="footer-container">

        {/* LOGO & ABOUT */}
        <div className="footer-logo">
          <img src={logo} alt="NP Computers" />
          <p>
            NP Computers - Your trusted partner for IT solutions, computer sales, and repair services.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/repair">Repair</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Support</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><i className="bi bi-geo-alt"></i> 123 Main Street, City, Country</p>
          <p><i className="bi bi-telephone"></i> +91 123 456 7890</p>
          <p><i className="bi bi-envelope"></i> support@nptech.com</p>
        </div>

        {/* SOCIAL LINKS */}
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
