import React from 'react';
import Products from './Products.jsx';

const Cart = ({ cart, display }) => {
  let productDisplay;
  if (display === true) {
    productDisplay = <Products cart={cart} />
  }
  return (
    <div>
      {`Cart - Items: ${cart.length}`}
      {productDisplay}
    </div>
  );
};

export default Cart;