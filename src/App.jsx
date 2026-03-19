import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

import "./App.css";

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
     window.scrollTo(0, 0); 
  }, [pathname]);

  return (
    <div className="np-layout">
      <Header />

      <main className="np-content">
        <Breadcrumbs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </main>

    </div>
  );
}

export default App;