import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const host = process.env.API_HOST;
const port = process.env.API_PORT;
const uri = `http://${host}:${port}`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const App = function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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

          <Typography className={classes.title}></Typography>

          <IconButton color="inherit" aria-label="Sell">
            <AttachMoney />
          </IconButton>
          <IconButton color="inherit" aria-label="Account">
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit" aria-label="Notifications">
            <Badge badgeContent={2} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton color="inherit" aria-label="Cart">
            <Badge badgeContent={8} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;