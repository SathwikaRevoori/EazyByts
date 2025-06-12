const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/admin-data', authMiddleware('admin'), (req, res) => {
  res.json({ message: 'Admin-only data' });
});

module.exports = router;
