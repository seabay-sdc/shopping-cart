import React from 'react';

const Total = ({ cart }) => {
  const cartTotal = cart.reduce((total, product) => total += product.price, 0);
  return <li>{`Total: ${cartTotal}`}</li>
};

export default Total;