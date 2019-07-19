import React, { Component } from 'react';
import Cart from './Cart.jsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AttachMoney from '@material-ui/icons/AttachMoney'
import Notifications from '@material-ui/icons/Notifications'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import axios from 'axios';

const host = process.env.API_HOST;
const port = process.env.API_PORT;
const uri = `http://${host}:${port}`;

const styles = {
  root: {
    flexGrow: 1,
  },
  spacer: {
    flexGrow: 1,
  },
};

class App extends Component {
  constructor () {
    super();
    this.state = {
      cart: [],
      display: false,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  componentDidMount () {
    document.addEventListener('addToCart', ({ detail }) => {
      axios.post(`${uri}/api/cart/items/`, detail)
      .then(() => this.getCartItems())
      .catch(console.error);
    });
    this.getCartItems();
  }

  getCartItems () {
    axios.get(`${uri}/api/cart/items`)
    .then(({ data }) => this.setState({ cart: data }))
    .catch(console.error);
  }

  setCurrentItem (id) {
    const detail = { detail: { id } };
    const event = new CustomEvent('setCurrentItem', detail);
    document.dispatchEvent(event);
  }

  toggleDisplay () {
    this.setState({ display: !this.state.display });
  }

  render () {
    const cartDisplay = this.state.display
    ? <Cart
        cart={this.state.cart}
        display={this.state.display}
        setCurrentItem={this.setCurrentItem}
        toggleDisplay={this.toggleDisplay}
      />
    : null;

    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>

            <Button color="inherit" size="large">
              Login
            </Button>
            <Button color="inherit" size="large">
              Deals
            </Button>
            <Button color="inherit" size="large">
              Gift Cards
            </Button>
            <Button color="inherit" size="large">
              Help
            </Button>

            <Typography className={this.props.classes.spacer}></Typography>

            <IconButton color="inherit" aria-label="Sell">
              <AttachMoney />
            </IconButton>
            <IconButton color="inherit" aria-label="Account">
              <AccountCircle />
            </IconButton>
            <IconButton color="inherit" aria-label="Notifications">
              <Notifications />
            </IconButton>
            <IconButton color="inherit" aria-label="Cart" onClick={this.toggleDisplay}>
              <Badge badgeContent={this.state.cart.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        {cartDisplay}
      </div>
    );
  }
};

export default withStyles(styles)(App);