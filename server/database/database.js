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
    return Products.find(item).exec()
      .then((products) => CartItems.insertMany(products))
      .catch(console.error);
  },
};

const products = {

};


const getCartItems = () => {
  return CartItems.find({})
  .catch(console.error);
};

const addItemsToCart = (item) => {
  return CartItems.find(item)
  .then((resultArray) => resultArray.length > 0)
  .then((exists) => exists ? null : CartItems.insertMany([ item ]))
  .catch(console.error);
}

const findProductById = (id) => {
  return Products.find({ id: id })
  .catch(console.error);
};

module.exports = { cart, products };