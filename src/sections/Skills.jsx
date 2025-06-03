import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Techstack</h2>
      <p className="skills-intro">
        These are the tools and technologies I use to build and maintain my projects.
      </p>
      <div className="skills-container">
        <div className="skill">
          <img src="/images/react-logo.png" alt="React" className="skill-logo" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src="/images/python-logo.png" alt="Python" className="skill-logo" />
          <p>Python</p>
        </div>
        <div className="skill">
          <img src="/images/springboot-logo.png" alt="Spring Boot" className="skill-logo" />
          <p>Spring Boot</p>
        </div>
        <div className="skill">
          <img src="/images/nodejs-logo.png" alt="Node.js" className="skill-logo" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <img src="/images/html-logo.png" alt="HTML" className="skill-logo" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <img src="/images/mongodb-logo.png" alt="MongoDB" className="skill-logo" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <img src="/images/java-logo.png" alt="Java" className="skill-logo" />
          <p>Java</p>
        </div>
        <div className="skill">
          <img src="/images/tailwind-logo.png" alt="Tailwind" className="skill-logo" />
          <p>Tailwind</p>
        </div>
        <div className="skill">
          <img src="/images/mysql-logo.png" alt="MySQL" className="skill-logo" />
          <p>MySQL</p>
        </div>
        <div className="skill">
          <img src="/images/javascript-logo.png" alt="Javascript" className="skill-logo" />
          <p>Javascript</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;