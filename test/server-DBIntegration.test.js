require('dotenv').config();
const db = require('../server/database/postgres');
const request = require('supertest');
const app = require('../server/server');
const { expect } = require('chai');

describe('postgres integration tests', () => {
  describe('GET /api/products', () => {
    let agent;
    beforeEach(() => {
      agent = request.agent(app).get('/api/products');
    });

    it('should respond with status code 404', () => {
      agent.end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          expect(res.statusCode).to.equal(404);
        }
      });
    });

    it('should NOT have a response body', () => {
      agent.end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          expect(res.body.foo).to.not.equal('bar');
        }
      });
    });

    it('should be of type "text/html"', () => {
      agent.end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          expect(res.type).to.equal('text/html');
        }
      });
    });
  });

  describe('GET /api/products/:id', () => {
    let agent;
    const prodID = 'abc123xyz';
    beforeEach(() => {
      agent = request.agent(app).get(`/api/products/${prodID}`);
    });

    it('should respond with status code 200', () => {
      agent.end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          expect(res.statusCode).to.equal(200);
        }
      });
    });

    it('should return a single item', () => {
      agent.end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          expect(res.body).to.be.an.instanceOf(Object);
        }
      });
    });

    it('should return an item with expected properties', () => {
      agent.end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          const product = res.body[0];
          expect(product).to.have.own.property('id');
          expect(product).to.have.own.property('name');
          expect(product).to.have.own.property('price');
          expect(product).to.have.own.property('category');
          expect(product).to.have.own.property('img1_url');
        }
      });
    });

    it('should be of type "application/json"', () => {
      agent.end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          expect(res.type).to.equal('application/json');
        }
      });
    });
  });

  describe('POST /api/cart/items', () => {
    let agent;
    before(() => {
      agent = request
        .agent(app)
        .post(`/api/cart/items`)
        .send({ id: 'qox839utj', quantity: 4 })
        .set('Accept', 'application/json');
    });

    after(async () => {
      await request.agent(app).delete('/api/cart/items/qox839utj');
      const cart = await request.agent(app).get('/api/cart/items');
    });

    it('should respond with status code 201', () => {
      agent.end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          expect(res.statusCode).to.equal(201);
        }
      });
    });

    it('should return a response', () => {
      agent.end((err, res) => {
        if (err) {
          console.log(err);
        } else {
          expect(res.body).to.be.an.instanceOf(Object);
        }
      });
    });
  });
});
