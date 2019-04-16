import * as React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core";

import App from "./app";
import store from "./redux/store/index";
import theme from "./components/css/theme";

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
