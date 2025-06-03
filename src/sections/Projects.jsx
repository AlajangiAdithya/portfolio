import React, { useState } from "react";
import "../styles/projects.css";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Personal Portfolio Website",
      image: "/images/portfolio.png",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
      techStack: ["React.js", "CSS3", "Framer Motion", "Vite", "Netlify"],
    },
    {
      title: "Coming Soon...",
      image: "", // No image for now
      github: "",
      demo: "",
      techStack: [],
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="project-carousel">
        <button className="scroll-btn left" onClick={handlePrev}>&#8592;</button>

        <div className="project-card">
          {/* Left Side: Project Image */}
          {projects[currentIndex].image && (
            <div className="project-image-container">
              <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="project-image" />
            </div>
          )}

          {/* Right Side: Project Details */}
          <div className="project-details">
            <h3>{projects[currentIndex].title}</h3>
            
            {/* Tech Stack */}
            {projects[currentIndex].techStack.length > 0 && (
              <div className="tech-stack">
                <h4>Tech Stack Used:</h4>
                <ul>
                  {projects[currentIndex].techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* GitHub & Demo Links */}
            <div className="project-links">
              {projects[currentIndex].github && (
                <a href={projects[currentIndex].github} target="_blank" rel="noopener noreferrer" className="btn">
                  GitHub Repository
                </a>
              )}
              {projects[currentIndex].demo && (
                <a href={projects[currentIndex].demo} target="_blank" rel="noopener noreferrer" className="btn secondary">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        <button className="scroll-btn right" onClick={handleNext}>&#8594;</button>
      </div>
    </section>
  );
};

export default Projects;