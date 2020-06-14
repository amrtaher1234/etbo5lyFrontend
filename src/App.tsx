import React from "react";
import logo from "./logo.svg";
import { ThemeProvider, Button } from "@material-ui/core";
import Login from "./pages/login/login";
import theme from "./theme";
import { Router } from "react-router-dom";
import Routes from "./Routes";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
