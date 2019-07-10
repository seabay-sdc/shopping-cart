import React from 'react';

const Product = ({ product }) => {
  return (
    <li className="clearfix">
      <img className="item-picture" src={product.picture} alt="item1" />
      <span className="item-name">{product.name}</span>
      <span className="item-price">${product.price}</span>
      <span className="item-quantity">Quantity: FIX ME</span>
    </li>
  );
};

export default Product;