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

   pool.query("insert into events (title, subtitle, description) values ($1, $2, $3) RETURNING id",
       [ req.body.title, req.body.subTitle, req.body.description ],
       (err, ret) => {
	  console.log(err, ret)
	  req.body.id = ret.rows[0].id;
	  res.send(req.body);
	});
})

// update a specific event
app.put('/event', function (req, res, next) {
  console.log('Updating event ' + req.body);

   pool.query("update events set title = $1, set subtitle = $2, set description = $3) where id = $4",
       [ req.body.title, req.body.subTitle, req.body.description, req.body.id ],
       (err, ret) => {
	  console.log(err, ret)
	  res.send(req.body);
	});
})

// delete a specific event
app.delete('/event/:id', function (req, res, next) {
  console.log('Deleting event ' + req.params.id);
  
  pool.query("delete from events where id = $1", [ req.params.id ], (err, ret) => {
	  console.log(err, ret)
	  res.send({});
	});
})
