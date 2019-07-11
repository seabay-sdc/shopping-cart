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

    this.toggleProductsMenu = this.toggleProductsMenu.bind(this);
  }

  getCartItems () {
    axios.get(`${uri}/api/cart/items`)
    .then(({ data }) => this.setState({ cart: data }))
    .catch(console.error);
  }

  componentDidMount () {
    document.addEventListener('addItemToCart', ({ detail }) => {
      axios.post(`${uri}/api/cart`, detail)
      .then(() => this.getCartItems())
      .catch(console.error);
    });

    this.getCartItems();
  }

  toggleProductsMenu () {
    this.setState({ display: !this.state.display });
  }

  render () {
    let cartRender;

    if (this.state.display === true) {
      cartRender = <Cart cart={this.state.cart} />;
    }

    return (
      <div>
        <nav>
          <div className="container">
            <ul className="navbar-left">
              <li><a href="#" className="link">Hi! Sign in or Register</a></li>
              <li><a href="#" className="link">Daily Deals</a></li>
              <li><a href="#" className="link">Gift Cards</a></li>
              <li><a href="#" className="link">Help & Contact</a></li>
            </ul>
            <ul className="navbar-right">
              <li><a href="#" className="link">Sell</a></li>
              <li><a href="#" className="link">My eBay</a></li>
              <li><a href="#" className="link">Notifications</a></li>
              <li><a href="#" className="link" onClick={this.toggleProductsMenu}>Cart</a></li>
            </ul>
          </div>
        </nav>

        {cartRender}

      </div>
    );
  }
}

export default App;