const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: { type: String, required: true },
  // userId: { type: uuid, required: true },
  name: { type: String, required: true },
  email: {type: String, required: true },
  isConnected: { type: Boolean, required: true },
  currentGames: { type: Array, required: false },
  points: { type: Number, required: false }
});

module.exports = mongoose.model('User', userSchema);
