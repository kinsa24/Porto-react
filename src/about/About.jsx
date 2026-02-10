import "./about.css";
// import AOS from "aos";
// import { useEffect } from "react";
import { AboutSvg as Image } from "./aboutsvg/AboutSvg";

export const About = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 3000,
  //   });
  // }, []);
  return (
    <section id="about" className="about-section">
      <div className="about-text" data-aos="fade-up">
        <h1>
          About <span style={{ color: "#26e6c6", textAlign: "left" }}>Me</span>
        </h1>
        <p>
          As a web developer, i have gained hands-on experience through
          freelance projects and internships. Throughout my time in college, i
          focused on overcoming early academic challenges, using that
          determination to not only improve my grades but also to sharpen my
          technical skills and evolve as a developer.
        </p>
        <p>
          Specializing in front-end development, I have a strong interest in
          crafting clean, responsive designs that prioritize user experience. I
          also take the time to explore back-end technologies, broadening my
          skills in preparation for eventually transitioning into a full-stack
          developer role.
        </p>
      </div>
      <div className="about-image-container" data-aos="fade-up">
        <Image />
      </div>
    </section>
  );
};
