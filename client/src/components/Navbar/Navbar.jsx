import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">KS</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
        <li><a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

        <li>
          <a
            href="/resume.pdf"
            download
            className="mobile-resume"
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
        </li>

      </ul>

      <a href="/resume.pdf" download className="resume-btn">
        Download Resume
      </a>

    </nav>
  );
}

export default Navbar;