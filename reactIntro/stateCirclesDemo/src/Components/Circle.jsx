import React from 'react'

const Circle = (props) => {
  return (
    <div
        className="circle"
        style={{
            backgroundColor: props.color,
            position: 'absolute',
            top: props.y,
            left: props.x
        }}
        >
        {props.idx + 1}
    </div>
  )
}

export default Circle