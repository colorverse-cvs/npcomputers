import React from "react";
// import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoSection}>
        {/* <img src={logo} style={styles.logo} /> */}
        <h2>NP Computers</h2>
      </div>

      <nav style={styles.nav}>
        <a href="/">Home</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "10px 20px",
    background: "#111",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoSection: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  logo: {
    height: "40px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
};
