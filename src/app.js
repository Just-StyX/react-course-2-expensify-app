import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from './actions/expenses'
import { Provider } from "react-redux";
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import './firebase/firebase';

const store = configureStore();

const rootElement = document.getElementById("app");

//ReactDOM.render(<p>Loading...</p>, rootElement);

store.dispatch(startSetExpenses())
  ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    rootElement
  );
