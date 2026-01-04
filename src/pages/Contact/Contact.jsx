import "./Contact.css";
import logo from "../../assets/np-logo.webp";

const Contact = () => {
  return (
    <section className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <img src={logo} alt="NP Technologies" />
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Get in touch for support, inquiries, or feedback.
          </p>
        </div>
      </div>

      {/* CONTACT FORM & INFO */}
      <div className="contact-container">

        {/* FORM */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="contact-info">
          <h2>Our Contact Info</h2>
          <p><i className="bi bi-geo-alt"></i> 123 Main Street, City, Country</p>
          <p><i className="bi bi-telephone"></i> +91 123 456 7890</p>
          <p><i className="bi bi-envelope"></i> support@nptech.com</p>
          <p><i className="bi bi-clock"></i> Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>

      </div>

    </section>
  );
};

export default Contact;
