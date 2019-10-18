import React from 'react'
import LoginView from '../src/views/auth/login-view'
import renderer from 'react-test-renderer'

it('LoginView renders correctly', () => {
  // const snap = shallow(<LoginView />)
  // expect(snap).toMatchSnapshot()
  const tree = renderer.create(<LoginView />).toJSON()
  expect(tree).toMatchSnapshot()
})
