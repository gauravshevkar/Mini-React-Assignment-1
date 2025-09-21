import React from 'react'

const Boolean = ({stock})=>{
    const check = <p>item avaliable : {stock ? "yes" : "No"} </p>
    return(
        <>
            <h2>Boolean_props</h2>
            {check}
        </>
    )
}

export default Boolean