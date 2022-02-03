import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import toJSON from 'enzyme-to-json'
import { BrowserRouter, useNavigate } from 'react-router-dom'


test('should reder add expense page correctly', () => {
    const onSubmit = jest.fn();
    const history = jest.fn();
    //const wrapper = shallow(<BrowserRouter><AddExpensePage onSubmit={onSubmit} history={history}/></BrowserRouter>)
    //expect(toJSON(wrapper)).toMatchSnapshot()
})