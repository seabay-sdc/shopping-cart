import React from 'react';

const Product = ({ product, toggleMenu, setCurrentItem }) => {
  const onClick = (e) => {
    setCurrentItem(e.target.id);
    toggleMenu();
  };
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const price = formatter.format(product.price * product.quantity);
  return (
    <li className="clearfix li-grid">
      <img id={product.id} className="item-picture link" src={product.img1_url} alt="item1" onClick={onClick} />
      <div>
        <div id={product.id} className="item-name link" onClick={onClick}>{product.name}</div>
        <div className="item-quantity">Quantity: {product.quantity}</div>
      </div>
      <div className="item-price" >{price}</div>
    </li>
  );
};

export default Product;