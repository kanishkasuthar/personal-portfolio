import "./About.css";
import {
  FaGraduationCap,
  FaAward,
  FaMedal,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-heading">

        <span>Get To Know More</span>

        <h1>About Me</h1>

      </div>

      <div className="about-container">

        <div className="about-left">

          <h2>Hello! 👋</h2>

          <p>
            I'm <strong>Kanishka Suthar</strong>, a B.Tech student pursuing
            <strong> Information Science & Technology </strong>
            with a specialization in
            <strong> Artificial Intelligence & Data Science</strong>
            at Presidency University, Bangalore.
          </p>

          <p>
            I am passionate about learning new technologies, solving
            real-world problems, and continuously improving my technical
            and problem-solving skills. I enjoy working on practical
            projects, collaborating with teams, and building solutions
            that create meaningful impact.
          </p>

        </div>

        <div className="about-right">

          <div className="about-card">

            <FaGraduationCap className="about-icon" />

            <h3>Education</h3>

            <p>
              B.Tech (IST)
              <br />
              Presidency University
            </p>

          </div>

          <div className="about-card">

            <FaAward className="about-icon" />

            <h3>CGPA</h3>

            <p>
              8.92 / 10
            </p>

          </div>

          <div className="about-card">

            <FaMedal className="about-icon" />

            <h3>Achievements</h3>

            <p>
              IIT Alumni Convention
              <br />
              2nd Prize
            </p>

          </div>

          <div className="about-card">

            <FaLaptopCode className="about-icon" />

            <h3>Certification</h3>

            <p>
              Oracle AI
              <br />
              Foundation Associate
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;