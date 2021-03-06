import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from '../selectors/expense-total'

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return(
        <div className="page-header">
            <div className="content-container">
                <h3 className="page-header__title">You are viewimg <span>{expenseCount}</span> {expenseWord} whose total amount is <span>{formattedExpensesTotal}</span></h3>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
      expenseCount: visibleExpenses.length,
      expensesTotal: selectExpensesTotal(visibleExpenses) 
    };
  };
  
  export default connect(mapStateToProps)(ExpenseSummary);