// Dependancies
const mongoose = require('mongoose');

// Create the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  level: {
    type: Number,
    default: 1,
    required: true
  },
  xp: {
    type: Number,
    default: 0,
    required: true
  }
}, {
  timestamps: true
});

// Task model schema
const User = mongoose.model('User', userSchema);

module.exports = User
;
