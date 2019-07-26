const client = require('./config');

// cart methods
const cart = {
  get: async (item = {}) => {
    let query = await client.query('SELECT * FROM cartItems');
    console.log(query.rows);
    return query.rows;
  },
  add: async item => {
    const [product] = await products.get({ id: item.id });
    const cartQuery = await cart.get({ id: product.id });
    const cartItem = { ...product._doc, quantity: item.quantity };

    return cartQuery.length === 0
      ? CartItems.create(cartItem)
      : CartItems.updateOne(
          { id: product.id },
          { $inc: { quantity: item.quantity } }
        );
  },
  remove: item => {
    return CartItems.deleteOne(item).exec();
  }
};

// product methods
const products = {
  get: (item = {}) => {
    return Products.find(item).exec();
  },
  add: async (items = []) => {
    try {
      await Products.collection.insertMany(items);
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = { cart, products };
