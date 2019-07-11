import React from 'react';
import Cart from './Cart.jsx';
import axios from 'axios';

const host = process.env.API_HOST;
const port = process.env.API_PORT;
const uri = `http://${host}:${port}`;

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      cart: [],
      display: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.testEventDispatch = this.testEventDispatch.bind(this);
  }

  getCartItems () {
    axios.get(`${uri}/api/cart/items`)
    .then(({ data }) => this.setState({ cart: data }))
    .catch(console.error);
  }

  componentWillMount () {
    // populate cart
    document.addEventListener('addItemToCart', ({ detail }) => {
      axios.post(`${uri}/api/cart`, detail)
      .then(() => this.getCartItems())
      .catch(console.error);
    });

    this.getCartItems();
  }

  // TODO: remove
  testEventDispatch () {
    console.log('Event dispatched from Ross\' component');
    const detail ='You successfully recieved an event from Ross\' component';
    const event = new CustomEvent('setCurrentItem', { detail });
    document.dispatchEvent(event);
  }

  toggleMenu () {
    this.setState({ display: !this.state.display });
  }

  render () {
    let cartRender;

    if (this.state.display === true) {
      cartRender = <Cart cart={this.state.cart} toggleMenu={this.toggleMenu} />;
    }

    return (
      <div className="header">
        <nav>
          <div className="container">
            <ul className="navbar-left">
              <li className="li-right"><a href="#" className="link">Hi! Sign in or Register</a></li>
              <li className="li-right"><a href="#" className="link">Daily Deals</a></li>
              <li className="li-right"><a href="#" className="link">Gift Cards</a></li>
              <li><a href="#" className="link">Help & Contact</a></li>
            </ul>
            <ul className="navbar-right">
              <li className="li-right"><a href="#" className="link">Sell</a></li>
              <li className="li-right"><a href="#" className="link">My eBay</a></li>
              <li className="li-right"><a href="#" className="link" onClick={this.testEventDispatch}>Notifications</a></li>
              <li><a href="#" className="link" onClick={this.toggleMenu}>Cart</a></li>
            </ul>
          </div>
        </nav>

        {cartRender}

      </div>
    );
  }
}

export default App;