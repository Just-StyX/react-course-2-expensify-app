import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h1>Expensify Application</h1> <hr />
    <NavLink
      to="/"
      style={({ isActive }) => ({
        color: isActive ? "green" : "navy",
        fontWeight: isActive ? "bold" : ""
      })}
    >
      Dashboard
    </NavLink>{" "}
    |{" "}
    <NavLink
      to="create"
      style={({ isActive }) => ({
        color: isActive ? "green" : "navy",
        fontWeight: isActive ? "bold" : ""
      })}
    >
      Create Expenses
    </NavLink>{" "}
    |{" "}
    <NavLink
      to="help"
      style={({ isActive }) => ({
        color: isActive ? "green" : "navy",
        fontWeight: isActive ? "bold" : ""
      })}
    >
      Help Page
    </NavLink>{" "}
  </header>
);

export default Header;
