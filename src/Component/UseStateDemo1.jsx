import React, { useState } from 'react'

export const UseStateDemo1 = () => {

    const[count,setCount]=useState(0)
    
    //count --> stateVariable..
    //setCount --> setter function --> it will use for update state variable..
    //useState(0) -->0 will act as inital value

    const increseCount =()=>{
        setCount(count+1)
        console.log(`count after incres`,count);
        
    }
  return (
    <div>
        <h1>UseStateDemo1</h1>
        
        <h1>Count={count}</h1>
        <button onClick={increseCount}>+</button>        
        </div>
    
  )
}
