import "./Specialize.css";
import centerImg from "../../assets/h-bg.png";

const services = [
  {
    title: "PC Repair",
    text: "Problem PC? We’ll solve it. When your desktop runs slow.",
    icon: "bi bi-pc-display"
  },
  {
    title: "Mac Repair",
    text: "High-quality Mac repairs without premium pricing.",
    icon: "bi bi-apple"
  },
  {
    title: "Data Backup & Recovery",
    text: "Secure backup for photos, videos & documents.",
    icon: "bi bi-cloud-arrow-up"
  },
  {
    title: "Network / Servers",
    text: "Secure wireless and server setup solutions.",
    icon: "bi bi-diagram-3"
  },
  {
    title: "Malware & Virus Removal",
    text: "Remove threats without losing your data.",
    icon: "bi bi-shield-x"
  },
  {
    title: "Laptop Repair",
    text: "Fast & reliable laptop repair services.",
    icon: "bi bi-laptop"
  }
];

const Specialize = () => {
  return (
    <section className="specialize-section">

      {/* BACKGROUND VECTORS */}
      <div className="bg-blobs">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
      </div>

      <h1>We <span>Specialize</span> In</h1>
      <p className="subtitle">Our field of activity includes these areas</p>

      <div className="hex-wrapper">

        {/* CONNECTION LINES */}
        <svg className="connection-lines" viewBox="0 0 700 700">
          <line x1="350" y1="90" x2="350" y2="220" />
          <line x1="560" y1="200" x2="430" y2="300" />
          <line x1="560" y1="500" x2="430" y2="400" />
          <line x1="350" y1="610" x2="350" y2="480" />
          <line x1="140" y1="500" x2="270" y2="400" />
          <line x1="140" y1="200" x2="270" y2="300" />
        </svg>

        {/* CENTER */}
        <div className="hex-center">
          <img src={centerImg} alt="Technician" />
        </div>

        {/* SERVICES */}
        {services.map((item, index) => (
          <div className={`hex-item item-${index + 1}`} key={index}>
            <div className="hex-icon">
              <i className={item.icon}></i>
            </div>
            <div className="hex-box">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Specialize;
