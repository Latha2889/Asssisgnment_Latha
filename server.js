const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { URL } = require('url');

// lets initialize the postgres connection pool
const { Pool } = require('pg');
const postgresUrl = new URL(process.env.DATABASE_URL);
const pool = new Pool({
  user: postgresUrl.username,
  host: postgresUrl.hostname,
  database: postgresUrl.pathname.substr(1),
  password: postgresUrl.password,
  port: Number(postgresUrl.port),
});

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

  pool.query("select id, title, subTitle, description from events", (err, ret) => {
	  console.log(err, ret)
	  res.send(ret.rows);
	});
})

// get a specific event
app.get('/event/:id', function (req, res, next) {
  console.log('Getting event ' + req.params.id);
  
  pool.query("select id, title, subTitle, description from events where id = $1", [ req.params.id ], (err, ret) => {
	  console.log(err, ret)
	  res.send(ret.rows[0]);
	});
})

// add a specific event
app.post('/event', function (req, res, next) {
  console.log('Adding event ' + req.body);

   pool.query("insert into events (title, subTitle, description) values ($1, $2, $3)",
       [ req.body.title, req.body.subTitle, req.body.description ],
       (err, ret) => {
	  console.log(err, ret)
	  res.sendStatus(200);
	});
})