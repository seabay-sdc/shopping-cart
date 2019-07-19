import React from 'react';
import Product from './Product.jsx';

const Products = ({ cart, format, toggleMenu, setCurrentItem }) => {
  const noItems = <span className="item-empty">Your cart is empty!</span>
  const emptyRender = cart.length === 0 ? noItems : null;
  return (
    <>
      <ul className="shopping-cart-items">
        {cart.map((product, index) => {
          return (
            <Product key={`product-${index}`} format={format} product={product} toggleMenu={toggleMenu} setCurrentItem={setCurrentItem} />
          );
        })}
        {emptyRender}
      </ul>
    </>
  );
};

export default Products;