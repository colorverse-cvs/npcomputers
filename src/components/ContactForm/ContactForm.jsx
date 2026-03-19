import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <section className="contact-section">

      <h2 className="section-title">Contact Us</h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          rows="4"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
  );
};

export default ContactForm;