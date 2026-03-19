import React, { useState } from "react";
import "./Contact.css";
import ContactUsanimation from "../../assets/Contact-Us-animation.gif"

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "c9549959-245f-4130-92d0-dcd229f28f63");
    formData.append("subject", "New Contact Form Submission");
    formData.append("from_name", formData.get("fullName"));
formData.append("subject", "New Contact Form Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");
        e.target.reset();
      } else {
        alert("Submission failed");
      }
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      {/* Decorative Vectors */}
<div className="contact-vectors">
  <span className="blob blob-1"></span>
  <span className="blob blob-2"></span>
  <span className="ring"></span>
  <span className="dots"></span>
</div>

      <div className="container">
        <div className="contact-wrapper">

          <div className="contact-right">
            <div className="glass-card">

              <h3 className="form-title">Contact <span>Us</span></h3>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
                <input
                  type="text"
                  name="subject_line"
                  placeholder="Subject"
                  required
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>

                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className="contact-left">
            <h1>
              Your Trusted<br />
              <span>Computer Shop</span>
            </h1>

            <p>
              NP Computer offers complete computer and laptop solutions under one
              roof. From sales and upgrades to repair and maintenance, we provide
              fast, reliable, and affordable services for homes, students, and
              offices. Contact us today for the right solution at the right price.
            </p>

            <img
              src={ContactUsanimation}
              alt="contact visual"
            />
          </div>




        </div>
      </div>
      <div className="map-section">
  <div className="map-wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.0770722734806!2d74.47756722361049!3d19.709342572618453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc59e8e8aff89f%3A0xcebaa42119583154!2sNP%20COMPUTERS%20AND%20INFOTECH!5e0!3m2!1sen!2sin!4v1769968915413!5m2!1sen!2sin"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
           
</div>
 <div className="contact-info horizontal">

            <div className="info-item">
              <div className="info-icon"> <i className="bi bi-telephone-fill"></i></div>
              <div className="info-text">
                <p>+91 80800 81972</p>
                <span>Available 24/7</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><i className="bi bi-envelope-fill"></i></div>
              <div className="info-text">
                <p>npinfotech2627@gmail.com</p>
                <span>We reply within 24 hours</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"> <i className="bi bi-geo-alt-fill"></i></div>
              <div className="info-text">
                <p>
                  Rahata, Shirdi,<br />
                  Maharashtra 423107
                </p>
                <span>Visit our office</span>
              </div>
            </div>

          </div>
    </section>
  );
};

export default Contact;
