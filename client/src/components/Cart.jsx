import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog/';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Products from './Products.jsx';

const Cart = function ({ cart, display, setCurrentItem, toggleDisplay }) {
  const format = (number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format(number);
  }

  const formatTotal = () => {
    const total = cart.reduce((total, item) => {
      return total += item.price * item.quantity;
    }, 0);
    const formattedTotal = format(total);
    return formattedTotal;
  }

  return (
    <Dialog
      className="shopping-cart"
      open={display}
      fullWidth={true}
      maxWidth="sm"
      onClose={toggleDisplay}
      scroll='paper'
    >
      <DialogTitle>
        <div>Cart</div>
      </DialogTitle>
      <DialogContent>
        <Products
          cart={cart}
          format={format}
          toggleDisplay={toggleDisplay}
          setCurrentItem={setCurrentItem}
        />
        <div className="shopping-cart-total">
          Subtotal: {formatTotal()}
        </div>
      </DialogContent>
      <DialogActions>
          <Button onClick={toggleDisplay} color="primary">
            Cancel
          </Button>
          <Button onClick={toggleDisplay} color="primary" variant="contained">
            Proceed to Checkout
          </Button>
        </DialogActions>
    </Dialog>
  );
}

export default Cart;