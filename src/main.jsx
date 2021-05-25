import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./assets/build-css/styles.css";

import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const { store, persistor } = configureStore();

import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Routes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
