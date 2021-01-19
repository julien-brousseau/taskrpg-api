// Dependancies
const mongoose = require('mongoose');

const DATABASE_URL = 'mongodb://localhost:27017/dev';

// Mongoose connection & settings
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});
mongoose.connection.on('error', (err) => {
  console.log('Database error:' + err);
});
