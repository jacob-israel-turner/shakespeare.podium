import React, {Component} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {reviewService} from 'services'

const {getReviewSummary} = reviewService

const styles = StyleSheet.create({
  container: {
  }
})

export default class ReviewSummary extends Component{
  constructor() {
    super()
    this.state = {
      summary: null
    }
  }
  async componentDidMount() {
    const {body: summary} = await getReviewSummary(this.props.id)
    console.log(summary)
    this.setState({summary})
  }
  render() {
    return (
      <tr className={css(styles.container)}>
        <td>
          {this.state.summary ?
            this.state.summary :
            'LOADING'
          }
        </td>
      </tr>
    )
  }
}
