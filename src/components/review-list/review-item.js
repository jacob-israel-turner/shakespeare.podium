import React, {PropTypes} from 'react'
import moment from 'moment'
import {StyleSheet, css} from 'aphrodite'

const {func, string, number} = PropTypes

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // width: '100vw'
  }
})

export default function ReviewItem (props) {
  return (
    <tr onClick={props.onClick} className={css(styles.container)}>
      <td>{props.author}</td>
      <td>{props.rating}</td>
      <td>{moment(props.publish_date).calendar()}</td>
    </tr>
  )
}

ReviewItem.propTypes = {
  onClick: func,
  author: string.isRequired,
  rating: number.isRequired,
  publish_date(props, propName) {
    if (!Date.parse(props[propName])) throw new Error('publish_date should be parsable as a date')
  }
}
