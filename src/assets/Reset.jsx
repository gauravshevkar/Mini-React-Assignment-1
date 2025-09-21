import React, { useState } from 'react'
import './reset.css'


const Reset = () => {
    const [pass, setpass]=useState("")  
    const [re_pass, setrepass]=useState("")
    const [showbtn1 , setshowbtn1] =useState("true")
    const [showbtn2 , setshowbtn2] =useState("true")


    const toggle =()=>{
      setshowbtn1(!showbtn1)
    }
    const toggle2 =()=>{
      setshowbtn2(!showbtn2)
    }
    // optional method 
//    let btn=showbtn1?"show":"hide"


// optional method 
    // let message=""
    // if (pass != "" && re_pass != "") {
    //     if (pass===re_pass) {
    //         message = "matched"
    //     } else {
    //         message = "not matched"
    //     }
    // }



const handle =()=>{
    alert('password is reset')
    setpass("")
    setrepass("")
}




  return (
    <>
        <div className=' container'>
            <h1>Reset Password</h1>
            <div className='inner_container'>
                <input placeholder='Type password' value={pass} type={showbtn2? 'password':'text'} onChange={(e)=>{setpass(e.target.value)}} required />
                <button onClick={toggle2}>{showbtn2? "Show":"Hide"}</button>
                <br/><br/>
                <input placeholder='Re-type Password' value={re_pass} type={showbtn1? 'password':'text'} onChange={(e)=>{setrepass(e.target.value)}} required/>
                <button onClick={toggle} >{showbtn1? "Show":"Hide"}</button>
                {pass !== "" && re_pass !== "" && (pass===re_pass? <span style={{color:'green'}}>password matched</span>:<span style={{color:'red'}}>not matched</span>)}
                
                <br/><br/><br></br>
                <button type='submit'  disabled={pass !== "" && re_pass !== "" && pass===re_pass? false : true} onClick={handle} className='btn_submit' >Submit</button>
            </div>
        </div>
    </>
  )
}

export default Reset