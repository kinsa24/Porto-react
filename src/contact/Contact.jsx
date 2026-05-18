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
        }}
      >
        <h1>
          Contact<span style={{ color: "#26e6c6" }}> Me</span>
        </h1>
        <span style={{ color: "var(--muted-color)", marginTop: "12px" }}>
          Always open to cool projects and new opportunities. Got an idea or
          just want to say hi? Let’s talk.
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
                className="contact-link"
              >
                muhkinsa081924@gmail.com
              </a>
            </div>
          </div>

          {/* Location Section */}
          {/* <div className="contact-info-block">
            <div className="contact-icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <div>
              <h4>Location</h4>
              <p className="contact-text">
                Sulawesi Selatan, Makassar, Indonesia
              </p>
            </div>
          </div> */}

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
                className="contact-link"
              >
                +62 852-9832-5668
              </a>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="contact-social-section">
            <h3>Follow Me</h3>
            <div className="contact-social-icons">
              <a
                href="https://github.com/kinsa24"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-muhajirin-chinsa-143b73344/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/kinsaaaa_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Replace Form with OpenStreetMap iframe */}
        <div className="contact-right">
          <div className="map-container">
            <iframe
              title="Makassar Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=119.350000%2C-5.250000%2C119.600000%2C-5.000000&layer=mapnik"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}; 