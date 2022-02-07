import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from './actions/expenses'
import {login, logout } from './actions/auth'
import { Provider } from "react-redux";
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import './firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const store = configureStore();

let hasRendered = false

const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
          <AppRouter />
      </Provider>,
      rootElement
    )
    hasRendered = true
  }
}

const rootElement = document.getElementById("app");

//ReactDOM.render(<p>Loading...</p>, rootElement);

const auth = getAuth()
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses())
    renderApp()
    if (history.location.pathname === '/') {
      history.push('/dashboard')
    }
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})