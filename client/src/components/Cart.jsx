import React from 'react';
import Products from './Products.jsx';

const Cart = ({ cart }) => {
  return (
      <div className="container">
        <div className="shopping-cart">

          <div className="shopping-cart-header">
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">$2,229.97</span>
            </div>
          </div>

          <Products cart={cart} />
        </div>
      </div>
  );
};

export default Cart;