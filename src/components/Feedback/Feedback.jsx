import React from "react";
import "./Feedback.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const feedbacks = [
  {
    text: "I can't thank NP Computer enough for saving my computer. Fast, efficient service and friendly staff. Highly recommended!",
    name: "Rahul Patil",
    role: "Business Owner"
  },
  {
    text: "Amazing service. My laptop repair was completed very quickly and the support team was very helpful.",
    name: "Amit Sharma",
    role: "Shop Owner"
  },
  {
    text: "Best place for computer service and accessories. Professional technicians and great customer support.",
    name: "Sneha Kulkarni",
    role: "Designer"
  }
];

const Feedback = () => {
  return (
    <section className="feedback-section">

      <div className="feedback-container">

        {/* LEFT SIDE */}
        <div className="feedback-left">

          <span className="feedback-tag">
            TESTIMONIALS <span className="feedback-tag-star">✦</span>
          </span>

          <h2>
            Success Stories: <br />
            From Our Client's <br />
            Perspective
          </h2>

          <div className="feedback-nav">
            <div className="prev-btn">‹</div>
            <div className="next-btn">›</div>
          </div>

        </div>

        {/* RIGHT SIDE SLIDER */}

        <div className="feedback-slider">

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={25}
            slidesPerView={2}
            autoplay={{ delay: 3000 }}
            loop={true}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
          >

            {feedbacks.map((item, index) => (
              <SwiperSlide key={index}>

                <div className="feedback-card">

                  <div className="stars">⭐⭐⭐⭐⭐</div>

                  <p>{item.text}</p>

                  <h4>{item.name}</h4>

                  {/* <span>{item.role}</span> */}

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default Feedback;