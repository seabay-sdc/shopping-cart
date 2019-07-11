import React from 'react';
import Cart from './Cart.jsx';
import axios from 'axios';

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
    axios.get('http://seabay.rosscalimlim.me/api/cart/items')
    .then(({ data }) => this.setState({ cart: data }))
    .catch(console.error);
  }


  componentDidMount () {
    document.addEventListener('addItemToCart', ({ detail }) => {
      axios.post('http://seabay.rosscalimlim.me/api/cart', detail)
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
              <li><a href="#">Hi! Sign in or Register</a></li>
              <li><a href="#">Daily Deals</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Help & Contact</a></li>
            </ul>
            <ul className="navbar-right">
              <li><a href="#">Sell</a></li>
              <li><a href="#">My eBay</a></li>
              <li><a href="#">Notifications</a></li>
              <li><a href="#" onClick={this.toggleProductsMenu}>Cart</a></li>
            </ul>
          </div>
        </nav>

        {cartRender}

      </div>
    );
  }
}

export default App;