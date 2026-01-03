import "./Products.css";
import logo from "../../assets/np-logo.webp";

const Products = () => {
  return (
    <section className="products-page">

      {/* HERO */}
      <div className="products-hero">
        <div className="products-hero-content">
          <img src={logo} alt="NP Technologies" />
          <h1>Our Products</h1>
          <p>
            Explore our range of high-quality computer products and accessories.
          </p>
        </div>
      </div>

      {/* PRODUCTS LIST */}
      <div className="products-container">

        <div className="product-card">
          <i className="bi bi-laptop"></i>
          <h4>Laptops</h4>
          <p>High-performance laptops for personal and professional use.</p>
        </div>

        <div className="product-card">
          <i className="bi bi-desktop"></i>
          <h4>Desktops</h4>
          <p>Reliable desktops for office and home setups.</p>
        </div>

        <div className="product-card">
          <i className="bi bi-headphones"></i>
          <h4>Accessories</h4>
          <p>Quality peripherals and accessories for all devices.</p>
        </div>

      </div>

    </section>
  );
};

export default Products;
