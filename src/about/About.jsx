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
          My name is Muhammad Muhajirin Chinsa, but I usually go by Kinsa. I am
          currently pursuing a Bachelor's degree in Educational Informatics and
          Computer Engineering at a state university in Makassar, Universitas
          Negeri Makassar. With my skills in technology, I hope to help the
          people around me. Study diligently and don t worry about what will
          happen, success always comes to those who strive to achieve it.
        </p>
      </div>
      <div className="about-image-container" data-aos="fade-up">
        <Image />
      </div>
    </section>
  );
};
