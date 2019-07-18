// require expect from chai
const should = require('chai').should();
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

before('Setup temporary MongoDB server', (done) => {
  mongoServer = new MongoMemoryServer();
  mongoServer
    .getConnectionString()
    .then((uri) => mongoose.connect(uri, (err) => err ? done(err) : null))
    .then(() => done());
});

after('Teardown temporary MongoDB server', () => {
  mongoose.disconnect();
  mongoServer.stop();
});

describe('Cart model methods', () => {
  it('Should assert true to be true', () => {
    (true).should.be.true;
  });
});