import React, { useState } from 'react'

function Even_odd() {
    const[value , setValue] = useState(1)
  return (
    <div>
         <h5> {value}</h5> 
         <h6>{ value% 2  ==0?'even':'odd'}</h6>
         <button onClick={()=>setValue(value+1)}>check even_odd</button>
    </div>
  )
}

export default Even_odd
