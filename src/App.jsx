import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About"; 
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import "./App.css";


function App() {
  return (
    <div className="np-layout">
      <Header />
      <main className="np-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         <Footer />
      </main>
    </div>
  );
}

export default App;
