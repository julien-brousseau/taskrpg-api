// Dependancies
const mongoose = require('mongoose');

const DATABASE_URL = '';

// Mongoose connection & settings
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
