import React,{useState} from 'react'
import sezzle from "../images/sezzle.png"
import paypal from "../images/paypal.png"
import CreditForm from './CreditForm'


const Checkout = () => {
  
  const [showCreditForm, setShowCreditForm] = useState(false)

  return (
    <div id="checkout">
        <h2>Checkout</h2>
        <div onClick={()=> setShowCreditForm(!showCreditForm)} className='checkout-btn'  id="credit">
          <i class="fa-solid fa-credit-card"></i>
          Credit Card
        </div>
        {showCreditForm &&  <CreditForm/>}
        <div className='checkout-btn' id="paypal">
          <img src={paypal} alt="" />

        </div>      
        <div className='checkout-btn' id="sezzle">
          <img src={sezzle} alt="" />
        </div>
    </div>
  )
}

export default Checkout