import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import { Provider } from "react-redux";
import {  unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import store from "./redux/store";
import "react-calendar/dist/Calendar.css";
import "./app/layout/styles.css";
import 'react-toastify/dist/ReactToastify.min.css'
import { createBrowserHistory } from "history";

export const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
