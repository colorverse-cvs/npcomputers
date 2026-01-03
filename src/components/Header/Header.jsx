import { useEffect, useRef, useState } from "react";
import logo from "../../assets/np-logo.webp"
import "./Header.css";

const Header = () => {
  const navRef = useRef(null);
  const selectorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const moveSelector = (index) => {
    const nav = navRef.current;
    const items = nav.querySelectorAll(".nav-item");
    const activeItem = items[index];
    if (!activeItem) return;

    selectorRef.current.style.left = `${activeItem.offsetLeft}px`;
    selectorRef.current.style.width = `${activeItem.offsetWidth}px`;
    selectorRef.current.style.height = `${activeItem.offsetHeight}px`;
  };

  useEffect(() => {
    moveSelector(activeIndex);
    window.addEventListener("resize", () => moveSelector(activeIndex));
    return () =>
      window.removeEventListener("resize", () => moveSelector(activeIndex));
  }, [activeIndex]);

  const menu = [
    { icon: "fas fa-tachometer-alt", label: "Dashboard" },
    { icon: "far fa-address-book", label: "Address Book" },
    { icon: "far fa-clone", label: "Components" },
    { icon: "far fa-calendar-alt", label: "Calendar" },
    { icon: "far fa-chart-bar", label: "Charts" },
    { icon: "far fa-copy", label: "Documents" },
  ];

  return (
    <nav className="navbar navbar-mainbg">
      <div className="container">
      <a className="navbar-logo-main" href="#">
     <img className="navbar-brand navbar-logo" src={logo} alt="" />
      </a>

      <ul className="navbar-nav" ref={navRef}>
        <div className="hori-selector" ref={selectorRef}>
          <span className="left"></span>
          <span className="right"></span>
        </div>

        {menu.map((item, i) => (
          <li
            key={i}
            className={`nav-item ${activeIndex === i ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            <a className="nav-link" href="#">
              <i className={item.icon}></i>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
    
  );
};

export default Header;
