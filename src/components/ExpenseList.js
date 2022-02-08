import React from "react";
import { connect } from "react-redux";
//import numeral from "numeral";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <div className="lists-header">
        <div className="show-mobile">Expenses</div>
        <div className="show-desktop">Expense</div>
        <div className="show-desktop">Amount</div>
      </div>
        <div className="lists-body">
        {props.expenses.length === 0 ?(<div className="lists-item lists-item--message"><span>No Expenses</span></div>) : (props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        }))}
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
