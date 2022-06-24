import React,{useState, useEffect} from 'react'
import logo from "../images/logo.jpeg"
import CategoryGrid from './CategoryGrid'
import FastShip from './FastShip'
import Form from './Form'
import Checkout from './Checkout'

const Payment = () => {
  
  const [productTotal,setProductTotal] = useState(0)
  const [productList,setProductList] = useState([]) 
  const [fastShip,setFastShip] = useState(false)
  const [fastShipValue,setFastShipValue]=useState(0)
  const [globalTotal,setGlobalTotal]  =useState(()=> fastShipValue + productTotal)

  useEffect(() => {
    if(fastShip>0){
      setFastShipValue(6.99)
    }else{
      setFastShipValue(0)
    }
  
  
  }, [fastShip])

  useEffect(()=>{
   if(productList.length ==0){
    setFastShip(false)
   }
  },[productList])

  return (
    <div id="payment" >
        <img id="logo" src={logo} alt="" />
        <CategoryGrid productList={productList} setProductList={setProductList}  setProductTotal={setProductTotal} />
        <FastShip fastShip={fastShip} setFastShip={setFastShip} productList={productList} />
        <div id="total">
            Order total:&nbsp; <strong>{fastShipValue + productTotal} $</strong> 
        </div>
        <Form/>
        <Checkout/>
        
    </div>
  )
}

export default Payment