import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">S</span>
            <span>
              SmartLogix
              <small>Interior Studio</small>
            </span>
          </div>
          <p>
            Thoughtful interiors for exceptional living, crafted with balance,
            warmth, and refined elegance.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <a href="mailto:hello@smartlogix.com">hello@smartlogix.com</a>
          <a href="tel:+1234567890">+1 (234) 567-890</a>
          <span>48 Mercer Lane, New York</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 SmartLogix</span>
        <span>Designing spaces that feel like home.</span>
      </div>
    </footer>
  );
}

export default Footer;
