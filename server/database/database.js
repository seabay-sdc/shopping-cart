const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
.then(() => console.log('DB connected'))
.catch(console.error);
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

// cart methods
const cart = {
  get: (item = {}) => {
    return CartItems.find(item).exec();
  },
  add: (item) => {
    return products.get(item)
      .then((products) => CartItems.insertMany(products))
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