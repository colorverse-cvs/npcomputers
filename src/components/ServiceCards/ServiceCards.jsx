import React from "react";
import "./ServiceCards.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/service-1.webp";
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
    img: img3,
  },
  {
    title: "Laptop Repair",
    desc: "Screen replacement, battery issues, keyboard repair, and complete laptop servicing.",
    img: img4,
  },
];

const ServiceCards = () => {
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

                  <button className="service-btn mt-4">
                    Contact Now
                  </button>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default ServiceCards;