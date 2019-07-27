const connection = require('./config');
const Schema = require('mongoose').Schema;

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
  quantity: Number
});

const CartItems = connection.model('cart_item', CartItemSchema);
const Products = connection.model('product', ProductSchema);

module.exports = { CartItems, Products };
