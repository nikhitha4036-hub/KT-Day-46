import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import ServicesPage from "./pages/ServicesPage";
import TestimonialsPage from "./pages/Testimonials";
import ContactPage from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
