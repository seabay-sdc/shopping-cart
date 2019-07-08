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
      <header id='gh' className='gh-w'>
        <div id='gh-top'>
          <ul id='gh-topl'>
            <li className='gh-t'>
              <span id='gh-ug'>
                Hi! <span><a href='#'>Sign in </a></span>
                or <span><a href='#'>register</a></span>
              </span>
            </li>
            <li className='gh-t gh-divider-l'><a href='#' className='gh-p'>Daily Deals</a></li>
            <li className='gh-t gh-divider-l'><a href='#' className='gh-p'>Gift Cards</a></li>
            <li className='gh-t gh-divider-l'><a href='#' className='gh-p'>Help & Contact</a></li>
          </ul>
          <ul id='gh-eb'>
            <li className='gh-eb-li gh-t-rt gh-divider'>
              <a href='#' className='gh-p' onClick={this.testOnClick}>Sell</a></li>
            <li className='gh-eb-li gh-t-rt gh-divider'><a href='#' className='gh-p'>My SeaBay</a></li>
            <li className='gh-eb-li gh-t-rt gh-divider'><a href='#' className='gh-p'>Notifications</a></li>
            <li className='gh-eb-li gh-t-rt'>
              <Cart
                cart={this.state.cart}
                display={this.state.display}
                onClick={this.toggleProductsMenu}
              />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default App;