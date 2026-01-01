import React from "react";
import "./About.css";

export default function AboutUs() {
  return (
    <section className="about-section py-5">
      <div className="container position-relative">

        {/* Left & Right Decorative Vectors */}
        <div className="vector-left"></div>
        <div className="vector-left-small"></div>

        <div className="vector-right"></div>
        <div className="vector-right-small"></div>

        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h5 className="section-title mb-4">ABOUT US</h5>
            <h1 className="about-heading">
              We Provide Quality Computer & Mobile Repair Services
            </h1>

            <p className="about-desc">
              Lorem Ipsum Dolor Sit Amet, Consectetur AdipiscinE Tellus, Luctus
              Nec Ullamcorper Mattis, Pulvinr Dapius Leo. Greater Great Set Seasons
              Praesent auctor facilisis.
            </p>

            <p className="about-desc">
              Greater great set seasons was morning creepeth all made replen fisher
              night to. She to fourth does cattle also be days second sit given can
              itself you good for better solution. Morning creepeth all made replen
              fisher night to.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center">
            <div className="image-wrapper fade-in">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
                className="img-fluid about-img"
                alt="Repair"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
