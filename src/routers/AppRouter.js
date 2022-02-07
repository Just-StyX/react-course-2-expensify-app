//import "../styles.css";
import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import LogingPage from "../components/LoginPage"
import { createBrowserHistory } from 'history'
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory();

const AppRouter = () => (
  <div>
    <BrowserRouter history={history}>
    <Routes>
      <Route path="/" element={<LogingPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<ExpenseDashBoardPage />} />
        <Route path="/create" element={<AddExpensePage />} />
        <Route path="/edit/:id" element={<EditExpensePage />} />
      </Route>
      <Route path="/help" element={<HelpPage />} />
      <Route
        path="*"
        element={
          <main>
            <div>
              Ooops! 404: Nothing is found here.
              <p>
                <Link to="/">Go home</Link> and start from there.
              </p>
            </div>
          </main>
        }
      />
    </Routes>
    </BrowserRouter>
  </div>
);

export default AppRouter;
