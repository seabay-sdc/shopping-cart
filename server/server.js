// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const db = require('./database/mongo');
// const db = require('./database/postgres');
const app = express();
// const faker = require('faker');
// const fs = require('fs');

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/dist'));

// http get /api/cart/items --> all cart items
app.get('/api/cart/items', (req, res) => {
  db.cart
    .get()
    .then(items => res.status(200).send(items))
    .catch(err => res.status(400).send());
});

// http get /api/cart/items/{id} --> single item from cart
app.get('/api/cart/items/:id', (req, res) => {
  db.cart
    .get({ id: req.params.id })
    .then(item => res.status(200).send(item))
    .catch(err => res.status(400).send());
});

// http post /api/cart/items/ --> single item to cart
app.post('/api/cart/items/', (req, res) => {
  db.cart
    .add({ id: req.body.id, quantity: req.body.quantity })
    .then(() => res.status(201).send())
    .catch(err => res.status(400).send());
});

// http delete /api/cart/items/{id} --> delete single item from cart
app.delete('/api/cart/items/:id', (req, res) => {
  db.cart
    .remove({ id: req.params.id })
    .then(() => res.status(200).send())
    .catch(err => res.status(400).send());
});

// http get /api/products/{id} --> dingle product from products
app.get('/api/products/:id', (req, res) => {
  db.products
    .get({ id: req.params.id })
    .then(product => res.status(200).send(product))
    .catch(err => res.status(400).send());
});

// const generateData = async () => {
//   for (let i = 0; i < 1000; i++) {
//     let productsArr = [];
//     for (let i = 0; i < 10000; i++) {
//       let newProduct = {
//         id: i,
//         name: faker.commerce.productName(),
//         price: (parseFloat(faker.commerce.price()) + Math.random()).toFixed(2),
//         category: faker.commerce.department(),
//         img1_url: faker.image.abstract()
//       };
//       productsArr.push(newProduct);
//     }
//     try {
//       await db.products.add(productsArr);
//       console.log(`successfully logged number ${i} at ${Date.now()}`);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// };

// generateData();

// let longStr = '';
// console.time('timer');
// for (let i = 0; i < 1000000; i++) {
//   longStr += `${faker.random.uuid()},${faker.commerce.productName()},${(
//     parseFloat(faker.commerce.price()) + Math.random()
//   ).toFixed(2)},${faker.commerce.department()},${faker.image.abstract()}\n`;
// }

// (async () => {
//   await fs.appendFile('./seeding.csv', longStr, err => {
//     if (err) {
//       console.log(err);
//     }
//   });
//   console.timeEnd('timer');
// })();

module.exports = app;
