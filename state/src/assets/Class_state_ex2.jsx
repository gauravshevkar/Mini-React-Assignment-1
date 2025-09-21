import React from 'react'

class Class_state_ex2 extends React.Component {
  constructor(){
    super()
    this.state={
      name:"gaurav",
      age:25
    }
  }
  update(){
    this.setState({name:"ram" , age:52})

  }

  render() {
    return (
    <>
    <div>Class_state_ex2</div>
      <h2>{this.state.name}</h2>
      <h2>{this.state.age}</h2>
      <button onClick={()=>this.update()}>update_data</button>
    </>
  )
  }
}
export default Class_state_ex2