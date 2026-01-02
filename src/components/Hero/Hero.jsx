import React from "react";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Welcome to NP Computers</h1>
      <p>Your one-stop shop for laptops, desktops & accessories</p>
      <button style={styles.btn}>Shop Now</button>
    </section>
  );
}

const styles = {
  hero: {
    padding: "80px 20px",
    background: "#76b7d4ff",
    textAlign: "center",
  },
  btn: {
    marginTop: "20px",
    padding: "10px 25px",
    fontSize: "16px",
    border: "none",
    background: "#111",
    color: "#ffffffff",
    cursor: "pointer",
  },
};
