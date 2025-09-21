import React from 'react'

const Children_prop = ({children}) => {
  return (
    <>
    <h2>Children_prop</h2>
    <div style={{border:"solid", height:100, width:180}}>
        {children}
    </div>
    </>
  )
}

export default Children_prop