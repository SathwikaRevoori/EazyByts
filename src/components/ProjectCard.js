import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-img" />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
      <a href={project.liveLink} target="_blank" rel="noreferrer">Live Demo</a> | 
      <a href={project.githubLink} target="_blank" rel="noreferrer"> GitHub</a>
    </div>
  );
}

export default ProjectCard;
