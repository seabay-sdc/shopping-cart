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
      display: true,
    };

    this.toggleProductsMenu = this.toggleProductsMenu.bind(this);
  }

  toggleProductsMenu () {
    this.setState({ display: !this.state.display });
  }

  render () {
    return (
      <div>
        <ul>
          <li>
            <span>
              Hi! <span><a href='#'>Sign in </a></span>
              or <span><a href='#'>register</a></span>
            </span>
          </li>
          <li><a href='#'>Daily Deals</a></li>
          <li><a href='#'>Gift Cards</a></li>
          <li><a href='#'>Help & Contact</a></li>
        </ul>
        <ul>
          <li><a href='#'>Sell</a></li>
          <li><a href='#'>My SeaBay</a></li>
          <li><a href='#'>Notifications</a></li>
          <li>
            <Cart
              cart={this.state.cart}
              display={this.state.display}
              onClick={this.toggleProductsMenu}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;