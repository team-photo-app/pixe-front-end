/* eslint-disable no-undef */
import React from 'react'
import App from '../App.js'
import renderer from 'react-test-renderer'

it('App renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON()
  expect(rendered).toBeNull()
})

it('App test against snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
