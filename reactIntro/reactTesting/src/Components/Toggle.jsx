import React, { useState } from 'react'


const Toggle = () => {
    const [isShowing, setShowing] = useState(true);
  return (
    <div>
        <button onClick={() => setShowing(!isShowing)}>O</button>
        {isShowing && <h1>Hello</h1>}
    </div>
  )
}

export default Toggle