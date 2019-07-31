const { Client } = require('pg');

const client = new Client(process.env.PG_TEST_URI);

client.connect(err => {
  if (err) {
    console.error(err);
  }
});

module.exports = client;
