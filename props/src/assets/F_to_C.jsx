import React from 'react'

const F_to_C = (props) => {
    const F = props.celsius*9/5+32

  return (
    <>
    <h2> Fahrenheit to celsius</h2>
    <h3>{props.celsius}°C = {F}°F</h3>
    </>
  )
}

export default F_to_C