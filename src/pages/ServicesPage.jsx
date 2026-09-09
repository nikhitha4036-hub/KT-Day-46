import "./ServicesPage.css";

const serviceList = [
  {
    title: "Residential Interior Design",
    description:
      "Complete home styling that blends comfort, functionality, and elevated finishes for spaces that feel personal and polished.",
  },
  {
    title: "Commercial Styling",
    description:
      "Tailored workspace and hospitality environments that reflect your brand, invite productivity, and create memorable guest experiences.",
  },
  {
    title: "Renovation Planning",
    description:
      "End-to-end renovation guidance, material curation, and architectural detailing to transform dated spaces into refined living experiences.",
  },
  {
    title: "Turnkey Furnishing",
    description:
      "Curated furniture, lighting, and décor selections that bring a cohesive aesthetic to life with effortless sophistication.",
  },
];

const processSteps = [
  "Initial consultation and lifestyle brief",
  "Concept development and mood board direction",
  "Detailed design, sourcing, and execution planning",
  "Styling and final handover with guidance",
];

const testimonialList = [
  {
    name: "Samantha W.",
    text: "Our apartment feels elevated, warm, and truly reflective of our lifestyle. Every detail was thoughtfully considered.",
  },
  {
    name: "David & Priya",
    text: "The team brought clarity, polish, and exceptional taste to our renovation journey. We felt supported from first sketch to final styling.",
  },
  {
    name: "A. Martinez",
    text: "From commercial concept to final details, the design language feels premium and deeply aligned with our brand identity.",
  },
];

function ServicesPage() {
  return (
    <div className="services-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Interior design solutions</p>
          <h1>Elevated spaces designed around how you live and work.</h1>
          <p className="lead">
            We create refined interiors that balance beauty, comfort, and
            purposeful functionality—bringing elegance into every room with a
            tailored design story.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-btn">
              Schedule a consult
            </button>
            <button type="button" className="secondary-btn">
              View portfolio
            </button>
          </div>

          <div className="stats-row">
            <div>
              <strong>12+</strong>
              <span>Years of design expertise</span>
            </div>
            <div>
              <strong>180</strong>
              <span>Projects delivered</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Client satisfaction</span>
            </div>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Modern luxury living room interior"
        >
          <div className="visual-card card-one" />
          <div className="visual-card card-two" />
          <div className="floating-note">
            <span>Featured project</span>
            <strong>Coastal Modern Villa</strong>
          </div>
        </div>
      </section>

      <section className="section-block services-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2>Tailored interior services for every stage of the journey.</h2>
        </div>

        <div className="service-grid">
          {serviceList.map((service) => (
            <article key={service.title} className="service-card">
              <span className="service-badge">01</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block process-section" id="process">
        <div className="section-heading narrow">
          <p className="eyebrow">Our process</p>
          <h2>
            Designing with clarity, intention, and a seamless client experience.
          </h2>
        </div>

        <div className="process-list">
          {processSteps.map((step, index) => (
            <div key={step} className="process-item">
              <span>{`0${index + 1}`}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block testimonial-section" id="testimonials">
        <div className="section-heading">
          <p className="eyebrow">Client feedback</p>
          <h2>Trusted by homeowners and businesses that value good design.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonialList.map((testimonial) => (
            <blockquote key={testimonial.name} className="testimonial-card">
              <p>“{testimonial.text}”</p>
              <footer>{testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
