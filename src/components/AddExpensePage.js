import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

class AddExpensePageClass extends React.Component {
  onSubmit = (expense) => {
    this.props.onSubmit(expense);
    this.props.history("/");
  };
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch(addExpense(expense))
});

export const AddExpensePage = (props) => {
  const history = useNavigate();
  return <AddExpensePageClass {...props}  history={history}/>;
};


export default connect(undefined, mapDispatchToProps)(AddExpensePage);
