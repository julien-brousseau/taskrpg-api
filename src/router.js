// Dependancies
const express = require('express');

// Create Express router
const router = new express.Router();

// Fetch all tasks
router.get('/tasks', async (req, res) => {
});

// Create a new task
router.post('/tasks', async (req, res) => {
});

// Complete a task
router.post('/tasks/:id', async (req, res) => {
});

// Delete all tasks
router.delete('/tasks', async (req, res) => {
});

// Export module
module.exports = router;
