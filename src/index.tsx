import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./state/store";
import { Provider } from "react-redux";
import Context from "./Context";
import ScrollToTop from "../src/utils/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Context>
          <ScrollToTop />
          <App />
        </Context>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
