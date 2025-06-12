const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  primaryColor: String,
  secondaryColor: String,
  fontFamily: String,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Theme', themeSchema);
