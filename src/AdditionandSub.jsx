import React, { useState } from 'react'

const AdditionandSub = () => {


    
    const [inputvalue,setValues]=useState({num1:'',num2:''});
     
    
    const [num3,setNum3]=useState('');


const handleChange = (e) => {
    setValues({...inputvalue,[e.target.name]:e.target.value});
}

const submitvalue = () =>{
    setNum3(Number(inputvalue.num1)+Number(inputvalue.num2));
}

return (
    <div><p>Add the two numbers</p>
    <b>{num3}</b><br/>
    enter I Number <input name="num1" type='text' onChange={handleChange}/><br/>
    enter II
    
    
    
    
    
    Number <input name="num2" type='text' onChange={handleChange}/><br/>
    <button onClick={submitvalue}>result</button>
    </div>
  )

}

export default AdditionandSub