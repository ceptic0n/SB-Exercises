import React from 'react'

const FixedComponent = (props) => {
  return (
    <div>
		<p>Hello, I'm a FixedComponent!</p>
		<p>Here are some numders:</p>
		<p>{props.favNum}</p>
		<p>{props.favNum + 1}</p>
		<p>{props.favNum + 2}</p>
	</div>
  )
}


FixedComponent.defaultProps = {
	favNum: 10
};

export default FixedComponent