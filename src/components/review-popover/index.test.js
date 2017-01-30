import React from 'react';
import ReactDOM from 'react-dom';
import ReviewPopover from './index';
import {StyleSheetTestUtils} from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<ReviewList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReviewPopover />, div);
  });
})
