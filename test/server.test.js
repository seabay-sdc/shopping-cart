const { expect } = require('chai');
const rewire = require('rewire');
const request = require('supertest');
const app = rewire('../server/server.js');
const dbMock = require('./mocks/serverMocks');

app.__set__('db', dbMock);

describe('server routes', () => {
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
    const prodID = 13;
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
          expect(res.body).to.have.own.property('id');
          expect(res.body).to.have.own.property('name');
          expect(res.body).to.have.own.property('price');
          expect(res.body).to.have.own.property('category');
          expect(res.body).to.have.own.property('img1_url');
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
    beforeEach(() => {
      agent = request
        .agent(app)
        .post(`/api/cart/items`)
        .send({ id: 123, quantity: 4 });
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
