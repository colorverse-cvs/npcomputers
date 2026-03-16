import React, { useState, useEffect } from "react";
import "./Services.css";
import repairImg from "../../assets/banner-1.webp";
import repairImg1 from "../../assets/banner-2.webp";
import repairImg2 from "../../assets/banner-3.webp";
import CCTV_Services from "../../components/cctv_services/CCTV_Services";
import ServiceCards from "../../components/ServiceCards/ServiceCards";
import Feedback from "../../components/Feedback/Feedback";
import InquiryPopup from "../../components/InquiryPopup/InquiryPopup";

const slides = [
  {
    title: (
      <>
        <span className="highlight">Expert</span> Computer & Laptop 
        <span className="highlight"> Repair Services</span>
      </>
    ),
    desc: (
      <>
        We repair all types of <span className="highlight2">computer and laptop issues</span> including 
        <span className="highlight2"> screen problems</span>, 
        <span className="highlight2"> virus removal</span>, 
        <span className="highlight2"> slow performance</span>, 
        <span className="highlight2"> hardware replacement</span>, and 
        <span className="highlight2"> data recovery</span>.
      </>
    ),
    image: repairImg,
  },
  {
    title: (
      <>
        All Computer Problems Solved – 
        <span className="highlight"> No Fix, No Pay!</span>
      </>
    ),
    desc: (
      <>
        Facing <span className="highlight2">laptop screen damage</span>, 
        <span className="highlight2"> virus attacks</span>, 
        <span className="highlight2"> software errors</span>, or 
        <span className="highlight2"> data loss</span>?  
        Our experts diagnose and repair every issue with our 
        <span className="highlight2"> No Fix No Pay Guarantee</span>.
      </>
    ),
    image: repairImg1,
  },

  {
  title: (
    <>
      <span className="highlight">Fast</span> Repair  With<br />
      Affordable<span className="highlight"> Price</span>
    </>
  ),
  desc: (
    <>
      Get your <span className="highlight2">laptop and desktop repaired quickly</span> by our 
      <span className="highlight2"> experienced technicians</span>.  
      We provide solutions for <span className="highlight2">hardware issues</span>, 
      <span className="highlight2"> software problems</span>, 
      <span className="highlight2"> virus removal</span>, and 
      <span className="highlight2"> system upgrades</span> with 
      <span className="highlight2"> fast service at an affordable price</span>.
    </>
  ),
  image: repairImg2,
},
];

const Services = () => {

  const [index, setIndex] = useState(0);
  const [openPopup, setOpenPopup] = useState(false); // 👈 FIRST

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  /* AUTO SLIDER */
  useEffect(() => {

    if (openPopup) return; // popup open असेल तर slider stop

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);

  }, [openPopup]);



  // const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="services-hero">

      <div className="services-hero-slider mt-5 mb-5">

        <div
          className="services-hero-wrapper"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="services-hero-slide" key={i}>

              <div className="services-hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
<button
className="services-hero-btn"
onClick={() => setOpenPopup(true)}
>
GET A SCHEDULE
</button>
              </div>

              <div className="services-hero-image">
                <div className="services-hero-image-card">
                  <img src={slide.image} alt="repair" />
                </div>
              </div>

            </div>
          ))}
        </div>
<InquiryPopup
isOpen={openPopup}
onClose={() => setOpenPopup(false)}
/>
        <div className="services-hero-controls">
          <button onClick={prevSlide}>‹</button>
          <button onClick={nextSlide}>›</button>
        </div>

      </div>

      <CCTV_Services/>
      <ServiceCards/>
      <Feedback/>

    </div>
  );
};

export default Services;