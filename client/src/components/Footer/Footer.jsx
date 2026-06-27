import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Section */}

        <div className="footer-left">

          <h2>Kanishka Suthar</h2>

          <p>
            B.Tech student in Information Science & Technology,
            passionate about creating modern, user-friendly web
            applications and continuously learning new technologies.
          </p>

        </div>

        {/* Middle Section */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Right Section */}

        <div className="footer-social">

          <h3>Connect With Me</h3>

          <div className="social-icons">

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Kanishka Suthar. All Rights Reserved.
        </p>

        <button onClick={scrollToTop}>

          <FaArrowUp />

        </button>

      </div>

    </footer>
  );
}

export default Footer;