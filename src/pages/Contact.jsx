
import React from "react";

function Contact() {
  return (
    <div>
      <style>{`
        .contact-page {
          padding: 70px 8%;
          background: #f8f4ef;
          min-height: 80vh;
        }

        .contact-page h1 {
          text-align: center;
          font-size: 42px;
          color: #3d3028;
          margin-bottom: 10px;
        }

        .contact-subtitle {
          text-align: center;
          color: #777;
          margin-bottom: 45px;
          font-size: 17px;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          max-width: 1100px;
          margin: auto;
        }

        .contact-info,
        .contact-form {
          background: white;
          padding: 35px;
          border-radius: 12px;
          box-shadow: 0 5px 18px rgba(0,0,0,0.08);
        }

        .contact-info h2,
        .contact-form h2 {
          color: #3d3028;
          margin-bottom: 20px;
        }

        .contact-info p {
          color: #666;
          line-height: 1.7;
          margin: 15px 0;
        }

        .contact-info strong {
          color: #3d3028;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 13px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 15px;
          box-sizing: border-box;
          outline: none;
        }

        .contact-form textarea {
          height: 120px;
          resize: none;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #b28b64;
        }

        .contact-form button {
          width: 100%;
          padding: 14px;
          background: #3d3028;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .contact-form button:hover {
          background: #b28b64;
        }

        .map {
          margin-top: 25px;
          width: 100%;
          height: 180px;
          border: none;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          .contact-page h1 {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="contact-page">
        <h1>Contact Us</h1>

        <p className="contact-subtitle">
          Let's create a beautiful space together
        </p>

        <div className="contact-container">

          <div className="contact-info">
            <h2>Design Studio</h2>

            <p>
              Have a project in mind? Contact our interior design team and
              let's bring your ideas to life.
            </p>

            <p>
              <strong>📍 Address:</strong><br />
              25 Design Street, Hyderabad, Telangana
            </p>

            <p>
              <strong>📞 Phone:</strong><br />
              +91 98765 43210
            </p>

            <p>
              <strong>✉ Email:</strong><br />
              hello@interiorstudio.com
            </p>

            <iframe
              className="map"
              title="Design Studio Location"
              src="https://www.google.com/maps?q=Hyderabad,India&output=embed"
            ></iframe>
          </div>

          <div className="contact-form">
            <h2>Send an Inquiry</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your inquiry has been submitted.");
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <input
                type="text"
                placeholder="Project Type"
                required
              />

              <textarea
                placeholder="Tell us about your project..."
                required
              ></textarea>

              <button type="submit">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;

