import React from 'react';
import Cart from './Cart.jsx';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      cart: [
        { id: 0, name: 'Laptop', price: 100, picture: 'https://lnv.gy/2JrZglM' },
        { id: 1, name: 'Headphones', price: 30, picture: 'https://bit.ly/32c0loE' },
      ],
      display: false,
    };

    this.toggleProductsMenu = this.toggleProductsMenu.bind(this);
  }

  testOnClick () {
    console.log('clicked');
    const event = new CustomEvent('addItemToCart', { detail: { id: 5 }});
    document.dispatchEvent(event);
  }

  componentDidMount () {
    document.addEventListener('addItemToCart', () => console.log('item added'));
  }

  toggleProductsMenu () {
    this.setState({ display: !this.state.display });
  }

  render () {
    return (
      <div>
        <nav>
          <div className="container">
            <ul className="navbar-left">
              <li><a href="#">Hi! Sign in or Register</a></li>
              <li><a href="#">Daily Deals</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Help & Contact</a></li>
            </ul>
            <ul className="navbar-right">
              <li><a href="#">Sell</a></li>
              <li><a href="#">My eBay</a></li>
              <li><a href="#">Notifications</a></li>
              <li><a href="#">Cart</a></li>
            </ul>
          </div>
        </nav>

        <div class="container">
          <div class="shopping-cart">
            <div class="shopping-cart-header">
              <div class="shopping-cart-total">
                <span class="lighter-text">Total:</span>
                <span class="main-color-text">$2,229.97</span>
              </div>
            </div>

            <ul class="shopping-cart-items">
              <li class="clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                <span class="item-name">Sony DSC-RX100M III</span>
                <span class="item-price">$849.99</span>
                <span class="item-quantity">Quantity: 01</span>
              </li>

              <li class="clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
                <span class="item-name">KS Automatic Mechanic...</span>
                <span class="item-price">$1,249.99</span>
                <span class="item-quantity">Quantity: 01</span>
              </li>

              <li class="clearfix">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
                <span class="item-name">Kindle, 6" Glare-Free To...</span>
                <span class="item-price">$129.99</span>
                <span class="item-quantity">Quantity: 01</span>
              </li>
            </ul>
            <a href="#" class="button">Checkout</a>
          </div>
        </div>
      </div>
      // <Cart
      //   cart={this.state.cart}
      //   display={this.state.display}
      //   onClick={this.toggleProductsMenu}
      // />
    );
  }
}

export default App;