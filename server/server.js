// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Products, CartItems } = require('./database/database');
const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.status(200).send('Get request successful!');
});

app.get('/api/data', (req, res) => {
  CartItems.find({})
  .then((products) => res.status(200).send(products))
  .catch(console.error);
});

app.listen(port, () => console.log(`Server is running on ${port}`));