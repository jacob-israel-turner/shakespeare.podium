import React, { Component } from 'react'
import {ReviewList} from 'components'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  container: {
  }
})

class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <ReviewList />
      </div>
    );
  }
}

export default App;
