// Fetch the Express application
const app = require('./app');

// Launch server
const port = 3000;
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
