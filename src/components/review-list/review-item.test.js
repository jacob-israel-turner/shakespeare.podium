import React from 'react'
import renderer from 'react-test-renderer'
import ReviewItem from './review-item'
import {StyleSheetTestUtils} from 'aphrodite'
import {shallow} from 'enzyme'

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection()
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
});

describe('<ReviewItem />', () => {
  const fakeReview = {
    onClick: jest.fn(),
    author: 'Jacob Turner',
    rating: 4.3,
    publish_date: new Date('01/12/17')
  }

  afterEach(() => fakeReview.onClick.mockReset())

  it('renders without crashing', () => {
    const component = renderer.create(<ReviewItem {...fakeReview} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  });

  it('renders its given props', () => {
    const component = renderer.create(<ReviewItem {...fakeReview} />)
    const tree = component.toJSON()
    expect(tree.children.length).toBe(3)
    const [name, rating, date] = tree.children.map(({children}) => children[0]);
    expect(name).toBe(fakeReview.author)
    expect(rating).toBe(fakeReview.rating)
    expect(new Date(date).getTime()).toBe(new Date(fakeReview.publish_date).getTime())
  })

  it('invokes its callback', () => {
    const component = shallow(<ReviewItem {...fakeReview} />)
    component.simulate('click')
    expect(fakeReview.onClick).toHaveBeenCalledTimes(1)
  })
})
