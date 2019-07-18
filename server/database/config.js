const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(console.error);

const connection =  mongoose.connection;

module.exports = connection;