const { Client } = require('pg');
const connectionString =
  process.env.NODE_ENV === 'PROD'
    ? process.env.PG_PROD_URI
    : process.env.PG_TEST_URI;
const client = new Client(connectionString);

client.connect();
module.exports = client;
