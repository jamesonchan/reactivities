import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import "./app/layout/styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
