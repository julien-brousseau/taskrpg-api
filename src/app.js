// Create App from Express
const express = require('express');
const app = express();

// Attach router
const router = require('./router');
app.use(router);

module.exports = app;
