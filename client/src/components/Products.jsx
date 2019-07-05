import React from 'react';
import Product from './Product.jsx';
import Total from './Total.jsx';

const Products = ({ cart }) => {
  return (
    <ul>
      {cart.map((product, index) => {
        return (
          <Product product={product} key={`product-${index}`} />
        );
      })}
      <Total cart={cart} />
    </ul>
  );
};

export default Products;