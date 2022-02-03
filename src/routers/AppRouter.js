//import "../styles.css";
import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import Header from "../components/Header";

const AppRouter = () => (
  <div>
    <BrowserRouter>
    <Header style={() => ({marginBottom: "2rem"})}/>
    <Routes>
      <Route path="/" element={<ExpenseDashBoardPage />} />
      <Route path="/create" element={<AddExpensePage />} />
      <Route path="/edit/:id" element={<EditExpensePage />} />
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
