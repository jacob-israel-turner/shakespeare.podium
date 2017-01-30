import React, {Component} from 'react'
import {reviewService, constants} from 'services'
import ReviewItem from './review-item'
import ReviewSummary from './review-summary'
import FilterControls from './filter-controls'
import {StyleSheet, css} from 'aphrodite'
import update from 'immutability-helper'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15
  },
  table: {
    width: '100%',
    border: '1px solid black',
    borderCollapse: 'collapse'
  }
})

export default class ReviewList extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      selectedReview: null,
      sort: {
        field: 'author',
        ascending: true
      }
    }
  }
  async componentDidMount() {
    const reviews = await reviewService.getReviews()
    this.setState({reviews})
  }
  itemSelected({id}) {
    this.setState({selectedReview: id})
  }
  handleFilterChange({field}) {
    if (this.state.sort.field === field) this.setState(update(this.state, {selectedReview: {$set: null}, sort: {ascending: {$set: !this.state.sort.ascending}}}))
    else this.setState(update(this.state, {selectedReview: {$set: null}, sort: {field: {$set: field}}}))
  }
  renderLoading() {
    return <h3>Loading...</h3>
  }
  renderList(reviews) {
    const rows = reviews
      .sort((a, b) => {
        if (this.state.sort.ascending) return  a[this.state.sort.field] > b[this.state.sort.field] ? 1 : -1
        else return a[this.state.sort.field] > b[this.state.sort.field] ? -1 : 1
      })
      .reduce((final, review) => {
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
        <h2>{prettify(constants.customerName)}'s Reviews</h2>
        <table className={css(styles.table) + ' review-table'}>
          <tbody>
            <FilterControls sort={this.state.sort.field} ascending={this.state.sort.ascending} onFiltersChanged={this.handleFilterChange.bind(this)} />
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
          this.renderList.call(this, this.state.reviews) :
          this.renderLoading()}
      </div>
    )
  }
}

function prettify(str) {
  return `${str.substring(0, 1).toUpperCase()}${str.substring(1)}`
}
