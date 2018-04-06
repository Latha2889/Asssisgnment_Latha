const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// We'll be accepting json
app.use(bodyParser.json());

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// get the event list
app.get('/event', function (req, res, next) {
  console.log('Getting events');
  next() // pass control to the next handler
})

// get a specific event
app.get('/event/:id', function (req, res, next) {
  console.log('Getting event ' + req.params.id);
  next() // pass control to the next handler
})

// add a specific event
app.post('/event', function (req, res, next) {
  console.log('Adding event ' + req.body);
  next() // pass control to the next handler
})