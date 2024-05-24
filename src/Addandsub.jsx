import React, { useState } from 'react'

const Addandsub = () => {
    const[input,setinput] = useState(10);
    const incrementvalue = () =>{
        setinput(input+1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
        console.log(input)
    }
    const decrementvalue = () =>{
        setinput(input-1)
    }
  return (
    <div>
    <p>Incremental and decremental value</p>
    <input type='text' id="input"
    value={input}/>
    <button type ="submit" onClick={incrementvalue}>
    +
    </button>
    <button type ="submit" onClick={decrementvalue}>
    -
    </button>
    </div>
  )
}

export default Addandsub