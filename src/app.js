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

store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//console.log(store.getState());

const rootElement = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
      <AppRouter />
  </Provider>,
  rootElement
);
