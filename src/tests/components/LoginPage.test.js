import React from 'react'
import { shallow } from 'enzyme'
import { LogingPage } from '../../components/LoginPage'

test('should correctly render login page', () => {
   const wrapper = shallow(<LogingPage/>)
    expect(wrapper).toMatchSnapshot()
})

test('should call startLogin on button click', () => {
   const startLogin = jest.fn()
    const wrapper =  shallow(<LogingPage startLogin={startLogin} />)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})