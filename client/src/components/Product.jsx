import React from 'react';

const Product = ({ product }) => {
  return (
    <li className="clearfix">
      <img className="item-picture" src={product.img1_url} alt="item1" />
      <span className="item-name">{product.name}</span>
      <span className="item-price">${product.price}</span>
    </li>
  );
};

export default Product;