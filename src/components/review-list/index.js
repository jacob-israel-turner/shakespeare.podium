import React, {Component} from 'react'
import {reviewService} from 'services'
import ReviewItem from './review-item'
import ReviewSummary from './review-summary'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  table: {
    width: '100%'
  }
})

export default class ReviewList extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      selectedReview: null
    }
  }
  async componentDidMount() {
    const reviews = await reviewService.getReviews()
    this.setState({reviews})
  }
  itemSelected({id}) {
    this.setState({selectedReview: id})
  }
  renderLoading() {
    return <h3>Loading...</h3>
  }
  renderList(reviews) {
    const rows = reviews.reduce((final, review) => {
        final.push(<ReviewItem 
          onClick={this.itemSelected.bind(this, review)} 
          key={review.id} {...review} 
        />)
        if (review.id === this.state.selectedReview) {
          final.push(<ReviewSummary id={review.id} key={review.id + 'SELECTED'} />)
        }
        return final
    }, [])
    return (
      <div>
        <h2>Reviews</h2> 
        <table className={css(styles.table)}>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
  render() {
    return (
      <div className={css(styles.container)}>
        {this.state.reviews.length ?
          this.renderList(this.state.reviews) :
          this.renderLoading()}
      </div>
    )
  }
}
