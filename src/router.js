// Dependancies
const express = require('express');

// Create Express router
const router = new express.Router();

// Models
const Task = require('./models/Task');
const User = require('./models/User');

// Fetch all tasks
router.get('/tasks', async (req, res) => {
  Task.find()
    .then(tasks => res.status(200).send(tasks))
    .catch(e => res.status(400).send(e.message));
});

// Create a new task
router.post('/tasks', async (req, res) => {
  const task = new Task({ ...req.body });
  task.save()
    .then(() => res.status(201).send(task))
    .catch(e => res.status(400).send(e.message));
});

// Complete a task
router.post('/tasks/:id', async (req, res) => {
});

// Delete all tasks
router.delete('/tasks', async (req, res) => {
});

// Export module
module.exports = router;
