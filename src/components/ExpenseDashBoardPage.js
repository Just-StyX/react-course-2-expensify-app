import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashBoardPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
      <p>This is from my dashboard component</p>
    </div>
  );
};

export default ExpenseDashBoardPage;
