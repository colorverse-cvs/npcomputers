import "./products.css";

import desktop from "../../assets/images.png";
import desktop1 from "../../assets/Accessories2.png";
import laptop from "../../assets/laptop5.png";
import laptop1 from "../../assets/laptop1.png";
import cpu from "../../assets/cpu2.png";
import cpu1 from "../../assets/cp1.png";
import cctv1 from "../../assets/cm1.png";
import cctv2 from "../../assets/cm2.png";
import cctv3 from "../../assets/cm3.png";
import cctv4 from "../../assets/cm4.png";
import accessories from "../../assets/Accessories5.png";
import mouse from "../../assets/Accessories7.png";
import keyboard from "../../assets/Accessories4.png";
import mpad from "../../assets/m-pad.png";
import keyboard1 from "../../assets/keyboard1.png";
import charger from "../../assets/charger.png";
import sound from "../../assets/sound.png";
import ssd from "../../assets/sd3.png";
import ssd4 from "../../assets/sd4.png";
import USB from "../../assets/USB-p.png";



const categoryData = [
  {
    category: "Desktops & Laptops",
    items: [
            { title: "Desktops1", desc: "Custom & Office PCs", img: desktop1 },
      { title: "Desktops", desc: "Custom & Office PCs", img: desktop },
      { title: "Laptops", desc: "Business & Gaming", img: laptop },
      { title: "Laptops1", desc: "Business & Gaming", img: laptop1 },

    ],
  },
  {
    category: "Core Components",
    items: [
      { title: "CPU / Processor", desc: "Intel & AMD", img: cpu },
      { title: "CPU1 / Processor", desc: "Intel & AMD", img: cpu1 },
      { title: "SSD / Storage", desc: "Fast Storage Solutions", img: ssd },
      { title: "SSD / Storage", desc: "Fast Storage Solutions", img: ssd4 },

    ],
  },
  {
    category: "Security Solutions",
    items: [
      { title: "CCTV Cameras", desc: "Security Systems", img: cctv1 },
      { title: "CCTV Cameras", desc: "Security Systems", img: cctv2 },
      { title: "CCTV Cameras", desc: "Security Systems", img: cctv3 },
      { title: "CCTV Cameras", desc: "Security Systems", img: cctv4 },

    ],
  },
  {
    category: "Accessories",
    items: [
      { title: "Mouse", desc: "Wired & Wireless", img: mouse },
      { title: "Keyboard", desc: "Mechanical & Office", img: keyboard },
      { title: "Chargers", desc: "Laptop & Mobile", img: charger },
      { title: "Sound Systems", desc: "Speakers & Headphones", img: sound },
      { title: "Keyboard", desc: "All PC Essentials", img: keyboard1 },
      { title: "Computer Accessories", desc: "All PC Essentials", img: accessories },
      { title: "Mouse pad", desc: "All PC Essentials", img: mpad },
      { title: "USB Ports Hub", desc: "All PC Essentials", img: USB },


    ],
  },
];

const ProductCategories = () => {
  return (
    <section className="category-section">
      <h2 className="section-title">Our Products & Services</h2>

      {categoryData.map((group, index) => (
        <div className="category-block" key={index}>
          <h3 className="category-heading">{group.category}</h3>

          <div className="category-grid">
            {group.items.map((item, i) => (
              <div className="category-card" key={i}>
                <div className="vector-shape"></div>

                <div className="image-box">
                  <img src={item.img} alt={item.title} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCategories;
