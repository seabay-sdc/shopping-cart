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
            <Cart cart={this.state.cart} display={this.state.display} />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;