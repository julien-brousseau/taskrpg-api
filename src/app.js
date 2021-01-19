// Create App from Express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
require('./db');

// Allows to parse any kind of recieved data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(cors());

// Attach router
const router = require('./router');
app.use(router);

module.exports = app;
