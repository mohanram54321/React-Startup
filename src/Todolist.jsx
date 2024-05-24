import React, { useEffect, useState } from 'react'

const Todolist = () => {
    const [text,setText] = useState("");
    const [todoLists,setTodoLists] = useState("");

    useEffect(()=>{
       console.log(todoLists);
    },[todoLists])


    function AddTask(){
        setTodoLists([...todoLists,text]);
        setText(""); 
    }

  return (
    <div className='App'>
    <div className='Container my-3'>
    <h1 className='display-2'>Todolist Application</h1>
    <div>
    <div className="input-group mb-3">
    <input 
    value={text}
    onChange={(e) =>{
        setText(e.target.value);
    }}
    type='text'
    class='form-control'
    placeholder='Enter your Todo list'
    />
    <button 
    class="btn btn-outline-secondary"
    type="button"
    id="button-addon2"
    onClick={() =>{
        AddTask();
    }}
    >
    Add task
    </button>
    </div>
    <ol className='list-group list-group-numbered'>
    {todoLists.map((singleitem, index, array) => {
        return <li className='list-group-item' key={index}>
        {singleitem}
        </li>
    })}
  </ol>
    </div>
    </div>
    </div>
  )
}

export default Todolist