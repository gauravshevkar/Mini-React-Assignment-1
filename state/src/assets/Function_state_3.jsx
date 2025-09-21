import React, { useState } from 'react'

const Function_state_3 = () => {
  const[word , setword]= useState("Hello")

  function change(){
    setword(word==="Hello"? "Wellcome" : "Hello")
  }

  return (
    <>
    <h2>Function_state_3</h2>
    <p>{word}</p>
    <button onClick={change} >click me</button>
    </>
  )
}

export default Function_state_3