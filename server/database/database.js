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
  img1_url: String,
  quantity: Number,
});

const Products = mongoose.model('product', ProductSchema);
const CartItems = mongoose.model('cart_item', CartItemSchema);

// cart methods
const cart = {
  get: (item = {}) => {
    return CartItems.find(item).exec();
  },
  add: (item) => {
    return products.get({ id: item.id })
      .then((products) => {
        const cartItem = JSON.parse(JSON.stringify(products[0]));
        cartItem.quantity = item.quantity;
        CartItems.create(cartItem);
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