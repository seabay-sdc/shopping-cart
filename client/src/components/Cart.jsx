import React from 'react';
import Dialog from '@material-ui/core/Dialog/';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import Products from './Products.jsx';

const Cart = ({ cart, display, toggleMenu, setCurrentItem }) => {
  const total = cart.reduce((sum, item) => sum += item.price, 0);
  return (
    <Dialog
      open={display}
      onClose={toggleMenu}
      scroll='paper'
    >
      <DialogTitle>
        <div className="navbar-left">Shopping Cart</div>
      </DialogTitle>
      <DialogContent>
        <Products
          cart={cart}
          toggleMenu={toggleMenu}
          setCurrentItem={setCurrentItem}
        />
        <div className="shopping-cart-total">Total: {total}</div>
      </DialogContent>
    </Dialog>
  );
}

export default Cart;