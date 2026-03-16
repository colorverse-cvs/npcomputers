import React, { useState } from "react";
import "./InquiryPopup.css";

const InquiryPopup = ({ isOpen, onClose, productName = "" }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    formData.append("access_key", "f4c6070b-c96b-40f8-98be-abceb03dc532");

    // Subject fix (undefined avoid)
    formData.append(
      "subject",
      productName
        ? `New Inquiry for ${productName}`
        : "New Inquiry Form Submission"
    );

    formData.append("from_name", formData.get("fullName"));

    // Product only if available
    if (productName) {
      formData.append("product", productName);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Inquiry sent successfully!");
        e.target.reset();
        onClose();
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
    <div className="popup-overlay">
      <div className="popup-form">

        <button className="popup-close-btn" onClick={onClose}>
          ✕
        </button>

        <h3>Inquiry Form</h3>

        {/* Product name only if exists */}
        {productName && (
          <p className="selected-product">
            Enquiry for: <strong>{productName}</strong>
          </p>
        )}

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

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your requirement"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default InquiryPopup;