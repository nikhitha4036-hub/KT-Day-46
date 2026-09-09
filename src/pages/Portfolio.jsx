import React from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Modern Luxury Living Room",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    description:
      "A sophisticated living space combining warm textures, elegant furniture, and contemporary lighting.",
  },
  {
    id: 2,
    title: "Minimalist Bedroom",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
    description:
      "A calm and minimal bedroom designed with neutral tones and functional storage.",
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    description:
      "A stylish modular kitchen featuring clean lines, premium finishes, and smart storage.",
  },
  {
    id: 4,
    title: "Elegant Dining Area",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    description:
      "An elegant dining environment designed for comfort, sophistication, and memorable gatherings.",
  },
  {
    id: 5,
    title: "Creative Office Space",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    description:
      "A modern office interior designed to encourage productivity, creativity, and collaboration.",
  },
  {
    id: 6,
    title: "Luxury Master Suite",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=80",
    description:
      "A premium master suite featuring sophisticated materials, soft lighting, and timeless elegance.",
  },
];

function Portfolio() {
  return (
    <section className="portfolio-page">
      <div className="portfolio-header">
        <p className="portfolio-subtitle">OUR WORK</p>

        <h1>Spaces That Inspire</h1>

        <p className="portfolio-description">
          Explore our collection of thoughtfully designed interiors where
          creativity, functionality, and elegance come together.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />

              <div className="project-overlay">
                <span>{project.category}</span>
              </div>
            </div>

            <div className="project-content">
              <p className="project-category">{project.category}</p>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <button className="view-project">
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;