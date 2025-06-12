const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' }
});

// DO NOT use a pre-save hook for password hashing here,
// as you already hash it in your registration route.

module.exports = mongoose.model('User', userSchema);
