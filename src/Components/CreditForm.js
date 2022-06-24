import React from 'react'

const CreditForm = () => {
  return (
    <form id="credit-form" >
        <div>
            <h4>First Name</h4>
           <input type="text" /> 
        </div>
        <div>
            <h4>Last Name</h4>
           <input type="text" /> 
        </div>
        <div>
            <h4>Credit Card Number</h4>
           <input type="number" /> 
        </div>
        <div>
            <h4>Security Code</h4>
           <input type="number" /> 
        </div>
        
        <div>
            <h4>Card Expiration</h4>
           <input type="date" /> 
        </div>
        <div>
           <div className="submit">Submit</div>
        </div>
    </form>
  )
}

export default CreditForm