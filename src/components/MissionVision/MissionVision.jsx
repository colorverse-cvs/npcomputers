import "./MissionVision.css";

import p1 from "../../assets/Compaq.jpg";
import p2 from "../../assets/HP.jpg";
import p3 from "../../assets/lenovo-logo.jpg";
import p4 from "../../assets/DELL.jpg";
import p5 from "../../assets/Toshiba.jpg";
import p6 from "../../assets/Acer.jpg";
import p7 from "../../assets/Samsung.jpg";
import p8 from "../../assets/Sony.jpg";
import p9 from "../../assets/Apple.jpg";




const MissionVision = () => {
const partners = [p1, p2, p3, p4, p5, p6, p7, p8, p9];
  return (
    <>
      {/* CTA AREA */}
      <div className="cta-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <div className="cta-text">
                <h1>
                  We Provide <span>Quality</span> Services
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                  have suffered in some form by injected humour.
                </p>
              </div>

              <div className="mb-20 mt-10">
                <a href="tel:+21236547898" className="cta-border-btn">
                  <i className="bi bi-headset"></i> +91 80800 81972
                </a>
              </div>

              <a href="/contact" className="theme-btn">
                Contact Now <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COUNTER AREA */}
      <div className="counter-area">
        <div className="container">
          <div className="counter-wrap">
            <div className="row text-center">

              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <i className="bi bi-pc-display"></i>
                  </div>
                  <div>
                    <span className="counter">1200</span>
                    <h6 className="title">+ Projects Done</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <i className="bi bi-emoji-smile"></i>
                  </div>
                  <div>
                    <span className="counter">1500</span>
                    <h6 className="title">+ Happy Clients</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <div>
                    <span className="counter">30</span>
                    <h6 className="title">+ Experts Staffs</h6>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <div>
                    <span className="counter">50</span>
                    <h6 className="title">+ Win Awards</h6>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
<section className="partner-area">
  <div className="container">
    
    {/* SECTION HEADING */}
    <div className="partner-heading text-center">
      <h2>
        <span>Brands</span> We Deal With
      </h2>
      <p>
        Our products are available in shop, and we proudly deal with trusted
        brands and companies.
      </p>
    </div>

    {/* SLIDER */}
    <div className="partner-slider">
      <div className="partner-track">
        {[...partners, ...partners].map((img, index) => (
          <div className="partner-item" key={index}>
            <img src={img} alt="Partner Company" />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

    </>
  );
};

export default MissionVision;
