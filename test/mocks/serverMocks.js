module.exports = {
  products: {
    get: (item = {}) => {
      return new Promise((resolve, reject) => {
        resolve({
          id: 13,
          name: 'Example Product',
          price: 19.99,
          category: 'Example Category',
          img1_url: 'www.urlgoeshere.com/example'
        });
      });
    }
  },
  cart: {
    add: item => {
      return new Promise((resolve, reject) => {
        resolve({ affectedRows: 1, warningCount: 0 });
      });
    }
  }
};
