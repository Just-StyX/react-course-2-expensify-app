import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 

test('should correctly render ExpensesSummary with multiple expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={235468986670}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
}) 