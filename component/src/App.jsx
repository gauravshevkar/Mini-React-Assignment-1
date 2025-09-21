import { useState } from 'react'
import './App.css'
import Task1 from './assets/task1'
import Nav from './assets/nav'
import Card from './assets/card'
import {Count1, Count2, Count4} from './assets/count'


function App() {

  return (
    <>

    <Nav/>
    {/* <Card/> */}
    <div className='a'>
    <Card title="react" des="React is a JS library"/>
    <Card title="SEcond coard" des="React is a JS library"/>
    </div>
    <Count1/>
    <hr/>
    <Count2/>
    <hr/>
    <Count4/>
    <hr/>
      <Task1/>
      
    </>
  )
}

export default App
