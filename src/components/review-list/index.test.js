import React from 'react';
import ReactDOM from 'react-dom';
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
    const div = document.createElement('div');
    ReactDOM.render(<ReviewList />, div);
  });
})
