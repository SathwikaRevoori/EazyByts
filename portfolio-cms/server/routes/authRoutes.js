const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(401).json({ error: "User not found" });
    if (!(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Store user in session
    req.session.user = {
      id: user._id,
      username: user.username,
      role: user.role
    };

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
