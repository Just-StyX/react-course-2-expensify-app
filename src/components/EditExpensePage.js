import React from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = (props) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          dispatch({
            type: "EDIT_EXPENSE",
            id: props.expense.id,
            updates: expense
          });
          history("/");
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "REMOVE_EXPENSE",
            id: props.expense.id
          });
          history("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const pathArray = window.location.pathname.split("/");
  const id = pathArray[2];
  return {
    expense: state.expenses.find((expense) => expense.id === id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
