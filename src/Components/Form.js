import React,{useState} from 'react'
import Checkbox from './Checkbox'

const Form = () => {
  
    const [signedForAlerts,setSignedForAlerts] = useState(false)
    const [itemNumber,setItemNumber] = useState("")
    const [description,setDescription] = useState("")
    const [facebook,setFacebook] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")

    const handleSignedForAlerts = () => {
        setSignedForAlerts(!signedForAlerts)
    }


  return (
    <div className='form'>
        <div>
          <p><strong> Item number</strong></p>
          <input type="text" value={itemNumber} onChange={e => setItemNumber(e.target.value)} />  
        </div>
        <div>
          <p><strong> Item description</strong></p>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />  
        </div>
        <div>
          <p><strong> Facebook name</strong></p>
          <input type="text" value={facebook} onChange={e => setFacebook(e.target.value)}/>  
        </div>
        <div>
          <p><strong> Phone number</strong></p>
          <input type="number" value={phone} onChange={e => setPhone(e.target.value)}/>  
        </div>
        <div>
          <p><strong> Email</strong></p>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>  
        </div>
        <div style={{"display":"flex","alignItems":"center"}} >
          <Checkbox onClick={handleSignedForAlerts} isChecked={signedForAlerts} /> <p>Sign up for text alerts</p>
        </div>
        
        
     

    </div>
  )
}

export default Form