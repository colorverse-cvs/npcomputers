import "./products.css";
import React, { useState } from "react";
import InquiryPopup from "../../components/InquiryPopup/InquiryPopup";

import desktop from "../../assets/images.png";
import desktop1 from "../../assets/Accessories2.png";
import laptop from "../../assets/laptop5.png";
import laptop1 from "../../assets/laptop1.png";
import laptop8 from "../../assets/laptop8.png";
import desktop7 from "../../assets/desktop7.png";
import laptop3 from "../../assets/laptop5.png";
import desktop8 from "../../assets/desktop8.png";
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
      { title: "Philips E9 series", desc: "Custom & Office PCs", img: desktop1 },
      { title: "Samsung series 4K UHD ", desc: "Custom & Office PCs", img: desktop },
      { title: "Apple iMac", desc: "Custom & Office PCs", img: desktop8 },
      { title: " Apple iMac", desc: "Custom & Office PCs", img: desktop7 },
      { title: "Microsoft Surface", desc: "Business & Gaming", img: laptop },
      { title: "Walker NU14A2", desc: "Business & Gaming", img: laptop1 },
      { title: "Microsoft Surface", desc: "Business & Gaming", img: laptop3 },
      { title: "Apple MacBook Air", desc: "Business & Gaming", img: laptop8 },
      

    ],  
  },
  {
    category: "Core Components",
    items: [
      { title: "Coolman Robin lll", desc: "Intel & AMD", img: cpu },
      { title: "Lovingcool gaming LC-TX360 ", desc: "Intel & AMD", img: cpu1 },
      { title: "M.2 SSD", desc: "Fast Storage Solutions", img: ssd },
      { title: "SSD / 500GB", desc: "Fast Storage Solutions", img: ssd4 },

    ],
  },
  {
    category: "Security Solutions",
    items: [
      { title: "dome CCTV camera", desc: "Security Systems", img: cctv1 },
      { title: "wall mounted surveillance", desc: "Security Systems", img: cctv2 },
      { title: "indoor/outdoor dome", desc: "Security Systems", img: cctv3 },
      { title: "dome CCTV cameras", desc: "Security Systems", img: cctv4 },

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
const [openPopup, setOpenPopup] = useState(false);
const [selectedProduct, setSelectedProduct] = useState("");
  return (
    <section className="category-section ">
      <div className="container">
      {/* <h2 className="section-title">Our Products & Services</h2> */}

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
             <button
className="enquiry-p-btn"
onClick={() => {
setSelectedProduct(item.title);
setOpenPopup(true);
}}
>
Enquiry
</button>
              </div>
              
            ))}
          </div>
               <InquiryPopup
isOpen={openPopup}
onClose={() => setOpenPopup(false)}
productName={selectedProduct}
/>
        </div>
      ))}
      </div>
    </section>
  );
};

export default ProductCategories;
