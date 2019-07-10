// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./database/database');
const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/dist'));

app.get('/api/data', (req, res) => {
  db.getCartItems()
  .then((cartItems) => res.status(200).send(cartItems));
});

app.post('/api/cart', (req, res) => {
  db.findProductById(req.body.id)
  .then((itemsArray) => db.addItemsToCart(itemsArray))
  .then(() => res.status(201).send());
});

app.listen(port, () => console.log(`Server is running on ${port}`));