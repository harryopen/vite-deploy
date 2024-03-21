import React from 'react'

function Square(props) {
  return (
    <div  onClick={props.onClick}className=' border-2 border-solid h-[100px] w-[100%] flex  justify-center items-center'>

     <h5>{props.value}</h5>      
    </div>
  )
}

export default Square
