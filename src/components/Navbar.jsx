import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <NavLink to="/" className="brand" aria-label="SmartLogix home">
          <span className="brand-mark">S</span>
          <span>
            SmartLogix
            <small>Interior Studio</small>
          </span>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button type="button" className="nav-cta">
          Book a Consultation
        </button>
      </div>
    </header>
  );
}

export default Navbar;
