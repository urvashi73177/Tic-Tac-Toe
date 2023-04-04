import React from 'react'

const Square = (props) => {
  return (
    <div className='square' style={{border:'1px solid', height:'100px', width:'100px'}} onClick={props.onClick}>
        <h5>{props.value}</h5>


    </div>
  )
}

export default Square