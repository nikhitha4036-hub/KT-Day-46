import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const featuredProjects = [
  {
    title: "Modern Living",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Luxury Bedroom",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Contemporary Kitchen",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  },
];

function Home() {
  return (
    <div className="home">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-small-title">
            INTERIOR DESIGN STUDIO
          </p>

          <h1>
            Designing Spaces
            <br />
            <span>That Inspire.</span>
          </h1>

          <p className="hero-text">
            We create timeless interiors that blend creativity,
            functionality, and elegance to reflect the people who
            live and work in them.
          </p>

          <div className="hero-buttons">
            <Link to="/portfolio" className="primary-btn">
              Explore Our Work
            </Link>

            <Link to="/contact" className="secondary-btn">
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="intro-section">
        <div className="intro-image">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
            alt="Elegant interior"
          />
        </div>

        <div className="intro-content">
          <p className="section-label">OUR PHILOSOPHY</p>

          <h2>
            Interiors With
            <br />
            <span>Purpose & Soul</span>
          </h2>

          <p>
            Great interiors are more than beautiful spaces. They
            tell stories, create emotions, and make everyday life
            more meaningful.
          </p>

          <p>
            Our design approach combines thoughtful planning,
            sophisticated aesthetics, and practical functionality
            to create spaces that feel uniquely yours.
          </p>

          <Link to="/services" className="text-link">
            Discover Our Approach →
          </Link>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section">
        <div className="section-heading">
          <p className="section-label">WHAT WE DO</p>

          <h2>
            Our Design
            <br />
            <span>Services</span>
          </h2>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-number">01</div>
            <h3>Residential Design</h3>
            <p>
              Beautiful and functional homes designed around
              your lifestyle, personality, and vision.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">02</div>
            <h3>Commercial Design</h3>
            <p>
              Professional environments that inspire productivity
              and create memorable experiences.
            </p>
          </div>

          <div className="service-card">
            <div className="service-number">03</div>
            <h3>Custom Interiors</h3>
            <p>
              Bespoke interior solutions with carefully selected
              materials, furniture, and finishes.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="featured-section">

        <div className="featured-header">
          <div>
            <p className="section-label">SELECTED WORK</p>

            <h2>
              Featured
              <br />
              <span>Projects</span>
            </h2>
          </div>

          <Link to="/portfolio" className="view-all">
            View All Projects →
          </Link>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <div className="featured-card" key={index}>

              <div className="featured-image">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="featured-overlay">
                  <span>View Project →</span>
                </div>
              </div>

              <div className="featured-info">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">

        <div className="stat">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <h2>150+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat">
          <h2>120+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat">
          <h2>15</h2>
          <p>Design Awards</p>
        </div>

      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="testimonial-section">

        <p className="section-label">CLIENT STORIES</p>

        <h2>
          “A beautiful space is not just
          <br />
          <span>seen, it's experienced.”</span>
        </h2>

        <p className="testimonial-text">
          Working with the design team completely transformed
          our home. Every detail feels intentional, elegant,
          and perfectly suited to our lifestyle.
        </p>

        <p className="client-name">
          — PRIYA & ARJUN
        </p>

      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">

        <div>
          <p className="section-label">LET'S CREATE TOGETHER</p>

          <h2>
            Your Space.
            <br />
            <span>Your Story.</span>
          </h2>
        </div>

        <Link to="/contact" className="cta-button">
          Start Your Project →
        </Link>

      </section>

    </div>
  );
}

export default Home;