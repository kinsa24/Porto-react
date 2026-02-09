import "./contact.css";
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
// import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  // State untuk form feedback
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form submission - UI only
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      {/* === HEADER SECTION === */}
      <div
        className="contact-header"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}>
        <h1>
          Contact<span style={{ color: "#26e6c6" }}> Me</span>
        </h1>
        <span style={{ color: "white", marginTop: "12px" }}>
          Always open to cool projects and new opportunities. Got an idea or
          just want to say hi? Let s talk.
        </span>
      </div>

      {/* === MAIN CONTAINER: Left & Right Columns === */}
      <div className="contact-container">
        
        {/* LEFT COLUMN - Contact Info & Social Icons */}
        <div className="contact-left">
          {/* Email Section */}
          <div className="contact-info-block">
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <div>
              <h4>Email</h4>
              <a
                href="mailto:muhkinsa081924@gmail.com"
                className="contact-link">
                muhkinsa081924@gmail.com
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="contact-info-block">
            <div className="contact-icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <div>
              <h4>Location</h4>
              <p className="contact-text">
                Sulawesi Selatan, Makassar, Indonesia
              </p>
            </div>
          </div>

          <div className="contact-info-block">
            <div className="contact-icon-wrapper">
              <FaWhatsapp className="contact-icon" />
            </div>
            <div>
              <h4>WhatsApp</h4>
              <a
                href="https://wa.me/6285298325668"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link">
                +62 852-9832-5668
              </a>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="contact-social-section">
            <h3>Follow Me</h3>
            <div className="contact-social-icons">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn">
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn">
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Contact Form (UI Only) */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="form-input"
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="form-input"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your message here..."
                className="form-textarea"
                rows="5"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="form-submit-btn">
              Send Message
            </button>

            {/* UI Only Feedback */}
            {formSubmitted && (
              <p className="form-feedback">✨ UI only – coming soon</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
