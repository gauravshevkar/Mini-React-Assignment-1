import React from 'react'

const Spread_props = ({...data}) => {
  return (
    <><h2>Spread_props</h2>
    <div>
        <p>{data.name}</p>
        <p>{data.roll}</p>
        <p>{data.email}</p>
    </div>
    </>
  )
}

export default Spread_props