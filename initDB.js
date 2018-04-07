// lets initialize the postgres connection pool
const { Pool } = require('pg');
const url = require('url');
const postgresUrl = new url(process.env.DATABASE_URL);
const pool = new Pool({
  user: postgresUrl.username,
  host: postgresUrl.hostname,
  database: postgresUrl.pathname,
  password: postgresUrl.password,
  port: Number(postgresUrl.port),
});

//create our table
pool.query("CREATE TABLE IF NOT EXISTS cinemas (id serial, title text, subTitle text, description text)", (err, res) => {
  console.log(err, res)
  pool.end();
})

