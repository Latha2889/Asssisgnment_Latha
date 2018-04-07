const { Pool } = require('pg');
const { URL } = require('url');
const postgresUrl = new URL(process.env.DATABASE_URL);
const pool = new Pool({
  user: postgresUrl.username,
  host: postgresUrl.hostname,
  database: postgresUrl.pathname.substr(1),
  password: postgresUrl.password,
  port: Number(postgresUrl.port),
});

(async () => {
  // note: we don't try/catch this because if connecting throws an exception
  // we don't need to dispose of the client (it will be undefined)
  const client = await pool.connect()

  try {
    await client.query('BEGIN')
    const { rows } = await client.query("CREATE TABLE IF NOT EXISTS events (id serial, title text, subTitle text, description text)")

    await client.query('COMMIT')
  } catch (e) {
    await client.query('ROLLBACK')
    throw e
  } finally {
    client.release()
  }
})().catch(e => console.error(e.stack))