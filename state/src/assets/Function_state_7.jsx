import React, { useState } from 'react'

const Function_state_7 = () => {
  const [array, setarray]=useState([])
  const [inputdata, setinputdata] = useState("")
  const handle=()=>{
    setarray([...array, inputdata])
    setinputdata("")
  }

  return (
<>
    <h2>Function_state_7</h2>
    <input placeholder='enter name ' value={inputdata} required type='text' onChange={(e)=>setinputdata(e.target.value)} />
    <button onClick={handle}>click me</button>
    <ol>
      {array.map(function(data){
        return(
          <li>{data}</li>
          )})}
    </ol>
</>
  )
}

export default Function_state_7