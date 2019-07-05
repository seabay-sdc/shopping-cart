const mysql = require('mysql');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
.then(() => console.log('Database connected'))
.catch(() => console.log('Connection failed'));

module.exports = db;