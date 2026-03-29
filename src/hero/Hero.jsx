import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./hero.css";
import { Social } from "./Social";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-wrapper" data-aos="fade-up">
        <div className="title-container">
        <h1>
          Hi, I'm
          M. Muhajirin<span style={{ color: "#26e6c6" }}> Chinsa</span> 
        </h1>
        <h3>Software Engineer</h3>
      </div>
        
        <h className="hero-description">
         Developing modern, scalable, and responsive web solutions.
        </h>
        
        <div className="hero-cta">
          {/* <a href={resume} download className="btn btn-primary">
            Download CV
          </a> */}
          <button className="btn btn-secondary" onClick={handleGetInTouch} style={{justifyContent: "center"}}>
            Contact
          </button>
        </div>
        <Social />
      </div>
    </section>
  );
};
