import React, {Component} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {reviewService} from 'services'

const {getReviewSummary} = reviewService

const styles = StyleSheet.create({
  cell: {
    padding: 10
  }
})

const loadBetweenTimes = [10, 500]

export default class ReviewSummary extends Component{
  constructor() {
    super()
    this.state = {
      summary: null
    }
  }
  async componentDidMount() {
    const startTime = new Date().getTime()
    const {body: summary} = await getReviewSummary(this.props.id)
    const timePassed = new Date().getTime() - startTime
    if (timePassed < loadBetweenTimes[0] || timePassed > loadBetweenTimes[1]) this.setState({summary})
    else this.timeout = setTimeout(() => this.setState({summary}), loadBetweenTimes[1] - timePassed)
  }
  componentWillUnmount() {
    if(this.timeout) clearTimeout(this.timeout)
  }
  render() {
    return (
      <tr>
        <td className={css(styles.cell)} colSpan='42'>
          {this.state.summary ?
            this.state.summary :
            'Fetching Summary...'
          }
        </td>
      </tr>
    )
  }
}
