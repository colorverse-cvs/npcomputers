import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer} id="contact">
      <p>© 2025 NP Computers | All Rights Reserved</p>
      <p>Contact: npcomputers@gmail.com</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "20px",
    background: "#111",
    color: "#fff",
    textAlign: "center",
    marginTop: "40px",
  },
};
