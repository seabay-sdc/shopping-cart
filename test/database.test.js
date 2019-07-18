// require expect from chai
const should = require('chai').should();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { MongoMemoryServer } = require('mongodb-memory-server');
const methods = require('../server/database/index');
// let CartItems;
// let Products;

const products = {
  get: (item = {}) => {
    return Products.find(item).exec();
  },
};

before('Setup temporary MongoDB server', (done) => {
  mongoServer = new MongoMemoryServer();
  mongoServer
    .getConnectionString()
    .then((uri) => {
      mongoose.connect(uri, { useNewUrlParser: true })
    })
    .then(() => {
      const CartItemSchema = new Schema({
        id: Number,
        name: String,
        price: Number,
        category: String,
        img1_url: String,
        quantity: Number,
      });

      const ProductSchema = new Schema({
        id: Number,
        name: String,
        price: Number,
        category: String,
        img1_url: String
      });

      CartItems = mongoose.model('cart_item', CartItemSchema);
      Products = mongoose.model('product', ProductSchema);
    })
    .then(() => {
    })
    .then(() => done())
    .catch((err) => done(err));
});

after('Teardown temporary MongoDB server', () => {
  mongoose.disconnect();
  mongoServer.stop();
});

describe('Cart model methods', () => {
  it('Should return true as true', () => {
    (true).should.be.true;
  });
});