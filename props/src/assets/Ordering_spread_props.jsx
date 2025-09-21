import React from 'react'

const Ordering_spread_props = ({label, ...stylepro  }) => {
  return (
    <>
    <h2>Ordering_spread_props</h2>
    

    <button
    style={{
        ...stylepro,
        
        
    }}
    >{label}</button>
    </>
  )
}

export default Ordering_spread_props