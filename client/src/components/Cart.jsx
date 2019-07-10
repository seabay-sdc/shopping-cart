import React from 'react';
import Products from './Products.jsx';

const Cart = ({ cart, display, onClick }) => {
  let productDisplay;
  if (display === true) {
    productDisplay = <Products cart={cart} />
  }
  return (
    <div>
      {/* <a href='#' className='gh-p' onClick={onClick}>{`Cart - Items: ${cart.length}`}</a>
      {productDisplay} */}
        <div class="container">
          <div class="shopping-cart">
            <div class="shopping-cart-header">
              <div class="shopping-cart-total">
                <span class="lighter-text">Total:</span>
                <span class="main-color-text">$2,229.97</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Cart;