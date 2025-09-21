import React, { useState } from 'react'

const Function_state_5 = () => {
  const [array, setarray]=useState([])
  const [inputdata, setinputdata]=useState("")

  function input (e){
    setinputdata(e.target.value)
  }
  function handle() {
    
    setarray([...array, inputdata])
    setinputdata("")
  }




  return (
 <>   <h2>Function_state_5</h2>
    <input onChange={input} type='text' value={inputdata}/>
    <button onClick={handle}>click me</button>
    <p> add in list :  </p>
    
    {array.map(function(arraya){
      return(
        <ul>
          <li>{arraya}</li>
        </ul>
        )

    })}
    </>

  )
}

export default Function_state_5