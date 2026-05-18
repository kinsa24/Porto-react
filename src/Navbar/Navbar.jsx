import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";
import Logo from "../assets/Otak.png";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const navRef = useRef();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <img src={Logo} alt="logo" className="logo" />
        <nav className="navbar" ref={navRef}>
          <Link
            to="home"
            className="nav-group"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Home
          </Link>
          <Link
            to="about"
            className="nav-group"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-20}
            duration={1000}
          >
            About
          </Link>
          <Link
            to="skills"
            className="nav-group"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
          >
            Skills
          </Link>
          {/* <Link
            to="projects"
            className="nav-group"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={10}
            duration={1000}
          >
            Project
          </Link> */}
          <Link
            to="contact"
            className="nav-group"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Contact
          </Link>
          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </nav>
        <div className="header-right">
          <button
            className="theme-toggle-nav-btn"
            onClick={toggleTheme}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            <span className="theme-toggle-nav-icon">{isDark ? "🌙" : "☀️"}</span>
          </button>
          <button onClick={showNavbar} className="nav-btn">
            <FaBars />
          </button>
        </div>
      </header>
    </>
  );
};
