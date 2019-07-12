import React from 'react';
import Products from './Products.jsx';
import onClickOutside from 'react-onclickoutside';

class Cart extends React.Component {
  constructor (props) {
    super(props);
  }

  handleClickOutside (e) {
    if (e.target.id === "cart") {
      return;
    }
    this.toggleMenu();
  }

  render () {
    const total = this.props.cart.reduce((sum, item) => sum += item.price, 0);
    return (
      <div className="container">
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <div className="shopping-cart-total">
              <span className="lighter-text">Total: </span>
              <span className="main-color-text">${total}</span>
            </div>
          </div>
          <Products cart={this.props.cart} toggleMenu={this.props.toggleMenu} setCurrentItem={this.props.setCurrentItem} />
        </div>
      </div>
    );
  }
};

export default onClickOutside(Cart);