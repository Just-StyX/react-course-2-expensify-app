import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

class AddExpensePageClass extends React.Component {
  onSubmit = (expense) => {
    this.props.onSubmit(expense);
    this.props.history("/dashboard");
  };
  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch(startAddExpense(expense))
});

export const AddExpensePage = (props) => {
  const history = useNavigate();
  return <AddExpensePageClass {...props}  history={history}/>;
};


export default connect(undefined, mapDispatchToProps)(AddExpensePage);
