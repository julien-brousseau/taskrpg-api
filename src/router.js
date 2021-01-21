// Dependancies
const express = require('express');
const names = require('./utils/names');

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
  Task({ ...req.body })
    .save()
    .then(task => res.status(201).send(task))
    .catch(e => res.status(400).send(e.message));
});

// Complete a task
router.post('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    task.completed = true;
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send('ERROR');
  }
});

// Delete all tasks
router.delete('/tasks', async (req, res) => {
  Task.deleteMany()
    .then(tasks => res.status(200).send(tasks))
    .catch(e => console.log(e));
});

// Fetch a user or create one if no user exist
router.get('/users', async (req, res) => {
  try {
    let user = await User.findOne({});
    if (!user) {
      user = await createRandomUser();
    }
    res.status(201).send(user);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

// Create new random user
router.post('/users', async (req, res) => {
  createRandomUser()
    .then(user => res.status(201).send(user))
    .catch(e => res.status(400).json({ error: e }));
});

// Update user
router.post('/users/edit', async (req, res) => {
  try {
    const user = await User.findOne({});
    Object.assign(user, req.body);
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

// Delete all tasks and users
async function clearAll () {
  return User.deleteMany()
    .then(() => Task.deleteMany())
    .catch(e => console.log(e));
}

// Create a new random user
async function createRandomUser () {
  await clearAll();
  const name = names[Math.floor(Math.random() * names.length)];
  const user = new User({ name });
  return user.save();
}

// Export module
module.exports = router;
