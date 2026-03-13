import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <section className="feedback-section">

      <h2 className="section-title">Customer Feedback</h2>

      <div className="feedback-grid">

        <div className="feedback-card">
          <p>
            ⭐⭐⭐⭐⭐  
            Very fast laptop repair service. Highly recommended.
          </p>
          <h4>Rahul Patil</h4>
        </div>

        <div className="feedback-card">
          <p>
            ⭐⭐⭐⭐⭐  
            CCTV installation done perfectly for my shop.
          </p>
          <h4>Amit Sharma</h4>
        </div>

        <div className="feedback-card">
          <p>
            ⭐⭐⭐⭐⭐  
            Best place to buy computer accessories.
          </p>
          <h4>Sneha Kulkarni</h4>
        </div>

      </div>

    </section>
  );
};

export default Feedback;