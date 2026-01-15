import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./ModelsCarousel.css";

// Laptop Images
import laptop1 from "../../assets/laptop1.png";
import laptop2 from "../../assets/laptop2.webp";
import laptop3 from "../../assets/laptop3.webp";
import laptop4 from "../../assets/laptop4.png";
import laptop5 from "../../assets/laptop5.png";
import laptop6 from "../../assets/laptop2.webp";
import laptop7 from "../../assets/laptop4.png";
import laptop8 from "../../assets/laptop3.webp";

// Accessories
import mouse from "../../assets/Accessories1.png";
import keyboard from "../../assets/Accessories2.png";
import headset from "../../assets/Accessories3.png";
import monitor from "../../assets/Accessories4.png";
import bag from "../../assets/Accessories5.png";
import keyboard1 from "../../assets/Accessories2.png";
import headset1 from "../../assets/Accessories3.png";
import mouse1 from "../../assets/Accessories1.png";

const laptops = [
  { img: laptop1, name: "ProBook X1", specs: "Intel i7 • 16GB • 512GB SSD" },
  { img: laptop2, name: "Ultra Slim", specs: "Intel i5 • 16GB • 1TB SSD" },
  { img: laptop3, name: "Creator Max", specs: "Ryzen 7 • 32GB • 1TB SSD" },
  { img: laptop4, name: "Business Elite", specs: "Intel i7 • 1TB SSD" },
  { img: laptop5, name: "Gaming Core", specs: "Ryzen 9 • RTX Graphics" },
  { img: laptop6, name: "ProBook X1", specs: "Intel i7 • 16GB • 512GB SSD" },
  { img: laptop7, name: "Business Elite", specs: "Intel i7 • 1TB SSD" },
  { img: laptop8, name: "Creator Max", specs: "Ryzen 7 • 32GB • 1TB SSD" },


];

const accessories = [
  { img: mouse, name: "Wireless Mouse", specs: "Silent • Ergonomic" },
  { img: keyboard, name: "Mechanical Keyboard", specs: "RGB • Premium" },
  { img: headset, name: "Gaming Headset", specs: "7.1 Surround" },
  { img: monitor, name: "4K Monitor", specs: "27-inch • IPS" },
  { img: bag, name: "Laptop Bag", specs: "Water Resistant" },
  { img: keyboard1, name: "Mechanical Keyboard", specs: "RGB • Premium" }, 
  { img: headset1, name: "Gaming Headset", specs: "7.1 Surround" },
  { img: mouse1, name: "Wireless Mouse", specs: "Silent • Ergonomic" },

];

const sliderSettings = {
  modules: [Autoplay],
  loop: true,
  speed: 7000,
  autoplay: { delay: 0, disableOnInteraction: false },
  slidesPerView: 4,
  spaceBetween: 30,
  allowTouchMove: true,
  breakpoints: {
    0: { slidesPerView: 1.3 },
    768: { slidesPerView: 2.5 },
    1024: { slidesPerView: 4 },
  },
};

const ModelsCarousel = () => {
  return (
    <section className="np-carousel-white">
      {/* Animated vectors */}
      <div className="vector-dots"></div>
      <div className="vector-lines"></div>
      <div className="vector-glow"></div>

      <div className="np-container">
        <h2 className="np-title">Premium Laptop Collection</h2>
        <p className="np-subtitle">
          Experience technology in its most elegant form
        </p>

        <Swiper {...sliderSettings} className="np-swiper smooth">
          {laptops.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="np-card">
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.specs}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <h2 className="np-title second mb-5">Accessories</h2>

        <Swiper
          {...sliderSettings}
          autoplay={{ delay: 0, reverseDirection: true }}
          className="np-swiper smooth"
        >
          {accessories.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="np-card">
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.specs}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ModelsCarousel;
