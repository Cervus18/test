import React,{useState,useEffect} from 'react'
import Checkbox from './Checkbox'

const ProductItem = ({id,type,price,productList,setProductList}) => {

  const [isChecked,setIsChecked] = useState(false)
  const [quantity,setQuantity] = useState("1")

  const handleProduct = ()=>{

    if(isChecked){
       setIsChecked(false)
       let newList = productList.filter(item => item.id !== id)
       setProductList(newList)
    }else{
       setIsChecked(true)
        let newList = [...productList, {id,price,quantity}]
        setProductList(newList)
       
    }
  }

  useEffect(() => {
    let newList =productList.map(product => product.id ==id ? {id,price,quantity} : product)
    setProductList(newList)

  }, [quantity])
  

  return (
    <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between","padding":"1rem 0"}}>
        <div style={{"display":"flex","alignItems":"center","justifyContent":"space-between"}}>
           <Checkbox onClick={handleProduct} isChecked={isChecked} /> <span>{type}</span>
           <select value={quantity} onChange={(e)=> setQuantity(e.target.value)} name="cars" id="cars" form="carform">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

          </select>
        </div>
         <span><strong>{price}$</strong> </span>
    </div>
  )
}

export default ProductItem