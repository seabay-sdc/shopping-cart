const client = require('./config');

// cart methods
const cart = {
  get: async (item = {}) => {
    let query;
    item.id
      ? (query = await client.query(
          'SELECT * FROM cartItems WHERE prodid = $1',
          [item.id]
        ))
      : (query = await client.query('SELECT * FROM cartItems'));
    return new Promise((resolve, reject) => {
      resolve(query.rows);
    });
  },

  add: async item => {
    let productQuery = await products.get({ id: item.id });
    const product = productQuery[0];
    const cartQuery = await cart.get({ id: product.prodid });
    const cartItem = { ...product, quantity: item.quantity };

    if (cartQuery.length === 0) {
      await client.query(
        'INSERT INTO cartItems (prodid, name, price, category, img1_url, quantity) VALUES ($1, $2, $3, $4, $5, $6)',
        [
          cartItem.prodid,
          cartItem.name,
          cartItem.price,
          cartItem.category,
          cartItem.img1_url,
          cartItem.quantity
        ]
      );
    } else {
      await client.query(
        'UPDATE cartItems SET quantity = quantity + 1 WHERE prodid = $1',
        [cartItem.prodid]
      );
    }
  },
  remove: async item => {
    await client.query('DELETE FROM cartItems WHERE prodid = $1', [item.id]);
  },
  end: () => {
    client.end();
  }
};

// product methods
const products = {
  get: async (item = {}) => {
    const query = await client.query(
      'SELECT * FROM products WHERE prodid = $1',
      [item.id]
    );
    return new Promise((resolve, reject) => {
      resolve(query.rows);
    });
  }
};

module.exports = { cart, products };
