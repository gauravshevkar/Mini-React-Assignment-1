import React, { Component } from 'react'

export default class Class_state_ex3 extends Component {
    constructor(){
        super()
        this.state={
            user:{name:"gaurav", age:65, roll:55}
        }
    }

    update(){
        this.setState({...this.state.user, name:"sham"})
    }
  render() {
    return (
        <>
      <div>Class_state_ex3</div>
        <h2>{this.state.user.name}</h2>
        <h2>{this.state.user.age}</h2>
        <h2>{this.state.user.roll}</h2>

        <button onClick={()=>this.update()}>click me</button>

      </>
    )
  }
}
