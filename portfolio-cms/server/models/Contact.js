const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  socialMedia: [{
    platform: String,
    link: String
  }]
});

module.exports = mongoose.model('Contact', contactSchema);
