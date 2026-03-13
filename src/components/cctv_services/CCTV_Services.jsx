import React from "react";
import "./CCTV_Services.css";
import img1 from "../../assets/cctv-1.webp";
import img2 from "../../assets/cctv-2.webp";
import img3 from "../../assets/cctv-3.webp";
import img4 from "../../assets/cctv-4.webp";

const CCTV_Services = () => {
  return (
    <section className="cctv-about-section py-5">
      <div className="cctv-container">
        <div className="row align-items-center">

          {/* LEFT IMAGE GRID */}

          <div className="col-lg-6">
            <div className="cctv-image-grid">

              <img src={img1} className="cctv-grid-img img1" alt="cctv" />
              <img src={img2} className="cctv-grid-img img2" alt="cctv" />
              <img src={img3} className="cctv-grid-img img3" alt="cctv" />
              <img src={img4} className="cctv-grid-img img4" alt="cctv" />

            </div>
          </div>


          {/* RIGHT CONTENT */}

          <div className="col-lg-6 cctv-content">

            <h2 className="cctv-title">
              NP Computers - <br />Trusted Leader in the  CCTV Industry.
            </h2>

            <p className="cctv-text">
              With a steadfast commitment to excellence, we provide
              state-of-the-art CCTV solutions that safeguard homes,
              businesses, and communities.
            </p>


            <div className="cctv-feature-box">

              <div className="cctv-icon orange">
                <i className="bi bi-cpu"></i>
              </div>

              <div>
                <h5>Cutting-Edge Technology</h5>
                <p>
                  We use the latest surveillance technology to provide
                  unmatched clarity and reliability.
                </p>
              </div>

            </div>


            <div className="cctv-feature-box">

              <div className="cctv-icon blue">
                <i className="bi bi-shield-check"></i>
              </div>

              <div>
                <h5>Expertise and Experience</h5>
                <p>
                  Our team of professionals brings extensive knowledge
                  and experience in the security industry.
                </p>
              </div>

            </div>


            <div className="cctv-feature-box">

              <div className="cctv-icon yellow">
                <i className="bi bi-people"></i>
              </div>

              <div>
                <h5>Customer-Centric Approach</h5>
                <p>
                  We believe in building lasting relationships with
                  our clients by delivering exceptional service.
                </p>
              </div>

            </div>

            <button className="cctv-btn">
              MORE ABOUT US
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CCTV_Services;