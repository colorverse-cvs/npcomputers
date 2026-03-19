import "./Footer.css";
import logo from "../../assets/np-logo.webp";
import footerVideo from "../../assets/hero.mp4";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import insta from "../../assets/insta.png";
import whatsapp from "../../assets/whatsapp.png";
import map from "../../assets/map.png";
import call from "../../assets/call.png";
import mail from "../../assets/mail.png";


const Footer = () => {
  return (
    <footer className="np-footer">

      {/* Background Video */}
      <video autoPlay muted loop playsInline className="footer-video">
        <source src={footerVideo} type="video/mp4" />
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

          <p>
            <div class="footer-icons"> <i class="bi bi-telephone-fill"></i></div>
            Rahata, Shirdi,<br /> Maharashtra 423107
          </p>

          <p>
            <div class="footer-icons"> <i class="bi bi-envelope-fill"></i></div>
            <a className="footer-phone" href="tel:+918080081972">+91 80800 81972</a>
          </p>

          <p>
           <div class="footer-icons"> <i class="bi bi-geo-alt-fill"></i></div>
            <a className="footer-email" href="mailto:npinfotech2627@gmail.com">
              npinfotech2627@gmail.com
            </a>
          </p>

        </div>

        {/* Social */}
<div className="footer-social">
  <h4>Follow Us</h4>

  <div className="social-icons">
    <a href="#">
      <img src={insta} alt="insta" />
    </a>

    <a href="#">
      <img src={whatsapp} alt="whatsapp" />
    </a>

    <a href="#">
      <img src={facebook} alt="facebook" />
    </a>

    <a href="#">
      <img src={youtube} alt="youtube" />
    </a>
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