import React from "react";
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import { startLogOut } from "../actions/auth"


export const Header = ({ startLogOut}) => (
  <header>
    <h1>Expensify Application</h1> <hr />
    <NavLink
      to="dashboard"
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
    <button onClick={startLogOut}>Log out</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined, mapDispatchToProps)(Header);
