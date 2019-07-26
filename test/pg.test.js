const db = require('../server/database/postgres');
const { expect } = require('chai');

describe('CART METHODS', () => {
  describe('cart.get()', () => {
    it('should get all of the items in the cart', async () => {
      const cartItems = await db.cart.get();
      expect(cartItems).to.be.an.instanceOf(Array);
    });
  });
});

// describe('PRODUCT METHODS', () => {});
