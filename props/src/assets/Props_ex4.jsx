import React from 'react'


// ramsham is a default value 

const Props_ex4 = ({name = "ramsham" , age}) => {
    
  return (
    <>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
    </>
  )
}

// ## second type for default value set 

// Props_ex4.defaultProps={
//     name:"geust"
// }
export default Props_ex4