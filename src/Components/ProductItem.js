import React,{useState} from 'react'
import Checkbox from './Checkbox'

const ProductItem = ({id,type,price,productList,setProductList}) => {

  const [isChecked,setIsChecked] = useState(false)

  const handleProduct = ()=>{

    
   
    if(isChecked){
       setIsChecked(false)
       let newList = productList.filter(item => item.id !== id)
       setProductList(newList)
    }else{
       setIsChecked(true)
        let newList = [...productList, {id,price}]
        setProductList(newList)
       
    }
    

  }

  return (
    <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","padding":"1rem 0"}}>
        <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between"}}>
           <Checkbox onClick={handleProduct} isChecked={isChecked} /> <span>{type}</span>
        </div>
         <span><strong>{price}$</strong> </span>
    </div>
  )
}

export default ProductItem