import React from 'react';

const Product = ({ product }) => {
  return (
    <li>
      <div>
        <img src={product.picture} alt={product.name} width='100px'/>
        <div>{product.name}</div>
        <div>{product.price}</div>
      </div>
    </li>
  );
};

export default Product;