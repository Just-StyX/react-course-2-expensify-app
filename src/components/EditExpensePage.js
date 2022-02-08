import React from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { setEditExpense, startRemoveExpense } from "../actions/expenses";

class EditExpensePageClass extends React.Component {
  onSubmit = (expense) => {
    this.props.dispatch(setEditExpense(this.props.expense.id, expense));
    this.props.history("/dashboard");
  };
  onRemove = () => {
    this.props.dispatch(startRemoveExpense({ id: this.props.expense.id }));
    this.props.history("/dashboard");
  };
  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
        </div>
      </div>
    );
  }
}

export const EditExpensePage = (props) => {
  const history = useNavigate();
  return <EditExpensePageClass {...props} history={history} />;
};

const mapStateToProps = (state, ownProps) => {
  const pathArray = window.location.pathname.split("/");
  const id = pathArray[2];
  return {
    expense: state.expenses.find((expense) => expense.id === id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
