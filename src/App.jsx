import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About"; 
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import "./App.css";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";



function App() {
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
