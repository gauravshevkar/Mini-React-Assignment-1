import { useState } from 'react'

import './App.css'
import F_to_C from './assets/F_to_C'
import Props_ex1 from './assets/props_ex1'
import Props_ex2 from './assets/Props_ex2'
import Props_ex3 from './assets/Props_ex3'
import Props_ex4 from './assets/Props_ex4'
import Props_ex5 from './assets/Props_ex5'
import Boolean from './assets/Boolean_props'
import Children_prop from './assets/Children_prop'
import Ordering_spread_props from './assets/Ordering_spread_props'
import Passing_expressions from './assets/Passing_expressions'
import Rest_props from './assets/Rest_props'
import Spread_props from './assets/Spread_props'

function App() {

  const name2 = "Ram"
  const age2 = 25


  const user_data={
    name3:"sham",
    age3:59
  }

  const celsius=52

  let x=12
  let y =15

  const data={
    name:"shevkar",
    roll:65,
    email:"gau@",
  }

  const stylepro={
    backgroundColor:"lightgreen",
      borderRadius:35,
      label:"Submit"
  }

   const stylepro2={
    backgroundColor:"red",

  }



 
// NOTE : first three ex. = without destructured  and other destructure
  return (
    <>
    <h3>Props Example 1</h3>
    <Props_ex1 name="Gaurav" age={55}/>
    <h3>Props Example 2</h3>
    <Props_ex2 name={name2} age={age2}/>
    <h3>Props Example 3</h3>
    <Props_ex3 name={user_data} age={user_data.age3}/>
    <h3>Props Example 4</h3>
    <Props_ex4  age={78}/>
    <h3>Props Example 5</h3>
    <Props_ex5 name="Gaurav5" age={555}/>
    <Boolean stock={true}/>
    {/* shotcut for boolean value */}
    <Boolean stock/>
    <Children_prop>
      <h6>Hii</h6>
      <p>Childern props **  </p>
    </Children_prop>

    <Ordering_spread_props {...stylepro} {...stylepro2}/>

    <Passing_expressions add={x+y}/>

    <Rest_props backgroundColor="lightgreen"
      borderRadius={15}
      borderWidth={0}
      label="click me"/>

    <Spread_props {...data}/>


    
    <hr/>

    <F_to_C celsius ={celsius}/>


    </>
  )
}

export default App
