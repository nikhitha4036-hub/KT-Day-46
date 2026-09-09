
import React from "react";

const testimonials = [
  {
    name: "Ananya Reddy",
    role: "Homeowner",
    review:
      "The team transformed our home beautifully. Every detail was elegant, modern, and perfectly planned.",
  },
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    review:
      "Excellent interior design service. They understood our requirements and created a stylish office space.",
  },
  {
    name: "Priya Kapoor",
    role: "Apartment Owner",
    review:
      "I loved the creativity and professionalism of the designers. Our living space looks amazing now.",
  },
  {
    name: "Arjun Mehta",
    role: "Client",
    review:
      "From planning to execution, everything was handled professionally. Highly recommended for interior design.",
  },
];

function Testimonials() {
  return (
    <div>
      <style>{`
        .testimonials-page {
          padding: 70px 8%;
          background: #f8f4ef;
          min-height: 80vh;
          text-align: center;
        }

        .testimonials-page h1 {
          font-size: 42px;
          color: #3d3028;
          margin-bottom: 10px;
        }

        .testimonials-page .subtitle {
          color: #777;
          font-size: 17px;
          margin-bottom: 45px;
        }

        .testimonial-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          max-width: 1000px;
          margin: auto;
        }

        .testimonial-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 5px 18px rgba(0,0,0,0.08);
          text-align: left;
          transition: 0.3s;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
        }

        .stars {
          color: #c49a6c;
          font-size: 20px;
          margin-bottom: 15px;
        }

        .testimonial-card p {
          color: #666;
          line-height: 1.7;
          font-size: 16px;
        }

        .testimonial-card h3 {
          color: #3d3028;
          margin-top: 20px;
          margin-bottom: 5px;
        }

        .testimonial-card span {
          color: #999;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .testimonial-container {
            grid-template-columns: 1fr;
          }

          .testimonials-page h1 {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="testimonials-page">
        <h1>Client Testimonials</h1>

        <p className="subtitle">
          What our clients say about their interior design experience
        </p>

        <div className="testimonial-container">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">★★★★★</div>

              <p>"{item.review}"</p>

              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;

