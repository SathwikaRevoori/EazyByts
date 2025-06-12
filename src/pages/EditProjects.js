import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditProjects() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', imageUrl: '', link: '' });
  const navigate = useNavigate();

  useEffect(() => {
  axios.get("https://revoori-sathwika-reddy.onrender.com/api/projects", { withCredentials: true })
    .then(res => {
      console.log('Projects fetched:', res.data);
      setProjects(res.data);
    })
    .catch(err => {
      console.error('Fetch error:', err.response?.data || err.message);
    });
}, []);


  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://revoori-sathwika-reddy.onrender.com/api/projects",
        newProject,
        { withCredentials: true } // Send session cookie
      );
      // Refresh projects list
      const res = await axios.get("https://revoori-sathwika-reddy.onrender.com/api/projects", { withCredentials: true });
      setProjects(res.data);
      setNewProject({ title: '', description: '', imageUrl: '', link: '' });
    } catch (error) {
      console.error('Error adding project:', error.response?.data || error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://revoori-sathwika-reddy.onrender.com/api/projects/${id}`, { withCredentials: true });
      // Refresh projects list
      const res = await axios.get("https://revoori-sathwika-reddy.onrender.com/api/projects", { withCredentials: true });
      setProjects(res.data);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="editor-container">
      <h2>Manage Projects</h2>
      <form onSubmit={handleAdd}>
        <label>Title:
          <input
            name="title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            required
          />
        </label>
        <label>Description:
          <input
            name="description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            required
          />
        </label>
        <label>Image URL:
          <input
            name="imageUrl"
            value={newProject.imageUrl}
            onChange={(e) => setNewProject({ ...newProject, imageUrl: e.target.value })}
            required
          />
        </label>
        <label>Link:
          <input
            name="link"
            value={newProject.link}
            onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
            required
          />
        </label>
        <button type="submit">Add Project</button>
      </form>
      <div>
        {projects.map(project => (
          <div key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => handleDelete(project._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditProjects;
