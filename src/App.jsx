import { Navbar } from "./Navbar/Navbar";
import { Hero } from "./hero/Hero";
import { About } from "../src/about/About";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
import { WorkExperience } from "./work experience/work";
import { useEffect } from "react";
import AOS from "aos";
import { ThemeProvider } from "./context/ThemeContext";

export const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <ThemeProvider>
      <main className="main_container">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <WorkExperience />
        <Contact />
      </main>
    </ThemeProvider>
  );
};
