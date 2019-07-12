import React from 'react';

const Product = ({ product, toggleMenu, setCurrentItem }) => {
  const onClick = (e) => {
    setCurrentItem(e.target.id);
    toggleMenu();
  };
  return (
    <li className="clearfix">
      <img className="item-picture link" src={product.img1_url} alt="item1" />
      <span id={product.id} className="item-name link" onClick={onClick}>{product.name}</span>
      <span id={product.id} className="item-price" onClick={onClick}>${product.price}</span>
    </li>
  );
};

export default Product;