import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/App.jsx';
import './styles/main.css';
import { createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0065D2"
    },
    //left secondary color unstyled so notification would stay red
    // secondary: {
    //   main: "#009AF7"
    // }
  }
});


ReactDOM.render(<MuiThemeProvider theme={theme}>
  <NavBar />
</MuiThemeProvider>, document.getElementById('shopping-cart'));