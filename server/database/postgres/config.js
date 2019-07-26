const { Client } = require('pg');
const connectionString = 'postgres://localhost:5432/productsTEST';
const client = new Client(connectionString);

client.connect();
// (async () => {
//   const query = await client.query('SELECT * FROM productsTEST');
//   console.log(query.rows[0]);
//   client.end();
// })();
module.exports = client;
