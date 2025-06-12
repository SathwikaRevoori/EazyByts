const express = require('express');
const router = express.Router();
const Theme = require('../models/Theme');
const authMiddleware = require('../middleware/auth');

// Update theme
router.put('/:userId', authMiddleware(), async (req, res) => {
  const theme = await Theme.findOneAndUpdate(
    { userId: req.params.userId },
    req.body,
    { new: true, upsert: true }
  );
  res.json(theme);
});
