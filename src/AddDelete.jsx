import React from 'react'
import { useState } from 'react'

function AddDelete() {
  const[button, setButton ] = useState(" ");
  const state = useState(123)
  console.log(state)
  const onAddpress = () => {
    setButton("Add");
    console.log({button});
  }
   const onDeletepress = () =>{
    setButton("Delete");
    console.log({button})
   }
let [count,avg,spl] = [50,340,34]
console.log(count,avg,spl)

  return (
    <div className='bg-blue'><p>You Add  Delete</p>
    <button onClick={onAddpress}>Add</button>
    <button onClick={onDeletepress}>Delete</button>
    </div>
  )
}

export default AddDelete