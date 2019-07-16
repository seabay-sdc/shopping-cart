import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog/';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Products from './Products.jsx';

const Cart = ({ cart, display, toggleMenu, setCurrentItem }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const total = cart.reduce((sum, item) => {
    return sum += item.price * item.quantity;
  }, 0);
  const formattedTotal = formatter.format(total);
  return (
    <Dialog
      open={display}
      fullWidth={true}
      maxWidth="sm"
      onClose={toggleMenu}
      scroll='paper'
    >
      <DialogTitle>
        <div>Your cart</div>
      </DialogTitle>
      <DialogContent>
        <Products
          cart={cart}
          toggleMenu={toggleMenu}
          setCurrentItem={setCurrentItem}
        />
        <div className="shopping-cart-total">Subtotal: {formattedTotal}</div>
      </DialogContent>
      <DialogActions>
          <Button onClick={toggleMenu} color="primary">
            Cancel
          </Button>
          <Button onClick={toggleMenu} color="primary" variant="contained">
            Proceed to Checkout
          </Button>
        </DialogActions>
    </Dialog>
  );
}

export default Cart;