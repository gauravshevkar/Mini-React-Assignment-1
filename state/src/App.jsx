import { useState } from 'react'
import './App.css'
import Function_state from './assets/function_state'
import Class_state_ex1 from './assets/Class_state_ex1'
import Class_state_ex2 from './assets/Class_state_ex2'
import Class_state_ex3 from './assets/Class_state_ex3'
import Function_state_2 from './assets/Function_state_2'
import Function_state_3 from './assets/Function_state_3'
// import Function_state_4 from './assets/Function_state_4'
import Function_state_5 from './assets/Function_state_5'
import Function_state_6 from './assets/Function_state_6'
import Function_state_7 from './assets/Function_state_7'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Class_state_ex1/>
      <Class_state_ex2/>
      <Class_state_ex3/>
      <Function_state/>
      <Function_state_2/>
      <Function_state_3/>
      {/* <Function_state_4/> */}
      <Function_state_5/>
      <Function_state_6/>
      <Function_state_7/>
    </>
  )
}

export default App
