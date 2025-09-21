import React from 'react'

const Rest_props = ({label, ...styledata}) => {
  return (
    <>
    <h2>Rest_props</h2>
    <button
    style={{
        ...styledata,
        border:"solid"
    }}
    >{label}</button>
    </>
  )
}

export default Rest_props