import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <p className="skills-subtitle">MY EXPERTISE</p>
        <h1>Technical Skills</h1>
        <p className="skills-description">
          A collection of technologies, programming languages, databases, and
          development tools that I continuously learn and use to build modern
          web applications.
        </p>
      </div>

      <div className="skills-grid">

        {/* Frontend */}
        <div className="skill-card">
          <h2>Frontend Development</h2>

          <div className="badges">
            <span className="html">HTML</span>
            <span className="css">CSS</span>
            <span className="js">JavaScript</span>
            <span className="react">React.js</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h2>Backend Development</h2>

          <div className="badges">
            <span className="node">Node.js</span>
            <span className="express">Express.js</span>
            
          </div>
        </div>

        {/* Programming */}
        <div className="skill-card">
          <h2>Programming Languages</h2>

          <div className="badges">
            <span className="java">Java</span>
            <span className="python">Python</span>
            <span className="cpp">C++</span>
            <span className="c">C</span>
          </div>
        </div>

        {/* Database */}
        <div className="skill-card">
          <h2>Database</h2>

          <div className="badges">
            <span className="mysql">MySQL</span>
            <span className="sql">SQL</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h2>Tools & Platforms</h2>

          <div className="badges">
            
            <span className="github">GitHub</span>
            <span className="vscode">VS Code</span>
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;