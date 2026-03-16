import React, { useState, useRef } from "react";
import "./ServiceCards.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import InquiryPopup from "../InquiryPopup/InquiryPopup";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/service-5.png";
import img2 from "../../assets/service-3.webp";
import img3 from "../../assets/service-4.webp";
import img4 from "../../assets/service-1.webp";

const services = [
  {
    title: "PC Repair",
    desc: "We fix all desktop problems including motherboard issues, slow performance, and hardware replacement.",
    img: img3,
  },
  {
    title: "Data Recovery",
    desc: "Recover lost files, photos, and documents from damaged hard drives and corrupted storage devices.",
    img: img2,
  },
  {
    title: "Virus Removal",
    desc: "Remove malware, spyware, and viruses to keep your computer safe and running smoothly.",
    img: img1,
  },
  {
    title: "Laptop Repair",
    desc: "Screen replacement, battery issues, keyboard repair, and complete laptop servicing.",
    img: img4,
  },
];

const ServiceCards = () => {

const [openPopup, setOpenPopup] = useState(false);
const [selectedService, setSelectedService] = useState("");


  const swiperRef = useRef(null);

  const openHandler = () => {
    setOpenPopup(true);

    if (swiperRef.current) {
      swiperRef.current.autoplay.stop(); // stop slider
    }
  };

  const closeHandler = () => {
    setOpenPopup(false);

    if (swiperRef.current) {
      swiperRef.current.autoplay.start(); // restart slider
    }
  };

  return (
    <section className="service-card-section">

      <div className="service-card-container">

        <div className="service-title text-center">
          <h2>Our Computer <span>Repair Services</span></h2>
          <p>
            We provide fast and reliable computer repair services for homes and businesses.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {services.map((service, index) => (

            <SwiperSlide key={index}>

              <div className="service-card">

                <div className="service-card-body">

                  <h4>{service.title}</h4>

                  <p>{service.desc}</p>

                  <img src={service.img} alt="" />

<button
  className="service-btn"
  onClick={() => {
    setSelectedService(service.title);
    setOpenPopup(true);
  }}
>
  Contact Now
</button>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

<InquiryPopup
  isOpen={openPopup}
  onClose={() => setOpenPopup(false)}
  itemName={selectedService}
/>

      </div>

    </section>
  );
};

export default ServiceCards;