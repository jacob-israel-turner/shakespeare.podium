import React from 'react'
import moment from 'moment'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // width: '100vw'
  }
})

export default function (props) {
  return (
    <tr onClick={props.onClick} className={css(styles.container)}>
      <td>{props.author}</td>
      <td>{props.rating}</td>
      <td>{moment(props.publish_date).calendar()}</td>
    </tr>
  )
}
