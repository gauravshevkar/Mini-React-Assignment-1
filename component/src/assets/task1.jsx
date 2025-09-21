
import React, { Component } from 'react'

export default class task1 extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            name:"like user name "
        }
    }



  render() {
    return (
        <>
        <h3>{this.state.count}</h3>
        <h3>{this.state.name}</h3>

      <button onClick={()=>this.setState({count:this.state.count+1})}>LIKE </button>
      </>
    )
  }
}
