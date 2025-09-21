import React, { useState } from 'react'

const Function_state_6 = () => {
  const[flag, setflag]=useState(false)

  const change=()=>{
    setflag(!flag
    )
  }
  return (
    <>
      <h2>Function_state_6</h2>
      <p>{flag? "wellcome":"login"}</p>
      <button onClick={change}>{flag?"log_out":"login"}</button>
    </>

  )
}

export default Function_state_6