const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  isOpen: { type: Boolean, required: true }
});

module.exports = mongoose.model('Game', userSchema);
