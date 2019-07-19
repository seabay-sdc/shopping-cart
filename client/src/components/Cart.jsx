import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog/';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Products from './Products.jsx';

class Cart extends Component {
  constructor (props) {
    super(props);

    this.state = {
      cart: [],
    };
  }
  // cart, display, toggleMenu, setCurrentItem

  format (number) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format(number);
  }

  render () {
    return (
      <Dialog
        open={display}
        fullWidth={true}
        maxWidth="sm"
        onClose={toggleMenu}
        scroll='paper'
      >
        <DialogTitle>
          <div>Cart</div>
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
}

export default Cart;