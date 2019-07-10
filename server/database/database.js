const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
const connection =  mongoose.connection;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

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
  img1_url: String
});

const Products = mongoose.model('product', ProductSchema);
const CartItems = mongoose.model('cart_item', CartItemSchema);

module.exports = { Products, CartItems };