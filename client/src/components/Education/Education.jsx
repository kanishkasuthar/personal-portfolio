import "./Education.css";

import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

function Education() {
  return (
    <section className="education" id="education">

      <div className="education-title">

        <span>ACADEMIC BACKGROUND</span>

        <h1>Education</h1>

        <p>
          My academic journey has provided me with a strong foundation in
          software development, problem-solving, and modern technologies.
        </p>

      </div>

      <div className="education-card">

        <div className="degree-icon">
          <FaGraduationCap />
        </div>

        <div className="degree-content">

          <h2>Bachelor of Technology</h2>

          <h3>Information Science & Technology</h3>

          <h4>Specialization in Artificial Intelligence & Data Science</h4>

          <div className="details">

            <p>
              <FaUniversity />
              Presidency University, Bangalore
            </p>

            <p>
              <FaCalendarAlt />
              2024 – Present
            </p>

          </div>

        </div>

      </div>

      <div className="education-stats">

        <div className="stat">

          <FaStar />

          <h2>8.92</h2>

          <span>Current CGPA</span>

        </div>

      </div>

      <div className="previous-education">

        <h2>Previous Education</h2>

        <div className="previous-card">

          <div>

            <h3>Pre-University Course (PUC)</h3>

            <p>Science Stream</p>

          </div>

          <span>2022 – 2024</span>

        </div>

        <div className="previous-card">

          <div>

            <h3>Secondary School (SSLC)</h3>

            <p>Completed Secondary Education</p>

          </div>

          <span>Completed</span>

        </div>

      </div>

    </section>
  );
}

export default Education;