import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-section">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className="container hero-content d-flex align-items-center">
        <div className="">
          <h1 className="hero-title">
            Your Trusted Computer Store.  
            <br /> <span className="heading-sub" > All Tech, One Place.</span>
          </h1>

          <p className="hero-subtitle">
            Discover top laptops, desktops, accessories & repairs —  
            quality products at unbeatable prices.
          </p>

          <div className="mt-4 d-flex gap-3">
            <button className="hero-btn-outline">Shop Now</button>
            <button className="hero-btn">View Services</button>
          </div>
        </div>
      </div>

      {/* Multiple Waves */}
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
    </div>
  );
}
