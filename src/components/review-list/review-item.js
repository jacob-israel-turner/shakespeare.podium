import React from 'react'

export default function (props) {
  return (
    <div onClick={props.onClick}>
      {props.author}: {props.rating}
    </div>
  )
}
