import React from 'react';
import Product from './Product.jsx';

const Products = ({ cart }) => {
  return (
    <ul className="shopping-cart-items">
      {cart.map((product, index) => {
        return (
          <Product product={product} key={`product-${index}`} />
        );
      })}
    </ul>
  );
};

export default Products;