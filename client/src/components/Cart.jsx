import React from 'react';
import Dialog from '@material-ui/core/Dialog/';
import DialogTitle from '@material-ui/core/DialogTitle';

import Products from './Products.jsx';

class Cart extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      open: true,
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen () {
    this.setState({ open: true });
  }

  handleClose () {
    this.setState({ open: false });
  }

  render () {
    const total = this.props.cart.reduce((sum, item) => sum += item.price, 0);
    // return (
    //   <div className="container">
    //     <div className="shopping-cart">
    //       <div className="shopping-cart-header">
    //         <div className="shopping-cart-total">
    //           <span className="lighter-text">Total: </span>
    //           <span className="main-color-text">${total}</span>
    //         </div>
    //       </div>
    //       <Products cart={this.props.cart} toggleMenu={this.props.toggleMenu} setCurrentItem={this.props.setCurrentItem} />
    //     </div>
    //   </div>
    // );
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        scroll='paper'
      >
        <DialogTitle>Test Title</DialogTitle>
      </Dialog>
    );
  }
};

export default Cart;