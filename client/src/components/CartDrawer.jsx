import React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(() => createStyles({
  buttons: {
    alignContent: "right",
  },
  name: {
    margin: 10,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "50%",
  },
  picture: {
    height: 50,
    objectFit: "cover",
    width: 50,
  },
  price: {
    textAlign: "right",
  },
  spacer: {
    flexGrow: 1,
  },
  subtotal: {
    textAlign: "right",
  },
}));

const CartDrawer = ({ cart, display, toggleDisplay }) => {
  const classes = useStyles();
  const format = (number) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format(number);
  }

  const formatTotal = () => {
    const total = cart.reduce((total, item) => {
      return total += item.price * item.quantity;
    }, 0);
    const formattedTotal = format(total);
    return formattedTotal;
  }
  return (
    <Drawer anchor="bottom" onClose={toggleDisplay} open={display}>
      <div
        role="presentation"
        // onClick={toggleDisplay}
      >
        <List component="nav">
          {cart.map((product, index) => {
            return (
              <ListItem button key={index}>
                <ListItemIcon>
                  <img className={classes.picture} src={product.img1_url} />
                </ListItemIcon>
                <ListItemText className={classes.name} primary={product.name}/>
                <ListItemText className={classes.price} primary={format(product.price)}/>
              </ListItem>
            );
          })}

          <ListItem button key="total">
            <ListItemText
              className={classes.subtotal}
              primary={"Subtotal: " + formatTotal()}
            />
          </ListItem>

          <Toolbar>
            <div className={classes.spacer}></div>
            <Button onClick={toggleDisplay} color="primary">
              Cancel
            </Button>
            <Button onClick={toggleDisplay} color="primary" variant="contained">
              Proceed to Checkout
            </Button>
          </Toolbar>

        </List>
      </div>
    </Drawer>
  );
};

export default CartDrawer;