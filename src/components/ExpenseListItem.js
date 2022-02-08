import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
      <Link className="lists-item" to={`/edit/${id}`}>
        <div>
          <h3 className="lists-item__title">{description}</h3>
          <span className="lists-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="lists-item__data">{numeral(amount / 100).format('$0,0.00')} </h3>
      </Link>
  );
};

export default ExpenseListItem;
