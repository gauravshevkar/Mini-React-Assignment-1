import React, { useState, useState } from "react";

class Count1 extends React.Component{
    constructor(){
        super()
        this.state={
           count:0
        }
    }


    render(){
        return(
            <>
                <h2>{this.state.count}</h2>
                <button onClick={()=>this.setState({count:this.state.count+1})}>click for increment</button>
                <button onClick={()=>this.setState({count:this.state.count-1})}>click for decremrnt</button>
            </>
        )
    }
}






 class Count2 extends React.Component {
    constructor(){
        super()
        this.sta={
            count3:5    
        }
    }

  render() {
    return (
            <>
            <h2>{this.sta.count3}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>click for increment</button>
            <button onClick={()=>this.setState({count:this.state.count-1})}>click for D</button>

        
            </>
    )
  }
}

   
const Count4 = ()=>{
     let[ count5 , useState]= useState(8) 
    function fun() {
       count5++
       
    }
    function fun1() {
        count5=0
    }

    return(
        <>
        <h2>{count5}</h2>
        <button onClick={fun}>click me</button>
        <button onClick={fun1}>click me</button>

        </>
    )
}


export{Count1,Count2, Count4}