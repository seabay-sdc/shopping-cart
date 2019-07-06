import React from 'react';
import Products from './Products.jsx';

const Cart = ({ cart, display, onClick }) => {
  let productDisplay;
  if (display === true) {
    productDisplay = <Products cart={cart} />
  }
  return (
    <div>
      <a href='#' className='gh-p' onClick={onClick}>{`Cart - Items: ${cart.length}`}</a>
      {productDisplay}
    </div>
  );
};

export default Cart;