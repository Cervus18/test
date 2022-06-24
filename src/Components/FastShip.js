import React, { useEffect, useState } from 'react'
import Checkbox from './Checkbox'


const FastShip = ({fastShip,setFastShip, productList}) => {


   
  


   const handleFastShip= () => {
    
    if(productList.length > 0){
          if(fastShip==true){
        setFastShip(false)
 
     }else{
        setFastShip(true)
   
     }
    }

 
   }

  return (
    <div id="fast-ship" style={{"display":"flex","alignItems":"center","width":"100%","color":"#387d74","background":"#F3FAF9"}}>
        <Checkbox onClick={handleFastShip} isChecked={fastShip}/> <span>Fast Ship &nbsp;&nbsp;&nbsp;&nbsp; <strong>6.99$</strong>  &nbsp; (1-2 days) </span>
    </div>
  )
}

export default FastShip