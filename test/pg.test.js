const db = require('../server/database/postgres');
const { expect } = require('chai');

describe('Postgres Cart Methods', () => {
  describe('cart.get()', () => {
    let cartItems;

    before(async () => {
      cartItems = await db.cart.get();
    });

    it('returns an array', () => {
      expect(cartItems).to.be.an.instanceOf(Array);
    });
    it('returns all cart items when query is blank', () => {
      expect(cartItems).to.have.length(2);
    });
    it('returns specific item if query is not blank', async () => {
      let singleItem = await db.cart.get({ id: 'gha583kax' });
      expect(singleItem).to.have.length(1);
      expect(singleItem[0]).to.haveOwnProperty('price');
    });
    it('has the expected properties', () => {
      expect(cartItems[0]).to.haveOwnProperty('id');
      expect(cartItems[0]).to.haveOwnProperty('prodid');
      expect(cartItems[0]).to.haveOwnProperty('name');
      expect(cartItems[0]).to.haveOwnProperty('price');
      expect(cartItems[0]).to.haveOwnProperty('category');
      expect(cartItems[0]).to.haveOwnProperty('img1_url');
      expect(cartItems[0]).to.haveOwnProperty('quantity');
    });
    it('returns data in the appropriate shape', () => {
      expect(typeof cartItems[0]['id']).to.equal('number');
      expect(typeof cartItems[0]['prodid']).to.equal('string');
      expect(typeof cartItems[0]['name']).to.equal('string');
      expect(typeof cartItems[0]['price']).to.equal('string');
      expect(typeof cartItems[0]['category']).to.equal('string');
      expect(typeof cartItems[0]['img1_url']).to.equal('string');
      expect(typeof cartItems[0]['quantity']).to.equal('number');
    });
  });

  describe('cart.add()', () => {
    let productBefore;
    let productAfter;

    before(async () => {
      productBefore = await db.cart.get({ id: 'abc123xyz' });
      await db.cart.add({ id: 'abc123xyz' });
      productAfter = await db.cart.get({ id: 'abc123xyz' });
    });

    after(async () => {
      await db.cart.remove({ id: 'wjq831xol' });
    });

    it('increments the quantity if the item is in the cart', () => {
      expect(productAfter[0].quantity).to.equal(productBefore[0].quantity + 1);
    });
    it('adds a new product to the cart', async () => {
      let cartBefore = await db.cart.get();
      await db.cart.add({ id: 'wjq831xol', quantity: 6 });
      let cartAfter = await db.cart.get();
      cartBefore = cartBefore.filter(item => item.prodid === 'wjq831xol');
      cartAfter = cartAfter.filter(item => item.prodid === 'wjq831xol');
      expect(cartBefore).to.have.length(0);
      expect(cartAfter).to.have.length(1);
    });
  });

  describe('cart.remove()', () => {
    before(async () => {
      await db.cart.add({ id: 'wjq831xol' });
    });
    after(async () => {
      await db.cart.remove({ id: 'wjq831xol' });
    });

    it('removes the item from the cart', async () => {
      const itemBefore = await db.cart.get({ id: 'wjq831xol' });
      await db.cart.remove({ id: 'wjq831xol' });
      const itemAfter = db.cart.get({ id: 'wjq831xol' });
      expect(itemBefore[0]).to.be.ok;
      expect(itemAfter[0]).to.be.undefined;
    });
    it('adds a new product to the cart', async () => {
      let cartBefore = await db.cart.get();
      await db.cart.add({ id: 'wjq831xol', quantity: 6 });
      let cartAfter = await db.cart.get();
      cartBefore = cartBefore.filter(item => item.prodid === 'wjq831xol');
      cartAfter = cartAfter.filter(item => item.prodid === 'wjq831xol');
      expect(cartBefore).to.have.length(0);
      expect(cartAfter).to.have.length(1);
    });
  });
});

describe('Postgres Product Methods', () => {
  after(async () => {
    await db.cart.end();
  });
  describe('products.get()', () => {
    let product;

    before(async () => {
      product = await db.products.get({ id: 'abc123xyz' });
    });

    it('returns an array of a single product', () => {
      expect(product).to.be.an.instanceOf(Array);
      expect(product).to.have.length(1);
    });
    it('has the expected properties', () => {
      expect(product[0]).to.haveOwnProperty('id');
      expect(product[0]).to.haveOwnProperty('prodid');
      expect(product[0]).to.haveOwnProperty('name');
      expect(product[0]).to.haveOwnProperty('price');
      expect(product[0]).to.haveOwnProperty('category');
      expect(product[0]).to.haveOwnProperty('img1_url');
    });
    it('returns data in the appropriate shape', () => {
      expect(typeof product[0]['id']).to.equal('number');
      expect(typeof product[0]['prodid']).to.equal('string');
      expect(typeof product[0]['name']).to.equal('string');
      expect(typeof product[0]['price']).to.equal('string');
      expect(typeof product[0]['category']).to.equal('string');
      expect(typeof product[0]['img1_url']).to.equal('string');
    });
  });
});
