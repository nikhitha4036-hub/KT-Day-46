import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<ServicesPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
