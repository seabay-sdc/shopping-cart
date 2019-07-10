import React from 'react';
import Products from './Products.jsx';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum += item.price, 0);
  return (
      <div className="container">
        <div className="shopping-cart">

          <div className="shopping-cart-header">
            <div className="shopping-cart-total">
              <span className="lighter-text">Total: </span>
              <span className="main-color-text">${total}</span>
            </div>
          </div>

          <Products cart={cart} />
        </div>
      </div>
  );
};

export default Cart;