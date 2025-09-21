import React from 'react'
import { useState } from "react";

const Function_state = () => {
  const[counter , setCounter] = useState(0)

  const Increment= ()=>{
    setCounter(counter+1)
  }
   function decrement(){
    setCounter(counter-1)
  }
     function reset(){
    setCounter(0)
  }
  return (
    <>
      <div>function_state_ex 1</div>
      <h3>{counter}</h3>
      <button onClick={Increment}>Increment</button>
      <button onClick={decrement}>Decremrnt</button>
      <button onClick={reset}>Reset</button>



    </>
  )
}

export default Function_state