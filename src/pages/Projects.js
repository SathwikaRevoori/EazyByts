import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch dynamic projects from backend (optional)
  useEffect(() => {
  axios.get("https://revoori-sathwika-reddy.onrender.com/api/projects", { withCredentials: true })
    .then(res => {
      console.log('API Response:', res.data); // Check this in the browser console
      setProjects(res.data);
    })
    .catch(err => console.error('Error:', err));
}, []);

  // Static projects from your resume
  const staticProjects = [
    {
      title: "Cricket Match Winner Predictor",
      description: "Developed a Python program to predict team winning percentages based on player skills and pitch conditions."
    },
    {
      title: "Hospital Management System",
      description: "Developed a database system to manage hospital data and generate patient health risk reports using Common Table Expression."
    },
    {
      title: "Analysis of Global Education Data Using Power BI",
      description: "Used Power BI tools to analyze educational and gender disparities in different countries using different graphs."
    },
    {
      title: "Front-end Web Development Projects",
      description: "Developed a wide range of website designs using frontend technology in CodePen."
    },
    {
      title: "Skin Cancer Detection Machine Learning Model",
      description: "Developed a basic machine learning model to distinguish between benign and malignant skin cancer from images, using Python libraries."
    },
    {
      title: "Study on Quantum Communication Networks (QCN)",
      description: "Explored fundamental concepts, technologies and potential applications of QCNs."
    }
  ];

  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Projects</h1>
      <ul>
        {/* Static projects with animations */}
        {staticProjects.map((project, index) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <strong>{project.title}</strong>
            <p>{project.description}</p>
          </motion.li>
        ))}
        {/* Dynamic projects from backend (optional) */}
        {projects.map(project => (
          <motion.li
            key={project._id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: staticProjects.length * 0.1 }}
          >
            <strong>{project.title}</strong>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Projects;
