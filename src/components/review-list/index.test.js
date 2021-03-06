import React from 'react';
import renderer from 'react-test-renderer'
import ReviewList from './index';
import {StyleSheetTestUtils} from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<ReviewList />', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<ReviewList />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  });
})
