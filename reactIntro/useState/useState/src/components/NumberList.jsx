import React from 'react'
import { useState } from 'react'

const NumberList = () => {
    const [numbers, setNumbers] = useState([1,2,3,4,5,6,7])

    const remove = (num) => {
        setNumbers(numbers.filter(n=> n !== num))
        console.log("Removing: " + n);
    }
  return (
    <>
        {numbers.map(n =>(
            <li>
                <button onClick={()=> remove(n)}>{n}</button>
            </li>
        ))}
    </>
  )
}

export default NumberList