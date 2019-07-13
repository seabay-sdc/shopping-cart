// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const db = require('./database/database');
const app = express();
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/dist'));

// http get /api/cart/items --> all cart items
app.get('/api/cart/items', (req, res) => {
  db.cart.get()
    .then((items) => res.status(200).send(items))
    .catch((err) => res.status(400).send());
});

// http get /api/cart/items/{id} --> single item from cart
app.get('/api/cart/items/:id', (req, res) => {
  db.cart.get({ id: req.params.id })
    .then((item) => res.status(200).send(item))
    .catch((err) => res.status(400).send());
});

// http post /api/cart/items/ --> single item to cart
app.post('/api/cart/items/', (req, res) => {
  db.cart.add({ id: req.body.id })
    .then(() => res.status(201).send())
    .catch((err) => res.status(400).send());
});



app.post('/api/cart/item', (req, res) => {
  db.findProductById(req.body.id)
    .then(([ item ]) => db.addItemsToCart(item))
    .then(() => res.status(201).send());
});

app.listen(port, host, () => console.log(`Server is running on ${port}`));