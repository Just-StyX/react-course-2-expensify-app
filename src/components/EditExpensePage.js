import React from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense } from "../actions/expenses";

class EditExpensePageClass extends React.Component {
  onSubmit = (expense) => {
    this.props.dispatch(editExpense(this.props.expense.id, expense));
    this.props.history("/");
  };
  onRemove = () => {
    this.props.dispatch(startRemoveExpense({ id: this.props.expense.id }));
    this.props.history("/");
  };
  render() {
    const { history } = this.props;
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
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
