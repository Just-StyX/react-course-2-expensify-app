import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux'
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from '../selectors/expense-total'

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return(
        <div>
            <h3>You are viewimg {expenseCount} {expenseWord} whose total amount is {formattedExpensesTotal}</h3>
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