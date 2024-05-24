


import React, { useState } from 'react'

const Counter = () => {
    const [count,setcount] = useState(0);
    const[button,setbutton] = useState();
    console.log(count)

    const decrement= () =>{
        setbutton(count-1);
        console.log(decrement)
    }
  return (
    <div><p>Counter {count}</p>
    <button onClick={() => setcount(count+1)}>click me</button>
    <button onClick={() => setbutton(decrement)}>hello</button>   
    </div>
  )
}

export default Counter