// Dependancies
const mongoose = require('mongoose');

// Create the schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  xp: {
    type: Number,
    default: 100,
    required: true
  }
}, {
  timestamps: true
});

// Task model schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
