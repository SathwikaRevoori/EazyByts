const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  heroHeadline: { type: String, required: true },
  heroSubheadline: { type: String, required: true },
  ctaButtonText: { type: String, required: true },
  ctaButtonLink: { type: String, required: true }
});

module.exports = mongoose.model('Home', homeSchema);
