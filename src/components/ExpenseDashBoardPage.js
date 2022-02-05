import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseDashBoardPage = () => {
  return (
    <div>
      <ExpenseSummary />
      <ExpenseListFilters />
      <ExpenseList />
      <p>This is from my dashboard component</p>
    </div>
  );
};

export default ExpenseDashBoardPage;
