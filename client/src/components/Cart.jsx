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
  }
  // cart, display, this.props.toggleDisplay, setCurrentItem

  format (number) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format(number);
  }

  formatTotal () {
    const total = this.props.cart.reduce((total, item) => {
      return total += item.price * item.quantity;
    }, 0);
    const formattedTotal = this.format(total);
    return formattedTotal;
  }

  render () {
    return (
      <Dialog
        className="shopping-cart"
        open={this.props.display}
        fullWidth={true}
        maxWidth="sm"
        onClose={this.props.toggleDisplay}
        scroll='paper'
      >
        <DialogTitle>
          <div>Cart</div>
        </DialogTitle>
        <DialogContent>
          <Products
            cart={this.props.cart}
            toggleDisplay={this.props.toggleDisplay}
            setCurrentItem={this.props.setCurrentItem}
          />
          <div className="shopping-cart-total">
            Subtotal: {this.formatTotal()}
          </div>
        </DialogContent>
        <DialogActions>
            <Button onClick={this.props.toggleDisplay} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.toggleDisplay} color="primary" variant="contained">
              Proceed to Checkout
            </Button>
          </DialogActions>
      </Dialog>
    );
  }
}

export default Cart;