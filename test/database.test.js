// require expect from chai
const should = require('chai').should();
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Schema = mongoose.Schema;
let ProductSchema;
let Products;
let products;

before('Setup temporary MongoDB server', (done) => {
  mongoServer = new MongoMemoryServer();
  mongoServer
    .getConnectionString()
    .then((uri) => {
      console.log('uri is ', uri);
      mongoose.connect(uri, { useNewUrlParser: true })
    })
    .then(() => {
      ProductSchema = new Schema({
        id: Number,
        name: String,
        price: Number,
        category: String,
        img1_url: String
      });

      Products = mongoose.model('product', ProductSchema);
    })
    .then(() => {
      products = {
        get: (item = {}) => {
          return Products.find(item).exec();
        },
      };
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