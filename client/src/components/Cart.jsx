import React from 'react';
import Products from './Products.jsx';

const Cart = ({ cart, display }) => {
  let productDisplay;
  if (display === true) {
    productDisplay = <Products cart={cart} />
  }
  return (
    <div>
      <a href='#'>{`Cart - Items: ${cart.length}`}</a>
      {productDisplay}
    </div>
  );
};

export default Cart;