import React from 'react';
import App from './App'
import renderer from 'react-test-renderer'
import {StyleSheetTestUtils} from 'aphrodite'

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Shakespeare', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  });
})
