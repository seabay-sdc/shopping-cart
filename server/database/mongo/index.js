const { CartItems, Products } = require('./models');

// cart methods
const cart = {
  get: (item = {}) => {
    return CartItems.find(item).exec();
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
