import React from 'react';
import Cart from './Cart.jsx';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      cart: [{ id: 0, name: 'Laptop', price: 100, picture: '' }],
      display: true,
    };
  }
  render () {
    return (
      <div>
        <ul>
          <li>Hi! Sign in or register</li>
          <li>Daily Deals</li>
          <li>Gift Cards</li>
          <li>Help & Contact</li>
        </ul>
        <ul>
          <li>Sell</li>
          <li>My SeaBay</li>
          <li>Notifications</li>
          <li>
            <Cart cart={this.state.cart} display={this.state.display} />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;