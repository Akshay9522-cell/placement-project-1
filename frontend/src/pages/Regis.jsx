import React, { useEffect, useState } from 'react'
import bank from '../imges/bank.jpg'
import URL from '../config'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { message } from 'antd';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const Regis = () => {
    
     const nav=useNavigate()
     const[inp,setInp]=useState({})
     const[img,setImg]=useState([])
      const [loading, setLoading] = useState(false);

      const handleInp=(e)=>{
         let name=e.target.name
         let value=e.target.value

         setInp(values=>({...values,[name]:value}))
      }

      const handleFile=(e)=>{
          let value=e.target.files
          setImg([...value,...img])
          console.log(img)

      }

      const validForm=()=>{
              
        const{name,dob,ssn,address,email,phone,deposit}=inp

       if(!name || !dob || !ssn || !address || !email || !phone || deposit){
          
       alert('please fill the detail')
          
           return false;
       }
    
         return true;
    }
     


         async function submitData() {
          setLoading(true); // Show loader
            const api=`${URL}/regis`

            try {
              const formData= new FormData()
              formData.append('name',inp.name)
              formData.append('dob',inp.dob)
              formData.append('ssn',inp.ssn)
              formData.append('address',inp.address)
              formData.append('email',inp.email)
              formData.append('phone',inp.phone)
  
              for(let i=0;i<img.length;i++){
                      
                  formData.append('image',img[i])
              }
              
              formData.append('accounttype',inp.accounttype)
              formData.append('deposit',inp.deposit)
  
              await axios.post(api,formData).then((res)=>{
                  console.log(res.data)
              })
               
               console.log(formData)
               message.success('Registration successfull')
               nav('/login')
            } catch (error) {
               console.log('error')
            } finally {
              setLoading(false); // Hide loader
          }
          
            
         }
   
         // form data validation

         if(loading){
          return<Loader/>
        }

  return (
    <>  
    <div className='regis'>
      <div className='form'>
      <h1 >Register Your Self</h1>
      <label for="full-name">Full Name:</label>
  <input type="text" id="full-name" name="name" required  onChange={handleInp} /><br/><br/>

  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob" required   onChange={handleInp} /><br/><br/>

  <label for="ssn">Social Security Number:</label>
  <input type="text" id="ssn" name="ssn" required onChange={handleInp} /><br/><br/>

  <label for="address">Address:</label>
  <input type="text" id="address" name="address" required  onChange={handleInp}/><br/><br/>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required  onChange={handleInp}/><br/><br/>

  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" required  onChange={handleInp}/><br/><br/>

  <label for="id-upload">Upload Identification (Passport, Driver's License, etc.):</label>
  <input type="file" id="id-upload" name="id-upload" required  onChange={handleFile}/><br/><br/>

  <label for="proof-of-address">Upload Proof of Address (Utility Bill, Bank Statement, etc.):</label>
  <input type="file" id="proof-of-address" name="poa" required  onChange={handleFile}/><br/><br/>

  <label for="account-type">Account Type:</label>
  <select id="account-type" name="accounttype" required  onChange={handleInp}>
    <option value="checking">Current</option>
    <option value="savings">Savings</option>
    <option value="business">Business</option>
  </select><br/><br/>

  <label for="deposit">Initial Deposit:</label>
  <input type="number" id="deposit" name="deposit" required  onChange={handleInp}/><br/><br></br>

  <label for="terms">
    <input type="checkbox" id="box" name="terms" required onChange={handleInp}/> <br />
    <p>I agree all the <span> Terms </span> and <span> Condition </span> </p>
  </label><br/><br/>
  <button onClick={submitData}>Submit</button>
    </div>

    


    </div>
   <ToastContainer/>
   
    </>

  )
}

export default Regis
