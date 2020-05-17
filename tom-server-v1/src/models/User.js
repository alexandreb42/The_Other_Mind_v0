const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  gameId: { type: String, required: true },
  isConected: { type: Boolean, required: true },
  // userId: { type: uuid, required: true },
  points: { type: Number, required: true },
});

module.exports = mongoose.model('User', userSchema);
