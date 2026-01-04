import "./About.css";
import logo from "../../assets/np-logo.webp";

const About = () => {
  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-content">
          <img src={logo} alt="NP Technologies" />
          <h1>About NP Technologies</h1>
          <p>
            Your trusted partner for computer sales, repair, and IT solutions.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="about-container">

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            NP Technologies is a professional IT service provider offering
            high-quality computer products, expert repairs, and reliable
            technical support. We focus on innovation, trust, and customer
            satisfaction.
          </p>

          <p>
            From personal laptops to enterprise solutions, we deliver modern,
            efficient, and secure technology services.
          </p>
        </div>

        {/* FEATURES */}
        <div className="about-features">
          <div className="feature-card">
            <i className="bi bi-cpu"></i>
            <h4>Advanced Technology</h4>
            <p>Latest hardware & software solutions.</p>
          </div>

          <div className="feature-card">
            <i className="bi bi-tools"></i>
            <h4>Expert Repair</h4>
            <p>Fast, reliable & affordable repairs.</p>
          </div>

          <div className="feature-card">
            <i className="bi bi-shield-check"></i>
            <h4>Trusted Service</h4>
            <p>Secure and dependable IT support.</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;
