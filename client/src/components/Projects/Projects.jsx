import "./Projects.css";

import {
  FaLaptopCode,
  FaRobot,
  FaTasks,
  FaShieldAlt,
  FaTrain,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaRobot />,
    title: "Air Paint AI",
    description:
      "AI-powered application that enables users to draw in the air using hand gestures detected through a webcam.",
    tech: ["HTML", "CSS", "JavaScript", "MediaPipe"],
    github: "",
  },

  {
    icon: <FaLaptopCode />,
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio showcasing my skills, education, projects and achievements.",
    tech: ["React", "Node.js", "Express.js", "CSS"],
    github: "",
  },

  {
    icon: <FaTasks />,
    title: "Multi-User Todo App",
    description:
      "Task management application with authentication and CRUD operations for multiple users.",
    tech: ["React", "Node.js", "Express.js", "MySQL"],
    github: "",
  },

  {
    icon: <FaShieldAlt />,
    title: "Login Authentication",
    description:
      "Secure authentication system using JWT and middleware with protected routes.",
    tech: ["Node.js", "Express.js", "JWT"],
    github: "",
  },

  {
    icon: <FaTrain />,
    title: "Railway Obstacle Detection",
    description:
      "Arduino-based railway safety project for detecting obstacles on railway tracks.",
    tech: ["Arduino", "Sensors"],
    github: "",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-title">

        <span>MY WORK</span>

        <h1>Featured Projects</h1>

        <p>
          A selection of projects that showcase my learning journey,
          technical skills and practical development experience.
        </p>

      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-icon">
              {project.icon}
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-tech">

              {project.tech.map((tech, i) => (

                <span key={i}>
                  {tech}
                </span>

              ))}

            </div>

            {project.github && (

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >

                <FaGithub />

                <span>View Code</span>

              </a>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;