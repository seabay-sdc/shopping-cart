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
    this.setCurrentItem = this.setCurrentItem.bind(this);
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

  componentWillUnmount () {
    document.removeEventListener('addItemToCart');
  }

  setCurrentItem (id) {
    const detail = { detail: { id } };
    const event = new CustomEvent('setCurrentItem', detail);
    document.dispatchEvent(event);
  }

  toggleMenu () {
    this.setState({ display: !this.state.display });
    this.getCartItems();
  }

  render () {
    let cartRender;

    if (this.state.display === true) {
      cartRender =
      <Cart
        cart={this.state.cart}
        display={this.state.display}
        setCurrentItem={this.setCurrentItem}
        toggleMenu={this.toggleMenu}
      />;
    }

    return (
      <div className="header">
        <nav>
          <div className="container-shopping-cart">
            <ul className="navbar-left">
              <li className="li-right"><a className="link">Hi! Sign in or Register</a></li>
              <li className="li-right"><a className="link">Daily Deals</a></li>
              <li className="li-right"><a className="link">Gift Cards</a></li>
              <li><a className="link">Help & Contact</a></li>
            </ul>
            <ul className="navbar-right">
              <li className="li-right"><a className="link">Sell</a></li>
              <li className="li-right"><a className="link">My eBay</a></li>
              <li className="li-right"><a className="link">Notifications</a></li>
              <li><a id="cart" className="link" onClick={this.toggleMenu} >Cart</a></li>
            </ul>
          </div>
        </nav>

        {cartRender}

      </div>
    );
  }
}

export default App;