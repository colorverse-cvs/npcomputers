import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section pt-5 pb-4">
       <div className="wave-wrapper">
        <svg className="wave wave1" viewBox="0 0 1440 320">
          <path
            fill="#1e3a8a"
            fillOpacity="1"
            d="M0,192L60,176C120,160,240,128,360,112C480,96,600,96,720,117.3C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96V320H0Z"
          ></path>
        </svg>

        <svg className="wave wave2" viewBox="0 0 1440 320">
          <path
            fill="#3b82f6"
            fillOpacity="0.7"
            d="M0,224L40,197.3C80,171,160,117,240,117.3C320,117,400,171,480,186.7C560,203,640,181,720,186.7C800,192,880,224,960,224C1040,224,1120,192,1200,165.3C1280,139,1360,117,1440,112V320H0Z"
          ></path>
        </svg>

        <svg className="wave wave3" viewBox="0 0 1440 320">
          <path
            fill="#7dd3fc"
            fillOpacity="0.6"
            d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,218.7C1248,181,1344,107,1392,69.3L1440,32V320H0Z"
          ></path>
        </svg>
      </div>
      <div className="container">

        <div className="row justify-content-between">

          {/* LOGO & TEXT */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h3 className="footer-logo">Repairtech4u</h3>
            <p className="footer-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s.
            </p>

            <div className="footer-social">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-pinterest"></i></a>
            </div>
          </div>

          {/* COMPANY LINKS */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">Company</h5>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* BLOG PAGE */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">Blog Page</h5>

            <div className="footer-blog d-flex align-items-start mb-3">
              <img src="https://i.pravatar.cc/60?img=15" className="footer-blog-img" />
              <div className="ms-3">
                <p className="blog-date">April 15, 2020</p>
                <p className="blog-text">
                  We Provide you Best & Computer Repair Service
                </p>
              </div>
            </div>

            <div className="footer-blog d-flex align-items-start">
              <img src="https://i.pravatar.cc/60?img=22" className="footer-blog-img" />
              <div className="ms-3">
                <p className="blog-date">April 10, 2020</p>
                <p className="blog-text">
                  We Provide you Best & Mobile Repair Service
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Contact</h5>

            <p className="footer-text">
              Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.
            </p>

            <p className="footer-contact">
              <i className="bi bi-telephone-fill"></i> (010) 125-4985-214
            </p>
            <p className="footer-contact">
              <i className="bi bi-envelope-fill"></i> info@yoursite.com
            </p>
            <p className="footer-contact">
              <i className="bi bi-geo-alt-fill"></i> 321, Art Street 235 Newyork, USA 102
            </p>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="footer-bottom text-center pt-3 mt-3">
          <p>© 2025 Repairtech4u. Designed By sbtechnosoft</p>
        </div>

      </div>
    </footer>
  );
}
