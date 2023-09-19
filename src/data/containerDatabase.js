const { Client } = require('pg');

const containerDbClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'PostgresSQLDemoDb',
  password: 'Forpostgresdev1!',
  port: 5432,
});

containerDbClient.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(e => console.error('Connection error', e.stack));

module.exports = containerDbClient;