const mongoose = require('mongoose');
const connection = require('./config');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  category: String,
  img1_url: String
});

const CartItemSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  category: String,
  img1_url: String,
  quantity: Number,
});

const CartItems = connection.model('cart_item', CartItemSchema);
const Products = connection.model('product', ProductSchema);

// cart methods
const cart = {
  get: (item = {}) => {
    return CartItems.find(item).exec();
  },
  add: (item) => {
    return products.get({ id: item.id })
      .then(([ product ]) => {
        return cart.get({ id: product.id })
          .then((query) => [ query, product ]);
      })
      .then(([ query, product ]) => {
        if (query.length === 0) {
          const cartItem = JSON.parse(JSON.stringify(product));
          cartItem.quantity = item.quantity;
          return CartItems.create(cartItem)
            .then(console.log);
        } else {
          const newQty = query[0].quantity + item.quantity;
          return CartItems.updateOne({ id: product.id }, { quantity: newQty });
        }
      })
      .catch(console.error);
  },
  remove: (item) => {
    return CartItems.deleteOne(item).exec();
  },
};

// product methods
const products = {
  get: (item = {}) => {
    return Products.find(item).exec();
  },
};

module.exports = { cart, products };