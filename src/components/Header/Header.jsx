import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/np-logo.webp";

const Header = () => {
  return (
    <aside className="np-sidebar">

      <div className="np-logo-box">
        <img src={logo} alt="NP Technologies" />
        <span className="logo-text">NP Tech</span>
      </div>

      <ul className="np-menu">
        <li>
          <NavLink to="/" className="np-link">
            <i className="bi bi-house"></i>
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="np-link">
            <i className="bi bi-info-circle"></i>
            <span>About</span>
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/products" className="np-link">
            <i className="bi bi-box"></i>
            <span>Products</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Services" className="np-link">
            <i className="bi bi-tools"></i>
            <span>Services</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="np-link">
            <i className="bi bi-headset"></i>
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>

    </aside>
  );
};

export default Header;
