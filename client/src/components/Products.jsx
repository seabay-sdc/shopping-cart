import React from 'react';
import Product from './Product.jsx';

const Products = ({ cart, toggleMenu, setCurrentItem }) => {
  return (
    <>
      <ul className="shopping-cart-items">
        {cart.map((product, index) => {
          return (
            <Product key={`product-${index}`} product={product} toggleMenu={toggleMenu} setCurrentItem={setCurrentItem} />
          );
        })}
      </ul>
      <a href="#" className="button">Go to checkout</a>
    </>
  );
};

export default Products;