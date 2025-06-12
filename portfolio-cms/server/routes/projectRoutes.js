const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const requireAuth = require('../middleware/auth');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// POST a new project (admin only)
router.post('/', async (req, res) => {
  console.log('Received POST data:', req.body);
  try {
    const newProject = await Project.create({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      link: req.body.link
    });
    console.log('Project saved to DB:', newProject);
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error saving project:', error.message);
    res.status(500).json({ error: 'Failed to save project' });
  }
});



// DELETE a project (admin only)
router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    await Project.findByIdAndDelete(id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

module.exports = router;
