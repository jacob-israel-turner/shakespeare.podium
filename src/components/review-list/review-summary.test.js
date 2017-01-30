import React from 'react'
import renderer from 'react-test-renderer'
import ReviewSummary from './review-summary'
import {StyleSheetTestUtils} from 'aphrodite'

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection()
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
});

describe('<ReviewSummary />', () => {
  const fakeId = 123

  it('renders without crashing', () => {
    const component = renderer.create(<ReviewSummary id={fakeId} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree.children[0].children[0]).toBe('LOADING') // TODO: This is fragile.  Re-write with Enzyme.
  });
})
