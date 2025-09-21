import React from 'react'
import { useState } from 'react'

const Function_state_2 = () => {
  const [inpt, setinpt]= useState("")

const input=(a)=>{
  setinpt(a.target.value)
}

  return (
<>
      <h2>Function_state_2</h2>
    <p>User input</p>
    <input placeholder='type here' type='text' onChange={input}/>
    <p>{inpt}</p>
</>
  )
}

export default Function_state_2