// Create App from Express with mongoose config
const express = require('express');
const app = express();
require('./db');

// Allows to parse any kind of recieved data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Prevent x-site errors
const cors = require('cors');
app.use(cors());

// Attach router
const router = require('./router');
app.use(router);

module.exports = app;
