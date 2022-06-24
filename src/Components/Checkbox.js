import React from 'react'

const Checkbox = ({isChecked,onClick}) => {

  return (
    !isChecked ? <div className='checkbox empty' onClick={onClick}></div> : <div onClick={onClick} className='checkbox full'><i className="fa-solid fa-check"></i></div> 
  )
  

 
}

export default Checkbox