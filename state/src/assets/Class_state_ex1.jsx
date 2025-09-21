import React from 'react'


class Class_state_ex1 extends React.Component {
  constructor(){
    super()
    this.state={
          count:0
    }
  
  }
        change() {
      this.setState({count:this.state.count+1})
     
      
  }


  render() {
    return (
      <>
      <div>Class_state_ex1</div>
      <h2>{this.state.count}</h2>
      <button onClick={()=>this.change()}>Click me </button>
      </>
    )
  }
}
export default Class_state_ex1