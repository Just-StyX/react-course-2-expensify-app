import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

const store = configureStore();

const rootElement = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
      <AppRouter />
  </Provider>,
  rootElement
);
