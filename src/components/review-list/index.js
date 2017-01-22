import React, {Component} from 'react'
import {reviewService} from 'services'
import ReviewItem from './review-item'

export default class ReviewList extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }
  async componentDidMount() {
    const reviews = await reviewService.getReviews()
    this.setState({reviews})
  }
  itemSelected(item) {
    console.log(item)
  }
  renderLoading() {
    console.log('loading...')
    return <h3>Loading...</h3>
  }
  renderList(reviews) {
    console.log('list...')
    return (
      <div>
        <h2>Reviews</h2> 
        {reviews.map((review) => <ReviewItem onClick={this.itemSelected.bind(null, review)} key={review.id} {...review} />)}
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.state.reviews.length ?
          this.renderList(this.state.reviews) :
          this.renderLoading()}
      </div>
    )
  }
}
