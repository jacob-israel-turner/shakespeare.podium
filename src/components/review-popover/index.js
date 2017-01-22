import React, {Component} from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    border: '1px solid black',
    width: '700px'
  }
})

export default class ReviewPopover extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        REVIEW
      </div>
    )
  }
}
