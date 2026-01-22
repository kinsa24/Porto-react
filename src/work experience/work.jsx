import "./work.css";
import AOS from "aos";
import { useEffect } from "react";

export const WorkExperience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Frelance Developer",
      company: "Self-Employed",
      period: "2024 - Present",
      description: "Developed web applications and features, including UI implementation, backend logic, and database management, tailored to client needs.",
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "PT. Prima Inti Teknolindo",
      period: "2025 - 2026",
      description: "Designed and implemented an employee attendance and personnel data management system using Laravel, ensuring a well-structured and scalable application.",
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Diskominfo Makassar",
      period: "June - August 2025",
      description: "Designed a web-based information interface for the Mayor of Makassar activities using React, focusing on clean UI and component-based structure.",
    },
  ];

  return (
    <section id="work" className="work-experience">
      <div className="title-container">
        <h1>
          Work <span style={{ color: "#18dcb2" }}>Experiance</span>
        </h1>
        <p>My journey</p>
      </div>
      
      <div className="work-timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="work-item"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="work-content">
              <div className="work-header-item">
                <h3 className="work-role">{exp.role}</h3>
                <span className="work-period">{exp.period}</span>
              </div>
              <p className="work-company">{exp.company}</p>
              <p className="work-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
